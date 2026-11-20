# Asia Golf Specialists (AGS) — Architectural & Deployment Ledger

This dated ledger documents all technical, SEO/GEO, measurement, and content modifications made to the Asia Golf Specialists production platform (`AGS-Website/spinning-juno`). Every metric shift in Google Analytics 4 (GA4) or Google Search Console (GSC) can be cross-referenced against deployments recorded here.

---

## [2026-10-28] — Next-Gen Architecture Lock, Schema De-Collision, LLMs.txt Synchronization & Anti-Spaghetti Release

### Summary
Executed the comprehensive 6-Phase Master Remediation Plan: permanently locked all 14 Signature Tour pages to the Next-Gen template (`NextGenTourTemplate.tsx`) as pure Server Components (removing 12,614 lines of dead Classic toggle code and 14 redundant `layout.tsx` wrappers), resolved all Schema.org multi-type collisions on `/packages/[slug]/`, `/tours/`, and `/destinations/{country}/`, populated all 22 remaining course architects, rebuilt `public/llms.txt` and `public/llms-full.txt` from verified source specs, eliminated unnecessary `"use client"` hydration boundaries and 4 dead components, consolidated the 3 duplicate destination `[slug]/page.tsx` routes into `src/components/DestinationArticleTemplate.tsx`, upgraded the 22 generic accommodation Curator's Briefs and 421 package Curator's Briefs, and added Gate 12 to `scripts/pre-flight-check.mjs`.

---

## [2026-10-22] — Master Costs Matrix Implementation & Zero-Margin Rack Rate Calibration

### Summary
Established the centralized **Costs Reference Database / Matrix** (`src/data/costs-matrix.json`) based on verified published retail (rack) rates for golf courses and luxury accommodations, with private vehicle logistics locked at a flat **$120 USD/day**. Implemented a strict **0% operator margin** policy (relying exclusively on confidential wholesale supplier spreads) and recalibrated all 14 Signature Tours and 421 Packages sitewide.

### Detailed Changes

1. **Master Costs Matrix (`src/data/costs-matrix.json`):**
   - Catalogued 36 marquee golf courses across Vietnam, Thailand, and Cambodia with published weekday/weekend retail rates and baseline reference fees (including green fee, cart, and mandatory caddie).
   - Catalogued 20 luxury accommodations and pool villas with room night and twin-share per-golfer rates.
   - Standardized private vehicle logistics to a flat **$120 USD/day** total for dedicated high-top VIP transit vans (allocated per golfer: Solo = $120, Couples = $60, 4-Ball = $30, 8-Man = $15, 12-Man = $20).
   - Embedded currency baseline: Primary USD, Secondary AUD (exchange multiplier 1.54 / 0.65).

2. **14 Signature Tour Pricing Recalibration (`src/app/tours/*/page.tsx`):**
   - Recalculated all 14 signature tours using pure rack rate summation + flat transport (0% operator margin added on top).
   - Synchronized visible Curator's Brief copy, Tour Blueprint tables, and Schema.org `offers.priceSpecification.minPrice`:
     - Central Coast Classic: $1,550 USD (~$2,390 AUD)
     - Coastal Sprint: $730 USD (~$1,125 AUD)
     - Hoi An Beachfront Bliss: $1,350 USD (~$2,080 AUD)
     - Vietnam Central Coast (An Bang): $1,550 USD (~$2,390 AUD)
     - Bangkok & Hua Hin Fairways: $1,650 USD (~$2,540 AUD)
     - Royal Siam Golf Tour: $1,390 USD (~$2,140 AUD)
     - Lanna Heritage Golf Trail: $975 USD (~$1,500 AUD)
     - Saigon & Shores Escape: $1,815 USD (~$2,795 AUD)
     - Cambodia Angkor Odyssey: $1,400 USD (~$2,155 AUD)
     - Khmer Temple Trail: $1,000 USD (~$1,540 AUD)
     - Khmer Kingdom Links: $2,040 USD (~$3,140 AUD)
     - Emperor's Fairways: $2,725 USD (~$4,195 AUD)
     - Indochina Golden Age: $3,190 USD (~$4,910 AUD)
     - Grand Vietnam Odyssey: $3,380 USD (~$5,205 AUD)

