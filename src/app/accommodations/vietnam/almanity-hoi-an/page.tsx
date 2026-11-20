import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Almanity Hoi An Resort & Spa | Vietnam Golf Stay" },
 description: "A wellness-focused retreat just steps from the ancient town of Hoi An, providing a rejuvenating sanctuary for golfers playing the central coast.",
 keywords: ["Almanity Hoi An Wellness Resort","Hoi An luxury hotel golf","Central Vietnam wellness retreat","Hoi An golf accommodation"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/almanity-hoi-an/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Almanity Hoi An Resort & Spa | Vietnam Golf Stay" },
        description: "A wellness-focused retreat just steps from the ancient town of Hoi An, providing a rejuvenating sanctuary for golfers playing the central coast.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/almanity-hoi-an/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/almanity-hoi-an/1.webp",
            width: 1200,
            height: 630,
            alt: "Almanity Hoi An Wellness Resort | Hoi An, Vietnam | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Almanity Hoi An Resort & Spa | Vietnam Golf Stay" },
        description: "A wellness-focused retreat just steps from the ancient town of Hoi An, providing a rejuvenating sanctuary for golfers playing the central coast.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/almanity-hoi-an/1.webp"],
    },
};

const images = [
 { src: "/images/accommodations/vietnam/almanity-hoi-an/1.webp", alt: "Almanity Hoi An - Almanity Hoi An - Premium Southeast Asia Golf Tours", caption: "Almanity Hoi An Almanity Hoi An" },
 { src: "/images/accommodations/vietnam/almanity-hoi-an/2.webp", alt: "Almanity Hoi An - Almanity Hoi An - Premium Southeast Asia Golf Tours", caption: "Almanity Hoi An Almanity Hoi An" },
 { src: "/images/accommodations/vietnam/almanity-hoi-an/3.webp", alt: "Almanity Hoi An - Almanity Hoi An - Premium Southeast Asia Golf Tours", caption: "Almanity Hoi An Almanity Hoi An" },
 { src: "/images/accommodations/vietnam/almanity-hoi-an/4.webp", alt: "Almanity Hoi An - Almanity Hoi An Pool - Premium Southeast Asia Golf Tours", caption: "Almanity Hoi An Almanity Hoi An Pool" },
 { src: "/images/accommodations/vietnam/almanity-hoi-an/5.webp", alt: "Almanity Hoi An - Almanity Hoi An Room - Premium Southeast Asia Golf Tours", caption: "Almanity Hoi An Almanity Hoi An Room" }
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
 <h1 style={{ marginBottom: '1rem' }}>Almanity Hoi An Wellness Resort</h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"A wellness-focused retreat just steps from the ancient town of Hoi An, providing a rejuvenating sanctuary for golfers playing the central coast."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
  <tr key="Category"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Category</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Wellness Resort</td></tr>
  <tr key="Star Rating"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Star Rating</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>4.5 Star</td></tr>
  <tr key="Location"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Location</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Ly Thuong Kiet, Hoi An</td></tr>
  <tr key="Total Rooms"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Total Rooms</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>139 Rooms</td></tr>
  <tr key="Setting"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Setting</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Central courtyard with terraced pools</td></tr>
  <tr key="Nearest Golf"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Nearest Golf</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Hoiana Shores (25 min), Montgomerie Links (25 min)</td></tr>
  <tr key="Key Amenity"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Key Amenity</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>My Chi Spa, Blue Bottle Bar, Organic Farm</td></tr>
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
  <p>Almanity Hoi An Wellness Resort is designed as a holistic sanctuary, wrapping around a stunning multi-tiered swimming pool and lush tropical gardens. The architecture reflects the heritage of nearby Hoi An Ancient Town, while the philosophy of the resort is deeply rooted in wellness, mindfulness, and relaxation.</p>
  <p>For those tackling the formidable Central Coast golf trail, Almanity provides the perfect counterbalance. It is a quick drive to the pure links challenge of Hoiana Shores or the parkland elegance of Montgomerie Links. After facing the coastal breezes, returning to a resort that prioritizes recovery and tranquility is a masterstroke.</p>
  <p>AGS strongly recommends Almanity for groups who value post-round recovery. The My Chi Spa is central to the experience, offering treatments that soothe golfing muscles, while the short walk to the lantern-lit streets of the Ancient Town ensures the evenings are as magical as the days.</p>
 </div>
 </div>
 </div>
 </section>
  <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/vietnam/almanity-hoi-an/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from Almanity Hoi An Wellness Resort to the golf circuit.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Almanity Hoi An Wellness Resort",
                            "starRating": { "@type": "Rating", "ratingValue": "4.5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Hoi An", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/almanity-hoi-an/",
                          "sameAs": ["https://almanityhoian.com/","https://www.forbestravelguide.com/hotels/hoi-an-vietnam/almanity-hoi-an-wellness-resort","https://guide.michelin.com/en/hotels-stays/quang-nam/almanity-hoi-an-wellness-resort"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Almanity Hoi An Wellness Resort", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/almanity-hoi-an/" }
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
                            <strong>Almanity Hoi An Wellness Resort</strong> operates as a premier <strong>5 Star</strong> wellness resort positioned in Hoi An, Vietnam. Featuring an architectural inventory of 139 rooms, the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (Minimalist Zen styling & sound sleep) and direct arterial access to Hoiana Shores (25 min), Montgomerie Links (25 min).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, Almanity Hoi An Wellness Resort minimizes daily transit friction across the Hoi An corridor while elevating off-course recovery through my chi spa, blue bottle bar, organic farm and post-round recovery & wellness (Daily hydrotherapy & herbal sauna). Every AGS itinerary anchored at Almanity Hoi An Wellness Resort includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights Almanity Hoi An Wellness Resort&apos;s breakfast & dining quality (Organic farm-to-table morning buffet), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Almanity Hoi An Wellness Resort"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/almanity-hoi-an/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/almanity-hoi-an/1.webp"
    addressLocality="Hoi An"
    addressCountry="VN"
    overallScore={4.6}
    maxScore={5.0}
    gradeBadge="Heritage Town Wellness Resort • Central Coast"
    inspectionDate="Site-Verified by AGS On-Ground Team"
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.4,
            highlight: "Minimalist Zen styling & sound sleep"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.4,
            highlight: "Private courtyard balconies"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.6,
            highlight: "Daily hydrotherapy & herbal sauna"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.3,
            highlight: "Organic farm-to-table morning buffet"
      }
]}
    verdict="Centrally located near Hoi An Ancient Town, Almanity focuses on holistic well-being with daily spa inclusions, a saltwater courtyard pool, and peaceful garden ambiance."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is Almanity Hoi An Wellness Resort to the nearest championship golf courses in Hoi An?","acceptedAnswer":{"@type":"Answer","text":"Almanity Hoi An Wellness Resort is positioned in Hoi An, Vietnam, offering direct private transfer access to Hoiana Shores (25 min), Montgomerie Links (25 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at Almanity Hoi An Wellness Resort?","acceptedAnswer":{"@type":"Answer","text":"Almanity Hoi An Wellness Resort features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does Almanity Hoi An Wellness Resort offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at Almanity Hoi An Wellness Resort enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Daily hydrotherapy & herbal sauna) and breakfast & dining quality (Organic farm-to-table morning buffet)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at Almanity Hoi An Wellness Resort?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Almanity Hoi An Wellness Resort as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is Almanity Hoi An Wellness Resort to the nearest championship golf courses in Hoi An?",
                    "a": "Almanity Hoi An Wellness Resort is positioned in Hoi An, Vietnam, offering direct private transfer access to Hoiana Shores (25 min), Montgomerie Links (25 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at Almanity Hoi An Wellness Resort?",
                    "a": "Almanity Hoi An Wellness Resort features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does Almanity Hoi An Wellness Resort offer?",
                    "a": "Guests at Almanity Hoi An Wellness Resort enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Daily hydrotherapy & herbal sauna) and breakfast & dining quality (Organic farm-to-table morning buffet)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at Almanity Hoi An Wellness Resort?",
                    "a": "Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Almanity Hoi An Wellness Resort as part of a complete stay-and-play golf package."
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

            <VenueItineraries venueHref="/accommodations/vietnam/almanity-hoi-an/" venueName="Almanity Hoi An Wellness Resort" venueType="accommodation" />

</main>
 );
}
