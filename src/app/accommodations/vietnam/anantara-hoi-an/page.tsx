import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Anantara Hoi An Resort | Vietnam" },
 description: "Stay at the 5-star Anantara Hoi An Resort on the Thu Bon River. Pair boutique riverside suites with championship rounds at Hoiana Shores and Montgomerie.",
 keywords: ["Anantara Hoi An Resort","Hoi An luxury resort golf","Central Vietnam heritage hotel","Hoi An riverfront accommodation", "Anantara Vietnam"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/anantara-hoi-an/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Anantara Hoi An Resort | Vietnam" },
        description: "Stay at the 5-star Anantara Hoi An Resort on the Thu Bon River. Pair boutique riverside suites with championship rounds at Hoiana Shores and Montgomerie.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/anantara-hoi-an/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/anantara-hoi-an/vietnam-luxury-hotel-hero-anantara-hoi-an-hotel-exterior.webp",
            width: 1200,
            height: 630,
            alt: "Anantara Hoi An Resort | Hoi An, Vietnam | Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Anantara Hoi An Resort | Vietnam" },
        description: "Stay at the 5-star Anantara Hoi An Resort on the Thu Bon River. Pair boutique riverside suites with championship rounds at Hoiana Shores and Montgomerie.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/anantara-hoi-an/vietnam-luxury-hotel-hero-anantara-hoi-an-hotel-exterior.webp"],
    },
};

