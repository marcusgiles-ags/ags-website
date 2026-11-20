import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Jaya House River Park | Siem Reap, Cambodia" },
 description: "An exceptionally peaceful boutique hotel along the Siem Reap River, offering bespoke luxury and a perfect launchpad for golfing the Khmer kingdom.",
 keywords: ["Jaya House River Park Siem Reap","Siem Reap luxury boutique hotel","Cambodia golf accommodation","Angkor Wat luxury stay"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/cambodia/jaya-house-river-park/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Jaya House River Park | Siem Reap, Cambodia" },
        description: "An exceptionally peaceful boutique hotel along the Siem Reap River, offering bespoke luxury and a perfect launchpad for golfing the Khmer kingdom.",
        url: "https://www.asiagolfspecialists.com/accommodations/cambodia/jaya-house-river-park/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/cambodia/jaya-house-river-park/1.webp",
            width: 1200,
            height: 630,
            alt: "Jaya House River Park | Siem Reap, Cambodia | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Jaya House River Park | Siem Reap, Cambodia" },
        description: "An exceptionally peaceful boutique hotel along the Siem Reap River, offering bespoke luxury and a perfect launchpad for golfing the Khmer kingdom.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/cambodia/jaya-house-river-park/1.webp"],
    },
};

const images = [
 { src: "/images/accommodations/cambodia/jaya-house-river-park/1.webp", alt: "Jaya House River Park - Jaya House Park Pool Cambodia - Premium Southeast Asia Golf Tours", caption: "Jaya House River Park Jaya House Park Pool Cambodia" },
 { src: "/images/accommodations/cambodia/jaya-house-river-park/2.webp", alt: "Jaya House River Park - Jaya House Park Garden Pool Cambodia - Premium Southeast Asia Golf Tours", caption: "Jaya House River Park Jaya House Park Garden Pool Cambodia" },
 { src: "/images/accommodations/cambodia/jaya-house-river-park/3.webp", alt: "Jaya House River Park - Jaya House Park Garden Pool Cambodia - Premium Southeast Asia Golf Tours", caption: "Jaya House River Park Jaya House Park Garden Pool Cambodia" },
 { src: "/images/accommodations/cambodia/jaya-house-river-park/4.webp", alt: "Jaya House River Park - Jaya House Park Outdoor Cambodia - Premium Southeast Asia Golf Tours", caption: "Jaya House River Park Jaya House Park Outdoor Cambodia" },
 { src: "/images/accommodations/cambodia/jaya-house-river-park/5.webp", alt: "Jaya House River Park - Jaya House Park Room Cambodia - Premium Southeast Asia Golf Tours", caption: "Jaya House River Park Jaya House Park Room Cambodia" }
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
 <h1 style={{ marginBottom: '1rem' }}>Jaya House River Park</h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"An exceptionally peaceful boutique hotel along the Siem Reap River, offering bespoke luxury and a perfect launchpad for golfing the Khmer kingdom."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
  <tr key="Category"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Category</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Luxury Boutique Hotel</td></tr>
  <tr key="Star Rating"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Star Rating</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>5 Star</td></tr>
  <tr key="Location"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Location</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>River Road, Siem Reap</td></tr>
  <tr key="Total Rooms"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Total Rooms</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>36 Rooms & Suites</td></tr>
  <tr key="Setting"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Setting</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Riverside serenity, lush tropical gardens</td></tr>
  <tr key="Nearest Golf"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Nearest Golf</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Phokeethra Country Club (20 min), Angkor Golf Resort (20 min)</td></tr>
  <tr key="Key Amenity"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Key Amenity</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Two Swimming Pools, Riverfront Spa, Trorkuon Restaurant</td></tr>
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
  <p>Jaya House River Park is a masterclass in intimate, bespoke luxury. Set peacefully along the banks of the Siem Reap River, enveloped by lush tropical foliage, this boutique gem features exquisite Cambodian Art Deco design. Its commitment to sustainability and exceptional, personalized service sets it apart in a crowded market.</p>
  <p>The property functions as a serene retreat after days spent exploring the vast Angkor Wat complex or walking the fairways of Siem Reap. Phokeethra Country Club and the Faldo-designed Angkor Golf Resort are easily accessible, providing world-class golf against an ancient backdrop.</p>
  <p>AGS favors Jaya House for its profound tranquility and attention to detail. The dual swimming pools (including one striking silver-tiled pool) and the exceptional Riverfront Spa ensure that relaxation is paramount, preparing you for the next day's adventures on the links or among the temples.</p>
 </div>
 </div>
 </div>
 </section>
  <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/cambodia/jaya-house-river-park/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from Jaya House River Park to the golf circuit.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Jaya House River Park",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Siem Reap", "addressCountry": "KH" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/cambodia/jaya-house-river-park/",
                          "sameAs": ["https://www.jayahouseriverpark.com/","https://www.forbestravelguide.com/hotels/siem-reap-cambodia/jaya-house-riverpark","https://www.cntraveler.com/hotels/siem-reap/jaya-house-riverpark"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Cambodia", "item": "https://www.asiagolfspecialists.com/destinations/cambodia/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Jaya House River Park", "item": "https://www.asiagolfspecialists.com/accommodations/cambodia/jaya-house-river-park/" }
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
                            <strong>Jaya House River Park</strong> operates as a premier <strong>5 Star</strong> luxury boutique hotel positioned in Siem Reap, Cambodia. Featuring an architectural inventory of 36 rooms & suites, the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (Riverview balcony rooms with daybeds) and direct arterial access to Phokeethra Country Club (20 min), Angkor Golf Resort (20 min).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, Jaya House River Park minimizes daily transit friction across the Siem Reap corridor while elevating off-course recovery through two swimming pools, riverfront spa, trorkuon restaurant and post-round recovery & wellness (Silver-tile saltwater pool & spa). Every AGS itinerary anchored at Jaya House River Park includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights Jaya House River Park&apos;s breakfast & dining quality (Warmest personalized service in Cambodia), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Jaya House River Park"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/cambodia/jaya-house-river-park/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/cambodia/jaya-house-river-park/1.webp"
    addressLocality="Siem Reap"
    addressCountry="KH"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="Boutique River Oasis • Siem Reap"
    inspectionDate="Personally Stayed & Inspected — Marcus Giles"
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.7,
            highlight: "Riverview balcony rooms with daybeds"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.7,
            highlight: "Shaded riverbank tropical garden"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.6,
            highlight: "Silver-tile saltwater pool & spa"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.9,
            highlight: "Warmest personalized service in Cambodia"
      }
]}
    verdict="Consistently ranked as one of the best hotels in the world for guest satisfaction. Jaya House delivers heartfelt Khmer hospitality, plastic-free eco-luxury, and swift access to Sir Nick Faldo's Angkor Golf Resort."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is Jaya House River Park to the nearest championship golf courses in Siem Reap?","acceptedAnswer":{"@type":"Answer","text":"Jaya House River Park is positioned in Siem Reap, Cambodia, offering direct private transfer access to Phokeethra Country Club (20 min), Angkor Golf Resort (20 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at Jaya House River Park?","acceptedAnswer":{"@type":"Answer","text":"Jaya House River Park features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does Jaya House River Park offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at Jaya House River Park enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Silver-tile saltwater pool & spa) and breakfast & dining quality (Warmest personalized service in Cambodia)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at Jaya House River Park?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Cambodia, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Jaya House River Park as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is Jaya House River Park to the nearest championship golf courses in Siem Reap?",
                    "a": "Jaya House River Park is positioned in Siem Reap, Cambodia, offering direct private transfer access to Phokeethra Country Club (20 min), Angkor Golf Resort (20 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at Jaya House River Park?",
                    "a": "Jaya House River Park features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does Jaya House River Park offer?",
                    "a": "Guests at Jaya House River Park enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Silver-tile saltwater pool & spa) and breakfast & dining quality (Warmest personalized service in Cambodia)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at Jaya House River Park?",
                    "a": "Yes. As a preferred luxury golf tour operator in Cambodia, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Jaya House River Park as part of a complete stay-and-play golf package."
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

            <VenueItineraries venueHref="/accommodations/cambodia/jaya-house-river-park/" venueName="Jaya House River Park" venueType="accommodation" />

</main>
 );
}
