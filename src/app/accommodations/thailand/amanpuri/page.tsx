import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Amanpuri Phuket | Ultra-Luxury Thailand Golf Resort" },
 description: "The original Aman resort on a private Phuket peninsula over the Andaman Sea, pairing ultra-luxury pavilions with Blue Canyon and Red Mountain golf.",
 keywords: ["Amanpuri Phuket", "Aman resort Phuket golf", "luxury golf accommodation Phuket", "Thailand ultra luxury resort", "Phuket five star golf hotel"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/thailand/amanpuri/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Amanpuri Phuket | Ultra-Luxury Thailand Golf Resort" },
        description: "The original Aman resort on a private Phuket peninsula over the Andaman Sea, pairing ultra-luxury pavilions with Blue Canyon and Red Mountain golf.",
        url: "https://www.asiagolfspecialists.com/accommodations/thailand/amanpuri/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/thailand/amanpuri/thailand-luxury-hotel-amanpuri-phuket-private-pool-pavilion-1.webp",
            width: 1200,
            height: 630,
            alt: "Amanpuri Phuket | The Original Aman Resort Thailand | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Amanpuri Phuket | Ultra-Luxury Thailand Golf Resort" },
        description: "The original Aman resort on a private Phuket peninsula over the Andaman Sea, pairing ultra-luxury pavilions with Blue Canyon and Red Mountain golf.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/thailand/amanpuri/thailand-luxury-hotel-amanpuri-phuket-private-pool-pavilion-1.webp"],
    },
};

const images = [
 { src: "/images/accommodations/thailand/amanpuri/thailand-luxury-hotel-amanpuri-phuket-private-pool-pavilion-1.webp", alt: "Amanpuri Phuket Private Pool Pavilion Andaman Sea - Premium Southeast Asia Golf Tours 2026", caption: "Private pool pavilion over the Andaman Sea" },
 { src: "/images/accommodations/thailand/amanpuri/thailand-luxury-hotel-amanpuri-phuket-sea-view-2.webp", alt: "Amanpuri Phuket Sea View Thailand - Premium Southeast Asia Golf Tours 2026", caption: "Andaman Sea view from Amanpuri terrace" },
 { src: "/images/accommodations/thailand/amanpuri/thailand-luxury-hotel-amanpuri-phuket-villa-pool-3.webp", alt: "Amanpuri Phuket Villa Private Pool Thailand - Premium Southeast Asia Golf Tours 2026", caption: "Villa private pool and tropical garden" },
 { src: "/images/accommodations/thailand/amanpuri/thailand-luxury-hotel-amanpuri-phuket-pagoda-grounds-4.webp", alt: "Amanpuri Phuket Traditional Thai Pagoda Grounds - Premium Southeast Asia Golf Tours 2026", caption: "Traditional Thai Pagoda Grounds" },
 { src: "/images/accommodations/thailand/amanpuri/thailand-luxury-hotel-amanpuri-phuket-ocean-terrace-5.webp", alt: "Amanpuri Phuket Ocean Terrace Andaman Sea View - Premium Southeast Asia Golf Tours 2026", caption: "Ocean terrace with Andaman Sea views" },
];

