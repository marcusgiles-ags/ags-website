import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "The Caravelle Saigon | Vietnam" },
 description: "Experience legendary 5-star luxury at Caravelle Saigon in Ho Chi Minh City, featuring panoramic rooftop views and VIP transfers to southern Vietnam golf.",
 keywords: ["The Caravelle Saigon", "Ho Chi Minh City luxury hotel", "Vietnam golf accommodation", "District 1 luxury hotel"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/the-caravelle/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "The Caravelle Saigon | Vietnam" },
        description: "Experience legendary 5-star luxury at Caravelle Saigon in Ho Chi Minh City, featuring panoramic rooftop views and VIP transfers to southern Vietnam golf.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/the-caravelle/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/the-caravelle/caravelle-saigon-external.webp",
            width: 1200,
            height: 630,
            alt: "The Caravelle Saigon | Vietnam | Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "The Caravelle Saigon | Vietnam" },
        description: "Experience legendary 5-star luxury at Caravelle Saigon in Ho Chi Minh City, featuring panoramic rooftop views and VIP transfers to southern Vietnam golf.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/the-caravelle/caravelle-saigon-external.webp"],
    },
};

const images = [
 { src: "/images/accommodations/vietnam/the-caravelle/caravelle-saigon-external.webp", alt: "The Caravelle Saigon - The Caravelle Exterior - Premium Southeast Asia Golf Tours", caption: "The Caravelle Exterior" },
 { src: "/images/accommodations/vietnam/the-caravelle/caravelle-saigon-presidential-suite-1.webp", alt: "The Caravelle Saigon - Presidential Suite - Premium Southeast Asia Golf Tours", caption: "Presidential Suite" },
 { src: "/images/accommodations/vietnam/the-caravelle/caravelle-saigon-rooftop-bar.webp", alt: "The Caravelle Saigon - Saigon Saigon Rooftop Bar - Premium Southeast Asia Golf Tours", caption: "Saigon Saigon Rooftop Bar" },
 { src: "/images/accommodations/vietnam/the-caravelle/caravelle-saigon-swimming-pool.webp", alt: "The Caravelle Saigon - Free-form Swimming Pool - Premium Southeast Asia Golf Tours", caption: "Free-form Swimming Pool" },
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
 <h1 style={{ marginBottom: '1rem' }}>The Caravelle Saigon</h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Experience legendary luxury at this iconic Ho Chi Minh City hotel. Enjoy panoramic views, Saigon Saigon Rooftop Bar, and easy access to Vietnam & Thailand Golf Tours."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
  <tr key="Category"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Category</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Luxury City Accommodation</td></tr>
  <tr key="Star Rating"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Star Rating</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>5 Star</td></tr>
  <tr key="Location"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Location</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>District 1, Ho Chi Minh City</td></tr>
  <tr key="Setting"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Setting</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Vibrant urban center, moments from the Opera House</td></tr>
  <tr key="Nearest Golf"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Nearest Golf</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Tan Son Nhat Golf Course</td></tr>
  <tr key="Key Amenity"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Key Amenity</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Saigon Saigon Rooftop Bar, Free-form Pool, Central Location</td></tr>
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
  <p>Since opening in 1959, The Caravelle has stood as a beacon of luxury in the center of Ho Chi Minh City. For golfing groups, it offers the ultimate urban retreat—effortlessly blending historical gravitas with five-star modern amenities. The famous Saigon Saigon Rooftop Bar provides the perfect venue for post-round drinks overlooking the city skyline.</p><p>Strategically located in District 1, The Caravelle ensures seamless access to both the vibrant nightlife of Saigon and the premium golf courses of the south. It is the quintessential choice for golfers who want to be in the absolute center of the action.</p>
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
    pagePath="/accommodations/vietnam/the-caravelle/"
  />
  </div>
  </section>
 <section className="section">
 <div className="container text-center">
 <h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2>
 <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from The Caravelle Saigon to the golf circuit.</p>
 <Link href="/quote/" className="btn-primary">Speak to a Specialist</Link>
 </div>
 </section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "The Caravelle Saigon",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "District 1", "addressRegion": "Ho Chi Minh City", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/the-caravelle/",
                          "sameAs": ["https://www.caravellehotel.com/","https://www.forbestravelguide.com/hotels/ho-chi-minh-city-vietnam/caravelle-saigon","https://guide.michelin.com/en/ho-chi-minh-city/ho-chi-minh-city/hotel/caravelle-saigon_1204126","https://www.cntraveler.com/hotels/ho-chi-minh-city/caravelle-saigon"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "The Caravelle Saigon", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/the-caravelle/" }
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
                            <strong>The Caravelle Saigon</strong> operates as a premier <strong>5 Star</strong> luxury city accommodation positioned in Ho Chi Minh City, Vietnam. Featuring an architectural inventory of bespoke luxury suites, the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (Refurbished heritage suites with soundproofing) and direct arterial access to Tan Son Nhat Golf Course.
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, The Caravelle Saigon minimizes daily transit friction across the Ho Chi Minh City corridor while elevating off-course recovery through saigon saigon rooftop bar, free-form pool, central location and post-round recovery & wellness (Freeform pool & Kara Spa). Every AGS itinerary anchored at The Caravelle Saigon includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights The Caravelle Saigon&apos;s breakfast & dining quality (Iconic Saigon Saigon Rooftop Bar), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="The Caravelle Saigon"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/the-caravelle/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/the-caravelle/caravelle-saigon-external.webp"
    addressLocality="Ho Chi Minh City"
    addressCountry="VN"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Storied Historic Landmark • Saigon"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.6,
            highlight: "Refurbished heritage suites with soundproofing"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.5,
            highlight: "Prime Opera House square location"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.4,
            highlight: "Freeform pool & Kara Spa"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.8,
            highlight: "Iconic Saigon Saigon Rooftop Bar"
      }
]}
    verdict="An iconic Saigon institution since 1959. Freshly updated luxury suites, prime walking access to Saigon's best restaurants, and the legendary Saigon Saigon Rooftop Bar for post-round celebrations."
  />


            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is The Caravelle Saigon to the nearest championship golf courses in Ho Chi Minh City?","acceptedAnswer":{"@type":"Answer","text":"The Caravelle Saigon is positioned in Ho Chi Minh City, Vietnam, offering direct private transfer access to Tan Son Nhat Golf Course. Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at The Caravelle Saigon?","acceptedAnswer":{"@type":"Answer","text":"The Caravelle Saigon features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does The Caravelle Saigon offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at The Caravelle Saigon enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Freeform pool & Kara Spa) and breakfast & dining quality (Iconic Saigon Saigon Rooftop Bar)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at The Caravelle Saigon?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at The Caravelle Saigon as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is The Caravelle Saigon to the nearest championship golf courses in Ho Chi Minh City?",
                    "a": "The Caravelle Saigon is positioned in Ho Chi Minh City, Vietnam, offering direct private transfer access to Tan Son Nhat Golf Course. Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at The Caravelle Saigon?",
                    "a": "The Caravelle Saigon features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does The Caravelle Saigon offer?",
                    "a": "Guests at The Caravelle Saigon enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Freeform pool & Kara Spa) and breakfast & dining quality (Iconic Saigon Saigon Rooftop Bar)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at The Caravelle Saigon?",
                    "a": "Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at The Caravelle Saigon as part of a complete stay-and-play golf package."
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

            <VenueItineraries venueHref="/accommodations/vietnam/the-caravelle/" venueName="The Caravelle Saigon" venueType="accommodation" />

</main>
 );
}
