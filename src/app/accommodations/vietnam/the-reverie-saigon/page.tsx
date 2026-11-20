import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "The Reverie Saigon | Ultra-Luxury Hotel Ho Chi Minh" },
 description: "Experience ultra-luxury in Ho Chi Minh City. Italian design, Michelin dining, and a lavish District 1 base for Southern Vietnam's championship golf circuit.",
 keywords: ["The Reverie Saigon", "Ho Chi Minh City luxury hotel", "Vietnam golf accommodation", "District 1 luxury hotel"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/the-reverie-saigon/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "The Reverie Saigon | Ultra-Luxury Hotel Ho Chi Minh" },
        description: "Experience ultra-luxury in Ho Chi Minh City. Italian design, Michelin dining, and a lavish District 1 base for Southern Vietnam's championship golf circuit.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/the-reverie-saigon/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/the-reverie-saigon/the-reverie-saigon-exterior-daytime.webp",
            width: 1200,
            height: 630,
            alt: "The Reverie Saigon | Vietnam | Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "The Reverie Saigon | Ultra-Luxury Hotel Ho Chi Minh" },
        description: "Experience ultra-luxury in Ho Chi Minh City. Italian design, Michelin dining, and a lavish District 1 base for Southern Vietnam's championship golf circuit.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/the-reverie-saigon/the-reverie-saigon-exterior-daytime.webp"],
    },
};

