import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "The Standard Hua Hin | Hua Hin, Thailand" },
 description: "A vibrant, stylish beachfront resort in Hua Hin, blending mid-century modern design with absolute coastal relaxation for golfers.",
 keywords: ["The Standard Hua Hin","Hua Hin luxury resort golf","Hua Hin beachfront accommodation","Thailand coastal golf"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/thailand/the-standard-hua-hin/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "The Standard Hua Hin | Hua Hin, Thailand" },
        description: "A vibrant, stylish beachfront resort in Hua Hin, blending mid-century modern design with absolute coastal relaxation for golfers.",
        url: "https://www.asiagolfspecialists.com/accommodations/thailand/the-standard-hua-hin/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/thailand/the-standard-hua-hin/1.webp",
            width: 1200,
            height: 630,
            alt: "The Standard Hua Hin | Hua Hin, Thailand | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "The Standard Hua Hin | Hua Hin, Thailand" },
        description: "A vibrant, stylish beachfront resort in Hua Hin, blending mid-century modern design with absolute coastal relaxation for golfers.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/thailand/the-standard-hua-hin/1.webp"],
    },
};

const images = [
 { src: "/images/accommodations/thailand/the-standard-hua-hin/1.webp", alt: "The Standard Hua Hin - The Standard Hua Hin - Premium Southeast Asia Golf Tours", caption: "The Standard Hua Hin The Standard Hua Hin" },
 { src: "/images/accommodations/thailand/the-standard-hua-hin/2.webp", alt: "The Standard Hua Hin - The Standard Hua Hin - Premium Southeast Asia Golf Tours", caption: "The Standard Hua Hin The Standard Hua Hin" },
 { src: "/images/accommodations/thailand/the-standard-hua-hin/3.webp", alt: "The Standard Hua Hin - The Standard Hua Hin - Premium Southeast Asia Golf Tours", caption: "The Standard Hua Hin The Standard Hua Hin" },
 { src: "/images/accommodations/thailand/the-standard-hua-hin/4.webp", alt: "The Standard Hua Hin - The Standard Hua Hin - Premium Southeast Asia Golf Tours", caption: "The Standard Hua Hin The Standard Hua Hin" },
 { src: "/images/accommodations/thailand/the-standard-hua-hin/5.webp", alt: "The Standard Hua Hin - The Standard Hua Hin - Premium Southeast Asia Golf Tours", caption: "The Standard Hua Hin The Standard Hua Hin" }
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
 <h1 style={{ marginBottom: '1rem' }}>The Standard Hua Hin</h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"A vibrant, stylish beachfront resort in Hua Hin, blending mid-century modern design with absolute coastal relaxation for golfers."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
  <tr key="Category"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Category</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Beachfront Luxury Resort</td></tr>
  <tr key="Star Rating"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Star Rating</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>5 Star</td></tr>
  <tr key="Location"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Location</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Naresdamri Road, Hua Hin</td></tr>
  <tr key="Total Rooms"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Total Rooms</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>199 Rooms & Villas</td></tr>
  <tr key="Setting"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Setting</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Direct beach access, tropical gardens</td></tr>
  <tr key="Nearest Golf"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Nearest Golf</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Black Mountain Golf Club (30 min), Banyan Golf Club (20 min)</td></tr>
  <tr key="Key Amenity"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Key Amenity</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Beachfront Pool, Lido Restaurant, The Standard Spa</td></tr>
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
  <p>The Standard Hua Hin brings a fresh, vibrant energy to Thailand's royal resort town. With its signature mid-century modern aesthetic, sunny yellow accents, and lush tropical landscaping, the property feels like a vibrant slice of Miami transported to the Gulf of Thailand. It's a resort that doesn't take itself too seriously, yet delivers serious luxury.</p>
  <p>Positioned perfectly along the coast, it serves as an exceptional anchor for the Hua Hin golf circuit. Black Mountain Golf Club and Banyan Golf Club—two of Asia's finest courses—are both within a short, scenic drive. After conquering the elevation changes and fast greens of the local courses, the beachfront pool awaits.</p>
  <p>AGS favors The Standard for golfers looking for a lively, design-forward experience. The spa is renowned for its restorative treatments, perfect for post-round recovery, while Lido Restaurant offers a fantastic atmosphere for evening dining with views of the sea.</p>
 </div>
 </div>
 </div>
 </section>
  <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/thailand/the-standard-hua-hin/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from The Standard Hua Hin to the golf circuit.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "The Standard Hua Hin",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Hua Hin", "addressCountry": "TH" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/thailand/the-standard-hua-hin/",
                          "sameAs": ["https://www.standardhotels.com/hua-hin/properties/hua-hin","https://www.forbestravelguide.com/hotels/hua-hin-thailand/the-standard-hua-hin","https://guide.michelin.com/en/thailand/prachuap-khiri-khan/hua-hin/hotel/the-standard-hua-hin","https://www.cntraveler.com/hotels/hua-hin/the-standard-hua-hin"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Thailand", "item": "https://www.asiagolfspecialists.com/destinations/thailand/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "The Standard Hua Hin", "item": "https://www.asiagolfspecialists.com/accommodations/thailand/the-standard-hua-hin/" }
                            ]
                        }
                    ]
                }) }} />
  
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Bringing playful mid-century Miami modernism to a lush beachfront garden right on Naresdamri Road, the 199-room Standard Hua Hin is Hua Hin&apos;s most energetic 5-star beachfront resort — personally stayed at and vetted by Marcus for lively golf groups and style-conscious couples. Shaded frangipani pathways wind between retro-chic pool villas, yellow-striped cabanas, and direct Gulf of Thailand sand.</p>
                        <p style={{ marginBottom: '1rem' }}>Location is a major win for Hua Hin golf itineraries: Pineapple Valley (formerly Banyan) Golf Club is 20 minutes away, Black Mountain Golf Club is 25 to 30 minutes inland, Springfield Royal is 30 minutes, and Hua Hin&apos;s famous Night Market and seafood piers are just a five-minute walk.</p>
                        <p>Few resorts handle post-round fun better: trade scorecards over spritzes at the beachfront Lido Pool &amp; Bar, book the colourful mud-lounge and recovery massages at The Standard Spa, and finish the evening with spicy Thai izakaya plates at Praça in a restored heritage beach house.</p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="The Standard Hua Hin"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/thailand/the-standard-hua-hin/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/thailand/the-standard-hua-hin/1.webp"
    addressLocality="Hua Hin"
    addressCountry="TH"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Retro Chic Beachfront Resort • Hua Hin"
    inspectionDate="Personally Stayed & Inspected — Marcus Giles"
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.6,
            highlight: "Mid-century modern aesthetic"
      },
      {
            label: "Villa & Beachfront Privacy",
            score: 9.7,
            highlight: "Direct Hua Hin sand access"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.6,
            highlight: "Vibrant yellow pool scene & spa"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.7,
            highlight: "Praça beachside Thai Izakaya & cocktails"
      }
]}
    verdict="Bringing Miami-cool to royal Hua Hin. Vibrant retro aesthetics, direct beach frontage, lush tropical landscaping, and a lively beach bar scene perfect for lively tour groups."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is The Standard Hua Hin to Black Mountain and Pineapple Valley Golf Clubs?","acceptedAnswer":{"@type":"Answer","text":"Pineapple Valley (formerly Banyan) Golf Club is 20 minutes south, Black Mountain Golf Club is 25–30 minutes inland, and Springfield Royal Country Club is 30 minutes via private AGS touring vehicle."}},{"@type":"Question","name":"Should golf groups book Hotel Rooms or Pool Villas at The Standard Hua Hin?","acceptedAnswer":{"@type":"Answer","text":"Standard and Superior Twin rooms in the low-rise wings offer great design and value for 4-to-12-player buddy groups, while Canopy Villas and Bayside Pool Villas add private plunge pools and garden decks for couples."}},{"@type":"Question","name":"Is The Standard Hua Hin within walking distance of Hua Hin town and nightlife?","acceptedAnswer":{"@type":"Answer","text":"Yes. Unlike resorts 15–20 minutes north in Cha-Am, The Standard sits right in central Hua Hin — just a 5-to-10-minute walk to Hua Hin Night Market, waterfront seafood restaurants, and lively bars."}},{"@type":"Question","name":"What is the post-round atmosphere like at The Standard Hua Hin?","acceptedAnswer":{"@type":"Answer","text":"Upbeat, social, and design-forward — centred on the vibrant beachfront Lido Pool, DJ sunset sessions on weekends, Praça Thai Izakaya right on the sand, and The Standard Spa."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "How close is The Standard Hua Hin to Black Mountain and Pineapple Valley Golf Clubs?",
    "a": "Pineapple Valley (formerly Banyan) Golf Club is 20 minutes south, Black Mountain Golf Club is 25–30 minutes inland, and Springfield Royal Country Club is 30 minutes via private AGS touring vehicle."
  },
  {
    "q": "Should golf groups book Hotel Rooms or Pool Villas at The Standard Hua Hin?",
    "a": "Standard and Superior Twin rooms in the low-rise wings offer great design and value for 4-to-12-player buddy groups, while Canopy Villas and Bayside Pool Villas add private plunge pools and garden decks for couples."
  },
  {
    "q": "Is The Standard Hua Hin within walking distance of Hua Hin town and nightlife?",
    "a": "Yes. Unlike resorts 15–20 minutes north in Cha-Am, The Standard sits right in central Hua Hin — just a 5-to-10-minute walk to Hua Hin Night Market, waterfront seafood restaurants, and lively bars."
  },
  {
    "q": "What is the post-round atmosphere like at The Standard Hua Hin?",
    "a": "Upbeat, social, and design-forward — centred on the vibrant beachfront Lido Pool, DJ sunset sessions on weekends, Praça Thai Izakaya right on the sand, and The Standard Spa."
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

 <AccommodationConciergeBlock hotelName="The Standard Hua Hin" location="Hua Hin" countryName="Thailand" />

            <VenueItineraries venueHref="/accommodations/thailand/the-standard-hua-hin/" venueName="The Standard Hua Hin" venueType="accommodation" />

</main>
 );
}
