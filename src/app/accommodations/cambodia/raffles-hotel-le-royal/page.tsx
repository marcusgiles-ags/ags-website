import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Raffles Hotel Le Royal | Phnom Penh, Cambodia" },
 description: "A majestic heritage hotel in Phnom Penh, bringing timeless elegance and legendary service to your Cambodian golf adventure.",
 keywords: ["Raffles Hotel Le Royal Phnom Penh","Phnom Penh heritage luxury hotel","Cambodia golf hotel","Raffles Cambodia golf"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/cambodia/raffles-hotel-le-royal/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Raffles Hotel Le Royal | Phnom Penh, Cambodia" },
        description: "A majestic heritage hotel in Phnom Penh, bringing timeless elegance and legendary service to your Cambodian golf adventure.",
        url: "https://www.asiagolfspecialists.com/accommodations/cambodia/raffles-hotel-le-royal/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/cambodia/raffles-hotel-le-royal/1.webp",
            width: 1200,
            height: 630,
            alt: "Raffles Hotel Le Royal | Phnom Penh, Cambodia | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Raffles Hotel Le Royal | Phnom Penh, Cambodia" },
        description: "A majestic heritage hotel in Phnom Penh, bringing timeless elegance and legendary service to your Cambodian golf adventure.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/cambodia/raffles-hotel-le-royal/1.webp"],
    },
};

