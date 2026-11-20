import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Chicland Da Nang Hotel | Vietnam" },
 description: "An eco-chic beachfront hotel wrapped in vertical gardens, offering a modern urban sanctuary on Da Nang's vibrant My Khe Beach.",
 keywords: ["Chicland Da Nang Hotel","Da Nang luxury hotel golf","My Khe Beach accommodation","eco-chic hotel Vietnam", "Da Nang golf hotel"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/chicland-da-nang/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Chicland Da Nang Hotel | Vietnam" },
        description: "An eco-chic beachfront hotel wrapped in vertical gardens, offering a modern urban sanctuary on Da Nang's vibrant My Khe Beach.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/chicland-da-nang/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/chicland-da-nang/vietnam-luxury-hotel-chicland-da-nang-hero.webp",
            width: 1200,
            height: 630,
            alt: "Chicland Da Nang Hotel | Da Nang, Vietnam | Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Chicland Da Nang Hotel | Vietnam" },
        description: "An eco-chic beachfront hotel wrapped in vertical gardens, offering a modern urban sanctuary on Da Nang's vibrant My Khe Beach.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/chicland-da-nang/vietnam-luxury-hotel-chicland-da-nang-hero.webp"],
    },
};

const images = [
  { src: "/images/accommodations/vietnam/chicland-da-nang/vietnam-luxury-hotel-chicland-da-nang-hero.webp", alt: "Chicland Da Nang - Chicland Da Nang Hero", caption: "Chicland Da Nang Hero" },
  { src: "/images/accommodations/vietnam/chicland-da-nang/vietnam-luxury-hotel-chicland-da-nang-balcony-suite.webp", alt: "Chicland Da Nang - Balcony suite", caption: "Balcony suite" },
  { src: "/images/accommodations/vietnam/chicland-da-nang/vietnam-luxury-hotel-chicland-da-nang-beachfront-hotel.webp", alt: "Chicland Da Nang - Beachfront hotel", caption: "Beachfront hotel" },
  { src: "/images/accommodations/vietnam/chicland-da-nang/vietnam-luxury-hotel-chicland-da-nang-bedroom-interior.webp", alt: "Chicland Da Nang - Bedroom interior", caption: "Bedroom interior" },
  { src: "/images/accommodations/vietnam/chicland-da-nang/vietnam-luxury-hotel-chicland-da-nang-green-hotel.webp", alt: "Chicland Da Nang - Green hotel", caption: "Green hotel" },
  { src: "/images/accommodations/vietnam/chicland-da-nang/vietnam-luxury-hotel-chicland-da-nang-reception-area.webp", alt: "Chicland Da Nang - Reception area", caption: "Reception area" },
  { src: "/images/accommodations/vietnam/chicland-da-nang/vietnam-luxury-hotel-chicland-da-nang-rooftop-bar.webp", alt: "Chicland Da Nang - Rooftop bar", caption: "Rooftop bar" },
  { src: "/images/accommodations/vietnam/chicland-da-nang/vietnam-luxury-hotel-chicland-da-nang-rooftop-dining.webp", alt: "Chicland Da Nang - Rooftop dining", caption: "Rooftop dining" },
  { src: "/images/accommodations/vietnam/chicland-da-nang/vietnam-luxury-hotel-chicland-da-nang-suite-living-room.webp", alt: "Chicland Da Nang - Suite living room", caption: "Suite living room" },
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
 <h1 style={{ marginBottom: '1rem' }}>Chicland Da Nang Hotel</h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"An eco-chic beachfront hotel wrapped in vertical gardens, offering a modern urban sanctuary on Da Nang's vibrant My Khe Beach."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
  <tr key="Category"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Category</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Eco-Chic Urban Hotel</td></tr>
  <tr key="Star Rating"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Star Rating</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>4 Star</td></tr>
  <tr key="Location"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Location</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>My Khe Beach, Da Nang</td></tr>
  <tr key="Total Rooms"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Total Rooms</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>153 Rooms & Suites</td></tr>
  <tr key="Setting"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Setting</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Urban beachfront wrapped in vertical gardens</td></tr>
  <tr key="Nearest Golf"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Nearest Golf</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Montgomerie Links (15 min), BRG Da Nang (15 min), Ba Na Hills (40 min)</td></tr>
  <tr key="Key Amenity"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Key Amenity</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Rooftop Infinity Pool, Trà House, Ocean View Balconies</td></tr>
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
  <p>Standing tall on the famous My Khe Beach, Chicland Da Nang Hotel redefines urban coastal luxury through its striking eco-chic architecture. The building is entirely wrapped in vertical tropical gardens, creating a natural oasis that filters the sun and brings a deeply calming atmosphere to every room.</p>
  <p>Golfers choosing Da Nang as their base will find Chicland to be exceptionally positioned. It offers incredibly fast access to the nearby Montgomerie Links and BRG Da Nang Golf Resort, while still putting guests right in the center of Da Nang's dynamic beachfront dining and entertainment scene.</p>
  <p>After a morning on the fairways, the hotel’s rooftop infinity pool provides the perfect venue to unwind while overlooking the East Sea. The emphasis on natural materials—bamboo, basalt stone, and rattan—ensures that despite its urban setting, Chicland maintains the serene, restorative environment essential for any rigorous golf tour.</p>
 </div>
 </div>
 </div>
 </section>
  <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/vietnam/chicland-da-nang/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from Chicland Da Nang Hotel to the golf circuit.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Chicland Da Nang Hotel",
                            "starRating": { "@type": "Rating", "ratingValue": "4" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Da Nang", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/chicland-da-nang/",
                          "sameAs": ["https://chiclandhotel.com/","https://www.forbestravelguide.com/hotels/da-nang-vietnam/chicland-hotel-da-nang","https://guide.michelin.com/en/da-nang-city/da-nang/hotels/chicland-hotel-da-nang-1209355"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Chicland Da Nang Hotel", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/chicland-da-nang/" }
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
                            <strong>Chicland Hotel Da Nang</strong> operates as a premier <strong>5 Star</strong> eco-chic urban hotel positioned in Da Nang, Vietnam. Featuring an architectural inventory of 153 rooms & suites, the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (Natural materials & ocean acoustic calm) and direct arterial access to Montgomerie Links (15 min), BRG Da Nang (15 min), Ba Na Hills (40 min).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, Chicland Hotel Da Nang minimizes daily transit friction across the Da Nang corridor while elevating off-course recovery through rooftop infinity pool, trà house, ocean view balconies and post-round recovery & wellness (Rooftop infinity pool & sky lounge). Every AGS itinerary anchored at Chicland Hotel Da Nang includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights Chicland Hotel Da Nang&apos;s breakfast & dining quality (Organic healthy buffet & specialty coffee), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Chicland Hotel Da Nang"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/chicland-da-nang/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/chicland-da-nang/vietnam-luxury-hotel-chicland-da-nang-hero.webp"
    addressLocality="Da Nang"
    addressCountry="VN"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Eco-Chic Beachfront High-Rise • Da Nang"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.6,
            highlight: "Natural materials & ocean acoustic calm"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.5,
            highlight: "High-floor ocean balcony privacy"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.6,
            highlight: "Rooftop infinity pool & sky lounge"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.5,
            highlight: "Organic healthy buffet & specialty coffee"
      }
]}
    verdict="An eco-chic architectural landmark on My Khe Beach. Draped in vertical greenery with an iconic rooftop infinity pool that provides sweeping sunset views over the coastal fairways."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is Chicland Hotel Da Nang to the nearest championship golf courses in Da Nang?","acceptedAnswer":{"@type":"Answer","text":"Chicland Hotel Da Nang is positioned in Da Nang, Vietnam, offering direct private transfer access to Montgomerie Links (15 min), BRG Da Nang (15 min), Ba Na Hills (40 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at Chicland Hotel Da Nang?","acceptedAnswer":{"@type":"Answer","text":"Chicland Hotel Da Nang features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does Chicland Hotel Da Nang offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at Chicland Hotel Da Nang enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Rooftop infinity pool & sky lounge) and breakfast & dining quality (Organic healthy buffet & specialty coffee)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at Chicland Hotel Da Nang?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Chicland Hotel Da Nang as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is Chicland Hotel Da Nang to the nearest championship golf courses in Da Nang?",
                    "a": "Chicland Hotel Da Nang is positioned in Da Nang, Vietnam, offering direct private transfer access to Montgomerie Links (15 min), BRG Da Nang (15 min), Ba Na Hills (40 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at Chicland Hotel Da Nang?",
                    "a": "Chicland Hotel Da Nang features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does Chicland Hotel Da Nang offer?",
                    "a": "Guests at Chicland Hotel Da Nang enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Rooftop infinity pool & sky lounge) and breakfast & dining quality (Organic healthy buffet & specialty coffee)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at Chicland Hotel Da Nang?",
                    "a": "Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Chicland Hotel Da Nang as part of a complete stay-and-play golf package."
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

            <VenueItineraries venueHref="/accommodations/vietnam/chicland-da-nang/" venueName="Chicland Hotel Da Nang" venueType="accommodation" />

</main>
 );
}
