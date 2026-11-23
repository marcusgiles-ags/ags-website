import { NextResponse } from 'next/server';
import { z } from 'zod';
import {
  getSupabaseServerClient,
  hashIp,
  CURRENT_POLICY_VERSION,
  type DbConsentLogInsert,
  type DbBehavioralEvtInsert,
} from '@/lib/supabase';
import { sendDualNotification, emailTemplate } from '@/lib/mailer';

const GuideSchema = z.object({
  name:              z.string().min(1),
  email:             z.string().email(),
  region:            z.string().optional(),
  referralCode:      z.string().optional(),
  privacy_consent:   z.boolean(),
  marketing_consent: z.boolean().default(false),
  metadata: z.object({
    lead_source:        z.string().optional(),
    landing_page:       z.string().optional(),
    first_landing_page: z.string().optional(),
    utm_source:         z.string().optional(),
    utm_medium:         z.string().optional(),
    utm_campaign:       z.string().optional(),
    ref:                z.string().optional(),
  }).optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const d = GuideSchema.parse(body);

    if (!d.privacy_consent) {
      return NextResponse.json({ error: 'Privacy consent required' }, { status: 400 });
    }

    const rawIp  = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const ipHash = hashIp(rawIp);

    const refCode = (d.referralCode || d.metadata?.ref || '').trim().toUpperCase();
    const utmSource = d.metadata?.utm_source?.trim() || d.metadata?.lead_source || null;
    const utmMedium = d.metadata?.utm_medium?.trim() || null;
    const utmCampaign = d.metadata?.utm_campaign?.trim() || null;
    const firstLanding = d.metadata?.first_landing_page?.trim() || '';
    const sourceUrl = (d.metadata?.landing_page || firstLanding || '').slice(0, 500);

    const db = getSupabaseServerClient();

    // ── 1. Insert guide download lead ──────────────────────────────
    let leadId: number | null = null;
    let dbPersisted = false;
    try {
      const { data, error } = await db
        .from('web_inquiries')
        .insert({
          name:              d.name,
          email:             d.email,
          destination:       d.region  || null,
          source_url:        sourceUrl || null,
          message:           refCode ? `[Partner Ref: ${refCode}] Portfolio Guide Download` : null,
          inquiry_type:      'guide',
          privacy_consent:   true,
          marketing_consent: d.marketing_consent,
          policy_version:    CURRENT_POLICY_VERSION,
          ip_hash:           ipHash,
        })
        .select('id')
        .single();

      if (error) throw error;
      leadId = data?.id ?? null;
      dbPersisted = leadId !== null;
    } catch (dbErr) {
      console.error('[guide-lead] CRITICAL Supabase insert failed:', dbErr);
    }

    // ── 2. Log consent records ─────────────────────────────────────
    try {
      const consentRows: DbConsentLogInsert[] = [
        {
          email:          d.email,
          consent_type:   'privacy',
          consent_given:  true,
          policy_version: CURRENT_POLICY_VERSION,
          ip_hash:        ipHash,
          source_form:    'guide-download',
        },
      ];
      if (d.marketing_consent) {
        consentRows.push({
          email:          d.email,
          consent_type:   'marketing',
          consent_given:  true,
          policy_version: CURRENT_POLICY_VERSION,
          ip_hash:        ipHash,
          source_form:    'guide-download',
        });
      }
      await db.from('consent_logs').insert(consentRows);
    } catch (consentErr) {
      console.warn('[guide-lead] Consent log failed:', consentErr);
    }

    // ── 3. Log behavioral event ────────────────────────────────────
    try {
      const evtRow: DbBehavioralEvtInsert = {
        session_id:   ipHash ?? 'anon',
        event_type:   'guide_download',
        entity_type:  'general',
        entity_slug:  refCode ? `ags-guide-2026:${refCode.toLowerCase()}` : 'ags-guide-2026',
        lead_id:      leadId,
        utm_source:   utmSource,
        utm_medium:   utmMedium,
        utm_campaign: utmCampaign,
        referrer:     firstLanding || sourceUrl || null,
      };
      await db.from('behavioral_events').insert(evtRow);
    } catch { /* non-critical */ }

    // ── 4. Send dual notification ──────────────────────────────────
    let emailSent = false;
    try {
      const campaignLabel = [utmSource, utmMedium, utmCampaign].filter(Boolean).join(' / ');
      const html = emailTemplate('New Portfolio Guide Download', {
        'Name':               d.name,
        'Email':              d.email,
        'Region':             d.region   || '—',
        'Partner / Ref Code': refCode    || '—',
        'Campaign (UTM)':     campaignLabel || '—',
        'Source':             sourceUrl  || '—',
        'Marketing':          d.marketing_consent ? '✅ Opted In' : 'No',
        'Time':               new Date().toISOString(),
        'Lead ID':            String(leadId ?? 'DB_OFFLINE'),
        'DB Persisted':       dbPersisted ? 'Yes' : 'NO — CHECK SUPABASE',
      });
      const subjectSuffix = refCode ? ` [Ref: ${refCode}]` : '';
      await sendDualNotification(`📥 New AGS Guide Download — Lead Captured${subjectSuffix}`, html);
      emailSent = true;
    } catch (mailErr) {
      console.error('[guide-lead] CRITICAL Email failed:', mailErr);
    }

    if (!dbPersisted && !emailSent) {
      return NextResponse.json(
        { error: 'Unable to register guide request right now. Please try again shortly.', db_persisted: false, email_sent: false },
        { status: 503 }
      );
    }

    return NextResponse.json({ success: true, lead_id: leadId, db_persisted: dbPersisted, email_sent: emailSent });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed' }, { status: 400 });
    }
    console.error('[guide-lead]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
