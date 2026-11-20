import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Zannier Phum Baitang | Siem Reap" },
 description: "Experience Zannier Phum Baitang, a luxury tented villa resort near Angkor Wat. Immerse in Khmer culture & eco-luxury. Ideal Cambodia golf base.",
 keywords: ["Zannier Hotels Phum Baitang", "luxury villa Siem Reap Cambodia", "stilted villa Cambodia golf", "boutique luxury resort Cambodia", "Phum Baitang golf accommodation"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/cambodia/zannier-phum-baitang/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Zannier Phum Baitang | Siem Reap" },
        description: "Experience Zannier Phum Baitang, a luxury tented villa resort near Angkor Wat. Immerse in Khmer culture & eco-luxury. Ideal Cambodia golf base.",
        url: "https://www.asiagolfspecialists.com/accommodations/cambodia/zannier-phum-baitang/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/cambodia/zannier-phum-baitang/cambodia-luxury-hotel-zannier-phum-baitang-stilted-villa-1.webp",
            width: 1200,
            height: 630,
            alt: "Zannier Hotels Phum Baitang | Green Village Villas Cambodia | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Zannier Phum Baitang | Siem Reap" },
        description: "Experience Zannier Phum Baitang, a luxury tented villa resort near Angkor Wat. Immerse in Khmer culture & eco-luxury. Ideal Cambodia golf base.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/cambodia/zannier-phum-baitang/cambodia-luxury-hotel-zannier-phum-baitang-stilted-villa-1.webp"],
    },
};

const images = [
 { src: "/images/accommodations/cambodia/zannier-phum-baitang/cambodia-luxury-hotel-zannier-phum-baitang-stilted-villa-1.webp", alt: "Zannier Phum Baitang Stilted Villa Siem Reap Cambodia", caption: "Stilted villa over rice paddies, Siem Reap" },
 { src: "/images/accommodations/cambodia/zannier-phum-baitang/cambodia-luxury-hotel-zannier-phum-baitang-rice-paddy-villa-2.webp", alt: "Zannier Phum Baitang Rice Paddy Villa View Cambodia", caption: "Rice paddy villa view, Phum Baitang" },
 { src: "/images/accommodations/cambodia/zannier-phum-baitang/cambodia-luxury-hotel-zannier-phum-baitang-infinity-pool-3.webp", alt: "Zannier Phum Baitang Infinity Pool Cambodia - Premium Southeast Asia Golf Tours 2026", caption: "Infinity pool, Zannier Siem Reap" },
 { src: "/images/accommodations/cambodia/zannier-phum-baitang/cambodia-luxury-hotel-zannier-phum-baitang-treetop-villa-4.webp", alt: "Zannier Phum Baitang Treetop Villa Elevated Cambodia", caption: "Elevated treetop villa exterior" },
 { src: "/images/accommodations/cambodia/zannier-phum-baitang/cambodia-luxury-hotel-zannier-phum-baitang-dining-5.webp", alt: "Zannier Phum Baitang Dining Cambodia - Premium Southeast Asia Golf Tours 2026", caption: "Open-air dining pavilion" },
];

