import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Phokeethra Country Club | Siem Reap" },
 description: "Phokeethra Country Club Siem Reap — luxury 5-star resort beside the championship golf course near Angkor Wat. Ideal golf base in Cambodia. Book with AGS.",
 keywords: ["Phokeethra Country Club Resort", "Sofitel Angkor Phokeethra", "luxury golf resort Siem Reap", "Cambodia colonial five star hotel", "Phokeethra golf accommodation"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/cambodia/phokeethra-country-club/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Phokeethra Country Club | Siem Reap" },
        description: "Phokeethra Country Club Siem Reap — luxury 5-star resort beside the championship golf course near Angkor Wat. Ideal golf base in Cambodia. Book with AGS.",
        url: "https://www.asiagolfspecialists.com/accommodations/cambodia/phokeethra-country-club/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/cambodia/phokeethra-country-club/cambodia-luxury-hotel-phokeethra-country-club-colonial-facade-1.webp",
            width: 1200,
            height: 630,
            alt: "Phokeethra Country Club Resort | Colonial 5-Star Golf Stay Siem Reap | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Phokeethra Country Club | Siem Reap" },
        description: "Phokeethra Country Club Siem Reap — luxury 5-star resort beside the championship golf course near Angkor Wat. Ideal golf base in Cambodia. Book with AGS.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/cambodia/phokeethra-country-club/cambodia-luxury-hotel-phokeethra-country-club-colonial-facade-1.webp"],
    },
};

const images = [
 { src: "/images/accommodations/cambodia/phokeethra-country-club/cambodia-luxury-hotel-phokeethra-country-club-colonial-facade-1.webp", alt: "Phokeethra Country Club Resort Colonial Facade Siem Reap Cambodia", caption: "Colonial facade, Phokeethra Country Club" },
 { src: "/images/accommodations/cambodia/phokeethra-country-club/cambodia-luxury-hotel-phokeethra-country-club-resort-pool-2.webp", alt: "Phokeethra Country Club Resort Swimming Pool - Premium Southeast Asia Golf Tours 2026", caption: "Resort swimming pool and tropical grounds" },
 { src: "/images/accommodations/cambodia/phokeethra-country-club/cambodia-luxury-hotel-phokeethra-country-club-sofitel-angkor-3.webp", alt: "Sofitel Angkor Phokeethra Golf and Spa Resort - Premium Southeast Asia Golf Tours 2026", caption: "Sofitel Angkor resort complex overview" },
 { src: "/images/accommodations/cambodia/phokeethra-country-club/cambodia-luxury-hotel-phokeethra-country-club-spa-4.webp", alt: "Phokeethra Country Club So Spa Facilities - Premium Southeast Asia Golf Tours 2026", caption: "So Spa treatment facilities" },
 { src: "/images/accommodations/cambodia/phokeethra-country-club/cambodia-luxury-hotel-phokeethra-country-club-suite-5.webp", alt: "Phokeethra Country Club Luxury Suite Interior - Premium Southeast Asia Golf Tours 2026", caption: "Luxury suite interior" },
];

