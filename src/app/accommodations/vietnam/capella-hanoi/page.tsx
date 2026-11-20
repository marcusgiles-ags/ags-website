import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Capella Hanoi | Luxury Bill Bensley Hotel Vietnam" },
 description: "Step into the glamour of the 1920s at Capella Hanoi. Designed by Bill Bensley, this Michelin-awarded luxury hotel is the perfect base for Vietnam golf.",
 keywords: ["Capella Hanoi", "Bill Bensley hotel Hanoi", "luxury hotel Hanoi", "Michelin star Hanoi", "Vietnam golf tour accommodation", "luxury travel Vietnam"],
 alternates: {
 canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/capella-hanoi/",
 },
 openGraph: {
 type: "website",
 title: { absolute: "Capella Hanoi | Luxury Bill Bensley Hotel Vietnam" },
 description: "Step into the glamour of the 1920s at Capella Hanoi. Designed by Bill Bensley, this Michelin-awarded luxury hotel is the perfect base for Vietnam golf.",
 url: "https://www.asiagolfspecialists.com/accommodations/vietnam/capella-hanoi/",
 siteName: "Asia Golf Specialists",
 images: [{
 url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/capella-hanoi/capella-hanoi-exterior.webp",
 width: 1200,
 height: 630,
 alt: "Capella Hanoi Bill Bensley Hotel Vietnam 2026",
 }],
 },
 twitter: {
 card: "summary_large_image",
 title: { absolute: "Capella Hanoi | Luxury Bill Bensley Hotel Vietnam" },
 description: "Step into the glamour of the 1920s at Capella Hanoi. Designed by Bill Bensley, this Michelin-awarded luxury hotel is the perfect base for Vietnam golf.",
 images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/capella-hanoi/capella-hanoi-exterior.webp"],
 },
};

const images = [
 { src: "/images/accommodations/vietnam/capella-hanoi/capella-hanoi-exterior.webp", alt: "Capella Hanoi Luxury Boutique Hotel Exterior Vietnam 2026", caption: "The elegant facade of Capella Hanoi" },
 { src: "/images/accommodations/vietnam/capella-hanoi/capella-hanoi-entry.webp", alt: "Capella Hanoi Bill Bensley Lobby Entry Vietnam 2026", caption: "Theatrical 1920s-inspired lobby" },
 { src: "/images/accommodations/vietnam/capella-hanoi/capella-hanoi-room.webp", alt: "Capella Hanoi Opera Themed Luxury Suite Vietnam 2026", caption: "Opera-themed luxury suite" },
 { src: "/images/accommodations/vietnam/capella-hanoi/capella-hanoi-dining.webp", alt: "Capella Hanoi Michelin Star Dining Vietnam 2026", caption: "Michelin-awarded dining experience" },
 { src: "/images/accommodations/vietnam/capella-hanoi/capella-hanoi-wellness.webp", alt: "Capella Hanoi La Grotta Wellness Pool Vietnam 2026", caption: "La Grotta wellness pool" },
];

