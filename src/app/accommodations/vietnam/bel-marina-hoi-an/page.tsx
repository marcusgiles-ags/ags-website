import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Bel Marina Hoi An Resort | Vietnam" },
 description: "A luxurious 4-star riverside resort nestled along the Thu Bon River, providing an idyllic sanctuary for golfers visiting the central coast of Vietnam.",
 keywords: ["Bel Marina Hoi An Resort","Hoi An luxury hotel golf","Central Vietnam luxury resort","Hoi An golf accommodation", "riverside resort Hoi An"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/bel-marina-hoi-an/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Bel Marina Hoi An Resort | Vietnam" },
        description: "A luxurious 4-star riverside resort nestled along the Thu Bon River, providing an idyllic sanctuary for golfers visiting the central coast of Vietnam.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/bel-marina-hoi-an/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/bel-marina-hoi-an/vietnam-luxury-hotel-hero-bel-marina-hoi-an-riverside-pool.webp",
            width: 1200,
            height: 630,
            alt: "Bel Marina Hoi An Resort | Hoi An, Vietnam | Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Bel Marina Hoi An Resort | Vietnam" },
        description: "A luxurious 4-star riverside resort nestled along the Thu Bon River, providing an idyllic sanctuary for golfers visiting the central coast of Vietnam.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/bel-marina-hoi-an/vietnam-luxury-hotel-hero-bel-marina-hoi-an-riverside-pool.webp"],
    },
};

