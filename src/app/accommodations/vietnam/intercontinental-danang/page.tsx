import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "InterContinental Da Nang | Vietnam" },
 description: "InterContinental Da Nang: 5-star golf resort on Son Tra Peninsula. Spectacular views. Book your Vietnam/Thailand Golf Tour with Asia Golf Specialists.",
 keywords: ["InterContinental Danang Sun Peninsula", "luxury golf accommodation Da Nang", "Son Tra Peninsula resort Vietnam", "Bill Bensley Vietnam hotel", "Da Nang five star resort"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/intercontinental-danang/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "InterContinental Da Nang | Vietnam" },
        description: "InterContinental Da Nang: 5-star golf resort on Son Tra Peninsula. Spectacular views. Book your Vietnam/Thailand Golf Tour with Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/intercontinental-danang/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/intercontinental-danang/vietnam-luxury-hotel-intercontinental-danang-sun-peninsula-resort-hero-1.webp",
            width: 1200,
            height: 630,
            alt: "InterContinental Danang Sun Peninsula Resort | Vietnam Clifftop Luxury | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "InterContinental Da Nang | Vietnam" },
        description: "InterContinental Da Nang: 5-star golf resort on Son Tra Peninsula. Spectacular views. Book your Vietnam/Thailand Golf Tour with Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/intercontinental-danang/vietnam-luxury-hotel-intercontinental-danang-sun-peninsula-resort-hero-1.webp"],
    },
};

const images = [
 { src: "/images/accommodations/vietnam/intercontinental-danang/vietnam-luxury-hotel-intercontinental-danang-sun-peninsula-resort-hero-1.webp", alt: "InterContinental Danang Sun Peninsula Resort Vietnam Clifftop", caption: "Clifftop resort on Son Tra Peninsula" },
 { src: "/images/accommodations/vietnam/intercontinental-danang/vietnam-luxury-hotel-intercontinental-danang-sun-peninsula-resort-cove-2.webp", alt: "InterContinental Danang Private Cove Son Tra Peninsula", caption: "Private cove and beach access" },
 { src: "/images/accommodations/vietnam/intercontinental-danang/vietnam-luxury-hotel-intercontinental-danang-sun-peninsula-resort-infinity-pool-3.webp", alt: "InterContinental Danang Infinity Pool Ocean View - Premium Southeast Asia Golf Tours 2026", caption: "Infinity pool with East Sea views" },
 { src: "/images/accommodations/vietnam/intercontinental-danang/vietnam-luxury-hotel-intercontinental-danang-sun-peninsula-resort-villa-4.webp", alt: "InterContinental Danang Luxury Villa Private Pool - Premium Southeast Asia Golf Tours 2026", caption: "Luxury private pool villa" },
 { src: "/images/accommodations/vietnam/intercontinental-danang/vietnam-luxury-hotel-intercontinental-danang-4-bedroom-villa-5.webp", alt: "InterContinental Danang 4-Bedroom Villa - Premium Southeast Asia Golf Tours 2026", caption: "4-bedroom villa estate" },
 { src: "/images/accommodations/vietnam/intercontinental-danang/vietnam-luxury-hotel-intercontinental-danang-sun-peninsula-resort-aerial-5.webp", alt: "InterContinental Danang Sun Peninsula Aerial View - Premium Southeast Asia Golf Tours 2026", caption: "Aerial view of Sun Peninsula resort" },
];

