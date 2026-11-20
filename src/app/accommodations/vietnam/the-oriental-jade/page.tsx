import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "The Oriental Jade Hotel | Hanoi, Vietnam" },
 description: "The Oriental Jade Hotel Hanoi — 5-star boutique luxury in the Old Quarter with Hoan Kiem Lake views and seamless access to northern Vietnam's golf courses.",
 keywords: ["The Oriental Jade Hotel Hanoi","Hanoi Old Quarter luxury hotel","Hoan Kiem Lake accommodation golf","Northern Vietnam golf hotel"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/the-oriental-jade/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "The Oriental Jade Hotel | Hanoi, Vietnam" },
        description: "The Oriental Jade Hotel Hanoi — 5-star boutique luxury in the Old Quarter with Hoan Kiem Lake views and seamless access to northern Vietnam's golf courses.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/the-oriental-jade/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/the-oriental-jade/1.webp",
            width: 1200,
            height: 630,
            alt: "The Oriental Jade Hotel | Hanoi, Vietnam | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "The Oriental Jade Hotel | Hanoi, Vietnam" },
        description: "The Oriental Jade Hotel Hanoi — 5-star boutique luxury in the Old Quarter with Hoan Kiem Lake views and seamless access to northern Vietnam's golf courses.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/the-oriental-jade/1.webp"],
    },
};

