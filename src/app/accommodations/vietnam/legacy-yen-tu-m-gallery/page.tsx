import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Legacy Yen Tu M-Gallery | Vietnam" },
 description: "Experience Golf Tour Vietnam & Thailand. Discover a mystical 13th-century palace on Yen Tu mountain. Peaceful, cultural golf sanctuary.",
 keywords: ["Legacy Yen Tu MGallery", "Yen Tu mountain resort", "Quang Ninh luxury hotel", "Northern Vietnam golf retreat"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/legacy-yen-tu-m-gallery/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Legacy Yen Tu M-Gallery | Vietnam" },
        description: "Experience Golf Tour Vietnam & Thailand. Discover a mystical 13th-century palace on Yen Tu mountain. Peaceful, cultural golf sanctuary.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/legacy-yen-tu-m-gallery/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/legacy-yen-tu-m-gallery/legacy-yen-tu-m-gallery-aerial.webp",
            width: 1200,
            height: 630,
            alt: "Legacy Yen Tu M-Gallery | Vietnam | Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Legacy Yen Tu M-Gallery | Vietnam" },
        description: "Experience Golf Tour Vietnam & Thailand. Discover a mystical 13th-century palace on Yen Tu mountain. Peaceful, cultural golf sanctuary.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/legacy-yen-tu-m-gallery/legacy-yen-tu-m-gallery-aerial.webp"],
    },
};

