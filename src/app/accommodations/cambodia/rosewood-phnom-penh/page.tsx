import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Rosewood Phnom Penh | Cambodia" },
 description: "Experience ultra-luxury at Rosewood Phnom Penh. Premier base for golf tours in Vietnam & Thailand. Book with Asia Golf Specialists.",
 keywords: ["Rosewood Phnom Penh", "luxury hotel Phnom Penh golf", "Cambodia capital five star hotel", "Vattanac Tower luxury", "Phnom Penh golf accommodation"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/cambodia/rosewood-phnom-penh/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Rosewood Phnom Penh | Cambodia" },
        description: "Experience ultra-luxury at Rosewood Phnom Penh. Premier base for golf tours in Vietnam & Thailand. Book with Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/accommodations/cambodia/rosewood-phnom-penh/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/cambodia/rosewood-phnom-penh/cambodia-luxury-hotel-rosewood-phnom-penh-rooftop-bar-1.webp",
            width: 1200,
            height: 630,
            alt: "Rosewood Phnom Penh | Sky-High Contemporary Luxury Cambodia | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Rosewood Phnom Penh | Cambodia" },
        description: "Experience ultra-luxury at Rosewood Phnom Penh. Premier base for golf tours in Vietnam & Thailand. Book with Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/cambodia/rosewood-phnom-penh/cambodia-luxury-hotel-rosewood-phnom-penh-rooftop-bar-1.webp"],
    },
};

const images = [
 { src: "/images/accommodations/cambodia/rosewood-phnom-penh/cambodia-luxury-hotel-rosewood-phnom-penh-rooftop-bar-1.webp", alt: "Rosewood Phnom Penh Rooftop Bar Mekong Views Cambodia", caption: "Rooftop bar with Mekong River panorama" },
 { src: "/images/accommodations/cambodia/rosewood-phnom-penh/cambodia-luxury-hotel-rosewood-phnom-penh-mekong-view-suite-2.webp", alt: "Rosewood Phnom Penh Mekong View Suite Interior - Premium Southeast Asia Golf Tours 2026", caption: "Mekong view suite interior" },
 { src: "/images/accommodations/cambodia/rosewood-phnom-penh/cambodia-luxury-hotel-rosewood-phnom-penh-suite-3.webp", alt: "Rosewood Phnom Penh Luxury Suite Cambodia - Premium Southeast Asia Golf Tours 2026", caption: "Luxury river view suite interior" },
 { src: "/images/accommodations/cambodia/rosewood-phnom-penh/cambodia-luxury-hotel-rosewood-phnom-penh-city-view-4.webp", alt: "Rosewood Phnom Penh City View Panoramic - Premium Southeast Asia Golf Tours 2026", caption: "Panoramic city and Mekong views" },
 { src: "/images/accommodations/cambodia/rosewood-phnom-penh/cambodia-luxury-hotel-rosewood-phnom-penh-sky-bar-5.webp", alt: "Rosewood Phnom Penh Sky Bar Mekong River View - Premium Southeast Asia Golf Tours 2026", caption: "Sky bar with Mekong River views" },
];

