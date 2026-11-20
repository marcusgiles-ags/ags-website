import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Little Riverside Hoi An | A Luxury Hotel & Spa" },
 description: "Experience 5-star boutique luxury on Hoi An's Thu Bon River, just 20 minutes from Hoiana Shores and Montgomerie Links. Book your Vietnam golf stay.",
 keywords: ["Little Riverside Hoi An", "Hoi An riverside luxury hotel", "Thu Bon River accommodation", "Vietnam golf tour hotel", "boutique hotel Hoi An"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/little-riverside-hoi-an/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Little Riverside Hoi An | A Luxury Hotel & Spa" },
        description: "Experience 5-star boutique luxury on Hoi An's Thu Bon River, just 20 minutes from Hoiana Shores and Montgomerie Links. Book your Vietnam golf stay.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/little-riverside-hoi-an/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/little-riverside-hoi-an/little-riverside-hoi-an-riverfront.webp",
            width: 1200,
            height: 630,
            alt: "Little Riverside Hoi An Luxury Hotel on the Thu Bon River | Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Little Riverside Hoi An | A Luxury Hotel & Spa" },
        description: "Experience 5-star boutique luxury on Hoi An's Thu Bon River, just 20 minutes from Hoiana Shores and Montgomerie Links. Book your Vietnam golf stay.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/little-riverside-hoi-an/little-riverside-hoi-an-riverfront.webp"],
    },
};

const images = [
 { src: "/images/accommodations/vietnam/little-riverside-hoi-an/little-riverside-hoi-an-riverfront.webp", alt: "Little Riverside Hoi An Exterior Riverfront View", caption: "Boutique Riverside Luxury" },
 { src: "/images/accommodations/vietnam/little-riverside-hoi-an/little-riverside-hoi-an-night-pool.webp", alt: "Little Riverside Hoi An Rooftop Pool at Night", caption: "Rooftop Pool Overlooking Thu Bon River" },
 { src: "/images/accommodations/vietnam/little-riverside-hoi-an/little-riverside-room.webp", alt: "Little Riverside Hoi An Luxury Suite", caption: "Traditional Faifo-Inspired Suites" },
 { src: "/images/accommodations/vietnam/little-riverside-hoi-an/little-riverside-dining.webp", alt: "Little Riverside Hoi An Fine Dining Restaurant", caption: "Authentic Vietnamese & International Cuisine" },
 { src: "/images/accommodations/vietnam/little-riverside-hoi-an/little-riverside-pool-area.webp", alt: "Little Riverside Hoi An Swimming Pool Day Time", caption: "Relaxation by the Pool" },
 { src: "/images/accommodations/vietnam/little-riverside-hoi-an/little-riverside-terrace.webp", alt: "Little Riverside Hoi An Private Terrace", caption: "Riverfront Terrace Views" },
 { src: "/images/accommodations/vietnam/little-riverside-hoi-an/little-riverside-roof.webp", alt: "Little Riverside Hoi An Rooftop Architecture", caption: "Iconic Heritage Architecture" },
];

