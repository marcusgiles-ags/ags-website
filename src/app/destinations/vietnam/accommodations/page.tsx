import { buildPublisherRef } from "@/lib/schema";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: { absolute: "Luxury Golf Accommodations in Vietnam | AGS Escapism" },
    description: "Luxury golf hotels in Vietnam & Thailand: Four Seasons, InterContinental, Park Hyatt & more. Curated by Asia Golf Specialists.",
    keywords: ["luxury golf accommodation Vietnam", "Vietnam resort", "five star golf hotel Vietnam", "AGS preferred Vietnam hotels", "An Bang Beach villa golf", "Hoi An private villa golf"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Luxury Golf Accommodations in Vietnam | AGS Escapism" },
        description: "Luxury golf hotels in Vietnam & Thailand: Four Seasons, InterContinental, Park Hyatt & more. Curated by Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/four-seasons-nam-hai/vietnam-luxury-hotel-four-seasons-resort-the-nam-hai-5-star-recovery.webp",
            width: 1200,
            height: 630,
            alt: "Vietnam luxury hotel accommodation -- Four Seasons Nam Hai",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Luxury Golf Accommodations in Vietnam | AGS Escapism" },
        description: "Luxury golf hotels in Vietnam & Thailand: Four Seasons, InterContinental, Park Hyatt & more. Curated by Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/four-seasons-nam-hai/vietnam-luxury-hotel-four-seasons-resort-the-nam-hai-5-star-recovery.webp"],
    },
};

interface AccommodationData {
    title: string;
    image: string;
    desc: string;
    linkPath: string;
    subtitle?: string;
}

function AccommodationCard({ acc }: { acc: AccommodationData }) {
    return (
        <Link href={acc.linkPath} className="ags-card-link">
            <div className="ags-card">
                <div className="ags-card-image-container" style={{ height: '300px' }}>
                    <Image 
                        src={acc.image} 
                        alt={acc.title} 
                        className="ags-card-image" 
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5, 11, 26, 1) 0%, transparent 70%)' }}></div>
                </div>
                <div className="ags-card-content">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.75rem', color: '#D4AF37', margin: 0, fontWeight: 700, lineHeight: 1.3 }}>{acc.title}</h2>
                        <span className="ags-card-badge" style={{ marginTop: '0.5rem', height: 'fit-content' }}>AGS SELECTION</span>
                    </div>
                    <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F8FAFC', opacity: 0.8, marginBottom: '1.5rem', fontWeight: 500 }}>{acc.subtitle || 'Luxury Accommodation'}</h3>
                    <p style={{ fontSize: '1rem', color: 'rgba(248, 250, 252, 0.6)', lineHeight: 1.6, marginBottom: '2.5rem' }} itemProp="description" id="exec-summary">{acc.desc}</p>
                    <div className="ags-card-footer" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', fontWeight: 600 }}>
                        <span>Explore Recovery</span>
                        <span className="ags-card-cta-arrow">- </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