3. **421 Package JSONs Synchronized (`src/data/packages/*.json`):**
   - Executed programmatic audit and recalculation of all 421 package JSONs via `scratch/update_package_pricing_from_matrix.js`.
   - Applied exact duration (days/nights/rounds), destination golf rates, property-specific twin-share accommodation rates, and group transport allocations.
   - Synchronized `guidePriceFrom` (AUD) and `guidePriceCurrency` ('AUD') such that SSR templates and Schema.org `priceSpecification.minPrice` (`Math.round(guidePriceFrom * 0.65)`) cleanly recover exact USD rack rate benchmarks with 0 rounding errors.

4. **Sitemap & Governance Lastmod Synchronization:**
   - Synchronized `scripts/update-lastmod-manifest.mjs`: 435 source files recorded with fresh SHA-1 hashes in `src/data/lastmod-manifest.json`.
   - Verified 100% compliance across all 11 automated pre-flight quality checks (`node scripts/pre-flight-check.mjs` — 0 errors, 0 warnings).

---

## [2026-10-22] — P2/P3 Comprehensive Release: CTR Optimization, Dual Currency Standard, GEO Tour Blueprints & Governance Hardening

### Summary
Comprehensive execution of Priority 2 (Commercial Strengthening, Title/CTR Rewrites) and Priority 3 (GEO Tour Blueprint Integration, Governance Gates 10 & 11) following strategic approval of Option A for international currency presentation.

### Detailed Changes

1. **Option A Dual-Currency Architecture (Universal Benchmark + Local Context):**
   - **Package Catalog (`/packages/`, `/packages/[slug]/`):** Updated SSR rendering to display dual currency on all 421 packages: `From $X USD (~$Y AUD)`.
   - **Schema.org Harmonization:** Standardized package `priceSpecification` to `priceCurrency: "USD"` and `minPrice: Math.round(data.guidePriceFrom * 0.65)`, aligning packages with Signature Tours and global travel standards for Google Rich Results.
   - **Zero Client Latency:** 100% static Next.js prerendering with zero Cumulative Layout Shift (CLS) and zero client hydration overhead.

2. **CTR Title & Meta Description Rewrites (Top 20 Striking-Zone URLs, Pos 4.0–15.0):**
   - Optimized titles and meta descriptions across the top 20 URLs by search impressions from the 22 Oct 2026 GSC export.
   - Enforced title length limit (≤54 chars base, 30–60 chars total with ` | AGS`).
   - Enforced meta description limit (90–160 chars) with zero markdown table leaks or mid-sentence truncations.
   - Corrected geographic attribution errors (e.g. Hua Hin / Chiang Mai conflation, Siam Country Club Hua Hin vs. Pattaya).
   - URLs rewritten:
     - `/blog/best-time-to-golf-in-vietnam/`
     - `/blog/best-time-to-golf-in-thailand/`
     - `/blog/beginners-guide-golf-in-vietnam/`
     - `/blog/caddie-culture-southeast-asia/`
     - `/blog/ba-na-hills-golf-club-review/`
     - `/destinations/vietnam/true-cost-golf-vietnam-2026-da-nang-pricing-guide/`
     - `/destinations/cambodia/cambodia-nightlife-asana-wooden-house-siem-reap/`
     - `/blog/top-10-golf-courses-vietnam-2026/`
     - `/blog/vietnam-vs-thailand-golf-holiday/`
     - `/blog/best-golf-courses-da-nang-hoi-an-ranked-2026/`
     - `/blog/hoiana-shores-golf-club-review/`
     - `/destinations/vietnam/flying-to-vietnam-golf-clubs-australia-2026/`
     - `/destinations/cambodia/cambodia-culture-sbek-thom-shadow-puppets/`
     - `/destinations/vietnam/vietnam-vs-thailand-golf-trip-australians-2026/`
     - `/blog/da-nang-golf-guide-2026/`
     - `/destinations/thailand/battle-for-best-19th-hole-hua-hin/`
     - `/blog/is-cambodia-good-for-golf/`
     - `/destinations/vietnam/best-golf-courses-vietnam-australian-groups-2026-2027/`
     - `/destinations/thailand/siam-country-club-old-course-or-plantation/`
     - `/blog/golf-holidays-from-australia/`