export default function Amanpuri() {
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
 <h1 style={{ marginBottom: '1rem' }}>Amanpuri <br /><span className="text-gold">Phuket</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"The original Aman — the most exclusive resort address in Asia, unchanged in its pursuit of absolute serenity."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
 {[
 ["Category", "Ultra-Exclusive Private Pavilion Resort"],
 ["Star Rating", "5 Star (Aman Collection)"],
 ["Location", "Pansea Beach, Surin, Phuket, Thailand"],
 ["Total Pavilions", "40 Pavilions, Suites & Private Villas"],
 ["Setting", "Private peninsula over the Andaman Sea"],
 ["Nearest Golf", "Blue Canyon CC (20 min), Laguna Golf (25 min)"],
 ["Key Amenity", "Private Beach, Aman Spa, 2 Restaurants"],
                                    ["Global Recognition", (
                                        <span key="rec">
                                            <a href="https://www.forbestravelguide.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Forbes 5-Star</a>
                                            {' • '}
                                            <a href="https://guide.michelin.com/us/en" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Michelin Guide Selected</a>
                                            {' • '}
                                            <a href="https://www.virtuoso.com/travel/luxury-hotels" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Virtuoso Preferred</a>
                                        </span>
                                    )],
                                ].map(([k, v], i, arr) => (<tr key={k as string}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none', color: 'var(--color-gold)' }}>{k as string}</th><td style={{ padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none' }}>{v}</td></tr>))}
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Amanpuri is not a hotel. It is the original template against which every luxury resort that followed has been measured. Opened in 1988 on a private Phuket peninsula, Ed Tuttle's low-rise Thai pavilion design — rising amidst 30 acres of coconut palms above Pansea Beach — established the radical proposition that true luxury is defined by what is absent: crowds, noise, and compromise.</p>
 <p>The 40 pavilions and 34 villas that cascade down to the Andaman Sea each command a private outdoor terrace designed as a second living room — day beds, outdoor dining, and panoramic sea views framed by traditional Thai architectural detailing. The spa, set within a restored traditional Thai temple, offers holistic treatments that have attracted the world's most private and powerful individuals since opening day.</p>
 <p>For AGS clients who have simply had enough of settling for less, Amanpuri makes the case that no golf course is more important than where you wake up before playing it. Blue Canyon Country Club, Phuket's finest test, is 20 minutes away. The property's private fleet of longtail boats and speedboats ensure island excursions between rounds are executed with the same effortless precision as everything else here.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/thailand/amanpuri/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>Amanpuri is exclusively accessible via direct request. AGS coordinates all reservations and Phuket golf programmes.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 
 
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Opened in 1988 on a private coconut-palm headland overlooking Pansea Beach on Phuket&apos;s west coast, Forbes 5-Star Amanpuri is the original flagship of the Aman collection and our curated ultra-luxury partner for private Phuket golf escapes. Designed by Ed Tuttle around Ayutthaya-inspired Thai teak pavilions and standalone 2-to-9-bedroom Private Villas, it delivers rare seclusion far above Phuket&apos;s busy southern strips.</p>
                        <p style={{ marginBottom: '1rem' }}>From Amanpuri&apos;s headland, private AGS touring vehicles reach Laguna Golf Phuket in 20 minutes, Red Mountain Golf Club and Loch Palm in 30 to 35 minutes, and Blue Canyon Country Club in 35 minutes, with Phuket International Airport (HKT) roughly 35 minutes north.</p>
                        <p>Between rounds, guests have exclusive access to Pansea Beach&apos;s quiet cove, the Aman Holistic Wellness Centre with Thai bodywork and cryotherapy recovery, Nama Japanese dining, Arva Italian, and private resort yacht charters into Phang Nga Bay.</p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Amanpuri"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/thailand/amanpuri/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/thailand/amanpuri/thailand-luxury-hotel-amanpuri-phuket-private-pool-pavilion-1.webp"
    addressLocality="Phuket"
    addressCountry="TH"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="The Original Aman Landmark • Forbes 5-Star • Phuket"
    inspectionDate="Curated AGS Partner — Vetted via Client Feedback"
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.9,
            highlight: "Ayutthaya-inspired teak pavilions"
      },
      {
            label: "Villa & Beachfront Privacy",
            score: 9.9,
            highlight: "Private Pansea Beach headland"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.9,
            highlight: "Holistic wellness center & cryotherapy"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.8,
            highlight: "World-class Italian & Japanese beach dining"
      }
]}
    verdict="The flagship resort that launched the Aman brand. Set on a secluded coconut grove overlooking Pansea Beach, Amanpuri delivers peerless luxury, unmatched privacy, and seamless private transfers to Red Mountain and Blue Canyon."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Which Phuket golf courses pair best with a stay at Amanpuri?","acceptedAnswer":{"@type":"Answer","text":"Laguna Golf Phuket sits 20 minutes north, Red Mountain Golf Club and Loch Palm are 30–35 minutes inland, and Blue Canyon Country Club (Canyon & Lakes courses) is roughly 35 minutes away via private AGS transfer."}},{"@type":"Question","name":"Should golf groups book Pavilions or Private Villas at Amanpuri?","acceptedAnswer":{"@type":"Answer","text":"Couples favour Ocean or Garden Pavilions perched among the coconut palms, while 4-to-12-player golf parties can reserve Amanpuri's multi-bedroom Private Villas complete with private infinity pools, live-in Thai chefs, and dedicated villa hosts."}},{"@type":"Question","name":"How private is Pansea Beach at Amanpuri compared to other Phuket resorts?","acceptedAnswer":{"@type":"Answer","text":"Pansea Beach is shared with only one neighbouring luxury estate and has no public road access, giving Amanpuri guests one of the quietest white-sand coves on Phuket's west coast."}},{"@type":"Question","name":"Can AGS arrange private Phang Nga Bay yacht days alongside our Phuket golf rounds?","acceptedAnswer":{"@type":"Answer","text":"Yes. Amanpuri operates its own fleet of sleek cruisers directly from Pansea Beach, allowing AGS to build seamless rest-day island charters between rounds at Red Mountain and Blue Canyon."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "Which Phuket golf courses pair best with a stay at Amanpuri?",
    "a": "Laguna Golf Phuket sits 20 minutes north, Red Mountain Golf Club and Loch Palm are 30–35 minutes inland, and Blue Canyon Country Club (Canyon & Lakes courses) is roughly 35 minutes away via private AGS transfer."
  },
  {
    "q": "Should golf groups book Pavilions or Private Villas at Amanpuri?",
    "a": "Couples favour Ocean or Garden Pavilions perched among the coconut palms, while 4-to-12-player golf parties can reserve Amanpuri's multi-bedroom Private Villas complete with private infinity pools, live-in Thai chefs, and dedicated villa hosts."
  },
  {
    "q": "How private is Pansea Beach at Amanpuri compared to other Phuket resorts?",
    "a": "Pansea Beach is shared with only one neighbouring luxury estate and has no public road access, giving Amanpuri guests one of the quietest white-sand coves on Phuket's west coast."
  },
  {
    "q": "Can AGS arrange private Phang Nga Bay yacht days alongside our Phuket golf rounds?",
    "a": "Yes. Amanpuri operates its own fleet of sleek cruisers directly from Pansea Beach, allowing AGS to build seamless rest-day island charters between rounds at Red Mountain and Blue Canyon."
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
                            "@type": "LodgingBusiness",
                            "name": "Amanpuri",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Pansea Beach, Surin, Phuket", "addressCountry": "TH" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/thailand/amanpuri/",
                            "award": [
                                "Forbes Travel Guide Five-Star Award",
                                "Michelin Guide Selected Hotel"
                            ],
                            "memberOf": [
                                {
                                    "@type": "ProgramMembership",
                                    "programName": "Virtuoso Luxury Network"
                                }
                            ],
                            "sameAs": [
                                "https://www.aman.com/resorts/amanpuri",
                                "https://www.forbestravelguide.com/",
                                "https://guide.michelin.com/us/en",
                                "https://www.virtuoso.com/travel/luxury-hotels",
                                "https://en.wikipedia.org/wiki/Aman_Resorts"
                            ]
                        },
                        {
                            "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                            { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                            { "@type": "ListItem", "position": 3, "name": "Thailand", "item": "https://www.asiagolfspecialists.com/destinations/thailand/accommodations/" },
                            { "@type": "ListItem", "position": 4, "name": "Amanpuri", "item": "https://www.asiagolfspecialists.com/accommodations/thailand/amanpuri/" }
                        ]
                    }
                ]
            }) }} />
 
            <AccommodationConciergeBlock hotelName="Amanpuri" location="Phuket" countryName="Thailand" />

            <VenueItineraries venueHref="/accommodations/thailand/amanpuri/" venueName="Amanpuri" venueType="accommodation" />

</main>
 );
}
