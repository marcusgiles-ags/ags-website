import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import InlineFastInquiry from '@/components/InlineFastInquiry';
import PackageConfigurator from '@/components/PackageConfigurator';

export const dynamicParams = false;

interface FeaturedVenue {
  name: string;
  type: 'course' | 'accommodation';
  href: string;
  image: string;
  badge?: string;
  highlight?: string;
}

interface ItineraryDay {
  day: number;
  title: string;
  subtitle?: string;
  courseName?: string;
  courseHref?: string;
  architect?: string;
  stayName?: string;
  stayHref?: string;
  transferTime?: string;
  image?: string;
  imageCaption?: string;
  imageAlt?: string;
  description: string;
  evening?: {
    title: string;
    description: string;
    image?: string;
    imageCaption?: string;
    imageAlt?: string;
  };
}

interface PackageData {
  slug: string;
  title: string;
  description: string;
  heroImage: string;
  destination: string;
  country?: string;
  groupProfile: string;
  intent: string;
  duration?: string;
  guidePriceUsd?: number;
  guidePriceFrom?: number;
  guidePriceCurrency?: string;
  signatureTour?: {
    slug: string;
    title: string;
    duration: string;
    heroImage: string;
    highlight: string;
  };
  featuredVenues?: FeaturedVenue[];
  inclusions: { item: string; detail: string }[];
  itinerary: ItineraryDay[];
  faqs: { question: string; answer: string }[];
}

export async function generateStaticParams() {
  const dataDir = path.join(process.cwd(), 'src', 'data', 'packages');
  if (!fs.existsSync(dataDir)) return [];
  const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json'));
  return files.map(file => ({
    slug: file.replace('.json', ''),
  }));
}