export default function LittleRiversideHoiAn() {
 return (
 <main style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-tertiary)', minHeight: '100vh' }}>
 <Navbar />
 <header className="hero" style={{ minHeight: '85vh' }}>
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Hotel Collection — Vietnam</div>
 <h1 style={{ marginBottom: '1rem' }}>Little Riverside <br /><span className="text-gold">Hoi An</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">&quot;A boutique sanctuary on the banks of the Thu Bon River, capturing the golden era of Faifo with timeless elegance and exclusive luxury.&quot;</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
 {[
 ["Category", "Luxury Boutique Hotel & Spa"],
 ["Location", "Thu Bon Riverfront, Hoi An, Vietnam"],
 ["Setting", "Riverside — Walkable to Ancient Town"],
 ["Nearest Golf", "Hoiana Shores GC (20 min), Montgomerie Links (30 min)"],
 ["Design", "Traditional Faifo architecture with sun-washed yellow walls and warm timber"],
 ["Key Amenity", "Rooftop swimming pool, on-site spa, fitness center"],
 ].map(([k, v], i, arr) => (<tr key={k}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none' }}>{v}</td></tr>))}
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Little Riverside. A Luxury Hotel & Spa is an intimate 5-star boutique retreat perfectly positioned along the serene banks of the Thu Bon River. Inspired by the &quot;golden era&quot; of historic Hoi An (formerly known as Faifo), the property masterfully blends traditional architecture—characterized by its iconic sun-washed yellow walls and rich timber accents—with sophisticated modern luxury.</p>
 <p>Designed for tranquility and privacy, the hotel offers a limited number of meticulously appointed suites. Each room is a sanctuary of comfort, ensuring a personalized and highly attentive service experience. The crowning jewel of the property is its rooftop swimming pool, which provides breathtaking panoramic views over the river and ancient town skyline—an ideal spot for post-golf recovery at sunset.</p>
 <p>Strategically located just a short stroll from the UNESCO World Heritage Ancient Town, Little Riverside allows guests to effortlessly explore Hoi An's famous lantern-lit streets, tailors, and culinary scene. For the traveling golfer, its central location ensures swift and seamless access to the world-class coastal links courses of Central Vietnam, including the Top 100 Hoiana Shores Golf Club.</p>
 </div>
 </div>
 </div>
 </section>
  <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/vietnam/little-riverside-hoi-an/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates hotel bookings, tee times, and private VIP transfers across the Hoi An golf corridor.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Little Riverside Hoi An",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Hoi An", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/little-riverside-hoi-an/",
                          "sameAs": ["https://littleriversidehoian.com/","https://www.forbestravelguide.com/hotels/hoi-an-vietnam/little-riverside-hoi-an-a-luxury-hotel-spa","https://guide.michelin.com/en/hotels-stays/hoi-an/little-riverside-hoi-an-a-luxury-hotel-spa"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Little Riverside Hoi An", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/little-riverside-hoi-an/" }
                            ]
                        }
                    ]
                }) }} />
  
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Tucked quietly along the Thu Bon riverbank just a few minutes&apos; walk from Hoi An&apos;s Ancient Town, Little Riverside Hoi An is an intimate boutique property styled in warm Faifo ochre walls and carved timber. On our site inspections, its compact scale and attentive local team deliver a relaxed, welcoming feel that larger high-rise resorts rarely match.</p>
                        <p style={{ marginBottom: '1rem' }}>Golf logistics remain straightforward along Hoi An&apos;s southern edge: Hoiana Shores Golf Club lies 20 to 25 minutes south, Montgomerie Links and BRG Da Nang sit 25 to 30 minutes north, and Ba Na Hills Golf Club is roughly 55 minutes inland via private AGS vehicle.</p>
                        <p>Between rounds, guests unwind at the river-facing swimming pool, take complimentary resort bicycles out toward An Bang Beach, or step straight into Hoi An&apos;s evening riverside dining and bespoke tailoring district.</p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Little Riverside Hoi An"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/little-riverside-hoi-an/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/little-riverside-hoi-an/little-riverside-hoi-an-riverfront.webp"
    addressLocality="Hoi An"
    addressCountry="VN"
    overallScore={4.6}
    maxScore={5.0}
    gradeBadge="Boutique River Retreat • Hoi An"
    inspectionDate="Site-Verified by AGS On-Ground Team"
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.5,
            highlight: "Quaint riverview balcony suites"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.5,
            highlight: "Quiet Thu Bon riverbank setting"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.3,
            highlight: "Waterfront pool & intimate spa"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.4,
            highlight: "Traditional Hoi An local breakfast"
      }
]}
    verdict="A charming boutique hotel situated directly on the tranquil banks of the river, offering warm personalized hospitality and rapid transfers to Central Coast courses."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is Little Riverside Hoi An to Hoiana Shores and Montgomerie Links?","acceptedAnswer":{"@type":"Answer","text":"Hoiana Shores Golf Club is roughly 20–25 minutes south, Montgomerie Links and BRG Da Nang are 25–30 minutes north, and Da Nang International Airport (DAD) is 45 minutes away in a private AGS touring vehicle."}},{"@type":"Question","name":"Which rooms at Little Riverside Hoi An offer the best views and space for golfers?","acceptedAnswer":{"@type":"Answer","text":"Little River Suites and Riverfront Balcony Suites overlook the Thu Bon River directly and provide generous floor space for twin beds and golf travel bags."}},{"@type":"Question","name":"Can you walk to Hoi An Ancient Town restaurants from Little Riverside?","acceptedAnswer":{"@type":"Answer","text":"Yes. The lantern-lit streets, riverside restaurants, and tailoring shops of Hoi An Ancient Town sit roughly 5–7 minutes away on foot along the riverbank."}},{"@type":"Question","name":"Does Little Riverside Hoi An work well for couples or smaller fourballs?","acceptedAnswer":{"@type":"Answer","text":"Yes. Its intimate boutique scale makes it a strong fit for couples and 4-player groups seeking authentic Hoi An charm and personal service at smart value."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "How close is Little Riverside Hoi An to Hoiana Shores and Montgomerie Links?",
    "a": "Hoiana Shores Golf Club is roughly 20–25 minutes south, Montgomerie Links and BRG Da Nang are 25–30 minutes north, and Da Nang International Airport (DAD) is 45 minutes away in a private AGS touring vehicle."
  },
  {
    "q": "Which rooms at Little Riverside Hoi An offer the best views and space for golfers?",
    "a": "Little River Suites and Riverfront Balcony Suites overlook the Thu Bon River directly and provide generous floor space for twin beds and golf travel bags."
  },
  {
    "q": "Can you walk to Hoi An Ancient Town restaurants from Little Riverside?",
    "a": "Yes. The lantern-lit streets, riverside restaurants, and tailoring shops of Hoi An Ancient Town sit roughly 5–7 minutes away on foot along the riverbank."
  },
  {
    "q": "Does Little Riverside Hoi An work well for couples or smaller fourballs?",
    "a": "Yes. Its intimate boutique scale makes it a strong fit for couples and 4-player groups seeking authentic Hoi An charm and personal service at smart value."
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

            <AccommodationConciergeBlock hotelName="Little Riverside Hoi An" location="Hoi An" countryName="Vietnam" />

            <VenueItineraries venueHref="/accommodations/vietnam/little-riverside-hoi-an/" venueName="Little Riverside Hoi An" venueType="accommodation" />

</main>
 );
}
