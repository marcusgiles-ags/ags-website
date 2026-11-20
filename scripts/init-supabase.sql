-- ============================================================
-- AGS Supabase Schema — Production (PostgreSQL)
-- Project: fmbkszbjtoqmswaxvbqa | Region: Singapore (ap-southeast-1)
-- Run in: Supabase Dashboard → SQL Editor → New Query → Paste → Run
-- Compliance: GDPR + Vietnam Decree 356 (PDPL 2026)
-- ============================================================

-- Enable pgcrypto for IP hashing
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- ============================================================
-- TABLE 1: web_inquiries
-- Core lead capture: quote requests, guide downloads, general enquiries
-- All PII fields present; IP stored as SHA-256 hash (GDPR pseudonymization)
-- ============================================================
CREATE TABLE IF NOT EXISTS web_inquiries (
  id                  BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  -- Core contact
  name                VARCHAR(150)    NOT NULL,
  email               VARCHAR(254)    NOT NULL,
  phone               VARCHAR(30)     DEFAULT NULL,
  nationality         VARCHAR(80)     DEFAULT NULL,
  -- Trip intent
  destination         VARCHAR(150)    DEFAULT NULL,
  preferred_regions   TEXT[]          DEFAULT NULL,       -- e.g. {'Vietnam','Thailand'}
  group_size          VARCHAR(20)     DEFAULT NULL,
  group_dynamics      JSONB           DEFAULT NULL,       -- e.g. {"type":"corporate","mix":"mixed handicap"}
  travel_date         VARCHAR(50)     DEFAULT NULL,
  hotel_tier          VARCHAR(80)     DEFAULT NULL,
  handicap            VARCHAR(10)     DEFAULT NULL,       -- Golfer-specific
  message             TEXT            DEFAULT NULL,
  source_url          VARCHAR(500)    DEFAULT NULL,
  inquiry_type        TEXT            NOT NULL DEFAULT 'general'
                        CHECK (inquiry_type IN ('quote','guide','general','tournament')),
  -- Consent (GDPR Art. 7 + Decree 356 Art. 9)
  privacy_consent     BOOLEAN         NOT NULL DEFAULT FALSE,
  marketing_consent   BOOLEAN         NOT NULL DEFAULT FALSE,
  policy_version      VARCHAR(30)     NOT NULL DEFAULT 'v1.0',  -- e.g. 'v2.1-PDPL-2026'
  consent_timestamp   TIMESTAMPTZ     NOT NULL DEFAULT NOW(),
  -- Privacy-preserving identifiers (GDPR pseudonymization)
  ip_hash             VARCHAR(64)     DEFAULT NULL,       -- SHA-256 of client IP
  -- CRM / scoring
  lead_score          SMALLINT        DEFAULT 0,
  created_at          TIMESTAMPTZ     NOT NULL DEFAULT NOW(),
  updated_at          TIMESTAMPTZ     NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_wi_email       ON web_inquiries (email);
CREATE INDEX IF NOT EXISTS idx_wi_created     ON web_inquiries (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_wi_type        ON web_inquiries (inquiry_type);
CREATE INDEX IF NOT EXISTS idx_wi_destination ON web_inquiries (destination);

COMMENT ON TABLE  web_inquiries IS 'Core AGS lead table — all form submissions. PII present; access via service_role only.';
COMMENT ON COLUMN web_inquiries.ip_hash IS 'SHA-256 hash of raw IP. Raw IP never stored — GDPR pseudonymization + Decree 356 Art. 28.';
COMMENT ON COLUMN web_inquiries.policy_version IS 'Version string of Privacy Policy shown at time of consent. Required for Decree 356 Art. 9 audit trail.';
COMMENT ON COLUMN web_inquiries.group_dynamics IS 'JSONB blob: type (corporate/leisure/mixed), handicap_range, special_requirements.';

-- Auto-update updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = NOW(); RETURN NEW; END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_wi_updated_at
  BEFORE UPDATE ON web_inquiries
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================================
-- TABLE 2: tournament_signups
-- Horn Blower's Invitational and future AGS events
-- ============================================================
CREATE TABLE IF NOT EXISTS tournament_signups (
  id                  BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name                VARCHAR(150)    NOT NULL,
  email               VARCHAR(254)    NOT NULL,
  handicap            VARCHAR(10)     DEFAULT NULL,
  home_club           VARCHAR(200)    DEFAULT NULL,
  dietary_reqs        VARCHAR(300)    DEFAULT NULL,
  shirt_size          TEXT            DEFAULT NULL
                        CHECK (shirt_size IN ('XS','S','M','L','XL','XXL','XXXL')),
  privacy_consent     BOOLEAN         NOT NULL DEFAULT FALSE,
  marketing_consent   BOOLEAN         NOT NULL DEFAULT FALSE,
  policy_version      VARCHAR(30)     NOT NULL DEFAULT 'v1.0',
  consent_timestamp   TIMESTAMPTZ     NOT NULL DEFAULT NOW(),
  ip_hash             VARCHAR(64)     DEFAULT NULL,
  created_at          TIMESTAMPTZ     NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_ts_email   ON tournament_signups (email);
CREATE INDEX IF NOT EXISTS idx_ts_created ON tournament_signups (created_at DESC);

COMMENT ON TABLE tournament_signups IS 'AGS tournament and event registrations.';

-- ============================================================
-- TABLE 3: consent_logs
-- Granular consent audit trail — every grant and withdrawal
-- Decree 356 Art. 9: consent must be logged with timestamp + policy version
-- GDPR Art. 7(1): controller must demonstrate consent was given
-- ============================================================
CREATE TABLE IF NOT EXISTS consent_logs (
  id                    BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email                 VARCHAR(254)    DEFAULT NULL,       -- Nullable for anonymous cookie consent
  consent_type          TEXT            NOT NULL
                          CHECK (consent_type IN ('analytics','marketing','privacy','all')),
  consent_given         BOOLEAN         NOT NULL DEFAULT FALSE,
  policy_version        VARCHAR(30)     NOT NULL DEFAULT 'v1.0',
  ip_hash               VARCHAR(64)     DEFAULT NULL,       -- Hashed, never raw
  user_agent_hash       VARCHAR(64)     DEFAULT NULL,       -- Hashed for fingerprint audit
  source_form           VARCHAR(100)    DEFAULT NULL,       -- e.g. 'quote-form','guide-download'
  withdrawal_timestamp  TIMESTAMPTZ     DEFAULT NULL,       -- Populated on right-to-withdraw requests
  created_at            TIMESTAMPTZ     NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_cl_email     ON consent_logs (email);
CREATE INDEX IF NOT EXISTS idx_cl_created   ON consent_logs (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_cl_type      ON consent_logs (consent_type);

COMMENT ON TABLE  consent_logs IS 'Full GDPR + Decree 356 consent audit trail. Never delete records — set withdrawal_timestamp instead.';
COMMENT ON COLUMN consent_logs.withdrawal_timestamp IS 'If set, this consent record has been withdrawn. Used for right-to-erasure requests.';

-- ============================================================
-- TABLE 4: behavioral_events
-- Course/destination interest tracking — Decree 356 "Sensitive Data"
-- Deliberately SEPARATED from PII tables
-- lead_id FK is nullable — only set if user subsequently converts
-- ============================================================
CREATE TABLE IF NOT EXISTS behavioral_events (
  id              BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  session_id      VARCHAR(64)     NOT NULL,               -- Anonymous browser session hash
  event_type      TEXT            NOT NULL
                    CHECK (event_type IN (
                      'course_view','destination_view','package_view',
                      'accommodation_view','blog_read','gallery_interact',
                      'itinerary_viewed','cta_click','form_start','guide_download'
                    )),
  entity_slug     VARCHAR(200)    DEFAULT NULL,           -- e.g. 'hoiana-shores','da-nang'
  entity_type     TEXT            DEFAULT NULL
                    CHECK (entity_type IN ('course','destination','package','accommodation','blog','general')),
  dwell_seconds   SMALLINT        DEFAULT 0,              -- Time on page/section
  referrer        VARCHAR(500)    DEFAULT NULL,
  utm_source      VARCHAR(100)    DEFAULT NULL,
  utm_medium      VARCHAR(100)    DEFAULT NULL,
  utm_campaign    VARCHAR(100)    DEFAULT NULL,
  lead_id         BIGINT          DEFAULT NULL            -- FK to web_inquiries if converted
                    REFERENCES web_inquiries(id) ON DELETE SET NULL,
  created_at      TIMESTAMPTZ     NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_be_session  ON behavioral_events (session_id);
CREATE INDEX IF NOT EXISTS idx_be_type     ON behavioral_events (event_type);
CREATE INDEX IF NOT EXISTS idx_be_slug     ON behavioral_events (entity_slug);
CREATE INDEX IF NOT EXISTS idx_be_created  ON behavioral_events (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_be_lead     ON behavioral_events (lead_id);

COMMENT ON TABLE  behavioral_events IS 'Anonymous behavioral tracking. Decree 356 Art. 6: sensitive processing kept separate from PII. No email/name stored here.';
COMMENT ON COLUMN behavioral_events.session_id IS 'SHA-256 of client fingerprint. Never linked to email unless lead_id is set (i.e., user has converted and consented).';

-- ============================================================
-- ROW LEVEL SECURITY (RLS)
-- All tables locked to service_role only.
-- The anon key (NEXT_PUBLIC_SUPABASE_ANON_KEY) cannot read or write ANY data.
-- All DB writes go through authenticated Next.js API routes (server-side).
-- ============================================================
ALTER TABLE web_inquiries      ENABLE ROW LEVEL SECURITY;
ALTER TABLE tournament_signups ENABLE ROW LEVEL SECURITY;
ALTER TABLE consent_logs       ENABLE ROW LEVEL SECURITY;
ALTER TABLE behavioral_events  ENABLE ROW LEVEL SECURITY;

-- Only service_role can do anything
CREATE POLICY "service_role_all" ON web_inquiries
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "service_role_all" ON tournament_signups
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "service_role_all" ON consent_logs
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "service_role_all" ON behavioral_events
  FOR ALL USING (auth.role() = 'service_role');

-- ============================================================
-- ANONYMIZED VIEWS — Data Broking Readiness
-- These views strip ALL PII. Safe for partner export and BI tools.
-- No name, email, phone, ip_hash, or session_id exposed.
-- ============================================================

-- View 1: Golf Market Insights
-- Aggregate demand signals for partner market reports
CREATE OR REPLACE VIEW vw_golf_market_insights AS
SELECT
  inquiry_type,
  destination,
  preferred_regions,
  -- Anonymize nationality to continent/region grouping
  CASE
    WHEN nationality IN ('AU','NZ') THEN 'ANZ'
    WHEN nationality IN ('GB','IE') THEN 'UK/Ireland'
    WHEN nationality IN ('SG','MY','HK','TW') THEN 'APAC-Financial'
    WHEN nationality IN ('US','CA') THEN 'Americas'
    ELSE 'Other'
  END AS origin_region,
  -- Handicap banding (no exact value shared)
  CASE
    WHEN handicap::NUMERIC <= 5  THEN 'Scratch–5'
    WHEN handicap::NUMERIC <= 12 THEN '6–12'
    WHEN handicap::NUMERIC <= 24 THEN '13–24'
    ELSE '25+'
  END AS handicap_band,
  group_size,
  hotel_tier,
  -- Temporal signals
  DATE_TRUNC('month', created_at) AS inquiry_month,
  -- Aggregation
  COUNT(*) AS inquiry_count,
  AVG(lead_score) AS avg_lead_score
FROM web_inquiries
WHERE privacy_consent = TRUE   -- Only consented records in views
GROUP BY
  inquiry_type, destination, preferred_regions, origin_region,
  handicap_band, group_size, hotel_tier, inquiry_month
ORDER BY inquiry_month DESC, inquiry_count DESC;

COMMENT ON VIEW vw_golf_market_insights IS 'PII-free aggregate lead data. Safe for partner export as Golf Market Intelligence. No name/email/IP in output.';

-- View 2: Behavioral Heatmap
-- Course and destination engagement for product and partner insights
CREATE OR REPLACE VIEW vw_behavioral_heatmap AS
SELECT
  entity_slug,
  entity_type,
  event_type,
  utm_source,
  utm_campaign,
  DATE_TRUNC('week', be.created_at)  AS week,
  COUNT(*)                            AS event_count,
  AVG(dwell_seconds)                  AS avg_dwell_seconds,
  -- Conversion rate: events where session later submitted a lead form
  ROUND(
    COUNT(DISTINCT be.lead_id)::NUMERIC / NULLIF(COUNT(DISTINCT be.session_id), 0) * 100,
    2
  ) AS conversion_rate_pct
FROM behavioral_events be
GROUP BY entity_slug, entity_type, event_type, utm_source, utm_campaign, week
ORDER BY week DESC, event_count DESC;

COMMENT ON VIEW vw_behavioral_heatmap IS 'Anonymous session engagement heatmap. No PII. Shows course/destination popularity, dwell time, and conversion rates.';

-- View 3: Consent Compliance Summary (for DPO/audit reporting)
CREATE OR REPLACE VIEW vw_consent_audit_summary AS
SELECT
  policy_version,
  consent_type,
  source_form,
  DATE_TRUNC('day', created_at)    AS consent_date,
  COUNT(*) FILTER (WHERE consent_given = TRUE)  AS consents_granted,
  COUNT(*) FILTER (WHERE consent_given = FALSE) AS consents_refused,
  COUNT(*) FILTER (WHERE withdrawal_timestamp IS NOT NULL) AS consents_withdrawn
FROM consent_logs
GROUP BY policy_version, consent_type, source_form, consent_date
ORDER BY consent_date DESC;

COMMENT ON VIEW vw_consent_audit_summary IS 'DPO compliance dashboard view. Shows consent grant/refuse/withdrawal counts by policy version. Safe for regulator reporting.';
