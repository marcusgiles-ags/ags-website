import Image from 'next/image';
import Link from "next/link";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { buildOrganizationIdRef } from "@/lib/schema";

export const metadata: Metadata = {
    title: { absolute: "Luxury Golf Tours Southeast Asia | Signature Itineraries" },
    description: "Luxury golf tours in Vietnam, Thailand & Cambodia. Play championship courses, enjoy 5-star stays. Asia Golf Specialists.",
    keywords: [
        "golf tours Southeast Asia",
        "Vietnam golf tour itinerary",
        "Thailand golf tour 2026",
        "Cambodia golf and culture tour",
        "luxury golf travel Asia",
    ],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/tours/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Luxury Golf Tours Southeast Asia | Signature Itineraries" },
        description: "Luxury golf tours in Vietnam, Thailand & Cambodia. Play championship courses, enjoy 5-star stays. Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/tours/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/homepage/hero-slider/vietnam-coastal-golf-course-hoiana-shores-aerial-beachside.jpg",
            width: 1200,
            height: 630,
            alt: "AGS Flagship Golf Tour — Hoiana Shores, Central Vietnam",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Luxury Golf Tours Southeast Asia | Signature Itineraries" },
        description: "Luxury golf tours in Vietnam, Thailand & Cambodia. Play championship courses, enjoy 5-star stays. Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/homepage/hero-slider/vietnam-coastal-golf-course-hoiana-shores-aerial-beachside.jpg"],
    },
};

