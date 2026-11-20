import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "TIA Wellness Resort | Da Nang, Vietnam" },
 description: "Experience luxury wellness in Da Nang. Private pool villas, daily spa, and the premier wellness-led beachfront base for Central Vietnam golf tours.",
 keywords: ["TIA Wellness Resort","Da Nang luxury wellness resort","Central Vietnam golf accommodation","Private pool villa Da Nang"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/tia-wellness-resort-danang/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "TIA Wellness Resort | Da Nang, Vietnam" },
        description: "Experience luxury wellness in Da Nang. Private pool villas, daily spa, and the premier wellness-led beachfront base for Central Vietnam golf tours.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/tia-wellness-resort-danang/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/TIA-wellness-resort-danang/tia-wellness-resort-on-the-beach.webp",
            width: 1200,
            height: 630,
            alt: "TIA Wellness Resort | Da Nang, Vietnam | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "TIA Wellness Resort | Da Nang, Vietnam" },
        description: "Experience luxury wellness in Da Nang. Private pool villas, daily spa, and the premier wellness-led beachfront base for Central Vietnam golf tours.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/TIA-wellness-resort-danang/tia-wellness-resort-on-the-beach.webp"],
    },
};

const images = [
 { src: "/images/accommodations/vietnam/TIA-wellness-resort-danang/tia-wellness-resort-on-the-beach.webp", alt: "TIA Wellness Resort - Beachfront - Premium Southeast Asia Golf Tours", caption: "TIA Wellness Resort Beachfront" },
 { src: "/images/accommodations/vietnam/TIA-wellness-resort-danang/tia-wellness-resort-main-pool-area.webp", alt: "TIA Wellness Resort - Main Pool - Premium Southeast Asia Golf Tours", caption: "TIA Wellness Resort Main Pool" },
 { src: "/images/accommodations/vietnam/TIA-wellness-resort-danang/tia-wellness-resort-private-villa.webp", alt: "TIA Wellness Resort - Private Villa - Premium Southeast Asia Golf Tours", caption: "TIA Wellness Resort Private Villa" },
 { src: "/images/accommodations/vietnam/TIA-wellness-resort-danang/tia-wellness-resort-villa-interior.webp", alt: "TIA Wellness Resort - Villa Interior - Premium Southeast Asia Golf Tours", caption: "TIA Wellness Resort Villa Interior" },
 { src: "/images/accommodations/vietnam/TIA-wellness-resort-danang/tia-wellness-resort-villa-view.webp", alt: "TIA Wellness Resort - Villa View - Premium Southeast Asia Golf Tours", caption: "TIA Wellness Resort Villa View" },
 { src: "/images/accommodations/vietnam/TIA-wellness-resort-danang/tia-wellness-resort-spa-massage.webp", alt: "TIA Wellness Resort - Spa Massage - Premium Southeast Asia Golf Tours", caption: "TIA Wellness Resort Spa" }
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
 <h1 style={{ marginBottom: '1rem' }}>TIA Wellness Resort</h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Experience luxury wellness in Da Nang. Private pool villas, daily spa, and the premier wellness-led beachfront base for Central Vietnam golf tours."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
  <tr key="Category"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Category</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Wellness Resort</td></tr>
  <tr key="Star Rating"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Star Rating</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>5 Star</td></tr>
  <tr key="Location"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Location</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Vo Nguyen Giap St, Da Nang</td></tr>
  <tr key="Total Rooms"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Total Rooms</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>87 Private Pool Villas</td></tr>
  <tr key="Setting"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Setting</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Beachfront on My Khe Beach</td></tr>
  <tr key="Nearest Golf"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Nearest Golf</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>BRG Da Nang (10 min), Montgomerie Links (10 min)</td></tr>
  <tr key="Key Amenity"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Key Amenity</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Inclusive Spa Treatments, Private Pool Villas</td></tr>
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
  <p>TIA Wellness Resort redefines the luxury golf holiday by integrating restorative wellness directly into your stay. As Asia's first resort to offer inclusive spa treatments, it provides the perfect antidote to the physical demands of playing consecutive rounds on Central Vietnam's challenging courses.</p>
  <p>Every accommodation is a private villa with its own pool and courtyard, ensuring absolute privacy and tranquility. Located directly on the stunning My Khe Beach, the resort is incredibly convenient for golfers, positioned just 10 minutes from both BRG Da Nang Golf Resort and Montgomerie Links.</p>
  <p>AGS strongly recommends TIA Wellness Resort for couples and groups who prioritize recovery and relaxation as much as the golf itself. Returning from a round to a guaranteed massage and your own private plunge pool represents the pinnacle of luxury golf travel in Vietnam.</p>
 </div>
 </div>
 </div>
 </section>
  <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/vietnam/tia-wellness-resort-danang/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from TIA Wellness Resort to the golf circuit.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "TIA Wellness Resort",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Da Nang", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/tia-wellness-resort-danang/",
                          "sameAs": ["https://tiawellnessresort.com/","https://www.forbestravelguide.com/hotels/da-nang-vietnam/tia-wellness-resort","https://guide.michelin.com/en/hotels-stays/da-nang/tia-wellness-resort","https://www.cntraveler.com/hotels/da-nang/tia-wellness-resort"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "TIA Wellness Resort", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/tia-wellness-resort-danang/" }
                            ]
                        }
                    ]
                }) }} />
  
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Fronting My Khe Beach just south of central Da Nang, the 87-villa TIA Wellness Resort is an all-pool-villa beachfront sanctuary that Marcus has personally stayed at and strongly recommends for couples and health-focused fourballs. Every single guest stays in a minimalist walled private pool villa — guaranteeing total quiet and immediate recovery between demanding coastal rounds.</p>
                        <p style={{ marginBottom: '1rem' }}>Its position on Vo Nguyen Giap Boulevard places golfers right at the gateway to Central Vietnam&apos;s fairways: BRG Da Nang Golf Resort and Montgomerie Links sit just 10 to 15 minutes south, Hoiana Shores Golf Club is 30 minutes south, Ba Na Hills is 40 minutes inland, and Da Nang International Airport (DAD) is only 15 minutes away.</p>
                        <p>What makes TIA genuinely special on a 4-or-5-round week is its Wellness-Inclusive rate: every stay includes two daily spa treatments (80 minutes total per guest per day) inside one of Asia&apos;s largest private resort wellness centres, plus flexible all-day breakfast.</p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="TIA Wellness Resort"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/tia-wellness-resort-danang/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/TIA-wellness-resort-danang/tia-wellness-resort-on-the-beach.webp"
    addressLocality="Da Nang"
    addressCountry="VN"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="All-Pool Villa Spa Haven • Da Nang"
    inspectionDate="Personally Stayed & Inspected — Marcus Giles"
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.8,
            highlight: "Minimalist private pool villas"
      },
      {
            label: "Villa & Beachfront Privacy",
            score: 9.8,
            highlight: "Direct My Khe beachfront seclusion"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.9,
            highlight: "Daily inclusive wellness & recovery therapies"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.6,
            highlight: "Creative healthy plant-based & grill dining"
      }
]}
    verdict="A dedicated private-villa wellness retreat on Da Nang's golden coastline. Includes daily holistic wellness treatments with every stay, ideal for regenerating sore muscles after intense golf competition."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How many spa treatments are included per day at TIA Wellness Resort?","acceptedAnswer":{"@type":"Answer","text":"TIA's standard Wellness-Inclusive stay includes two treatments per guest per night (totalling 80 minutes daily) — from deep-tissue sports massage to herbal reflexology and breathwork — which AGS schedules for your post-round afternoons."}},{"@type":"Question","name":"How close is TIA Wellness Resort to Da Nang's golf courses and airport?","acceptedAnswer":{"@type":"Answer","text":"BRG Da Nang and Montgomerie Links are 10–15 minutes south, Hoiana Shores is 30 minutes south, Ba Na Hills is 40 minutes inland, and Da Nang International Airport (DAD) is just 15 minutes away."}},{"@type":"Question","name":"Are multi-bedroom private pool villas available for fourballs at TIA Wellness Resort?","acceptedAnswer":{"@type":"Answer","text":"Yes. Alongside One-Bedroom Pool Villas for couples, TIA offers Two- and Three-Bedroom Oceanfront and Garden Pool Villas with shared living pavilions and private pools ideal for fourballs."}},{"@type":"Question","name":"Can golfers request early breakfast or hearty protein options alongside TIA's wellness menu?","acceptedAnswer":{"@type":"Answer","text":"Yes. TIA serves breakfast anywhere, anytime — including early in-villa breakfast before dawn tee times — and pairs plant-forward wellness dishes with quality grilled seafood, steaks, and international classics at The Dining Room and The Ocean Bistro."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "How many spa treatments are included per day at TIA Wellness Resort?",
    "a": "TIA's standard Wellness-Inclusive stay includes two treatments per guest per night (totalling 80 minutes daily) — from deep-tissue sports massage to herbal reflexology and breathwork — which AGS schedules for your post-round afternoons."
  },
  {
    "q": "How close is TIA Wellness Resort to Da Nang's golf courses and airport?",
    "a": "BRG Da Nang and Montgomerie Links are 10–15 minutes south, Hoiana Shores is 30 minutes south, Ba Na Hills is 40 minutes inland, and Da Nang International Airport (DAD) is just 15 minutes away."
  },
  {
    "q": "Are multi-bedroom private pool villas available for fourballs at TIA Wellness Resort?",
    "a": "Yes. Alongside One-Bedroom Pool Villas for couples, TIA offers Two- and Three-Bedroom Oceanfront and Garden Pool Villas with shared living pavilions and private pools ideal for fourballs."
  },
  {
    "q": "Can golfers request early breakfast or hearty protein options alongside TIA's wellness menu?",
    "a": "Yes. TIA serves breakfast anywhere, anytime — including early in-villa breakfast before dawn tee times — and pairs plant-forward wellness dishes with quality grilled seafood, steaks, and international classics at The Dining Room and The Ocean Bistro."
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

            <AccommodationConciergeBlock hotelName="TIA Wellness Resort" location="Da Nang" countryName="Vietnam" />

            <VenueItineraries venueHref="/accommodations/vietnam/tia-wellness-resort-danang/" venueName="TIA Wellness Resort" venueType="accommodation" />

</main>
 );
}
