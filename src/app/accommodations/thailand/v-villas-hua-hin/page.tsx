import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "V Villas Hua Hin | MGallery Collection Thailand" },
 description: "V Villas Hua Hin (MGallery) is an ultra-luxury private pool villa resort on Hua Hin beach with 24-hour butler service and access to Black Mountain Golf Club.",
 keywords: ["V Villas Hua Hin", "Hua Hin luxury accommodation", "Hua Hin private pool villa", "MGallery Hua Hin", "Thailand golf resort", "luxury golf travel Hua Hin"],
 alternates: {
 canonical: "https://www.asiagolfspecialists.com/accommodations/thailand/v-villas-hua-hin/",
 },
 openGraph: {
 type: "website",
 title: { absolute: "V Villas Hua Hin | MGallery Collection Thailand" },
 description: "V Villas Hua Hin (MGallery) is an ultra-luxury private pool villa resort on Hua Hin beach with 24-hour butler service and access to Black Mountain Golf Club.",
 url: "https://www.asiagolfspecialists.com/accommodations/thailand/v-villas-hua-hin/",
 siteName: "Asia Golf Specialists",
 images: [{
 url: "https://www.asiagolfspecialists.com/images/accommodations/thailand/v-villas-hua-hin/v-villas-hua-hin-pool.webp",
 width: 1200,
 height: 630,
 alt: "V Villas Hua Hin MGallery Private Pool Villa Thailand 2026",
 }],
 },
 twitter: {
 card: "summary_large_image",
 title: { absolute: "V Villas Hua Hin | MGallery Collection Thailand" },
 description: "V Villas Hua Hin (MGallery) is an ultra-luxury private pool villa resort on Hua Hin beach with 24-hour butler service and access to Black Mountain Golf Club.",
 images: ["https://www.asiagolfspecialists.com/images/accommodations/thailand/v-villas-hua-hin/v-villas-hua-hin-pool.webp"],
 },
};

const images = [
 { src: "/images/accommodations/thailand/v-villas-hua-hin/v-villas-hua-hin-pool.webp", alt: "V Villas Hua Hin MGallery Private Pool Villa Thailand 2026", caption: "Exclusive private pool villa" },
 { src: "/images/accommodations/thailand/v-villas-hua-hin/v-villas-hua-hin-2-bedroom.webp", alt: "V Villas Hua Hin MGallery 2 Bedroom Suite Thailand 2026", caption: "Spacious two-bedroom pool suite" },
 { src: "/images/accommodations/thailand/v-villas-hua-hin/v-villas-hua-hin-aerial.webp", alt: "V Villas Hua Hin MGallery Aerial View Beachfront Thailand 2026", caption: "Aerial view of beachfront property" },
 { src: "/images/accommodations/thailand/v-villas-hua-hin/v-villas-hua-hin-bedroom.webp", alt: "V Villas Hua Hin MGallery Luxury Bedroom Interior Thailand 2026", caption: "Luxury bedroom interior" },
 { src: "/images/accommodations/thailand/v-villas-hua-hin/v-villas-hua-hin-pool-villa.webp", alt: "V Villas Hua Hin MGallery Tropical Pool Villa Thailand 2026", caption: "Tropical private pool villa" },
];