function VillaCard({ acc }: { acc: AccommodationData }) {
    return (
        <Link href={acc.linkPath} className="ags-card-link">
            <div className="ags-card">
                <div className="ags-card-image-container" style={{ height: '300px' }}>
                    <Image 
                        src={acc.image} 
                        alt={acc.title} 
                        className="ags-card-image" 
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5, 11, 26, 1) 0%, transparent 70%)' }}></div>
                </div>
                <div className="ags-card-content">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.75rem', color: '#D4AF37', margin: 0, fontWeight: 700, lineHeight: 1.3 }}>{acc.title}</h2>
                        <span className="ags-card-badge" style={{ marginTop: '0.5rem', height: 'fit-content' }}>AGS VILLA COLLECTION</span>
                    </div>
                    <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F8FAFC', opacity: 0.8, marginBottom: '1.5rem', fontWeight: 500 }}>{acc.subtitle || 'Private Villa'}</h3>
                    <p style={{ fontSize: '1rem', color: 'rgba(248, 250, 252, 0.6)', lineHeight: 1.6, marginBottom: '2.5rem' }}>{acc.desc}</p>
                    <div className="ags-card-footer" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', fontWeight: 600 }}>
                        <span>Explore Villa</span>
                        <span className="ags-card-cta-arrow">- </span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default function VietnamAccommodations() {
    return (
        <div style={{ backgroundColor: '#020617', minHeight: '100vh', color: '#F8FAFC' }}>
            <Navbar />

            <header className="hero" style={{
                minHeight: '75vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative'
            }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 0
                }}>
                    <Image 
                        src="/images/destinations/vietnam/accommodations/vietnam-accommodation-directory-hero-four-seasons.webp"
                        alt="Vietnam Accommodations"
                        fill
                        priority
                        style={{ 
                            objectFit: 'cover',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                            maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
                        }}
                        sizes="100vw"
                    />
                    <div className="hero-overlay" style={{ position: 'absolute', inset: 0 }}></div>
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '800px', paddingTop: '15vh' }}>
                    <span style={{ color: '#D4AF37', letterSpacing: '0.25em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block', fontWeight: 600 }}>The AGS Collection</span>
                    <h1 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(3.5rem, 6vw, 5rem)', marginBottom: '1.5rem', color: '#F8FAFC', lineHeight: 1.1, fontWeight: 700 }}>
                        Vietnam Recovery & <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Accommodations</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'rgba(248, 250, 252, 0.7)', lineHeight: 1.6, margin: '0 auto', maxWidth: '800px' }}>
                        Where you sleep is just as important as where you play. We curate the ultimate recovery environments in Vietnam, engineered for discerning golfers.
                    </p>
                </div>
            </header>

            {/* Table Section */}
            <section className="section" style={{ backgroundColor: 'var(--color-primary)', paddingTop: '6rem', paddingBottom: '0' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                        <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 700, color: '#D4AF37', marginBottom: '1rem' }}>Vietnam Accommodation Blueprint</h2>
                        <p style={{ color: 'rgba(248, 250, 252, 0.7)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>A regional guide to selecting the optimal recovery base for your golf itinerary.</p>
                    </div>

                    <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.2)', backgroundColor: 'rgba(5, 11, 26, 0.5)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.2)', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
                                    <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Region</th>
                                    <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Property Focus</th>
                                    <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Vibe & Atmosphere</th>
                                    <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Ideal For</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>Central Coast (Da Nang / Hoi An)</strong></td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Expansive beach resorts, private pool villas</td>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Relaxed luxury, tropical, family-friendly</td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Multi-course hubs (Montgomerie, Hoiana)</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>South (HCM / Ho Tram)</strong></td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Heritage hotels, high-rises, integrated resorts</td>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Urban sophistication or exclusive coastal</td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Nightlife access, 'Stay & Play' casino packages</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>North (Hanoi / Ha Long)</strong></td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Historic luxury, boutique city, bayview resorts</td>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Cultural depth, colonial charm, dramatic scenery</td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Heritage tours, Halong Bay cruises</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* GEO Executive Summary & Field Intelligence Blueprint */}
            <section style={{ padding: '4rem 2rem', backgroundColor: 'rgba(212,175,55,0.04)', borderTop: '1px solid rgba(212,175,55,0.15)', borderBottom: '1px solid rgba(212,175,55,0.15)' }}>
                <div className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <span style={{ color: '#D4AF37', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600 }}>Local Guardian Intelligence</span>
                        <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: '#F8FAFC', margin: '0.5rem 0 1rem' }}>
                            Vietnam Luxury Stays
                        </h2>
                        <p style={{ color: 'rgba(248,250,252,0.7)', fontSize: '1.05rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.7 }}>
                            Where you decompress after 18 holes dictates the quality of your trip. AGS curates elite recovery bases across Vietnam — pairing Forbes 5-Star coastal resorts with private pool villas on An Bang Beach and iconic French colonial city hotels, all within streamlined transfer range of championship tees.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>An Bang Private Beach Villas</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                Exclusive 3-to-6 bedroom private pool compounds 15 minutes from Hoiana Shores and Montgomerie Links, staffed with private chefs and daily concierge.
                            </p>
                        </div>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>Forbes 5-Star Sanctuaries</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                Four Seasons Resort The Nam Hai and InterContinental Danang Sun Peninsula providing world-class hydrotherapy and post-round spa recovery.
                            </p>
                        </div>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>Urban Grand Dames</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                Park Hyatt Saigon and Sofitel Legend Metropole Hanoi delivering historic luxury and Michelin dining access for multi-region tours.
                            </p>
                        </div>
                    </div>

                    <div style={{ backgroundColor: 'rgba(2, 6, 23, 0.9)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '8px', padding: '2rem' }}>
                        <h4 style={{ color: '#D4AF37', fontSize: '1.2rem', marginBottom: '1.25rem', fontFamily: 'var(--font-primary-serif)' }}>At a Glance: Field Logistics &amp; Travel Standards</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', color: 'rgba(248,250,252,0.85)', fontSize: '0.95rem' }}>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Recovery Amenities</strong>
                                <span>Dedicated lap pools, cold plunge, and therapeutic Vietnamese herbal massage</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Group Villa Privacy</strong>
                                <span>Multi-room compounds ideal for 8–16 golfer groups with private communal lounges</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Transfer Proximity</strong>
                                <span>Sub-35 minute door-to-clubhouse transit times via dedicated private VIP vans</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Concierge SLA</strong>
                                <span>On-the-ground expat concierge managing equipment transfers, laundry, and dining reservations</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Luxury Hotel Section */}
            <section className="section" style={{ backgroundColor: 'var(--color-primary)', paddingTop: '6rem', paddingBottom: '4rem' }}>
                <div className="container">
                    <h2 className="text-center" style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.5rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '0.75rem' }}>Vietnam Luxury Accommodations</h2>
                    <p className="text-center" style={{ color: 'rgba(248,250,252,0.6)', marginBottom: '3rem', fontSize: '1.05rem' }}>26 premium properties across Central, South & North Vietnam</p>
                    {['Central Coast', 'South', 'North'].map((region, idx) => {
                        let regionAccs = accommodations;
                        if (region === 'Central Coast') regionAccs = accommodations.slice(0, 14);
                        if (region === 'South') regionAccs = accommodations.slice(14, 20);
                        if (region === 'North') regionAccs = accommodations.slice(20, 26);

                        return (
                            <div key={region} style={{ marginBottom: idx === 2 ? '0' : '5rem' }}>
                                <h3 style={{ 
                                    fontFamily: 'var(--font-primary-serif)', 
                                    fontSize: '2rem', 
                                    fontWeight: 700, 
                                    color: '#D4AF37', 
                                    marginBottom: '2rem',
                                    borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
                                    paddingBottom: '1rem' 
                                }}>
                                    {region} Region
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '4rem' }}>
                                    {regionAccs.map((acc, index) => (
                                        <AccommodationCard acc={acc} key={`${region}-${index}`} />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* An Bang Beach Villas Section */}
            <section className="section" style={{ backgroundColor: 'var(--color-primary)', paddingTop: '2rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <div style={{ borderTop: '1px solid rgba(212, 175, 55, 0.3)', paddingTop: '4rem', marginBottom: '2rem', textAlign: 'center' }}>
                        <span style={{ color: '#D4AF37', letterSpacing: '0.25em', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '1rem', display: 'block', fontWeight: 600 }}>AGS Villa Collection</span>
                        <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.5rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1rem', color: '#F8FAFC' }}>An Bang Beach <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Villas</span></h2>
                        <p style={{ color: 'rgba(248, 250, 252, 0.7)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto 2rem' }}>Private beachfront villas on Hoi An&apos;s most celebrated stretch of coastline -- an alternative to the resort experience for groups who value independence, space, and authentic coastal living.</p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '4rem' }}>
                        {villaAccommodations.map((acc, index) => (
                            <VillaCard acc={acc} key={index} />
                        ))}
                    </div>
                </div>

                <div className="container" style={{ marginTop: '4rem', textAlign: 'center' }}>
                    <Link href="/quote/" className="btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}>Book Your Luxury Stay</Link>
                </div>
            </section>
        
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/",
      "name": "Luxury Golf Accommodations in Vietnam | Asia Golf Specialists",
      "url": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/",
      "publisher": buildPublisherRef()
    },
    {
      "@type": "ItemList",
      "name": "Vietnam Luxury Golf Accommodations & Resorts",
      "itemListElement": [...accommodations, ...villaAccommodations].map((acc, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "LodgingBusiness",
          "name": acc.title,
          "description": acc.desc,
          "url": `https://www.asiagolfspecialists.com${acc.linkPath}`,
          "image": `https://www.asiagolfspecialists.com${acc.image}`,
          "address": { "@type": "PostalAddress", "addressCountry": "VN" }
        }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
        { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://www.asiagolfspecialists.com/destinations/" },
        { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/" },
        { "@type": "ListItem", "position": 4, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" }
      ]
    }
  ]
}) }} />
</div>
    );
}