export default function CapellaHanoi() {
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
 <h1 style={{ marginBottom: '1rem' }}>Capella <br /><span className="text-gold">Hanoi</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"A flamboyant tribute to 1920s opera, crafted by Bill Bensley. Capella Hanoi is a living museum of luxury in the heart of the capital."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
 {[
 ["Category", "Luxury Boutique Hotel"],
 ["Star Rating", "5 Star (Forbes Travel Guide)"],
 ["Location", "Hoan Kiem, Hanoi, Vietnam"],
 ["Total Rooms", "47 Themed Suites"],
 ["Designer", "Bill Bensley"],
 ["Nearest Golf", "Van Tri Golf Club (35 min), Legend Hill (45 min)"],
 ["Key Amenity", <span key="amenity"><a href="https://guide.michelin.com/en/ha-noi/ha-noi_2974158/restaurant/hibana-by-koki" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">Hibana by Koki (Michelin Star)</a>, La Grotta Pool</span>],
                                    ["Global Recognition", (
                                        <span key="rec">
                                            <a href="https://www.forbestravelguide.com/hotels/vietnam-vietnam/capella-hanoi" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Forbes 5-Star</a>
                                            {' • '}
                                            <a href="https://guide.michelin.com/us/en" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Michelin Guide Selected</a>
                                            {' • '}
                                            <a href="https://www.virtuoso.com/travel/luxury-hotels" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Virtuoso Preferred</a>
                                        </span>
                                    )],
                                ].map(([k, v], i, arr) => (<tr key={k as string}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none', color: 'var(--color-gold)' }}>{k as string}</th><td style={{ padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none' }}>{v}</td></tr>))}
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Designed by the legendary architect Bill Bensley, Capella Hanoi is not merely a hotel; it is an immersive theatrical experience. Located steps from the Hanoi Opera House, the property pays flamboyant homage to the roaring 1920s, serving as a "luxury lode" for artists and performers.</p>
 <p>With only 47 individually styled suites, each named after famous opera artists and adorned with original vintage memorabilia, the hotel offers unmatched intimacy in the bustling capital. The culinary offerings are equally spectacular, featuring the Michelin-starred Hibana by Koki and the Michelin-selected Backstage restaurant.</p>
 <p>For our clients venturing to the elite courses of the north, Capella Hanoi provides a breathtaking contrast to the fairways. After a round at Van Tri or Legend Hill, returning to the opulent embrace of Capella — and perhaps a dip in the La Grotta indoor pool — defines the ultimate luxury golf experience in Vietnam.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/vietnam/capella-hanoi/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>Capella Hanoi is exclusively accessible for our tailored Vietnam itineraries. AGS coordinates all reservations and Hanoi golf programmes.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 
 {/* GEO Executive Summary / AI Citation Block */}
 <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Crafted by Bill Bensley as an intimate 47-suite tribute to the 1920s Golden Age of Opera just steps from the Hanoi Opera House, Capella Hanoi is a Forbes 5-Star property Marcus has personally stayed at and recommends for executive groups and milestone couples tours. No two suites share the exact same memorabilia or theatrical detailing, yet the acoustic insulation shuts out Hanoi street bustle completely.</p>
                        <p style={{ marginBottom: '1rem' }}>Positioned in the French Quarter (Hoan Kiem), Capella puts golfers 30 to 45 minutes from Van Tri Golf Club and Long Bien Golf Course, and 50 to 65 minutes from northern championship heavyweights including Sky Lake, BRG Kings Island, and BRG Legend Hill. Capella Culturists coordinate seamlessly with AGS drivers so clubs are loaded ahead of dawn departures.</p>
                        <p>After 18 holes, golfers return to Auriga Spa&apos;s La Grotta indoor heated pool and thermal suites before evening drinks at Diva&apos;s Lounge or Michelin-starred Japanese teppanyaki at Hibana by Koki.</p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Capella Hanoi"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/capella-hanoi/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/capella-hanoi/capella-hanoi-exterior.webp"
    addressLocality="Hanoi"
    addressCountry="VN"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="Opera-Inspired Masterpiece • Forbes 5-Star • Michelin Star"
    inspectionDate="Personally Stayed & Inspected — Marcus Giles"
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.9,
            highlight: "Bill Bensley opera suites, acoustic quiet"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.8,
            highlight: "Boutique 47-room exclusive enclave"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.7,
            highlight: "Auriga Spa indoor pool & hydrotherapy"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.9,
            highlight: "Michelin-starred Hibana by Koki & breakfast"
      }
]}
    verdict="A breathtaking Bill Bensley design honoring the 1920s Golden Age of Opera. Located steps from the Hanoi Opera House, Capella delivers theatrical opulence, ultra-exclusive suites, and Michelin-starred dining for executive golf tours."
  />


 {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Which Hanoi golf courses pair best with a stay at Capella Hanoi?","acceptedAnswer":{"@type":"Answer","text":"Van Tri Golf Club (35–40 min) and Long Bien Golf Course (25–30 min) are the closest, while BRG Legend Hill (45–50 min), Sky Lake Resort & Golf Club (55–60 min), and BRG Kings Island (60 min) are easily reached via private AGS transfers."}},{"@type":"Question","name":"What makes Capella Hanoi different from larger 5-star business hotels in Hanoi?","acceptedAnswer":{"@type":"Answer","text":"With only 47 suites, Capella delivers deeply personalised butler-style service through its Capella Culturists, complimentary daily champagne & afternoon tea in The Living Room, and Michelin-starred dining under one roof."}},{"@type":"Question","name":"Can AGS secure reservations at Michelin-starred Hibana by Koki during our golf stay?","acceptedAnswer":{"@type":"Answer","text":"Yes. Hibana by Koki has extremely limited counter seating around the teppan grill, so AGS books your preferred dinner seating as soon as your Hanoi itinerary dates are confirmed."}},{"@type":"Question","name":"Does Capella Hanoi work for 4-to-8-player executive golf groups?","acceptedAnswer":{"@type":"Answer","text":"Yes. Its Premier and Capella Suites offer generous layouts, and top-floor Opera Suites with wrap-around terraces make ideal private hospitality venues for executive foursomes and corporate hosts."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "Which Hanoi golf courses pair best with a stay at Capella Hanoi?",
    "a": "Van Tri Golf Club (35–40 min) and Long Bien Golf Course (25–30 min) are the closest, while BRG Legend Hill (45–50 min), Sky Lake Resort & Golf Club (55–60 min), and BRG Kings Island (60 min) are easily reached via private AGS transfers."
  },
  {
    "q": "What makes Capella Hanoi different from larger 5-star business hotels in Hanoi?",
    "a": "With only 47 suites, Capella delivers deeply personalised butler-style service through its Capella Culturists, complimentary daily champagne & afternoon tea in The Living Room, and Michelin-starred dining under one roof."
  },
  {
    "q": "Can AGS secure reservations at Michelin-starred Hibana by Koki during our golf stay?",
    "a": "Yes. Hibana by Koki has extremely limited counter seating around the teppan grill, so AGS books your preferred dinner seating as soon as your Hanoi itinerary dates are confirmed."
  },
  {
    "q": "Does Capella Hanoi work for 4-to-8-player executive golf groups?",
    "a": "Yes. Its Premier and Capella Suites offer generous layouts, and top-floor Opera Suites with wrap-around terraces make ideal private hospitality venues for executive foursomes and corporate hosts."
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

 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
 "@context": "https://schema.org",
 "@graph": [
 {
 "@type": "Hotel",
 "name": "Capella Hanoi",
 "starRating": { "@type": "Rating", "ratingValue": "5" },
 "address": { "@type": "PostalAddress", "addressLocality": "Hoan Kiem, Hanoi", "addressCountry": "VN" },
 "image": `https://www.asiagolfspecialists.com${images[0].src}`,
 "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/capella-hanoi/",
 "award": [
    "Forbes Travel Guide Five-Star Award",
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
    "https://capellahotels.com/en/capella-hanoi",
    "https://www.lhw.com/hotel/Capella-Hanoi-Hanoi-Vietnam",
    "https://guide.michelin.com/us/en",
    "https://www.forbestravelguide.com/hotels/vietnam-vietnam/capella-hanoi"
  ]
 },
 {
 "@type": "BreadcrumbList",
 "itemListElement": [
 { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
 { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
 { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
 { "@type": "ListItem", "position": 4, "name": "Capella Hanoi", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/capella-hanoi/" }
 ]
 },
 {
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "What makes Capella Hanoi a great choice for a golf tour?",
 "acceptedAnswer": { "@type": "Answer", "text": "Its prime location in Hoan Kiem provides easy access to Hanoi's vibrant nightlife and dining, while serving as a luxurious launchpad to top-tier courses like Van Tri." }
 }
 ]
 }
 ]
 }) }} />
 
            <AccommodationConciergeBlock hotelName="Capella Hanoi" location="Hanoi" countryName="Vietnam" />

            <VenueItineraries venueHref="/accommodations/vietnam/capella-hanoi/" venueName="Capella Hanoi" venueType="accommodation" />

</main>
 );
}
