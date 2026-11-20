export interface AttributionData {
  ref?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  first_landing_page?: string;
  initial_referrer?: string;
  captured_at?: number;
}

const STORAGE_KEY = 'ags_attribution';
const ATTRIBUTION_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

// Vanity partner route defaults when a clean URL without query strings is shared.
const PARTNER_PATH_DEFAULTS: Record<string, Partial<AttributionData>> = {
  '/johnno': {
    ref: 'JOHNNO',
    utm_source: 'brad_johnson',
    utm_medium: 'social',
    utm_campaign: 'johnno_2026',
  },
};

function readStoredAttribution(): AttributionData | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as AttributionData;
    if (parsed.captured_at && Date.now() - parsed.captured_at > ATTRIBUTION_TTL_MS) {
      localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function captureAttribution(): AttributionData | null {
  if (typeof window === 'undefined') return null;

  try {
    const existing = readStoredAttribution() || {};
    const params = new URLSearchParams(window.location.search);
    const pathname = window.location.pathname.replace(/\/$/, '') || '/';

    const pathDefault = PARTNER_PATH_DEFAULTS[pathname] || {};

    const incomingRef = params.get('ref')?.trim() || pathDefault.ref;
    const incomingSource = params.get('utm_source')?.trim() || pathDefault.utm_source;
    const incomingMedium = params.get('utm_medium')?.trim() || pathDefault.utm_medium;
    const incomingCampaign = params.get('utm_campaign')?.trim() || pathDefault.utm_campaign;
    const incomingContent = params.get('utm_content')?.trim();

    const hasIncomingTag = Boolean(
      incomingRef || incomingSource || incomingMedium || incomingCampaign || incomingContent
    );

    const merged: AttributionData = {
      ...existing,
      first_landing_page: existing.first_landing_page || window.location.href,
      initial_referrer: existing.initial_referrer || document.referrer || 'Direct',
      captured_at: hasIncomingTag || !existing.captured_at ? Date.now() : existing.captured_at,
    };

    if (incomingRef) merged.ref = incomingRef.toUpperCase();
    if (incomingSource) merged.utm_source = incomingSource;
    if (incomingMedium) merged.utm_medium = incomingMedium;
    if (incomingCampaign) merged.utm_campaign = incomingCampaign;
    if (incomingContent) merged.utm_content = incomingContent;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    return merged;
  } catch {
    return null;
  }
}

export function getAttribution(): AttributionData | null {
  return readStoredAttribution();
}

export function getReferralCode(): string {
  return readStoredAttribution()?.ref || '';
}

export function buildTrackedSourceUrl(
  currentUrl: string,
  attr?: AttributionData | null,
  referralCode?: string
): string {
  const base = currentUrl || attr?.first_landing_page || '';
  if (!base) return '';

  try {
    const url = new URL(base);
    const code = (referralCode || attr?.ref || '').trim().toUpperCase();
    if (code && !url.searchParams.has('ref')) {
      url.searchParams.set('ref', code);
    }
    if (attr?.utm_source && !url.searchParams.has('utm_source')) {
      url.searchParams.set('utm_source', attr.utm_source);
    }
    if (attr?.utm_medium && !url.searchParams.has('utm_medium')) {
      url.searchParams.set('utm_medium', attr.utm_medium);
    }
    if (attr?.utm_campaign && !url.searchParams.has('utm_campaign')) {
      url.searchParams.set('utm_campaign', attr.utm_campaign);
    }
    return url.toString().slice(0, 500);
  } catch {
    return base.slice(0, 500);
  }
}