export default function PhokeethraCountryClub() {
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
 <h1 style={{ marginBottom: '1rem' }}>Phokeethra <br /><span className="text-gold">Country Club Resort</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"A magnificent colonial 5-star resort directly connected to Siem Reap's most prestigious golf club — Cambodia's finest stay and play."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
 {[
 ["Category", "Luxury Colonial Golf & Spa Resort"],
 ["Star Rating", "5 Star (Sofitel Collection)"],
 ["Location", "Vithei Charles de Gaulle, Siem Reap, Cambodia"],
 ["Total Rooms", "238 Rooms, Suites & Cabanas"],
 ["Setting", "Directly linked to Phokeethra Country Club"],
 ["Nearest Golf", "Angkor Golf Resort (15 min), Phokeethra CC (25 min via hotel shuttle)"],
 ["Key Amenity", "Golf-walk Access, So Spa, 2 Pools"],
 ].map(([k, v], i, arr) => (<tr key={k}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none' }}>{v}</td></tr>))}
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>The Sofitel Angkor Phokeethra Golf and Spa Resort is Cambodia's most complete golf resort: a grand, French colonial-inspired property directly connected to the course by a dedicated walking path, eliminating the transfer entirely and creating the most seamless stay-and-play experience in the country. The resort's 238 rooms and suites are arranged around a dramatic colonial atrium and two significant pool complexes.</p>
 <p>Phokeethra Country Club itself — a former host of the Asian Tour's Cambodian Open — presents one of Siem Reap's most demanding technical tests, featuring forced water carries and precision approaches that reward strategic thinking over raw power. AGS clients frequently use this combination for the competitive golf traveller profile who wants a challenging course, a great hotel, and maximum efficiency between the two.</p>
 <p>The So Spa by Sofitel offers a comprehensive recovery programme, including sports massage, hydrotherapy, and traditional Khmer healing treatments, while the resort's F&amp;B operation — featuring an elevated French-Asian menu in the main restaurant — provides evening dining quality that matches the golf and property standards perfectly.</p>
 </div>
 </div>
 </div>
 </section>
  <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/cambodia/phokeethra-country-club/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates Phokeethra stay-and-play packages and tee times at Angkor Golf Resort.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Sokha Hotels Phokeethra Country Club",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Siem Reap", "addressCountry": "KH" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/cambodia/phokeethra-country-club/",
                          "sameAs": ["https://www.sokhahotels.com.kh/sokhaphokeethracountryclub/","https://en.wikipedia.org/wiki/Sokha_Hotels","https://www.forbestravelguide.com/hotels/siem-reap-cambodia/sokha-phokeethra-country-club"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Cambodia", "item": "https://www.asiagolfspecialists.com/destinations/cambodia/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Sokha Hotels Phokeethra Country Club", "item": "https://www.asiagolfspecialists.com/accommodations/cambodia/phokeethra-country-club/" }
                            ]
                        }
                    ]
                }) }} />
  
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Anchored in classical French-Indochinese style along Charles de Gaulle Boulevard in Siem Reap, the 238-room Phokeethra luxury golf resort (Sofitel Angkor Phokeethra Golf &amp; Spa Resort) is our site-verified flagship for larger golf groups wanting direct club privileges at Cambodia&apos;s original international tournament venue. Wide timber verandahs, lotus ponds, and Siem Reap&apos;s largest free-form lagoon swimming pool create a spacious, classic resort atmosphere.</p>
                        <p style={{ marginBottom: '1rem' }}>As the sister resort of Phokeethra Country Club, guests enjoy priority tee times and coordinated 25-minute private transfers straight to Phokeethra&apos;s fairways, plus quick 15-minute access to Sir Nick Faldo&apos;s Angkor Golf Resort via AGS touring vehicles.</p>
                        <p>Off the course, golfers recover beside the sprawling lagoon pool with swim-up drinks, book French-Khmer therapies at Sofitel SPA with L&apos;Occitane, and gather for generous breakfasts at The Citadel or fine French dining at Mouhot&apos;s Dream.</p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Sokha Hotels Phokeethra Country Club"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/cambodia/phokeethra-country-club/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/cambodia/phokeethra-country-club/cambodia-luxury-hotel-phokeethra-country-club-colonial-facade-1.webp"
    addressLocality="Siem Reap"
    addressCountry="KH"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Colonial Golf Resort • Siem Reap"
    inspectionDate="Site-Verified by AGS On-Ground Team"
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.6,
            highlight: "French colonial timber suites"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.6,
            highlight: "Quiet fairways and garden setting"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.5,
            highlight: "Expansive lagoon pool & So Spa"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.5,
            highlight: "The Citadel international dining & bar"
      }
]}
    verdict="Offering direct fairway views of Cambodia's premier tournament layout. Classical Indochinese timber accents and French colonial sophistication make it a natural retreat for golf tours."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Is Phokeethra Country Club located right on the hotel grounds or a short transfer away?","acceptedAnswer":{"@type":"Answer","text":"The hotel sits on central Charles de Gaulle Boulevard near Angkor Wat, while Phokeethra Country Club's 18-hole championship course lies roughly 25 minutes west — with priority tee times and seamless private transfers coordinated by AGS and the resort."}},{"@type":"Question","name":"Why does this property suit larger 8-to-16-player Siem Reap golf groups?","acceptedAnswer":{"@type":"Answer","text":"With 238 rooms and suites, a massive free-form lagoon pool, multiple bars and restaurants, and Club Millesime lounge upgrades, it handles larger touring parties comfortably without sacrificing 5-star polish."}},{"@type":"Question","name":"How far is the resort from Angkor Golf Resort and Angkor Wat?","acceptedAnswer":{"@type":"Answer","text":"Angkor Wat's entrance is roughly 10 minutes north, Angkor Golf Resort is 15 minutes west, and Siem Reap's lively Pub Street and Old Market dining area sit just 5 minutes south."}},{"@type":"Question","name":"Are Club Millesime room upgrades worth adding for a golf stay?","acceptedAnswer":{"@type":"Answer","text":"Yes — Club Millesime suites include private check-in, daily afternoon tea, and complimentary evening cocktails and canapes, making post-round group debriefs effortless."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "Is Phokeethra Country Club located right on the hotel grounds or a short transfer away?",
    "a": "The hotel sits on central Charles de Gaulle Boulevard near Angkor Wat, while Phokeethra Country Club's 18-hole championship course lies roughly 25 minutes west — with priority tee times and seamless private transfers coordinated by AGS and the resort."
  },
  {
    "q": "Why does this property suit larger 8-to-16-player Siem Reap golf groups?",
    "a": "With 238 rooms and suites, a massive free-form lagoon pool, multiple bars and restaurants, and Club Millesime lounge upgrades, it handles larger touring parties comfortably without sacrificing 5-star polish."
  },
  {
    "q": "How far is the resort from Angkor Golf Resort and Angkor Wat?",
    "a": "Angkor Wat's entrance is roughly 10 minutes north, Angkor Golf Resort is 15 minutes west, and Siem Reap's lively Pub Street and Old Market dining area sit just 5 minutes south."
  },
  {
    "q": "Are Club Millesime room upgrades worth adding for a golf stay?",
    "a": "Yes — Club Millesime suites include private check-in, daily afternoon tea, and complimentary evening cocktails and canapes, making post-round group debriefs effortless."
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

            <AccommodationConciergeBlock hotelName="Sokha Hotels Phokeethra Country Club" location="Siem Reap" countryName="Cambodia" />

            <VenueItineraries venueHref="/accommodations/cambodia/phokeethra-country-club/" venueName="Sokha Hotels Phokeethra Country Club" venueType="accommodation" />

</main>
 );
}
