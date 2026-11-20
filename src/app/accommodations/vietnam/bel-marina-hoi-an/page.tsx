import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
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
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Sitting directly on the Thu Bon River just across the pedestrian bridge from Hoi An&apos;s lantern quarter, Bel Marina Hoi An Resort offers 112 contemporary rooms and riverside villas at an approachable 4-star-plus price point. On our site inspections, its standout feature for active touring groups is its sprawling riverfront infinity pool and open sky lounge — giving golfers room to spread out after coastal heat.</p>
                        <p style={{ marginBottom: '1rem' }}>From Bel Marina, private AGS transfers reach Hoiana Shores Golf Club and Montgomerie Links in about 25 minutes each way, with BRG Da Nang slightly further north at 30 minutes. It works particularly well for 4-to-12-player buddy groups who prefer spending their budget on premier tee times and great local dining rather than ultra-luxury villa rates.</p>
                        <p>Evenings are effortless: stroll across the bridge into Hoi An&apos;s Old Town markets and riverside pubs in five minutes, or book a post-round sports massage at Marina Wellness &amp; Spa before sunset cocktails overlooking the river.</p>
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
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is Bel Marina Hoi An Resort to Hoi An Ancient Town and local nightlife?","acceptedAnswer":{"@type":"Answer","text":"Bel Marina sits roughly a 5-minute flat walk from the western edge of Hoi An Ancient Town and An Hoi Night Market, making it one of the most convenient resorts for groups wanting lively dining and bars on foot."}},{"@type":"Question","name":"Which room types at Bel Marina work best for buddy golf trips?","acceptedAnswer":{"@type":"Answer","text":"Deluxe Twin Riverview Rooms and Marina Suites offer generous floor space for golf travel bags and easy twin bedding, while 8-player groups can request adjacent rooms on the same wing through AGS."}},{"@type":"Question","name":"What are the transfer times from Bel Marina Hoi An to Central Vietnam golf clubs?","acceptedAnswer":{"@type":"Answer","text":"Hoiana Shores Golf Club and Montgomerie Links are each around 25 minutes by AGS luxury private touring vehicle, BRG Da Nang is 30 minutes, and Ba Na Hills Golf Club is roughly 55 minutes."}},{"@type":"Question","name":"Does Bel Marina have room for large golf groups checking in with hard travel cases?","acceptedAnswer":{"@type":"Answer","text":"Yes. The resort lobby has wide curbside coach and touring-vehicle access plus dedicated luggage storage, so AGS groups move straight from airport arrival or golf drop-off into their rooms without bottlenecks."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "How close is Bel Marina Hoi An Resort to Hoi An Ancient Town and local nightlife?",
    "a": "Bel Marina sits roughly a 5-minute flat walk from the western edge of Hoi An Ancient Town and An Hoi Night Market, making it one of the most convenient resorts for groups wanting lively dining and bars on foot."
  },
  {
    "q": "Which room types at Bel Marina work best for buddy golf trips?",
    "a": "Deluxe Twin Riverview Rooms and Marina Suites offer generous floor space for golf travel bags and easy twin bedding, while 8-player groups can request adjacent rooms on the same wing through AGS."
  },
  {
    "q": "What are the transfer times from Bel Marina Hoi An to Central Vietnam golf clubs?",
    "a": "Hoiana Shores Golf Club and Montgomerie Links are each around 25 minutes by AGS luxury private touring vehicle, BRG Da Nang is 30 minutes, and Ba Na Hills Golf Club is roughly 55 minutes."
  },
  {
    "q": "Does Bel Marina have room for large golf groups checking in with hard travel cases?",
    "a": "Yes. The resort lobby has wide curbside coach and touring-vehicle access plus dedicated luggage storage, so AGS groups move straight from airport arrival or golf drop-off into their rooms without bottlenecks."
  }
]).map((faq, i) => (
                            <details key={i} style={{ borderBottom: "1px solid rgba(212,175,55,0.12)", padding: "1.5rem 0" }}>
                                <summary style={{ fontSize: "1.05rem", fontWeight: 600, cursor: "pointer", color: "#F8FAFC", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                                    <span>{faq.q}</span>
                                    <span style={{ color: "#D4AF37", fontSize: "1.2rem", flexShrink: 0 }}>+</span>
                                </summary>
                                <p style={{ marginTop: "1rem", color: "rgba(248,250,252,0.72)", lineHeight: 1.75, fontSize: "1rem" }}>{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <AccommodationConciergeBlock hotelName="Bel Marina Hoi An Resort" location="Hoi An" countryName="Vietnam" />

            <VenueItineraries venueHref="/accommodations/vietnam/bel-marina-hoi-an/" venueName="Bel Marina Hoi An Resort" venueType="accommodation" />

</main>
 );
}