const images = [
 { src: "/images/accommodations/vietnam/the-reverie-saigon/the-reverie-saigon-exterior-daytime.webp", alt: "The Reverie Saigon - Exterior - Premium Southeast Asia Golf Tours", caption: "The Reverie Exterior" },
 { src: "/images/accommodations/vietnam/the-reverie-saigon/the-reverie-saigon-hotel-lobby.webp", alt: "The Reverie Saigon - Grand Lobby - Premium Southeast Asia Golf Tours", caption: "Grand Lobby" },
 { src: "/images/accommodations/vietnam/the-reverie-saigon/the-reverie-saigon-room-interior.webp", alt: "The Reverie Saigon - Luxury Room Interior - Premium Southeast Asia Golf Tours", caption: "Luxury Room Interior" },
 { src: "/images/accommodations/vietnam/the-reverie-saigon/the-reverie-saigon-exterior-pool.webp", alt: "The Reverie Saigon - Free-form Swimming Pool - Premium Southeast Asia Golf Tours", caption: "Outdoor Swimming Pool" },
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
 <h1 style={{ marginBottom: '1rem' }}>The Reverie Saigon</h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Experience ultra-luxury in Ho Chi Minh City. Italian design, Michelin dining, and a lavish District 1 base for Southern Vietnam's championship golf circuit."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
  <tr key="Category"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Category</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Ultra-Luxury City Accommodation</td></tr>
  <tr key="Star Rating"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Star Rating</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>5 Star</td></tr>
  <tr key="Location"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Location</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>District 1, Ho Chi Minh City</td></tr>
  <tr key="Setting"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Setting</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Heart of the CBD on Nguyen Hue Boulevard</td></tr>
  <tr key="Nearest Golf"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Nearest Golf</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Tan Son Nhat Golf Course</td></tr>
  <tr key="Key Amenity"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Key Amenity</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Michelin-starred Dining, The Spa at The Reverie, Panoramic City Views</td></tr>
 
                                <tr key="Global Recognition">
                                    <th style={{ textAlign: 'left', padding: '1rem', borderBottom: 'none', color: 'var(--color-gold)' }}>Global Recognition</th>
                                    <td style={{ padding: '1rem', borderBottom: 'none' }}>
                                        <span key="rec">
                                            <a href="https://www.lhw.com/hotel/the-reverie-saigon-ho-chi-minh-city-vietnam" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px' }}>The Leading Hotels of the World</a>
                                            {' • '}
                                            <a href="https://guide.michelin.com/us/en" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Michelin Guide Selected</a>
                                            {' • '}
                                            <a href="https://www.virtuoso.com/travel/luxury-hotels" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Virtuoso Preferred</a>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
  <p>The Reverie Saigon redefines luxury in Ho Chi Minh City. Spanning the uppermost floors of the landmark Times Square Building, this spectacular property marries world-class Italian design with Vietnamese hospitality. For golfing groups, it represents the absolute zenith of urban accommodation.</p><p>Centrally located on the prestigious Nguyen Hue Boulevard, The Reverie ensures a seamless transition between the best golf courses in the South and the most exquisite dining and nightlife in the city. The breathtaking spa and opulent rooms provide unparalleled recovery after a long day on the fairways.</p>
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
    pagePath="/accommodations/vietnam/the-reverie-saigon/"
  />
  </div>
  </section>
 <section className="section">
 <div className="container text-center">
 <h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2>
 <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from The Reverie Saigon to the golf circuit.</p>
 <Link href="/quote/" className="btn-primary">Speak to a Specialist</Link>
 </div>
 </section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                                                {
                            "@type": "LodgingBusiness",
                            "name": "The Reverie Saigon",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "District 1", "addressRegion": "Ho Chi Minh City", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/the-reverie-saigon/",
                            "award": [
                                "Michelin Guide Selected Hotel",
                                "The Leading Hotels of the World Quality Benchmark"
                            ],
                            "memberOf": [
                                {
                                    "@type": "ProgramMembership",
                                    "programName": "The Leading Hotels of the World"
                                }
                            ],
                            "sameAs": [
                                "https://www.thereveriesaigon.com/",
                                "https://www.lhw.com/hotel/the-reverie-saigon-ho-chi-minh-city-vietnam",
                                "https://guide.michelin.com/us/en",
                                "https://www.virtuoso.com/travel/luxury-hotels",
                                "https://en.wikipedia.org/wiki/The_Reverie_Saigon"
                            ]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "The Reverie Saigon", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/the-reverie-saigon/" }
                            ]
                        }
                    ]
                }) }} />
  
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Occupying the upper floors of Times Square Tower directly between Dong Khoi Street and Nguyen Hue Walking Boulevard, The Reverie Saigon is Vietnam&apos;s boldest expression of ultra-luxury urban glamour — a member of The Leading Hotels of the World verified directly on our Saigon site inspections. Custom Italian furnishings by Giorgetti, Poltrona Frau, and Visionnaire pair with floor-to-ceiling skyline panoramas far above street level.</p>
                        <p style={{ marginBottom: '1rem' }}>With dedicated basement VIP porte-cochere access off Dong Khoi, AGS touring vehicles collect golfers discreetly for Tan Son Nhat Golf Course (25 to 30 minutes), Vietnam Golf &amp; Country Club (40 minutes), and Long Thanh Golf Resort (50 minutes), as well as private highway transfers to The Bluffs Grand Ho Tram.</p>
                        <p>Off the course, the 1,200-square-metre two-level Spa at The Reverie, open-air 6th-floor tiled lap pool, Michelin-starred Da Vittorio Saigon Italian dining, and Long @ Times Square bar deliver unmatched culinary indulgence.</p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="The Reverie Saigon"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/the-reverie-saigon/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/the-reverie-saigon/the-reverie-saigon-exterior-daytime.webp"
    addressLocality="Ho Chi Minh City"
    addressCountry="VN"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="Italian Haute Horlogerie Luxury • Leading Hotels of the World"
    inspectionDate="Site-Verified by AGS On-Ground Team"
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.9,
            highlight: "Palatial Italian-furnished suites"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.8,
            highlight: "Sky-high silence above the city"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.8,
            highlight: "Two-floor 1,200sqm luxury spa"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.9,
            highlight: "Michelin-starred Da Vittorio Italian"
      }
]}
    verdict="Vietnam's most opulent city property, dominating the skyline above Dong Khoi Boulevard. Unapologetic Italian craftsmanship, bespoke marble suites, and Da Vittorio dining create a lavish urban basecamp for Southern golf excursions."
  />


            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What distinguishes The Reverie Saigon from other 5-star hotels in Ho Chi Minh City?","acceptedAnswer":{"@type":"Answer","text":"High-floor panoramic suites (starting at a spacious 43–53 sqm) furnished by Italy's top couture design houses, a massive 1,200 sqm two-floor spa, and Michelin-starred Italian dining at Da Vittorio Saigon."}},{"@type":"Question","name":"How far is The Reverie Saigon from Saigon's top golf clubs?","acceptedAnswer":{"@type":"Answer","text":"Tan Son Nhat Golf Course is 25–30 minutes north, Vietnam Golf & Country Club is 40 minutes, Long Thanh Golf Resort is 50 minutes, and Taekwang Jeongsan is 55–60 minutes by private AGS touring vehicle."}},{"@type":"Question","name":"Are there larger multi-room suites at The Reverie for executive golf hosts?","acceptedAnswer":{"@type":"Answer","text":"Yes. Panorama Suites, Designer Suites, and multi-bedroom Reverie Residences offer expansive skyline salons suited to corporate hospitality and VIP golf groups."}},{"@type":"Question","name":"Can AGS arrange Da Vittorio Saigon reservations and spa recovery sessions in advance?","acceptedAnswer":{"@type":"Answer","text":"Yes. We coordinate prime dinner tables at Da Vittorio Saigon or The Royal Pavilion alongside late-afternoon Spa at The Reverie bookings timed to your return from the golf course."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "What distinguishes The Reverie Saigon from other 5-star hotels in Ho Chi Minh City?",
    "a": "High-floor panoramic suites (starting at a spacious 43–53 sqm) furnished by Italy's top couture design houses, a massive 1,200 sqm two-floor spa, and Michelin-starred Italian dining at Da Vittorio Saigon."
  },
  {
    "q": "How far is The Reverie Saigon from Saigon's top golf clubs?",
    "a": "Tan Son Nhat Golf Course is 25–30 minutes north, Vietnam Golf & Country Club is 40 minutes, Long Thanh Golf Resort is 50 minutes, and Taekwang Jeongsan is 55–60 minutes by private AGS touring vehicle."
  },
  {
    "q": "Are there larger multi-room suites at The Reverie for executive golf hosts?",
    "a": "Yes. Panorama Suites, Designer Suites, and multi-bedroom Reverie Residences offer expansive skyline salons suited to corporate hospitality and VIP golf groups."
  },
  {
    "q": "Can AGS arrange Da Vittorio Saigon reservations and spa recovery sessions in advance?",
    "a": "Yes. We coordinate prime dinner tables at Da Vittorio Saigon or The Royal Pavilion alongside late-afternoon Spa at The Reverie bookings timed to your return from the golf course."
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

            <AccommodationConciergeBlock hotelName="The Reverie Saigon" location="Ho Chi Minh City" countryName="Vietnam" />

            <VenueItineraries venueHref="/accommodations/vietnam/the-reverie-saigon/" venueName="The Reverie Saigon" venueType="accommodation" />

</main>
 );
}
