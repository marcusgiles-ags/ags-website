import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Silk Path Dong Trieu Golf & Villas | Vietnam" },
 description: "A luxurious new addition to Vietnam's golfing landscape, offering exclusive villa accommodations directly adjacent to a Sir Nick Faldo signature course.",
 keywords: ["Silk Path Dong Trieu Golf & Villas","Quang Ninh golf resort","Halong Bay luxury golf","Vietnam golf villa"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/silk-path-dong-trieu/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Silk Path Dong Trieu Golf & Villas | Vietnam" },
        description: "A luxurious new addition to Vietnam's golfing landscape, offering exclusive villa accommodations directly adjacent to a Sir Nick Faldo signature course.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/silk-path-dong-trieu/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-sunset-hero.webp",
            width: 1200,
            height: 630,
            alt: "Silk Path Dong Trieu Golf & Villas | Quang Ninh, Vietnam | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Silk Path Dong Trieu Golf & Villas | Vietnam" },
        description: "A luxurious new addition to Vietnam's golfing landscape, offering exclusive villa accommodations directly adjacent to a Sir Nick Faldo signature course.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-sunset-hero.webp"],
    },
};

const images = [
 { src: "/images/accommodations/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-sunset-hero.webp", alt: "Silk Path Dong Trieu - Hero View - Premium Southeast Asia Golf Tours", caption: "Silk Path Dong Trieu Sunset" },
 { src: "/images/accommodations/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-villa-bedroom.webp", alt: "Silk Path Dong Trieu - Bedroom - Premium Southeast Asia Golf Tours", caption: "Luxury Villa Bedroom" },
 { src: "/images/accommodations/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-villa-dining.webp", alt: "Silk Path Dong Trieu - Dining - Premium Southeast Asia Golf Tours", caption: "Villa Dining Area" },
 { src: "/images/accommodations/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-villa-lobby.webp", alt: "Silk Path Dong Trieu - Lobby - Premium Southeast Asia Golf Tours", caption: "Resort Lobby" },
 { src: "/images/accommodations/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-villa-outdoor-bbq.webp", alt: "Silk Path Dong Trieu - Outdoor BBQ - Premium Southeast Asia Golf Tours", caption: "Outdoor BBQ Experience" },
 { src: "/images/accommodations/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-villa-pool.webp", alt: "Silk Path Dong Trieu - Villa Pool - Premium Southeast Asia Golf Tours", caption: "Private Villa Pool" }
];

