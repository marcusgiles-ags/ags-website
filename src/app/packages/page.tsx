import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Luxury Golf Package Directory',
  description: 'Explore 27 curated luxury golf itineraries across Vietnam, Thailand, and Cambodia. Championship tee times, private villas, and VIP transfers from Australia.',
  alternates: {
    canonical: 'https://www.asiagolfspecialists.com/packages/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    title: { absolute: "Luxury Golf Package Directory | Asia Golf Specialists" },
    description: "Explore 27 curated luxury golf itineraries across Vietnam, Thailand, and Cambodia. Championship tee times, private villas, and VIP transfers from Australia.",
    url: "https://www.asiagolfspecialists.com/packages/",
    siteName: "Asia Golf Specialists",
    images: [{
      url: "https://www.asiagolfspecialists.com/images/homepage/hero-slider/vietnam-coastal-golf-course-hoiana-shores-aerial-beachside.webp",
      width: 1200,
      height: 630,
      alt: "Asia Golf Specialists — Luxury Golf Package Directory",
    }],
  },
};

const COUNTRIES = ['Vietnam', 'Thailand', 'Cambodia'] as const;
type Country = typeof COUNTRIES[number];

const countryData: Record<Country, { brief: string; link: string; anchor: string }> = {
  "Vietnam": {
    anchor: "vietnam",
    link: "/destinations/vietnam/",
    brief: "From the world-class coastal links corridor of Da Nang and Hoi An to the mountain amphitheaters of Hanoi and the rugged dunes of The Bluffs Ho Tram, our 11 Vietnam itineraries pair championship layouts with handpicked 5-star sanctuaries."
  },
  "Thailand": {
    anchor: "thailand",
    link: "/destinations/thailand/",
    brief: "Mathematically optimized for seamless logistics in Southeast Asia's most established golf market. 10 premier itineraries spanning Phuket beachfront links, royal Hua Hin fairways, Bangkok private clubs, and Chiang Mai mountain sanctuaries."
  },
  "Cambodia": {
    anchor: "cambodia",
    link: "/destinations/cambodia/",
    brief: "The ultimate cultural golf immersion. 6 exclusive itineraries combining Sir Nick Faldo layouts in Siem Reap and Phnom Penh's Vattanac Golf Resort with private dawn Angkor Wat scholar tours and overwater island retreats."
  }
};

const ORDERED_SLUGS_BY_COUNTRY: Record<Country, string[]> = {
  "Vietnam": [
    "da-nang-championship-links",
    "da-nang-luxury-villa-sanctuary",
    "four-seasons-nam-hai-prestige",
    "intercontinental-danang-escape",
    "da-nang-golf-and-nightlife",
    "lang-co-bay-secluded-links",
    "hanoi-heritage-golf-classic",
    "sofitel-metropole-hanoi-colonial",
    "capella-hanoi-ultra-luxe",
    "saigon-bluffs-ho-tram-executive",
    "vietnam-north-to-south-trilogy"
  ],
  "Thailand": [
    "phuket-banyan-tree-championship",
    "chiva-som-hua-hin-wellness-golf",
    "amanpuri-phuket-ultimate-sanctuary",
    "phuket-beach-club-golf-nightlife",
    "hua-hin-v-villas-royal-links",
    "hua-hin-standard-seaside-golf",
    "bangkok-elite-private-clubs",
    "pattaya-championship-golf-swing",
    "chiang-mai-highlands-golf",
    "thailand-dual-coast-bangkok-hua-hin"
  ],
  "Cambodia": [
    "raffles-angkor-golf-and-temples",
    "amansara-angkor-vip-expedition",
    "siem-reap-boutique-retreat-golf",
    "phnom-penh-vattanac-luxury-golf",
    "cambodia-dual-city-siem-reap-phnom-penh",
    "song-saa-private-island-golf-retreat"
  ]
};

interface PackageItem {
  slug: string;
  title: string;
  destination: string;
  country: Country;
  heroImage: string;
  duration: string;
  groupProfile: string;
  guidePriceUsd?: number;
  guidePriceFrom?: number;
  guidePriceCurrency: string;
  coursesPlayed: string[];
}

function getPackages(): PackageItem[] {
  const dataDir = path.join(process.cwd(), 'src/data/packages');
  if (!fs.existsSync(dataDir)) return [];
  return fs.readdirSync(dataDir)
    .filter(file => file.endsWith('.json'))
    .map(file => {
      const raw = fs.readFileSync(path.join(dataDir, file), 'utf-8');
      const data = JSON.parse(raw);

      // Extract courses from itinerary
      const coursesPlayed = Array.from(
        new Set(
          (data.itinerary || [])
            .filter((d: any) => /^Round \d+:|^Championship Golf at /i.test(d.title))
            .map((d: any) => d.title.replace(/^Round \d+:\s*|^Championship Golf at |\s*&\s*VIP Departure$/gi, '').trim())
        )
      ) as string[];

      // Resolve country rigorously
      const destLower = (data.destination || '').toLowerCase();
      const country: Country = data.country || (
        destLower.includes('vietnam') ? 'Vietnam' :
        destLower.includes('thailand') ? 'Thailand' :
        destLower.includes('cambodia') ? 'Cambodia' : 'Vietnam'
      );

      return {
        slug: data.slug,
        title: data.title,
        destination: data.destination,
        country,
        heroImage: data.heroImage,
        duration: data.duration,
        groupProfile: data.groupProfile,
        guidePriceUsd: data.guidePriceUsd,
        guidePriceFrom: data.guidePriceFrom,
        guidePriceCurrency: data.guidePriceCurrency || 'AUD',
        coursesPlayed: coursesPlayed.slice(0, 3)
      };
    });
}