const accommodations: AccommodationData[] = [
    // ---- Central Vietnam --------------------------------------------------------------------------------------------------------------
    { title: "Banyan Tree Lang Co", image: "/images/accommodations/vietnam/banyan-tree-lang-co/vietnam-luxury-hotel-banyan-tree-lang-co-pool-villa-1.webp", subtitle: "Private Pool Villas", desc: "The ultimate golf-integrated resort. Private pool villas located mere steps from Sir Nick Faldo's Laguna Golf Lang Co, offering absolute privacy and world-class spa facilities.", linkPath: "/accommodations/vietnam/banyan-tree-lang-co/" },
    { title: "Four Seasons Resort The Nam Hai", image: "/images/accommodations/vietnam/four-seasons-nam-hai/vietnam-luxury-hotel-four-seasons-nam-hai-beach-pool-1.webp", subtitle: "Beachfront Resort", desc: "The gold standard of luxury in Central Vietnam. Perfectly situated between Hoiana Shores and Montgomerie Links, offering Forbes Five-Star service.", linkPath: "/accommodations/vietnam/four-seasons-nam-hai/" },
    { title: "New World Hoiana Beach Resort", image: "/images/accommodations/vietnam/new-world-hoiana/hoiana-beach-resort-hero.webp", subtitle: "Beachfront Golf Resort", desc: "Vietnam's most ambitious beachfront escape. Integrated into the Hoiana Resort & Golf complex, offering direct access to the World Top 100 Hoiana Shores links and ultimate 5-star recovery.", linkPath: "/accommodations/vietnam/new-world-hoiana/" },
    { title: "InterContinental Danang Sun Peninsula Resort", image: "/images/accommodations/vietnam/intercontinental-danang/vietnam-luxury-hotel-intercontinental-danang-sun-peninsula-resort-hero-1.webp", subtitle: "Peninsula Resort", desc: "A Bill Bensley masterclass perched on a private cove of Son Tra Peninsula -- the most dramatically located resort on Vietnam's golf coast.", linkPath: "/accommodations/vietnam/intercontinental-danang/" },
    { title: "Palm Garden Beach Resort Hoi An", image: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-hero-1.webp", subtitle: "Beachfront Resort", desc: "Hoi An's quintessential beachside retreat at An Bang Beach -- spacious, relaxed, and perfectly positioned for Hoiana Shores and the Hoi An corridor.", linkPath: "/accommodations/vietnam/palm-gardens-hoi-an/" },
    { title: "Almanity Hoi An Wellness Resort", image: "/images/accommodations/vietnam/almanity-hoi-an/1.webp", subtitle: "Wellness Resort", desc: "A wellness-focused retreat just steps from the ancient town of Hoi An, providing a rejuvenating sanctuary for golfers playing the central coast.", linkPath: "/accommodations/vietnam/almanity-hoi-an/" },
    { title: "Bel Marina Hoi An Resort", image: "/images/accommodations/vietnam/bel-marina-hoi-an/vietnam-luxury-hotel-hero-bel-marina-hoi-an-riverside-pool.webp", subtitle: "Riverside Resort", desc: "A luxurious 4-star riverside resort nestled along the Thu Bon River, providing an idyllic sanctuary for golfers visiting the central coast of Vietnam.", linkPath: "/accommodations/vietnam/bel-marina-hoi-an/" },
    { title: "Namia River Retreat", image: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-hero.webp", subtitle: "Riverside Boutique Retreat", desc: "A secluded boutique wellness retreat on the Thu Bon River, offering exclusive pool villas and deep recovery for golfers in Central Vietnam.", linkPath: "/accommodations/vietnam/namia-river-retreat-hoi-an/" },
    { title: "Anantara Hoi An Resort", image: "/images/accommodations/vietnam/anantara-hoi-an/vietnam-luxury-hotel-hero-anantara-hoi-an-hotel-exterior.webp", subtitle: "Riverside Heritage Resort", desc: "A luxurious 5-star heritage resort on the banks of the Thu Bon River, blending French colonial architecture with world-class Anantara service for visiting golfers.", linkPath: "/accommodations/vietnam/anantara-hoi-an/" },
    { title: "Little Riverside Hoi An", image: "/images/accommodations/vietnam/little-riverside-hoi-an/little-riverside-hoi-an-riverfront.webp", subtitle: "Riverside Boutique Hotel", desc: "A boutique 5-star luxury hotel on the banks of the Thu Bon River, featuring traditional Faifo architecture and a spectacular rooftop pool.", linkPath: "/accommodations/vietnam/little-riverside-hoi-an/" },
    { title: "Chicland Da Nang Hotel", image: "/images/accommodations/vietnam/chicland-da-nang/vietnam-luxury-hotel-chicland-da-nang-hero.webp", subtitle: "Eco-Chic City Beach Hotel", desc: "An eco-chic beachfront hotel wrapped in vertical gardens, offering a modern urban sanctuary on Da Nang's vibrant My Khe Beach.", linkPath: "/accommodations/vietnam/chicland-da-nang/" },
    { title: "Fusion Resort & Villas Da Nang", image: "/images/accommodations/vietnam/fusion-resort-villa-da-nang/vietnam-luxury-hotel-hero-fusion-resort-villa-da-nang-aerial-view.webp", subtitle: "Beachfront Wellness Resort", desc: "A premium wellness-focused beachfront resort offering private pool villas and all-inclusive spa treatments, located just minutes from Da Nang's top golf courses.", linkPath: "/accommodations/vietnam/fusion-resort-villa-da-nang/" },
    { title: "TIA Wellness Resort", image: "/images/accommodations/vietnam/TIA-wellness-resort-danang/tia-wellness-resort-on-the-beach.webp", subtitle: "Beachfront Wellness Resort", desc: "A groundbreaking wellness resort in Da Nang offering private pool villas and inclusive daily spa treatments, serving as the ultimate rejuvenating base for Central Vietnam golf tours.", linkPath: "/accommodations/vietnam/tia-wellness-resort-danang/" },
    { title: "M Hotel Da Nang", image: "/images/accommodations/vietnam/m-hotel-danang/m-hotel-danang-hero.webp", subtitle: "Beachfront Luxury", desc: "M Hotel Da Nang  5-star property directly across from My Khe Beach. Breathtaking ocean views, modern amenities, and close to top Central Coast golf courses.", linkPath: "/accommodations/vietnam/m-hotel-danang/" },
    
    // ---- South Vietnam ------------------------------------------------------------------------------------------------------------------
    { title: "The Bluffs Grand Ho Tram", image: "/images/accommodations/vietnam/bluffs-grand-ho-tram/vietnam-luxury-hotel-bluffs-grand-ho-tram-resort-hotel-1.webp", subtitle: "Beachfront Golf Resort", desc: "The pinnacle of Stay and Play. A sprawling resort directly overlooking a Top 100 World Ranked golf course on the South China Sea.", linkPath: "/accommodations/vietnam/bluffs-grand-ho-tram/" },
    { title: "Park Hyatt Saigon", image: "/images/accommodations/vietnam/park-hyatt-saigon/vietnam-luxury-hotel-park-hyatt-saigon-colonial-facade-1.webp", subtitle: "Luxury City Accommodation", desc: "The colonial-inspired pinnacle of urban luxury in Ho Chi Minh City. 5 minutes from Tan Son Nhat Golf Course.", linkPath: "/accommodations/vietnam/park-hyatt-saigon/" },
    { title: "Fusion Suites Saigon", image: "/images/accommodations/vietnam/fusion-suites-saigon/1.webp", subtitle: "City Wellness Accommodation", desc: "A contemporary, wellness-inspired all-suite hotel in the heart of Saigon, perfect for golfers seeking modern comfort and vibrant city energy.", linkPath: "/accommodations/vietnam/fusion-suites-saigon/" },
    { title: "The Caravelle Saigon", image: "/images/accommodations/vietnam/the-caravelle/caravelle-saigon-external.webp", subtitle: "Luxury City Accommodation", desc: "An iconic heritage hotel in the heart of Ho Chi Minh City, offering legendary luxury, panoramic city views from the famous Saigon Saigon Rooftop Bar, and effortless access to the southern golf circuit.", linkPath: "/accommodations/vietnam/the-caravelle/" },
    { title: "The Reverie Saigon", image: "/images/accommodations/vietnam/the-reverie-saigon/the-reverie-saigon-exterior-daytime.webp", subtitle: "Ultra-Luxury City Accommodation", desc: "A spectacular ultra-luxury hotel in Ho Chi Minh City, offering unparalleled Italian design, Michelin-starred dining, and perfect access to the southern golf circuit.", linkPath: "/accommodations/vietnam/the-reverie-saigon/" },
    { title: "Hotel Des Arts Saigon", image: "/images/accommodations/vietnam/hotel-des-artes-saigon/hotel-des-artes-hero.webp", subtitle: "Luxury Boutique Hotel", desc: "Hotel Des Arts Saigon  MGallery. A chic, 5-star boutique property in District 3, offering a rooftop infinity pool and sophisticated design. The perfect luxury golf basecamp.", linkPath: "/accommodations/vietnam/hotel-des-artes-saigon/" },

    // ---- North Vietnam ------------------------------------------------------------------------------------------------------------------
    { title: "The Oriental Jade Hotel", image: "/images/accommodations/vietnam/the-oriental-jade/1.webp", subtitle: "Boutique City Accommodation", desc: "An exquisite luxury boutique hotel in Hanoi's Old Quarter, offering panoramic views of Hoan Kiem Lake and perfect access to northern Vietnam golf.", linkPath: "/accommodations/vietnam/the-oriental-jade/" },
    { title: "FLC Halong Bay Golf Resort", image: "/images/accommodations/vietnam/flc-halong-bay/flc-ha-long-bay-golf-club-luxury-resort-hero.webp", subtitle: "Bayview Golf Resort", desc: "A spectacular luxury resort offering panoramic views of the UNESCO World Heritage Site, Halong Bay, featuring an on-site championship golf course.", linkPath: "/accommodations/vietnam/flc-halong-bay/" },
    { title: "Silk Path Dong Trieu Golf & Villas", image: "/images/accommodations/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-sunset-hero.webp", subtitle: "Golf & Villa Resort", desc: "A luxurious new addition to Vietnam's golfing landscape, offering exclusive villa accommodations directly adjacent to a Sir Nick Faldo signature course.", linkPath: "/accommodations/vietnam/silk-path-dong-trieu/" },
    { title: "Legacy Yen Tu M-Gallery", image: "/images/accommodations/vietnam/legacy-yen-tu-m-gallery/legacy-yen-tu-m-gallery-aerial.webp", subtitle: "Heritage Mountain Retreat", desc: "A mystical 13th-century style palace nestled on the sacred Yen Tu mountain, offering a profoundly peaceful and culturally immersive sanctuary for golfers in Northern Vietnam.", linkPath: "/accommodations/vietnam/legacy-yen-tu-m-gallery/" },
    { title: "Sofitel Legend Metropole Hanoi", image: "/images/accommodations/vietnam/sofitel-metropole-hanoi/sofitel-legend-metropole-hanoi-hero.webp", subtitle: "Luxury Heritage Hotel", desc: "Hanoi's most storied luxury address, blending French colonial grandeur with timeless elegance, serving as the ultimate basecamp for Northern Vietnam golf tours.", linkPath: "/accommodations/vietnam/sofitel-metropole-hanoi/" },
    { title: "Capella Hanoi", image: "/images/accommodations/vietnam/capella-hanoi/capella-hanoi-exterior.webp", subtitle: "Luxury Boutique Hotel", desc: "A flamboyant tribute to 1920s opera, crafted by Bill Bensley. Capella Hanoi is a living museum of luxury in the heart of the capital.", linkPath: "/accommodations/vietnam/capella-hanoi/" },
];

const villaAccommodations: AccommodationData[] = [
    { title: "Holiday Villa (6 Bedrooms)", image: "/images/accommodations/vietnam/an-bang-holiday-villa/vietnam-private-villa-an-bang-holiday-villa-beach-lifestyle-hero.webp", subtitle: "Beachfront Group Compound", desc: "The flagship group property on An Bang Beach. 6 en-suite bedrooms, private pool, sauna, and an expansive beachfront garden — purpose-built for 8-to-12-player golf touring parties.", linkPath: "/accommodations/vietnam/an-bang-beach-villas/#holiday-villa" },
    { title: "May Villa (6 Bedrooms)", image: "/images/accommodations/vietnam/an-bang-may-villa/vietnam-private-villa-an-bang-may-villa-bedroom-ocean-view-3.webp", subtitle: "Beachfront Group Compound", desc: "Absolute beachfront with private beach access from the garden. 6 en-suite bedrooms, private pool, and ocean panoramas right beside Holiday Villa.", linkPath: "/accommodations/vietnam/an-bang-beach-villas/#may-villa" },
    { title: "Ben Villa (3 Bedrooms)", image: "/images/accommodations/vietnam/an-bang-ben-villa/vietnam-private-villa-an-bang-ben-villa-tropical-garden-pool-7.webp", subtitle: "Fourball Beachfront Villa", desc: "An eco-conscious beachfront retreat built with reclaimed hardwoods. 3 en-suite bedrooms, private pool, and a lush walled tropical garden just 20 steps from An Bang sand.", linkPath: "/accommodations/vietnam/an-bang-beach-villas/#ben-villa" },
    { title: "Flow House (3 Bedrooms)", image: "/images/accommodations/vietnam/an-bang-flow-house/vietnam-private-villa-an-bang-flow-house-garden-day-beds-hero.webp", subtitle: "Fourball Beachfront Villa", desc: "Light-filled coastal living in the heart of An Bang village. 3 en-suite bedrooms with ocean-view balcony, floor-to-ceiling windows, and lush garden day beds.", linkPath: "/accommodations/vietnam/an-bang-beach-villas/#flow-house" },
    { title: "Salt Villa (3 Bedrooms)", image: "/images/accommodations/vietnam/an-bang-salt-villa/vietnam-private-villa-an-bang-salt-villa-pool-hero.webp", subtitle: "Fourball Beachfront Villa", desc: "Ocean views from every angle. 3 en-suite bedrooms, private plunge pool, and a spacious second-floor terrace delivering endless sea panoramas.", linkPath: "/accommodations/vietnam/an-bang-beach-villas/#salt-villa" },
    { title: "Sea Easter Villa (3 Bedrooms)", image: "/images/accommodations/vietnam/an-bang-sea-easter-villa/sea-easter-villa-hoi-an-pool.webp", subtitle: "Fourball Beachfront Villa", desc: "A modern beachfront sanctuary designed for post-round recovery. 3 en-suite bedrooms, private courtyard pool, and indoor-outdoor rain showers steps from the sand.", linkPath: "/accommodations/vietnam/an-bang-beach-villas/#sea-easter-villa" },
];





