import { NextResponse } from 'next/server';
import { z } from 'zod';
import {
  getSupabaseServerClient,
  hashIp,
  CURRENT_POLICY_VERSION,
  type DbConsentLogInsert,
} from '@/lib/supabase';
import { sendDualNotification, emailTemplate } from '@/lib/mailer';

const TournamentSchema = z.object({
  name:              z.string().min(2),
  email:             z.string().email(),
  handicap:          z.string().optional(),
  home_club:         z.string().optional(),
  dietary_reqs:      z.string().optional(),
  shirt_size:        z.enum(['XS','S','M','L','XL','XXL','XXXL']).optional(),
  privacy_consent:   z.boolean(),
  marketing_consent: z.boolean().default(false),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const d = TournamentSchema.parse(body);

    if (!d.privacy_consent) {
      return NextResponse.json({ error: 'Privacy consent required' }, { status: 400 });
    }

    const rawIp  = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const ipHash = hashIp(rawIp);

    const db = getSupabaseServerClient();

    // ── 1. Insert tournament signup ────────────────────────────────
    let dbPersisted = false;
    try {
      const { error } = await db.from('tournament_signups').insert({
        name:              d.name,
        email:             d.email,
        handicap:          d.handicap      || null,
        home_club:         d.home_club     || null,
        dietary_reqs:      d.dietary_reqs  || null,
        shirt_size:        d.shirt_size    || null,
        privacy_consent:   true,
        marketing_consent: d.marketing_consent,
        policy_version:    CURRENT_POLICY_VERSION,
        ip_hash:           ipHash,
      });
      if (error) throw error;
      dbPersisted = true;
    } catch (dbErr) {
      console.error('[tournament] CRITICAL Supabase insert failed:', dbErr);
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
          source_form:    'tournament-signup',
        },
      ];
      if (d.marketing_consent) {
        consentRows.push({
          email:          d.email,
          consent_type:   'marketing',
          consent_given:  true,
          policy_version: CURRENT_POLICY_VERSION,
          ip_hash:        ipHash,
          source_form:    'tournament-signup',
        });
      }
      await db.from('consent_logs').insert(consentRows);
    } catch (consentErr) {
      console.warn('[tournament] Consent log failed:', consentErr);
    }

    // ── 3. Send dual notification email ────────────────────────────
    let emailSent = false;
    try {
      const html = emailTemplate("New Tournament Signup — The Horn Blower's Invitational", {
        'Name':       d.name,
        'Email':      d.email,
        'Handicap':   d.handicap      || '—',
        'Home Club':  d.home_club     || '—',
        'Dietary':    d.dietary_reqs  || 'None stated',
        'Shirt Size': d.shirt_size    || '—',
        'Marketing':  d.marketing_consent ? '✅ Opted In' : 'No',
        'Time':       new Date().toISOString(),
        'DB Persisted': dbPersisted ? 'Yes' : 'NO — CHECK SUPABASE',
      });
      await sendDualNotification("🏆 New Tournament Registration — Horn Blower's Invitational", html);
      emailSent = true;
    } catch (mailErr) {
      console.error('[tournament] CRITICAL Email failed:', mailErr);
    }

    if (!dbPersisted && !emailSent) {
      return NextResponse.json(
        { error: 'Unable to submit registration right now. Please contact concierge@asiagolfspecialists.com.', db_persisted: false, email_sent: false },
        { status: 503 }
      );
    }

    return NextResponse.json({ success: true, db_persisted: dbPersisted, email_sent: emailSent }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Validation failed', details: (error as any).errors }, { status: 400 });
    }
    console.error('[tournament]', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
