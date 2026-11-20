import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {

    title: { absolute: "Four Seasons Resort The Nam Hai | Hoi An Golf Villas" },
    description: "Experience ultimate luxury at Four Seasons Nam Hai Hoi An. 5-star golf, UNESCO sites, Vietnam/Thailand tours. Book with Asia Golf Specialists.",
    keywords: ["Four Seasons Nam Hai Hoi An", "luxury golf resort Central Vietnam", "Five-star accommodation Da Nang", "best beach resort Hoi An", "golf retreat vietnam"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/four-seasons-nam-hai/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Four Seasons Resort The Nam Hai | Hoi An Golf Villas" },
        description: "Experience ultimate luxury at Four Seasons Nam Hai Hoi An. 5-star golf, UNESCO sites, Vietnam/Thailand tours. Book with Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/four-seasons-nam-hai/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/four-seasons-nam-hai/vietnam-luxury-hotel-four-seasons-nam-hai-beach-pool-1.webp",
            width: 1200,
            height: 630,
            alt: "Four Seasons Resort The Nam Hai | Pure Luxury Golf Recovery Hoi An | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Four Seasons Resort The Nam Hai | Hoi An Golf Villas" },
        description: "Experience ultimate luxury at Four Seasons Nam Hai Hoi An. 5-star golf, UNESCO sites, Vietnam/Thailand tours. Book with Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/four-seasons-nam-hai/vietnam-luxury-hotel-four-seasons-nam-hai-beach-pool-1.webp"],
    },
};

const images = [
    { src: "/images/accommodations/vietnam/four-seasons-nam-hai/vietnam-luxury-hotel-four-seasons-nam-hai-beach-pool-1.webp", alt: "Four Seasons Resort The Nam Hai Beachfront Infinity Pool at Sunrise Hoi An Vietnam", caption: "Beachfront Infinity Pool at Sunrise" },
    { src: "/images/accommodations/vietnam/four-seasons-nam-hai/vietnam-luxury-hotel-four-seasons-nam-hai-villa-pool-2.webp", alt: "Four Seasons Resort The Nam Hai Private Villa Pool and Garden Hoi An Vietnam", caption: "Private Villa Pool and Garden" },
    { src: "/images/accommodations/vietnam/four-seasons-nam-hai/vietnam-luxury-hotel-four-seasons-nam-hai-beach-villa-3.webp", alt: "Four Seasons Resort The Nam Hai Zen-Inspired Beachfront Villa Interior Hoi An Vietnam", caption: "Zen-Inspired Beachfront Villa Interior" },
    { src: "/images/accommodations/vietnam/four-seasons-nam-hai/vietnam-luxury-hotel-four-seasons-nam-hai-suite-5.webp", alt: "Four Seasons Resort The Nam Hai Luxury Suite Interior Hoi An Vietnam", caption: "Luxury Suite Interior" },
    { src: "/images/accommodations/vietnam/four-seasons-nam-hai/four-seasons-resort-the-nam-hai-hoi-an-9.webp", alt: "Four Seasons Resort The Nam Hai Grounds and Landscaping Hoi An Vietnam", caption: "Resort grounds and tropical landscaping" },
];

