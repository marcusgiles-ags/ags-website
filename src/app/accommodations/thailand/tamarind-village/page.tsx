import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Tamarind Village | Chiang Mai, Thailand" },
 description: "Tamarind Village Chiang Mai — a boutique 5-star retreat in the Old City, perfectly positioned for exploring northern Thailand's championship golf circuit.",
 keywords: ["Tamarind Village Chiang Mai","Chiang Mai boutique hotel golf","Lanna style luxury accommodation","Northern Thailand golf"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/thailand/tamarind-village/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Tamarind Village | Chiang Mai, Thailand" },
        description: "Tamarind Village Chiang Mai — a boutique 5-star retreat in the Old City, perfectly positioned for exploring northern Thailand's championship golf circuit.",
        url: "https://www.asiagolfspecialists.com/accommodations/thailand/tamarind-village/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/thailand/tamarind-village/1.webp",
            width: 1200,
            height: 630,
            alt: "Tamarind Village | Chiang Mai, Thailand | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Tamarind Village | Chiang Mai, Thailand" },
        description: "Tamarind Village Chiang Mai — a boutique 5-star retreat in the Old City, perfectly positioned for exploring northern Thailand's championship golf circuit.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/thailand/tamarind-village/1.webp"],
    },
};

const images = [
 { src: "/images/accommodations/thailand/tamarind-village/1.webp", alt: "Tamarind Village - Tamarind Village - Premium Southeast Asia Golf Tours", caption: "Tamarind Village Tamarind Village" },
 { src: "/images/accommodations/thailand/tamarind-village/2.webp", alt: "Tamarind Village - Tamarind Village - Premium Southeast Asia Golf Tours", caption: "Tamarind Village Tamarind Village" },
 { src: "/images/accommodations/thailand/tamarind-village/3.webp", alt: "Tamarind Village - Tamarind Village - Premium Southeast Asia Golf Tours", caption: "Tamarind Village Tamarind Village" },
 { src: "/images/accommodations/thailand/tamarind-village/4.webp", alt: "Tamarind Village - Tamarind Village - Premium Southeast Asia Golf Tours", caption: "Tamarind Village Tamarind Village" },
 { src: "/images/accommodations/thailand/tamarind-village/5.webp", alt: "Tamarind Village - Tamarind Village Pool - Premium Southeast Asia Golf Tours", caption: "Tamarind Village Tamarind Village Pool" }
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
<DestinationBackLink country="Thailand" countryLink="/destinations/thailand/accommodations/" />
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Preferred Property — Thailand</div>
 <h1 style={{ marginBottom: '1rem' }}>Tamarind Village</h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"A tranquil boutique retreat in the heart of Chiang Mai's old city, offering a peaceful oasis surrounded by Lanna heritage and world-class golf."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
  <tr key="Category"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Category</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Heritage Boutique Hotel</td></tr>
  <tr key="Star Rating"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Star Rating</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>4 Star</td></tr>
  <tr key="Location"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Location</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Ratchadamnoen Road, Chiang Mai Old City</td></tr>
  <tr key="Total Rooms"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Total Rooms</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>45 Rooms</td></tr>
  <tr key="Setting"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Setting</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Historic walled city, ancient tamarind trees</td></tr>
  <tr key="Nearest Golf"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Nearest Golf</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Alpine Golf Resort Chiang Mai (45 min), Chiangmai Highlands (45 min)</td></tr>
  <tr key="Key Amenity"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Key Amenity</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>The Village Spa, Ruen Tamarind Restaurant</td></tr>
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
  <p>Tamarind Village is a hidden sanctuary nestled within the ancient walls of Chiang Mai's Old City. Reached via a dramatic bamboo-lined entrance, the boutique hotel surrounds a magnificent 200-year-old tamarind tree. The architecture and decor pay deep homage to Northern Thailand's Lanna heritage, offering an incredibly authentic and peaceful atmosphere.</p>
  <p>Despite its central location, it acts as an ideal launching pad for the majestic mountain courses of the North. Spectacular layouts like Alpine Golf Resort and Chiangmai Highlands are highly accessible, allowing golfers to enjoy crisp mountain air on the fairways before returning to the cultural epicenter of the city for evening markets and dining.</p>
  <p>AGS considers Tamarind Village the premier choice for those who want to immerse themselves in local culture. The juxtaposition of world-class golf against a backdrop of historic temples and the renowned Sunday Walking Street—right at the hotel's doorstep—makes for an unforgettable itinerary.</p>
 </div>
 </div>
 </div>
 </section>
  <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/thailand/tamarind-village/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from Tamarind Village to the golf circuit.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Tamarind Village",
                            "starRating": { "@type": "Rating", "ratingValue": "4" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Chiang Mai", "addressCountry": "TH" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/thailand/tamarind-village/",
                          "sameAs": ["https://www.tamarindvillage.com/","https://www.forbestravelguide.com/hotels/chiang-mai-thailand/tamarind-village","https://guide.michelin.com/en/thailand/chiang-mai/chiang-mai/hotel/tamarind-village","https://www.cntraveler.com/hotels/chiang-mai/tamarind-village"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Thailand", "item": "https://www.asiagolfspecialists.com/destinations/thailand/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Tamarind Village", "item": "https://www.asiagolfspecialists.com/accommodations/thailand/tamarind-village/" }
                            ]
                        }
                    ]
                }) }} />
  
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Entered through a dramatic arched bamboo corridor off Ratchadamnoen Road inside Chiang Mai&apos;s historic walled Old City, the 45-room Tamarind Village is our curated boutique heritage partner for travellers who want authentic Lanna culture at their doorstep. Whitewashed low-rise courtyards wrap around a 200-year-old tamarind tree, creating an oasis of shade and quiet steps from Chiang Mai&apos;s revered temples.</p>
                        <p style={{ marginBottom: '1rem' }}>Golfers staying in the Old City enjoy straightforward morning outbound pickups by AGS luxury private touring vehicles: Summit Green Valley is 30 minutes north, Mae Jo is 35 minutes, and Chiangmai Highlands and Alpine Golf Resort Chiang Mai are roughly 45 to 50 minutes east.</p>
                        <p>After your round, cool off in the shaded courtyard pool, book a northern Thai Tok Sen or herbal compress massage at The Village Spa, and dine at Ruen Tamarind before stepping straight onto the famous Sunday Walking Street right outside the bamboo lane.</p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Tamarind Village"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/thailand/tamarind-village/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/thailand/tamarind-village/1.webp"
    addressLocality="Chiang Mai"
    addressCountry="TH"
    overallScore={4.6}
    maxScore={5.0}
    gradeBadge="Lanna Heritage Garden Sanctuary • Chiang Mai"
    inspectionDate="Curated AGS Partner — Vetted via Client Feedback"
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.4,
            highlight: "Charming Lanna timber architecture"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.7,
            highlight: "Historic courtyard behind ancient walls"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.4,
            highlight: "Courtyard pool under 200-year tamarind tree"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.4,
            highlight: "Ruen Tamarind authentic Northern cuisine"
      }
]}
    verdict="An intimate heritage oasis tucked behind ancient brick walls in Chiang Mai's Old City. Built around a historic tamarind tree, offering authentic Northern hospitality and effortless cultural discovery."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How far is Tamarind Village from Chiangmai Highlands and Alpine Golf Resort Chiang Mai?","acceptedAnswer":{"@type":"Answer","text":"Both Chiangmai Highlands Golf & Spa Resort and Alpine Golf Resort Chiang Mai are roughly 45–50 minutes east by private AGS vehicle, while Summit Green Valley is 30 minutes north."}},{"@type":"Question","name":"Which room categories at Tamarind Village offer the best space for golfers?","acceptedAnswer":{"@type":"Answer","text":"Lanna Deluxe rooms and Tamarind Suites provide generous private terraces and extra floor space compared to entry Lanna rooms — making them our recommendation for golfers travelling with full club cases."}},{"@type":"Question","name":"Can AGS vehicles pick up golfers smoothly from Tamarind Village in the Old City?","acceptedAnswer":{"@type":"Answer","text":"Yes. Morning golf departures (6:30–8:30 AM) happen smoothly right at the Ratchadamnoen entrance; on Sunday afternoons/evenings when the Walking Street closes the street to cars, our drivers use the adjacent temple side-lane two minutes away."}},{"@type":"Question","name":"Who is Tamarind Village best suited for on a Chiang Mai golf itinerary?","acceptedAnswer":{"@type":"Answer","text":"Couples and culturally curious small fourballs who want walkable Old City temples, night markets, and authentic Lanna boutique charm rather than a secluded countryside resort."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "How far is Tamarind Village from Chiangmai Highlands and Alpine Golf Resort Chiang Mai?",
    "a": "Both Chiangmai Highlands Golf & Spa Resort and Alpine Golf Resort Chiang Mai are roughly 45–50 minutes east by private AGS vehicle, while Summit Green Valley is 30 minutes north."
  },
  {
    "q": "Which room categories at Tamarind Village offer the best space for golfers?",
    "a": "Lanna Deluxe rooms and Tamarind Suites provide generous private terraces and extra floor space compared to entry Lanna rooms — making them our recommendation for golfers travelling with full club cases."
  },
  {
    "q": "Can AGS vehicles pick up golfers smoothly from Tamarind Village in the Old City?",
    "a": "Yes. Morning golf departures (6:30–8:30 AM) happen smoothly right at the Ratchadamnoen entrance; on Sunday afternoons/evenings when the Walking Street closes the street to cars, our drivers use the adjacent temple side-lane two minutes away."
  },
  {
    "q": "Who is Tamarind Village best suited for on a Chiang Mai golf itinerary?",
    "a": "Couples and culturally curious small fourballs who want walkable Old City temples, night markets, and authentic Lanna boutique charm rather than a secluded countryside resort."
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

            <AccommodationConciergeBlock hotelName="Tamarind Village" location="Chiang Mai" countryName="Thailand" />

            <VenueItineraries venueHref="/accommodations/thailand/tamarind-village/" venueName="Tamarind Village" venueType="accommodation" />

</main>
 );
}
