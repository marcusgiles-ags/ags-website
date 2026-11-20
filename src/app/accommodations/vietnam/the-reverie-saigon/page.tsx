import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "The Reverie Saigon | Ultra-Luxury Hotel Ho Chi Minh" },
 description: "Experience ultra-luxury in Ho Chi Minh City. Italian design, Michelin dining, and perfect access to Vietnam & Thailand's golf tours.",
 keywords: ["The Reverie Saigon", "Ho Chi Minh City luxury hotel", "Vietnam golf accommodation", "District 1 luxury hotel"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/the-reverie-saigon/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "The Reverie Saigon | Ultra-Luxury Hotel Ho Chi Minh" },
        description: "Experience ultra-luxury in Ho Chi Minh City. Italian design, Michelin dining, and perfect access to Vietnam & Thailand's golf tours.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/the-reverie-saigon/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/the-reverie-saigon/the-reverie-saigon-exterior-daytime.webp",
            width: 1200,
            height: 630,
            alt: "The Reverie Saigon | Vietnam | Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "The Reverie Saigon | Ultra-Luxury Hotel Ho Chi Minh" },
        description: "Experience ultra-luxury in Ho Chi Minh City. Italian design, Michelin dining, and perfect access to Vietnam & Thailand's golf tours.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/the-reverie-saigon/the-reverie-saigon-exterior-daytime.webp"],
    },
};

const images = [
 { src: "/images/accommodations/vietnam/the-reverie-saigon/the-reverie-saigon-exterior-daytime.webp", alt: "The Reverie Saigon - Exterior - Premium Southeast Asia Golf Tours", caption: "The Reverie Exterior" },
 { src: "/images/accommodations/vietnam/the-reverie-saigon/the-reverie-saigon-hotel-lobby.webp", alt: "The Reverie Saigon - Grand Lobby - Premium Southeast Asia Golf Tours", caption: "Grand Lobby" },
 { src: "/images/accommodations/vietnam/the-reverie-saigon/the-reverie-saigon-room-interior.webp", alt: "The Reverie Saigon - Luxury Room Interior - Premium Southeast Asia Golf Tours", caption: "Luxury Room Interior" },
 { src: "/images/accommodations/vietnam/the-reverie-saigon/the-reverie-saigon-exterior-pool.webp", alt: "The Reverie Saigon - Free-form Swimming Pool - Premium Southeast Asia Golf Tours", caption: "Outdoor Swimming Pool" },
];