const tours = [
    {
        slug: "vietnam-central-coast",
        country: "Vietnam",
        name: "The An Bang Invitational",
        subtitle: "7 Days • From $1,550 USD (~$2,390 AUD)",
        description: "A 7-day flagship society golf tour along Vietnam's Central Golf Coast playing Hoiana Shores, Ba Na Hills, Laguna Lăng Cô, and BRG Da Nang from An Bang Beach Villa.",
        image: "/images/homepage/hero-slider/vietnam-coastal-golf-course-hoiana-shores-aerial-beachside.jpg",
        flag: "🇻🇳",
        minPrice: 1550,
    },
    {
        slug: "thailand-royal-siam",
        country: "Thailand",
        name: "The Royal Siam Circuit",
        subtitle: "7 Days • From $1,980 USD (~$3,050 AUD)",
        description: "Experience 7 days of championship golf across Bangkok and Hua Hin playing Thai Country Club, Pineapple Valley, Springfield Royal, and Black Mountain from The Standard.",
        image: "/images/tours/thailand/thailand-6d7n-the-standard-hua-hin-hero.webp",
        flag: "🇹🇭",
        minPrice: 1980,
    },
    {
        slug: "cambodia-angkor-odyssey",
        country: "Cambodia",
        name: "The Angkor Odyssey",
        subtitle: "5 Days • From $1,690 USD (~$2,600 AUD)",
        description: "A 5-day luxury golf and heritage odyssey in Siem Reap playing Angkor Golf Resort (Faldo), Phokeethra CC, and Siem Reap Booyoung — anchored at Raffles Grand Hotel d'Angkor.",
        image: "/images/tours/cambodia/cambodia-angkor-wat-sunrise-tour.webp",
        flag: "🇰🇭",
        minPrice: 1690,
    },
    {
        slug: "the-central-coast-classic",
        country: "Vietnam",
        name: "The Central Coast Golf & Wellness Classic",
        subtitle: "7 Days • From $2,590 USD (~$3,990 AUD)",
        description: "7-day Central Vietnam golf and wellness tour playing Hoiana Shores, Ba Na Hills, Laguna Lăng Cô, and BRG Da Nang Nicklaus with private pool villas & daily 90-min spa at Namia River Retreat.",
        image: "/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp",
        flag: "🇻🇳",
        minPrice: 2590,
    },
    {
        slug: "the-emperors-fairways",
        country: "Vietnam",
        name: "The Emperor's Fairways",
        subtitle: "11 Days • From $2,980 USD (~$4,590 AUD)",
        description: "An 11-day luxury golf tour across North and Central Vietnam featuring 7 championship rounds across Hanoi, Ha Long Bay, Da Nang, and Hoi An including Silk Path, Legend Hill, and Hoiana Shores.",
        image: "/images/courses/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-golf-fairway-4.webp",
        flag: "🇻🇳",
        minPrice: 2980,
    },
    {
        slug: "the-saigon-and-shores-escape",
        country: "Vietnam",
        name: "Saigon & Shores Escape",
        subtitle: "9 Days • From $2,490 USD (~$3,830 AUD)",
        description: "9-day South and Central Vietnam luxury golf escape playing 6 championship rounds across The Bluffs Grand Ho Tram, VGCC, Long Thanh, Hoiana Shores, Ba Na Hills, and Laguna Lăng Cô.",
        image: "/images/courses/vietnam/the-bluffs-ho-tram/the-bluffs-ho-tram-greg-norman-design-2.webp",
        flag: "🇻🇳",
        minPrice: 2490,
    },
    {
        slug: "the-coastal-sprint",
        country: "Vietnam",
        name: "The Coastal Sprint",
        subtitle: "4 Days • From $890 USD (~$1,380 AUD)",
        description: "4-day Central Vietnam executive golf escape playing Hoiana Shores and Ba Na Hills Night Golf with VIP transfers and 5-star beachfront resort stays at Palm Gardens Hoi An.",
        image: "/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp",
        flag: "🇻🇳",
        minPrice: 890,
    },
    {
        slug: "the-grand-vietnam-odyssey",
        country: "Vietnam",
        name: "The Grand Vietnam Odyssey",
        subtitle: "14 Days • From $3,990 USD (~$6,140 AUD)",
        description: "The ultimate 14-day nationwide Vietnam golf tour covering Hanoi, Ha Long Bay, Da Nang, Hoi An, Ho Tram, and Saigon with 9 championship rounds including Silk Path, Hoiana Shores, and The Bluffs.",
        image: "/images/courses/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-golf-fairway-4.webp",
        flag: "🇻🇳",
        minPrice: 3990,
    },
    {
        slug: "the-bangkok-and-hua-hin-fairways",
        country: "Thailand",
        name: "Bangkok & Hua Hin Fairways",
        subtitle: "8 Days • From $2,490 USD (~$3,830 AUD)",
        description: "8-day dual-hub Thailand luxury golf tour playing 5 championship rounds across Alpine Golf Club, Thai Country Club, Black Mountain, Pineapple Valley, and Springfield Royal.",
        image: "/images/courses/thailand/alpine-golf-club/alpine-golf-sports-club-green-forest-4.webp",
        flag: "🇹🇭",
        minPrice: 2490,
    },
    {
        slug: "the-lanna-heritage-golf-trail",
        country: "Thailand",
        name: "The Lanna Heritage Golf Trail",
        subtitle: "6 Days • From $1,390 USD (~$2,140 AUD)",
        description: "6-day Northern Thailand highland golf tour in Chiang Mai playing Alpine Golf Resort Chiang Mai, Chiang Mai Highlands, and Mae Jo from boutique sanctuary Tamarind Village.",
        image: "/images/courses/thailand/alpine-chiang-mai/alpine-golf-resort-chiang-mai-fairway-3.webp",
        flag: "🇹🇭",
        minPrice: 1390,
    },
    {
        slug: "the-khmer-temple-trail",
        country: "Cambodia",
        name: "The Khmer Temple Trail",
        subtitle: "5 Days • From $1,390 USD (~$2,140 AUD)",
        description: "5-day Siem Reap boutique golf and Angkor Wat expedition playing Angkor Golf Resort (Faldo), Phokeethra Country Club, and Siem Reap Booyoung from Jaya House River Park.",
        image: "/images/courses/cambodia/phokeethra/phokeethra-country-club-asian-tour-2.webp",
        flag: "🇰🇭",
        minPrice: 1390,
    },
    {
        slug: "the-khmer-kingdom-links",
        country: "Cambodia",
        name: "The Khmer Kingdom Links",
        subtitle: "7 Days • From $2,390 USD (~$3,680 AUD)",
        description: "7-day dual-hub Cambodia luxury golf journey across Phnom Penh and Siem Reap playing Vattanac Golf Resort, Grand Phnom Penh, Angkor Golf Resort, and Phokeethra with iconic Raffles stays.",
        image: "/images/courses/cambodia/vattanac-west/vattanac-7th-west-5902.webp",
        flag: "🇰🇭",
        minPrice: 2390,
    },
    {
        slug: "the-indochina-golden-age",
        country: "Cambodia, Vietnam & Thailand",
        name: "Indochina Golden Age Tour",
        subtitle: "12 Days • From $3,690 USD (~$5,680 AUD)",
        description: "Flagship 12-day tri-country luxury golf expedition across Cambodia, Vietnam, and Thailand playing 7 championship rounds including Angkor, Vattanac, The Bluffs, Hoiana Shores, and Alpine.",
        image: "/images/courses/cambodia/angkor-golf-resort/angkor-golf-resort-angkor-wat-view-4.webp",
        flag: "🌟",
        minPrice: 3690,
    },
    {
        slug: "hoi-an-beachfront-bliss",
        country: "Vietnam",
        name: "Hoi An Beachfront Bliss",
        subtitle: "7 Days • From $1,580 USD (~$2,440 AUD)",
        description: "7-day Central Vietnam beachfront golf and recovery retreat playing Montgomerie Links, Vinpearl Nam Hoi An, Laguna Lăng Cô, and Ba Na Hills anchored at Palm Gardens Beach Resort & Spa.",
        image: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3.webp",
        flag: "🇻🇳",
        minPrice: 1580,
    },
];

