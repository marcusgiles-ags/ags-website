import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "The Grand Ho Tram Strip | Vietnam" },
 description: "The pinnacle of Stay and Play in Vietnam, sitting directly above Greg Norman's Top-100-ranked Bluffs Grand Ho Tram championship links course.",
 keywords: ["The Bluffs Grand Ho Tram", "Ho Tram golf resort hotel", "Greg Norman golf course stay Vietnam", "luxury golf resort South Vietnam", "Ho Tram Strip resort"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/bluffs-grand-ho-tram/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "The Grand Ho Tram Strip | Vietnam" },
        description: "The pinnacle of Stay and Play in Vietnam, sitting directly above Greg Norman's Top-100-ranked Bluffs Grand Ho Tram championship links course.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/bluffs-grand-ho-tram/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/bluffs-grand-ho-tram/vietnam-luxury-hotel-bluffs-grand-ho-tram-resort-hotel-1.webp",
            width: 1200,
            height: 630,
            alt: "The Bluffs Grand Ho Tram | Stay & Play Golf Resort Vietnam | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "The Grand Ho Tram Strip | Vietnam" },
        description: "The pinnacle of Stay and Play in Vietnam, sitting directly above Greg Norman's Top-100-ranked Bluffs Grand Ho Tram championship links course.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/bluffs-grand-ho-tram/vietnam-luxury-hotel-bluffs-grand-ho-tram-resort-hotel-1.webp"],
    },
};

const images = [
 { src: "/images/accommodations/vietnam/bluffs-grand-ho-tram/vietnam-luxury-hotel-bluffs-grand-ho-tram-resort-hotel-1.webp", alt: "The Grand Ho Tram Strip Resort Hotel Vietnam - Premium Southeast Asia Golf Tours 2026", caption: "Grand Ho Tram Strip resort exterior" },
 { src: "/images/accommodations/vietnam/bluffs-grand-ho-tram/vietnam-luxury-hotel-bluffs-grand-ho-tram-ocean-suite-2.webp", alt: "The Grand Ho Tram Ocean View Suite South Vietnam - Premium Southeast Asia Golf Tours 2026", caption: "Ocean view suite interior" },
 { src: "/images/accommodations/vietnam/bluffs-grand-ho-tram/vietnam-luxury-hotel-bluffs-grand-ho-tram-exterior-3.webp", alt: "The Grand Ho Tram Strip Resort Exterior Vietnam - Premium Southeast Asia Golf Tours 2026", caption: "Resort exterior and pool terrace" },
 { src: "/images/accommodations/vietnam/bluffs-grand-ho-tram/vietnam-luxury-hotel-bluffs-grand-ho-tram-ocean-view-room-4.webp", alt: "The Grand Ho Tram Ocean View Room Interior - Premium Southeast Asia Golf Tours 2026", caption: "Ocean view room interior" },
 { src: "/images/accommodations/vietnam/bluffs-grand-ho-tram/vietnam-luxury-hotel-bluffs-grand-ho-tram-casino-resort-5.webp", alt: "The Grand Ho Tram Strip Casino Resort Vietnam - Premium Southeast Asia Golf Tours 2026", caption: "Casino resort complex, Ho Tram" },
];