const images = [
 { src: "/images/accommodations/cambodia/raffles-hotel-le-royal/1.webp", alt: "Raffles Hotel Le Royal - Raffles Le Royal Phnom Penh - Premium Southeast Asia Golf Tours", caption: "Raffles Hotel Le Royal Raffles Le Royal Phnom Penh" },
 { src: "/images/accommodations/cambodia/raffles-hotel-le-royal/2.webp", alt: "Raffles Hotel Le Royal - Raffles Le Royal Phnom Penh - Premium Southeast Asia Golf Tours", caption: "Raffles Hotel Le Royal Raffles Le Royal Phnom Penh" },
 { src: "/images/accommodations/cambodia/raffles-hotel-le-royal/3.webp", alt: "Raffles Hotel Le Royal - Raffles Le Royal Phnom Penh - Premium Southeast Asia Golf Tours", caption: "Raffles Hotel Le Royal Raffles Le Royal Phnom Penh" },
 { src: "/images/accommodations/cambodia/raffles-hotel-le-royal/4.webp", alt: "Raffles Hotel Le Royal - Raffles Le Royal Phnom Penh - Premium Southeast Asia Golf Tours", caption: "Raffles Hotel Le Royal Raffles Le Royal Phnom Penh" },
 { src: "/images/accommodations/cambodia/raffles-hotel-le-royal/5.webp", alt: "Raffles Hotel Le Royal - Raffles Le Royal Phnom Penh Room - Premium Southeast Asia Golf Tours", caption: "Raffles Hotel Le Royal Raffles Le Royal Phnom Penh Room" }
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
<DestinationBackLink country="Cambodia" countryLink="/destinations/cambodia/accommodations/" />
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Preferred Property — Cambodia</div>
 <h1 style={{ marginBottom: '1rem' }}>Raffles Hotel Le Royal</h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"A majestic heritage hotel in Phnom Penh, bringing timeless elegance and legendary service to your Cambodian golf adventure."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
  <tr key="Category"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Category</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Grand Heritage Hotel</td></tr>
  <tr key="Star Rating"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Star Rating</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>5 Star</td></tr>
  <tr key="Location"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Location</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Daun Penh, Phnom Penh</td></tr>
  <tr key="Total Rooms"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Total Rooms</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>175 Rooms & Suites</td></tr>
  <tr key="Setting"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Setting</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Lush tropical oasis in the city center</td></tr>
  <tr key="Nearest Golf"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Nearest Golf</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Grand Phnom Penh Golf Club (30 min), Vattanac Golf Resort (45 min)</td></tr>
  <tr key="Key Amenity"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Key Amenity</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Elephant Bar, Two Swimming Pools, Raffles Spa</td></tr>
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
  <p>Raffles Hotel Le Royal stands as a grand monument to Cambodia's rich history, exuding an aura of timeless colonial elegance since its opening in 1929. With its sweeping staircases, manicured tropical gardens, and the legendary Elephant Bar, staying here is an immersion into the Golden Age of travel.</p>
  <p>For golfers traversing the Khmer Kingdom, Raffles provides a regal anchor in the capital. The challenging layouts of Grand Phnom Penh Golf Club and the magnificent Vattanac Golf Resort are within comfortable reach, offering exceptional modern golf contrasted by the hotel's heritage charm.</p>
  <p>AGS selects Raffles Le Royal for travelers who demand the highest echelon of service and historical ambiance. The expansive dual swimming pools and impeccable dining options ensure that every moment off the course is steeped in luxury and comfort, making it the definitive Phnom Penh experience.</p>
 </div>
 </div>
 </div>
 </section>
  <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/cambodia/raffles-hotel-le-royal/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from Raffles Hotel Le Royal to the golf circuit.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Raffles Hotel Le Royal",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Phnom Penh", "addressCountry": "KH" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/cambodia/raffles-hotel-le-royal/",
                          "sameAs": ["https://www.raffles.com/phnom-penh/destination/raffles-hotel-le-royal/","https://www.forbestravelguide.com/hotels/phnom-penh-cambodia/raffles-hotel-le-royal","https://guide.michelin.com/en/cambodia/phnom-penh/hotels/raffles-hotel-le-royal-2000000000","https://www.cntraveler.com/hotels/phnom-penh/raffles-hotel-le-royal"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Cambodia", "item": "https://www.asiagolfspecialists.com/destinations/cambodia/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Raffles Hotel Le Royal", "item": "https://www.asiagolfspecialists.com/accommodations/cambodia/raffles-hotel-le-royal/" }
                            ]
                        }
                    ]
                }) }} />
  
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Gracing a leafy colonial compound in Daun Penh since 1929, the 175-room Raffles Hotel Le Royal is Phnom Penh&apos;s timeless heritage sanctuary — personally stayed at and vetted by Marcus for golfers exploring Cambodia&apos;s rising capital golf scene. Surrounded by frangipani courtyards and two shaded swimming pools, it offers old-world calm steps from Wat Phnom and the Mekong riverside.</p>
                        <p style={{ marginBottom: '1rem' }}>For Phnom Penh golf itineraries anchored by Sir Nick Faldo&apos;s 36-hole Vattanac Golf Resort (East &amp; West) and Chhun On Golf Resort, AGS schedules crisp early-morning departures from the Raffles driveway — reaching Vattanac Golf Resort in 35 to 45 minutes, Grand Phnom Penh in 30 minutes, and Garden City or Chhun On in 40 to 50 minutes.</p>
                        <p>Returning to Le Royal after 18 holes feels unmistakably special: cool off in the tranquil lap pool, book restorative treatments at Raffles Spa, sip a Femme Fatale at the storied Elephant Bar, and dine on Royal Cambodian recipes at Restaurant Le Royal.</p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Raffles Hotel Le Royal"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/cambodia/raffles-hotel-le-royal/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/cambodia/raffles-hotel-le-royal/1.webp"
    addressLocality="Phnom Penh"
    addressCountry="KH"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="Historic French Heritage Landmark • Phnom Penh"
    inspectionDate="Personally Stayed & Inspected — Marcus Giles"
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.7,
            highlight: "Colonial state suites & ceiling fans"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.8,
            highlight: "Central French Quarter garden oasis"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.6,
            highlight: "Shaded courtyard pools & spa"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.7,
            highlight: "Restaurant Le Royal royal Khmer dining"
      }
]}
    verdict="A living museum of colonial history in the heart of Phnom Penh. Jackie Kennedy and Somerset Maugham once stayed here; today it remains the city's most distinguished base for Vattanac and Garden City golf."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Which Phnom Penh golf courses pair best with a stay at Raffles Hotel Le Royal?","acceptedAnswer":{"@type":"Answer","text":"Vattanac Golf Resort (East & West courses, 35–45 min), Chhun On Golf Resort (45–50 min), Garden City Golf Club (40 min), and Grand Phnom Penh Golf Club (30 min) are all easily accessed via private AGS transfers."}},{"@type":"Question","name":"What room types at Raffles Hotel Le Royal are recommended for travelling golfers?","acceptedAnswer":{"@type":"Answer","text":"State Rooms and Landmark Rooms with private balconies overlooking the courtyard pools offer airy colonial ceilings, quiet rest, and plenty of floor space for golf luggage."}},{"@type":"Question","name":"How does Raffles Hotel Le Royal compare to Rosewood Phnom Penh for a golf stay?","acceptedAnswer":{"@type":"Answer","text":"Choose Raffles Le Royal if you love 1929 French-colonial heritage, outdoor resort-style courtyard pools, and Elephant Bar charm; choose Rosewood Phnom Penh if you prefer sleek modern skyscraper luxury and panoramic rooftop skyline bars."}},{"@type":"Question","name":"Can we combine Phnom Penh golf at Raffles Le Royal with Siem Reap at Raffles Grand Hotel d'Angkor?","acceptedAnswer":{"@type":"Answer","text":"Yes — our Twin-Raffles Cambodia Golf Trail pairs 3 nights at Raffles Le Royal (playing Vattanac East & West and Chhun On) with a short domestic flight to Siem Reap for 3–4 nights at Raffles Grand Hotel d'Angkor."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "Which Phnom Penh golf courses pair best with a stay at Raffles Hotel Le Royal?",
    "a": "Vattanac Golf Resort (East & West courses, 35–45 min), Chhun On Golf Resort (45–50 min), Garden City Golf Club (40 min), and Grand Phnom Penh Golf Club (30 min) are all easily accessed via private AGS transfers."
  },
  {
    "q": "What room types at Raffles Hotel Le Royal are recommended for travelling golfers?",
    "a": "State Rooms and Landmark Rooms with private balconies overlooking the courtyard pools offer airy colonial ceilings, quiet rest, and plenty of floor space for golf luggage."
  },
  {
    "q": "How does Raffles Hotel Le Royal compare to Rosewood Phnom Penh for a golf stay?",
    "a": "Choose Raffles Le Royal if you love 1929 French-colonial heritage, outdoor resort-style courtyard pools, and Elephant Bar charm; choose Rosewood Phnom Penh if you prefer sleek modern skyscraper luxury and panoramic rooftop skyline bars."
  },
  {
    "q": "Can we combine Phnom Penh golf at Raffles Le Royal with Siem Reap at Raffles Grand Hotel d'Angkor?",
    "a": "Yes — our Twin-Raffles Cambodia Golf Trail pairs 3 nights at Raffles Le Royal (playing Vattanac East & West and Chhun On) with a short domestic flight to Siem Reap for 3–4 nights at Raffles Grand Hotel d'Angkor."
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

            <AccommodationConciergeBlock hotelName="Raffles Hotel Le Royal" location="Phnom Penh" countryName="Cambodia" />

            <VenueItineraries venueHref="/accommodations/cambodia/raffles-hotel-le-royal/" venueName="Raffles Hotel Le Royal" venueType="accommodation" />

</main>
 );
}
