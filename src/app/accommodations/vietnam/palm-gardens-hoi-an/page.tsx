import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Palm Gardens Resort Hoi An | Vietnam" },
 description: "Palm Garden Beach Resort Hoi An: 5-star luxury on An Bang Beach. Perfect for Hoi An golf. Book your Vietnam/Thailand Tour with us!",
 keywords: ["Palm Garden Beach Resort Hoi An", "Hoi An beachfront luxury hotel golf", "An Bang Beach resort Vietnam", "Hoiana Shores accommodation", "Central Vietnam golf resort"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/palm-gardens-hoi-an/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Palm Gardens Resort Hoi An | Vietnam" },
        description: "Palm Garden Beach Resort Hoi An: 5-star luxury on An Bang Beach. Perfect for Hoi An golf. Book your Vietnam/Thailand Tour with us!",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/palm-gardens-hoi-an/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-hero-1.webp",
            width: 1200,
            height: 630,
            alt: "Palm Garden Beach Resort Hoi An | Luxury Golf Base Central Vietnam | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Palm Gardens Resort Hoi An | Vietnam" },
        description: "Palm Garden Beach Resort Hoi An: 5-star luxury on An Bang Beach. Perfect for Hoi An golf. Book your Vietnam/Thailand Tour with us!",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-hero-1.webp"],
    },
};

