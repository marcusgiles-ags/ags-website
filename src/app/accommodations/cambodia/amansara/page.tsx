import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Amansara Siem Reap | Ultra-Luxury Cambodia Golf Resort" },
 description: "Amansara Siem Reap — the legendary Aman property in Cambodia, once King Sihanouk's royal guesthouse. The ultimate luxury base for Angkor Golf Resort.",
 keywords: ["Amansara Siem Reap", "luxury hotel Cambodia golf", "Siem Reap five star resort", "Angkor Golf Resort accommodation", "Cambodia ultra exclusive hotel"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/cambodia/amansara/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Amansara Siem Reap | Ultra-Luxury Cambodia Golf Resort" },
        description: "Amansara Siem Reap — the legendary Aman property in Cambodia, once King Sihanouk's royal guesthouse. The ultimate luxury base for Angkor Golf Resort.",
        url: "https://www.asiagolfspecialists.com/accommodations/cambodia/amansara/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/cambodia/amansara/cambodia-luxury-hotel-amansara-siem-reap-pool-courtyard-4.webp",
            width: 1200,
            height: 630,
            alt: "Amansara Siem Reap | Ultra-Exclusive Pool Suite Hotel Cambodia | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Amansara Siem Reap | Ultra-Luxury Cambodia Golf Resort" },
        description: "Amansara Siem Reap — the legendary Aman property in Cambodia, once King Sihanouk's royal guesthouse. The ultimate luxury base for Angkor Golf Resort.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/cambodia/amansara/cambodia-luxury-hotel-amansara-siem-reap-pool-courtyard-4.webp"],
    },
};

const images = [
 { src: "/images/accommodations/cambodia/amansara/cambodia-luxury-hotel-amansara-siem-reap-pool-courtyard-4.webp", alt: "Amansara Siem Reap Pool Courtyard Cambodia - Premium Southeast Asia Golf Tours 2026", caption: "Pool courtyard, Amansara Siem Reap" },
 { src: "/images/accommodations/cambodia/amansara/cambodia-luxury-hotel-amansara-siem-reap-outdoor-lounge-1.webp", alt: "Amansara Siem Reap Outdoor Lounge Cambodia - Premium Southeast Asia Golf Tours 2026", caption: "Outdoor lounge and pool terrace" },
 { src: "/images/accommodations/cambodia/amansara/cambodia-luxury-hotel-amansara-siem-reap-pool-courtyard-2.webp", alt: "Amansara Siem Reap Pool Courtyard View - Premium Southeast Asia Golf Tours 2026", caption: "Pool courtyard, shaded colonnade" },
 { src: "/images/accommodations/cambodia/amansara/cambodia-luxury-hotel-amansara-siem-reap-private-suite-3.webp", alt: "Amansara Siem Reap Private Pool Suite - Premium Southeast Asia Golf Tours 2026", caption: "Private pool suite interior" },
 { src: "/images/accommodations/cambodia/amansara/cambodia-luxury-hotel-amansara-siem-reap-exterior-5.webp", alt: "Amansara Siem Reap Exterior Gardens Cambodia - Premium Southeast Asia Golf Tours 2026", caption: "Exterior gardens, Amansara Siem Reap" },
];