export default function AccommodationPage() {
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
 <h1 style={{ marginBottom: '1rem' }}>Silk Path Dong Trieu Golf & Villas</h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"A luxurious new addition to Vietnam's golfing landscape, offering exclusive villa accommodations directly adjacent to a Sir Nick Faldo signature course."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
  <tr key="Category"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Category</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Golf & Villa Resort</td></tr>
  <tr key="Star Rating"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Star Rating</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>5 Star</td></tr>
  <tr key="Location"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Location</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Dong Trieu, Quang Ninh</td></tr>
  <tr key="Total Rooms"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Total Rooms</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Private Luxury Villas</td></tr>
  <tr key="Setting"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Setting</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Tranquil countryside, near Halong Bay</td></tr>
  <tr key="Nearest Golf"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Nearest Golf</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Silk Path Dong Trieu Golf Club (On-site)</td></tr>
  <tr key="Key Amenity"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Key Amenity</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Private Villa Pools, In-Villa BBQ, On-site Golf</td></tr>
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
  <p>Silk Path Dong Trieu Golf & Villas sets a new standard for luxury in Northern Vietnam's rapidly expanding golf circuit. Designed for ultimate privacy and group cohesion, the resort's premium villas serve as the perfect high-end basecamp. With elegant dining spaces, private pools, and optional in-villa BBQ experiences, it offers an exclusive retreat after a day on the links.</p>
  <p>The crown jewel of the property is the on-site Sir Nick Faldo Signature golf course, presenting a world-class test of golf seamlessly integrated into the stunning natural topography of Quang Ninh. The convenience of stepping out of your private villa and directly onto a championship course is unmatched.</p>
  <p>AGS recommends Silk Path Dong Trieu for discerning golfing groups and families who value space, privacy, and immediate access to elite golf. Its strategic location makes it an essential stop on any premium Northern Vietnam itinerary, perfectly complementing the nearby coastal courses of Halong Bay.</p>
 </div>
 </div>
 </div>
 </section>
  <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/vietnam/silk-path-dong-trieu/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from Silk Path Dong Trieu to the golf circuit.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Silk Path Dong Trieu Golf & Villas",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Dong Trieu", "addressRegion": "Quang Ninh", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/silk-path-dong-trieu/",
                          "sameAs": ["https://dongtrieu.silkpathhotel.com/","https://www.booking.com/hotel/vn/silk-path-dong-trieu-golf-villas.en-gb.html","https://www.agoda.com/silk-path-dong-trieu-golf-villas/hotel/quang-ninh-vn.html","https://www.tripadvisor.com/Hotel_Review-g16094622-d23287311-Reviews-Silk_Path_Dong_Trieu_Golf_Villas-Dong_Trieu_Quang_Ninh_Province.html"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Silk Path Dong Trieu Golf & Villas", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/silk-path-dong-trieu/" }
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
                            <strong>Silk Path Dong Trieu Golf & Villas</strong> operates as a premier <strong>5 Star</strong> golf & villa resort positioned in Dong Trieu, Vietnam. Featuring an architectural inventory of private luxury villas, the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (Modern fairway-fronting villas) and direct arterial access to Silk Path Dong Trieu Golf Club (On-site).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, Silk Path Dong Trieu Golf & Villas minimizes daily transit friction across the Dong Trieu corridor while elevating off-course recovery through private villa pools, in-villa bbq, on-site golf and post-round recovery & wellness (Immediate doorstep access to 27 holes). Every AGS itinerary anchored at Silk Path Dong Trieu Golf & Villas includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights Silk Path Dong Trieu Golf & Villas&apos;s breakfast & dining quality (Fresh regional Quang Ninh dining), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Silk Path Dong Trieu Golf & Villas"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/silk-path-dong-trieu/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-sunset-hero.webp"
    addressLocality="Dong Trieu"
    addressCountry="VN"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Golf Course Villa Resort • Quang Ninh"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.6,
            highlight: "Modern fairway-fronting villas"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.7,
            highlight: "Quiet countryside golf setting"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.6,
            highlight: "Immediate doorstep access to 27 holes"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.4,
            highlight: "Fresh regional Quang Ninh dining"
      }
]}
    verdict="Purpose-built for avid golfers visiting Quang Ninh. Step directly from your luxury villa onto the fairways of Silk Path Dong Trieu, backed by pristine lake views and peaceful countryside."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is Silk Path Dong Trieu Golf & Villas to the nearest championship golf courses in Dong Trieu?","acceptedAnswer":{"@type":"Answer","text":"Silk Path Dong Trieu Golf & Villas is positioned in Dong Trieu, Vietnam, offering direct private transfer access to Silk Path Dong Trieu Golf Club (On-site). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at Silk Path Dong Trieu Golf & Villas?","acceptedAnswer":{"@type":"Answer","text":"Silk Path Dong Trieu Golf & Villas features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does Silk Path Dong Trieu Golf & Villas offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at Silk Path Dong Trieu Golf & Villas enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Immediate doorstep access to 27 holes) and breakfast & dining quality (Fresh regional Quang Ninh dining)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at Silk Path Dong Trieu Golf & Villas?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Silk Path Dong Trieu Golf & Villas as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is Silk Path Dong Trieu Golf & Villas to the nearest championship golf courses in Dong Trieu?",
                    "a": "Silk Path Dong Trieu Golf & Villas is positioned in Dong Trieu, Vietnam, offering direct private transfer access to Silk Path Dong Trieu Golf Club (On-site). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at Silk Path Dong Trieu Golf & Villas?",
                    "a": "Silk Path Dong Trieu Golf & Villas features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does Silk Path Dong Trieu Golf & Villas offer?",
                    "a": "Guests at Silk Path Dong Trieu Golf & Villas enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Immediate doorstep access to 27 holes) and breakfast & dining quality (Fresh regional Quang Ninh dining)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at Silk Path Dong Trieu Golf & Villas?",
                    "a": "Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Silk Path Dong Trieu Golf & Villas as part of a complete stay-and-play golf package."
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

            <VenueItineraries venueHref="/accommodations/vietnam/silk-path-dong-trieu/" venueName="Silk Path Dong Trieu Golf & Villas" venueType="accommodation" />

</main>
 );
}
