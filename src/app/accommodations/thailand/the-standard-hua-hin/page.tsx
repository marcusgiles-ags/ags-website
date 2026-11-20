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
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>The Standard Hua Hin</strong> operates as a premier <strong>5 Star</strong> beachfront luxury resort positioned in Hua Hin, Thailand. Featuring an architectural inventory of 199 rooms & villas, the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (Mid-century modern aesthetic) and direct arterial access to Black Mountain Golf Club (30 min), Banyan Golf Club (20 min).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, The Standard Hua Hin minimizes daily transit friction across the Hua Hin corridor while elevating off-course recovery through beachfront pool, lido restaurant, the standard spa and post-round recovery & wellness (Vibrant yellow pool scene & spa). Every AGS itinerary anchored at The Standard Hua Hin includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights The Standard Hua Hin&apos;s breakfast & dining quality (Praça beachside Thai Izakaya & cocktails), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
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
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is The Standard Hua Hin to the nearest championship golf courses in Hua Hin?","acceptedAnswer":{"@type":"Answer","text":"The Standard Hua Hin is positioned in Hua Hin, Thailand, offering direct private transfer access to Black Mountain Golf Club (30 min), Banyan Golf Club (20 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at The Standard Hua Hin?","acceptedAnswer":{"@type":"Answer","text":"The Standard Hua Hin features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does The Standard Hua Hin offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at The Standard Hua Hin enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Vibrant yellow pool scene & spa) and breakfast & dining quality (Praça beachside Thai Izakaya & cocktails)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at The Standard Hua Hin?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Thailand, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at The Standard Hua Hin as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is The Standard Hua Hin to the nearest championship golf courses in Hua Hin?",
                    "a": "The Standard Hua Hin is positioned in Hua Hin, Thailand, offering direct private transfer access to Black Mountain Golf Club (30 min), Banyan Golf Club (20 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at The Standard Hua Hin?",
                    "a": "The Standard Hua Hin features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does The Standard Hua Hin offer?",
                    "a": "Guests at The Standard Hua Hin enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Vibrant yellow pool scene & spa) and breakfast & dining quality (Praça beachside Thai Izakaya & cocktails)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at The Standard Hua Hin?",
                    "a": "Yes. As a preferred luxury golf tour operator in Thailand, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at The Standard Hua Hin as part of a complete stay-and-play golf package."
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

 <VenueItineraries venueHref="/accommodations/thailand/the-standard-hua-hin/" venueName="The Standard Hua Hin" venueType="accommodation" />

</main>
 );
}