const images = [
 { src: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-hero-1.webp", alt: "Palm Garden Beach Resort & Spa Hoi An Vietnam Hero", caption: "Palm Garden Beach Resort beachfront" },
 { src: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-aerial-2.webp", alt: "Palm Garden Beach Resort Hoi An Aerial View Vietnam", caption: "Aerial view of Palm Garden resort, Hoi An" },
 { src: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-beachfront-3.webp", alt: "Palm Garden Resort An Bang Beach Hoi An - Premium Southeast Asia Golf Tours 2026", caption: "An Bang Beach resort frontage" },
 { src: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-bungalow-4.webp", alt: "Palm Garden Hoi An Beachfront Bungalow Villa - Premium Southeast Asia Golf Tours 2026", caption: "Beachfront Bungalow Villa" },
 { src: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-outdoor-pool-5.webp", alt: "Palm Garden Hoi An Outdoor Pool Gardens Vietnam - Premium Southeast Asia Golf Tours 2026", caption: "Outdoor Pool Gardens" },
 { src: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-deluxe-ocean-villa-6.webp", alt: "Palm Garden Hoi An Deluxe Ocean Villa Private Pool", caption: "Deluxe Ocean Villa Private Pool" },
 { src: "/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-palm-suite-bath-7.webp", alt: "Palm Garden Hoi An Palm Suite Luxury Bathroom - Premium Southeast Asia Golf Tours 2026", caption: "Palm Suite Luxury Bathroom" },
];

export default function PalmGardensHoiAn() {
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
 <h1 style={{ marginBottom: '1rem' }}>Palm Garden <br /><span className="text-gold">Beach Resort Hoi An</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Hoi An's quintessential beachside retreat — spacious, relaxed, and perfectly positioned for the coast's finest courses."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
 {[
 ["Category", "Luxury Beachfront Resort & Spa"],
 ["Star Rating", "5 Star"],
 ["Location", "An Bang Beach, Hoi An, Quang Nam, Vietnam"],
 ["Total Rooms", "186 Rooms, Villas & Bungalows"],
 ["Setting", "Beachfront, 5 min to Hoi An Ancient Town"],
 ["Nearest Golf", "Hoiana Shores GC (15–20 min), Montgomerie Links (20 min), Ba Na Hills (50 min)"],
 ["Key Amenity", "3 Pools, Spa, Private Beach, Tennis"],
 ].map(([k, v], i, arr) => (<tr key={k}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none' }}>{v}</td></tr>))}
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Palm Garden Beach Resort & Spa occupies a prime stretch of An Bang Beach — consistently rated among Vietnam's finest coastal strips. Set within beautifully landscaped tropical gardens just five minutes from the UNESCO World Heritage town of Hoi An, the resort combines accessible luxury with genuine Vietnamese warmth, creating the region's most characterful premium property.</p>
 <p>The resort's 186 rooms, pool villas, and beachfront bungalows give AGS groups genuine flexibility — from oceanview suites for solo travellers to expansive private pool villas for those who need space to debrief a full day of competitive golf. The three pool areas include a dedicated adult pool that provides the perfect quiet recovery environment after rounds at nearby Hoiana Shores Golf Club.</p>
 <p>For international groups seeking the full Hoi An experience alongside their golf, Palm Garden provides the ideal blend. It is close enough to Hoiana Shores, Montgomerie Links, and BRG Da Nang for efficient daily play, while its position on An Bang Beach and proximity to Hoi An's ancient town ensures evenings are as memorable as the golf itself.</p>
 </div>
 </div>
 </div>
 </section>
  <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/vietnam/palm-gardens-hoi-an/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS secures preferred rates and priority tee times at Hoiana Shores for all Palm Garden guests.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Palm Garden Beach Resort Hoi An",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Hoi An", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/palm-gardens-hoi-an/",
                          "sameAs": ["https://palmgardenresort.com.vn/","https://www.booking.com/hotel/vn/palm-garden-beach-resort.en-gb.html","https://www.tripadvisor.com/Hotel_Review-g298082-d307908-Reviews-Palm_Garden_Beach_Resort_Spa-Hoi_An_Quang_Nam_Province.html","https://www.agoda.com/palm-garden-beach-resort-spa/hotel/hoi-an-vn.html"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Palm Garden Beach Resort Hoi An", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/palm-gardens-hoi-an/" }
                            ]
                        }
                    ]
                }) }} />
  
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Spread across five hectares of shaded tropical palms directly on Cua Dai Beach just south of An Bang, Palm Garden Beach Resort Hoi An is a relaxed, proven beachfront classic that Marcus has personally stayed at and trusts for larger touring parties. Rather than high-rise corridors, its 186 rooms and garden or beachfront bungalows nestle beneath more than 400 palm varieties leading straight onto private sand.</p>
                        <p style={{ marginBottom: '1rem' }}>Location-wise, Palm Garden sits squarely between Hoi An&apos;s southern and northern fairways: Hoiana Shores Golf Club is 15 to 20 minutes south across Cua Dai Bridge, Montgomerie Links and BRG Da Nang are 20 to 25 minutes north, and Hoi An Ancient Town is just 10 minutes inland.</p>
                        <p>Golf groups love the resort&apos;s easygoing pace: a huge 52-metre free-form beachfront swimming pool, breezy oceanfront dining at Colibri Beach Restaurant, Palm Spa recovery massages, and spacious bungalows where fourballs can gather on garden verandahs.</p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Palm Garden Beach Resort Hoi An"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/palm-gardens-hoi-an/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/palm-gardens-hoi-an/vietnam-luxury-hotel-palm-gardens-hoi-an-hero-1.webp"
    addressLocality="Hoi An"
    addressCountry="VN"
    overallScore={4.6}
    maxScore={5.0}
    gradeBadge="Classic Tropical Beach Resort • Hoi An"
    inspectionDate="Personally Stayed & Inspected — Marcus Giles"
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.4,
            highlight: "Shaded palm grove bungalows"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.5,
            highlight: "5 hectares of manicured gardens"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.4,
            highlight: "Vast lagoon pool & palm spa"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.3,
            highlight: "Extensive beachfront international buffet"
      }
]}
    verdict="A long-standing favorite set amidst five hectares of landscaped tropical gardens on Cua Dai Beach. Laid-back beachfront bungalows and easy logistics into Hoi An Ancient Town."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What are the golf transfer times from Palm Garden Beach Resort Hoi An?","acceptedAnswer":{"@type":"Answer","text":"Hoiana Shores Golf Club is 15–20 minutes south across Cua Dai Bridge, Montgomerie Links and BRG Da Nang are 20–25 minutes north, and Ba Na Hills Golf Club is roughly 50 minutes inland via AGS private touring vehicle."}},{"@type":"Question","name":"Should golfers choose Garden View Rooms or Beachfront Bungalows at Palm Garden?","acceptedAnswer":{"@type":"Answer","text":"Superior and Deluxe Garden Rooms deliver great value for 8-to-16-player golf groups wanting twin beds, while Beachfront Bungalows place you steps from the ocean with private shaded terraces ideal for couples."}},{"@type":"Question","name":"How far is Palm Garden Beach Resort from Hoi An Ancient Town and An Bang Beach?","acceptedAnswer":{"@type":"Answer","text":"Hoi An Ancient Town is 10 minutes away by shuttle or car, and An Bang Beach's lively beachfront bars and restaurants sit just 5 minutes up the coastal road."}},{"@type":"Question","name":"Is Palm Garden Beach Resort well suited to larger 8-to-20-player club tours?","acceptedAnswer":{"@type":"Answer","text":"Yes. With 186 rooms, wide tropical grounds, a massive beachfront pool, and flexible private beachfront BBQ setups, Palm Garden handles larger touring groups smoothly without feeling cramped."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "What are the golf transfer times from Palm Garden Beach Resort Hoi An?",
    "a": "Hoiana Shores Golf Club is 15–20 minutes south across Cua Dai Bridge, Montgomerie Links and BRG Da Nang are 20–25 minutes north, and Ba Na Hills Golf Club is roughly 50 minutes inland via AGS private touring vehicle."
  },
  {
    "q": "Should golfers choose Garden View Rooms or Beachfront Bungalows at Palm Garden?",
    "a": "Superior and Deluxe Garden Rooms deliver great value for 8-to-16-player golf groups wanting twin beds, while Beachfront Bungalows place you steps from the ocean with private shaded terraces ideal for couples."
  },
  {
    "q": "How far is Palm Garden Beach Resort from Hoi An Ancient Town and An Bang Beach?",
    "a": "Hoi An Ancient Town is 10 minutes away by shuttle or car, and An Bang Beach's lively beachfront bars and restaurants sit just 5 minutes up the coastal road."
  },
  {
    "q": "Is Palm Garden Beach Resort well suited to larger 8-to-20-player club tours?",
    "a": "Yes. With 186 rooms, wide tropical grounds, a massive beachfront pool, and flexible private beachfront BBQ setups, Palm Garden handles larger touring groups smoothly without feeling cramped."
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

            <AccommodationConciergeBlock hotelName="Palm Garden Beach Resort Hoi An" location="Hoi An" countryName="Vietnam" />

            <VenueItineraries venueHref="/accommodations/vietnam/palm-gardens-hoi-an/" venueName="Palm Garden Beach Resort Hoi An" venueType="accommodation" />

</main>
 );
}
