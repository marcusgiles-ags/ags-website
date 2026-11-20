'use client';

import Link from 'next/link';

interface ArticleCTAProps {
  ctaText?: string;
  ctaButton?: string;
  slug?: string;
  title?: string;
  category?: string;
  country?: string;
  subtitle?: string;
  buttonText?: string;
}

export default function ArticleCTA({ ctaText, ctaButton, slug, title, category, country, subtitle, buttonText }: ArticleCTAProps) {
  const heading = title || ctaText || 'Design Your Bespoke Golf Journey';
  const buttonLabel = buttonText || ctaButton || 'Make an Enquiry';
  const subHeading = subtitle || 'Our specialists engineer every detail — tee times, villas, transfers, and cultural experiences — built exclusively around you.';

  return (
    <section style={{ padding: '5rem 0', background: 'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.08) 0%, rgba(2,6,23,0) 70%)' }}>
      <div className="container" style={{ textAlign: 'center', maxWidth: '640px' }}>
        <span style={{ color: '#D4AF37', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '1.5rem' }}>
          Asia Golf Specialists
        </span>
        <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.2 }}>
          {heading}
        </h2>
        <p style={{ color: 'rgba(248,250,252,0.6)', marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '1.05rem' }}>
          {subHeading}
        </p>
        <Link
          href="/quote/"
          className="btn-primary"
          onClick={() => {
            if (typeof window !== 'undefined') {
              // 1. Existing GTM dataLayer push
              if ((window as any).dataLayer) {
                (window as any).dataLayer.push({
                  event: 'article_quote_click',
                  article_slug: slug,
                  article_title: title,
                  article_category: category,
                  article_country: country || 'General',
                  cta_button_text: buttonLabel,
                });
              }
              // 2. GA4 CTA-click event. A click is NOT a lead — generate_lead is
              //    reserved for successful form submissions (quote / fast inquiry).
              if (typeof (window as any).gtag === 'function') {
                (window as any).gtag('event', 'quote_cta_click', {
                  event_category: 'Quote',
                  event_label: buttonLabel,
                  value: 1,
                  currency: 'USD',
                  article_title: title
                });
              }
            }
          }}
        >
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}