const images = [
 { src: "/images/accommodations/vietnam/legacy-yen-tu-m-gallery/legacy-yen-tu-m-gallery-aerial.webp", alt: "Legacy Yen Tu M-Gallery - Aerial View of the Retreat - Premium Southeast Asia Golf Tours", caption: "Aerial View of the Retreat" },
 { src: "/images/accommodations/vietnam/legacy-yen-tu-m-gallery/legacy-yen-tu-m-gallery-main-pool.webp", alt: "Legacy Yen Tu M-Gallery - The Main Pool - Premium Southeast Asia Golf Tours", caption: "The Main Pool" },
 { src: "/images/accommodations/vietnam/legacy-yen-tu-m-gallery/legacy-yen-tu-m-gallery-junior-suite.webp", alt: "Legacy Yen Tu M-Gallery - Junior Suite Interior - Premium Southeast Asia Golf Tours", caption: "Junior Suite Interior" },
 { src: "/images/accommodations/vietnam/legacy-yen-tu-m-gallery/legacy-yen-tu-m-gallery-dining.webp", alt: "Legacy Yen Tu M-Gallery - Thọ Quang Restaurant - Premium Southeast Asia Golf Tours", caption: "Thọ Quang Restaurant" },
 { src: "/images/accommodations/vietnam/legacy-yen-tu-m-gallery/legacy-yen-tu-m-gallery-night-exterior.webp", alt: "Legacy Yen Tu M-Gallery - Magical Night Exterior - Premium Southeast Asia Golf Tours", caption: "Magical Night Exterior" },
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
 <h1 style={{ marginBottom: '1rem' }}>Legacy Yen Tu M-Gallery</h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Experience Golf Tour Vietnam & Thailand. Discover a mystical 13th-century palace on Yen Tu mountain. Peaceful, cultural golf sanctuary."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
  <tr key="Category"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Category</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Heritage Mountain Retreat</td></tr>
  <tr key="Star Rating"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Star Rating</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>5 Star</td></tr>
  <tr key="Location"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Location</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Uong Bi, Quang Ninh</td></tr>
  <tr key="Setting"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Setting</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Sacred mountain valleys, lush forests</td></tr>
  <tr key="Nearest Golf"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Nearest Golf</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>FLC Halong Bay Golf Club</td></tr>
  <tr key="Key Amenity"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Key Amenity</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Am Tuệ Tĩnh Wellness Center, Cultural Architecture, Mountain Views</td></tr>
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
  <p>Legacy Yen Tu M-Gallery by Sofitel is a masterpiece of architectural storytelling by Bill Bensley, designed to mirror a 13th-century Tran Dynasty palace. Nestled in the sacred Yen Tu mountain range, it offers a dramatic, soulful contrast to the coastal resorts of Halong Bay.</p><p>For golfing groups traveling through Northern Vietnam, Legacy Yen Tu provides a profoundly unique recovery environment. The serenity of the mountain, combined with world-class wellness facilities and monastic-inspired luxury, ensures deep rejuvenation between challenging rounds on the region's top courses.</p>
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
    pagePath="/accommodations/vietnam/legacy-yen-tu-m-gallery/"
  />
  </div>
  </section>
 <section className="section">
 <div className="container text-center">
 <h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2>
 <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from Legacy Yen Tu M-Gallery to the golf circuit.</p>
 <Link href="/quote/" className="btn-primary">Speak to a Specialist</Link>
 </div>
 </section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Legacy Yen Tu M-Gallery",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Uong Bi", "addressRegion": "Quang Ninh", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/legacy-yen-tu-m-gallery/",
                          "sameAs": ["https://all.accor.com/hotel/B519/index.en.shtml","https://www.forbestravelguide.com/hotels/yen-tu-vietnam/legacy-yen-tu-mgallery","https://www.cntraveler.com/hotels/yen-tu/legacy-yen-tu-mgallery"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Legacy Yen Tu M-Gallery", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/legacy-yen-tu-m-gallery/" }
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
                            <strong>Legacy Yen Tu - MGallery</strong> operates as a premier <strong>5 Star</strong> heritage mountain retreat positioned in Uong Bi, Vietnam. Featuring an architectural inventory of bespoke luxury suites, the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (Handcrafted stone & rice husk suites) and direct arterial access to FLC Halong Bay Golf Club.
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, Legacy Yen Tu - MGallery minimizes daily transit friction across the Uong Bi corridor while elevating off-course recovery through am tuệ tĩnh wellness center, cultural architecture, mountain views and post-round recovery & wellness (Am Tu Spa traditional herbal healing). Every AGS itinerary anchored at Legacy Yen Tu - MGallery includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights Legacy Yen Tu - MGallery&apos;s breakfast & dining quality (Royal Tran dynasty imperial dining), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Legacy Yen Tu - MGallery"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/legacy-yen-tu-m-gallery/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/legacy-yen-tu-m-gallery/legacy-yen-tu-m-gallery-aerial.webp"
    addressLocality="Uong Bi"
    addressCountry="VN"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="13th-Century Sacred Mountain Sanctuary • Uong Bi"
    inspectionDate="Site-Verified by AGS On-Ground Team"
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.8,
            highlight: "Handcrafted stone & rice husk suites"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.9,
            highlight: "Sacred mountain valley isolation"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.8,
            highlight: "Am Tu Spa traditional herbal healing"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.6,
            highlight: "Royal Tran dynasty imperial dining"
      }
]}
    verdict="Designed by Bill Bensley to recreate a 13th-century Tran Dynasty monastery in the sacred Yen Tu mountains. An unforgettable spiritual retreat when pairing Northern golf courses."
  />


            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is Legacy Yen Tu - MGallery to the nearest championship golf courses in Uong Bi?","acceptedAnswer":{"@type":"Answer","text":"Legacy Yen Tu - MGallery is positioned in Uong Bi, Vietnam, offering direct private transfer access to FLC Halong Bay Golf Club. Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at Legacy Yen Tu - MGallery?","acceptedAnswer":{"@type":"Answer","text":"Legacy Yen Tu - MGallery features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does Legacy Yen Tu - MGallery offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at Legacy Yen Tu - MGallery enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Am Tu Spa traditional herbal healing) and breakfast & dining quality (Royal Tran dynasty imperial dining)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at Legacy Yen Tu - MGallery?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Legacy Yen Tu - MGallery as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is Legacy Yen Tu - MGallery to the nearest championship golf courses in Uong Bi?",
                    "a": "Legacy Yen Tu - MGallery is positioned in Uong Bi, Vietnam, offering direct private transfer access to FLC Halong Bay Golf Club. Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at Legacy Yen Tu - MGallery?",
                    "a": "Legacy Yen Tu - MGallery features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does Legacy Yen Tu - MGallery offer?",
                    "a": "Guests at Legacy Yen Tu - MGallery enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Am Tu Spa traditional herbal healing) and breakfast & dining quality (Royal Tran dynasty imperial dining)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at Legacy Yen Tu - MGallery?",
                    "a": "Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Legacy Yen Tu - MGallery as part of a complete stay-and-play golf package."
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

            <VenueItineraries venueHref="/accommodations/vietnam/legacy-yen-tu-m-gallery/" venueName="Legacy Yen Tu - MGallery" venueType="accommodation" />

</main>
 );
}