const images = [
 { src: "/images/accommodations/vietnam/anantara-hoi-an/vietnam-luxury-hotel-hero-anantara-hoi-an-hotel-exterior.webp", alt: "Anantara Hoi An - Hotel exterior", caption: "Hotel exterior" },
 { src: "/images/accommodations/vietnam/anantara-hoi-an/vietnam-luxury-hotel-anantara-hoi-an-bedroom-interior.webp", alt: "Anantara Hoi An - Bedroom interior", caption: "Bedroom interior" },
 { src: "/images/accommodations/vietnam/anantara-hoi-an/vietnam-luxury-hotel-anantara-hoi-an-gardens.webp", alt: "Anantara Hoi An - Gardens", caption: "Gardens" },
 { src: "/images/accommodations/vietnam/anantara-hoi-an/vietnam-luxury-hotel-anantara-hoi-an-pool.webp", alt: "Anantara Hoi An - Pool", caption: "Pool" },
 { src: "/images/accommodations/vietnam/anantara-hoi-an/vietnam-luxury-hotel-anantara-hoi-an-poolside-relaxation.webp", alt: "Anantara Hoi An - Poolside relaxation", caption: "Poolside relaxation" },
 { src: "/images/accommodations/vietnam/anantara-hoi-an/vietnam-luxury-hotel-anantara-hoi-an-riverfront-bliss.webp", alt: "Anantara Hoi An - Riverfront bliss", caption: "Riverfront bliss" },
 { src: "/images/accommodations/vietnam/anantara-hoi-an/vietnam-luxury-hotel-anantara-hoi-an-riverfront-dining.webp", alt: "Anantara Hoi An - Riverfront dining", caption: "Riverfront dining" },
 { src: "/images/accommodations/vietnam/anantara-hoi-an/vietnam-luxury-hotel-anantara-hoi-an-traditional-architecture.webp", alt: "Anantara Hoi An - Traditional architecture", caption: "Traditional architecture" },
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
 <h1 style={{ marginBottom: '1rem' }}>Anantara Hoi An Resort</h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Stay at the 5-star Anantara Hoi An Resort on the Thu Bon River. Pair boutique riverside suites with championship rounds at Hoiana Shores and Montgomerie."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
  <tr key="Category"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Category</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Heritage Luxury Resort</td></tr>
  <tr key="Star Rating"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Star Rating</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>5 Star</td></tr>
  <tr key="Location"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Location</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Thu Bon River, Hoi An</td></tr>
  <tr key="Total Rooms"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Total Rooms</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>94 Rooms & Suites</td></tr>
  <tr key="Setting"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Setting</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Colonial architecture steps from Ancient Town</td></tr>
  <tr key="Nearest Golf"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Nearest Golf</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Hoiana Shores (25 min), Montgomerie Links (25 min)</td></tr>
  <tr key="Key Amenity"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Key Amenity</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Riverfront Dining, Anantara Spa, Cultural Tours</td></tr>
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
  <p>Anantara Hoi An Resort serves as an impeccably stylish gateway to the rich history of Vietnam's central coast. Designed with French colonial, Dutch, Chinese, and Japanese influences, the property perfectly mirrors the diverse cultural tapestry of the nearby Hoi An Ancient Town.</p>
  <p>For the discerning golfer, Anantara delivers world-renowned service alongside immediate proximity to the region's elite golf offerings. It stands as an ideal hub for exploring Hoiana Shores or Montgomerie Links, ensuring that the transition from a highly competitive round on the course to luxurious relaxation is completely seamless.</p>
  <p>The resort’s famous Anantara Spa specializes in traditional Vietnamese and holistic treatments—essential for post-round muscle recovery. In the evenings, guests can enjoy panoramic river views from their balconies or dine at the sophisticated riverfront restaurants before taking a short walk into the UNESCO World Heritage site.</p>
 </div>
 </div>
 </div>
 </section>
  <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/vietnam/anantara-hoi-an/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from Anantara Hoi An Resort to the golf circuit.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Anantara Hoi An Resort",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Hoi An", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/anantara-hoi-an/",
                          "sameAs": ["https://www.anantara.com/en/hoi-an","https://www.forbestravelguide.com/hotels/hoi-an-vietnam/anantara-hoi-an-resort","https://www.cntraveler.com/hotels/hoi-an/anantara-hoi-an-resort"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Anantara Hoi An Resort", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/anantara-hoi-an/" }
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
                            <strong>Anantara Hoi An Resort</strong> operates as a premier <strong>5 Star</strong> heritage luxury resort positioned in Hoi An, Vietnam. Featuring an architectural inventory of 94 rooms & suites, the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (Riverview split-level daybed suites) and direct arterial access to Hoiana Shores (25 min), Montgomerie Links (25 min).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, Anantara Hoi An Resort minimizes daily transit friction across the Hoi An corridor while elevating off-course recovery through riverfront dining, anantara spa, cultural tours and post-round recovery & wellness (Signature Anantara herbal spa). Every AGS itinerary anchored at Anantara Hoi An Resort includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights Anantara Hoi An Resort&apos;s breakfast & dining quality (Lantern-lit riverside breakfast & bar), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Anantara Hoi An Resort"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/anantara-hoi-an/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/anantara-hoi-an/vietnam-luxury-hotel-hero-anantara-hoi-an-hotel-exterior.webp"
    addressLocality="Hoi An"
    addressCountry="VN"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="Thu Bon Riverfront Colonial Sanctuary • Hoi An"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.7,
            highlight: "Riverview split-level daybed suites"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.7,
            highlight: "Quiet riverbank gardens"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.6,
            highlight: "Signature Anantara herbal spa"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.7,
            highlight: "Lantern-lit riverside breakfast & bar"
      }
]}
    verdict="Set directly on the banks of the Thu Bon River on the edge of the Ancient Town. Colonial-style architecture, tranquil garden courtyards, and direct private boat departures for sunset cruises."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is Anantara Hoi An Resort to the nearest championship golf courses in Hoi An?","acceptedAnswer":{"@type":"Answer","text":"Anantara Hoi An Resort is positioned in Hoi An, Vietnam, offering direct private transfer access to Hoiana Shores (25 min), Montgomerie Links (25 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at Anantara Hoi An Resort?","acceptedAnswer":{"@type":"Answer","text":"Anantara Hoi An Resort features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does Anantara Hoi An Resort offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at Anantara Hoi An Resort enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Signature Anantara herbal spa) and breakfast & dining quality (Lantern-lit riverside breakfast & bar)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at Anantara Hoi An Resort?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Anantara Hoi An Resort as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is Anantara Hoi An Resort to the nearest championship golf courses in Hoi An?",
                    "a": "Anantara Hoi An Resort is positioned in Hoi An, Vietnam, offering direct private transfer access to Hoiana Shores (25 min), Montgomerie Links (25 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at Anantara Hoi An Resort?",
                    "a": "Anantara Hoi An Resort features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does Anantara Hoi An Resort offer?",
                    "a": "Guests at Anantara Hoi An Resort enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Signature Anantara herbal spa) and breakfast & dining quality (Lantern-lit riverside breakfast & bar)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at Anantara Hoi An Resort?",
                    "a": "Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Anantara Hoi An Resort as part of a complete stay-and-play golf package."
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

            <VenueItineraries venueHref="/accommodations/vietnam/anantara-hoi-an/" venueName="Anantara Hoi An Resort" venueType="accommodation" />

</main>
 );
}
