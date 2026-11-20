import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Fusion Suites Saigon | Ho Chi Minh" },
 description: "A contemporary, wellness-inspired all-suite hotel in the heart of Saigon, perfect for golfers seeking modern comfort and vibrant city energy.",
 keywords: ["Fusion Suites Saigon","Ho Chi Minh City modern suites","Saigon wellness hotel golf","Southern Vietnam urban golf"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/fusion-suites-saigon/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Fusion Suites Saigon | Ho Chi Minh" },
        description: "A contemporary, wellness-inspired all-suite hotel in the heart of Saigon, perfect for golfers seeking modern comfort and vibrant city energy.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/fusion-suites-saigon/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/fusion-suites-saigon/1.webp",
            width: 1200,
            height: 630,
            alt: "Fusion Suites Saigon | Ho Chi Minh City, Vietnam | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Fusion Suites Saigon | Ho Chi Minh" },
        description: "A contemporary, wellness-inspired all-suite hotel in the heart of Saigon, perfect for golfers seeking modern comfort and vibrant city energy.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/fusion-suites-saigon/1.webp"],
    },
};

const images = [
 { src: "/images/accommodations/vietnam/fusion-suites-saigon/1.webp", alt: "Fusion Suites Saigon - Fusion Suites Saigon Rooftop - Premium Southeast Asia Golf Tours", caption: "Fusion Suites Saigon Fusion Suites Saigon Rooftop" },
 { src: "/images/accommodations/vietnam/fusion-suites-saigon/2.webp", alt: "Fusion Suites Saigon - Fusion Suites Saigon - Premium Southeast Asia Golf Tours", caption: "Fusion Suites Saigon Fusion Suites Saigon" },
 { src: "/images/accommodations/vietnam/fusion-suites-saigon/3.webp", alt: "Fusion Suites Saigon - Fusion Suites Saigon - Premium Southeast Asia Golf Tours", caption: "Fusion Suites Saigon Fusion Suites Saigon" },
 { src: "/images/accommodations/vietnam/fusion-suites-saigon/4.webp", alt: "Fusion Suites Saigon - Fusion Suites Saigon - Premium Southeast Asia Golf Tours", caption: "Fusion Suites Saigon Fusion Suites Saigon" },
 { src: "/images/accommodations/vietnam/fusion-suites-saigon/5.webp", alt: "Fusion Suites Saigon - Fusion Suites Saigon Main Entrance - Premium Southeast Asia Golf Tours", caption: "Fusion Suites Saigon Fusion Suites Saigon Main Entrance" }
];