export default function PackageDirectory() {
  const packages = getPackages();

  // Group packages strictly by verified country
  const groupedPackages: Record<Country, PackageItem[]> = {
    Vietnam: [],
    Thailand: [],
    Cambodia: []
  };

  for (const pkg of packages) {
    if (groupedPackages[pkg.country]) {
      groupedPackages[pkg.country].push(pkg);
    } else {
      groupedPackages.Vietnam.push(pkg);
    }
  }

  // Sort each country by curated editorial order
  for (const country of COUNTRIES) {
    const order = ORDERED_SLUGS_BY_COUNTRY[country];
    groupedPackages[country].sort((a, b) => {
      const idxA = order.indexOf(a.slug);
      const idxB = order.indexOf(b.slug);
      if (idxA !== -1 && idxB !== -1) return idxA - idxB;
      if (idxA !== -1) return -1;
      if (idxB !== -1) return 1;
      return (a.guidePriceUsd || 0) - (b.guidePriceUsd || 0);
    });
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
      { "@type": "ListItem", "position": 2, "name": "Packages", "item": "https://www.asiagolfspecialists.com/packages/" }
    ]
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Luxury Golf Package Directory | Asia Golf Specialists",
    "description": "The definitive master catalog of 27 bespoke luxury golf trips across Vietnam, Thailand, and Cambodia.",
    "url": "https://www.asiagolfspecialists.com/packages/",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": packages.map((pkg, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://www.asiagolfspecialists.com/packages/${pkg.slug}/`
      }))
    }
  };

  return (
    <div style={{ backgroundColor: '#050B1A', color: '#F8FAFC', minHeight: '100vh' }}>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Hero Section */}
      <div style={{ position: 'relative', padding: '160px 2rem 60px', textAlign: 'center', backgroundColor: '#020617', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>
        <div style={{ color: '#D4AF37', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600, marginBottom: '1rem' }}>
          Tailored Regional Blueprints
        </div>
        <h1 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#F8FAFC', marginBottom: '1.25rem', lineHeight: 1.15 }}>
          Tailored Private Golf Packages
        </h1>
        <p style={{ color: 'rgba(248, 250, 252, 0.75)', fontSize: '1.2rem', maxWidth: '850px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
          Explore our collection of 27 modular regional golf itineraries across Vietnam, Thailand, and Cambodia. Designed for private 4-balls, groups, and couples with on-page party &amp; duration customization, featuring seamless upgrade paths to our fully hosted Signature Tours.
        </p>

        {/* Quick Jump Country Filter Navigation */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          {COUNTRIES.map(country => (
            <a
              key={country}
              href={`#${countryData[country].anchor}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(212,175,55,0.08)',
                border: '1px solid rgba(212,175,55,0.3)',
                color: '#D4AF37',
                padding: '0.65rem 1.5rem',
                borderRadius: '30px',
                fontSize: '0.9rem',
                fontWeight: 600,
                textDecoration: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <span>{country}</span>
              <span style={{ backgroundColor: '#D4AF37', color: '#050B1A', padding: '0.15rem 0.5rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: 700 }}>
                {groupedPackages[country].length}
              </span>
            </a>
          ))}
          <Link
            href="/tours/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              backgroundColor: '#D4AF37',
              color: '#050B1A',
              padding: '0.65rem 1.5rem',
              borderRadius: '30px',
              fontSize: '0.9rem',
              fontWeight: 700,
              textDecoration: 'none',
              transition: 'all 0.2s ease'
            }}
          >
            ⭐ View Signature Tours &rarr;
          </Link>
        </div>
      </div>

      <div style={{ padding: '4rem 2rem 8rem', maxWidth: '1400px', margin: '0 auto' }}>
        
        {/* Render 3 Distinct Country Sections in Strict Order */}
        {COUNTRIES.map(country => {
          const info = countryData[country];
          const countryPkgs = groupedPackages[country];

          return (
            <section key={country} id={info.anchor} style={{ marginBottom: '6rem', scrollMarginTop: '120px' }}>
              
              {/* Country Section Header */}
              <div style={{ marginBottom: '2.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(212,175,55,0.25)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
                <div>
                  <div style={{ color: '#D4AF37', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600, marginBottom: '0.5rem' }}>
                    Destination Directory &bull; {countryPkgs.length} Flagship Itineraries
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '2.5rem', color: '#F8FAFC', margin: 0 }}>
                    {country} Luxury Golf Packages
                  </h2>
                  <p style={{ color: 'rgba(248, 250, 252, 0.8)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '900px', marginTop: '0.75rem', marginBottom: 0 }}>
                    {info.brief}
                  </p>
                </div>

                <Link
                  href={info.link}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.65rem 1.25rem',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(212, 175, 55, 0.1)',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                    color: '#D4AF37',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    whiteSpace: 'nowrap'
                  }}
                >
                  Explore {country} Guides &rarr;
                </Link>
              </div>

              {/* Grid of All Packages for this Country */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
                {countryPkgs.slice(0, 12).map(pkg => (
                  <Link 
                    key={pkg.slug} 
                    href={`/packages/${pkg.slug}/`}
                    style={{ textDecoration: 'none', display: 'block' }}
                  >
                    <div style={{
                      backgroundColor: 'rgba(255,255,255,0.02)',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      border: '1px solid rgba(212,175,55,0.15)',
                      transition: 'transform 0.2s, border-color 0.2s',
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                    }}>
                      <div style={{ position: 'relative', width: '100%', height: '220px' }}>
                        <Image
                          src={pkg.heroImage || '/images/homepage/hero-slider/vietnam-coastal-golf-course-hoiana-shores-aerial-beachside.webp'}
                          alt={pkg.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 400px"
                          style={{ objectFit: 'cover' }}
                        />
                        <div style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'rgba(2,6,23,0.85)', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.75rem', color: '#D4AF37', border: '1px solid rgba(212,175,55,0.3)', fontWeight: 600 }}>
                          {pkg.groupProfile}
                        </div>
                        <div style={{ position: 'absolute', bottom: '0.75rem', left: '0.75rem', backgroundColor: 'rgba(5,11,26,0.85)', padding: '0.25rem 0.65rem', borderRadius: '4px', fontSize: '0.75rem', color: '#F8FAFC', backdropFilter: 'blur(4px)' }}>
                          📍 {pkg.destination.split(',')[0]}
                        </div>
                      </div>
                      
                      <div style={{ padding: '1.75rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <div style={{ color: '#D4AF37', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem', fontWeight: 600 }}>
                          {pkg.duration?.split('(')[0]}
                        </div>
                        
                        <h3 style={{ fontSize: '1.25rem', color: '#F8FAFC', margin: '0 0 1rem 0', lineHeight: 1.35, fontFamily: 'var(--font-primary-serif)' }}>
                          {pkg.title}
                        </h3>

                        {pkg.coursesPlayed.length > 0 && (
                          <div style={{ fontSize: '0.8rem', color: 'rgba(248,250,252,0.6)', marginBottom: '1.25rem', lineHeight: 1.5 }}>
                            ⛳ <span style={{ color: 'rgba(248,250,252,0.85)' }}>{pkg.coursesPlayed.join(' • ')}</span>
                          </div>
                        )}
                        
                        <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div>
                            {pkg.guidePriceFrom ? (
                              <div>
                                <div style={{ color: 'rgba(248,250,252,0.5)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>From</div>
                                <div style={{ color: '#F8FAFC', fontSize: '1.05rem', fontWeight: 600 }}>
                                  ${(pkg.guidePriceUsd || Math.round(pkg.guidePriceFrom * 0.65)).toLocaleString()} USD
                                  <span style={{ color: '#D4AF37', fontSize: '0.85rem', marginLeft: '0.35rem', fontWeight: 500 }}>(~${pkg.guidePriceFrom.toLocaleString()} AUD)</span>
                                </div>
                              </div>
                            ) : (
                              <div style={{ color: 'rgba(248,250,252,0.5)', fontSize: '0.85rem' }}>Price on Request</div>
                            )}
                          </div>
                          <span style={{ color: '#D4AF37', fontSize: '0.85rem', fontWeight: 600 }}>
                            Configure &rarr;
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

            </section>
          );
        })}

        {/* Lightweight Complete Crawlable Archive for Search Engines */}
        <div style={{ marginTop: '4rem', padding: '2.5rem', backgroundColor: 'rgba(255,255,255,0.02)', border: '1px solid rgba(212,175,55,0.2)', borderRadius: '8px' }}>
          <details open>
            <summary style={{ cursor: 'pointer', color: '#D4AF37', fontWeight: 600, fontSize: '1.1rem', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Complete Flagship Package Catalog &amp; Route Index (All 27 Itineraries)
            </summary>
            <div style={{ marginTop: '1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1rem 2rem' }}>
              {packages.map(pkg => (
                <div key={pkg.slug}>
                  <Link href={`/packages/${pkg.slug}/`} style={{ color: 'rgba(248,250,252,0.85)', textDecoration: 'none', fontSize: '0.92rem' }}>
                    &bull; <strong>{pkg.country}:</strong> {pkg.title}
                  </Link>
                </div>
              ))}
            </div>
          </details>
        </div>

      </div>
    </div>
  );
}
