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
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Hotel des Arts Saigon (MGallery)</strong> operates as a premier <strong>5 Star</strong> luxury golf resort positioned in District 3, Ho Chi Minh City. Featuring an architectural inventory of bespoke luxury suites, the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (French Indochina heritage elegance) and direct arterial access to Hoiana Shores GC & Ba Na Hills GC.
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, Hotel des Arts Saigon (MGallery) minimizes daily transit friction across the Ho Chi Minh City corridor while elevating off-course recovery through private pool, full-service spa, and signature dining and post-round recovery & wellness (Rooftop infinity pool & Le Spa). Every AGS itinerary anchored at Hotel des Arts Saigon (MGallery) includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights Hotel des Arts Saigon (MGallery)&apos;s breakfast & dining quality (Social Club Rooftop Bar & gourmet kitchen), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
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
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is Hotel des Arts Saigon (MGallery) to the nearest championship golf courses in Ho Chi Minh City?","acceptedAnswer":{"@type":"Answer","text":"Hotel des Arts Saigon (MGallery) is positioned in District 3, Ho Chi Minh City, offering direct private transfer access to Hoiana Shores GC & Ba Na Hills GC. Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at Hotel des Arts Saigon (MGallery)?","acceptedAnswer":{"@type":"Answer","text":"Hotel des Arts Saigon (MGallery) features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does Hotel des Arts Saigon (MGallery) offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at Hotel des Arts Saigon (MGallery) enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Rooftop infinity pool & Le Spa) and breakfast & dining quality (Social Club Rooftop Bar & gourmet kitchen)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at Hotel des Arts Saigon (MGallery)?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Hotel des Arts Saigon (MGallery) as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is Hotel des Arts Saigon (MGallery) to the nearest championship golf courses in Ho Chi Minh City?",
                    "a": "Hotel des Arts Saigon (MGallery) is positioned in District 3, Ho Chi Minh City, offering direct private transfer access to Hoiana Shores GC & Ba Na Hills GC. Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at Hotel des Arts Saigon (MGallery)?",
                    "a": "Hotel des Arts Saigon (MGallery) features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does Hotel des Arts Saigon (MGallery) offer?",
                    "a": "Guests at Hotel des Arts Saigon (MGallery) enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Rooftop infinity pool & Le Spa) and breakfast & dining quality (Social Club Rooftop Bar & gourmet kitchen)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at Hotel des Arts Saigon (MGallery)?",
                    "a": "Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Hotel des Arts Saigon (MGallery) as part of a complete stay-and-play golf package."
          }
].map((faq, i) => (
                            <details key={i} style={{ borderBottom: "1px solid rgba(212,175,55,0.12)", padding: "1.5rem 0" }}>
                                <summary style={{ fontSize: "1.05rem", fontWeight: 600, cursor: "pointer", color: "#F8FAFC", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                                    <span>{faq.q}</span>
                                    <span style={{ color: "#D4AF37", fontSize: "1.2rem", flexShrink: 0 }}>+</span>
                                </summary>
                                <p style={{ marginTop: "1rem", color: "rgba(248,250,252,0.65)", lineHeight: 1.75, fontSize: "1rem" }}>{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>
        
            <VenueItineraries venueHref="/accommodations/vietnam/hotel-des-artes-saigon/" venueName="Hotel des Arts Saigon (MGallery)" venueType="accommodation" />

</main>
    );
}