const images = [
  { src: "/images/accommodations/vietnam/bel-marina-hoi-an/vietnam-luxury-hotel-hero-bel-marina-hoi-an-riverside-pool.webp", alt: "Bel Marina Hoi An - Riverside pool", caption: "Riverside pool" },
  { src: "/images/accommodations/vietnam/bel-marina-hoi-an/vietnam-luxury-hotel-bel-marina-hoi-an-bathroom-layout.webp", alt: "Bel Marina Hoi An - Bathroom layout", caption: "Bathroom layout" },
  { src: "/images/accommodations/vietnam/bel-marina-hoi-an/vietnam-luxury-hotel-bel-marina-hoi-an-bedroom-interior.webp", alt: "Bel Marina Hoi An - Bedroom interior", caption: "Bedroom interior" },
  { src: "/images/accommodations/vietnam/bel-marina-hoi-an/vietnam-luxury-hotel-bel-marina-hoi-an-impeccable-room-service.webp", alt: "Bel Marina Hoi An - Impeccable room service", caption: "Impeccable room service" },
  { src: "/images/accommodations/vietnam/bel-marina-hoi-an/vietnam-luxury-hotel-bel-marina-hoi-an-luxurious-bathtub.webp", alt: "Bel Marina Hoi An - Luxurious bathtub", caption: "Luxurious bathtub" },
  { src: "/images/accommodations/vietnam/bel-marina-hoi-an/vietnam-luxury-hotel-bel-marina-hoi-an-pool-villa.webp", alt: "Bel Marina Hoi An - Pool villa", caption: "Pool villa" },
  { src: "/images/accommodations/vietnam/bel-marina-hoi-an/vietnam-luxury-hotel-bel-marina-hoi-an-suite-interior.webp", alt: "Bel Marina Hoi An - Suite interior", caption: "Suite interior" },
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
 <h1 style={{ marginBottom: '1rem' }}>Bel Marina Hoi An Resort</h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"A luxurious 4-star riverside resort nestled along the Thu Bon River, providing an idyllic sanctuary for golfers visiting the central coast of Vietnam."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
  <tr key="Category"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Category</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Luxury Riverside Resort</td></tr>
  <tr key="Star Rating"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Star Rating</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>4 Star</td></tr>
  <tr key="Location"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Location</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Thu Bon River, Hoi An</td></tr>
  <tr key="Total Rooms"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Total Rooms</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>112 Rooms & Villas</td></tr>
  <tr key="Setting"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Setting</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Riverside overlooking the Thu Bon River</td></tr>
  <tr key="Nearest Golf"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Nearest Golf</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Hoiana Shores (25 min), Montgomerie Links (25 min)</td></tr>
  <tr key="Key Amenity"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Key Amenity</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Riverside Infinity Pool, Marina Wellness & Spa, Sky Lounge</td></tr>
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
  <p>Bel Marina Hoi An Resort presents a masterful blend of modern luxury and heritage charm, perfectly situated on the banks of the Thu Bon River. Just a short stroll from the ancient town, the resort offers an oasis of tranquility with breathtaking sunset views over the water.</p>
  <p>For golfers exploring the Central Coast corridor, Bel Marina serves as an exemplary recovery base. After navigating the links at Hoiana Shores or Montgomerie Links, guests return to an expansive infinity pool that seems to flow directly into the river. The juxtaposition of intense golfing challenges with serene riverside relaxation creates the ultimate balanced itinerary.</p>
  <p>The resort’s commitment to premium comfort is evident in its spacious rooms and villas, while the Marina Wellness & Spa provides specialized treatments to rejuvenate tired muscles. Evenings are best spent at the Sky Lounge or experiencing the vibrant lantern-lit streets of Hoi An, accessible in mere minutes.</p>
 </div>
 </div>
 </div>
 </section>
  <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/vietnam/bel-marina-hoi-an/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from Bel Marina Hoi An Resort to the golf circuit.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Bel Marina Hoi An Resort",
                            "starRating": { "@type": "Rating", "ratingValue": "4" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Hoi An", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/bel-marina-hoi-an/",
                          "sameAs": ["https://belmarinahoian.com/","https://www.booking.com/hotel/vn/bel-marina-hoi-an-resort.html","https://www.tripadvisor.com/Hotel_Review-g298082-d12836203-Reviews-Bel_Marina_Hoi_An_Resort-Hoi_An_Quang_Nam_Province.html"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Bel Marina Hoi An Resort", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/bel-marina-hoi-an/" }
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
                            <strong>Bel Marina Hoi An Resort</strong> operates as a premier <strong>5 Star</strong> luxury riverside resort positioned in Hoi An, Vietnam. Featuring an architectural inventory of 112 rooms & villas, the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (Contemporary riverside suites) and direct arterial access to Hoiana Shores (25 min), Montgomerie Links (25 min).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, Bel Marina Hoi An Resort minimizes daily transit friction across the Hoi An corridor while elevating off-course recovery through riverside infinity pool, marina wellness & spa, sky lounge and post-round recovery & wellness (Expansive riverfront infinity pool). Every AGS itinerary anchored at Bel Marina Hoi An Resort includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights Bel Marina Hoi An Resort&apos;s breakfast & dining quality (Extensive buffet & riverview bar), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Bel Marina Hoi An Resort"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/bel-marina-hoi-an/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/bel-marina-hoi-an/vietnam-luxury-hotel-hero-bel-marina-hoi-an-riverside-pool.webp"
    addressLocality="Hoi An"
    addressCountry="VN"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Boutique River Resort • Hoi An"
    inspectionDate="Site-Verified by AGS On-Ground Team"
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.5,
            highlight: "Contemporary riverside suites"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.5,
            highlight: "Quiet river bend positioning"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.6,
            highlight: "Expansive riverfront infinity pool"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.4,
            highlight: "Extensive buffet & riverview bar"
      }
]}
    verdict="A vibrant luxury river resort located just across the footbridge from Hoi An's historic lantern quarter. Features one of the largest infinity pools in the region for post-round downtime."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is Bel Marina Hoi An Resort to the nearest championship golf courses in Hoi An?","acceptedAnswer":{"@type":"Answer","text":"Bel Marina Hoi An Resort is positioned in Hoi An, Vietnam, offering direct private transfer access to Hoiana Shores (25 min), Montgomerie Links (25 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at Bel Marina Hoi An Resort?","acceptedAnswer":{"@type":"Answer","text":"Bel Marina Hoi An Resort features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does Bel Marina Hoi An Resort offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at Bel Marina Hoi An Resort enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Expansive riverfront infinity pool) and breakfast & dining quality (Extensive buffet & riverview bar)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at Bel Marina Hoi An Resort?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Bel Marina Hoi An Resort as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is Bel Marina Hoi An Resort to the nearest championship golf courses in Hoi An?",
                    "a": "Bel Marina Hoi An Resort is positioned in Hoi An, Vietnam, offering direct private transfer access to Hoiana Shores (25 min), Montgomerie Links (25 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at Bel Marina Hoi An Resort?",
                    "a": "Bel Marina Hoi An Resort features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does Bel Marina Hoi An Resort offer?",
                    "a": "Guests at Bel Marina Hoi An Resort enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Expansive riverfront infinity pool) and breakfast & dining quality (Extensive buffet & riverview bar)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at Bel Marina Hoi An Resort?",
                    "a": "Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Bel Marina Hoi An Resort as part of a complete stay-and-play golf package."
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

            <VenueItineraries venueHref="/accommodations/vietnam/bel-marina-hoi-an/" venueName="Bel Marina Hoi An Resort" venueType="accommodation" />

</main>
 );
}
