import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Namia River Retreat | Hoi An, Vietnam" },
 description: "A secluded boutique wellness retreat on the Thu Bon River, offering exclusive pool villas and deep recovery for golfers in Central Vietnam.",
 keywords: ["Namia River Retreat","Hoi An boutique wellness","Central Vietnam golf retreat","Hoi An pool villas", "Thu Bon river retreat"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/namia-river-retreat-hoi-an/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Namia River Retreat | Hoi An, Vietnam" },
        description: "A secluded boutique wellness retreat on the Thu Bon River, offering exclusive pool villas and deep recovery for golfers in Central Vietnam.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/namia-river-retreat-hoi-an/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-hero.webp",
            width: 1200,
            height: 630,
            alt: "Namia River Retreat | Hoi An, Vietnam | Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Namia River Retreat | Hoi An, Vietnam" },
        description: "A secluded boutique wellness retreat on the Thu Bon River, offering exclusive pool villas and deep recovery for golfers in Central Vietnam.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-hero.webp"],
    },
};

const images = [
 { src: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-hero.webp", alt: "Namia River Retreat - Namia River Retreat Hero", caption: "Namia River Retreat Hero" },
 { src: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-dining-area.webp", alt: "Namia River Retreat - Dining area", caption: "Dining area" },
 { src: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-luxury-on-the-river.webp", alt: "Namia River Retreat - Luxury on the river", caption: "Luxury on the river" },
 { src: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-pool-villa.webp", alt: "Namia River Retreat - Pool villa", caption: "Pool villa" },
 { src: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-premium-private-villa.webp", alt: "Namia River Retreat - Premium private villa", caption: "Premium private villa" },
 { src: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-relaxing-by-the-pool.webp", alt: "Namia River Retreat - Relaxing by the pool", caption: "Relaxing by the pool" },
 { src: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-riverfront-luxury.webp", alt: "Namia River Retreat - Riverfront luxury", caption: "Riverfront luxury" },
 { src: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-suite-interior.webp", alt: "Namia River Retreat - Suite interior", caption: "Suite interior" },
 { src: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-wellness-retreat.webp", alt: "Namia River Retreat - Wellness retreat", caption: "Wellness retreat" },
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
<DestinationBackLink country="Vietnam" countryLink="/destinations/vietnam/accommodations/" />
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Preferred Property — Vietnam</div>
 <h1 style={{ marginBottom: '1rem' }}>Namia River Retreat</h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"A secluded boutique wellness retreat on the Thu Bon River, offering exclusive pool villas and deep recovery for golfers in Central Vietnam."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
  <tr key="Category"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Category</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Boutique Wellness Retreat</td></tr>
  <tr key="Star Rating"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Star Rating</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>5 Star</td></tr>
  <tr key="Location"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Location</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Thu Bon River, Hoi An</td></tr>
  <tr key="Total Rooms"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Total Rooms</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>60 Pool Villas</td></tr>
  <tr key="Setting"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Setting</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Secluded island-like sanctuary on the river</td></tr>
  <tr key="Nearest Golf"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Nearest Golf</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Hoiana Shores (25 min), Montgomerie Links (30 min)</td></tr>
  <tr key="Key Amenity"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Key Amenity</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Daily Spa Inclusions, Private Pools, Herbal Bath Therapies</td></tr>
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
  <p>Namia River Retreat is a masterclass in boutique luxury, crafted specifically for travelers who seek deep immersion in wellness and localized culture. Nestled on an islet in the Thu Bon River, every villa here is a private pool sanctuary drawing inspiration from the heritage of Hoi An while delivering unparalleled privacy.</p>
  <p>For golfers, Namia operates as the ultimate decompression zone. The physical demands of playing world-class courses like Hoiana Shores are counterbalanced by the retreat's daily inclusive spa therapies, featuring traditional herbal baths and bespoke massages designed to restore the body and mind.</p>
  <p>The culinary journey is just as revitalizing, with menus focusing on fresh, organic, and locally sourced ingredients. Whether arriving back from a demanding round or heading out to explore the lantern-lit streets of the nearby Ancient Town, the Namia experience guarantees a profound sense of restoration.</p>
 </div>
 </div>
 </div>
 </section>
  <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/vietnam/namia-river-retreat-hoi-an/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from Namia River Retreat to the golf circuit.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Namia River Retreat",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Hoi An", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/namia-river-retreat-hoi-an/",
                          "sameAs": ["https://www.namiaretreat.com/","https://www.forbestravelguide.com/","https://guide.michelin.com/us/en","https://www.cntraveler.com/hotels/phuket/namia-river-retreat"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Namia River Retreat", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/namia-river-retreat-hoi-an/" }
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
                            <strong>Namia River Retreat</strong> operates as a premier <strong>5 Star</strong> boutique wellness retreat positioned in Hoi An, Vietnam. Featuring an architectural inventory of 60 pool villas, the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (All-pool private islet villas) and direct arterial access to Hoiana Shores (25 min), Montgomerie Links (30 min).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, Namia River Retreat minimizes daily transit friction across the Hoi An corridor while elevating off-course recovery through daily spa inclusions, private pools, herbal bath therapies and post-round recovery & wellness (Traditional herbal spa & mindfulness). Every AGS itinerary anchored at Namia River Retreat includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights Namia River Retreat&apos;s breakfast & dining quality (Plant-forward & local heritage dining), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Namia River Retreat"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/namia-river-retreat-hoi-an/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-hero.webp"
    addressLocality="Hoi An"
    addressCountry="VN"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="Herbal Wellness Island • Hoi An"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.8,
            highlight: "All-pool private islet villas"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.9,
            highlight: "Complete river island seclusion"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.8,
            highlight: "Traditional herbal spa & mindfulness"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.6,
            highlight: "Plant-forward & local heritage dining"
      }
]}
    verdict="Hoi An's newest ultra-luxury wellness retreat, situated on its own peaceful river island. All-pool villas, traditional Vietnamese herbal medicine therapies, and deep tranquility."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is Namia River Retreat to the nearest championship golf courses in Hoi An?","acceptedAnswer":{"@type":"Answer","text":"Namia River Retreat is positioned in Hoi An, Vietnam, offering direct private transfer access to Hoiana Shores (25 min), Montgomerie Links (30 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at Namia River Retreat?","acceptedAnswer":{"@type":"Answer","text":"Namia River Retreat features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does Namia River Retreat offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at Namia River Retreat enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Traditional herbal spa & mindfulness) and breakfast & dining quality (Plant-forward & local heritage dining)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at Namia River Retreat?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Namia River Retreat as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is Namia River Retreat to the nearest championship golf courses in Hoi An?",
                    "a": "Namia River Retreat is positioned in Hoi An, Vietnam, offering direct private transfer access to Hoiana Shores (25 min), Montgomerie Links (30 min). Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at Namia River Retreat?",
                    "a": "Namia River Retreat features Luxury Suites & Private Pool Villas within a 5-Star Luxury Golf Basecamp setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does Namia River Retreat offer?",
                    "a": "Guests at Namia River Retreat enjoy Executive Spa, Horizon Pool & Private Dining, alongside post-round recovery & wellness (Traditional herbal spa & mindfulness) and breakfast & dining quality (Plant-forward & local heritage dining)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at Namia River Retreat?",
                    "a": "Yes. As a preferred luxury golf tour operator in Vietnam, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Namia River Retreat as part of a complete stay-and-play golf package."
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

            <VenueItineraries venueHref="/accommodations/vietnam/namia-river-retreat-hoi-an/" venueName="Namia River Retreat" venueType="accommodation" />

</main>
 );
}
