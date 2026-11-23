import { NextResponse } from 'next/server';
import { z } from 'zod';
import {
  getSupabaseServerClient,
  hashIp,
  CURRENT_POLICY_VERSION,
  type DbBehavioralEvtInsert,
} from '@/lib/supabase';

const schema = z.object({
  email: z.string().email(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = schema.safeParse(body);

    if (!result.success) {
      return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
    }

    const { email } = result.data;
    const rawIp  = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const ipHash = hashIp(rawIp);

    const db = getSupabaseServerClient();

    // Store as a 'guide' inquiry with minimal data (email-only capture)
    let dbPersisted = false;
    try {
      const { error } = await db.from('web_inquiries').insert({
        name:             'Guide Request',
        email:            email,
        inquiry_type:     'guide',
        privacy_consent:  true,
        policy_version:   CURRENT_POLICY_VERSION,
        ip_hash:          ipHash,
        source_url:       request.headers.get('referer') || null,
      });
      if (error) throw error;
      dbPersisted = true;
    } catch (dbErr) {
      console.error('[guide-request] CRITICAL Supabase insert failed:', dbErr);
    }

    // Log behavioral event
    try {
      const evtRow: DbBehavioralEvtInsert = {
        session_id:  ipHash ?? 'anon',
        event_type:  'guide_download',
        entity_type: 'general',
        entity_slug: 'ags-guide-2026',
      };
      await db.from('behavioral_events').insert(evtRow);
    } catch { /* non-critical */ }

    return NextResponse.json({
      success: true,
      db_persisted: dbPersisted,
      message: 'Guide request captured',
      downloadUrl: '/downloads/ags-guide-2026.html',
    });
  } catch (error) {
    console.error('[guide-request]', error);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
