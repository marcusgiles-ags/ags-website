import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Park Hyatt Saigon | Ho Chi Minh" },
 description: "The colonial-era pinnacle of urban luxury in Ho Chi Minh City, Park Hyatt Saigon is the premier 5-star base for southern Vietnam golf tours.",
 keywords: ["Park Hyatt Saigon", "luxury hotel Ho Chi Minh City golf", "Saigon five star hotel golf", "HCMC luxury accommodation golf", "southern Vietnam golf hotel"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/park-hyatt-saigon/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Park Hyatt Saigon | Ho Chi Minh" },
        description: "The colonial-era pinnacle of urban luxury in Ho Chi Minh City, Park Hyatt Saigon is the premier 5-star base for southern Vietnam golf tours.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/park-hyatt-saigon/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/park-hyatt-saigon/vietnam-luxury-hotel-park-hyatt-saigon-colonial-facade-1.webp",
            width: 1200,
            height: 630,
            alt: "Park Hyatt Saigon | Colonial Luxury Hotel Ho Chi Minh City | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Park Hyatt Saigon | Ho Chi Minh" },
        description: "The colonial-era pinnacle of urban luxury in Ho Chi Minh City, Park Hyatt Saigon is the premier 5-star base for southern Vietnam golf tours.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/park-hyatt-saigon/vietnam-luxury-hotel-park-hyatt-saigon-colonial-facade-1.webp"],
    },
};

const images = [
 { src: "/images/accommodations/vietnam/park-hyatt-saigon/vietnam-luxury-hotel-park-hyatt-saigon-colonial-facade-1.webp", alt: "Park Hyatt Saigon Colonial Heritage Facade Ho Chi Minh City", caption: "Park Hyatt Saigon colonial heritage facade" },
 { src: "/images/accommodations/vietnam/park-hyatt-saigon/vietnam-luxury-hotel-park-hyatt-saigon-rooftop-pool-2.webp", alt: "Park Hyatt Saigon Rooftop Pool Ho Chi Minh City - Premium Southeast Asia Golf Tours 2026", caption: "Rooftop pool with city views, Saigon" },
 { src: "/images/accommodations/vietnam/park-hyatt-saigon/vietnam-luxury-hotel-park-hyatt-saigon-regency-suite-3.webp", alt: "Park Hyatt Saigon Regency Suite Interior - Premium Southeast Asia Golf Tours 2026", caption: "Regency Suite Interior" },
 { src: "/images/accommodations/vietnam/park-hyatt-saigon/vietnam-luxury-hotel-park-hyatt-saigon-restaurant-4.webp", alt: "Park Hyatt Saigon Opera Restaurant Fine Dining - Premium Southeast Asia Golf Tours 2026", caption: "Opera Restaurant Fine Dining" },
 { src: "/images/accommodations/vietnam/park-hyatt-saigon/vietnam-luxury-hotel-park-hyatt-saigon-opera-square-view-5.webp", alt: "Park Hyatt Saigon Opera Square View Ho Chi Minh City", caption: "Overlooking Opera Square, Ho Chi Minh City" },
];