export default function ToursIndex() {
    return (
        <main style={{ backgroundColor: '#020617', minHeight: '100vh', color: '#F8FAFC' }}>
            <Navbar />

                                    {/* Hero Section */}
            <header className="hero" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, zIndex: 0, WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}>
                    <Image src="/images/homepage/hero-slider/vietnam-coastal-golf-course-hoiana-shores-aerial-beachside.jpg" alt="Signature Golf Tours" fill sizes="100vw" style={{ objectFit: 'cover' }} priority />
                    <div className="hero-overlay" style={{ position: 'absolute', inset: 0 }}></div>
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '800px', paddingTop: '15vh' }}>
                    <span style={{ color: '#D4AF37', letterSpacing: '0.25em', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '1.5rem' }}>The AGS Collection</span>
                    <h1 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem' }}>Signature <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Golf Tours</span></h1>
                    
                    <div style={{ fontSize: '1.15rem', color: 'rgba(248, 250, 252, 0.7)', lineHeight: 1.6, margin: '0 auto', maxWidth: '800px', textAlign: 'left', marginTop: '3rem' }} itemProp="description" id="exec-summary">
                        <h3 style={{ color: '#D4AF37', fontSize: '1.35rem', marginBottom: '1rem', fontFamily: 'var(--font-primary-serif)', textAlign: 'center' }}>What makes an AGS Signature Tour different?</h3>
                        <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <li><span style={{ color: '#D4AF37' }}>&bull;</span> <strong>Precision Engineering:</strong> Every detail from VIP tarmac transfers to secured prime tee times is handled by our on-ground team.</li>
                            <li><span style={{ color: '#D4AF37' }}>&bull;</span> <strong>Championship Pedigree:</strong> Guaranteed access to elite layouts designed by Greg Norman, Nick Faldo, and Robert Trent Jones Jr.</li>
                            <li><span style={{ color: '#D4AF37' }}>&bull;</span> <strong>5-Star Logistics:</strong> Seamless transitions between the 18th hole, Michelin-level dining, and premium beachfront resorts.</li>
                            <li><span style={{ color: '#D4AF37' }}>&bull;</span> <strong>Expat Local Guardians:</strong> Direct access to local Australian hosts residing permanently in Vietnam, Thailand, and Cambodia.</li>
                        </ul>
                        <p style={{ textAlign: 'center' }}>These are our ultimate, bucket-list flagship itineraries engineered specifically for discerning groups seeking the pinnacle of Southeast Asian golf travel.</p>
                    </div>
                </div>
            </header>

            {/* Tour Cards */}
            <section className="section" style={{ paddingTop: '2rem', paddingBottom: '8rem' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem' }}>
                    {tours.map(tour => (
                        <Link key={tour.slug} href={`/tours/${tour.slug}/`} className="ags-card-link">
                            <div className="ags-card">
                                <div className="ags-card-image-container" style={{ height: '280px' }}>
                                    <img
                                        src={tour.image}
                                        alt={`${tour.name} — ${tour.subtitle}`}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,11,26,1) 0%, transparent 60%)' }} />
                                </div>
                                <div className="ags-card-content">
                                    <div style={{ marginBottom: '0.75rem' }}>
                                        <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D4AF37', fontWeight: 600 }}>
                                            {tour.flag} {tour.country}
                                        </span>
                                    </div>
                                    <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.75rem', color: '#D4AF37', margin: '0 0 0.5rem', fontWeight: 700 }}>
                                        {tour.name}
                                    </h2>
                                    <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F8FAFC', opacity: 0.6, marginBottom: '1rem', fontWeight: 400 }}>
                                        {tour.subtitle}
                                    </h3>
                                    <p style={{ fontSize: '1rem', color: 'rgba(248,250,252,0.65)', lineHeight: 1.6, marginBottom: '2rem' }}>
                                        {tour.description}
                                    </p>
                                    <div style={{ borderTop: '1px solid rgba(212,175,55,0.2)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.8rem', fontWeight: 600 }}>
                                        <span>View Itinerary</span>
                                        <span>→</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}

                        {/* Event Card: The Horn Blower's Invitational */}
                        <Link href="/events-tours/" className="ags-card-link">
                            <div className="ags-card" style={{ border: '1px solid rgba(212, 175, 55, 0.4)' }}>
                                <div className="ags-card-image-container" style={{ height: '280px' }}>
                                    <Image src="/images/destinations/vietnam/hero/vietnam-north-rice-terraces-hero.webp" alt="The Horn Blower's Invitational" fill sizes="(max-width: 768px) 100vw, 400px" style={{ objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5,11,26,1) 0%, transparent 60%)' }} />
                                    <span className="ags-card-badge" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: '#D4AF37', color: '#020617', padding: '0.4rem 0.8rem', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em' }}>SIGNATURE EVENT</span>
                                </div>
                                <div className="ags-card-content">
                                    <div style={{ marginBottom: '0.75rem' }}>
                                        <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D4AF37', fontWeight: 600 }}>
                                            🏆 TBC
                                        </span>
                                    </div>
                                    <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.75rem', color: '#D4AF37', margin: '0 0 0.5rem', fontWeight: 700 }}>
                                        The Horn Blower's Invitational
                                    </h2>
                                    <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F8FAFC', opacity: 0.6, marginBottom: '1rem', fontWeight: 400 }}>
                                        Elite Tournament
                                    </h3>
                                    <p style={{ fontSize: '1rem', color: 'rgba(248,250,252,0.65)', lineHeight: 1.6, marginBottom: '2rem' }}>
                                        The definitive AGS Invitational. A test of skill and nerve in a prestigious tournament setting.
                                    </p>
                                    <div style={{ borderTop: '1px solid rgba(212,175,55,0.2)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.8rem', fontWeight: 600 }}>
                                        <span>View Event Details</span>
                                        <span>→</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                </div>
            </section>

            {/* CTA */}
            <section className="cta-section" style={{ paddingBottom: '8rem' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '2rem' }}>None of these quite right?</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Every itinerary we publish is a starting point. Our Local Guardians custom-engineer every trip around your group's exact demands — courses, dates, group size, and budget.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Link href="/quote/" className="btn-primary">Request a Custom Quote</Link>
                    </div>
                </div>
            </section>

            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "CollectionPage",
                            "@id": "https://www.asiagolfspecialists.com/tours/",
                            "name": "Signature Golf Tours — Asia Golf Specialists",
                            "description": "Flagship luxury golf tour itineraries across Vietnam, Thailand, and Cambodia.",
                            "url": "https://www.asiagolfspecialists.com/tours/",
                            "dateModified": "2026-10-28",
                            "publisher": buildOrganizationIdRef()
                        },
                        {
                            "@type": "ItemList",
                            "name": "Asia Golf Specialists Signature Golf Tours",
                            "description": "Flagship luxury golf tour itineraries across Vietnam, Thailand, and Cambodia.",
                            "url": "https://www.asiagolfspecialists.com/tours/",
                            "itemListElement": tours.map((tour, index) => ({
                                "@type": "ListItem",
                                "position": index + 1,
                                "item": {
                                    "@type": "TouristTrip",
                                    "name": tour.name,
                                    "url": `https://www.asiagolfspecialists.com/tours/${tour.slug}/`,
                                    "description": tour.description,
                                    "image": `https://www.asiagolfspecialists.com${tour.image}`,
                                    "touristType": ["Golf Travelers", "Luxury Travelers"],
                                    "provider": { "@id": "https://www.asiagolfspecialists.com/#organization" },
                                    "offers": {
                                        "@type": "Offer",
                                        "price": tour.minPrice,
                                        "priceCurrency": "USD",
                                        "availability": "https://schema.org/InStock",
                                        "url": `https://www.asiagolfspecialists.com/tours/${tour.slug}/`,
                                        "priceSpecification": {
                                            "@type": "PriceSpecification",
                                            "minPrice": tour.minPrice,
                                            "priceCurrency": "USD"
                                        }
                                    }
                                }
                            }))
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Tours", "item": "https://www.asiagolfspecialists.com/tours/" }
                            ]
                        }
                    ]
                })
            }} />
        </main>
    );
}