export default function VVillasHuaHin() {
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
 <h1 style={{ marginBottom: '1rem' }}>V Villas <br /><span className="text-gold">MGallery</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"A sophisticated private haven on Hua Hin beach, redefining exclusive luxury with seamless architectural grace."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
 {[
 ["Category", "Luxury Private Pool Villas"],
 ["Star Rating", "5 Star (MGallery Collection)"],
 ["Location", "Hua Hin Beach, Thailand"],
 ["Total Villas", "28 Exclusive Villas"],
 ["Architecture", "J+H Boiffils"],
 ["Nearest Golf", "Black Mountain (25 min), Banyan (20 min)"],
 ["Key Amenity", "24-Hour Butler Service, Michelin Key Awarded"],
 ].map(([k, v], i, arr) => (<tr key={k}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none' }}>{v}</td></tr>))}
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>V Villas Hua Hin, an MGallery Hotel Collection property, represents the pinnacle of intimate luxury on Thailand's royal coast. Designed by renowned architects J+H Boiffils, the resort seamlessly blends modern tropical aesthetics with the serene environment of Hua Hin beach.</p>
 <p>With only 28 exclusive villas, each featuring a private pool and dedicated 24-hour butler service, guests are guaranteed absolute privacy and uncompromising attention to detail. The property is a sanctuary of calm, recognized with a Michelin Key Award for its extraordinary hospitality standards.</p>
 <p>For golf travellers, V Villas Hua Hin serves as the ultimate retreat after playing the region's championship courses, including Black Mountain and Banyan Golf Club. Asia Golf Specialists ensures seamless logistical flow from this private oasis to the finest fairways in the country.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/thailand/v-villas-hua-hin/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>V Villas Hua Hin is highly sought after. AGS coordinates all reservations and Hua Hin golf programmes.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 
 {/* GEO Executive Summary / AI Citation Block */}
 <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Designed by French architectural studio J+H Boiffils as a Michelin-Key-awarded enclave of just 28 high-walled private pool villas stepping down to Hua Hin Beach, V Villas Hua Hin (MGallery) is our site-verified choice for golfers who prioritise total privacy and 24-hour butler care. Terraced reflecting pools and sleek dark-timber architecture channel quiet sophistication minutes south of central Hua Hin.</p>
                        <p style={{ marginBottom: '1rem' }}>Golf logistics stay crisp and unhurried: Pineapple Valley (formerly Banyan) Golf Club sits 15 to 20 minutes away, Black Mountain Golf Club is 25 minutes inland, and your dedicated butler coordinates directly with AGS drivers so clubs are loaded ahead of morning tee times.</p>
                        <p>After 18 holes, guests return to private 9-metre villa pools, sunken over-water fine dining at Villazzo Restaurant, rooftop cocktails at AKOYA|Beach Lounge, and in-villa V Spa recovery massages.</p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="V Villas Hua Hin (MGallery)"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/thailand/v-villas-hua-hin/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/thailand/v-villas-hua-hin/v-villas-hua-hin-pool.webp"
    addressLocality="Hua Hin"
    addressCountry="TH"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="Private Pool Villa Sanctuary • Hua Hin"
    inspectionDate="Site-Verified by AGS On-Ground Team"
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.8,
            highlight: "Palatial multi-bedroom pool villas"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.9,
            highlight: "High-walled private villa seclusion"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.7,
            highlight: "V Spa treatments & beachfront pool"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.7,
            highlight: "Villazzo award-winning sunken dining"
      }
]}
    verdict="Designed by J.A.M.S. Architects, V Villas is an intimate enclave of palatial private pool villas offering absolute privacy, sunken dining over reflecting pools, and VIP golf transfers to Black Mountain."
  />


 {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What villa sizes are available at V Villas Hua Hin for fourballs and small golf groups?","acceptedAnswer":{"@type":"Answer","text":"V Villas offers One-, Two-, and Three-Bedroom Private Pool Villas plus Beachfront Pool Villa Suites — making the 2- and 3-bedroom residences an ultra-private layout for fourballs and couples travelling together."}},{"@type":"Question","name":"How far is V Villas Hua Hin from Black Mountain and Pineapple Valley Golf Clubs?","acceptedAnswer":{"@type":"Answer","text":"Pineapple Valley (formerly Banyan) Golf Club is roughly 15–20 minutes away, Black Mountain Golf Club is 25 minutes, and Palm Hills or Springfield Royal are 25–35 minutes by private AGS transfer."}},{"@type":"Question","name":"Does every villa at V Villas Hua Hin include 24-hour butler service?","acceptedAnswer":{"@type":"Answer","text":"Yes. Every villa is assigned a dedicated 24-hour butler who handles morning floating or in-villa breakfasts before early tee times, garment pressing, spa bookings, and private BBQ setups."}},{"@type":"Question","name":"How close is V Villas Hua Hin to Hua Hin dining and shopping?","acceptedAnswer":{"@type":"Answer","text":"Bluport Hua Hin Resort Mall sits right across the street (2 minutes), Cicada Weekend Market is 5 minutes south, and central Hua Hin Night Market is a quick 7-minute ride north."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "What villa sizes are available at V Villas Hua Hin for fourballs and small golf groups?",
    "a": "V Villas offers One-, Two-, and Three-Bedroom Private Pool Villas plus Beachfront Pool Villa Suites — making the 2- and 3-bedroom residences an ultra-private layout for fourballs and couples travelling together."
  },
  {
    "q": "How far is V Villas Hua Hin from Black Mountain and Pineapple Valley Golf Clubs?",
    "a": "Pineapple Valley (formerly Banyan) Golf Club is roughly 15–20 minutes away, Black Mountain Golf Club is 25 minutes, and Palm Hills or Springfield Royal are 25–35 minutes by private AGS transfer."
  },
  {
    "q": "Does every villa at V Villas Hua Hin include 24-hour butler service?",
    "a": "Yes. Every villa is assigned a dedicated 24-hour butler who handles morning floating or in-villa breakfasts before early tee times, garment pressing, spa bookings, and private BBQ setups."
  },
  {
    "q": "How close is V Villas Hua Hin to Hua Hin dining and shopping?",
    "a": "Bluport Hua Hin Resort Mall sits right across the street (2 minutes), Cicada Weekend Market is 5 minutes south, and central Hua Hin Night Market is a quick 7-minute ride north."
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

 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
 "@context": "https://schema.org",
 "@graph": [
 {
 "@type": "Hotel",
 "name": "V Villas Hua Hin, MGallery Collection",
 "starRating": { "@type": "Rating", "ratingValue": "5" },
 "address": { "@type": "PostalAddress", "addressLocality": "Hua Hin", "addressCountry": "TH" },
 "image": `https://www.asiagolfspecialists.com${images[0].src}`,
 "url": "https://www.asiagolfspecialists.com/accommodations/thailand/v-villas-hua-hin/",
 "sameAs": ["https://www.vvillashuahin.com/"]
 },
 {
 "@type": "BreadcrumbList",
 "itemListElement": [
 { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
 { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
 { "@type": "ListItem", "position": 3, "name": "Thailand", "item": "https://www.asiagolfspecialists.com/destinations/thailand/accommodations/" },
 { "@type": "ListItem", "position": 4, "name": "V Villas Hua Hin", "item": "https://www.asiagolfspecialists.com/accommodations/thailand/v-villas-hua-hin/" }
 ]
 },
 {
 "@type": "FAQPage",
 "mainEntity": [
 {
 "@type": "Question",
 "name": "What makes V Villas Hua Hin a great choice for a golf tour?",
 "acceptedAnswer": { "@type": "Answer", "text": "With its private pool villas and 24-hour butler service, it provides the ultimate relaxing retreat after playing demanding courses like Black Mountain and Banyan." }
 },
 {
 "@type": "Question",
 "name": "Can Asia Golf Specialists book my stay at V Villas Hua Hin?",
 "acceptedAnswer": { "@type": "Answer", "text": "Yes. We secure preferred rates and VIP room upgrades at V Villas Hua Hin as part of your bespoke golf tour." }
 }
 ]
 }
 ]
 }) }} />
 
            <AccommodationConciergeBlock hotelName="V Villas Hua Hin (MGallery)" location="Hua Hin" countryName="Thailand" />

            <VenueItineraries venueHref="/accommodations/thailand/v-villas-hua-hin/" venueName="V Villas Hua Hin (MGallery)" venueType="accommodation" />

</main>
 );
}
