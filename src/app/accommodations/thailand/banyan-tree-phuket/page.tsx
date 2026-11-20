import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Banyan Tree Phuket | Luxury Thailand Golf Villa Resort" },
 description: "Banyan Tree Phuket — iconic 5-star pool villa resort on Bang Tao Bay with direct access to Phuket's championship golf courses.",
 keywords: ["Banyan Tree Phuket", "luxury golf villa Phuket", "Phuket five star resort golf", "Thailand villa hotel golf", "Laguna Phuket golf accommodation"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/thailand/banyan-tree-phuket/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Banyan Tree Phuket | Luxury Thailand Golf Villa Resort" },
        description: "Banyan Tree Phuket — iconic 5-star pool villa resort on Bang Tao Bay with direct access to Phuket's championship golf courses.",
        url: "https://www.asiagolfspecialists.com/accommodations/thailand/banyan-tree-phuket/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/thailand/banyan-tree-phuket/thailand-luxury-hotel-banyan-tree-phuket-pool-villa-6.webp",
            width: 1200,
            height: 630,
            alt: "Banyan Tree Phuket | Golf Villa Resort Thailand | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Banyan Tree Phuket | Luxury Thailand Golf Villa Resort" },
        description: "Banyan Tree Phuket — iconic 5-star pool villa resort on Bang Tao Bay with direct access to Phuket's championship golf courses.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/thailand/banyan-tree-phuket/thailand-luxury-hotel-banyan-tree-phuket-pool-villa-6.webp"],
    },
};

const images = [
 { src: "/images/accommodations/thailand/banyan-tree-phuket/thailand-luxury-hotel-banyan-tree-phuket-pool-villa-6.webp", alt: "Banyan Tree Phuket Pool Villa Exterior Thailand - Premium Southeast Asia Golf Tours 2026", caption: "Pool villa exterior, Laguna Phuket" },
 { src: "/images/accommodations/thailand/banyan-tree-phuket/thailand-luxury-hotel-banyan-tree-phuket-resort-exterior-2.webp", alt: "Banyan Tree Phuket Resort Exterior Laguna Thailand", caption: "Resort exterior, Laguna Phuket" },
 { src: "/images/accommodations/thailand/banyan-tree-phuket/thailand-luxury-hotel-banyan-tree-phuket-double-pool-villa-3.webp", alt: "Banyan Tree Phuket Double Pool Villa Private Garden", caption: "DoublePool Villa with private garden" },
 { src: "/images/accommodations/thailand/banyan-tree-phuket/thailand-luxury-hotel-banyan-tree-phuket-spa-4.webp", alt: "Banyan Tree Phuket Award-Winning Spa Thailand - Premium Southeast Asia Golf Tours 2026", caption: "Award-winning Banyan Tree Spa, Phuket" },
 { src: "/images/accommodations/thailand/banyan-tree-phuket/thailand-luxury-hotel-banyan-tree-phuket-golf-view-5.webp", alt: "Banyan Tree Phuket Golf View Laguna Phuket - Premium Southeast Asia Golf Tours 2026", caption: "Golf views across Laguna Phuket" },
 { src: "/images/accommodations/thailand/banyan-tree-phuket/thailand-luxury-hotel-banyan-tree-main-pool-1.webp", alt: "Banyan Tree Phuket Grand Main Pool Laguna - Premium Southeast Asia Golf Tours 2026", caption: "Grand main pool complex, Laguna" },
];

