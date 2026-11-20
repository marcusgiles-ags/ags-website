import { createClient } from '@supabase/supabase-js';
import { createHash } from 'crypto';
import type { Database } from './database.types';

// ============================================================
// AGS Supabase Client
// Project: fmbkszbjtoqmswaxvbqa | Region: Singapore (ap-southeast-1)
// ============================================================

// ─────────────────────────────────────────────────────────────
// Typed convenience aliases — import these in API routes
// ─────────────────────────────────────────────────────────────
export type DbWebInquiryInsert     = Database['public']['Tables']['web_inquiries']['Insert'];
export type DbTournamentInsert     = Database['public']['Tables']['tournament_signups']['Insert'];
export type DbConsentLogInsert     = Database['public']['Tables']['consent_logs']['Insert'];
export type DbBehavioralEvtInsert  = Database['public']['Tables']['behavioral_events']['Insert'];

// ─────────────────────────────────────────────────────────────
// Browser-safe client (read-only, RLS blocks all table access)
// ─────────────────────────────────────────────────────────────
export function getSupabaseBrowserClient() {
  const url     = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  if (!url || !anonKey) throw new Error('[AGS] Missing Supabase public env vars');
  return createClient<Database>(url, anonKey);
}

// ─────────────────────────────────────────────────────────────
// Server-side admin client — NEVER expose service_role to browser
// All API routes use this to bypass RLS for writes
// ─────────────────────────────────────────────────────────────
let _serverClient: ReturnType<typeof createClient<Database>> | null = null;

export function getSupabaseServerClient() {
  const url            = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
  if (!url || !serviceRoleKey) {
    throw new Error('[AGS] Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  }
  if (!_serverClient) {
    _serverClient = createClient<Database>(url, serviceRoleKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });
  }
  return _serverClient;
}

// ─────────────────────────────────────────────────────────────
// Privacy Utilities
// GDPR Art. 25 + Decree 356 Art. 28 — never store raw IPs
// ─────────────────────────────────────────────────────────────

/** SHA-256 hash of an IP address. Returns null for unknown/blank IPs. */
export function hashIp(rawIp: string | null | undefined): string | null {
  if (!rawIp || rawIp === 'unknown') return null;
  const cleanIp = rawIp.split(':').length > 2 ? rawIp : rawIp.split(':')[0];
  return createHash('sha256').update(cleanIp).digest('hex');
}

/** SHA-256 hash of a user-agent string. */
export function hashUserAgent(ua: string | null | undefined): string | null {
  if (!ua) return null;
  return createHash('sha256').update(ua).digest('hex');
}

// ─────────────────────────────────────────────────────────────
// Current policy version — bump on every Privacy Policy update
// Format: "vMAJOR.MINOR-REGULATION-YEAR"
// ─────────────────────────────────────────────────────────────
export const CURRENT_POLICY_VERSION = 'v1.0-PDPL-2026';
