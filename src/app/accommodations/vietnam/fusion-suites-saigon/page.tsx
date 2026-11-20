import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Fusion Suites Saigon | Ho Chi Minh" },
 description: "A contemporary, wellness-inspired all-suite hotel in the heart of Saigon, perfect for golfers seeking modern comfort and vibrant city energy.",
 keywords: ["Fusion Suites Saigon","Ho Chi Minh City modern suites","Saigon wellness hotel golf","Southern Vietnam urban golf"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/fusion-suites-saigon/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Fusion Suites Saigon | Ho Chi Minh" },
        description: "A contemporary, wellness-inspired all-suite hotel in the heart of Saigon, perfect for golfers seeking modern comfort and vibrant city energy.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/fusion-suites-saigon/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/fusion-suites-saigon/1.webp",
            width: 1200,
            height: 630,
            alt: "Fusion Suites Saigon | Ho Chi Minh City, Vietnam | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Fusion Suites Saigon | Ho Chi Minh" },
        description: "A contemporary, wellness-inspired all-suite hotel in the heart of Saigon, perfect for golfers seeking modern comfort and vibrant city energy.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/fusion-suites-saigon/1.webp"],
    },
};

const images = [
 { src: "/images/accommodations/vietnam/fusion-suites-saigon/1.webp", alt: "Fusion Suites Saigon - Fusion Suites Saigon Rooftop - Premium Southeast Asia Golf Tours", caption: "Fusion Suites Saigon Fusion Suites Saigon Rooftop" },
 { src: "/images/accommodations/vietnam/fusion-suites-saigon/2.webp", alt: "Fusion Suites Saigon - Fusion Suites Saigon - Premium Southeast Asia Golf Tours", caption: "Fusion Suites Saigon Fusion Suites Saigon" },
 { src: "/images/accommodations/vietnam/fusion-suites-saigon/3.webp", alt: "Fusion Suites Saigon - Fusion Suites Saigon - Premium Southeast Asia Golf Tours", caption: "Fusion Suites Saigon Fusion Suites Saigon" },
 { src: "/images/accommodations/vietnam/fusion-suites-saigon/4.webp", alt: "Fusion Suites Saigon - Fusion Suites Saigon - Premium Southeast Asia Golf Tours", caption: "Fusion Suites Saigon Fusion Suites Saigon" },
 { src: "/images/accommodations/vietnam/fusion-suites-saigon/5.webp", alt: "Fusion Suites Saigon - Fusion Suites Saigon Main Entrance - Premium Southeast Asia Golf Tours", caption: "Fusion Suites Saigon Fusion Suites Saigon Main Entrance" }
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
 <h1 style={{ marginBottom: '1rem' }}>Fusion Suites Saigon</h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"A contemporary, wellness-inspired all-suite hotel in the heart of Saigon, perfect for golfers seeking modern comfort and vibrant city energy."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
  <tr key="Category"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Category</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>All-Suite Wellness Hotel</td></tr>
  <tr key="Star Rating"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Star Rating</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>4 Star</td></tr>
  <tr key="Location"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Location</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>District 1, Ho Chi Minh City</td></tr>
  <tr key="Total Rooms"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Total Rooms</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>76 Suites</td></tr>
  <tr key="Setting"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Setting</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Urban chic, steps from Tao Dan Park</td></tr>
  <tr key="Nearest Golf"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Nearest Golf</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Tan Son Nhat GC (30 min), Vietnam Golf & Country Club (45 min)</td></tr>
  <tr key="Key Amenity"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Key Amenity</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Daily Spa Treatments included, Fresh Restaurant</td></tr>
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
  <p>Fusion Suites Saigon brings a breath of fresh, minimalist air to the bustling metropolis of Ho Chi Minh City. Characterized by blonde wood, floor-to-ceiling windows, and a distinctly modern aesthetic, this all-suite property emphasizes wellness and comfort amidst the kinetic energy of District 1.</p>
  <p>The hotel's location is strategically positioned for the southern golf circuit. Access to Tan Son Nhat Golf Course and Vietnam Golf & Country Club is straightforward, allowing golfers to conquer the parkland layouts by day and dive into Saigon's legendary culinary and nightlife scene by night.</p>
  <p>AGS incorporates Fusion Suites into itineraries for its unique 'spa-inclusive' concept, which guarantees daily spa treatments for guests—an absolute game-changer for golfers needing to ease tense muscles after a tough round. It is the definitive modern urban hub for a Saigon golf escape.</p>
 </div>
 </div>
 </div>
 </section>
  <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/vietnam/fusion-suites-saigon/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from Fusion Suites Saigon to the golf circuit.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Fusion Suites Saigon",
                            "starRating": { "@type": "Rating", "ratingValue": "4" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Ho Chi Minh City", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/fusion-suites-saigon/",
                          "sameAs": ["https://fusionsuitesaigon.com/","https://www.booking.com/hotel/vn/fusion-suites-saigon.en-gb.html","https://www.tripadvisor.com/Hotel_Review-g293925-d8400030-Reviews-Fusion_Suites_Saigon-Ho_Chi_Minh_City.html","https://www.agoda.com/fusion-suites-saigon/hotel/ho-chi-minh-city-vn.html"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Fusion Suites Saigon", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/fusion-suites-saigon/" }
                            ]
                        }
                    ]
                }) }} />
  
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Tucked on a quieter leafy street opposite Tao Dan Park in District 1, Fusion Suites Saigon offers 76 Scandinavian-minimalist all-suite residences designed around calm urban recovery. During our site verifications, its natural timber finishes, generous studio floorplans, and included daily reflexology or spa therapy stood out as a smart alternative to crowded high-rise business hotels in Ho Chi Minh City.</p>
                        <p style={{ marginBottom: '1rem' }}>For Saigon golf logistics, staying on the western side of District 1 cuts morning outbound friction: Tan Son Nhat Golf Course is roughly 25 to 30 minutes north, Long Thanh and Jeongsan are 45 to 60 minutes east, and Twin Doves or Song Be are 55 to 65 minutes north via private AGS vehicle.</p>
                        <p>Each suite includes a sitting area and kitchenette with plenty of space for golf travel covers, while the Fresh Restaurant serves nourishing early breakfasts and cold-pressed juices before you head out to beat Saigon&apos;s midday heat.</p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Fusion Suites Saigon"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/fusion-suites-saigon/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/fusion-suites-saigon/1.webp"
    addressLocality="Ho Chi Minh City"
    addressCountry="VN"
    overallScore={4.6}
    maxScore={5.0}
    gradeBadge="Modern Wellness Suites • Saigon"
    inspectionDate="Site-Verified by AGS On-Ground Team"
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.5,
            highlight: "Scandinavian wood & acoustic glass"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.4,
            highlight: "Peaceful park-facing rooms"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.5,
            highlight: "Daily chromotherapy spa treatment included"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.3,
            highlight: "Fresh healthy breakfast & juices"
      }
]}
    verdict="A refreshing minimalist sanctuary in downtown Ho Chi Minh City. Generous studio layouts with in-room kitchenettes and daily spa treatments tailored to restore weary golfers."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is a daily spa treatment really included at Fusion Suites Saigon?","acceptedAnswer":{"@type":"Answer","text":"Yes. Fusion's signature concept includes a daily complimentary foot reflexology or wellness treatment per guest (subject to advance reservation, which AGS schedules around your afternoon return from the course)."}},{"@type":"Question","name":"Which Saigon golf clubs are easiest to reach from Fusion Suites Saigon?","acceptedAnswer":{"@type":"Answer","text":"Tan Son Nhat Golf Course is 25–30 minutes away, Vietnam Golf & Country Club is 40–45 minutes, Long Thanh Golf Resort is 50 minutes, and Taekwang Jeongsan is roughly 55 minutes by private AGS transfer."}},{"@type":"Question","name":"What room types work best for golf mates sharing or needing extra luggage space?","acceptedAnswer":{"@type":"Answer","text":"Corner Suites and Two-Bedroom Family Suites offer expansive layouts with separate living zones, giving golfers ample room to store hard cases and dry gear between rounds."}},{"@type":"Question","name":"How walkable is District 1 dining and nightlife from Fusion Suites Saigon?","acceptedAnswer":{"@type":"Answer","text":"Ben Thanh Market, Tao Dan Park, and District 1's craft cocktail bars and Vietnamese restaurants are within a 5-to-15-minute walk, while Dong Khoi and Saigon's rooftop bars are a 5-minute ride away."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "Is a daily spa treatment really included at Fusion Suites Saigon?",
    "a": "Yes. Fusion's signature concept includes a daily complimentary foot reflexology or wellness treatment per guest (subject to advance reservation, which AGS schedules around your afternoon return from the course)."
  },
  {
    "q": "Which Saigon golf clubs are easiest to reach from Fusion Suites Saigon?",
    "a": "Tan Son Nhat Golf Course is 25–30 minutes away, Vietnam Golf & Country Club is 40–45 minutes, Long Thanh Golf Resort is 50 minutes, and Taekwang Jeongsan is roughly 55 minutes by private AGS transfer."
  },
  {
    "q": "What room types work best for golf mates sharing or needing extra luggage space?",
    "a": "Corner Suites and Two-Bedroom Family Suites offer expansive layouts with separate living zones, giving golfers ample room to store hard cases and dry gear between rounds."
  },
  {
    "q": "How walkable is District 1 dining and nightlife from Fusion Suites Saigon?",
    "a": "Ben Thanh Market, Tao Dan Park, and District 1's craft cocktail bars and Vietnamese restaurants are within a 5-to-15-minute walk, while Dong Khoi and Saigon's rooftop bars are a 5-minute ride away."
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

            <AccommodationConciergeBlock hotelName="Fusion Suites Saigon" location="Ho Chi Minh City" countryName="Vietnam" />

            <VenueItineraries venueHref="/accommodations/vietnam/fusion-suites-saigon/" venueName="Fusion Suites Saigon" venueType="accommodation" />

</main>
 );
}
