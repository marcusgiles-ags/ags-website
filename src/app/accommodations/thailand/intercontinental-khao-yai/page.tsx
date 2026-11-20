import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "InterContinental Khao Yai | Thailand" },
 description: "InterContinental Khao Yai Resort — a Bill Bensley-designed luxury sanctuary by Khao Yai National Park for golfers exploring central Thailand's courses.",
 keywords: ["InterContinental Khao Yai", "luxury resort Khao Yai golf", "Thailand mountain golf resort", "vintage train hotel Thailand", "Bill Bensley Khao Yai"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/thailand/intercontinental-khao-yai/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "InterContinental Khao Yai | Thailand" },
        description: "InterContinental Khao Yai Resort — a Bill Bensley-designed luxury sanctuary by Khao Yai National Park for golfers exploring central Thailand's courses.",
        url: "https://www.asiagolfspecialists.com/accommodations/thailand/intercontinental-khao-yai/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/thailand/intercontinental-khao-yai/thailand-luxury-hotel-intercontinental-khao-yai-resort-railcar-villa-1.webp",
            width: 1200,
            height: 630,
            alt: "InterContinental Khao Yai Resort | Vintage Railcar Villas Thailand | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "InterContinental Khao Yai | Thailand" },
        description: "InterContinental Khao Yai Resort — a Bill Bensley-designed luxury sanctuary by Khao Yai National Park for golfers exploring central Thailand's courses.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/thailand/intercontinental-khao-yai/thailand-luxury-hotel-intercontinental-khao-yai-resort-railcar-villa-1.webp"],
    },
};

const images = [
 { src: "/images/accommodations/thailand/intercontinental-khao-yai/thailand-luxury-hotel-intercontinental-khao-yai-resort-railcar-villa-1.webp", alt: "InterContinental Khao Yai Heritage Railcar Pool Villa Thailand", caption: "Heritage railcar pool villa exterior" },
 { src: "/images/accommodations/thailand/intercontinental-khao-yai/thailand-luxury-hotel-intercontinental-khao-yai-resort-guest-room-2.webp", alt: "InterContinental Khao Yai Resort Guest Room Interior", caption: "Railcar villa interior bedroom" },
 { src: "/images/accommodations/thailand/intercontinental-khao-yai/thailand-luxury-hotel-intercontinental-khao-yai-resort-heritage-railcar-pool-villa-3.webp", alt: "InterContinental Khao Yai Outdoor Bathtub Heritage Railcar Villa", caption: "Outdoor bathtub, heritage railcar villa" },
 { src: "/images/accommodations/thailand/intercontinental-khao-yai/thailand-luxury-hotel-intercontinental-khao-yai-resort-tea-carriage-4.webp", alt: "InterContinental Khao Yai Tea Carriage Afternoon Tea", caption: "Afternoon tea carriage service" },
 { src: "/images/accommodations/thailand/intercontinental-khao-yai/thailand-luxury-hotel-intercontinental-khao-yai-resort-afternoon-tea-5.webp", alt: "InterContinental Khao Yai Resort Afternoon Tea Thailand", caption: "Aerial view of resort and national park" },
];

