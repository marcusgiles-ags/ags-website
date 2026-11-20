import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Tamarind Village | Chiang Mai, Thailand" },
 description: "Tamarind Village Chiang Mai — a boutique 5-star retreat in the Old City, perfectly positioned for exploring northern Thailand's championship golf circuit.",
 keywords: ["Tamarind Village Chiang Mai","Chiang Mai boutique hotel golf","Lanna style luxury accommodation","Northern Thailand golf"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/thailand/tamarind-village/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Tamarind Village | Chiang Mai, Thailand" },
        description: "Tamarind Village Chiang Mai — a boutique 5-star retreat in the Old City, perfectly positioned for exploring northern Thailand's championship golf circuit.",
        url: "https://www.asiagolfspecialists.com/accommodations/thailand/tamarind-village/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/thailand/tamarind-village/1.webp",
            width: 1200,
            height: 630,
            alt: "Tamarind Village | Chiang Mai, Thailand | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Tamarind Village | Chiang Mai, Thailand" },
        description: "Tamarind Village Chiang Mai — a boutique 5-star retreat in the Old City, perfectly positioned for exploring northern Thailand's championship golf circuit.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/thailand/tamarind-village/1.webp"],
    },
};

const images = [
 { src: "/images/accommodations/thailand/tamarind-village/1.webp", alt: "Tamarind Village - Tamarind Village - Premium Southeast Asia Golf Tours", caption: "Tamarind Village Tamarind Village" },
 { src: "/images/accommodations/thailand/tamarind-village/2.webp", alt: "Tamarind Village - Tamarind Village - Premium Southeast Asia Golf Tours", caption: "Tamarind Village Tamarind Village" },
 { src: "/images/accommodations/thailand/tamarind-village/3.webp", alt: "Tamarind Village - Tamarind Village - Premium Southeast Asia Golf Tours", caption: "Tamarind Village Tamarind Village" },
 { src: "/images/accommodations/thailand/tamarind-village/4.webp", alt: "Tamarind Village - Tamarind Village - Premium Southeast Asia Golf Tours", caption: "Tamarind Village Tamarind Village" },
 { src: "/images/accommodations/thailand/tamarind-village/5.webp", alt: "Tamarind Village - Tamarind Village Pool - Premium Southeast Asia Golf Tours", caption: "Tamarind Village Tamarind Village Pool" }
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
<DestinationBackLink country="Thailand" countryLink="/destinations/thailand/accommodations/" />
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Preferred Property — Thailand</div>
 <h1 style={{ marginBottom: '1rem' }}>Tamarind Village</h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"A tranquil boutique retreat in the heart of Chiang Mai's old city, offering a peaceful oasis surrounded by Lanna heritage and world-class golf."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
  <tr key="Category"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Category</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Heritage Boutique Hotel</td></tr>
  <tr key="Star Rating"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Star Rating</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>4 Star</td></tr>
  <tr key="Location"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Location</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Ratchadamnoen Road, Chiang Mai Old City</td></tr>
  <tr key="Total Rooms"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Total Rooms</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>45 Rooms</td></tr>
  <tr key="Setting"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Setting</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Historic walled city, ancient tamarind trees</td></tr>
  <tr key="Nearest Golf"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Nearest Golf</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Alpine Golf Resort Chiang Mai (45 min), Chiangmai Highlands (45 min)</td></tr>
  <tr key="Key Amenity"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Key Amenity</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>The Village Spa, Ruen Tamarind Restaurant</td></tr>
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
  <p>Tamarind Village is a hidden sanctuary nestled within the ancient walls of Chiang Mai's Old City. Reached via a dramatic bamboo-lined entrance, the boutique hotel surrounds a magnificent 200-year-old tamarind tree. The architecture and decor pay deep homage to Northern Thailand's Lanna heritage, offering an incredibly authentic and peaceful atmosphere.</p>
  <p>Despite its central location, it acts as an ideal launching pad for the majestic mountain courses of the North. Spectacular layouts like Alpine Golf Resort and Chiangmai Highlands are highly accessible, allowing golfers to enjoy crisp mountain air on the fairways before returning to the cultural epicenter of the city for evening markets and dining.</p>
  <p>AGS considers Tamarind Village the premier choice for those who want to immerse themselves in local culture. The juxtaposition of world-class golf against a backdrop of historic temples and the renowned Sunday Walking Street—right at the hotel's doorstep—makes for an unforgettable itinerary.</p>
 </div>
 </div>
 </div>
 </section>
  <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/thailand/tamarind-village/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from Tamarind Village to the golf circuit.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Tamarind Village",
                            "starRating": { "@type": "Rating", "ratingValue": "4" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Chiang Mai", "addressCountry": "TH" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/thailand/tamarind-village/",
                          "sameAs": ["https://www.tamarindvillage.com/","https://www.forbestravelguide.com/hotels/chiang-mai-thailand/tamarind-village","https://guide.michelin.com/en/thailand/chiang-mai/chiang-mai/hotel/tamarind-village","https://www.cntraveler.com/hotels/chiang-mai/tamarind-village"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Thailand", "item": "https://www.asiagolfspecialists.com/destinations/thailand/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Tamarind Village", "item": "https://www.asiagolfspecialists.com/accommodations/thailand/tamarind-village/" }
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
                            <strong>Tamarind Village</strong> operates as a premier <strong>5 Star</strong> heritage boutique hotel positioned in Chiang Mai, Thailand. Featuring an architectural inventory of 45 rooms, the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (Charming Lanna timber architecture) and direct arterial access to Alpine Golf Resort Chiang Mai (45 min), Chiangmai Highlands (45 min).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, Tamarind Village minimizes daily transit friction across the Chiang Mai corridor while elevating off-course recovery through the village spa, ruen tamarind restaurant and post-round recovery & wellness (Courtyard pool under 200-year tamarind tree). Every AGS itinerary anchored at Tamarind Village includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights Tamarind Village&apos;s breakfast & dining quality (Ruen Tamarind authentic Northern cuisine), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Tamarind Village"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/thailand/tamarind-village/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/thailand/tamarind-village/1.webp"
    addressLocality="Chiang Mai"
    addressCountry="TH"
    overallScore={4.6}
    maxScore={5.0}
    gradeBadge="Lanna Heritage Garden Sanctuary • Chiang Mai"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.4,
            highlight: "Charming Lanna timber architecture"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.7,
            highlight: "Historic courtyard behind ancient walls"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.4,
            highlight: "Courtyard pool under 200-year tamarind tree"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.4,
            highlight: "Ruen Tamarind authentic Northern cuisine"
      }
]}
    verdict="An intimate heritage oasis tucked behind ancient brick walls in Chiang Mai's Old City. Built around a historic tamarind tree, offering authentic Northern hospitality and effortless cultural discovery."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is Tamarind Village to the nearest championship golf courses in Chiang Mai?","acceptedAnswer":{"@type":"Answer","text":"Tamarind Village is positioned in Chiang Mai, Thailand, offering direct private transfer access to Alpine Golf Resort Chiang Mai (45 min), Chiangmai Highlands (45 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at Tamarind Village?","acceptedAnswer":{"@type":"Answer","text":"Tamarind Village features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does Tamarind Village offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at Tamarind Village enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Courtyard pool under 200-year tamarind tree) and breakfast & dining quality (Ruen Tamarind authentic Northern cuisine)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at Tamarind Village?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Thailand, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Tamarind Village as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is Tamarind Village to the nearest championship golf courses in Chiang Mai?",
                    "a": "Tamarind Village is positioned in Chiang Mai, Thailand, offering direct private transfer access to Alpine Golf Resort Chiang Mai (45 min), Chiangmai Highlands (45 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at Tamarind Village?",
                    "a": "Tamarind Village features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does Tamarind Village offer?",
                    "a": "Guests at Tamarind Village enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Courtyard pool under 200-year tamarind tree) and breakfast & dining quality (Ruen Tamarind authentic Northern cuisine)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at Tamarind Village?",
                    "a": "Yes. As a preferred luxury golf tour operator in Thailand, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Tamarind Village as part of a complete stay-and-play golf package."
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

            <VenueItineraries venueHref="/accommodations/thailand/tamarind-village/" venueName="Tamarind Village" venueType="accommodation" />

</main>
 );
}