function getPackageData(slug: string): PackageData | null {
  const filePath = path.join(process.cwd(), 'src', 'data', 'packages', `${slug}.json`);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function getRelatedPackages(currentSlug: string, destination: string) {
  const dataDir = path.join(process.cwd(), 'src', 'data', 'packages');
  if (!fs.existsSync(dataDir)) return [];
  const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.json')).sort();
  const allPackages = files.map(file => {
    const raw = fs.readFileSync(path.join(dataDir, file), 'utf8');
    return JSON.parse(raw);
  });
  
  // Deterministic ring rotation across all packages in the same destination so every package receives 3 inbound links
  const sameDest = allPackages
    .filter(p => p.destination === destination)
    .sort((a, b) => a.slug.localeCompare(b.slug));
  
  const currentIndex = sameDest.findIndex(p => p.slug === currentSlug);
  const picked: typeof allPackages = [];
  if (sameDest.length > 1) {
    const startIdx = currentIndex >= 0 ? currentIndex : 0;
    const count = Math.min(3, sameDest.length - 1);
    for (let i = 1; i <= count; i++) {
      picked.push(sameDest[(startIdx + i) % sameDest.length]);
    }
  }

  return picked.map(p => ({
    slug: p.slug,
    title: p.title,
    heroImage: p.heroImage,
    destination: p.destination
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getPackageData(slug);
  if (!data) return {};
  
  const rawTitle = data.title;
  const seoTitle = (rawTitle.length + 6 <= 60)
    ? rawTitle
    : { absolute: `${rawTitle.slice(0, 50).trim()} | AGS` };
  
  return {
    title: seoTitle,
    description: data.description,
    alternates: {
      canonical: `https://www.asiagolfspecialists.com/packages/${slug}/`,
    },
    openGraph: {
      type: 'website',
      title: typeof seoTitle === 'string' ? `${seoTitle} | AGS` : seoTitle.absolute,
      description: data.description,
      url: `https://www.asiagolfspecialists.com/packages/${slug}/`,
      images: [data.heroImage],
    },
  };
}

export default async function PackagePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getPackageData(slug);
  if (!data) notFound();

  const relatedPackages = getRelatedPackages(slug, data.destination);

  // Derive canonical country slug for breadcrumb links and schema
  const destLower = (data.destination || '').toLowerCase();
  const countrySlug = destLower.includes('vietnam')
    ? 'vietnam'
    : destLower.includes('thailand')
    ? 'thailand'
    : destLower.includes('cambodia')
    ? 'cambodia'
    : 'vietnam';
  const countryName = countrySlug.charAt(0).toUpperCase() + countrySlug.slice(1);

  // Extract specific courses, accommodation, and non-golf highlights from the itinerary & inclusions for dynamic GEO differentiation
  const golfCoursesPlayed = Array.from(
    new Set(
      data.itinerary
        .filter((d) => /^Round \d+:|^Championship Golf at /i.test(d.title))
        .map((d) => d.title.replace(/^Round \d+:\s*|^Championship Golf at |\s*&\s*VIP Departure$/gi, '').trim())
    )
  );
  const nonGolfExperiences = data.itinerary
    .filter((d) => !/^Round \d+:|^Championship Golf at |^VIP Arrival|^Departure/i.test(d.title))
    .map((d) => d.title.trim());
  const accommodationDetail =
    data.inclusions.find((inc) => /Accommodation/i.test(inc.item))?.detail ||
    `5-star luxury accommodation in ${data.destination}`;
  const golfRoundsDetail =
    data.inclusions.find((inc) => /^Championship Golf$|^Golf$/i.test(inc.item))?.detail ||
    `${golfCoursesPlayed.length || 3} championship rounds in ${data.destination}`;
  const usdGuidePrice = data.guidePriceUsd || (data.guidePriceFrom ? Math.round(data.guidePriceFrom * 0.65) : null);

  const faqsSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const tripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": data.title,
    "description": data.description,
    "url": `https://www.asiagolfspecialists.com/packages/${slug}/`,
    "image": `https://www.asiagolfspecialists.com${data.heroImage}`,
    "touristType": [data.groupProfile, data.intent, "Golf Travelers"],
    "provider": {
      "@type": "TravelAgency",
      "@id": "https://www.asiagolfspecialists.com/#organization",
      "name": "Asia Golf Specialists",
      "url": "https://www.asiagolfspecialists.com/",
      "image": "https://www.asiagolfspecialists.com/images/brand-library/logos/ags-logo-the-club-mark-nobkgrd.webp",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "27 Nguyen Phan Vinh",
        "addressLocality": "Hoi An",
        "addressRegion": "Da Nang",
        "postalCode": "550000",
        "addressCountry": "VN"
      }
    },
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": data.itinerary.map((day) => ({
        "@type": "ListItem",
        "position": day.day,
        "item": {
          "@type": "TouristAttraction",
          "name": `Day ${day.day}: ${day.title}`,
          "description": day.description.replace(/<[^>]+>/g, ''),
          ...(day.courseHref
            ? { "url": `https://www.asiagolfspecialists.com${day.courseHref}` }
            : day.stayHref
            ? { "url": `https://www.asiagolfspecialists.com${day.stayHref}` }
            : {}),
          ...(day.image ? { "image": `https://www.asiagolfspecialists.com${day.image}` } : {})
        }
      }))
    },
    ...(usdGuidePrice ? {
      "offers": {
        "@type": "Offer",
        "price": usdGuidePrice,
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "url": `https://www.asiagolfspecialists.com/packages/${slug}/`,
        "priceSpecification": {
          "@type": "PriceSpecification",
          "minPrice": usdGuidePrice,
          "priceCurrency": "USD"
        }
      }
    } : {})
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
      { "@type": "ListItem", "position": 2, "name": "Packages", "item": "https://www.asiagolfspecialists.com/packages/" },
      { "@type": "ListItem", "position": 3, "name": `${countryName} Golf`, "item": `https://www.asiagolfspecialists.com/destinations/${countrySlug}/` },
      { "@type": "ListItem", "position": 4, "name": data.title, "item": `https://www.asiagolfspecialists.com/packages/${slug}/` }
    ]
  };

  return (
    <main style={{ backgroundColor: '#050B1A', color: '#F8FAFC', minHeight: '100vh', paddingBottom: '5rem' }}>
      <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqsSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section style={{ position: 'relative', height: '60vh', minHeight: '500px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <Image src={data.heroImage} alt={data.title} fill style={{ objectFit: 'cover' }} priority />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(5, 11, 26, 0.7), rgba(5, 11, 26, 1))' }} />
        </div>
        
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <div style={{ color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.875rem', fontWeight: 600, marginBottom: '1.5rem', textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
            {data.destination} | {data.groupProfile} | {data.intent} {data.duration ? `| ${data.duration}` : ''}
          </div>
          <h1 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', margin: '0 0 1.5rem', lineHeight: 1.1, textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}>
            {data.title}
          </h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 3rem', color: 'rgba(248, 250, 252, 0.9)', lineHeight: 1.6, textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
            {data.description}
          </p>
          <Link href="/quote/" style={{ display: 'inline-block', backgroundColor: '#D4AF37', color: '#050B1A', padding: '1rem 3rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, fontSize: '0.875rem', border: '1px solid #D4AF37', transition: 'all 0.3s ease', textDecoration: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
            Request a Proposal
          </Link>
        </div>
      </section>

      <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '4rem 2rem' }}>
        
        {/* Visual Breadcrumbs */}
        <nav style={{ marginBottom: '2rem', fontSize: '0.875rem', color: 'rgba(248, 250, 252, 0.6)' }} aria-label="Breadcrumb">
          <Link href="/" style={{ color: '#D4AF37', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <Link href="/packages/" style={{ color: '#D4AF37', textDecoration: 'none' }}>Packages</Link>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <Link href={`/destinations/${countrySlug}/`} style={{ color: '#D4AF37', textDecoration: 'none' }}>{countryName} Golf</Link>
          <span style={{ margin: '0 0.5rem' }}>/</span>
          <span style={{ color: '#F8FAFC' }} aria-current="page">{data.title}</span>
        </nav>

        {/* GEO AI Citation Block - Dynamically Generated From Specific Itinerary & Venue Data */}
        <section className="geo-summary" style={{ marginBottom: '4rem', padding: '3rem 2rem', backgroundColor: 'rgba(212,175,55,0.03)', border: '1px solid rgba(212,175,55,0.1)', borderRadius: '8px' }}>
          <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.5rem', color: '#D4AF37', marginBottom: '1.5rem', letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'center' }}>Curator&apos;s Brief: {data.title}</h2>
          <div style={{ color: 'rgba(248, 250, 252, 0.85)', fontSize: '1.05rem', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '1rem' }}>
              The <strong>{data.title}</strong> is an engineered blueprint designed specifically for a <strong>{data.groupProfile}</strong> seeking a premier <strong>{data.intent}</strong> golf vacation in <strong>{data.destination}</strong>. Across this program, your party enjoys guaranteed tee times at {golfCoursesPlayed.length > 0 ? <strong>{golfCoursesPlayed.join(', ')}</strong> : 'prestigious regional courses'} ({golfRoundsDetail.replace(/\.$/, '')}), complete with dedicated caddie pairings, premium buggies, and private executive vehicle logistics.
            </p>
            <p style={{ marginBottom: '1rem' }}>
              Off-course accommodation is anchored at <strong>{accommodationDetail.replace(/\.$/, '')}</strong>{nonGolfExperiences.length > 0 ? `, paired with signature local touches including ${nonGolfExperiences.join(' and ')}` : ''}. Every transfer and bag handover is managed end-to-end by Asia Golf Specialists&apos; on-the-ground concierge team.
            </p>
            <p style={{ marginBottom: '1.5rem' }}>
              {usdGuidePrice
                ? `Baseline guide pricing for the ${data.title} starts from $${usdGuidePrice.toLocaleString()} USD (~$${data.guidePriceFrom?.toLocaleString()} AUD) per golfer, covering golf green fees, caddie allocations, 5-star accommodation, and private door-to-door ground logistics.`
                : `Every ${data.title} proposal is custom-costed to your exact travel window, group dynamic, and preferred tee sheet schedule.`}
            </p>
            <div style={{ overflowX: 'auto', marginTop: '1.5rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.25)', fontSize: '0.95rem' }}>
                <thead>
                  <tr style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', color: '#D4AF37', textAlign: 'left' }}>
                    <th style={{ padding: '0.85rem 1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.25)' }}>Specification</th>
                    <th style={{ padding: '0.85rem 1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.25)' }}>Verified Blueprint Detail</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#F8FAFC' }}>Destination &amp; Profile</td>
                    <td style={{ padding: '0.75rem 1rem' }}>{data.destination} &bull; {data.groupProfile} ({data.intent})</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#F8FAFC' }}>Duration &amp; Golf Allocation</td>
                    <td style={{ padding: '0.75rem 1rem' }}>{data.duration || `${data.itinerary.length} Days`} &bull; {golfRoundsDetail}</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#F8FAFC' }}>Featured Championship Courses</td>
                    <td style={{ padding: '0.75rem 1rem' }}>{golfCoursesPlayed.length > 0 ? golfCoursesPlayed.join(' &bull; ') : `Top Championship Courses in ${data.destination}`}</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#F8FAFC' }}>Designated Sanctuary Base</td>
                    <td style={{ padding: '0.75rem 1rem' }}>{accommodationDetail}</td>
                  </tr>
                  {usdGuidePrice && (
                    <tr>
                      <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: '#F8FAFC' }}>Audited Guide Price</td>
                      <td style={{ padding: '0.75rem 1rem', color: '#D4AF37', fontWeight: 600 }}>From ${usdGuidePrice.toLocaleString()} USD (~${data.guidePriceFrom?.toLocaleString()} AUD) pp</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Flagship Signature Tour Connection Banner */}
        {data.signatureTour && (
          <section style={{
            margin: '0 0 4rem',
            padding: '2.5rem',
            background: 'linear-gradient(135deg, rgba(2,6,23,0.95) 0%, rgba(15,23,42,0.95) 100%)',
            border: '2px solid #D4AF37',
            borderRadius: '8px',
            boxShadow: '0 12px 30px rgba(0,0,0,0.6)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
              <div style={{ position: 'relative', height: '220px', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(212,175,55,0.3)' }}>
                <Image src={data.signatureTour.heroImage} alt={data.signatureTour.title} fill style={{ objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', backgroundColor: '#D4AF37', color: '#050B1A', padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', borderRadius: '3px' }}>
                  Signature Tour Experience
                </div>
              </div>
              <div>
                <div style={{ color: '#D4AF37', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600, marginBottom: '0.5rem' }}>
                  Featured Signature Itinerary &bull; {data.signatureTour.duration}
                </div>
                <h3 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.8rem', color: '#F8FAFC', margin: '0 0 1rem 0', lineHeight: 1.2 }}>
                  {data.signatureTour.title}
                </h3>
                <p style={{ color: 'rgba(248, 250, 252, 0.8)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {data.signatureTour.highlight}
                </p>
                <Link
                  href={`/tours/${data.signatureTour.slug}/`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    backgroundColor: '#D4AF37',
                    color: '#050B1A',
                    padding: '0.85rem 1.75rem',
                    borderRadius: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s'
                  }}
                >
                  Explore Signature Tour &rarr;
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Interactive Configurator: Group Size & Duration */}
        <PackageConfigurator
          packageSlug={slug}
          packageTitle={data.title}
          destination={data.destination}
          baseDurationText={data.duration || `${data.itinerary.length} Days`}
          basePriceUsd={usdGuidePrice || 1400}
          basePriceAud={data.guidePriceFrom || 2150}
          baseGroupProfile={data.groupProfile}
        />

        {/* Logistics & Inclusions Table */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '2rem', color: '#D4AF37', marginBottom: '2rem', textAlign: 'center' }}>Package Inclusions &amp; Logistics</h2>
          <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
            <tbody>
              {data.inclusions.map((inc, i) => (
                <tr key={i} style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.1)', backgroundColor: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                  <td style={{ padding: '1.5rem', fontWeight: 600, color: '#D4AF37', width: '30%', verticalAlign: 'top' }}>{inc.item}</td>
                  <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.8)', lineHeight: 1.6 }}>{inc.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Featured Venues Showcase: Championship Courses & Luxury Stays */}
        {data.featuredVenues && data.featuredVenues.length > 0 && (
          <section style={{ marginBottom: '5rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span style={{ color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.8rem', fontWeight: 700 }}>
                World-Class Architecture &amp; Sanctuary Living
              </span>
              <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '2.25rem', color: '#F8FAFC', margin: '0.5rem 0 0.75rem' }}>
                Featured Venues in This Itinerary
              </h2>
              <p style={{ color: 'rgba(248, 250, 252, 0.75)', maxWidth: '680px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.6 }}>
                Every course and accommodation in this blueprint has been personally vetted by Asia Golf Specialists for tournament-grade conditioning, architectural integrity, and uncompromising hospitality.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {data.featuredVenues.map((venue, idx) => (
                <Link key={idx} href={venue.href} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column' }}>
                  <div style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    transition: 'transform 0.2s, border-color 0.2s',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.4)'
                  }}>
                    <div style={{ position: 'relative', width: '100%', height: '190px' }}>
                      <Image src={venue.image} alt={venue.name} fill style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 320px" />
                      <div style={{
                        position: 'absolute',
                        top: '0.75rem',
                        left: '0.75rem',
                        backgroundColor: venue.type === 'course' ? 'rgba(5, 11, 26, 0.9)' : 'rgba(212, 175, 55, 0.95)',
                        color: venue.type === 'course' ? '#D4AF37' : '#050B1A',
                        border: venue.type === 'course' ? '1px solid rgba(212, 175, 55, 0.4)' : 'none',
                        padding: '0.25rem 0.65rem',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.08em',
                        borderRadius: '3px'
                      }}>
                        {venue.type === 'course' ? '⛳ Championship Course' : '🏨 Luxury Sanctuary'}
                      </div>
                    </div>
                    <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                      <div>
                        <h3 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.25rem', color: '#F8FAFC', margin: '0 0 0.5rem', lineHeight: 1.3 }}>
                          {venue.name}
                        </h3>
                        {venue.badge && (
                          <div style={{ color: '#D4AF37', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.35rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {venue.badge}
                          </div>
                        )}
                        {venue.highlight && (
                          <div style={{ color: 'rgba(248, 250, 252, 0.65)', fontSize: '0.85rem' }}>
                            {venue.highlight}
                          </div>
                        )}
                      </div>
                      <div style={{ marginTop: '1rem', paddingTop: '0.75rem', borderTop: '1px solid rgba(255, 255, 255, 0.08)', color: '#D4AF37', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.05em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        <span>{venue.type === 'course' ? 'Explore Course Architecture & Review' : 'View Luxury Sanctuary'}</span>
                        <span>&rarr;</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Itinerary - Ordered List */}
        <section style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.8rem', fontWeight: 700 }}>
              The Engineered Blueprint
            </span>
            <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '2.25rem', color: '#F8FAFC', margin: '0.5rem 0 0.75rem' }}>
              The Day-by-Day Itinerary
            </h2>
            <p style={{ color: 'rgba(248, 250, 252, 0.75)', maxWidth: '650px', margin: '0 auto', fontSize: '1rem' }}>
              Designed with tactical tee timing, minimal transfer fatigue, and premium post-round restoration.
            </p>
          </div>

          <ol style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {data.itinerary.map((day, i) => (
              <li
                key={i}
                style={{
                  padding: '2.5rem',
                  backgroundColor: 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid rgba(212, 175, 55, 0.25)',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
                  position: 'relative'
                }}
              >
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                      <span style={{
                        backgroundColor: '#D4AF37',
                        color: '#050B1A',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '4px',
                        fontSize: '0.75rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                      }}>
                        Day {day.day}
                      </span>
                      {day.subtitle && (
                        <span style={{ color: 'rgba(248, 250, 252, 0.6)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                          {day.subtitle}
                        </span>
                      )}
                    </div>
                    <h3 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)', margin: 0, color: '#F8FAFC', fontFamily: 'var(--font-primary-serif)', lineHeight: 1.25 }}>
                      {day.title}
                    </h3>
                  </div>

                  {day.architect && (
                    <div style={{ padding: '0.5rem 1rem', backgroundColor: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(212, 175, 55, 0.25)', borderRadius: '6px', textAlign: 'right' }}>
                      <span style={{ display: 'block', fontSize: '0.7rem', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Architect</span>
                      <span style={{ fontSize: '0.9rem', color: '#F8FAFC', fontWeight: 600 }}>{day.architect}</span>
                    </div>
                  )}
                </div>

                {/* Key Metrics Chips */}
                {(day.courseName || day.stayName || day.transferTime) && (
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.75rem',
                    padding: '0.85rem 1.25rem',
                    backgroundColor: 'rgba(5, 11, 26, 0.8)',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    marginBottom: '1.5rem',
                    fontSize: '0.85rem'
                  }}>
                    {day.courseName && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(248, 250, 252, 0.8)' }}>
                        <span style={{ color: '#D4AF37' }}>⛳ Course:</span>
                        {day.courseHref ? (
                          <Link href={day.courseHref} style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px', fontWeight: 600 }}>
                            {day.courseName}
                          </Link>
                        ) : (
                          <span style={{ color: '#F8FAFC', fontWeight: 600 }}>{day.courseName}</span>
                        )}
                      </div>
                    )}
                    {day.stayName && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(248, 250, 252, 0.8)' }}>
                        <span style={{ color: '#D4AF37' }}>🏨 Sanctuary:</span>
                        {day.stayHref ? (
                          <Link href={day.stayHref} style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px', fontWeight: 600 }}>
                            {day.stayName}
                          </Link>
                        ) : (
                          <span style={{ color: '#F8FAFC', fontWeight: 600 }}>{day.stayName}</span>
                        )}
                      </div>
                    )}
                    {day.transferTime && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'rgba(248, 250, 252, 0.8)' }}>
                        <span style={{ color: '#D4AF37' }}>⏱️ Transit:</span>
                        <span style={{ color: '#F8FAFC' }}>{day.transferTime}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Day Image */}
                {day.image && (
                  <div style={{
                    margin: '1.5rem 0',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    border: '1px solid rgba(212, 175, 55, 0.25)',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.5)'
                  }}>
                    <div style={{ position: 'relative', width: '100%', height: '380px' }}>
                      <Image
                        src={day.image}
                        alt={day.imageAlt || day.title}
                        fill
                        style={{ objectFit: 'cover' }}
                        sizes="(max-width: 1024px) 100vw, 950px"
                      />
                    </div>
                    {day.imageCaption && (
                      <div style={{
                        padding: '0.75rem 1.25rem',
                        backgroundColor: 'rgba(5, 11, 26, 0.95)',
                        borderTop: '1px solid rgba(212, 175, 55, 0.15)',
                        fontSize: '0.85rem',
                        color: 'rgba(248, 250, 252, 0.75)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <span style={{ color: '#D4AF37' }}>◆</span>
                        <span>{day.imageCaption}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Narrative Description */}
                <div
                  style={{ color: 'rgba(248, 250, 252, 0.88)', lineHeight: 1.85, fontSize: '1.05rem', marginTop: '1rem' }}
                  dangerouslySetInnerHTML={{ __html: day.description }}
                />

                {/* Evening Card */}
                {day.evening && (
                  <div style={{ marginTop: '2rem', padding: '1.5rem', backgroundColor: 'rgba(212,175,55,0.05)', borderRadius: '8px', border: '1px solid rgba(212,175,55,0.2)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                      <span style={{ fontSize: '1.1rem' }}>🌙</span>
                      <h4 style={{ color: '#D4AF37', margin: 0, fontFamily: 'var(--font-primary-serif)', fontSize: '1.25rem' }}>
                        Evening: {day.evening.title}
                      </h4>
                    </div>
                    <div style={{ color: 'rgba(248, 250, 252, 0.8)', lineHeight: 1.7, fontSize: '0.98rem' }} dangerouslySetInnerHTML={{ __html: day.evening.description }} />
                    {day.evening.image && (
                      <div style={{ position: 'relative', width: '100%', height: '240px', borderRadius: '6px', overflow: 'hidden', marginTop: '1rem', border: '1px solid rgba(212,175,55,0.2)' }}>
                        <Image src={day.evening.image} alt={day.evening.imageAlt || day.evening.title} fill style={{ objectFit: 'cover' }} />
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
          </ol>
          <div style={{ marginTop: '3rem', padding: '2rem', backgroundColor: 'rgba(212,175,55,0.03)', borderRadius: '8px', border: '1px solid rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: '#D4AF37', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Image src="/images/brand-library/logos/ags-logo-the-club-mark-nobkgrd.webp" alt="AGS Local Experts" width={50} height={50} style={{ objectFit: 'contain' }} />
            </div>
            <div>
              <h4 style={{ color: '#F8FAFC', margin: '0 0 0.5rem 0', fontSize: '1.1rem', fontFamily: 'var(--font-primary-serif)' }}>Curated by Local Guardians</h4>
              <p style={{ color: 'rgba(248, 250, 252, 0.7)', margin: 0, fontSize: '0.95rem', lineHeight: 1.5 }}>Every detail of this {data.groupProfile} {data.intent} itinerary has been meticulously vetted and crafted by the Asia Golf Specialists on-the-ground concierge team to ensure flawless logistics and premium championship experiences.</p>
            </div>
          </div>
        </section>

        {/* Fast Inquiry Module */}
        <InlineFastInquiry
          packageTitle={data.title}
          destination={data.destination}
          defaultGroupProfile={data.groupProfile}
        />

        {/* FAQs */}
        <section style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '2rem', color: '#D4AF37', marginBottom: '2rem', textAlign: 'center' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'grid', gap: '2rem' }}>
            {data.faqs.map((faq, i) => (
              <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.03)', padding: '2rem', borderRadius: '4px', border: '1px solid rgba(212,175,55,0.1)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#F8FAFC', fontWeight: 600 }}>{faq.question}</h3>
                <p style={{ color: 'rgba(248, 250, 252, 0.7)', lineHeight: 1.7, margin: 0 }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Curated Tour Promotion - Priority Link */}
        <section style={{ marginBottom: '4rem', padding: '3rem', backgroundColor: '#020617', borderRadius: '8px', border: '2px solid #D4AF37', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '2.5rem', color: '#D4AF37', marginBottom: '1rem' }}>Looking for Flagship Signature Tours?</h2>
          <p style={{ fontSize: '1.15rem', color: 'rgba(248, 250, 252, 0.8)', maxWidth: '700px', margin: '0 auto 2rem', lineHeight: 1.6 }}>
            Our Signature Tours represent the absolute pinnacle of luxury golf travel across Southeast Asia. Fully hosted, masterfully curated, and designed for unforgettable experiences.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {data.signatureTour && (
              <Link href={`/tours/${data.signatureTour.slug}/`} style={{ display: 'inline-block', backgroundColor: '#D4AF37', color: '#050B1A', padding: '1rem 2.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none' }}>
                View {data.signatureTour.title}
              </Link>
            )}
            <Link href="/tours/" style={{ display: 'inline-block', backgroundColor: 'transparent', color: '#D4AF37', border: '1px solid #D4AF37', padding: '1rem 2.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none' }}>
              Browse All Signature Tours
            </Link>
          </div>
        </section>

        {/* Related Packages - Internal Linking Mesh for SEO */}
        {relatedPackages.length > 0 && (
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '2rem', color: '#D4AF37', marginBottom: '2rem', textAlign: 'center' }}>Explore More {data.destination} Packages</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {relatedPackages.map((pkg, i) => (
                <Link key={i} href={`/packages/${pkg.slug}/`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(212,175,55,0.1)', transition: 'transform 0.2s', cursor: 'pointer', height: '100%' }}>
                    <div style={{ position: 'relative', width: '100%', height: '200px' }}>
                      <Image src={pkg.heroImage} alt={pkg.title} fill style={{ objectFit: 'cover' }} />
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                      <div style={{ color: '#D4AF37', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>{pkg.destination}</div>
                      <h3 style={{ fontSize: '1.2rem', color: '#F8FAFC', margin: 0, lineHeight: 1.4, fontFamily: 'var(--font-primary-serif)' }}>{pkg.title}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

      </div>
    </main>
  );
}
