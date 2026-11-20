import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Fusion Resort & Villas Da Nang | Vietnam" },
 description: "A wellness-focused beachfront resort offering private pool villas and daily spa treatments, located minutes from Da Nang's championship golf courses.",
 keywords: ["Fusion Resort Da Nang","Da Nang luxury villa golf","Vietnam wellness resort","Da Nang pool villas", "all-inclusive spa Vietnam"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/fusion-resort-villa-da-nang/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Fusion Resort & Villas Da Nang | Vietnam" },
        description: "A wellness-focused beachfront resort offering private pool villas and daily spa treatments, located minutes from Da Nang's championship golf courses.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/fusion-resort-villa-da-nang/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/fusion-resort-villa-da-nang/vietnam-luxury-hotel-hero-fusion-resort-villa-da-nang-aerial-view.webp",
            width: 1200,
            height: 630,
            alt: "Fusion Resort & Villas Da Nang | Da Nang, Vietnam | Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Fusion Resort & Villas Da Nang | Vietnam" },
        description: "A wellness-focused beachfront resort offering private pool villas and daily spa treatments, located minutes from Da Nang's championship golf courses.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/fusion-resort-villa-da-nang/vietnam-luxury-hotel-hero-fusion-resort-villa-da-nang-aerial-view.webp"],
    },
};

