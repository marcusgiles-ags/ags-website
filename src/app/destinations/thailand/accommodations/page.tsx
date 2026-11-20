import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: { absolute: "Luxury Golf Accommodations in Thailand | AGS Escapism" },
    description: "Luxury golf hotels in Thailand & Vietnam. Amanpuri, Banyan Tree, Chiva-Som & more. Curated golf tours by Asia Golf Specialists.",
    keywords: ["luxury golf accommodation Thailand", "Thailand resort", "five star golf hotel Thailand", "AGS preferred Thailand hotels"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/destinations/thailand/accommodations/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Luxury Golf Accommodations in Thailand | AGS Escapism" },
        description: "Luxury golf hotels in Thailand & Vietnam. Amanpuri, Banyan Tree, Chiva-Som & more. Curated golf tours by Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/destinations/thailand/accommodations/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/destinations/thailand/hero/thailand-travel-brochure-hero.webp",
            width: 1200,
            height: 630,
            alt: "Thailand luxury hotel accommodation for golfers",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Luxury Golf Accommodations in Thailand | AGS Escapism" },
        description: "Luxury golf hotels in Thailand & Vietnam. Amanpuri, Banyan Tree, Chiva-Som & more. Curated golf tours by Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/destinations/thailand/hero/thailand-travel-brochure-hero.webp"],
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

export default function ThailandAccommodations() {
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
                        src="/images/destinations/thailand/accommodations/thailand-amanpuri.webp"
                        alt="Thailand Accommodations"
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
                        Thailand <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Recovery</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'rgba(248, 250, 252, 0.7)', lineHeight: 1.6, margin: '0 auto', maxWidth: '800px' }}>
                        Where you sleep is just as important as where you play. We curate the ultimate recovery environments in Thailand, engineered for discerning golfers.
                    </p>
                </div>
            </header>

            {/* Table Section */}
            <section className="section" style={{ backgroundColor: '#020617', paddingTop: '6rem', paddingBottom: '0' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                        <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 700, color: '#D4AF37', marginBottom: '1rem' }}>Thailand Accommodations Blueprint</h2>
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
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>Bangkok</strong></td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Urban Sanctuaries & Sky Suites</td>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Guaranteed late check-out, VIP fast-track transfers</td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>High-energy luxury, culinary enthusiasts</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>Phuket / Hua Hin</strong></td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Private Pool Villas, Wellness Resorts</td>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Dedicated 24/7 Villa Hosts, priority tee times</td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Ultimate recovery, couples, VIP groups</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>Chiang Mai / Khao Yai</strong></td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Design-led Highland Retreats</td>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Private chef dining, curated cultural excursions</td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Nature, extreme privacy, cooler climates</td>
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
                            Thailand Luxury Stays
                        </h2>
                        <p style={{ color: 'rgba(248,250,252,0.7)', fontSize: '1.05rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.7 }}>
                            Thailand sets the global standard for luxury golf hospitality. From the barefoot elegance of Amanpuri on Phuket's Pansea Beach to the medical-grade wellness recovery of Chiva-Som in Hua Hin and riverside luxury at Capella Bangkok, our accommodation portfolio ensures peak physical conditioning throughout your tour.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>Hua Hin Wellness Retreats</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                Chiva-Som and V Villas Hua Hin offering specialized golfer mobility therapy, private plunge pools, and proximity to Black Mountain.
                            </p>
                        </div>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>Phuket Oceanfront Havens</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                Amanpuri, Trisara, and Banyan Tree Phuket providing secluded villa luxury and dedicated private golf equipment handling.
                            </p>
                        </div>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>Bangkok Riverfront Elegance</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                Capella Bangkok and The Siam delivering tranquil Chao Phraya river views and private boat transfers after rounds at Thai Country Club.
                            </p>
                        </div>
                    </div>

                    <div style={{ backgroundColor: 'rgba(2, 6, 23, 0.9)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '8px', padding: '2rem' }}>
                        <h4 style={{ color: '#D4AF37', fontSize: '1.2rem', marginBottom: '1.25rem', fontFamily: 'var(--font-primary-serif)' }}>At a Glance: Field Logistics &amp; Travel Standards</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', color: 'rgba(248,250,252,0.85)', fontSize: '0.95rem' }}>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Wellness & Spa</strong>
                                <span>Specialized sports recovery massages, steam suites, and post-round acupuncture</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Equipment Storage</strong>
                                <span>Climate-controlled club storage, club cleaning, and direct transfer to morning tee times</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Culinary Inclusions</strong>
                                <span>Bespoke high-protein athlete breakfasts and private oceanfront dining experiences</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Butler Service</strong>
                                <span>Dedicated 24/7 private villa butlers handling equipment, pressing, and itinerary adjustments</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="section" style={{ backgroundColor: '#020617', paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <h2 className="text-center" style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.5rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '2rem' }}>Thailand Luxury Accommodations</h2>
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
      "@id": "https://www.asiagolfspecialists.com/destinations/thailand/accommodations/",
      "name": "Luxury Golf Accommodations in Thailand | Asia Golf Specialists",
      "url": "https://www.asiagolfspecialists.com/destinations/thailand/accommodations/",
      "publisher": {
        "@type": "TravelAgency",
        "@id": "https://www.asiagolfspecialists.com/#organization",
        "name": "Asia Golf Specialists",
        "url": "https://www.asiagolfspecialists.com/",
        "image": "https://www.asiagolfspecialists.com/images/brand-library/logos/ags-logo-the-club-mark-nobkgrd.webp",
        "priceRange": "$$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "27 Nguyen Phan Vinh",
          "addressLocality": "Hoi An",
          "addressRegion": "Da Nang",
          "postalCode": "550000",
          "addressCountry": "VN"
        }
      }
    },
    {
      "@type": "ItemList",
      "name": "Thailand Luxury Golf Accommodations & Resorts",
      "itemListElement": accommodations.map((acc, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "LodgingBusiness",
          "name": acc.title,
          "description": acc.desc,
          "url": `https://www.asiagolfspecialists.com${acc.linkPath}`,
          "image": `https://www.asiagolfspecialists.com${acc.image}`,
          "address": { "@type": "PostalAddress", "addressCountry": "TH" }
        }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
        { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://www.asiagolfspecialists.com/destinations/" },
        { "@type": "ListItem", "position": 3, "name": "Thailand", "item": "https://www.asiagolfspecialists.com/destinations/thailand/" },
        { "@type": "ListItem", "position": 4, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/destinations/thailand/accommodations/" }
      ]
    }
  ]
}) }} />
</div>
    );
}