export default function Amansara() {
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
 <h1 style={{ marginBottom: '1rem' }}>Amansara <br /><span className="text-gold">Siem Reap</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Formerly the guest house of King Sihanouk — 24 suites of pure Angkor exclusivity, minutes from Cambodia's finest fairways."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
 {[
 ["Category", "Ultra-Exclusive Heritage Villa Hotel"],
 ["Star Rating", "5 Star (Aman Collection)"],
 ["Location", "Charles de Gaulle Street, Siem Reap, Cambodia"],
 ["Total Suites", "24 Suites (12 with Private Pools)"],
 ["Setting", "Former royal guest house, 5 min from Angkor Wat"],
 ["Nearest Golf", "Angkor Golf Resort (10 min), Phokeethra CC (15 min)"],
 ["Key Amenity", "Custom Remorks, Private Pool, Aman Spa"],
 ].map(([k, v], i, arr) => (<tr key={k}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none' }}>{v}</td></tr>))}
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Amansara is Cambodia's most storied address. Originally commissioned as a private guest house for King Norodom Sihanouk following the opening of Angkor Wat to international visitors in the 1960s, the property was reimagined by the Aman group into 24 suites of complete discretion — the smallest and most exclusive hotel in the entire Aman portfolio. Its white modernist architecture and palm-shaded courtyard pool create a sanctuary of controlled calm that stands apart from every other property in Siem Reap.</p>
 <p>Twelve of the 24 suites feature their own private pool, screened from the world behind thick whitewashed walls. Each suite is a single open-plan room — floor-to-ceiling glass, white linen, and a freestanding bathtub — designed for guests who have decided that the world outside does not need to be admitted. The property's custom remorks (motorised tuk-tuks) provide private access to Angkor Wat and the temple complex at dawn, before other visitors arrive.</p>
 <p>For AGS clients playing Angkor Golf Resort — Sir Nick Faldo's Siem Reap masterpiece, 10 minutes from the property — Amansara provides the definitive contextual luxury. After 18 holes against a temple backdrop, returning to a former royal residence delivers an authenticity of experience that no standard luxury hotel can replicate.</p>
 </div>
 </div>
 </div>
 </section>
  <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/cambodia/amansara/"
  />
  </div>
  </section>

 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>Amansara is available exclusively on request. AGS coordinates all Siem Reap golf and temple programmes.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 
  
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Amansara</strong> operates as a premier <strong>5 Star (Aman Collection)</strong> ultra-exclusive heritage villa hotel positioned in Charles de Gaulle Street, Siem Reap, Cambodia. Featuring an architectural inventory of luxury suites & private pool villas, the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (Minimalist New Khmer pool suites) and direct arterial access to Angkor Golf Resort (10 min), Phokeethra CC (15 min).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, Amansara minimizes daily transit friction across the Siem Reap corridor while elevating off-course recovery through custom remorks, private pool, aman spa and post-round recovery & wellness (Aman Spa Apsara water rituals). Every AGS itinerary anchored at Amansara includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights Amansara&apos;s breakfast & dining quality (Custom royal Khmer pavilion dining), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Amansara"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/cambodia/amansara/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/cambodia/amansara/cambodia-luxury-hotel-amansara-siem-reap-pool-courtyard-4.webp"
    addressLocality="Siem Reap"
    addressCountry="KH"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="Former Royal Guest House • Siem Reap"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.9,
            highlight: "Minimalist New Khmer pool suites"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.9,
            highlight: "Peaceful French Quarter sanctuary"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.8,
            highlight: "Aman Spa Apsara water rituals"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.8,
            highlight: "Custom royal Khmer pavilion dining"
      }
]}
    verdict="Originally the private guesthouse of King Norodom Sihanouk. A 1960s modernist masterpiece of curving white walls and private pool courtyards, delivering unrivaled exclusivity minutes from Angkor Wat."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is Amansara to the nearest championship golf courses in Siem Reap?","acceptedAnswer":{"@type":"Answer","text":"Amansara is positioned in Charles de Gaulle Street, Siem Reap, Cambodia, offering direct private transfer access to Angkor Golf Resort (10 min), Phokeethra CC (15 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at Amansara?","acceptedAnswer":{"@type":"Answer","text":"Amansara features Luxury Suites & Private Pool Villas within a Ultra-Exclusive Heritage Villa Hotel setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does Amansara offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at Amansara enjoy Custom Remorks, Private Pool, Aman Spa, alongside post-round recovery & wellness (Aman Spa Apsara water rituals) and breakfast & dining quality (Custom royal Khmer pavilion dining)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at Amansara?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Cambodia, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Amansara as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is Amansara to the nearest championship golf courses in Siem Reap?",
                    "a": "Amansara is positioned in Charles de Gaulle Street, Siem Reap, Cambodia, offering direct private transfer access to Angkor Golf Resort (10 min), Phokeethra CC (15 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at Amansara?",
                    "a": "Amansara features Luxury Suites & Private Pool Villas within a Ultra-Exclusive Heritage Villa Hotel setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does Amansara offer?",
                    "a": "Guests at Amansara enjoy Custom Remorks, Private Pool, Aman Spa, alongside post-round recovery & wellness (Aman Spa Apsara water rituals) and breakfast & dining quality (Custom royal Khmer pavilion dining)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at Amansara?",
                    "a": "Yes. As a preferred luxury golf tour operator in Cambodia, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Amansara as part of a complete stay-and-play golf package."
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

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "LodgingBusiness",
                        "name": "Amansara",
                        "starRating": { "@type": "Rating", "ratingValue": "5" },
                        "address": { "@type": "PostalAddress", "addressLocality": "Siem Reap", "addressCountry": "KH" },
                        "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                        "url": "https://www.asiagolfspecialists.com/accommodations/cambodia/amansara/",
                          "sameAs": ["https://www.aman.com/resorts/amansara","https://www.forbestravelguide.com/hotels/siem-reap-cambodia/amansara","https://guide.michelin.com/en/hotels-stays/siem-reap/amansara","https://www.cntraveler.com/hotels/cambodia/siem-reap/amansara"]
                    },
                    {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                            { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                            { "@type": "ListItem", "position": 3, "name": "Cambodia", "item": "https://www.asiagolfspecialists.com/destinations/cambodia/accommodations/" },
                            { "@type": "ListItem", "position": 4, "name": "Amansara", "item": "https://www.asiagolfspecialists.com/accommodations/cambodia/amansara/" }
                        ]
                    }
                ]
            }) }} />
 
 <VenueItineraries venueHref="/accommodations/cambodia/amansara/" venueName="Amansara" venueType="accommodation" />

</main>
 );
}