export default function BluffsGrandHoTram() {
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
 <h1 style={{ marginBottom: '1rem' }}>The Bluffs <br /><span className="text-gold">Grand Ho Tram</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"The definitive Stay and Play — ocean suites directly overlooking a Top 100 World Ranked golf course."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
 {[
 ["Category", "Luxury Casino & Golf Resort"],
 ["Star Rating", "5 Star"],
 ["Location", "Ho Tram Strip, Ba Ria-Vung Tau, Vietnam"],
 ["Total Rooms", "541 Rooms & Suites"],
 ["Setting", "South China Sea beachfront, 90 mins from Saigon"],
 ["Nearest Golf", "The Bluffs Ho Tram Strip (Top 100 World, on-site)"],
 ["Key Amenity", "On-site casino, 4 pools, private beach"],
 ].map(([k, v], i, arr) => (<tr key={k}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none' }}>{v}</td></tr>))}
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>The Grand Ho Tram Strip is the only resort in Vietnam where you can wake up, lean off your balcony, and look directly down onto a Top 100 World Ranked golf course. Greg Norman's Bluffs Ho Tram course — ranked among the world's most spectacular — runs directly between the resort and the South China Sea, creating a visual drama that is virtually impossible to replicate.</p>
 <p>The resort's 541 rooms and suites are divided across a grand main tower and villa wings, with the most prized ocean-view suites positioned to frame the course's dramatic dune-lined finishing holes. The resort operates one of the largest private beach clubs in Vietnam, complemented by four distinct pool areas and an entertainment complex.</p>
 <p>For AGS clients prioritising the most immersive golf experience in southern Vietnam, The Grand Ho Tram is without rival. The integration of accommodation, course access, and entertainment facilities in a single self-contained resort makes it the natural anchor for southern Vietnam itineraries built around maximum rounds-per-day efficiency.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/vietnam/bluffs-grand-ho-tram/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS secures preferred tee times on The Bluffs for all Grand Ho Tram guests.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "The Grand Ho Tram Strip",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Ho Tram", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/bluffs-grand-ho-tram/",
                          "sameAs": ["https://thegrandhotram.com/","https://www.forbestravelguide.com/hotels/ho-tram-vietnam/the-grand-ho-tram-strip","https://guide.michelin.com/en/hotels-stays/ba-ria-vung-tau/the-grand-ho-tram-strip"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "The Grand Ho Tram Strip", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/bluffs-grand-ho-tram/" }
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
                            <strong>InterContinental Grand Ho Tram</strong> operates as a premier <strong>5 Star</strong> luxury casino & golf resort positioned in Ho Tram Strip, Ba Ria-Vung Tau, Vietnam. Featuring an architectural inventory of 541 rooms & suites, the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (Ocean-facing suites with deep sleep) and direct arterial access to The Bluffs Ho Tram Strip (Top 100 World, on-site).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, InterContinental Grand Ho Tram minimizes daily transit friction across the Ho Tram corridor while elevating off-course recovery through on-site casino, 4 pools, private beach and post-round recovery & wellness (Multiple pools, Lotus Spa & sauna). Every AGS itinerary anchored at InterContinental Grand Ho Tram includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights InterContinental Grand Ho Tram&apos;s breakfast & dining quality (15+ restaurants, sports bar & grill), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="InterContinental Grand Ho Tram"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/bluffs-grand-ho-tram/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/bluffs-grand-ho-tram/vietnam-luxury-hotel-bluffs-grand-ho-tram-resort-hotel-1.webp"
    addressLocality="Ho Tram"
    addressCountry="VN"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="Integrated Luxury Casino Resort • Ho Tram"
    inspectionDate="Personally Stayed & Inspected — Marcus Giles"
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.7,
            highlight: "Ocean-facing suites with deep sleep"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.6,
            highlight: "Expansive coastal estate grounds"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.7,
            highlight: "Multiple pools, Lotus Spa & sauna"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.7,
            highlight: "15+ restaurants, sports bar & grill"
      }
]}
    verdict="The premier stay-and-play destination in Southern Vietnam. Overlooking Greg Norman's World Top 100 links, offering expansive beachfront suites, vibrant casino nightlife, and exceptional dining."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is InterContinental Grand Ho Tram to the nearest championship golf courses in Ho Tram?","acceptedAnswer":{"@type":"Answer","text":"InterContinental Grand Ho Tram is positioned in Ho Tram Strip, Ba Ria-Vung Tau, Vietnam, offering direct private transfer access to The Bluffs Ho Tram Strip (Top 100 World, on-site). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at InterContinental Grand Ho Tram?","acceptedAnswer":{"@type":"Answer","text":"InterContinental Grand Ho Tram features 541 Rooms & Suites within a Luxury Casino & Golf Resort setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does InterContinental Grand Ho Tram offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at InterContinental Grand Ho Tram enjoy On-site casino, 4 pools, private beach, alongside post-round recovery & wellness (Multiple pools, Lotus Spa & sauna) and breakfast & dining quality (15+ restaurants, sports bar & grill)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at InterContinental Grand Ho Tram?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at InterContinental Grand Ho Tram as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is InterContinental Grand Ho Tram to the nearest championship golf courses in Ho Tram?",
                    "a": "InterContinental Grand Ho Tram is positioned in Ho Tram Strip, Ba Ria-Vung Tau, Vietnam, offering direct private transfer access to The Bluffs Ho Tram Strip (Top 100 World, on-site). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at InterContinental Grand Ho Tram?",
                    "a": "InterContinental Grand Ho Tram features 541 Rooms & Suites within a Luxury Casino & Golf Resort setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does InterContinental Grand Ho Tram offer?",
                    "a": "Guests at InterContinental Grand Ho Tram enjoy On-site casino, 4 pools, private beach, alongside post-round recovery & wellness (Multiple pools, Lotus Spa & sauna) and breakfast & dining quality (15+ restaurants, sports bar & grill)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at InterContinental Grand Ho Tram?",
                    "a": "Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at InterContinental Grand Ho Tram as part of a complete stay-and-play golf package."
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

            <VenueItineraries venueHref="/accommodations/vietnam/bluffs-grand-ho-tram/" venueName="InterContinental Grand Ho Tram" venueType="accommodation" />

</main>
 );
}