export default function ZannierPhumBaitang() {
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
 <h1 style={{ marginBottom: '1rem' }}>Zannier Hotels <br /><span className="text-gold">Phum Baitang</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"A luxury 'Green Village' of stilted villas in 20 acres (8 hectares) of Siem Reap rice paddies — where rustic Khmer authenticity meets ultra-luxury."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
 {[
 ["Category", "Boutique Luxury Villa Resort"],
 ["Star Rating", "5 Star"],
 ["Location", "Phum Baitang, Siem Reap, Cambodia"],
 ["Total Villas", "45 Stilted Villas & Residences"],
 ["Setting", "20 Acres (8 Hectares) of working rice paddies"],
 ["Nearest Golf", "Angkor Golf Resort (15 min), Phokeethra Country Club (25 min)"],
 ["Key Amenity", "Infinity Pool, Spa, Local Cultural Programme"],
 ].map(([k, v], i, arr) => (<tr key={k}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none' }}>{v}</td></tr>))}
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Phum Baitang — meaning "Green Village" in Khmer — is the most distinctive property in the AGS Cambodia portfolio and one of the most original luxury concepts in Southeast Asia. Zannier Hotels' founding property in Siem Reap places 45 traditional stilted villas on raised platforms above eight acres of working rice paddies, creating a living connection between the luxury guest experience and the Khmer agricultural landscape that surrounds Angkor.</p>
 <p>The villas are constructed from natural materials with bamboo screens, dark hardwood floors, and organic linen throughout — creating a sensory experience that feels genuinely embedded in Cambodian rural life while delivering the service standards of a five-star international hotel. The experience begins with a bicycle arrival through the paddy fields and never departs from that philosophy of authentic engagement.</p>
 <p>For AGS clients who represent the premium golf traveller archetype — experienced, culturally curious, and specifically seeking destinations that offer depth beyond the course — Phum Baitang provides the most differentiated accommodation experience in Cambodia. It is the natural partner to Angkor Golf Resort and Chhun On Golf Resort, two of Siem Reap's most sophisticated golfing challenges.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/cambodia/zannier-phum-baitang/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates Phum Baitang stays with Angkor Golf Resort packages and Chhun On tee times.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Zannier Hotels Phum Baitang",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Siem Reap", "addressCountry": "KH" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/cambodia/zannier-phum-baitang/",
                          "sameAs": ["https://www.zannierhotels.com/phum-baitang/","https://www.forbestravelguide.com/hotels/siem-reap-cambodia/zannier-hotels-phum-baitang","https://guide.michelin.com/en/hotels-stays/siem-reap/zannier-hotels-phum-baitang","https://www.cntraveler.com/hotels/siem-reap/zannier-hotels-phum-baitang"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Cambodia", "item": "https://www.asiagolfspecialists.com/destinations/cambodia/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Zannier Hotels Phum Baitang", "item": "https://www.asiagolfspecialists.com/accommodations/cambodia/zannier-phum-baitang/" }
                            ]
                        }
                    ]
                }) }} />
 
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Sprawling across 20 acres (8 hectares) of working emerald rice paddies and lemongrass gardens on the quiet southwestern edge of Siem Reap, the 45-villa Zannier Hotels Phum Baitang (&quot;Green Village&quot;) is one of Southeast Asia&apos;s most evocative architectural retreats — and a property Marcus has personally stayed at. Every villa is modelled on traditional stilted Cambodian timber farmhouses with thatched roofs, weathered wood verandahs, and deep stone soaking tubs.</p>
                        <p style={{ marginBottom: '1rem' }}>Its southwestern location actually shortens morning golf runs compared to downtown hotels: Sir Nick Faldo&apos;s Angkor Golf Resort sits just 12 to 15 minutes away and Phokeethra Country Club is 20 to 25 minutes via private AGS touring vehicle, while central Siem Reap and Angkor Wat remain 10 to 15 minutes away.</p>
                        <p>After 18 holes, guests swim laps in the striking 50-metre green-stone infinity pool gazing over grazing water buffalo, unwind at the serene Spa Temple, take sunset drinks in a restored 100-year-old farmhouse at Sunset Lounge, and dine on refined Cambodian classics at Bay Phsar or wood-fired steaks at Hang Bay.</p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Zannier Hotels Phum Baitang"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/cambodia/zannier-phum-baitang/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/cambodia/zannier-phum-baitang/cambodia-luxury-hotel-zannier-phum-baitang-stilted-villa-1.webp"
    addressLocality="Siem Reap"
    addressCountry="KH"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="Authentic Khmer Stilted Village • Siem Reap"
    inspectionDate="Personally Stayed & Inspected — Marcus Giles"
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.9,
            highlight: "Handcrafted wooden stilted villas"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.9,
            highlight: "20 acres of lush green rice terraces"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.8,
            highlight: "Spa Temple herbal compresses & pool"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.8,
            highlight: "Hang Bay farm-to-table fine dining"
      }
]}
    verdict="Set across 20 acres (8 hectares) of working rice paddies. Traditional Khmer stilted wooden villas, a 50-meter green-stone infinity pool, and roaming water buffalo create a deeply peaceful rural escape."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is Zannier Phum Baitang to Angkor Golf Resort and Phokeethra Country Club?","acceptedAnswer":{"@type":"Answer","text":"Positioned on the quiet southwestern edge of Siem Reap, Zannier Phum Baitang is only 12–15 minutes from Angkor Golf Resort and 20–25 minutes from Phokeethra Country Club via private AGS touring vehicle."}},{"@type":"Question","name":"Should golfers book Terrace Villas or Pool Villas at Zannier Phum Baitang?","acceptedAnswer":{"@type":"Answer","text":"Both feature hand-crafted stilted Khmer timber architecture and open rice-field decks; Pool Villas add a private plunge pool and extra outdoor lounge space, making them our top pick for hot Cambodian afternoons after golf."}},{"@type":"Question","name":"What is the post-round atmosphere like at Zannier Phum Baitang?","acceptedAnswer":{"@type":"Answer","text":"Deeply peaceful and unhurried — anchored by a 50-metre infinity pool overlooking working rice paddies, the restored 100-year-old wooden Sunset Lounge for evening cocktails, Spa Temple herbal bodywork, and two acclaimed farm-to-table restaurants."}},{"@type":"Question","name":"How far is Zannier Phum Baitang from Siem Reap's Old Market and Angkor Wat?","acceptedAnswer":{"@type":"Answer","text":"Siem Reap's Old Market and dining district sit roughly 10 minutes away by private car or tuk-tuk, and Angkor Wat's main temples are 15–20 minutes north."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "How close is Zannier Phum Baitang to Angkor Golf Resort and Phokeethra Country Club?",
    "a": "Positioned on the quiet southwestern edge of Siem Reap, Zannier Phum Baitang is only 12–15 minutes from Angkor Golf Resort and 20–25 minutes from Phokeethra Country Club via private AGS touring vehicle."
  },
  {
    "q": "Should golfers book Terrace Villas or Pool Villas at Zannier Phum Baitang?",
    "a": "Both feature hand-crafted stilted Khmer timber architecture and open rice-field decks; Pool Villas add a private plunge pool and extra outdoor lounge space, making them our top pick for hot Cambodian afternoons after golf."
  },
  {
    "q": "What is the post-round atmosphere like at Zannier Phum Baitang?",
    "a": "Deeply peaceful and unhurried — anchored by a 50-metre infinity pool overlooking working rice paddies, the restored 100-year-old wooden Sunset Lounge for evening cocktails, Spa Temple herbal bodywork, and two acclaimed farm-to-table restaurants."
  },
  {
    "q": "How far is Zannier Phum Baitang from Siem Reap's Old Market and Angkor Wat?",
    "a": "Siem Reap's Old Market and dining district sit roughly 10 minutes away by private car or tuk-tuk, and Angkor Wat's main temples are 15–20 minutes north."
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

            <AccommodationConciergeBlock hotelName="Zannier Hotels Phum Baitang" location="Siem Reap" countryName="Cambodia" />

            <VenueItineraries venueHref="/accommodations/cambodia/zannier-phum-baitang/" venueName="Zannier Hotels Phum Baitang" venueType="accommodation" />

</main>
 );
}