export default function AccommodationPage() {
 return (
 <main style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-tertiary)', minHeight: '100vh' }}>
 <Navbar />
 <header className="hero" style={{ minHeight: '85vh' }}>
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
 <h1 style={{ marginBottom: '1rem' }}>The Reverie Saigon</h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Experience ultra-luxury in Ho Chi Minh City. Italian design, Michelin dining, and perfect access to Vietnam & Thailand's golf tours."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
  <tr key="Category"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Category</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Ultra-Luxury City Accommodation</td></tr>
  <tr key="Star Rating"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Star Rating</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>5 Star</td></tr>
  <tr key="Location"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Location</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>District 1, Ho Chi Minh City</td></tr>
  <tr key="Setting"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Setting</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Heart of the CBD on Nguyen Hue Boulevard</td></tr>
  <tr key="Nearest Golf"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Nearest Golf</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Tan Son Nhat Golf Course</td></tr>
  <tr key="Key Amenity"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Key Amenity</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Michelin-starred Dining, The Spa at The Reverie, Panoramic City Views</td></tr>
 
                                <tr key="Global Recognition">
                                    <th style={{ textAlign: 'left', padding: '1rem', borderBottom: 'none', color: 'var(--color-gold)' }}>Global Recognition</th>
                                    <td style={{ padding: '1rem', borderBottom: 'none' }}>
                                        <span key="rec">
                                            <a href="https://www.lhw.com/hotel/the-reverie-saigon-ho-chi-minh-city-vietnam" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px' }}>The Leading Hotels of the World</a>
                                            {' • '}
                                            <a href="https://guide.michelin.com/us/en" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Michelin Guide Selected</a>
                                            {' • '}
                                            <a href="https://www.virtuoso.com/travel/luxury-hotels" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Virtuoso Preferred</a>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
  <p>The Reverie Saigon redefines luxury in Ho Chi Minh City. Spanning the uppermost floors of the landmark Times Square Building, this spectacular property marries world-class Italian design with Vietnamese hospitality. For golfing groups, it represents the absolute zenith of urban accommodation.</p><p>Centrally located on the prestigious Nguyen Hue Boulevard, The Reverie ensures a seamless transition between the best golf courses in the South and the most exquisite dining and nightlife in the city. The breathtaking spa and opulent rooms provide unparalleled recovery after a long day on the fairways.</p>
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
  {(img as any).caption || `Image ${i + 1}`}
  </div>
  </div>
  ))}
  </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/vietnam/the-reverie-saigon/"
  />
  </div>
  </section>
 <section className="section">
 <div className="container text-center">
 <h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2>
 <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from The Reverie Saigon to the golf circuit.</p>
 <Link href="/quote/" className="btn-primary">Speak to a Specialist</Link>
 </div>
 </section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                                                {
                            "@type": "LodgingBusiness",
                            "name": "The Reverie Saigon",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "District 1", "addressRegion": "Ho Chi Minh City", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/the-reverie-saigon/",
                            "award": [
                                "Michelin Guide Selected Hotel",
                                "The Leading Hotels of the World Quality Benchmark"
                            ],
                            "memberOf": [
                                {
                                    "@type": "ProgramMembership",
                                    "programName": "The Leading Hotels of the World"
                                }
                            ],
                            "sameAs": [
                                "https://www.thereveriesaigon.com/",
                                "https://www.lhw.com/hotel/the-reverie-saigon-ho-chi-minh-city-vietnam",
                                "https://guide.michelin.com/us/en",
                                "https://www.virtuoso.com/travel/luxury-hotels",
                                "https://en.wikipedia.org/wiki/The_Reverie_Saigon"
                            ]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "The Reverie Saigon", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/the-reverie-saigon/" }
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
                            <strong>The Reverie Saigon</strong> operates as a premier <strong>5 Star</strong> ultra-luxury city accommodation positioned in Ho Chi Minh City, Vietnam. Featuring an architectural inventory of bespoke luxury suites, the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (Palatial Italian-furnished suites) and direct arterial access to Tan Son Nhat Golf Course.
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, The Reverie Saigon minimizes daily transit friction across the Ho Chi Minh City corridor while elevating off-course recovery through michelin-starred dining, the spa at the reverie, panoramic city views and post-round recovery & wellness (Two-floor 1,200sqm luxury spa). Every AGS itinerary anchored at The Reverie Saigon includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights The Reverie Saigon&apos;s breakfast & dining quality (Michelin-starred Da Vittorio Italian), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="The Reverie Saigon"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/the-reverie-saigon/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/the-reverie-saigon/the-reverie-saigon-exterior-daytime.webp"
    addressLocality="Ho Chi Minh City"
    addressCountry="VN"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="Italian Haute Horlogerie Luxury • Leading Hotels of the World"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.9,
            highlight: "Palatial Italian-furnished suites"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.8,
            highlight: "Sky-high silence above the city"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.8,
            highlight: "Two-floor 1,200sqm luxury spa"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.9,
            highlight: "Michelin-starred Da Vittorio Italian"
      }
]}
    verdict="Vietnam's most opulent city property, dominating the skyline above Dong Khoi Boulevard. Unapologetic Italian craftsmanship, bespoke marble suites, and Da Vittorio dining create a lavish urban basecamp for Southern golf excursions."
  />


            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is The Reverie Saigon to the nearest championship golf courses in Ho Chi Minh City?","acceptedAnswer":{"@type":"Answer","text":"The Reverie Saigon is positioned in Ho Chi Minh City, Vietnam, offering direct private transfer access to Tan Son Nhat Golf Course. Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at The Reverie Saigon?","acceptedAnswer":{"@type":"Answer","text":"The Reverie Saigon features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does The Reverie Saigon offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at The Reverie Saigon enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Two-floor 1,200sqm luxury spa) and breakfast & dining quality (Michelin-starred Da Vittorio Italian)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at The Reverie Saigon?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at The Reverie Saigon as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is The Reverie Saigon to the nearest championship golf courses in Ho Chi Minh City?",
                    "a": "The Reverie Saigon is positioned in Ho Chi Minh City, Vietnam, offering direct private transfer access to Tan Son Nhat Golf Course. Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at The Reverie Saigon?",
                    "a": "The Reverie Saigon features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does The Reverie Saigon offer?",
                    "a": "Guests at The Reverie Saigon enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Two-floor 1,200sqm luxury spa) and breakfast & dining quality (Michelin-starred Da Vittorio Italian)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at The Reverie Saigon?",
                    "a": "Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at The Reverie Saigon as part of a complete stay-and-play golf package."
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

            <VenueItineraries venueHref="/accommodations/vietnam/the-reverie-saigon/" venueName="The Reverie Saigon" venueType="accommodation" />

</main>
 );
}