const accommodations: AccommodationData[] = [
    { title: "Banyan Tree Phuket", image: "/images/accommodations/thailand/banyan-tree-phuket/thailand-luxury-hotel-banyan-tree-phuket-pool-villa-6.webp", subtitle: "Private Pool Villas", desc: "The spiritual home of the Golf Villa concept. DoublePool Villas with a 24-hour dedicated Villa Host who coordinates all tee times and transfers.", linkPath: "/accommodations/thailand/banyan-tree-phuket/" },
    { title: "Amanpuri", image: "/images/accommodations/thailand/amanpuri/thailand-luxury-hotel-amanpuri-phuket-private-pool-pavilion-1.webp", subtitle: "Peninsula Resort", desc: "The original Aman resort in Phuket. Perched on a private peninsula over the Andaman Sea — the most exclusive sanctuary for the world's elite.", linkPath: "/accommodations/thailand/amanpuri/" },
    { title: "Chiva-Som International Health Resort", image: "/images/accommodations/thailand/chiva-som/thailand-luxury-hotel-chiva-som-hua-hin-beachfront-1.webp", subtitle: "Wellness Resort", desc: "The world's most awarded wellness retreat in Hua Hin — the scientifically designed antidote to an intensive golf schedule.", linkPath: "/accommodations/thailand/chiva-som/" },
    { title: "Sindhorn Kempinski Hotel Bangkok", image: "/images/accommodations/thailand/sindhorn-kempinski/thailand-luxury-hotel-sindhorn-kempinski-bangkok-grand-lobby-1.jpg", subtitle: "Luxury City Accommodation", desc: "Bangkok's Green Corridor sanctuary offering massive suites for city golfers who demand absolute peace between rounds.", linkPath: "/accommodations/thailand/sindhorn-kempinski/" },
    { title: "Four Seasons Resort Chiang Mai", image: "/images/accommodations/thailand/four-seasons-chiang-mai/thailand-luxury-hotel-four-seasons-chiang-mai-rice-paddies-1.webp", subtitle: "Highland Resort", desc: "Set amidst working terraced rice paddies in Northern Thailand — the ultimate highland golf retreat.", linkPath: "/accommodations/thailand/four-seasons-chiang-mai/" },
    { title: "InterContinental Khao Yai Resort", image: "/images/accommodations/thailand/intercontinental-khao-yai/thailand-luxury-hotel-intercontinental-khao-yai-resort-railcar-villa-1.webp", subtitle: "National Park Resort", desc: "Bill Bensley's whimsical luxury vintage rail carriage resort at the edge of UNESCO Khao Yai National Park.", linkPath: "/accommodations/thailand/intercontinental-khao-yai/" },
    { title: "Riva Surya Bangkok", image: "/images/accommodations/thailand/riva-surya-bangkok/1.webp", subtitle: "Riverside Boutique Hotel", desc: "A boutique luxury hotel along the Chao Phraya River, offering a perfect base for exploring Bangkok and its premium golf courses.", linkPath: "/accommodations/thailand/riva-surya-bangkok/" },
    { title: "The Standard Hua Hin", image: "/images/accommodations/thailand/the-standard-hua-hin/1.webp", subtitle: "Beachfront Resort", desc: "A vibrant, stylish beachfront resort in Hua Hin, blending mid-century modern design with absolute coastal relaxation for golfers.", linkPath: "/accommodations/thailand/the-standard-hua-hin/" },
    { title: "V Villas MGallery", image: "/images/accommodations/thailand/v-villas-hua-hin/v-villas-hua-hin-pool.webp", subtitle: "Luxury Private Pool Villas", desc: "A sophisticated private haven on Hua Hin beach, redefining exclusive luxury with seamless architectural grace and 24-hour butler service.", linkPath: "/accommodations/thailand/v-villas-hua-hin/" },
    { title: "Tamarind Village", image: "/images/accommodations/thailand/tamarind-village/1.webp", subtitle: "City Heritage Retreat", desc: "A tranquil boutique retreat in the heart of Chiang Mai's old city, offering a peaceful oasis surrounded by Lanna heritage and world-class golf.", linkPath: "/accommodations/thailand/tamarind-village/" },
];
