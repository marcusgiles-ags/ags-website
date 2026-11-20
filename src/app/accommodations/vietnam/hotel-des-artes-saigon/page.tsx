import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
    title: { absolute: "Hotel Des Arts Saigon | Luxury Boutique Hotel Saigon" },
    description: "Hotel Des Arts Saigon – MGallery. A chic, 5-star boutique property in District 3, offering a rooftop infinity pool and sophisticated design.",
    keywords: ["Hotel Des Arts Saigon", "MGallery Ho Chi Minh City", "Saigon luxury hotel", "District 3 hotel", "Vietnam golf hotel"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/hotel-des-artes-saigon/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Hotel Des Arts Saigon | Luxury Boutique Hotel Saigon" },
        description: "Hotel Des Arts Saigon – MGallery. A chic, 5-star boutique property in District 3, offering a rooftop infinity pool and sophisticated design.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/hotel-des-artes-saigon/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/hotel-des-artes-saigon/hotel-des-artes-hero.webp",
            width: 1200,
            height: 630,
            alt: "Hotel Des Arts Saigon | Luxury Boutique Hotel in Ho Chi Minh City – Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Hotel Des Arts Saigon | Luxury Boutique Hotel Saigon" },
        description: "Hotel Des Arts Saigon – MGallery. A chic, 5-star boutique property in District 3, offering a rooftop infinity pool and sophisticated design.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/hotel-des-artes-saigon/hotel-des-artes-hero.webp"],
    },
};

const images = [
    { src: "/images/accommodations/vietnam/hotel-des-artes-saigon/hotel-des-artes-hero.webp", alt: "Hotel Des Arts Saigon MGallery exterior District 3 Vietnam 2026", caption: "Boutique Elegance in Saigon" },
    { src: "/images/accommodations/vietnam/hotel-des-artes-saigon/hotel-des-artes-full-view.webp", alt: "Hotel Des Arts Saigon architectural full view Ho Chi Minh City 2026", caption: "Iconic Saigon Architecture" },
    { src: "/images/accommodations/vietnam/hotel-des-artes-saigon/hotel-des-artes-rooftop-bar.webp", alt: "Hotel Des Arts Saigon Social Club rooftop bar Vietnam 2026", caption: "Social Club Rooftop Bar" },
    { src: "/images/accommodations/vietnam/hotel-des-artes-saigon/hotel-des-artes-poolside.webp", alt: "Hotel Des Arts Saigon highest rooftop infinity pool Vietnam 2026", caption: "Saigon's Highest Infinity Pool" },
    { src: "/images/accommodations/vietnam/hotel-des-artes-saigon/hotel-des-artes-lobby-bar.webp", alt: "Hotel Des Arts Saigon Cafe des Beaux-Arts lobby lounge 2026", caption: "Café des Beaux-Arts" },
    { src: "/images/accommodations/vietnam/hotel-des-artes-saigon/hotel-des-artes-room.webp", alt: "Hotel Des Arts Saigon MGallery luxury suite interior 2026", caption: "Chic Indochine Suites" }
];

