'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { CONSENT_KEY, updateConsent } from '@/components/ConsentAnalytics';

export default function ConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (!stored) setVisible(true);
  }, []);

  const logConsent = async (given: boolean) => {
    try {
      await fetch('/api/consent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ consent_type: 'all', consent_given: given, source_form: 'banner' }),
      });
    } catch { /* silent — don't block UX */ }
  };

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    // Update Consent Mode v2 (shared helper keeps all consent logic in one place)
    updateConsent('accepted');
    (window as any).dataLayer.push({ event: 'consent_given', consent_type: 'all' });
    logConsent(true);
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    // Explicit opt-out must revoke the region-based default grant
    updateConsent('declined');
    logConsent(false);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      id="ags-consent-banner"
      role="dialog"
      aria-label="Cookie & Privacy Consent"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        backgroundColor: '#F5F1E8',   // Colonial Cream
        borderTop: '3px solid #B8860B', // Ochre Gold
        padding: '1.5rem 2rem',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '1.5rem',
        boxShadow: '0 -8px 32px rgba(0,0,0,0.25)',
      }}
    >
      {/* Logo Mark */}
      <div style={{ flexShrink: 0, width: '48px', height: '48px', position: 'relative' }}>
        <Image
          src="/images/brand-library/logos/ags-logo-the-club-mark-nobkgrd-120.webp"
          alt="AGS Club Mark"
          fill
          style={{ objectFit: 'contain', opacity: 0.7 }}
        />
      </div>

      {/* Copy */}
      <div style={{ flex: 1, minWidth: '260px' }}>
        <p style={{
          margin: 0,
          fontFamily: 'var(--font-sans, sans-serif)',
          fontSize: '0.85rem',
          color: '#3D2B00',
          lineHeight: 1.6,
        }}>
          <strong style={{ color: '#B8860B', letterSpacing: '0.05em' }}>Asia Golf Specialists respects your privacy.</strong>
          {' '}We use Google Analytics to understand how visitors use our site and improve our golf travel recommendations.
          All data is handled in accordance with our{' '}
          <a href="/privacy-policy/" style={{ color: '#B8860B', textDecoration: 'underline', fontWeight: 600 }}>
            Privacy Policy
          </a>
          {' '}and Vietnam Decree 13/2023. In the EU, UK, Switzerland and Vietnam, analytics cookies are only set if you accept; you can decline at any time.
        </p>
      </div>

      {/* Buttons */}
      <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
        <button
          id="consent-decline-btn"
          onClick={handleDecline}
          style={{
            padding: '0.65rem 1.4rem',
            background: 'transparent',
            border: '1px solid rgba(184,134,11,0.4)',
            color: '#8B6914',
            borderRadius: '4px',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontFamily: 'var(--font-sans, sans-serif)',
          }}
        >
          Decline
        </button>
        <button
          id="consent-accept-btn"
          onClick={handleAccept}
          style={{
            padding: '0.65rem 1.6rem',
            background: '#B8860B',
            border: '1px solid #B8860B',
            color: '#F5F1E8',
            borderRadius: '4px',
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontFamily: 'var(--font-sans, sans-serif)',
          }}
        >
          Accept All
        </button>
      </div>
    </div>
  );
}
