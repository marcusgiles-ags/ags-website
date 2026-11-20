import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "FLC Halong Bay Golf Resort | Vietnam" },
 description: "A spectacular luxury resort offering panoramic views of the UNESCO World Heritage Site, Halong Bay, featuring an on-site championship golf course.",
 keywords: ["FLC Halong Bay Golf Resort","Halong Bay luxury hotel golf","Northern Vietnam golf resort","Halong Bay golf accommodation"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/flc-halong-bay/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "FLC Halong Bay Golf Resort | Vietnam" },
        description: "A spectacular luxury resort offering panoramic views of the UNESCO World Heritage Site, Halong Bay, featuring an on-site championship golf course.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/flc-halong-bay/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/flc-halong-bay/flc-ha-long-bay-golf-club-luxury-resort-hero.webp",
            width: 1200,
            height: 630,
            alt: "FLC Halong Bay Golf Resort | Halong Bay, Vietnam | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "FLC Halong Bay Golf Resort | Vietnam" },
        description: "A spectacular luxury resort offering panoramic views of the UNESCO World Heritage Site, Halong Bay, featuring an on-site championship golf course.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/flc-halong-bay/flc-ha-long-bay-golf-club-luxury-resort-hero.webp"],
    },
};

const images = [
 { src: "/images/accommodations/vietnam/flc-halong-bay/flc-ha-long-bay-golf-club-luxury-resort-hero.webp", alt: "FLC Halong Bay Golf Resort - Hero View - Premium Southeast Asia Golf Tours", caption: "FLC Halong Bay Golf Resort Panoramic View" },
 { src: "/images/accommodations/vietnam/flc-halong-bay/flc-ha-long-bay-resort-room.webp", alt: "FLC Halong Bay Golf Resort - Room - Premium Southeast Asia Golf Tours", caption: "FLC Halong Bay Golf Resort Room" },
 { src: "/images/accommodations/vietnam/flc-halong-bay/flc-ha-long-bay-resort-pool.webp", alt: "FLC Halong Bay Golf Resort - Pool - Premium Southeast Asia Golf Tours", caption: "FLC Halong Bay Golf Resort Pool" },
 { src: "/images/accommodations/vietnam/flc-halong-bay/flc-ha-long-bay-golf-club.webp", alt: "FLC Halong Bay Golf Club - Premium Southeast Asia Golf Tours", caption: "FLC Halong Bay Golf Club" },
 { src: "/images/accommodations/vietnam/flc-halong-bay/flc-ha-long-bay-course.webp", alt: "FLC Halong Bay Golf Course - Premium Southeast Asia Golf Tours", caption: "FLC Halong Bay Golf Course" }
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
 <h1 style={{ marginBottom: '1rem' }}>FLC Halong Bay Golf Resort</h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"A spectacular luxury resort offering panoramic views of the UNESCO World Heritage Site, Halong Bay, featuring an on-site championship golf course."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
  <tr key="Category"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Category</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Golf Resort</td></tr>
  <tr key="Star Rating"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Star Rating</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>5 Star</td></tr>
  <tr key="Location"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Location</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Ha Long City, Quang Ninh</td></tr>
  <tr key="Total Rooms"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Total Rooms</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>649 Rooms & Villas</td></tr>
  <tr key="Setting"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Setting</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Hilltop overlooking Halong Bay</td></tr>
  <tr key="Nearest Golf"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Nearest Golf</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>FLC Ha Long Bay Golf Club (On-site)</td></tr>
  <tr key="Key Amenity"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Key Amenity</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>On-site Golf, Infinity Pool, Grand Spa</td></tr>
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
  <p>Perched high on Van Nghe Hill, FLC Halong Bay Golf Resort delivers one of the most breathtaking vistas in all of Asia. From almost every vantage point in the resort, guests are treated to unobstructed, panoramic views of Halong Bay's iconic limestone karsts rising majestically from the emerald waters.</p>
  <p>For golfers, the primary draw is the phenomenal on-site Schmidt-Curley designed 18-hole championship course. Winding through the mountainous terrain above the bay, it offers a dramatic and highly photogenic round. Being able to wake up, enjoy a world-class breakfast, and step directly onto the first tee with Halong Bay as your backdrop is an unparalleled luxury.</p>
  <p>AGS recommends FLC Halong Bay for discerning groups seeking an awe-inspiring Northern Vietnam golf experience. Beyond the fairways, the resort features a stunning infinity pool, exquisite dining options, and the lavish Grand Spa, ensuring complete rejuvenation after a challenging round.</p>
 </div>
 </div>
 </div>
 </section>
  <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/vietnam/flc-halong-bay/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from FLC Halong Bay Golf Resort to the golf circuit.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "FLC Halong Bay Golf Resort",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Ha Long City", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/flc-halong-bay/",
                          "sameAs": ["https://flchalong.com.vn/en/","https://www.booking.com/hotel/vn/flc-grand-hotel-halong.html","https://www.tripadvisor.com/Hotel_Review-g293924-d13385750-Reviews-FLC_Grand_Hotel_Halong-Halong_Bay_Quang_Ninh_Province.html"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "FLC Halong Bay Golf Resort", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/flc-halong-bay/" }
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
                            <strong>FLC Grand Hotel Ha Long</strong> operates as a premier <strong>5 Star</strong> golf resort positioned in Ha Long, Vietnam. Featuring an architectural inventory of 649 rooms & villas, the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (Panoramic bayview balconies) and direct arterial access to FLC Ha Long Bay Golf Club (On-site).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, FLC Grand Hotel Ha Long minimizes daily transit friction across the Ha Long corridor while elevating off-course recovery through on-site golf, infinity pool, grand spa and post-round recovery & wellness (Direct golf access, indoor & outdoor pools). Every AGS itinerary anchored at FLC Grand Hotel Ha Long includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights FLC Grand Hotel Ha Long&apos;s breakfast & dining quality (Grand buffet & rooftop sky lounge), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="FLC Grand Hotel Ha Long"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/flc-halong-bay/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/flc-halong-bay/flc-ha-long-bay-golf-club-luxury-resort-hero.webp"
    addressLocality="Ha Long"
    addressCountry="VN"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Clifftop UNESCO Resort • Ha Long"
    inspectionDate="Site-Verified by AGS On-Ground Team"
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.7,
            highlight: "Panoramic bayview balconies"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.6,
            highlight: "Hilltop position above city bustle"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.5,
            highlight: "Direct golf access, indoor & outdoor pools"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.4,
            highlight: "Grand buffet & rooftop sky lounge"
      }
]}
    verdict="Commanding panoramic views 100 meters above Ha Long Bay. Offers seamless elevator-to-first-tee logistics for FLC Ha Long Bay Golf Club and palatial convention-grade comfort."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is FLC Grand Hotel Ha Long to the nearest championship golf courses in Ha Long?","acceptedAnswer":{"@type":"Answer","text":"FLC Grand Hotel Ha Long is positioned in Ha Long, Vietnam, offering direct private transfer access to FLC Ha Long Bay Golf Club (On-site). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at FLC Grand Hotel Ha Long?","acceptedAnswer":{"@type":"Answer","text":"FLC Grand Hotel Ha Long features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does FLC Grand Hotel Ha Long offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at FLC Grand Hotel Ha Long enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Direct golf access, indoor & outdoor pools) and breakfast & dining quality (Grand buffet & rooftop sky lounge)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at FLC Grand Hotel Ha Long?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at FLC Grand Hotel Ha Long as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is FLC Grand Hotel Ha Long to the nearest championship golf courses in Ha Long?",
                    "a": "FLC Grand Hotel Ha Long is positioned in Ha Long, Vietnam, offering direct private transfer access to FLC Ha Long Bay Golf Club (On-site). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at FLC Grand Hotel Ha Long?",
                    "a": "FLC Grand Hotel Ha Long features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does FLC Grand Hotel Ha Long offer?",
                    "a": "Guests at FLC Grand Hotel Ha Long enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Direct golf access, indoor & outdoor pools) and breakfast & dining quality (Grand buffet & rooftop sky lounge)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at FLC Grand Hotel Ha Long?",
                    "a": "Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at FLC Grand Hotel Ha Long as part of a complete stay-and-play golf package."
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

            <VenueItineraries venueHref="/accommodations/vietnam/flc-halong-bay/" venueName="FLC Grand Hotel Ha Long" venueType="accommodation" />

</main>
 );
}
