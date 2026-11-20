import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
    title: { absolute: "Banyan Tree Lang Co | Luxury Vietnam Golf Pool Villas" },
    description: "Experience luxury at Banyan Tree Lang Co, Vietnam. Golf Laguna Lang Co with Asia Golf Specialists. Your dream tour awaits!",
    keywords: ["Banyan Tree Lang Co", "luxury pool villas Vietnam", "Laguna Golf Lang Co accommodation", "ultra-luxury Vietnam resort", "golf wellness sanctuary"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/banyan-tree-lang-co/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Banyan Tree Lang Co | Luxury Vietnam Golf Pool Villas" },
        description: "Experience luxury at Banyan Tree Lang Co, Vietnam. Golf Laguna Lang Co with Asia Golf Specialists. Your dream tour awaits!",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/banyan-tree-lang-co/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/banyan-tree-lang-co/vietnam-luxury-hotel-banyan-tree-lang-co-pool-villa-1.webp",
            width: 1200,
            height: 630,
            alt: "Banyan Tree Lang Cô | Ultra-Luxury Pool Villa Golf Recovery | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Banyan Tree Lang Co | Luxury Vietnam Golf Pool Villas" },
        description: "Experience luxury at Banyan Tree Lang Co, Vietnam. Golf Laguna Lang Co with Asia Golf Specialists. Your dream tour awaits!",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/banyan-tree-lang-co/vietnam-luxury-hotel-banyan-tree-lang-co-pool-villa-1.webp"],
    },
};

const images = [
    { src: "/images/accommodations/vietnam/banyan-tree-lang-co/vietnam-luxury-hotel-banyan-tree-lang-co-pool-villa-1.webp", alt: "Banyan Tree Lang Cô Luxury Beachfront Pool Villa Exterior Central Vietnam", caption: "Luxury beachfront pool villa exterior" },
    { src: "/images/accommodations/vietnam/banyan-tree-lang-co/vietnam-luxury-hotel-banyan-tree-lang-co-resort-aerial-2.webp", alt: "Banyan Tree Lang Cô Resort Aerial View Between Mountains and East Sea Vietnam", caption: "Resort aerial view, mountains and East Sea" },
    { src: "/images/accommodations/vietnam/banyan-tree-lang-co/vietnam-luxury-hotel-banyan-tree-lang-co-lang-co-bay-3.webp", alt: "Banyan Tree Lang Cô Bay Panoramic Coastal View Central Vietnam", caption: "Lang Cô Bay panoramic coastal view" },
    { src: "/images/accommodations/vietnam/banyan-tree-lang-co/vietnam-luxury-hotel-banyan-tree-lang-co-spa-pavilion-4.webp", alt: "Banyan Tree Lang Cô Award-Winning Luxury Spa Pavilion Vietnam", caption: "Award-winning luxury spa pavilion" },
    { src: "/images/accommodations/vietnam/banyan-tree-lang-co/vietnam-luxury-hotel-banyan-tree-lang-co-dining-5.webp", alt: "Banyan Tree Lang Cô Fine Dining Restaurant Central Vietnam", caption: "Ocean View Suite" },
    { src: "/images/accommodations/vietnam/banyan-tree-lang-co/vietnam-luxury-hotel-banyan-tree-lang-co-bay-6.webp", alt: "Banyan Tree Lang Cô Bay View at Sunset Central Vietnam", caption: "Lang Cô Bay view at sunset" },
    { src: "/images/accommodations/vietnam/banyan-tree-lang-co/vietnam-luxury-hotel-angsana-pool-villa-sky-terrace.webp", alt: "Angsana Lang Cô Pool Villa Sky Terrace Central Vietnam", caption: "Angsana pool villa sky terrace" },
];

