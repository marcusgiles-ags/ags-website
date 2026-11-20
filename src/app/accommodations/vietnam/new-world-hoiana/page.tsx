import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
    title: { absolute: "New World Hoiana Beach Resort | Vietnam" },
    description: "New World Hoiana Beach Resort — 5-star beachfront hotel at the Hoiana integrated resort, steps from Hoiana Shores Golf Club on Vietnam's Central Coast.",
    keywords: ["New World Hoiana Beach Resort", "luxury golf resort Vietnam", "Hoiana Shores accommodation", "central vietnam luxury hotel", "golf recovery resort"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/new-world-hoiana/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "New World Hoiana Beach Resort | Vietnam" },
        description: "New World Hoiana Beach Resort — 5-star beachfront hotel at the Hoiana integrated resort, steps from Hoiana Shores Golf Club on Vietnam's Central Coast.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/new-world-hoiana/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/new-world-hoiana/hoiana-beach-resort-hero.webp",
            width: 1200,
            height: 630,
            alt: "New World Hoiana Beach Resort | Ultimate Luxury Golf Recovery Vietnam | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "New World Hoiana Beach Resort | Vietnam" },
        description: "New World Hoiana Beach Resort — 5-star beachfront hotel at the Hoiana integrated resort, steps from Hoiana Shores Golf Club on Vietnam's Central Coast.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/new-world-hoiana/hoiana-beach-resort-hero.webp"],
    },
};

const images = [
    { src: "/images/accommodations/vietnam/new-world-hoiana/hoiana-beach-resort-hero.webp", alt: "New World Hoiana Beach Resort Exterior Aerial View at Sunset", caption: "Hoiana Beach Resort exterior at sunset" },
    { src: "/images/accommodations/vietnam/new-world-hoiana/new-world-hoiana-deluxe-ocean-suite.webp", alt: "New World Hoiana Beach Resort Luxury Ocean View Suite Interior", caption: "Ocean view luxury suite interior" },
    { src: "/images/accommodations/vietnam/new-world-hoiana/hoiana-beach-resort-pool-complex.webp", alt: "New World Hoiana Beach Resort Infinity Pool and Beach View", caption: "Infinity pool overlooking the East Sea" },
];