export default function FourSeasonsNamHai() {
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
                    <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Platinum Preferred — A Hoi An Masterpiece</div>
                    <h1 style={{ marginBottom: '1rem' }}>Four Seasons <br /><span className="text-gold">The Nam Hai</span></h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Zen-inspired beachfront elegance where ancient culture meets modern recovery."</p>
                </div>
            </header>

            <section className="section">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    <div className="article-content">
                        <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
                        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                            <tbody>
                                {[
                                    ["Category", "Ultra-Luxury All-Villa Beachfront Resort"],
                                    ["Star Rating", "5 Star Ultra-Deluxe"],
                                    ["Location", "Hoi An corridor, Central Vietnam"],
                                    ["Villa Configuration", "Pool Villas & Residence Villas"],
                                    ["Unique Factor", "Portal to 3 UNESCO World Heritage Sites"],
                                    ["Nearest Golf", "Montgomerie Links & BRG Da Nang (5-10 mins)"],
                                    ["Key Amenity", "Three-tiered Infinity Pool, Signature Cooking Academy"],
                                    ["Global Recognition", (
                                        <span key="rec">
                                            <a href="https://www.forbestravelguide.com/hotels/vietnam-vietnam/four-seasons-resort-the-nam-hai-hoi-an" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Forbes 5-Star</a>
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
                            <p>Four Seasons Resort The Nam Hai is a masterclass in architectural elegance and cultural depth. Located on one of the Forbes-rated best beaches in the world, the resort provides a serene 'zen' sanctuary that acts as the perfect counterbalance to the strategic rigors of the Central Coast's championship golf courses.</p>
                            <p>The resort’s three iconic swimming pools descend in tiered levels towards the East Sea, flanked by lush tropical gardens and private villas designed with 'Feng Shui' principles. For golfers, the location is unbeatable, offering high-fidelity proximity to the region's premier links courses while remaining a portal to the ancient world of Hoi An.</p>
                            <p>Beyond the fairway, the resort’s Gastronomy Academy and award-winning 'Heart of the Earth' Spa offer technical levels of restoration and cultural immersion that are unmatched in Southeast Asia.</p>
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
                                <div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption}</div>
                            </div>
                        ))}
                    </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/vietnam/four-seasons-nam-hai/"
  />
  </div>
  </section>

            <section className="section"><div className="container text-center">
                <h2 style={{ marginBottom: '1rem' }}>Experience <span className="text-gold">The Nam Hai</span></h2>
                <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS provides dedicated luxury concierge services and elite golf bookings for all Four Seasons guests.</p>
                <Link href="/quote/" className="btn-primary">Book Your Nam Hai Experience</Link>
            </div></section>

            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Four Seasons Resort The Nam Hai",
                            "description": "Zen-inspired luxury beachfront villa resort in Hoi An, Central Vietnam. Portal to three UNESCO World Heritage sites.",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Hoi An", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/four-seasons-nam-hai/",
                            "award": [
                                "Forbes Travel Guide Five-Star Award",
                                "Michelin Guide Selected Hotel",
                                "Virtuoso Preferred Property"
                            ],
                            "memberOf": [
                                { "@type": "ProgramMembership", "programName": "Virtuoso Luxury Travel Network" },
                                { "@type": "Organization", "name": "Four Seasons Hotels and Resorts" }
                            ],
                          "sameAs": ["https://www.fourseasons.com/thenamhai/","https://www.forbestravelguide.com/hotels/vietnam-vietnam/four-seasons-resort-the-nam-hai-hoi-an","https://guide.michelin.com/us/en","https://www.cntraveler.com/hotels/vietnam/hoi-an/four-seasons-resort-the-nam-hai"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Four Seasons The Nam Hai", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/four-seasons-nam-hai/" }
                            ]
                        }
                    ]
                })
            }} />

            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Four Seasons Resort The Nam Hai</strong> operates as a premier <strong>5 Star Ultra-Deluxe</strong> ultra-luxury all-villa beachfront resort positioned in Hoi An corridor, Central Vietnam. Featuring an architectural inventory of pool villas & residence villas, the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (Feng Shui pool villas, acoustic privacy) and direct arterial access to Montgomerie Links & BRG Da Nang (5-10 mins).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, Four Seasons Resort The Nam Hai minimizes daily transit friction across the Hoi An corridor while elevating off-course recovery through three-tiered infinity pool, signature cooking academy and post-round recovery & wellness (Three-tiered infinity pools & spa). Every AGS itinerary anchored at Four Seasons Resort The Nam Hai includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights Four Seasons Resort The Nam Hai&apos;s breakfast & dining quality (Gourmet pre-round dining & Cooking Academy), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Four Seasons Resort The Nam Hai"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/four-seasons-nam-hai/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/four-seasons-nam-hai/vietnam-luxury-hotel-four-seasons-nam-hai-beach-pool-1.webp"
    addressLocality="Hoi An"
    addressCountry="VN"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="Forbes 5-Star • Michelin Selected • Central Coast"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      { label: "Suite Comfort & Rest Quality", score: 9.9, highlight: "Feng Shui pool villas, acoustic privacy" },
      { label: "Villa & Beachfront Privacy", score: 9.9, highlight: "Direct private Ha My Beach frontage" },
      { label: "Post-Round Recovery & Wellness", score: 9.8, highlight: "Three-tiered infinity pools & spa" },
      { label: "Breakfast & Dining Quality", score: 9.7, highlight: "Gourmet pre-round dining & Cooking Academy" },
    ]}
    verdict="The quintessential luxury golf basecamp in Central Vietnam. Just minutes from Montgomerie Links and BRG Da Nang, The Nam Hai pairs palatial beachfront pool villas with world-class post-round wellness. The three-tiered infinity pool descending to the East Sea is the ultimate setting for post-round debriefs."
  />


            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is Four Seasons Resort The Nam Hai to the nearest championship golf courses in Hoi An?","acceptedAnswer":{"@type":"Answer","text":"Four Seasons Resort The Nam Hai is positioned in Hoi An corridor, Central Vietnam, offering direct private transfer access to Montgomerie Links & BRG Da Nang (5-10 mins). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at Four Seasons Resort The Nam Hai?","acceptedAnswer":{"@type":"Answer","text":"Four Seasons Resort The Nam Hai features Pool Villas & Residence Villas within a Ultra-Luxury All-Villa Beachfront Resort setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does Four Seasons Resort The Nam Hai offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at Four Seasons Resort The Nam Hai enjoy Three-tiered Infinity Pool, Signature Cooking Academy, alongside post-round recovery & wellness (Three-tiered infinity pools & spa) and breakfast & dining quality (Gourmet pre-round dining & Cooking Academy)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at Four Seasons Resort The Nam Hai?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Four Seasons Resort The Nam Hai as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is Four Seasons Resort The Nam Hai to the nearest championship golf courses in Hoi An?",
                    "a": "Four Seasons Resort The Nam Hai is positioned in Hoi An corridor, Central Vietnam, offering direct private transfer access to Montgomerie Links & BRG Da Nang (5-10 mins). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at Four Seasons Resort The Nam Hai?",
                    "a": "Four Seasons Resort The Nam Hai features Pool Villas & Residence Villas within a Ultra-Luxury All-Villa Beachfront Resort setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does Four Seasons Resort The Nam Hai offer?",
                    "a": "Guests at Four Seasons Resort The Nam Hai enjoy Three-tiered Infinity Pool, Signature Cooking Academy, alongside post-round recovery & wellness (Three-tiered infinity pools & spa) and breakfast & dining quality (Gourmet pre-round dining & Cooking Academy)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at Four Seasons Resort The Nam Hai?",
                    "a": "Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Four Seasons Resort The Nam Hai as part of a complete stay-and-play golf package."
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

            <VenueItineraries venueHref="/accommodations/vietnam/four-seasons-nam-hai/" venueName="Four Seasons Resort The Nam Hai" venueType="accommodation" />

</main>
    );
}