const images = [
 { src: "/images/accommodations/vietnam/fusion-resort-villa-da-nang/vietnam-luxury-hotel-hero-fusion-resort-villa-da-nang-aerial-view.webp", alt: "Fusion Resort - Aerial view", caption: "Aerial view" },
 { src: "/images/accommodations/vietnam/fusion-resort-villa-da-nang/vietnam-luxury-hotel-fusion-resort-villa-da-nang-beachfront-chilling.webp", alt: "Fusion Resort - Beachfront chilling", caption: "Beachfront chilling" },
 { src: "/images/accommodations/vietnam/fusion-resort-villa-da-nang/vietnam-luxury-hotel-fusion-resort-villa-da-nang-dining-area.webp", alt: "Fusion Resort - Dining area", caption: "Dining area" },
 { src: "/images/accommodations/vietnam/fusion-resort-villa-da-nang/vietnam-luxury-hotel-fusion-resort-villa-da-nang-hotel-suite.webp", alt: "Fusion Resort - Hotel suite", caption: "Hotel suite" },
 { src: "/images/accommodations/vietnam/fusion-resort-villa-da-nang/vietnam-luxury-hotel-fusion-resort-villa-da-nang-pool-villa.webp", alt: "Fusion Resort - Pool villa", caption: "Pool villa" },
 { src: "/images/accommodations/vietnam/fusion-resort-villa-da-nang/vietnam-luxury-hotel-fusion-resort-villa-da-nang-poolside-refreshments.webp", alt: "Fusion Resort - Poolside refreshments", caption: "Poolside refreshments" },
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
 <h1 style={{ marginBottom: '1rem' }}>Fusion Resort & Villas Da Nang</h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"A premium wellness-focused beachfront resort offering private pool villas and all-inclusive spa treatments, located just minutes from Da Nang's top golf courses."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
  <tr key="Category"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Category</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Wellness & Beach Resort</td></tr>
  <tr key="Star Rating"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Star Rating</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>5 Star</td></tr>
  <tr key="Location"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Location</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Non Nuoc Beach, Da Nang</td></tr>
  <tr key="Total Rooms"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Total Rooms</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>85 Pool Villas</td></tr>
  <tr key="Setting"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Setting</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Pristine beachfront setting</td></tr>
  <tr key="Nearest Golf"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Nearest Golf</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Montgomerie Links (5 min), BRG Da Nang (5 min)</td></tr>
  <tr key="Key Amenity"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Key Amenity</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>All-Spa Inclusive, Private Pools, Flexible Dining</td></tr>
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
  <p>Situated directly on the pristine sands of Non Nuoc Beach, Fusion Resort & Villas Da Nang takes the concept of a golf holiday and elevates it with an uncompromised focus on wellness. The property consists exclusively of private pool villas, offering an intimate and secluded environment perfect for unwinding.</p>
  <p>For players focused on maximizing their time on the fairways, the location is virtually unbeatable. The resort sits just a five-minute drive from both Montgomerie Links and BRG Da Nang Golf Resort. This proximity means less time in transit and more time enjoying the facilities.</p>
  <p>What truly sets Fusion apart for golfers is its signature 'all-spa inclusive' concept and 'breakfast anywhere, anytime' service. This means early tee times are never an issue for dining, and after walking 18 holes, guests can seamlessly transition into guaranteed daily spa therapies designed to relieve tension and prepare the body for the next day's challenge.</p>
 </div>
 </div>
 </div>
 </section>
  <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/vietnam/fusion-resort-villa-da-nang/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from Fusion Resort & Villas Da Nang to the golf circuit.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Fusion Resort & Villas Da Nang",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Da Nang", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/fusion-resort-villa-da-nang/",
                          "sameAs": ["https://fusionresorts.com/fusionresortdanang/","https://www.forbestravelguide.com/hotels/da-nang-vietnam/fusion-resort-villas-da-nang","https://guide.michelin.com/en/hotels-stays/da-nang/fusion-resort-villas-da-nang","https://www.cntraveler.com/hotels/da-nang/fusion-resort-villas-da-nang"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Fusion Resort & Villas Da Nang", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/fusion-resort-villa-da-nang/" }
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
                            <strong>Fusion Resort & Villas Da Nang</strong> operates as a premier <strong>5 Star</strong> wellness & beach resort positioned in Da Nang, Vietnam. Featuring an architectural inventory of 85 pool villas, the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (Private pool villas & garden pavilions) and direct arterial access to Montgomerie Links (5 min), BRG Da Nang (5 min).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, Fusion Resort & Villas Da Nang minimizes daily transit friction across the Da Nang corridor while elevating off-course recovery through all-spa inclusive, private pools, flexible dining and post-round recovery & wellness (Daily inclusive signature spa therapies). Every AGS itinerary anchored at Fusion Resort & Villas Da Nang includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights Fusion Resort & Villas Da Nang&apos;s breakfast & dining quality (Breakfast anywhere, anytime concept), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Fusion Resort & Villas Da Nang"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/fusion-resort-villa-da-nang/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/fusion-resort-villa-da-nang/vietnam-luxury-hotel-hero-fusion-resort-villa-da-nang-aerial-view.webp"
    addressLocality="Da Nang"
    addressCountry="VN"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="All-Inclusive Spa Villas • Central Coast"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.7,
            highlight: "Private pool villas & garden pavilions"
      },
      {
            label: "Villa & Beachfront Privacy",
            score: 9.8,
            highlight: "Secluded coastal layout"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.9,
            highlight: "Daily inclusive signature spa therapies"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.8,
            highlight: "Breakfast anywhere, anytime concept"
      }
]}
    verdict="Built around wellness and recovery. Every villa features a private pool, and inclusive daily spa therapies make it the ultimate physical recovery retreat for multi-round golf tours."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is Fusion Resort & Villas Da Nang to the nearest championship golf courses in Da Nang?","acceptedAnswer":{"@type":"Answer","text":"Fusion Resort & Villas Da Nang is positioned in Da Nang, Vietnam, offering direct private transfer access to Montgomerie Links (5 min), BRG Da Nang (5 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at Fusion Resort & Villas Da Nang?","acceptedAnswer":{"@type":"Answer","text":"Fusion Resort & Villas Da Nang features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does Fusion Resort & Villas Da Nang offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at Fusion Resort & Villas Da Nang enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Daily inclusive signature spa therapies) and breakfast & dining quality (Breakfast anywhere, anytime concept)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at Fusion Resort & Villas Da Nang?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Fusion Resort & Villas Da Nang as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is Fusion Resort & Villas Da Nang to the nearest championship golf courses in Da Nang?",
                    "a": "Fusion Resort & Villas Da Nang is positioned in Da Nang, Vietnam, offering direct private transfer access to Montgomerie Links (5 min), BRG Da Nang (5 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at Fusion Resort & Villas Da Nang?",
                    "a": "Fusion Resort & Villas Da Nang features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does Fusion Resort & Villas Da Nang offer?",
                    "a": "Guests at Fusion Resort & Villas Da Nang enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Daily inclusive signature spa therapies) and breakfast & dining quality (Breakfast anywhere, anytime concept)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at Fusion Resort & Villas Da Nang?",
                    "a": "Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Fusion Resort & Villas Da Nang as part of a complete stay-and-play golf package."
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

            <VenueItineraries venueHref="/accommodations/vietnam/fusion-resort-villa-da-nang/" venueName="Fusion Resort & Villas Da Nang" venueType="accommodation" />

</main>
 );
}