export default function NewWorldHoiana() {
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
                    <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Preferred Property — Central Vietnam</div>
                    <h1 style={{ marginBottom: '1rem' }}>New World <br /><span className="text-gold">Hoiana Beach Resort</span></h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"The absolute gold standard for golf-integrated luxury on the Central Vietnamese coast."</p>
                </div>
            </header>

            <section className="section">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    <div className="article-content">
                        <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
                        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                            <tbody>
                                {[
                                    ["Category", "Luxury Beachfront Resort & Suites"],
                                    ["Star Rating", "5 Star Ultra-Premium"],
                                    ["Location", "Hoi An corridor, Central Vietnam"],
                                    ["Total Rooms", "330 Keys (Rooms & Suites)"],
                                    ["Setting", "Beachfront within Hoiana Integrated Resort"],
                                    ["Nearest Golf", "Hoiana Shores Golf Club (On-site)"],
                                    ["Key Amenity", "Direct Beach Access, World-Class Casino, Spa"],
                                ].map(([k, v], i, arr) => (
                                    <tr key={k}>
                                        <th style={{ textAlign: 'left', padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none', color: 'var(--color-gold)' }}>{k}</th>
                                        <td style={{ padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none' }}>{v}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
                        <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <p>New World Hoiana Beach Resort is the jewel in the crown of Central Vietnam's newest integrated resort destination. Designed to capture the vibrant spirit of Vietnam with a contemporary, high-fidelity lens, the resort offers 330 beautifully appointed rooms and suites that provide the ultimate sanctuary for the international golfer.</p>
                            <p>The defining feature of the property is its seamless integration with <strong>Hoiana Shores Golf Club</strong> — the Robert Trent Jones Jr. masterpiece that has redefined links golf in Asia. Guests enjoy doorstep access to the fairways, complemented by the most comprehensive recovery facilities in the region, including an expansive outdoor pool complex and an ultra-modern spa center.</p>
                            <p>For those who value both technical dominance on the course and prestige networking at the 19th hole, Hoiana offers an unmatched ecosystem of luxury dining, a high-stakes casino, and 4km of pristine private coastline.</p>
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
                                <div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div>
                            </div>
                        ))}
                    </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/vietnam/new-world-hoiana/"
  />
  </div>
  </section>

            <section className="section"><div className="container text-center">
                <h2 style={{ marginBottom: '1rem' }}>Experience <span className="text-gold">Hoiana</span></h2>
                <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS provides priority tee times and customized golf packages at Hoiana Shores for all resort guests.</p>
                <Link href="/quote/" className="btn-primary">Book Your Hoiana Experience</Link>
            </div></section>

            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "New World Hoiana Beach Resort",
                            "description": "Luxury beachfront golf resort in Central Vietnam, part of the Hoiana Resort & Golf complex.",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Hoi An", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/new-world-hoiana/",
                            "sameAs": [
                                "https://hoianabeachresort.newworldhotels.com/",
                                "https://guide.michelin.com/en/hotels-stays/vietnam/new-world-hoiana-beach-resort"
                            ]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "New World Hoiana Beach Resort", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/new-world-hoiana/" }
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
                            <strong>New World Hoiana Beach Resort</strong> operates as a premier <strong>5 Star Ultra-Premium</strong> luxury beachfront resort & suites positioned in Hoi An corridor, Central Vietnam. Featuring an architectural inventory of 330 keys (rooms & suites), the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (Ocean-facing suites with deep sleep) and direct arterial access to Hoiana Shores Golf Club (On-site).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, New World Hoiana Beach Resort minimizes daily transit friction across the Hoi An corridor while elevating off-course recovery through direct beach access, world-class casino, spa and post-round recovery & wellness (Direct cart transfers to Hoiana Shores). Every AGS itinerary anchored at New World Hoiana Beach Resort includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights New World Hoiana Beach Resort&apos;s breakfast & dining quality (Multiple fine-dining options & beach club), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="New World Hoiana Beach Resort"
    sameAs={["https://hoianabeachresort.newworldhotels.com/"]}
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/new-world-hoiana/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/new-world-hoiana/hoiana-beach-resort-hero.webp"
    addressLocality="Hoi An"
    addressCountry="VN"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="Integrated Luxury Beach Resort • Central Coast"
    inspectionDate="Site-Verified by AGS On-Ground Team"
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.7,
            highlight: "Ocean-facing suites with deep sleep"
      },
      {
            label: "Villa & Beachfront Privacy",
            score: 9.6,
            highlight: "Expansive 4km private beachfront"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.8,
            highlight: "Direct cart transfers to Hoiana Shores"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.6,
            highlight: "Multiple fine-dining options & beach club"
      }
]}
    verdict="The official basecamp for Hoiana Shores Golf Club. Direct golf cart transfers to the first tee, pristine East Sea beach frontage, and the vast entertainment amenities of the Hoiana complex."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is New World Hoiana Beach Resort to the nearest championship golf courses in Hoi An?","acceptedAnswer":{"@type":"Answer","text":"New World Hoiana Beach Resort is positioned in Hoi An corridor, Central Vietnam, offering direct private transfer access to Hoiana Shores Golf Club (On-site). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at New World Hoiana Beach Resort?","acceptedAnswer":{"@type":"Answer","text":"New World Hoiana Beach Resort features 330 Keys (Rooms & Suites) within a Luxury Beachfront Resort & Suites setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does New World Hoiana Beach Resort offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at New World Hoiana Beach Resort enjoy Direct Beach Access, World-Class Casino, Spa, alongside post-round recovery & wellness (Direct cart transfers to Hoiana Shores) and breakfast & dining quality (Multiple fine-dining options & beach club)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at New World Hoiana Beach Resort?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at New World Hoiana Beach Resort as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is New World Hoiana Beach Resort to the nearest championship golf courses in Hoi An?",
                    "a": "New World Hoiana Beach Resort is positioned in Hoi An corridor, Central Vietnam, offering direct private transfer access to Hoiana Shores Golf Club (On-site). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at New World Hoiana Beach Resort?",
                    "a": "New World Hoiana Beach Resort features 330 Keys (Rooms & Suites) within a Luxury Beachfront Resort & Suites setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does New World Hoiana Beach Resort offer?",
                    "a": "Guests at New World Hoiana Beach Resort enjoy Direct Beach Access, World-Class Casino, Spa, alongside post-round recovery & wellness (Direct cart transfers to Hoiana Shores) and breakfast & dining quality (Multiple fine-dining options & beach club)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at New World Hoiana Beach Resort?",
                    "a": "Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at New World Hoiana Beach Resort as part of a complete stay-and-play golf package."
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

            <VenueItineraries venueHref="/accommodations/vietnam/new-world-hoiana/" venueName="New World Hoiana Beach Resort" venueType="accommodation" />

</main>
    );
}

