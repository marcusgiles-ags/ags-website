// ============================================================
// AGS Legacy DB Shim — db.ts
// ============================================================
// The MySQL pool has been replaced by Supabase (PostgreSQL).
// This file is retained as a no-op shim in case any legacy
// scripts reference it. All API routes now use @/lib/supabase.
//
// DO NOT add new API routes that import from this file.
// Use: import { getSupabaseServerClient } from '@/lib/supabase';
// ============================================================

/**
 * @deprecated Use getSupabaseServerClient() from '@/lib/supabase' instead.
 * This stub exists to prevent build errors if any legacy code still imports it.
 */
export async function query<T = Record<string, unknown>>(
  sql: string,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _params: unknown[] = []
): Promise<T[]> {
  console.warn(
    '[db.ts] Legacy MySQL query() called — DB has been migrated to Supabase. ' +
    `SQL attempted: ${sql.slice(0, 80)}... — returning empty result.`
  );
  return [];
}

export default null;
