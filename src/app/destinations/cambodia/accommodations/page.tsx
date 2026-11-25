import { buildPublisherRef } from "@/lib/schema";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export const metadata = {
 title: { absolute: "Luxury Golf Accommodations in Cambodia | AGS Escapism" },
 description: "Luxury hotels for golfers in Cambodia — Raffles Grand Angkor, Amansara, Rosewood Phnom Penh, and Song Saa Private Island. Curated by Asia Golf Specialists.",
 keywords: ["luxury golf accommodation Cambodia", "Cambodia resort", "five star golf hotel Cambodia", "AGS preferred Cambodia hotels"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/destinations/cambodia/accommodations/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Luxury Golf Accommodations in Cambodia | AGS Escapism" },
        description: "Luxury hotels for golfers in Cambodia — Raffles Grand Angkor, Amansara, Rosewood Phnom Penh, and Song Saa Private Island. Curated by Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/destinations/cambodia/accommodations/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/destinations/cambodia/hero/cambodia-angkor-wat-majestic-hero.webp",
            width: 1200,
            height: 630,
            alt: "Cambodia luxury hotel accommodation — Raffles and Amansara",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Luxury Golf Accommodations in Cambodia | AGS Escapism" },
        description: "Luxury hotels for golfers in Cambodia — Raffles Grand Angkor, Amansara, Rosewood Phnom Penh, and Song Saa Private Island. Curated by Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/destinations/cambodia/hero/cambodia-angkor-wat-majestic-hero.webp"],
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
 </div>
 <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F8FAFC', opacity: 0.8, marginBottom: '1.5rem', fontWeight: 500 }}>{acc.subtitle || 'Luxury Accommodation'}</h3>
 <p style={{ fontSize: '1rem', color: 'rgba(248, 250, 252, 0.6)', lineHeight: 1.6, marginBottom: '2.5rem' }} itemProp="description" id="exec-summary">{acc.desc}</p>
 <div className="ags-card-footer" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', fontWeight: 600 }}>
 <span>Explore Recovery</span>
 <span className="ags-card-cta-arrow">→</span>
 </div>
 </div>
 </div>
 </Link>
 );
}

export default function CambodiaAccommodations() {
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
                        src="/images/accommodations/cambodia/cambodia-orchids-canvas-floating-tent-koh-kong-5-star-recovery-hero.webp"
                        alt="Cambodia Accommodations"
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
 Cambodia <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Recovery</span>
 </h1>
 <p style={{ fontSize: '1.25rem', color: 'rgba(248, 250, 252, 0.7)', lineHeight: 1.6, margin: '0 auto', maxWidth: '800px' }}>
 Where you sleep is just as important as where you play. We curate the ultimate recovery environments in Cambodia, engineered for discerning golfers.
 </p>
 </div>
 </header>

 {/* Table Section */}
 <section className="section" style={{ backgroundColor: 'var(--color-primary)', paddingTop: '6rem', paddingBottom: '0' }}>
 <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
 <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
 <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 700, color: '#D4AF37', marginBottom: '1rem' }}>Cambodia Accommodations Blueprint</h2>
 <p style={{ color: 'rgba(248, 250, 252, 0.7)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>A strategic overview of the luxury hotel landscape across key golfing regions.</p>
 </div>

 <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.2)', backgroundColor: 'rgba(5, 11, 26, 0.5)' }}>
 <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
 <thead>
 <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.2)', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
 <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Region</th>
 <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Primary Style</th>
 <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>The AGS Advantage</th>
 <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Suited For</th>
 </tr>
 </thead>
 <tbody>
 <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>Siem Reap</strong></td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Heritage Suites & Jungle Retreats</td>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Private temple access, spa credits</td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Cultural immersion, quiet luxury</td>
 </tr>
 <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>Phnom Penh</strong></td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Modern High-Rises & Colonial Classics</td>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>VIP arrival, guaranteed river views</td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Executive travelers, culinary focused</td>
 </tr>
 <tr>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>Koh Rong Archipelago</strong></td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Eco-Luxury Overwater Villas</td>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Exclusive helicopter transfers</td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Post-golf recovery, absolute seclusion</td>
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
                            Cambodia Luxury Stays
                        </h2>
                        <p style={{ color: 'rgba(248,250,252,0.7)', fontSize: '1.05rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.7 }}>
                            Cambodia's luxury hotel landscape blends grand French colonial heritage with serene tropical architecture. We partner with historic properties like Amansara — the former royal guesthouse of King Sihanouk — and Phum Baitang to provide tranquil retreats after early-morning rounds and temple explorations.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>Siem Reap Heritage Retreats</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                Amansara and Raffles Grand Hotel d'Angkor featuring 1930s colonial glamour, saltwater pools, and 15-minute access to Angkor Golf Resort.
                            </p>
                        </div>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>Paddy-Framed Luxury</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                Zannier Phum Baitang offering authentic wooden stilt villas set amid 20 acres of green rice paddies and lotus ponds.
                            </p>
                        </div>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>Phnom Penh Skyline Luxury</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                Rosewood Phnom Penh perched atop the Vattanac Capital Tower with panoramic Mekong River vistas and Vattanac Golf connectivity.
                            </p>
                        </div>
                    </div>

                    <div style={{ backgroundColor: 'rgba(2, 6, 23, 0.9)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '8px', padding: '2rem' }}>
                        <h4 style={{ color: '#D4AF37', fontSize: '1.2rem', marginBottom: '1.25rem', fontFamily: 'var(--font-primary-serif)' }}>At a Glance: Field Logistics &amp; Travel Standards</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', color: 'rgba(248,250,252,0.85)', fontSize: '0.95rem' }}>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Historic Character</strong>
                                <span>Preserved 20th-century royal and colonial architecture with modern 5-star amenities</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Temple & Golf Sync</strong>
                                <span>Seamless logistics combining dawn Angkor Wat sunrise visits with 08:30 tee times</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Spa & Wellness</strong>
                                <span>Traditional Khmer herbal body wraps and deep tissue therapies for golfers</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Private VIP Transit</strong>
                                <span>Vintage Mercedes and private luxury SUVs for airport and golf course transfers</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


 <section className="section" style={{ backgroundColor: 'var(--color-primary)', paddingTop: '6rem', paddingBottom: '6rem' }}>
 <div className="container">
 <h2 className="text-center" style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.5rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '2rem' }}>Cambodia Luxury Accommodations</h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '4rem' }}>
 {accommodations.map((acc, index) => (
 <AccommodationCard acc={acc} key={index} />
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
      "@id": "https://www.asiagolfspecialists.com/destinations/cambodia/accommodations/",
      "name": "Luxury Golf Accommodations in Cambodia | Asia Golf Specialists",
      "url": "https://www.asiagolfspecialists.com/destinations/cambodia/accommodations/",
      "publisher": buildPublisherRef()
    },
    {
      "@type": "ItemList",
      "name": "Cambodia Luxury Golf Accommodations & Resorts",
      "itemListElement": accommodations.map((acc, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "LodgingBusiness",
          "name": acc.title,
          "description": acc.desc,
          "url": `https://www.asiagolfspecialists.com${acc.linkPath}`,
          "image": `https://www.asiagolfspecialists.com${acc.image}`,
          "address": { "@type": "PostalAddress", "addressCountry": "KH" }
        }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
        { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://www.asiagolfspecialists.com/destinations/" },
        { "@type": "ListItem", "position": 3, "name": "Cambodia", "item": "https://www.asiagolfspecialists.com/destinations/cambodia/" },
        { "@type": "ListItem", "position": 4, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/destinations/cambodia/accommodations/" }
      ]
    }
  ]
}) }} />
</div>
 );
}

