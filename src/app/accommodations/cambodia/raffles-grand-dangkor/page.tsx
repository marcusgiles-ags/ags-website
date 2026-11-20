import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Raffles Grand Hotel d'Angkor | Heritage Hotel Siem Reap" },
 description: "Raffles Grand Hotel Angkor Siem Reap — Cambodia's iconic colonial hotel and the ultimate luxury base for Angkor Golf Resort.",
 keywords: ["Raffles Grand Hotel d'Angkor", "luxury heritage hotel Siem Reap", "colonial hotel Cambodia golf", "Raffles Cambodia Angkor", "Siem Reap five star golf hotel 1932"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/cambodia/raffles-grand-dangkor/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Raffles Grand Hotel d'Angkor | Heritage Hotel Siem Reap" },
        description: "Raffles Grand Hotel Angkor Siem Reap — Cambodia's iconic colonial hotel and the ultimate luxury base for Angkor Golf Resort.",
        url: "https://www.asiagolfspecialists.com/accommodations/cambodia/raffles-grand-dangkor/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/cambodia/raffles-grand-dangkor/cambodia-luxury-hotel-raffles-grand-hotel-dangkor-heritage-pool-3.webp",
            width: 1200,
            height: 630,
            alt: "Raffles Grand Hotel d'Angkor — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Raffles Grand Hotel d'Angkor | Heritage Hotel Siem Reap" },
        description: "Raffles Grand Hotel Angkor Siem Reap — Cambodia's iconic colonial hotel and the ultimate luxury base for Angkor Golf Resort.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/cambodia/raffles-grand-dangkor/cambodia-luxury-hotel-raffles-grand-hotel-dangkor-heritage-pool-3.webp"],
    },
};

const images = [
 { src: "/images/accommodations/cambodia/raffles-grand-dangkor/cambodia-luxury-hotel-raffles-grand-hotel-dangkor-heritage-pool-3.webp", alt: "Raffles Grand Hotel d'Angkor Heritage Pool Siem Reap Cambodia - Premium Southeast Asia Golf Tours 2026" },
 { src: "/images/accommodations/cambodia/raffles-grand-dangkor/cambodia-luxury-hotel-raffles-grand-hotel-dangkor-colonial-facade-1.webp", alt: "Raffles Grand Hotel d'Angkor Colonial Facade 1932 - Premium Southeast Asia Golf Tours 2026" },
 { src: "/images/accommodations/cambodia/raffles-grand-dangkor/cambodia-luxury-hotel-raffles-grand-hotel-dangkor-pool-2.webp", alt: "Raffles Grand Hotel d'Angkor Resort Pool - Premium Southeast Asia Golf Tours 2026" },
 { src: "/images/accommodations/cambodia/raffles-grand-dangkor/cambodia-luxury-hotel-raffles-grand-hotel-dangkor-presidential-suite-4.webp", alt: "Raffles Grand Hotel d'Angkor Presidential Suite - Premium Southeast Asia Golf Tours 2026" },
 { src: "/images/accommodations/cambodia/raffles-grand-dangkor/cambodia-luxury-hotel-raffles-grand-hotel-dangkor-angkor-wat-view-5.webp", alt: "Raffles Grand Hotel d'Angkor View of Angkor Wat - Premium Southeast Asia Golf Tours 2026" },
];