export default function BanyanTreeLangCo() {
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
                    <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Elite Choice — The Ultimate Sanctuary</div>
                    <h1 style={{ marginBottom: '1rem' }}>Banyan Tree <br /><span className="text-gold">Lang Cô</span></h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"An all-pool-villa sanctuary where the recovery is as profound as the round."</p>
                </div>
            </header>

            <section className="section">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    <div className="article-content">
                        <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
                        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                            <tbody>
                                {[
                                    ["Category", "Ultra-Luxury All-Pool Villa Resort"],
                                    ["Star Rating", "5 Star Deluxe"],
                                    ["Location", "Lang Cô Bay, Central Vietnam"],
                                    ["Villa Count", "72 Private Pool Villas"],
                                    ["Setting", "Mountain-to-Sea Beachfront Sanctuary"],
                                    ["Nearest Golf", "Laguna Golf Lang Cô (On-site)"],
                                    ["Key Amenity", "Private Infinity Pool, Award-Winning Banyan Tree Spa"],
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
                            <p>Banyan Tree Lang Cô is more than just a resort; it is a multi-award-winning sanctuary that pays homage to the sophisticated hospitality of Vietnam. Nestled within an integrated destination that includes Sir Nick Faldo’s technical masterpiece, Laguna Golf Lang Cô, this property is designed for the golfer who demands absolute seclusion and high-fidelity recovery.</p>
                            <p>Every villa features a private infinity pool, providing a peer-to-peer level of exclusivity from the moment you return from the fairways. The resort is famous for its holistic approach to wellness, offering the legendary Banyan Tree Spa experiences that are technically tailored to physical restoration after 18 holes.</p>
                            <p>Located on the crescent-bound bay of Lang Cô, the resort offers elite access to UNESCO Heritage sites while remaining a secluded prestige network for those who value privacy above all else.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Santuary <span className="text-gold">Gallery</span></h2>
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
    pagePath="/accommodations/vietnam/banyan-tree-lang-co/"
  />
  </div>
  </section>

            <section className="section"><div className="container text-center">
                <h2 style={{ marginBottom: '1rem' }}>The <span className="text-gold">Lang Cô</span> Retreat</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates private transfers and guaranteed tee times at Laguna Golf Lang Cô for all Banyan Tree guests.</p>
                <Link href="/quote/" className="btn-primary">Book Your Lang Cô Sanctuary</Link>
            </div></section>

            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Banyan Tree Lang Cô",
                            "description": "Ultra-luxury all-pool villa sanctuary adjacent to Laguna Golf Lang Cô.",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Lang Cô", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/banyan-tree-lang-co/",
                            "sameAs": [
                                "https://www.banyantree.com/vietnam/lang-co",
                                "https://www.forbestravelguide.com/hotels/lang-co-vietnam/banyan-tree-lang-co",
                                "https://guide.michelin.com/en/hotels-stays/vietnam/banyan-tree-lang-co"
                            ]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Banyan Tree Lang Cô", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/banyan-tree-lang-co/" }
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
                            <strong>Banyan Tree Lang Co</strong> operates as a premier <strong>5 Star Deluxe</strong> ultra-luxury all-pool villa resort positioned in Lang Cô Bay, Central Vietnam. Featuring an architectural inventory of luxury suites & private pool villas, the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (Palatial lagoon & beach pool villas) and direct arterial access to Laguna Golf Lang Cô (On-site).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, Banyan Tree Lang Co minimizes daily transit friction across the Lang Co corridor while elevating off-course recovery through private infinity pool, award-winning banyan tree spa and post-round recovery & wellness (World-renowned Banyan Tree Spa). Every AGS itinerary anchored at Banyan Tree Lang Co includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights Banyan Tree Lang Co&apos;s breakfast & dining quality (Saffron cliffside Thai & beachfront dining), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Banyan Tree Lang Co"
    sameAs={["https://www.banyantree.com/vietnam/lang-co", "https://www.forbestravelguide.com/hotels/lang-co-vietnam/banyan-tree-lang-co"]}
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/banyan-tree-lang-co/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/banyan-tree-lang-co/vietnam-luxury-hotel-banyan-tree-lang-co-pool-villa-1.webp"
    addressLocality="Lang Co"
    addressCountry="VN"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="All-Pool Villa Oceanfront Sanctuary • Forbes 5-Star"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.9,
            highlight: "Palatial lagoon & beach pool villas"
      },
      {
            label: "Villa & Beachfront Privacy",
            score: 9.9,
            highlight: "Total seclusion between mountains & sea"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.8,
            highlight: "World-renowned Banyan Tree Spa"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.7,
            highlight: "Saffron cliffside Thai & beachfront dining"
      }
]}
    verdict="The ultimate stay-and-play sanctuary in Central Vietnam. All-pool villas nestled between the Truong Son mountains and the East Sea, offering direct golf cart transfer onto Sir Nick Faldo's championship links."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is Banyan Tree Lang Co to the nearest championship golf courses in Lang Co?","acceptedAnswer":{"@type":"Answer","text":"Banyan Tree Lang Co is positioned in Lang Cô Bay, Central Vietnam, offering direct private transfer access to Laguna Golf Lang Cô (On-site). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at Banyan Tree Lang Co?","acceptedAnswer":{"@type":"Answer","text":"Banyan Tree Lang Co features Luxury Suites & Private Pool Villas within a Ultra-Luxury All-Pool Villa Resort setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does Banyan Tree Lang Co offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at Banyan Tree Lang Co enjoy Private Infinity Pool, Award-Winning Banyan Tree Spa, alongside post-round recovery & wellness (World-renowned Banyan Tree Spa) and breakfast & dining quality (Saffron cliffside Thai & beachfront dining)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at Banyan Tree Lang Co?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Banyan Tree Lang Co as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is Banyan Tree Lang Co to the nearest championship golf courses in Lang Co?",
                    "a": "Banyan Tree Lang Co is positioned in Lang Cô Bay, Central Vietnam, offering direct private transfer access to Laguna Golf Lang Cô (On-site). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at Banyan Tree Lang Co?",
                    "a": "Banyan Tree Lang Co features Luxury Suites & Private Pool Villas within a Ultra-Luxury All-Pool Villa Resort setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does Banyan Tree Lang Co offer?",
                    "a": "Guests at Banyan Tree Lang Co enjoy Private Infinity Pool, Award-Winning Banyan Tree Spa, alongside post-round recovery & wellness (World-renowned Banyan Tree Spa) and breakfast & dining quality (Saffron cliffside Thai & beachfront dining)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at Banyan Tree Lang Co?",
                    "a": "Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Banyan Tree Lang Co as part of a complete stay-and-play golf package."
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

            <VenueItineraries venueHref="/accommodations/vietnam/banyan-tree-lang-co/" venueName="Banyan Tree Lang Co" venueType="accommodation" />

</main>
    );
}