export default function RosewoodPhnomPenh() {
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
<DestinationBackLink country="Cambodia" countryLink="/destinations/cambodia/accommodations/" />
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Preferred Property — Cambodia</div>
 <h1 style={{ marginBottom: '1rem' }}>Rosewood <br /><span className="text-gold">Phnom Penh</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"The absolute peak of contemporary prestige in the Cambodian capital — occupying the highest floors of Vattanac Tower."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
 {[
 ["Category", "Ultra-Luxury Urban Skyscraper Hotel"],
 ["Star Rating", "5 Star (Rosewood Collection)"],
 ["Location", "Vattanac Capital Tower, Phnom Penh, Cambodia"],
 ["Total Rooms", "175 Suites (avg 72sqm, tower floors 29–39)"],
 ["Setting", "Commanding 360° Mekong River panorama"],
 ["Nearest Golf", "Vattanac Golf Resort (20 min), Garden City (25 min)"],
 ["Key Amenity", "Infinity Pool, Sense Spa, Rooftop Bar & Dining"],
                                    ["Global Recognition", (
                                        <span key="rec">
                                            <a href="https://www.forbestravelguide.com/hotels/phnom-penh-cambodia/rosewood-phnom-penh" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Forbes 5-Star</a>
                                            {' • '}
                                            <a href="https://www.travelandleisureasia.com/sea/hotels-resorts/best-hotels-cambodia-luxury-awards-2023/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Travel + Leisure #1 Hotel in Cambodia</a>
                                            {' • '}
                                            <a href="https://www.virtuoso.com/travel/luxury-hotels" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Virtuoso Preferred</a>
                                        </span>
                                    )],
                                ].map(([k, v], i, arr) => (<tr key={k as string}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none', color: 'var(--color-gold)' }}>{k as string}</th><td style={{ padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none' }}>{v}</td></tr>))}
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Rosewood Phnom Penh occupies floors 29 through 39 of the Vattanac Capital Tower — the most striking skyscraper in the Cambodian capital, shaped to evoke a traditional Naga serpent. From these floors, the hotel commands a 360-degree panorama of the Mekong River, the Royal Palace, and the rapidly evolving Phnom Penh skyline in a vista that is genuinely without equal in the region.</p>
 <p>The 175 suites average 72 square metres, with floor-to-ceiling glass throughout and Khmer-inspired art collections that contextualise the building's connection to the city below. The property's Sense Spa operates across a dedicated floor of treatment rooms, while the rooftop infinity pool and bar provide the singular Rosewood cocktail-hour experience — watching the Mekong River turn gold at sunset from the highest private pool edge in Phnom Penh.</p>
 <p>For AGS clients adding a Phnom Penh chapter to their Cambodia golf itinerary — pairing rounds at Vattanac Golf Resort and Garden City Golf Club with authentic engagement with the capital's extraordinary history and culinary scene — Rosewood Phnom Penh is the address that elevates the experience to match the best the city to offer.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/cambodia/rosewood-phnom-penh/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates Phnom Penh golf transfers and Rosewood sunset experiences for all guests.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                                                {
                            "@type": "LodgingBusiness",
                            "name": "Rosewood Phnom Penh",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Phnom Penh", "addressCountry": "KH" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/cambodia/rosewood-phnom-penh/",
                            "award": [
                                "Forbes Travel Guide Five-Star Award",
                                "Travel + Leisure #1 Hotel in Cambodia"
                            ],
                            "memberOf": [
                                {
                                    "@type": "ProgramMembership",
                                    "programName": "Virtuoso Luxury Network"
                                }
                            ],
                            "sameAs": [
                                "https://www.rosewoodhotels.com/en/phnom-penh",
                                "https://www.forbestravelguide.com/hotels/phnom-penh-cambodia/rosewood-phnom-penh",
                                "https://guide.michelin.com/en/cambodia/phnom-penh/hotels/rosewood-phnom-penh-212459",
                                "https://www.virtuoso.com/travel/luxury-hotels"
                            ]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Cambodia", "item": "https://www.asiagolfspecialists.com/destinations/cambodia/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Rosewood Phnom Penh", "item": "https://www.asiagolfspecialists.com/accommodations/cambodia/rosewood-phnom-penh/" }
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
                            <strong>Rosewood Phnom Penh</strong> operates as a premier <strong>5 Star (Rosewood Collection)</strong> ultra-luxury urban skyscraper hotel positioned in Vattanac Capital Tower, Phnom Penh, Cambodia. Featuring an architectural inventory of 175 suites (avg 72sqm, tower floors 29–39), the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (Ultra-contemporary residential suites) and direct arterial access to Vattanac Golf Resort (20 min), Garden City (25 min).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, Rosewood Phnom Penh minimizes daily transit friction across the Phnom Penh corridor while elevating off-course recovery through infinity pool, sense spa, rooftop bar & dining and post-round recovery & wellness (Sense, A Rosewood Spa hydrotherapy). Every AGS itinerary anchored at Rosewood Phnom Penh includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights Rosewood Phnom Penh&apos;s breakfast & dining quality (Sora Sky Bar & Michelin-quality Iza), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Rosewood Phnom Penh"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/cambodia/rosewood-phnom-penh/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/cambodia/rosewood-phnom-penh/cambodia-luxury-hotel-rosewood-phnom-penh-rooftop-bar-1.webp"
    addressLocality="Phnom Penh"
    addressCountry="KH"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="Skyline Luxury Landmark • Vattanac Capital Tower"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.9,
            highlight: "Ultra-contemporary residential suites"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.9,
            highlight: "High-altitude acoustic sanctuary"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.8,
            highlight: "Sense, A Rosewood Spa hydrotherapy"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.9,
            highlight: "Sora Sky Bar & Michelin-quality Iza"
      }
]}
    verdict="Soaring 188 meters above Phnom Penh inside the iconic Vattanac Capital Tower. Unparalleled panoramic views of the Mekong River, residential residential sophistication, and the renowned Sora rooftop lounge."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is Rosewood Phnom Penh to the nearest championship golf courses in Phnom Penh?","acceptedAnswer":{"@type":"Answer","text":"Rosewood Phnom Penh is positioned in Vattanac Capital Tower, Phnom Penh, Cambodia, offering direct private transfer access to Vattanac Golf Resort (20 min), Garden City (25 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at Rosewood Phnom Penh?","acceptedAnswer":{"@type":"Answer","text":"Rosewood Phnom Penh features 175 Suites (avg 72sqm, tower floors 29–39) within a Ultra-Luxury Urban Skyscraper Hotel setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does Rosewood Phnom Penh offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at Rosewood Phnom Penh enjoy Infinity Pool, Sense Spa, Rooftop Bar & Dining, alongside post-round recovery & wellness (Sense, A Rosewood Spa hydrotherapy) and breakfast & dining quality (Sora Sky Bar & Michelin-quality Iza)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at Rosewood Phnom Penh?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Cambodia, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Rosewood Phnom Penh as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is Rosewood Phnom Penh to the nearest championship golf courses in Phnom Penh?",
                    "a": "Rosewood Phnom Penh is positioned in Vattanac Capital Tower, Phnom Penh, Cambodia, offering direct private transfer access to Vattanac Golf Resort (20 min), Garden City (25 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at Rosewood Phnom Penh?",
                    "a": "Rosewood Phnom Penh features 175 Suites (avg 72sqm, tower floors 29–39) within a Ultra-Luxury Urban Skyscraper Hotel setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does Rosewood Phnom Penh offer?",
                    "a": "Guests at Rosewood Phnom Penh enjoy Infinity Pool, Sense Spa, Rooftop Bar & Dining, alongside post-round recovery & wellness (Sense, A Rosewood Spa hydrotherapy) and breakfast & dining quality (Sora Sky Bar & Michelin-quality Iza)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at Rosewood Phnom Penh?",
                    "a": "Yes. As a preferred luxury golf tour operator in Cambodia, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Rosewood Phnom Penh as part of a complete stay-and-play golf package."
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

            <VenueItineraries venueHref="/accommodations/cambodia/rosewood-phnom-penh/" venueName="Rosewood Phnom Penh" venueType="accommodation" />

</main>
 );
}
