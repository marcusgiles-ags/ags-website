import { NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabase';
import { sendDualNotification, emailTemplate } from '@/lib/mailer';

export const dynamic = 'force-dynamic';

async function alertKeepaliveFailure(reason: string, checkedAt: string) {
  try {
    const html = emailTemplate('ALERT: Supabase Keepalive Failed', {
      'Status': 'UNREACHABLE / ERROR',
      'Reason': reason,
      'Checked At (UTC)': checkedAt,
      'Action Required': 'Open Supabase Dashboard (project fmbkszbjtoqmswaxvbqa) and verify the database is active and not paused.',
    });
    await sendDualNotification('⚠️ AGS Alert: Supabase Keepalive Check Failed', html);
  } catch (mailErr) {
    console.error('[supabase-keepalive] Alert email also failed:', mailErr);
  }
}

/**
 * Automated twice-weekly Vercel Cron keepalive (Mon & Thu 03:00 UTC).
 * Executes a minimal read-only HEAD count query against Supabase (`web_inquiries`)
 * so the Free-Tier PostgreSQL instance never hits the 7-day inactivity auto-pause.
 * Sends an email alert if Supabase ever errors or becomes unreachable.
 * Never returns any PII.
 */
export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  const checkedAt = new Date().toISOString();

  try {
    const db = getSupabaseServerClient();
    const { error } = await db
      .from('web_inquiries')
      .select('id', { count: 'exact', head: true });

    if (error) {
      console.error('[supabase-keepalive] Query error:', error);
      await alertKeepaliveFailure(error.message, checkedAt);
      return NextResponse.json(
        { success: false, supabase: 'error', error: error.message, checked_at: checkedAt },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { success: true, supabase: 'alive', checked_at: checkedAt },
      { status: 200 }
    );
  } catch (err) {
    const reason = err instanceof Error ? err.message : String(err);
    console.error('[supabase-keepalive] Unreachable:', err);
    await alertKeepaliveFailure(reason, checkedAt);
    return NextResponse.json(
      { success: false, supabase: 'unreachable', error: reason, checked_at: checkedAt },
      { status: 503 }
    );
  }
}
