"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import { captureAttribution, getAttribution, buildTrackedSourceUrl } from "@/lib/attribution";

const inputStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: 'rgba(2, 6, 23, 0.8)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  color: '#F8FAFC',
  padding: '1rem 1.25rem',
  borderRadius: '6px',
  fontSize: '1rem',
  outline: 'none',
  marginBottom: '1rem',
};

const checkboxRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '0.75rem',
  marginBottom: '1rem',
  textAlign: 'left',
};

const checkboxLabelStyle: React.CSSProperties = {
  fontSize: '0.82rem',
  color: 'rgba(248, 250, 252, 0.65)',
  lineHeight: 1.6,
  cursor: 'pointer',
};

export default function DownloadGuidePage() {
  const [name,              setName]             = useState("");
  const [email,             setEmail]            = useState("");
  const [region,            setRegion]           = useState("Vietnam");
  const [referralCode,      setReferralCode]     = useState("");
  const [privacyConsent,    setPrivacyConsent]   = useState(false);
  const [marketingConsent,  setMarketingConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    const attr = captureAttribution() || getAttribution();
    if (attr?.ref) {
      setReferralCode(attr.ref);
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyConsent) {
      alert("Please agree to the Privacy Policy to continue.");
      return;
    }
    setStatus('loading');

    const attr = getAttribution();
    const activeRef = (referralCode || attr?.ref || "").trim().toUpperCase();
    const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

    try {
      const response = await fetch('/api/guide-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          region,
          referralCode: activeRef || undefined,
          privacy_consent: privacyConsent,
          marketing_consent: marketingConsent,
          metadata: {
            lead_source: attr?.initial_referrer || (typeof window !== 'undefined' ? document.referrer || 'Direct' : 'Direct'),
            landing_page: buildTrackedSourceUrl(currentUrl, attr, activeRef),
            first_landing_page: attr?.first_landing_page || currentUrl,
            utm_source: attr?.utm_source,
            utm_medium: attr?.utm_medium,
            utm_campaign: attr?.utm_campaign,
            ref: activeRef || undefined,
          },
        }),
      });

      if (response.ok) {
        setStatus('success');
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
          (window as any).dataLayer.push({
            event: 'guide_download',
            guide_title: 'AGS 2026 SE Asia Golf Guide',
            referral_code: activeRef || undefined,
          });
        }
        window.open('/downloads/ags-guide-2026.html', '_blank');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#020617' }}>
      <Navbar />

      <section className="section" style={{ minHeight: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '6rem' }}>
        <div className="container" style={{ maxWidth: '520px' }}>
          <div style={{
            backgroundColor: 'rgba(5, 11, 26, 0.6)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            padding: '4rem 3rem',
            borderRadius: '12px',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
          }}>
            <span style={{ color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.4em', fontSize: '0.75rem', fontWeight: 700, marginBottom: '1.5rem', display: 'block' }}>
              Exclusive Access
            </span>

            <h1 style={{ fontFamily: 'var(--font-primary-serif, serif)', fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#F8FAFC', marginBottom: '1rem', lineHeight: 1.1 }}>
              The 2026 <br />
              <span style={{ fontStyle: 'italic', fontWeight: 400 }}>Guardian&apos;s Portfolio</span>
            </h1>

            <p style={{ color: 'rgba(248, 250, 252, 0.6)', fontSize: '1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Enter your details to unlock the definitive guide for luxury golf travel in Southeast Asia.
            </p>

            {status === 'success' ? (
              <div style={{ padding: '2.5rem', border: '1px solid rgba(212, 175, 55, 0.3)', backgroundColor: 'rgba(212, 175, 55, 0.05)', borderRadius: '8px' }}>
                <h2 style={{ color: '#D4AF37', fontFamily: 'var(--font-serif, serif)', fontStyle: 'italic', fontSize: '1.5rem', marginBottom: '1rem' }}>
                  Access Granted.
                </h2>
                <p style={{ color: 'rgba(248, 250, 252, 0.7)', fontSize: '0.9rem', marginBottom: '2rem' }}>
                  Your 2026 Insider Guide is opening now. Welcome to the inner circle.
                </p>
                <a href="/downloads/ags-guide-2026.html" target="_blank" className="btn-solid-gold">
                  Download Guide Manually
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ textAlign: 'left' }}>
                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={name}
                  onChange={e => setName(e.target.value)}
                  style={inputStyle}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  style={inputStyle}
                />
                <select
                  value={region}
                  onChange={e => setRegion(e.target.value)}
                  style={{ ...inputStyle, appearance: 'none' as const }}
                >
                  {['Vietnam','Thailand','Cambodia','Multi-Country'].map(r => (
                    <option key={r} value={r} style={{ color: 'black' }}>{r}</option>
                  ))}
                </select>
                {referralCode ? (
                  <input
                    type="text"
                    placeholder="Referral Code (Optional)"
                    value={referralCode}
                    onChange={e => setReferralCode(e.target.value.toUpperCase())}
                    style={{
                      ...inputStyle,
                      borderColor: 'rgba(212, 175, 55, 0.6)',
                      color: '#D4AF37',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                    }}
                  />
                ) : null}

                {/* Consent Section */}
                <div style={{ margin: '1.5rem 0 1rem', borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '1.5rem' }}>
                  {/* Privacy — Required */}
                  <div style={checkboxRowStyle}>
                    <input
                      id="guide-privacy"
                      type="checkbox"
                      checked={privacyConsent}
                      onChange={e => setPrivacyConsent(e.target.checked)}
                      required
                      style={{ marginTop: '0.2rem', accentColor: '#D4AF37', flexShrink: 0 }}
                    />
                    <label htmlFor="guide-privacy" style={checkboxLabelStyle}>
                      I have read and agree to the{' '}
                      <a href="/privacy-policy/" target="_blank" style={{ color: '#D4AF37' }}>Privacy Policy</a>.{' '}
                      <span style={{ color: 'rgba(255,100,100,0.8)' }}>*</span>
                    </label>
                  </div>

                  {/* Marketing — Optional */}
                  <div style={checkboxRowStyle}>
                    <input
                      id="guide-marketing"
                      type="checkbox"
                      checked={marketingConsent}
                      onChange={e => setMarketingConsent(e.target.checked)}
                      style={{ marginTop: '0.2rem', accentColor: '#D4AF37', flexShrink: 0 }}
                    />
                    <label htmlFor="guide-marketing" style={checkboxLabelStyle}>
                      Yes — send me curated golf travel updates, new course additions, and exclusive tour alerts from Asia Golf Specialists. <span style={{ color: 'rgba(248,250,252,0.3)', fontStyle: 'italic' }}>(Optional)</span>
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-solid-gold"
                  style={{ width: '100%', padding: '1.25rem', opacity: status === 'loading' ? 0.7 : 1 }}
                >
                  {status === 'loading' ? 'Verifying...' : 'Unlock Portfolio Access'}
                </button>

                {status === 'error' && (
                  <p style={{ color: '#f87171', fontSize: '0.8rem', marginTop: '1rem', textAlign: 'center' }}>
                    Verification failed. Please check your details and retry.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