const accommodations: AccommodationData[] = [
 { title: "Amansara", image: "/images/accommodations/cambodia/amansara/cambodia-luxury-hotel-amansara-siem-reap-pool-courtyard-4.webp", subtitle: "Heritage Retreat", desc: "Formerly King Sihanouk's guest house — 24 suites of pure Angkor exclusivity with custom remorks and private temple access.", linkPath: "/accommodations/cambodia/amansara/" },
 { title: "Zannier Hotels Phum Baitang", image: "/images/accommodations/cambodia/zannier-phum-baitang/cambodia-luxury-hotel-zannier-phum-baitang-stilted-villa-1.webp", subtitle: "Countryside Retreat", desc: "A luxury Green Village of private stilted villas set in eight acres of Siem Reap rice paddies — authentic Khmer meets ultra-luxury.", linkPath: "/accommodations/cambodia/zannier-phum-baitang/" },
 { title: "Phokeethra Country Club Resort", image: "/images/accommodations/cambodia/phokeethra-country-club/cambodia-luxury-hotel-phokeethra-country-club-colonial-facade-1.webp", subtitle: "Golf Resort", desc: "Cambodia's finest stay-and-play: a colonial 5-star resort directly linked to the prestigious Phokeethra Country Club.", linkPath: "/accommodations/cambodia/phokeethra-country-club/" },
 { title: "Rosewood Phnom Penh", image: "/images/accommodations/cambodia/rosewood-phnom-penh/cambodia-luxury-hotel-rosewood-phnom-penh-rooftop-bar-1.webp", subtitle: "Luxury City Accommodation", desc: "The absolute peak of Vattanac Capital Tower — commanding 360° Mekong River panoramas from the most contemporary address in Phnom Penh.", linkPath: "/accommodations/cambodia/rosewood-phnom-penh/" },
 { title: "Song Saa Private Island", image: "/images/accommodations/cambodia/song-saa-private-island/cambodia-luxury-hotel-song-saa-private-island-overwater-villa-1.webp", subtitle: "Private Island Resort", desc: "The ultimate post-golf decompression — reached by private helicopter, these overwater villas in the Koh Rong Archipelago offer absolute sanctuary.", linkPath: "/accommodations/cambodia/song-saa-private-island/" },
 { title: "Raffles Grand Hotel d'Angkor", image: "/images/accommodations/cambodia/raffles-grand-dangkor/cambodia-luxury-hotel-raffles-grand-hotel-dangkor-heritage-pool-3.webp", subtitle: "Heritage City Accommodation", desc: "Built in 1932, this legendary colonial address is Siem Reap's most storied hotel — historical weight and classic luxury combined.", linkPath: "/accommodations/cambodia/raffles-grand-dangkor/" },
 { title: "Jaya House River Park", image: "/images/accommodations/cambodia/jaya-house-river-park/1.webp", subtitle: "Riverside Boutique Hotel", desc: "An exceptionally peaceful boutique hotel along the Siem Reap River, offering bespoke luxury and a perfect launchpad for golfing the Khmer kingdom.", linkPath: "/accommodations/cambodia/jaya-house-river-park/" },
 { title: "Raffles Hotel Le Royal", image: "/images/accommodations/cambodia/raffles-hotel-le-royal/1.webp", subtitle: "Heritage City Accommodation", desc: "A majestic heritage hotel in Phnom Penh, bringing timeless elegance and legendary service to your Cambodian golf adventure.", linkPath: "/accommodations/cambodia/raffles-hotel-le-royal/" },
];

