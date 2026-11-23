import { NextResponse } from 'next/server';
import { getSupabaseServerClient } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

/**
 * Automated twice-weekly Vercel Cron keepalive (Mon & Thu 03:00 UTC).
 * Executes a minimal read-only HEAD count query against Supabase (`web_inquiries`)
 * so the Free-Tier PostgreSQL instance never hits the 7-day inactivity auto-pause.
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

  try {
    const db = getSupabaseServerClient();
    const { error } = await db
      .from('web_inquiries')
      .select('id', { count: 'exact', head: true });

    if (error) {
      console.error('[supabase-keepalive] Query error:', error);
      return NextResponse.json(
        { success: false, supabase: 'error', error: error.message, checked_at: new Date().toISOString() },
        { status: 503 }
      );
    }

    return NextResponse.json(
      { success: true, supabase: 'alive', checked_at: new Date().toISOString() },
      { status: 200 }
    );
  } catch (err) {
    console.error('[supabase-keepalive] Unreachable:', err);
    return NextResponse.json(
      { success: false, supabase: 'unreachable', error: err instanceof Error ? err.message : String(err), checked_at: new Date().toISOString() },
      { status: 503 }
    );
  }
}