3. **Commercial Hub & Australian Intent Strengthening:**
   - **Accommodations Hub (`/accommodations/`):** Upgraded the table section to a rich "Stay & Play Accommodation Blueprint" table highlighting transfer times, marquee properties, nearby championship courses, and athletic recovery amenities. Optimized metadata for head terms ("Luxury Golf Resorts & Villas | SE Asia").
   - **Beginner's Guide (`beginners-guide-golf-in-vietnam.json`):** Injected a responsive, high-converting commercial playlist card grid directly linking to marquee courses (Hoiana Shores, BRG Norman, Ba Na Hills), signature tours (The Central Coast Classic, The Coastal Sprint), and 5-star villas (Four Seasons Nam Hai, Hoiana Resort & Suites).
   - **Australian Flight Logistics:** Purged all occurrences of Thai Airways across the codebase. Enforced approved airline roster: Singapore Airlines, Vietnam Airlines, Jetstar, VietJet, and AirAsia.

4. **Signature Tour GEO Blueprint Pass (All 14 Signature Tours):**
   - Elevated all 14 Signature Tour pages (`/tours/*/`) with a structured "Tour Blueprint & Logistics at a Glance" data table embedded directly inside the Curator's Brief.
   - Grounded each tour with property-specific editorial briefs (eliminating shared generic boilerplate).
   - Standardized guide pricing display to dual currency (`$X USD (~$Y AUD)`).
   - Fixed latent nested anchor tag bug (`<a><a>...</a></a>`) discovered in `src/app/tours/cambodia-angkor-odyssey/page.tsx`.
   - Corrected duration mismatches in tour layouts (e.g. 14-Day Grand Vietnam Odyssey, 8-Day Bangkok & Hua Hin Fairways).

5. **Pre-Flight Quality Gate Hardening (11 Automated Gates):**
   - Added **Gate 10:** Package & Signature Tour Indexability & Schema Lock (validating 421 packages, 14 tours, and sitemap synchronization).
   - Added **Gate 11:** Banned Content, Nested Anchor & Airline Audit (validating 0 nested anchors, 0 Thai Airways mentions in flight guides, and 0 generic banned boilerplates across 776 files).

---

## [2026-10-21] — P0 & P1 Core Infrastructure & Governance Release

### Summary
Fixed the critical measurement outage caused by the 12 Oct consent banner configuration, eliminated duplicate lead tracking, restored truthful sitemap lastmod timestamps, and completed the first comprehensive 9-gate pre-flight architecture audit.

### Detailed Changes
1. **P0 Measurement Resolution:**
   - Repaired `src/components/ConsentAnalytics.tsx` to use region-scoped Google Consent Mode v2 (`region: ['AT', 'BE', 'BG', ... 'VN']`). Non-EEA markets (AU, US, SG, NZ) now default to `analytics_storage: 'granted'`, recovering lost conversion and session tracking.
   - Removed duplicate `gtag('event', 'generate_lead')` from `src/app/quote/page.tsx` and `src/components/ArticleCTA.tsx`. Form submissions now track cleanly via GTM `form_submission_enquiry`.
2. **P1 Indexing & Truthful Lastmod Manifest:**
   - Created `scripts/update-lastmod-manifest.mjs` calculating SHA-1 hashes of source files into `src/data/lastmod-manifest.json`.
   - Updated `src/app/sitemap.ts` to output genuine file-level modification dates rather than blanket `new Date()`.
   - Preserved all 421 long-tail golf package variants in the sitemap for programmatic search indexing.
   - Wrapped `mailto:` links in `src/app/pro-partnership/deck/page.tsx` in `<!--email_off-->` to prevent Cloudflare email obfuscation 404 crawler traps.
3. **P2 Initial Passage & Link Repairs:**
   - Repaired 33 JSON articles with mid-word truncations.
   - Fixed 3 malformed nested anchor tags in Thailand and Vietnam guides.
   - Purged generic "far beyond the 18th green" boilerplate across all 15 category hubs.
4. **Governance:**
   - Built `scripts/pre-flight-check.mjs` with Gates 1 through 9.
