import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Sofitel Legend Metropole Hanoi | Vietnam" },
 description: "Hanoi's most storied luxury address, blending French colonial grandeur with timeless elegance, serving as the ultimate basecamp for Northern Vietnam.",
 keywords: ["Sofitel Legend Metropole Hanoi", "Hanoi luxury hotel", "French colonial hotel Vietnam", "Northern Vietnam golf accommodation"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/sofitel-metropole-hanoi/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Sofitel Legend Metropole Hanoi | Vietnam" },
        description: "Hanoi's most storied luxury address, blending French colonial grandeur with timeless elegance, serving as the ultimate basecamp for Northern Vietnam.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/sofitel-metropole-hanoi/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/sofitel-metropole-hanoi/sofitel-legend-metropole-hanoi-hero.webp",
            width: 1200,
            height: 630,
            alt: "Sofitel Legend Metropole Hanoi | Vietnam | Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Sofitel Legend Metropole Hanoi | Vietnam" },
        description: "Hanoi's most storied luxury address, blending French colonial grandeur with timeless elegance, serving as the ultimate basecamp for Northern Vietnam.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/sofitel-metropole-hanoi/sofitel-legend-metropole-hanoi-hero.webp"],
    },
};

const images = [
 { src: "/images/accommodations/vietnam/sofitel-metropole-hanoi/sofitel-legend-metropole-hanoi-hero.webp", alt: "Sofitel Legend Metropole Hanoi - Sofitel Legend Metropole Hanoi - Premium Southeast Asia Golf Tours", caption: "Sofitel Legend Metropole Hanoi" },
 { src: "/images/accommodations/vietnam/sofitel-metropole-hanoi/sofitel-metropole-hanoi-entrance.webp", alt: "Sofitel Legend Metropole Hanoi - Grand Entrance - Premium Southeast Asia Golf Tours", caption: "Grand Entrance" },
 { src: "/images/accommodations/vietnam/sofitel-metropole-hanoi/sofitel-metropole-hanoi-pool.webp", alt: "Sofitel Legend Metropole Hanoi - Courtyard Pool - Premium Southeast Asia Golf Tours", caption: "Courtyard Pool" },
 { src: "/images/accommodations/vietnam/sofitel-metropole-hanoi/sofitel-metropole-la-terrasse.webp", alt: "Sofitel Legend Metropole Hanoi - La Terrasse Cafe - Premium Southeast Asia Golf Tours", caption: "La Terrasse Cafe" },
 { src: "/images/accommodations/vietnam/sofitel-metropole-hanoi/sofitel-legend-metropole-hanoi-room.webp", alt: "Sofitel Legend Metropole Hanoi - Luxury Room - Premium Southeast Asia Golf Tours", caption: "Luxury Room" },
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
 <h1 style={{ marginBottom: '1rem' }}>Sofitel Legend Metropole Hanoi</h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Hanoi's most storied luxury address, blending French colonial grandeur with timeless elegance, serving as the ultimate basecamp for Northern Vietnam golf tours."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
  <tr key="Category"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Category</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Luxury Heritage Hotel</td></tr>
  <tr key="Star Rating"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Star Rating</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>5 Star</td></tr>
  <tr key="Location"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Location</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Hoan Kiem, Hanoi</td></tr>
  <tr key="Setting"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Setting</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Historic French Quarter, steps from the Opera House</td></tr>
  <tr key="Nearest Golf"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Nearest Golf</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Long Bien Golf Course, BRG Legend Hill</td></tr>
  <tr key="Key Amenity"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Key Amenity</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Le Spa du Metropole, Heated Pool, Historic Bunker</td></tr>
 
                                <tr key="Global Recognition">
                                    <th style={{ textAlign: 'left', padding: '1rem', borderBottom: 'none', color: 'var(--color-gold)' }}>Global Recognition</th>
                                    <td style={{ padding: '1rem', borderBottom: 'none' }}>
                                        <span key="rec">
                                            <a href="https://www.forbestravelguide.com/hotels/vietnam-vietnam/sofitel-legend-metropole-hanoi" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Forbes 5-Star</a>
                                            {' • '}
                                            <a href="https://guide.michelin.com/us/en" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Michelin Guide Selected</a>
                                            {' • '}
                                            <a href="https://www.historichotels.org/hotels-resorts/sofitel-legend-metropole-hanoi" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Historic Hotels Worldwide</a>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
  <p>Since 1901, the Sofitel Legend Metropole has been the grand dame of Hanoi. Offering a peerless blend of French art de vivre and elegant Vietnamese touches, the Metropole is consistently ranked among the finest hotels in Asia.</p><p>For discerning golfers, it acts as the perfect anchor for a Northern Vietnam itinerary. After navigating the challenging layouts of Hanoi's premier courses, the Metropole provides an oasis of refined luxury. Whether enjoying a cocktail at the Bamboo Bar or dining at Le Beaulieu, the post-golf recovery experience here is unmatched.</p>
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
    pagePath="/accommodations/vietnam/sofitel-metropole-hanoi/"
  />
  </div>
  </section>
 <section className="section">
 <div className="container text-center">
 <h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2>
 <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from Sofitel Legend Metropole Hanoi to the golf circuit.</p>
 <Link href="/quote/" className="btn-primary">Speak to a Specialist</Link>
 </div>
 </section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                                                {
                            "@type": "LodgingBusiness",
                            "name": "Sofitel Legend Metropole Hanoi",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Hoan Kiem", "addressRegion": "Hanoi", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/sofitel-metropole-hanoi/",
                            "award": [
                                "Forbes Travel Guide Five-Star Award",
                                "Michelin Guide Selected Hotel"
                            ],
                            "memberOf": [
                                {
                                    "@type": "ProgramMembership",
                                    "programName": "Historic Hotels Worldwide"
                                }
                            ],
                            "sameAs": [
                                "https://www.sofitel-legend-metropole-hanoi.com/",
                                "https://www.forbestravelguide.com/hotels/vietnam-vietnam/sofitel-legend-metropole-hanoi",
                                "https://guide.michelin.com/us/en",
                                "https://www.historichotels.org/hotels-resorts/sofitel-legend-metropole-hanoi",
                                "https://en.wikipedia.org/wiki/Hotel_Metropole_Hanoi"
                            ]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Sofitel Legend Metropole Hanoi", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/sofitel-metropole-hanoi/" }
                            ]
                        }
                    ]
                }) }} />
  
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Standing proudly in Hanoi&apos;s French Quarter since 1901, Forbes 5-Star Sofitel Legend Metropole Hanoi is Indochina&apos;s most storied grand hotel — and a landmark Marcus has personally stayed at for heritage-focused Northern Vietnam golf tours. Between the timber-shuttered Heritage Wing and the contemporary Opera Wing, its leafy courtyard pool and historic wartime bunker create an atmosphere no modern tower can replicate.</p>
                        <p style={{ marginBottom: '1rem' }}>From Hoan Kiem, AGS private transfers connect smoothly to Long Bien Golf Course (25 to 30 minutes), Van Tri Golf Club (35 to 40 minutes), BRG Legend Hill (45 to 50 minutes), Sky Lake (55 to 60 minutes), and BRG Kings Island (60 minutes). The hotel&apos;s seasoned concierge team handles early golf-bag staging seamlessly every morning.</p>
                        <p>Post-round traditions here are unmatched in Hanoi: cool off beside the heated courtyard pool with a cocktail at Bamboo Bar, book a deep-tissue session at Le Spa du Metropole, and dine on Michelin-recognised French cuisine at Le Beaulieu or northern Vietnamese classics at Spice Garden.</p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Sofitel Legend Metropole Hanoi"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/sofitel-metropole-hanoi/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/sofitel-metropole-hanoi/sofitel-legend-metropole-hanoi-hero.webp"
    addressLocality="Hanoi"
    addressCountry="VN"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="Historic French Colonial Legend • Forbes 5-Star"
    inspectionDate="Personally Stayed & Inspected — Marcus Giles"
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.8,
            highlight: "Timeless French colonial wing suites"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.8,
            highlight: "Garden courtyard & pool sanctuary"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.7,
            highlight: "Le Spa du Metropole therapy"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.9,
            highlight: "Le Beaulieu French fine dining & Bamboo Bar"
      }
]}
    verdict="The grand dame of Indochina since 1901. French colonial ceiling fans, polished timber floors, and storied courtyard gardens provide timeless sophistication just minutes from Hanoi's elite private clubs."
  />


            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Should golfers book the Heritage Wing or the Opera Wing at Sofitel Legend Metropole Hanoi?","acceptedAnswer":{"@type":"Answer","text":"Choose the freshly restored Heritage Wing for classic 1901 colonial architecture, hardwood floors, and French shutters; choose the Opera Wing for slightly larger contemporary rooms, neoclassical marble bathrooms, and Club Metropole Lounge access."}},{"@type":"Question","name":"How far is Sofitel Legend Metropole Hanoi from Hanoi's championship golf courses?","acceptedAnswer":{"@type":"Answer","text":"Long Bien Golf Course is 25–30 minutes away, Van Tri Golf Club is 35–40 minutes, BRG Legend Hill is 45–50 minutes, and Sky Lake or BRG Kings Island are roughly 55–60 minutes by private AGS vehicle."}},{"@type":"Question","name":"Is the Metropole courtyard pool heated during Hanoi's cooler winter golf season?","acceptedAnswer":{"@type":"Answer","text":"Yes. Unlike many Hanoi hotel pools, the Metropole's iconic courtyard swimming pool is heated year-round, making post-round swims comfortable even from November through February."}},{"@type":"Question","name":"What cultural and dining highlights are on-site at the Metropole?","acceptedAnswer":{"@type":"Answer","text":"Guests receive complimentary guided tours of the hotel's preserved Path of History & wartime bunker, alongside classic French fine dining at Le Beaulieu, Angelina whisky lounge, and Bamboo Bar."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "Should golfers book the Heritage Wing or the Opera Wing at Sofitel Legend Metropole Hanoi?",
    "a": "Choose the freshly restored Heritage Wing for classic 1901 colonial architecture, hardwood floors, and French shutters; choose the Opera Wing for slightly larger contemporary rooms, neoclassical marble bathrooms, and Club Metropole Lounge access."
  },
  {
    "q": "How far is Sofitel Legend Metropole Hanoi from Hanoi's championship golf courses?",
    "a": "Long Bien Golf Course is 25–30 minutes away, Van Tri Golf Club is 35–40 minutes, BRG Legend Hill is 45–50 minutes, and Sky Lake or BRG Kings Island are roughly 55–60 minutes by private AGS vehicle."
  },
  {
    "q": "Is the Metropole courtyard pool heated during Hanoi's cooler winter golf season?",
    "a": "Yes. Unlike many Hanoi hotel pools, the Metropole's iconic courtyard swimming pool is heated year-round, making post-round swims comfortable even from November through February."
  },
  {
    "q": "What cultural and dining highlights are on-site at the Metropole?",
    "a": "Guests receive complimentary guided tours of the hotel's preserved Path of History & wartime bunker, alongside classic French fine dining at Le Beaulieu, Angelina whisky lounge, and Bamboo Bar."
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

            <AccommodationConciergeBlock hotelName="Sofitel Legend Metropole Hanoi" location="Hanoi" countryName="Vietnam" />

            <VenueItineraries venueHref="/accommodations/vietnam/sofitel-metropole-hanoi/" venueName="Sofitel Legend Metropole Hanoi" venueType="accommodation" />

</main>
 );
}
