'use client';
import { useEffect } from 'react';

/**
 * ConsentAnalytics — single source of truth for Google Consent Mode v2 + GTM.
 *
 * GTM container GTM-5J9WTV2X holds the GA4 Google tag (G-4QFYYD1XDF, fires on
 * Initialization) and the GA4 event tags. Page views (including client-side
 * route changes) are handled by GA4 Enhanced Measurement — do NOT add manual
 * GA4 config / page_view calls here or page views will be double counted.
 *
 * Consent defaults are REGION-BASED:
 *  - Opt-in regions (EEA, UK, Switzerland, Vietnam / Decree 13): analytics
 *    denied until the visitor clicks "Accept All".
 *  - All other regions (incl. Australia, Singapore, US): analytics granted,
 *    advertising signals denied unless the visitor accepts.
 *  - An explicit stored choice ('accepted' / 'declined') always overrides.
 *
 * REGRESSION NOTE (Oct 2026): a worldwide 'analytics_storage: denied' default
 * made GA4 report ~0 users from 13 Oct while GSC still recorded clicks.
 * scripts/pre-flight-check.mjs guards against reintroducing it.
 */

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-5J9WTV2X';
export const CONSENT_KEY = 'ags_consent';

// ISO 3166-1 alpha-2 codes where analytics require prior opt-in.
const OPT_IN_REGIONS = [
  // EU-27
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE',
  'IT', 'LV', 'LT', 'LU', 'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE',
  // EEA non-EU + UK + Switzerland
  'IS', 'LI', 'NO', 'GB', 'CH',
  // Vietnam — Decree 13/2023 on Personal Data Protection
  'VN',
];

type ConsentValue = 'granted' | 'denied';

function ensureGtag(): (...args: unknown[]) => void {
  const w = window as any;
  w.dataLayer = w.dataLayer || [];
  if (typeof w.gtag !== 'function') {
    // GTM requires the native `arguments` object, so use a classic function.
    w.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      w.dataLayer.push(arguments);
    };
  }
  return w.gtag;
}

export function updateConsent(choice: 'accepted' | 'declined') {
  const gtag = ensureGtag();
  const v: ConsentValue = choice === 'accepted' ? 'granted' : 'denied';
  gtag('consent', 'update', {
    analytics_storage: v,
    ad_storage: v,
    ad_user_data: v,
    ad_personalization: v,
  });
}

export default function ConsentAnalytics() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const w = window as any;
    if (w.__agsAnalyticsInit) return;
    w.__agsAnalyticsInit = true;

    const gtag = ensureGtag();

    // 1. Consent Mode v2 defaults — must be queued BEFORE gtm.js loads.
    gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      region: OPT_IN_REGIONS,
      wait_for_update: 500,
    });
    gtag('consent', 'default', {
      analytics_storage: 'granted',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
    });

    // 2. Honour any explicit choice already made on the banner.
    let stored: string | null = null;
    try { stored = localStorage.getItem(CONSENT_KEY); } catch { /* storage blocked */ }
    if (stored === 'accepted' || stored === 'declined') updateConsent(stored);

    // 3. Load GTM (deferred for Core Web Vitals) with the standard gtm.js event
    //    so "All Pages"/gtm.js triggers in the container can fire.
    let loaded = false;
    const events = ['scroll', 'touchstart', 'mousemove', 'click', 'keydown'] as const;
    const loadGTM = () => {
      if (loaded) return;
      loaded = true;
      events.forEach((e) => window.removeEventListener(e, loadGTM));
      w.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.appendChild(script);
    };

    events.forEach((e) => window.addEventListener(e, loadGTM, { passive: true, once: true }));
    // Fallback: load as soon as the main thread is idle (max ~1.5s) so that
    // short, no-interaction visits are still counted.
    if ('requestIdleCallback' in window) {
      w.requestIdleCallback(loadGTM, { timeout: 1500 });
    } else {
      setTimeout(loadGTM, 1500);
    }

    return () => events.forEach((e) => window.removeEventListener(e, loadGTM));
  }, []);

  return null;
}