export default function BanyanTreePhuket() {
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
 <h1 style={{ marginBottom: '1rem' }}>Banyan Tree <br /><span className="text-gold">Phuket</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"The spiritual home of the Golf Villa concept — where a 24-hour Villa Host coordinates every tee time, transfer, and spa booking."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
 {[
 ["Category", "Ultra-Luxury All-Pool-Villa Resort"],
 ["Star Rating", "5 Star (Banyan Tree Collection)"],
 ["Location", "Laguna Phuket, Bang Tao Bay, Phuket, Thailand"],
 ["Total Villas", "150 Private Pool Villas"],
 ["Setting", "Laguna Estate integrated resort complex"],
 ["Nearest Golf", "Laguna Golf Phuket (on-site, 2 min)"],
 ["Key Amenity", "DoublePool Villas, Villa Host, Banyan Tree Spa"],
 ].map(([k, v], i, arr) => (<tr key={k}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none' }}>{v}</td></tr>))}
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Banyan Tree Phuket invented the Golf Villa. Long before the concept became an industry standard, this Laguna Estate anchor property paired luxury pool villas with a fully embedded, 24-hour Villa Host who functions as a personal golf concierge — coordinating tee times, arranging transfers, and ensuring your equipment arrives at the course cleaned and ready before you do.</p>
 <p>The signature DoublePool Villas — featuring two private pools within a single villa compound — create an expansive outdoor living environment that functions as a private resort within the resort. The award-winning Banyan Tree Spa offers a golf-specific recovery programme, including deep tissue sports massage and hydrotherapy circuits, making recovery as active as the round itself.</p>
 <p>Sitting directly within the Laguna Phuket estate, the resort provides immediate access to Laguna Golf Phuket, Blue Canyon Country Club, and Mission Hills Phuket via private transfer — covering three distinctly different Phuket golf experiences from a single, magnificent base. For AGS groups, this is the automatic first-choice anchor in Phuket.</p>
 </div>
 </div>
 </div>
 </section>
  <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/thailand/banyan-tree-phuket/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS secures preferred room categories and priority tee times at Laguna Golf Phuket for all Banyan Tree guests.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Banyan Tree Phuket",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Phuket", "addressCountry": "TH" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/thailand/banyan-tree-phuket/",
                          "sameAs": ["https://www.banyantree.com/thailand/phuket","https://www.forbestravelguide.com/hotels/phuket-thailand/banyan-tree-phuket","https://guide.michelin.com/en/hotels-stays/phuket/banyan-tree-phuket","https://www.cntraveler.com/hotels/phuket/banyan-tree-phuket"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Thailand", "item": "https://www.asiagolfspecialists.com/destinations/thailand/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Banyan Tree Phuket", "item": "https://www.asiagolfspecialists.com/accommodations/thailand/banyan-tree-phuket/" }
                            ]
                        }
                    ]
                }) }} />
  
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Set beside shimmering saltwater lagoons inside the gated Laguna Phuket estate along Bang Tao Bay, the 150-villa Banyan Tree Phuket is an all-pool-villa classic that Marcus has personally stayed at and consistently recommends as Phuket&apos;s easiest luxury golf basecamp. Every guest stays in a high-walled tropical garden pool villa — from Serenity Pool Villas for couples to expansive DoublePool Villas for milestone stays.</p>
                        <p style={{ marginBottom: '1rem' }}>Golf access is genuinely doorstep-simple: Sir Nick Faldo&apos;s Laguna Golf Phuket sits two minutes away inside the same estate with complimentary resort buggy transfers straight to the clubhouse. Beyond Laguna, private AGS transfers reach Blue Canyon Country Club in 25 minutes and Red Mountain Golf Club in 35 minutes.</p>
                        <p>After 18 holes, golfers return to the original Banyan Tree Spa — renowned across Asia for deep sports-recovery therapies — followed by signature Thai fine dining at Saffron, breezy drinks along Bang Tao Beach, and Boat Avenue&apos;s vibrant restaurants five minutes outside the gate.</p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Banyan Tree Phuket"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/thailand/banyan-tree-phuket/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/thailand/banyan-tree-phuket/thailand-luxury-hotel-banyan-tree-phuket-pool-villa-6.webp"
    addressLocality="Phuket"
    addressCountry="TH"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="Laguna Luxury Pool Villa Icon • Phuket"
    inspectionDate="Personally Stayed & Inspected — Marcus Giles"
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.9,
            highlight: "Expansive private pool villas"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.8,
            highlight: "High-walled tropical garden sanctuaries"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.8,
            highlight: "Iconic Banyan Tree Spa originator"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.7,
            highlight: "Saffron Thai fine dining & golf clubhouse"
      }
]}
    verdict="The crown jewel of Laguna Phuket. Every villa features a secluded private pool, with Sir Nick Faldo's Laguna Golf Phuket literally on your doorstep and championship courses minutes away."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is Banyan Tree Phuket to Laguna Golf Phuket and Red Mountain?","acceptedAnswer":{"@type":"Answer","text":"Laguna Golf Phuket is on-site inside the Laguna estate (2 minutes by resort buggy). Blue Canyon Country Club is roughly 25 minutes north, and Red Mountain Golf Club is 35 minutes inland via private AGS vehicle."}},{"@type":"Question","name":"What are the best villa categories at Banyan Tree Phuket for golf groups?","acceptedAnswer":{"@type":"Answer","text":"Two-Bedroom Pool Villas and DoublePool Villas give fourballs shared poolside entertaining pavilions with separate bedrooms and dedicated Villa Hosts, while Banyan Pool Villas are ideal for couples and single-occupancy golfers."}},{"@type":"Question","name":"How far is Banyan Tree Phuket from Phuket International Airport (HKT)?","acceptedAnswer":{"@type":"Answer","text":"Phuket International Airport is approximately 25–30 minutes north via private AGS airport transfer, avoiding the heavier traffic around Patong and southern Phuket."}},{"@type":"Question","name":"Are there dining and nightlife options outside the resort within easy reach?","acceptedAnswer":{"@type":"Answer","text":"Yes. Aside from Banyan Tree's Saffron, Watercourt, and Tre restaurants, Bang Tao Beach's chic beach clubs (Catch, Carpe Diem) and Boat Avenue's dining precinct sit just 5–10 minutes away."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "How close is Banyan Tree Phuket to Laguna Golf Phuket and Red Mountain?",
    "a": "Laguna Golf Phuket is on-site inside the Laguna estate (2 minutes by resort buggy). Blue Canyon Country Club is roughly 25 minutes north, and Red Mountain Golf Club is 35 minutes inland via private AGS vehicle."
  },
  {
    "q": "What are the best villa categories at Banyan Tree Phuket for golf groups?",
    "a": "Two-Bedroom Pool Villas and DoublePool Villas give fourballs shared poolside entertaining pavilions with separate bedrooms and dedicated Villa Hosts, while Banyan Pool Villas are ideal for couples and single-occupancy golfers."
  },
  {
    "q": "How far is Banyan Tree Phuket from Phuket International Airport (HKT)?",
    "a": "Phuket International Airport is approximately 25–30 minutes north via private AGS airport transfer, avoiding the heavier traffic around Patong and southern Phuket."
  },
  {
    "q": "Are there dining and nightlife options outside the resort within easy reach?",
    "a": "Yes. Aside from Banyan Tree's Saffron, Watercourt, and Tre restaurants, Bang Tao Beach's chic beach clubs (Catch, Carpe Diem) and Boat Avenue's dining precinct sit just 5–10 minutes away."
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

            <AccommodationConciergeBlock hotelName="Banyan Tree Phuket" location="Phuket" countryName="Thailand" />

            <VenueItineraries venueHref="/accommodations/thailand/banyan-tree-phuket/" venueName="Banyan Tree Phuket" venueType="accommodation" />

</main>
 );
}