export default function RafflesGrandDangkor() {
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
 <h1 style={{ marginBottom: '1rem' }}>Raffles Grand Hotel <br /><span className="text-gold">d'Angkor</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"The legendary 1932 address that witnessed the rediscovery of Angkor Wat — Siem Reap's most storied hotel, meticulously restored."</p>
 </div>
 </header>

 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
 {[
 ["Category", "Grand Heritage Luxury Hotel"],
 ["Star Rating", "5 Star (Raffles Collection)"],
 ["Location", "1 Vithei Charles de Gaulle, Siem Reap, Cambodia"],
 ["Total Rooms", "119 Rooms & Suites"],
 ["Heritage", "Opened 1932, sensitively restored to original grandeur"],
 ["Nearest Golf", "Angkor Golf Resort (15 min), Phokeethra CC (25 min)"],
 ["Key Amenity", "Elephant Bar (est. 1932), Pool, Spa, Butlers"],
 ].map(([k, v], i, arr) => (<tr key={k}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none' }}>{v}</td></tr>))}
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>The Raffles Grand Hotel d'Angkor is the most historically significant hotel in Cambodia. Opened in 1932 — the same year that international access to the Angkor temple complex was properly established — the white French colonial building on Siem Reap's central boulevard has stood witness to nine decades of the country's history, hosting kings, archaeologists, film stars, and diplomats in its 119 rooms and suites.</p>
 <p>The hotel's meticulous heritage restoration preserves the grand original lobby, its carved Khmer columns, dark teak floors, and the celebrated Elephant Bar — the oldest functioning bar in Cambodia, still serving the Singapore Sling recipe that has been unchanged since 1932. Butler service is standard across all room categories, and the dedicated concierge team coordinates private dawn temple access, river excursions, and golf programmes at both Angkor Golf Resort and Phokeethra Country Club.</p>
 <p>For AGS groups that value context as much as comfort — where the story of the destination is as important as the quality of the bed — the Raffles Grand Hotel d'Angkor is incomparable. No other property in Cambodia delivers this depth of authentic heritage narrative alongside a genuine five-star service standard. When the conversation returns to "where did you stay in Siem Reap," the answer "Raffles" requires no further explanation.</p>
 </div>
 </div>
 </div>
 </section>

 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}>
 <Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} />
 <div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div>
 </div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/cambodia/raffles-grand-dangkor/"
  />
  </div>
  </section>

 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates Raffles d'Angkor stays with Angkor Golf Resort and Phokeethra Country Club packages.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>

 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Raffles Grand Hotel d'Angkor",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Siem Reap", "addressCountry": "KH" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/cambodia/raffles-grand-dangkor/",
                          "sameAs": ["https://www.raffles.com/cambodia/angkor/raffles-grand-hotel-d-angkor/","https://www.forbestravelguide.com/hotels/siem-reap-cambodia/raffles-grand-hotel-d-angkor","https://guide.michelin.com/en/cambodia/siem-reap/siem-reap/hotel/raffles-grand-hotel-d-angkor_120464","https://www.cntraveler.com/hotels/siem-reap/raffles-grand-hotel-d-angkor"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Cambodia", "item": "https://www.asiagolfspecialists.com/destinations/cambodia/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Raffles Grand Hotel d'Angkor", "item": "https://www.asiagolfspecialists.com/accommodations/cambodia/raffles-grand-dangkor/" }
                            ]
                        }
                    ]
                }) }} />

 
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Opened in 1932 facing the Royal Gardens in Siem Reap, the meticulously restored 119-room Raffles Grand Hotel d&apos;Angkor is Cambodia&apos;s undisputed heritage grand dame — and a property Marcus has personally stayed at for marquee Indochina golf tours. From its original timber cage elevator to liveried doormen and 15 acres of manicured French gardens, every corner breathes golden-age travel prestige.</p>
                        <p style={{ marginBottom: '1rem' }}>Its prime Royal Quarter address puts AGS touring vehicles 15 minutes from Angkor Golf Resort and 25 minutes from Phokeethra Country Club, with Angkor Wat just ten minutes north — allowing seamless morning rounds and afternoon temple exploration.</p>
                        <p>After 18 holes in Cambodian warmth, few post-round rituals in Southeast Asia rival laps in the iconic 35-metre Royal Swimming Pool (inspired by ancient Angkorian baths), followed by an Airavata cocktail in the historic Elephant Bar and Royal Khmer tasting menus at 1932.</p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Raffles Grand Hotel d'Angkor"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/cambodia/raffles-grand-dangkor/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/cambodia/raffles-grand-dangkor/cambodia-luxury-hotel-raffles-grand-hotel-dangkor-heritage-pool-3.webp"
    addressLocality="Siem Reap"
    addressCountry="KH"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="Historic 1932 Grand Luxury Icon • Siem Reap"
    inspectionDate="Personally Stayed & Inspected — Marcus Giles"
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.8,
            highlight: "Restored French colonial suites"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.8,
            highlight: "15 acres of landscaped French gardens"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.9,
            highlight: "Iconic 35m Royal Swimming Pool"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.9,
            highlight: "Historic 1932 dining & Elephant Bar"
      }
]}
    verdict="Siem Reap's original grand palace since 1932. Ancient teak cages, liveried doormen, Cambodia's largest swimming pool, and the legendary Elephant Bar make this an irreplaceable heritage luxury stay."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is Raffles Grand Hotel d'Angkor to Siem Reap's championship golf courses?","acceptedAnswer":{"@type":"Answer","text":"Sir Nick Faldo's Angkor Golf Resort is 15 minutes west, Siem Reap Booyoung Country Club is 20 minutes, and Phokeethra Country Club is 25 minutes west via private AGS vehicle."}},{"@type":"Question","name":"Which room categories at Raffles Grand Hotel d'Angkor should golfers pick?","acceptedAnswer":{"@type":"Answer","text":"State Rooms overlooking the 35-metre Royal Pool blend restored 1932 teak flooring with generous modern bathrooms, while Landmark Rooms and Cabana Poolside Suites add direct poolside terrace access and Raffles Butler service."}},{"@type":"Question","name":"What are the signature on-site experiences outside of golf?","acceptedAnswer":{"@type":"Answer","text":"Evening drinks at the legendary Elephant Bar (home to over 100 gins and classic Indochina cocktails), the 35-metre Royal Pool, Raffles Spa, and Royal Khmer cuisine at Restaurant 1932."}},{"@type":"Question","name":"Can AGS arrange early golfer breakfasts and private Angkor Wat sunrise access from Raffles?","acceptedAnswer":{"@type":"Answer","text":"Yes. Raffles' concierge and AGS work hand-in-hand on early hot breakfasts or takeaway baskets before dawn tee times and private Angkor temple mornings with licensed English-speaking historians."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "How close is Raffles Grand Hotel d'Angkor to Siem Reap's championship golf courses?",
    "a": "Sir Nick Faldo's Angkor Golf Resort is 15 minutes west, Siem Reap Booyoung Country Club is 20 minutes, and Phokeethra Country Club is 25 minutes west via private AGS vehicle."
  },
  {
    "q": "Which room categories at Raffles Grand Hotel d'Angkor should golfers pick?",
    "a": "State Rooms overlooking the 35-metre Royal Pool blend restored 1932 teak flooring with generous modern bathrooms, while Landmark Rooms and Cabana Poolside Suites add direct poolside terrace access and Raffles Butler service."
  },
  {
    "q": "What are the signature on-site experiences outside of golf?",
    "a": "Evening drinks at the legendary Elephant Bar (home to over 100 gins and classic Indochina cocktails), the 35-metre Royal Pool, Raffles Spa, and Royal Khmer cuisine at Restaurant 1932."
  },
  {
    "q": "Can AGS arrange early golfer breakfasts and private Angkor Wat sunrise access from Raffles?",
    "a": "Yes. Raffles' concierge and AGS work hand-in-hand on early hot breakfasts or takeaway baskets before dawn tee times and private Angkor temple mornings with licensed English-speaking historians."
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

            <AccommodationConciergeBlock hotelName="Raffles Grand Hotel d'Angkor" location="Siem Reap" countryName="Cambodia" />

            <VenueItineraries venueHref="/accommodations/cambodia/raffles-grand-dangkor/" venueName="Raffles Grand Hotel d" venueType="accommodation" />

</main>
 );
}