export default function AccommodationPage() {
 return (
 <main style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-tertiary)', minHeight: '100vh' }}>
 <Navbar />
 <header className="hero" style={{ minHeight: '85vh'}}>
 <div style={{ position: 'absolute', inset: 0, zIndex: 0, WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)' }}>
<Image 
        src={images[0].src} 
        alt={images[0].alt} 
        fill 
        priority 
        style={{ objectFit: 'cover' }} 
        sizes="100vw"
    />
 <div className="hero-overlay" style={{ position: 'absolute', inset: 0, zIndex: 2 }}></div>
 </div>
 <div className="container" style={{ position: 'relative', zIndex: 10 }}>
<DestinationBackLink country="Vietnam" countryLink="/destinations/vietnam/accommodations/" />
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Preferred Property — Vietnam</div>
 <h1 style={{ marginBottom: '1rem' }}>Fusion Suites Saigon</h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"A contemporary, wellness-inspired all-suite hotel in the heart of Saigon, perfect for golfers seeking modern comfort and vibrant city energy."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
  <tr key="Category"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Category</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>All-Suite Wellness Hotel</td></tr>
  <tr key="Star Rating"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Star Rating</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>4 Star</td></tr>
  <tr key="Location"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Location</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>District 1, Ho Chi Minh City</td></tr>
  <tr key="Total Rooms"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Total Rooms</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>76 Suites</td></tr>
  <tr key="Setting"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Setting</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Urban chic, steps from Tao Dan Park</td></tr>
  <tr key="Nearest Golf"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Nearest Golf</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Tan Son Nhat GC (30 min), Vietnam Golf & Country Club (45 min)</td></tr>
  <tr key="Key Amenity"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Key Amenity</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Daily Spa Treatments included, Fresh Restaurant</td></tr>
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
  <p>Fusion Suites Saigon brings a breath of fresh, minimalist air to the bustling metropolis of Ho Chi Minh City. Characterized by blonde wood, floor-to-ceiling windows, and a distinctly modern aesthetic, this all-suite property emphasizes wellness and comfort amidst the kinetic energy of District 1.</p>
  <p>The hotel's location is strategically positioned for the southern golf circuit. Access to Tan Son Nhat Golf Course and Vietnam Golf & Country Club is straightforward, allowing golfers to conquer the parkland layouts by day and dive into Saigon's legendary culinary and nightlife scene by night.</p>
  <p>AGS incorporates Fusion Suites into itineraries for its unique 'spa-inclusive' concept, which guarantees daily spa treatments for guests—an absolute game-changer for golfers needing to ease tense muscles after a tough round. It is the definitive modern urban hub for a Saigon golf escape.</p>
 </div>
 </div>
 </div>
 </section>
  <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/vietnam/fusion-suites-saigon/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from Fusion Suites Saigon to the golf circuit.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Fusion Suites Saigon",
                            "starRating": { "@type": "Rating", "ratingValue": "4" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Ho Chi Minh City", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/fusion-suites-saigon/",
                          "sameAs": ["https://fusionsuitesaigon.com/","https://www.booking.com/hotel/vn/fusion-suites-saigon.en-gb.html","https://www.tripadvisor.com/Hotel_Review-g293925-d8400030-Reviews-Fusion_Suites_Saigon-Ho_Chi_Minh_City.html","https://www.agoda.com/fusion-suites-saigon/hotel/ho-chi-minh-city-vn.html"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Fusion Suites Saigon", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/fusion-suites-saigon/" }
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
                            <strong>Fusion Suites Saigon</strong> operates as a premier <strong>5 Star</strong> all-suite wellness hotel positioned in Ho Chi Minh City, Vietnam. Featuring an architectural inventory of 76 suites, the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (Scandinavian wood & acoustic glass) and direct arterial access to Tan Son Nhat GC (30 min), Vietnam Golf & Country Club (45 min).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, Fusion Suites Saigon minimizes daily transit friction across the Ho Chi Minh City corridor while elevating off-course recovery through daily spa treatments included, fresh restaurant and post-round recovery & wellness (Daily chromotherapy spa treatment included). Every AGS itinerary anchored at Fusion Suites Saigon includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights Fusion Suites Saigon&apos;s breakfast & dining quality (Fresh healthy breakfast & juices), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Fusion Suites Saigon"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/fusion-suites-saigon/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/fusion-suites-saigon/1.webp"
    addressLocality="Ho Chi Minh City"
    addressCountry="VN"
    overallScore={4.6}
    maxScore={5.0}
    gradeBadge="Modern Wellness Suites • Saigon"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.5,
            highlight: "Scandinavian wood & acoustic glass"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.4,
            highlight: "Peaceful park-facing rooms"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.5,
            highlight: "Daily chromotherapy spa treatment included"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.3,
            highlight: "Fresh healthy breakfast & juices"
      }
]}
    verdict="A refreshing minimalist sanctuary in downtown Ho Chi Minh City. Generous studio layouts with in-room kitchenettes and daily spa treatments tailored to restore weary golfers."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is Fusion Suites Saigon to the nearest championship golf courses in Ho Chi Minh City?","acceptedAnswer":{"@type":"Answer","text":"Fusion Suites Saigon is positioned in Ho Chi Minh City, Vietnam, offering direct private transfer access to Tan Son Nhat GC (30 min), Vietnam Golf & Country Club (45 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at Fusion Suites Saigon?","acceptedAnswer":{"@type":"Answer","text":"Fusion Suites Saigon features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does Fusion Suites Saigon offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at Fusion Suites Saigon enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Daily chromotherapy spa treatment included) and breakfast & dining quality (Fresh healthy breakfast & juices)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at Fusion Suites Saigon?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Fusion Suites Saigon as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is Fusion Suites Saigon to the nearest championship golf courses in Ho Chi Minh City?",
                    "a": "Fusion Suites Saigon is positioned in Ho Chi Minh City, Vietnam, offering direct private transfer access to Tan Son Nhat GC (30 min), Vietnam Golf & Country Club (45 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at Fusion Suites Saigon?",
                    "a": "Fusion Suites Saigon features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does Fusion Suites Saigon offer?",
                    "a": "Guests at Fusion Suites Saigon enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Daily chromotherapy spa treatment included) and breakfast & dining quality (Fresh healthy breakfast & juices)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at Fusion Suites Saigon?",
                    "a": "Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Fusion Suites Saigon as part of a complete stay-and-play golf package."
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

            <VenueItineraries venueHref="/accommodations/vietnam/fusion-suites-saigon/" venueName="Fusion Suites Saigon" venueType="accommodation" />

</main>
 );
}