export default function InterContinentalKhaoYai() {
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
 <h1 style={{ marginBottom: '1rem' }}>InterContinental <br /><span className="text-gold">Khao Yai Resort</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Bill Bensley's most whimsical creation — luxury vintage rail carriages in Thailand's UNESCO-listed mountain heartland."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
 {[
 ["Category", "Luxury Heritage Rail Resort"],
 ["Star Rating", "5 Star (IHG Luxury Collection)"],
 ["Location", "Khao Yai, Nakhon Ratchasima, Thailand"],
 ["Total Rooms", "106 Carriages & Villas"],
 ["Setting", "UNESCO Khao Yai National Park boundary"],
 ["Nearest Golf", "Toscana Valley (15 min), Rancho Charnvee (20 min), Kirimaya (25 min)"],
 ["Designer", "Bill Bensley (Upcycled Heritage Rail Concept)"],
 ].map(([k, v], i, arr) => (<tr key={k}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none' }}>{v}</td></tr>))}
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>InterContinental Khao Yai Resort is Bill Bensley's most brilliantly eccentric commission — a resort built from upcycled vintage Thai railway carriages, each transformed into a pool villa or suite and arranged across the grounds of a former golf estate on the edge of the UNESCO-listed Khao Yai National Park. The concept is serious about sustainability while refusing to take itself seriously about anything else.</p>
 <p>The Heritage 1-Bedroom Pool Villas feature outdoor bathtubs framed by the original carriage metalwork, private plunge pools surrounded by tropical landscaping, and interiors that blend actual vintage railway artefacts with contemporary Thai luxury finishes. The Tea Carriage — a dedicated afternoon tea dining experience within a beautifully restored train car — has become one of the most photographed luxury dining experiences in Thailand.</p>
 <p>For AGS groups adding a cool-climate mountain chapter to their Thailand itinerary, Khao Yai provides the perfect contrast to the coastal resort experience. Toscana Valley Country Club, Rancho Charnvee Resort &amp; Country Club, and Jack Nicklaus&apos;s Kirimaya Golf Resort sit 15 to 25 minutes away as natural highland golf companions, while the national park itself offers wildlife safaris and nearby vineyards that give even the most course-focused golfer reason to put down the clubs for an afternoon.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/thailand/intercontinental-khao-yai/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates Khao Yai golf and safari experiences for all InterContinental resort guests.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "InterContinental Khao Yai",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Khao Yai", "addressCountry": "TH" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/thailand/intercontinental-khao-yai/",
                          "sameAs": ["https://www.ihg.com/intercontinental/hotels/gb/en/khao-yai/bkkky/hoteldetail","https://www.forbestravelguide.com/hotels/khao-yai-thailand/intercontinental-khao-yai","https://guide.michelin.com/en/thailand/nakhon-ratchasima/hotel/intercontinental-khao-yai"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Thailand", "item": "https://www.asiagolfspecialists.com/destinations/thailand/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "InterContinental Khao Yai", "item": "https://www.asiagolfspecialists.com/accommodations/thailand/intercontinental-khao-yai/" }
                            ]
                        }
                    ]
                }) }} />
 
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Surrounded by 30,000 trees and five tranquil lakes near the border of UNESCO-listed Khao Yai National Park, InterContinental Khao Yai Resort is Bill Bensley&apos;s imaginative tribute to Thailand&apos;s golden age of rail travel — and our curated highland partner outside Bangkok. Its 64 rooms, suites, and upcycled heritage train-carriage villas turn an overnight highland stay into a memorable architectural story.</p>
                        <p style={{ marginBottom: '1rem' }}>Positioned roughly 2.5 to 3 hours northeast of Bangkok, Khao Yai delivers noticeably cooler highland air and scenic mountain golf: Toscana Valley Country Club sits 15 minutes away, Rancho Charnvee Resort &amp; Country Club is 20 minutes, and Jack Nicklaus&apos;s Kirimaya Golf Resort is 25 minutes via private AGS transfer.</p>
                        <p>Post-round relaxation leans into vintage charm: unwind at Back on Track Spa (set inside restored heritage rail cars), swim beside Swan Lake, and dine on French brasserie classics inside the theatrical Poirot dining carriage.</p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="InterContinental Khao Yai Resort"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/thailand/intercontinental-khao-yai/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/thailand/intercontinental-khao-yai/thailand-luxury-hotel-intercontinental-khao-yai-resort-railcar-villa-1.webp"
    addressLocality="Khao Yai"
    addressCountry="TH"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="Heritage Train Car Resort • Bill Bensley"
    inspectionDate="Curated AGS Partner — Vetted via Client Feedback"
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.8,
            highlight: "Upcycled luxury train carriage suites"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.8,
            highlight: "National park jungle tranquility"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.6,
            highlight: "Peaceful Swan Lake pool & spa"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.7,
            highlight: "Poirot French heritage dining car"
      }
]}
    verdict="Bill Bensley's whimsical tribute to Thailand's Golden Age of rail travel. Heritage train cars transformed into opulent suites surrounding natural lakes, right at the gateway to Khao Yai's scenic mountain golf."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Which golf courses are actually near InterContinental Khao Yai Resort?","acceptedAnswer":{"@type":"Answer","text":"Toscana Valley Country Club (15 minutes), Rancho Charnvee Resort & Country Club (20 minutes), Kirimaya Golf Resort (25 minutes), and Mountain Creek Golf Resort (35 minutes) all sit right in the Khao Yai highlands."}},{"@type":"Question","name":"How long is the private transfer from Bangkok to InterContinental Khao Yai Resort?","acceptedAnswer":{"@type":"Answer","text":"Via the Bang Pa-in–Korat highway corridor, private AGS transfers take approximately 2 hours 30 minutes to 3 hours from Suvarnabhumi Airport (BKK) or central Bangkok."}},{"@type":"Question","name":"Should we book the Heritage Railcar Suites or regular King/Twin rooms?","acceptedAnswer":{"@type":"Answer","text":"Heritage Railcar Suites and One-Bedroom Railcar Pool Villas are the signature experience — crafted from authentic reclaimed Thai train carriages with outdoor soaking tubs and private lakeside decks — though Classic rooms work smoothly for twin-share golf groups."}},{"@type":"Question","name":"What non-golf activities pair well with a Khao Yai highland golf stopover?","acceptedAnswer":{"@type":"Answer","text":"Khao Yai is Thailand's premier vineyard and national-park region: AGS can add afternoon winery tastings at GranMonte or PB Valley and guided wildlife excursions inside Khao Yai National Park."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "Which golf courses are actually near InterContinental Khao Yai Resort?",
    "a": "Toscana Valley Country Club (15 minutes), Rancho Charnvee Resort & Country Club (20 minutes), Kirimaya Golf Resort (25 minutes), and Mountain Creek Golf Resort (35 minutes) all sit right in the Khao Yai highlands."
  },
  {
    "q": "How long is the private transfer from Bangkok to InterContinental Khao Yai Resort?",
    "a": "Via the Bang Pa-in–Korat highway corridor, private AGS transfers take approximately 2 hours 30 minutes to 3 hours from Suvarnabhumi Airport (BKK) or central Bangkok."
  },
  {
    "q": "Should we book the Heritage Railcar Suites or regular King/Twin rooms?",
    "a": "Heritage Railcar Suites and One-Bedroom Railcar Pool Villas are the signature experience — crafted from authentic reclaimed Thai train carriages with outdoor soaking tubs and private lakeside decks — though Classic rooms work smoothly for twin-share golf groups."
  },
  {
    "q": "What non-golf activities pair well with a Khao Yai highland golf stopover?",
    "a": "Khao Yai is Thailand's premier vineyard and national-park region: AGS can add afternoon winery tastings at GranMonte or PB Valley and guided wildlife excursions inside Khao Yai National Park."
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

            <AccommodationConciergeBlock hotelName="InterContinental Khao Yai Resort" location="Khao Yai" countryName="Thailand" />

            <VenueItineraries venueHref="/accommodations/thailand/intercontinental-khao-yai/" venueName="InterContinental Khao Yai Resort" venueType="accommodation" />

</main>
 );
}
