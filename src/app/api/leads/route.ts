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

const LeadSchema = z.object({
  name:               z.string().min(2),
  email:              z.string().email(),
  phonePrefix:        z.string().default('+61'),
  phone:              z.string().default(''),
  nationality:        z.string().optional(),
  destination:        z.string().optional(),
  groupSize:          z.string().optional(),
  travelMonth:        z.string().optional(),
  travelYear:         z.string().optional(),
  hotelTier:          z.string().optional(),
  handicap:           z.string().optional(),
  message:            z.string().optional(),
  referralCode:       z.string().optional(),
  privacy_consent:    z.boolean(),
  marketing_consent:  z.boolean().default(false),
  metadata: z.object({
    lead_source:        z.string().optional(),
    landing_page:       z.string().optional(),
    first_landing_page: z.string().optional(),
    device_type:        z.string().optional(),
    browser:            z.string().optional(),
    package_title:      z.string().optional(),
    utm_source:         z.string().optional(),
    utm_medium:         z.string().optional(),
    utm_campaign:       z.string().optional(),
    utm_content:        z.string().optional(),
    ref:                z.string().optional(),
  }).optional(),
  telemetry: z.any().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const d = LeadSchema.parse(body);

    if (!d.privacy_consent) {
      return NextResponse.json({ error: 'Privacy consent required' }, { status: 400 });
    }

    const rawIp  = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const ipHash = hashIp(rawIp);
    const phone      = `${d.phonePrefix} ${d.phone}`.trim();
    const travelDate = `${d.travelMonth || ''} ${d.travelYear || ''}`.trim();

    const refCode = (d.referralCode || d.metadata?.ref || '').trim().toUpperCase();
    const utmSource = d.metadata?.utm_source?.trim() || d.metadata?.lead_source || null;
    const utmMedium = d.metadata?.utm_medium?.trim() || d.metadata?.device_type || null;
    const utmCampaign = d.metadata?.utm_campaign?.trim() || null;
    const firstLanding = d.metadata?.first_landing_page?.trim() || '';
    const sourceUrl = (d.metadata?.landing_page || firstLanding || '').slice(0, 500);

    const baseMessage = (d.message || '').trim();
    const taggedMessage =
      refCode && !baseMessage.toUpperCase().includes(refCode)
        ? `[Partner Ref: ${refCode}] ${baseMessage}`.trim()
        : baseMessage || null;

    const db = getSupabaseServerClient();

    // ── 1. Insert lead into web_inquiries ─────────────────────────
    let leadId: number | null = null;
    let dbPersisted = false;
    try {
      const { data, error } = await db
        .from('web_inquiries')
        .insert({
          name:               d.name,
          email:              d.email,
          phone:              phone,
          nationality:        d.nationality   || null,
          message:            taggedMessage,
          source_url:         sourceUrl       || null,
          destination:        d.destination   || null,
          group_size:         d.groupSize     || null,
          travel_date:        travelDate      || null,
          hotel_tier:         d.hotelTier     || null,
          handicap:           d.handicap      || null,
          inquiry_type:       'quote',
          privacy_consent:    true,
          marketing_consent:  d.marketing_consent,
          policy_version:     CURRENT_POLICY_VERSION,
          ip_hash:            ipHash,
        })
        .select('id')
        .single();

      if (error) throw error;
      leadId = data?.id ?? null;
      dbPersisted = leadId !== null;
    } catch (dbErr) {
      console.error('[leads] CRITICAL Supabase insert failed:', dbErr);
    }

    // ── 2. Log consent ─────────────────────────────────────────────
    try {
      const consentRows: DbConsentLogInsert[] = [
        {
          email:          d.email,
          consent_type:   'privacy',
          consent_given:  true,
          policy_version: CURRENT_POLICY_VERSION,
          ip_hash:        ipHash,
          source_form:    'quote-form',
        },
      ];
      if (d.marketing_consent) {
        consentRows.push({
          email:          d.email,
          consent_type:   'marketing',
          consent_given:  true,
          policy_version: CURRENT_POLICY_VERSION,
          ip_hash:        ipHash,
          source_form:    'quote-form',
        });
      }
      await db.from('consent_logs').insert(consentRows);
    } catch (consentErr) {
      console.warn('[leads] Consent log failed:', consentErr);
    }

    // ── 3. Log behavioral event ────────────────────────────────────
    try {
      if (leadId) {
        const evtRow: DbBehavioralEvtInsert = {
          session_id:   ipHash ?? 'anon',
          event_type:   'form_start',
          entity_type:  'general',
          entity_slug:  refCode ? `quote-form:${refCode.toLowerCase()}` : 'quote-form',
          lead_id:      leadId,
          utm_source:   utmSource,
          utm_medium:   utmMedium,
          utm_campaign: utmCampaign,
          referrer:     firstLanding || sourceUrl || null,
        };
        await db.from('behavioral_events').insert(evtRow);
      }
    } catch { /* non-critical */ }

    // ── 4. Send dual notification email ────────────────────────────
    let emailSent = false;
    try {
      const campaignLabel = [
        d.metadata?.utm_source,
        d.metadata?.utm_medium,
        d.metadata?.utm_campaign,
      ]
        .filter(Boolean)
        .join(' / ');

      const html = emailTemplate('New Consultation Enquiry', {
        'Name':              d.name,
        'Email':             d.email,
        'Phone':             phone,
        'Nationality':       d.nationality || '—',
        'Destination':       d.destination || '—',
        'Group Size':        d.groupSize   || '—',
        'Travel Date':       travelDate    || '—',
        'Hotel Tier':        d.hotelTier   || '—',
        'Handicap':          d.handicap    || '—',
        'Partner / Ref Code': refCode      || '—',
        'Campaign (UTM)':    campaignLabel || '—',
        'Message':           taggedMessage || '—',
        'Marketing':         d.marketing_consent ? '✅ Opted In' : 'No',
        'First Landing':     firstLanding  || '—',
        'Source':            sourceUrl,
        'Lead ID':           String(leadId ?? 'DB_OFFLINE'),
        'DB Persisted':      dbPersisted ? 'Yes' : 'NO — CHECK SUPABASE',
      });
      const subjectSuffix = refCode ? ` [Ref: ${refCode}]` : '';
      await sendDualNotification(`🏌️ New AGS Enquiry — Consultation Request${subjectSuffix}`, html);
      emailSent = true;
    } catch (mailErr) {
      console.error('[leads] CRITICAL Email failed:', mailErr);
    }

    if (!dbPersisted && !emailSent) {
      return NextResponse.json(
        {
          error: 'We could not deliver your inquiry right now. Please message us directly on WhatsApp (+84 935 601 099) or email concierge@asiagolfspecialists.com.',
          db_persisted: false,
          email_sent: false,
        },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { success: true, lead_id: leadId, db_persisted: dbPersisted, email_sent: emailSent },
      { status: 200 }
    );

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', details: (error as any).errors }, { status: 400 });
    }
    console.error('[leads]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