export default function ParkHyattSaigon() {
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
 <h1 style={{ marginBottom: '1rem' }}>Park Hyatt <br /><span className="text-gold">Saigon</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"The colonial-inspired pinnacle of urban luxury — the natural anchor for southern Vietnam's golf circuit."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
 {[
 ["Category", "Urban Luxury Heritage Hotel"],
 ["Star Rating", "5 Star (Hyatt Collection)"],
 ["Location", "Lam Son Square, District 1, Ho Chi Minh City"],
 ["Total Rooms", "243 Rooms & Suites"],
 ["Setting", "Opera House, facing Lam Son Square CBD"],
 ["Nearest Golf", "Tan Son Nhat GC (5 min), Long Thanh (45 min)"],
 ["Key Amenity", "Rooftop Pool, Opera Restaurant, Park Lounge"],
 ].map(([k, v], i, arr) => (<tr key={k}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none' }}>{v}</td></tr>))}
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Park Hyatt Saigon stands at the intersection of history and ultra-modern luxury in the heart of Ho Chi Minh City. Facing the iconic Opera House on Lam Son Square, the hotel's white colonial facade belies an interior of sleek Vietnamese design — dark teak floors, lacquered artwork, and a rooftop pool that frames the District 1 skyline in a way that feels distinctly cinematic.</p>
 <p>For golfers, the Park Hyatt's positioning is strategically unmatched. Tan Son Nhat Golf Course — a Nelson & Haworth 36-hole complex — is literally five minutes from the hotel entrance. Long Thanh Golf Resort, Royal Long An, and Taekwang Jeongsan are all reachable within 45 minutes, providing access to southern Vietnam's most diverse collection of parkland and waterside courses from a single, convenient urban base.</p>
 <p>The AGS concierge team uses Park Hyatt Saigon as the standard anchor property when designing southern Vietnam golf itineraries for international groups. The combination of location, service culture, and dining quality — headlined by the award-winning Opera restaurant — consistently exceeds the expectations of even the most well-travelled golfers.</p>
 </div>
 </div>
 </div>
 </section>
  <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/vietnam/park-hyatt-saigon/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from Park Hyatt Saigon to the southern Vietnam golf circuit.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Park Hyatt Saigon",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Ho Chi Minh City", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/park-hyatt-saigon/",
                          "sameAs": ["https://www.hyatt.com/park-hyatt/en/sgnph-park-hyatt-saigon","https://www.forbestravelguide.com/hotels/ho-chi-minh-city-vietnam/park-hyatt-saigon","https://guide.michelin.com/en/ho-chi-minh-city/hotel/park-hyatt-saigon","https://www.cntraveler.com/hotels/ho-chi-minh-city/park-hyatt-saigon"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Park Hyatt Saigon", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/park-hyatt-saigon/" }
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
                            <strong>Park Hyatt Saigon</strong> operates as a premier <strong>5 Star (Hyatt Collection)</strong> urban luxury heritage hotel positioned in Lam Son Square, District 1, Ho Chi Minh City. Featuring an architectural inventory of 243 rooms & suites, the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (Opulent residential colonial suites) and direct arterial access to Tan Son Nhat GC (5 min), Long Thanh (45 min).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, Park Hyatt Saigon minimizes daily transit friction across the Ho Chi Minh City corridor while elevating off-course recovery through rooftop pool, opera restaurant, park lounge and post-round recovery & wellness (Xuan Spa botanical therapy). Every AGS itinerary anchored at Park Hyatt Saigon includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights Park Hyatt Saigon&apos;s breakfast & dining quality (Opera Italian & Square One Vietnamese grill), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Park Hyatt Saigon"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/park-hyatt-saigon/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/park-hyatt-saigon/vietnam-luxury-hotel-park-hyatt-saigon-colonial-facade-1.webp"
    addressLocality="Ho Chi Minh City"
    addressCountry="VN"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="French Colonial Executive Benchmark • Saigon"
    inspectionDate="Site-Verified by AGS On-Ground Team"
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.9,
            highlight: "Opulent residential colonial suites"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.8,
            highlight: "Quiet courtyard garden pool seclusion"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.8,
            highlight: "Xuan Spa botanical therapy"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.8,
            highlight: "Opera Italian & Square One Vietnamese grill"
      }
]}
    verdict="The definitive corporate and luxury benchmark in Ho Chi Minh City. Overlooking Lam Son Square, Park Hyatt offers impeccable white-glove service, a lush courtyard pool, and peerless central convenience."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is Park Hyatt Saigon to the nearest championship golf courses in Ho Chi Minh City?","acceptedAnswer":{"@type":"Answer","text":"Park Hyatt Saigon is positioned in Lam Son Square, District 1, Ho Chi Minh City, offering direct private transfer access to Tan Son Nhat GC (5 min), Long Thanh (45 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at Park Hyatt Saigon?","acceptedAnswer":{"@type":"Answer","text":"Park Hyatt Saigon features 243 Rooms & Suites within a Urban Luxury Heritage Hotel setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does Park Hyatt Saigon offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at Park Hyatt Saigon enjoy Rooftop Pool, Opera Restaurant, Park Lounge, alongside post-round recovery & wellness (Xuan Spa botanical therapy) and breakfast & dining quality (Opera Italian & Square One Vietnamese grill)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at Park Hyatt Saigon?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Park Hyatt Saigon as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is Park Hyatt Saigon to the nearest championship golf courses in Ho Chi Minh City?",
                    "a": "Park Hyatt Saigon is positioned in Lam Son Square, District 1, Ho Chi Minh City, offering direct private transfer access to Tan Son Nhat GC (5 min), Long Thanh (45 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at Park Hyatt Saigon?",
                    "a": "Park Hyatt Saigon features 243 Rooms & Suites within a Urban Luxury Heritage Hotel setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does Park Hyatt Saigon offer?",
                    "a": "Guests at Park Hyatt Saigon enjoy Rooftop Pool, Opera Restaurant, Park Lounge, alongside post-round recovery & wellness (Xuan Spa botanical therapy) and breakfast & dining quality (Opera Italian & Square One Vietnamese grill)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at Park Hyatt Saigon?",
                    "a": "Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Park Hyatt Saigon as part of a complete stay-and-play golf package."
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

            <VenueItineraries venueHref="/accommodations/vietnam/park-hyatt-saigon/" venueName="Park Hyatt Saigon" venueType="accommodation" />

</main>
 );
}
