import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
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
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Occupying its own serene palm-fringed islet on the Thu Bon River just minutes from Hoi An Ancient Town, Namia River Retreat is one of Central Vietnam&apos;s finest newer wellness sanctuaries — and a property Marcus has personally stayed at. All 60 accommodations are standalone private pool villas surrounded by lush nipa palms, offering genuine island quiet without being marooned far from Hoi An&apos;s restaurants.</p>
                        <p style={{ marginBottom: '1rem' }}>From the retreat&apos;s arrival pier and private vehicle staging area, AGS transfers reach Hoiana Shores Golf Club in 25 minutes, Montgomerie Links and BRG Da Nang in 25 to 30 minutes, and Ba Na Hills in roughly 55 minutes. Staying on the river gives groups a calm, resort-first rhythm while keeping Old Town lanterns five minutes away by complimentary boat or bicycle.</p>
                        <p>What elevates Namia for multi-round golf tours is its inclusive Vietnamese herbal wellness ritual (Thuoc Nam): daily herbal steam therapy, therapeutic massage, and unhurried plant-forward and coastal dining by the river.</p>
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
    inspectionDate="Personally Stayed & Inspected — Marcus Giles"
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Are daily wellness treatments included when staying at Namia River Retreat?","acceptedAnswer":{"@type":"Answer","text":"Yes. Namia River Retreat's signature all-villa stay includes a daily 90-minute holistic wellness journey featuring traditional Vietnamese herbal steam (Xong Hoi) and therapeutic bodywork — ideal for post-round recovery."}},{"@type":"Question","name":"How do golf transfers work from Namia River Retreat's river islet?","acceptedAnswer":{"@type":"Answer","text":"A short private bridge connects the islet smoothly to the road network, allowing your AGS luxury private touring vehicle to collect you and your clubs directly at reception for Hoiana Shores (25 min), Montgomerie Links (25–30 min), and BRG Da Nang (30 min)."}},{"@type":"Question","name":"Should we choose Nipa Pool Villas or River Pool Villas at Namia?","acceptedAnswer":{"@type":"Answer","text":"Both feature generous private plunge pools and lush privacy; River Pool Villas sit right along the Thu Bon water's edge with open sunrise/sunset river views, making them our top pick for couples and milestone trips."}},{"@type":"Question","name":"How easy is it to visit Hoi An Ancient Town from Namia River Retreat?","acceptedAnswer":{"@type":"Answer","text":"Very easy — the resort runs scenic wooden boat shuttles directly down the Thu Bon River to Hoi An Ancient Town, or it is a 10-minute ride by complimentary bamboo bicycle or private car."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "Are daily wellness treatments included when staying at Namia River Retreat?",
    "a": "Yes. Namia River Retreat's signature all-villa stay includes a daily 90-minute holistic wellness journey featuring traditional Vietnamese herbal steam (Xong Hoi) and therapeutic bodywork — ideal for post-round recovery."
  },
  {
    "q": "How do golf transfers work from Namia River Retreat's river islet?",
    "a": "A short private bridge connects the islet smoothly to the road network, allowing your AGS luxury private touring vehicle to collect you and your clubs directly at reception for Hoiana Shores (25 min), Montgomerie Links (25–30 min), and BRG Da Nang (30 min)."
  },
  {
    "q": "Should we choose Nipa Pool Villas or River Pool Villas at Namia?",
    "a": "Both feature generous private plunge pools and lush privacy; River Pool Villas sit right along the Thu Bon water's edge with open sunrise/sunset river views, making them our top pick for couples and milestone trips."
  },
  {
    "q": "How easy is it to visit Hoi An Ancient Town from Namia River Retreat?",
    "a": "Very easy — the resort runs scenic wooden boat shuttles directly down the Thu Bon River to Hoi An Ancient Town, or it is a 10-minute ride by complimentary bamboo bicycle or private car."
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

            <AccommodationConciergeBlock hotelName="Namia River Retreat" location="Hoi An" countryName="Vietnam" />

            <VenueItineraries venueHref="/accommodations/vietnam/namia-river-retreat-hoi-an/" venueName="Namia River Retreat" venueType="accommodation" />

</main>
 );
}
