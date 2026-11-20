import { NextResponse } from 'next/server';
import { z } from 'zod';
import {
  getSupabaseServerClient,
  hashIp,
  hashUserAgent,
  CURRENT_POLICY_VERSION,
  type DbConsentLogInsert,
} from '@/lib/supabase';

const ConsentSchema = z.object({
  email:            z.string().email().optional(),
  consent_type:     z.enum(['analytics', 'marketing', 'privacy', 'all']),
  consent_given:    z.boolean(),
  source_form:      z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = ConsentSchema.parse(body);

    const rawIp    = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
                   || request.headers.get('x-real-ip')
                   || 'unknown';
    const userAgent = request.headers.get('user-agent') || '';

    const db = getSupabaseServerClient();

    const row: DbConsentLogInsert = {
      email:            data.email     || null,
      consent_type:     data.consent_type,
      consent_given:    data.consent_given,
      policy_version:   CURRENT_POLICY_VERSION,
      ip_hash:          hashIp(rawIp),
      user_agent_hash:  hashUserAgent(userAgent),
      source_form:      data.source_form || null,
    };

    const { error } = await db.from('consent_logs').insert(row);

    if (error) {
      console.error('[consent] Supabase insert failed:', error);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

// ── Withdrawal endpoint (GDPR Art. 7(3) + Decree 356 right-to-withdraw) ──────
// PATCH /api/consent  { email: "...", consent_type?: "marketing" }
export async function PATCH(request: Request) {
  try {
    const body  = await request.json();
    const email = z.string().email().parse(body.email);
    const type  = z.enum(['analytics','marketing','privacy','all']).optional().parse(body.consent_type);

    const db = getSupabaseServerClient();

    let query = db
      .from('consent_logs')
      .update({ withdrawal_timestamp: new Date().toISOString() })
      .eq('email', email)
      .is('withdrawal_timestamp', null);

    if (type) query = query.eq('consent_type', type);

    const { error } = await query;
    if (error) throw error;

    return NextResponse.json({ success: true, message: 'Consent withdrawn' }, { status: 200 });
  } catch (error) {
    console.error('[consent PATCH]', error);
    return NextResponse.json({ error: 'Withdrawal failed' }, { status: 500 });
  }
}
