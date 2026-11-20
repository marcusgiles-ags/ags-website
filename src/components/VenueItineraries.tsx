import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getVenueItineraries } from '@/lib/venueItineraries';

export interface VenueItinerariesProps {
  venueHref: string;
  venueName: string;
  venueType: 'course' | 'accommodation';
}

export default function VenueItineraries({
  venueHref,
  venueName,
  venueType
}: VenueItinerariesProps) {
  const { signatureTour, packages } = getVenueItineraries(venueHref, venueName);

  return (
    <section
      style={{
        backgroundColor: '#020617',
        borderTop: '1px solid rgba(212, 175, 55, 0.15)',
        borderBottom: '1px solid rgba(212, 175, 55, 0.15)',
        padding: '5rem 0',
      }}
    >
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div
            style={{
              color: '#D4AF37',
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              fontWeight: 600,
              marginBottom: '0.5rem',
            }}
          >
            Turnkey Golf Expeditions
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-primary-serif)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              color: '#F8FAFC',
              margin: '0 0 1rem 0',
            }}
          >
            Experience {venueName}
          </h2>
          <p
            style={{
              color: 'rgba(248, 250, 252, 0.75)',
              fontSize: '1.05rem',
              maxWidth: '720px',
              margin: '0 auto',
              lineHeight: 1.6,
            }}
          >
            {venueType === 'course' ? 'Play' : 'Stay at'} {venueName} as part of our all-inclusive hosted signature tours or customized private group blueprints.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {/* Primary: Signature Tour */}
          {signatureTour && (
            <div
              style={{
                backgroundColor: 'rgba(212, 175, 55, 0.04)',
                border: '2px solid #D4AF37',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
              }}
            >
              <div style={{ position: 'relative', height: '200px' }}>
                <Image
                  src={signatureTour.heroImage}
                  alt={signatureTour.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  style={{ objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '0.75rem',
                    left: '0.75rem',
                    backgroundColor: '#D4AF37',
                    color: '#050B1A',
                    padding: '0.25rem 0.75rem',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    borderRadius: '3px',
                  }}
                >
                  Signature Tour
                </div>
              </div>
              <div
                style={{
                  padding: '1.75rem',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    color: '#D4AF37',
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '0.5rem',
                    fontWeight: 600,
                  }}
                >
                  {signatureTour.duration} &bull; Hosted Luxury
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-primary-serif)',
                    fontSize: '1.35rem',
                    color: '#F8FAFC',
                    margin: '0 0 0.75rem 0',
                    lineHeight: 1.3,
                  }}
                >
                  {signatureTour.title}
                </h3>
                <p
                  style={{
                    color: 'rgba(248,250,252,0.75)',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                  }}
                >
                  {signatureTour.highlight}
                </p>
                <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                  <Link
                    href={signatureTour.href}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      backgroundColor: '#D4AF37',
                      color: '#050B1A',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      textDecoration: 'none',
                      width: '100%',
                    }}
                  >
                    Explore Signature Tour &rarr;
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Secondary: Flagship Package(s) */}
          {packages.map((pkg) => (
            <div
              key={pkg.slug}
              style={{
                backgroundColor: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(212,175,55,0.25)',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ position: 'relative', height: '200px' }}>
                <Image
                  src={pkg.heroImage}
                  alt={pkg.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  style={{ objectFit: 'cover' }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '0.75rem',
                    left: '0.75rem',
                    backgroundColor: 'rgba(2,6,23,0.85)',
                    color: '#D4AF37',
                    border: '1px solid rgba(212,175,55,0.4)',
                    padding: '0.25rem 0.75rem',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    borderRadius: '3px',
                  }}
                >
                  Customizable Package
                </div>
              </div>
              <div
                style={{
                  padding: '1.75rem',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    color: '#D4AF37',
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '0.5rem',
                    fontWeight: 600,
                  }}
                >
                  {pkg.duration}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-primary-serif)',
                    fontSize: '1.35rem',
                    color: '#F8FAFC',
                    margin: '0 0 0.75rem 0',
                    lineHeight: 1.3,
                  }}
                >
                  {pkg.title}
                </h3>
                <p
                  style={{
                    color: 'rgba(248,250,252,0.75)',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                    marginBottom: '1rem',
                  }}
                >
                  {pkg.highlight}
                </p>
                {pkg.guidePrice && (
                  <div
                    style={{
                      color: '#D4AF37',
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      marginBottom: '1rem',
                    }}
                  >
                    {pkg.guidePrice}
                  </div>
                )}
                <div style={{ marginTop: 'auto', paddingTop: '1rem' }}>
                  <Link
                    href={pkg.href}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      backgroundColor: 'transparent',
                      border: '1px solid #D4AF37',
                      color: '#D4AF37',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      fontWeight: 600,
                      fontSize: '0.82rem',
                      textDecoration: 'none',
                      width: '100%',
                    }}
                  >
                    View Tailored Blueprint &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