const images = [
 { src: "/images/accommodations/vietnam/the-oriental-jade/1.webp", alt: "The Oriental Jade - Oriental Jade Hotel - Premium Southeast Asia Golf Tours", caption: "The Oriental Jade Oriental Jade Hotel" },
 { src: "/images/accommodations/vietnam/the-oriental-jade/2.webp", alt: "The Oriental Jade - Oriental Jade Hotel - Premium Southeast Asia Golf Tours", caption: "The Oriental Jade Oriental Jade Hotel" },
 { src: "/images/accommodations/vietnam/the-oriental-jade/3.webp", alt: "The Oriental Jade - Oriental Jade Hotel - Premium Southeast Asia Golf Tours", caption: "The Oriental Jade Oriental Jade Hotel" },
 { src: "/images/accommodations/vietnam/the-oriental-jade/4.webp", alt: "The Oriental Jade - Oriental Jade Hotel - Premium Southeast Asia Golf Tours", caption: "The Oriental Jade Oriental Jade Hotel" },
 { src: "/images/accommodations/vietnam/the-oriental-jade/5.webp", alt: "The Oriental Jade - Oriental Jade Hotel - Premium Southeast Asia Golf Tours", caption: "The Oriental Jade Oriental Jade Hotel" }
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
 <h1 style={{ marginBottom: '1rem' }}>The Oriental Jade Hotel</h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"An exquisite luxury boutique hotel in Hanoi's Old Quarter, offering panoramic views of Hoan Kiem Lake and perfect access to northern Vietnam golf."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
  <tr key="Category"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Category</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Luxury Boutique Hotel</td></tr>
  <tr key="Star Rating"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Star Rating</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>5 Star</td></tr>
  <tr key="Location"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Location</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Hang Trong, Hoan Kiem, Hanoi</td></tr>
  <tr key="Total Rooms"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Total Rooms</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>120 Rooms & Suites</td></tr>
  <tr key="Setting"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Setting</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Overlooking Hoan Kiem Lake, Old Quarter</td></tr>
  <tr key="Nearest Golf"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Nearest Golf</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>BRG Kings Island (60 min), Sky Lake (60 min)</td></tr>
  <tr key="Key Amenity"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Key Amenity</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>O'Spa Lotus, Rooftop Pool, Thang Long Signature Restaurant</td></tr>
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
  <p>The Oriental Jade Hotel commands one of the most envied locations in Hanoi, perched on the edge of the historic Old Quarter with sweeping views over the iconic Hoan Kiem Lake. This boutique property delivers opulent, Indochine-inspired design, pairing classic elegance with modern luxury in a highly atmospheric setting.</p>
  <p>Serving as an exceptional hub for Northern Vietnam golf, the hotel allows players to easily venture out to premium championship courses like BRG Kings Island and Sky Lake Resort. The vibrant energy of Hanoi is waiting right outside the doors upon your return, with the city's finest dining and cultural sites mere steps away.</p>
  <p>AGS designates The Oriental Jade for discerning travelers who want to experience the true pulse of Hanoi without sacrificing 5-star comfort. The rooftop pool and bar provide a spectacular vantage point for an evening drink, celebrating a day of challenging golf in the northern hills.</p>
 </div>
 </div>
 </div>
 </section>
  <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/vietnam/the-oriental-jade/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from The Oriental Jade Hotel to the golf circuit.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "The Oriental Jade Hotel",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Hanoi", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/the-oriental-jade/",
                          "sameAs": ["https://orientaljadehotel.com/","https://www.forbestravelguide.com/hotels/hanoi-vietnam/the-oriental-jade-hotel","https://guide.michelin.com/en/hotels-stays/hanoi/the-oriental-jade-hotel-hanoi-1207997","https://www.cntraveler.com/hotels/hanoi/the-oriental-jade-hotel"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "The Oriental Jade Hotel", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/the-oriental-jade/" }
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
                            <strong>The Oriental Jade Hotel</strong> operates as a premier <strong>5 Star</strong> luxury boutique hotel positioned in Hanoi, Vietnam. Featuring an architectural inventory of 120 rooms & suites, the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (Elegant neoclassical suites) and direct arterial access to BRG Kings Island (60 min), Sky Lake (60 min).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, The Oriental Jade Hotel minimizes daily transit friction across the Hanoi corridor while elevating off-course recovery through o'spa lotus, rooftop pool, thang long signature restaurant and post-round recovery & wellness (Rooftop pool overlooking Hoan Kiem). Every AGS itinerary anchored at The Oriental Jade Hotel includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights The Oriental Jade Hotel&apos;s breakfast & dining quality (Thang Long signature breakfast & sky bar), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="The Oriental Jade Hotel"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/the-oriental-jade/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/the-oriental-jade/1.webp"
    addressLocality="Hanoi"
    addressCountry="VN"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Boutique Old Quarter Luxury • Hanoi"
    inspectionDate="Site-Verified by AGS On-Ground Team"
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.6,
            highlight: "Elegant neoclassical suites"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.5,
            highlight: "Quiet lake-view rooms in Old Quarter"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.6,
            highlight: "Rooftop pool overlooking Hoan Kiem"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.5,
            highlight: "Thang Long signature breakfast & sky bar"
      }
]}
    verdict="A refined boutique gem on Hang Trong street, steps from Hoan Kiem Lake. Exceptional rooftop pool views across the Old Quarter and personalized concierge service."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is The Oriental Jade Hotel to the nearest championship golf courses in Hanoi?","acceptedAnswer":{"@type":"Answer","text":"The Oriental Jade Hotel is positioned in Hanoi, Vietnam, offering direct private transfer access to BRG Kings Island (60 min), Sky Lake (60 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at The Oriental Jade Hotel?","acceptedAnswer":{"@type":"Answer","text":"The Oriental Jade Hotel features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does The Oriental Jade Hotel offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at The Oriental Jade Hotel enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Rooftop pool overlooking Hoan Kiem) and breakfast & dining quality (Thang Long signature breakfast & sky bar)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at The Oriental Jade Hotel?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at The Oriental Jade Hotel as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is The Oriental Jade Hotel to the nearest championship golf courses in Hanoi?",
                    "a": "The Oriental Jade Hotel is positioned in Hanoi, Vietnam, offering direct private transfer access to BRG Kings Island (60 min), Sky Lake (60 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at The Oriental Jade Hotel?",
                    "a": "The Oriental Jade Hotel features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does The Oriental Jade Hotel offer?",
                    "a": "Guests at The Oriental Jade Hotel enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Rooftop pool overlooking Hoan Kiem) and breakfast & dining quality (Thang Long signature breakfast & sky bar)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at The Oriental Jade Hotel?",
                    "a": "Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at The Oriental Jade Hotel as part of a complete stay-and-play golf package."
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

            <VenueItineraries venueHref="/accommodations/vietnam/the-oriental-jade/" venueName="The Oriental Jade Hotel" venueType="accommodation" />

</main>
 );
}