export default function InterContinentalDanang() {
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
 <h1 style={{ marginBottom: '1rem' }}>InterContinental Danang <br /><span className="text-gold">Sun Peninsula Resort</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"A Bill Bensley whimsy perched on a private cove — the most dramatic resort address on Vietnam's golf coast."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
 {[
 ["Category", "Ultra-Luxury Clifftop Resort"],
 ["Star Rating", "5 Star (IHG Luxury Collection)"],
 ["Location", "Son Tra Peninsula, Da Nang, Vietnam"],
 ["Total Rooms", "197 Rooms, Suites & Villas"],
 ["Setting", "Private cove of Son Tra UNESCO-adjacent Nature Reserve"],
 ["Nearest Golf", "Ba Na Hills GC (30 min), BRG Da Nang (25 min)"],
 ["Designer", "Bill Bensley (Whimsical Luxury Concept)"],
                                    ["Global Recognition", (
                                        <span key="rec">
                                            <a href="https://www.forbestravelguide.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Forbes 4-Star</a>
                                            {' • '}
                                            <a href="https://guide.michelin.com/us/en" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Michelin Guide Selected</a>
                                            {' • '}
                                            <a href="https://www.virtuoso.com/travel/luxury-hotels" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Virtuoso Preferred</a>
                                        </span>
                                    )],
                                ].map(([k, v], i, arr) => (
 <tr key={k as string}>
 <th style={{ textAlign: 'left', padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none', color: 'var(--color-gold)' }}>{k as string}</th>
 <td style={{ padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none' }}>{v}</td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>The InterContinental Danang Sun Peninsula Resort occupies the most dramatic natural setting of any resort on Vietnam's golf coast. Designed by the legendary Bill Bensley, it cascades down the forested slopes of the Son Tra Peninsula — Da Nang's protected nature reserve — to a private, secluded cove accessible only by funicular railway. This is a resort that provides total sanctuary from the world outside.</p>
 <p>The property's five-level design echoes the structure of a Vietnamese village, with each tier offering distinct experiences and views. The resort's three restaurants, four bars, and multiple pools are distributed across the hillside, creating a property you discover over days rather than hours. The Harnn Heritage Spa features treatments inspired by traditional Vietnamese healing rituals.</p>
 <p>For AGS clients working the Da Nang golf corridor, the Sun Peninsula is the perfect counter-balance. Positioned 30 minutes north of Hoi An's courses and 25 minutes from the BRG Da Nang complex, it provides extraordinary privacy and service — a true retreat between rounds, rather than merely a place to sleep.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/vietnam/intercontinental-danang/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates preferred rates and golf transfers from the Sun Peninsula to all Da Nang area courses.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                                                {
                            "@type": "LodgingBusiness",
                            "name": "InterContinental Danang Sun Peninsula Resort",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Da Nang", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/intercontinental-danang/",
                            "award": [
                                "Forbes Travel Guide Four-Star Award",
                                "Michelin Guide Selected Hotel"
                            ],
                            "memberOf": [
                                {
                                    "@type": "ProgramMembership",
                                    "programName": "Virtuoso Luxury Network"
                                }
                            ],
                            "sameAs": [
                                "https://www.danang.intercontinental.com/",
                                "https://www.forbestravelguide.com/",
                                "https://guide.michelin.com/us/en",
                                "https://www.virtuoso.com/travel/luxury-hotels"
                            ]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "InterContinental Danang", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/intercontinental-danang/" }
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
                            <strong>InterContinental Danang Sun Peninsula Resort</strong> operates as a premier <strong>5 Star (IHG Luxury Collection)</strong> ultra-luxury clifftop resort positioned in Son Tra Peninsula, Da Nang, Vietnam. Featuring an architectural inventory of 197 rooms, suites & villas, the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (Four-level Heaven/Earth clifftop villas) and direct arterial access to Ba Na Hills GC (30 min), BRG Da Nang (25 min).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, InterContinental Danang Sun Peninsula Resort minimizes daily transit friction across the Da Nang corridor while elevating off-course recovery through private cove of son tra unesco-adjacent nature reserve and post-round recovery & wellness (Mi Sol sound therapy & clifftop pools). Every AGS itinerary anchored at InterContinental Danang Sun Peninsula Resort includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights InterContinental Danang Sun Peninsula Resort&apos;s breakfast & dining quality (La Maison 1888 by Pierre Gagnaire & Citron), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="InterContinental Danang Sun Peninsula Resort"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/intercontinental-danang/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/intercontinental-danang/vietnam-luxury-hotel-intercontinental-danang-sun-peninsula-resort-hero-1.webp"
    addressLocality="Da Nang"
    addressCountry="VN"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="Monkey Mountain Cliffside Icon • Bill Bensley"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.9,
            highlight: "Four-level Heaven/Earth clifftop villas"
      },
      {
            label: "Villa & Beachfront Privacy",
            score: 9.9,
            highlight: "Private Bai Bac Bay bayfront isolation"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.8,
            highlight: "Mi Sol sound therapy & clifftop pools"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.8,
            highlight: "La Maison 1888 by Pierre Gagnaire & Citron"
      }
]}
    verdict="Perched dramatically on the cliff faces of Son Tra Peninsula. Bill Bensley's whimsical architecture, private white-sand coves, and La Maison 1888 make this one of the most celebrated luxury resorts in the world."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is InterContinental Danang Sun Peninsula Resort to the nearest championship golf courses in Da Nang?","acceptedAnswer":{"@type":"Answer","text":"InterContinental Danang Sun Peninsula Resort is positioned in Son Tra Peninsula, Da Nang, Vietnam, offering direct private transfer access to Ba Na Hills GC (30 min), BRG Da Nang (25 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at InterContinental Danang Sun Peninsula Resort?","acceptedAnswer":{"@type":"Answer","text":"InterContinental Danang Sun Peninsula Resort features 197 Rooms, Suites & Villas within a Ultra-Luxury Clifftop Resort setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does InterContinental Danang Sun Peninsula Resort offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at InterContinental Danang Sun Peninsula Resort enjoy Private cove of Son Tra UNESCO-adjacent Nature Reserve, alongside post-round recovery & wellness (Mi Sol sound therapy & clifftop pools) and breakfast & dining quality (La Maison 1888 by Pierre Gagnaire & Citron)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at InterContinental Danang Sun Peninsula Resort?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at InterContinental Danang Sun Peninsula Resort as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is InterContinental Danang Sun Peninsula Resort to the nearest championship golf courses in Da Nang?",
                    "a": "InterContinental Danang Sun Peninsula Resort is positioned in Son Tra Peninsula, Da Nang, Vietnam, offering direct private transfer access to Ba Na Hills GC (30 min), BRG Da Nang (25 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at InterContinental Danang Sun Peninsula Resort?",
                    "a": "InterContinental Danang Sun Peninsula Resort features 197 Rooms, Suites & Villas within a Ultra-Luxury Clifftop Resort setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does InterContinental Danang Sun Peninsula Resort offer?",
                    "a": "Guests at InterContinental Danang Sun Peninsula Resort enjoy Private cove of Son Tra UNESCO-adjacent Nature Reserve, alongside post-round recovery & wellness (Mi Sol sound therapy & clifftop pools) and breakfast & dining quality (La Maison 1888 by Pierre Gagnaire & Citron)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at InterContinental Danang Sun Peninsula Resort?",
                    "a": "Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at InterContinental Danang Sun Peninsula Resort as part of a complete stay-and-play golf package."
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

            <VenueItineraries venueHref="/accommodations/vietnam/intercontinental-danang/" venueName="InterContinental Danang Sun Peninsula Resort" venueType="accommodation" />

</main>
 );
}