export default function AccommodationPage() {
    return (
        <main style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-tertiary)', minHeight: '100vh' }}>
            <Navbar />
            <header className="hero" style={{ minHeight: '85vh'}}>
                <div style={{ position: 'absolute', inset: 0, zIndex: 0, WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)' }}>
                    <Image 
                        src={images[0].src} 
                        alt="Hotel Des Arts Saigon hero background" 
                        fill 
                        style={{ objectFit: 'cover' }} 
                        priority 
                    />
                    <div className="hero-overlay" style={{ position: 'absolute', inset: 0, zIndex: 2 }}></div>
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <DestinationBackLink country="Vietnam" countryLink="/destinations/vietnam/accommodations/" />
                    <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Basecamp</div>
                    <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Hotel Des Arts<br /><span className="text-gold">Saigon</span></h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }}>"An MGallery Collection property blending French Indochine charm with modern 5-star luxury."</p>
                </div>
            </header>

            <section className="section" style={{ paddingTop: '4rem' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    <div className="article-content">
                        <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Property <span className="text-gold">Specifications</span></h2>
                        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                            <tbody>
                                {[
                                    ['Rating', '5-Star Luxury (MGallery Collection)'],
                                    ['Location', 'District 3, Ho Chi Minh City'],
                                    ['Vibe', 'Chic, Artistic, French Indochine'],
                                    ['Rooms', '168 Boutique Rooms & Suites'],
                                    ['Highlights', 'Social Club Rooftop Bar, Highest Infinity Pool in Saigon']
                                ].map(([k, v], i) => (
                                    <tr key={i}>
                                        <th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th>
                                        <td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
                        <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <p>Hotel Des Arts Saigon, an MGallery Collection property, offers an exquisite journey back in time, blending the classical romance of French Indochine with contemporary luxury. Located in the leafy, prestigious District 3, it provides a sophisticated retreat just steps away from the bustling heart of District 1.</p>
                            <p>The property is renowned for its artistic ambiance, functioning as a boutique art museum with an extensive collection of paintings and antiques. The Social Club Rooftop Bar and the city's highest infinity pool offer unparalleled views of the Saigon skyline, making it the ultimate venue for post-round relaxation and evening entertainment.</p>
                            <p>As a premium basecamp for Asia Golf Specialists' clients, Hotel Des Arts delivers rapid logistical access to Ho Chi Minh City's finest championship golf courses, including Tan Son Nhat, Long Thanh, and Twin Doves, combined with the absolute pinnacle of personalized boutique service.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                        {images.map((img, i) => (
                            <div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}>
                                <Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} />
                                <div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>
                                    {img.caption || `Image ${i + 1}`}
                                </div>
                            </div>
                        ))}
                    </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/vietnam/hotel-des-artes-saigon/"
  />
  </div>
  </section>

            <section className="section">
                <div className="container text-center">
                    <h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from Hotel Des Arts Saigon to the finest courses in Southern Vietnam.</p>
                    <Link href="/quote/" className="btn-primary">Speak to a Specialist</Link>
                </div>
            </section>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "LodgingBusiness",
                        "name": "Hotel Des Arts Saigon",
                        "starRating": { "@type": "Rating", "ratingValue": "5" },
                        "address": { 
                            "@type": "PostalAddress", 
                            "streetAddress": "27 Nguyen Phan Vinh",
                            "addressLocality": "Hoi An",
                            "addressRegion": "Da Nang",
                            "postalCode": "550000",
                            "addressCountry": "VN" 
                        },
                        "telephone": "+61 412 345 678",
                        "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                        "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/hotel-des-artes-saigon/"
                    },
                    {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com" },
                            { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://www.asiagolfspecialists.com/destinations/vietnam" },
                            { "@type": "ListItem", "position": 3, "name": "Vietnam Accommodations", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations" },
                            { "@type": "ListItem", "position": 4, "name": "Hotel Des Arts Saigon", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/hotel-des-artes-saigon" }
                        ]
                    }
                ]
            }) }} />

            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Standing on tree-lined Nguyen Thi Minh Khai Street on the District 3 / District 1 border, the 168-room Hotel des Arts Saigon (MGallery) blends 1930s Indochine romance with contemporary boutique polish. On our site visits, the combination of quiet art-filled guestrooms and the glamorous 23rd-floor Social Club rooftop infinity pool makes it a firm favourite for couples and stylish small groups touring Southern Vietnam.</p>
                        <p style={{ marginBottom: '1rem' }}>Its central yet slightly calmer boulevard position gives AGS touring vehicles smoother morning departures than deep-alley District 1 hotels — reaching Tan Son Nhat Golf Course in 20 to 25 minutes, Vietnam Golf &amp; Country Club in 40 minutes, and Long Thanh in 45 to 55 minutes.</p>
                        <p>After 18 holes, the rooftop pool and Social Club Sky Bar offer one of Saigon&apos;s premier sunset 19th-hole atmospheres, backed by Le Spa des Artistes and Saigon Kitchen&apos;s refined Vietnamese-French breakfast buffet.</p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Hotel des Arts Saigon (MGallery)"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/hotel-des-artes-saigon/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/hotel-des-artes-saigon/hotel-des-artes-hero.webp"
    addressLocality="Ho Chi Minh City"
    addressCountry="VN"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="MGallery Art Deco Luxury • Saigon"
    inspectionDate="Site-Verified by AGS On-Ground Team"
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.7,
            highlight: "French Indochina heritage elegance"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.6,
            highlight: "Chic central District 3 neighborhood"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.7,
            highlight: "Rooftop infinity pool & Le Spa"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.7,
            highlight: "Social Club Rooftop Bar & gourmet kitchen"
      }
]}
    verdict="A romantic masterpiece blending French colonial nostalgia with modern boutique elegance. The Social Club rooftop pool and lounge is Saigon's most glamorous 19th-hole sunset venue."
  />


            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is the highlight of staying at Hotel des Arts Saigon after a round of golf?","acceptedAnswer":{"@type":"Answer","text":"The 23rd-floor Social Club Rooftop Pool and Lounge — Saigon's highest infinity pool overlooking the skyline — paired with handcrafted cocktails, DJ sunset sets, and Le Spa des Artistes directly downstairs."}},{"@type":"Question","name":"How far is Hotel des Arts Saigon from Tan Son Nhat Airport and Saigon golf courses?","acceptedAnswer":{"@type":"Answer","text":"Tan Son Nhat Airport (SGN) and Tan Son Nhat Golf Course are 20–25 minutes north, while Vietnam Golf & Country Club (40 min), Long Thanh (50 min), and The Bluffs Ho Tram (2 hr 15 min) are accessed smoothly via private AGS transfers."}},{"@type":"Question","name":"Should golfers upgrade to Sky Executive Rooms at Hotel des Arts Saigon?","acceptedAnswer":{"@type":"Answer","text":"Yes — Sky Executive Rooms and Suites include Sky Executive Lounge access on the 22nd floor with express check-in, daily breakfast, afternoon tea, and complimentary evening cocktails and canapes."}},{"@type":"Question","name":"Is Hotel des Arts Saigon walkable to Saigon's main landmarks and dining?","acceptedAnswer":{"@type":"Answer","text":"Yes. Notre-Dame Cathedral, the Central Post Office, and Reunification Palace sit within a 5-minute walk, with District 1's top dining and nightlife moments away."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "What is the highlight of staying at Hotel des Arts Saigon after a round of golf?",
    "a": "The 23rd-floor Social Club Rooftop Pool and Lounge — Saigon's highest infinity pool overlooking the skyline — paired with handcrafted cocktails, DJ sunset sets, and Le Spa des Artistes directly downstairs."
  },
  {
    "q": "How far is Hotel des Arts Saigon from Tan Son Nhat Airport and Saigon golf courses?",
    "a": "Tan Son Nhat Airport (SGN) and Tan Son Nhat Golf Course are 20–25 minutes north, while Vietnam Golf & Country Club (40 min), Long Thanh (50 min), and The Bluffs Ho Tram (2 hr 15 min) are accessed smoothly via private AGS transfers."
  },
  {
    "q": "Should golfers upgrade to Sky Executive Rooms at Hotel des Arts Saigon?",
    "a": "Yes — Sky Executive Rooms and Suites include Sky Executive Lounge access on the 22nd floor with express check-in, daily breakfast, afternoon tea, and complimentary evening cocktails and canapes."
  },
  {
    "q": "Is Hotel des Arts Saigon walkable to Saigon's main landmarks and dining?",
    "a": "Yes. Notre-Dame Cathedral, the Central Post Office, and Reunification Palace sit within a 5-minute walk, with District 1's top dining and nightlife moments away."
  }
]).map((faq, i) => (
                            <details key={i} style={{ borderBottom: "1px solid rgba(212,175,55,0.12)", padding: "1.5rem 0" }}>
                                <summary style={{ fontSize: "1.05rem", fontWeight: 600, cursor: "pointer", color: "#F8FAFC", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                                    <span>{faq.q}</span>
                                    <span style={{ color: "#D4AF37", fontSize: "1.2rem", flexShrink: 0 }}>+</span>
                                </summary>
                                <p style={{ marginTop: "1rem", color: "rgba(248,250,252,0.72)", lineHeight: 1.75, fontSize: "1rem" }}>{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        
            <AccommodationConciergeBlock hotelName="Hotel des Arts Saigon (MGallery)" location="Ho Chi Minh City" countryName="Vietnam" />

            <VenueItineraries venueHref="/accommodations/vietnam/hotel-des-artes-saigon/" venueName="Hotel des Arts Saigon (MGallery)" venueType="accommodation" />

</main>
    );
}
