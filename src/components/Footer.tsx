import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer
      style={{
        padding: '5rem 0 3rem',
        backgroundColor: '#020617',
        borderTop: '1px solid rgba(212, 175, 55, 0.1)',
        textAlign: 'center',
      }}
    >
      <div className="container">
        {/* Logo */}
        <div style={{ width: '100%', height: '50px', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
          <Image
            src="/images/brand-library/logos/ags-clubmark-outline-white.webp"
            alt="Asia Golf Specialists"
            width={100}
            height={50}
            style={{ height: '100%', width: 'auto', objectFit: 'contain', opacity: 0.15 }}
            loading="lazy"
          />
        </div>

        {/* Legal Links — using CSS class for hover, no JS event handlers */}
        <nav aria-label="Legal" style={{ marginBottom: '1.5rem' }}>
          <ul style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem 2rem',
          }}>
            {[
              { href: '/packages/', label: 'Itinerary Directory' },
              { href: '/site-directory/', label: 'Site Directory' },
              { href: '/privacy-policy/',   label: 'Privacy Policy' },
              { href: '/terms-of-service/', label: 'Terms of Service' },
              { href: '/liability-waiver/', label: 'Liability Waiver' },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className="ags-footer-link">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Off-Page Entity & Social Links */}
        <nav aria-label="Connect" style={{ marginBottom: '1.5rem' }}>
          <ul style={{
            listStyle: 'none',
            margin: 0,
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem 2rem',
          }}>
            {[
              { href: 'https://www.linkedin.com/company/asia-golf-specialists/', label: 'LinkedIn' },
              { href: 'https://www.instagram.com/asiagolfspecialists/', label: 'Instagram' },
              { href: 'https://www.facebook.com/asiagolfspecialists/', label: 'Facebook' },
              { href: 'https://www.google.com/maps/place/Asia+Golf+Specialists/@14.5027506,103.509948,3779908m/data=!3m1!1e3!4m6!3m5!1s0x8bc99bf190000767:0x9a7594b1b8f477a2!8m2!3d14.5027506!4d103.509948!16s%2Fg%2F11nj0hlmqy', label: 'Google Business Profile' },
            ].map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ags-footer-link"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p style={{
          color: 'rgba(248,250,252,0.2)',
          fontSize: '0.75rem',
          letterSpacing: '0.1em',
          margin: 0,
          fontFamily: 'var(--font-sans, sans-serif)',
        }}>
          © {new Date().getFullYear()} Asia Golf Specialists. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
