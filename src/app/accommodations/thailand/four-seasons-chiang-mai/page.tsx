import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Four Seasons Chiang Mai | Thailand" },
 description: "Four Seasons Chiang Mai — legendary retreat in northern Thailand's rice paddies. The perfect luxury base for the Chiang Mai championship golf circuit.",
 keywords: ["Four Seasons Resort Chiang Mai", "luxury golf resort Chiang Mai", "Chiang Mai five star hotel golf", "northern Thailand golf accommodation", "highland golf resort Thailand"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/thailand/four-seasons-chiang-mai/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Four Seasons Chiang Mai | Thailand" },
        description: "Four Seasons Chiang Mai — legendary retreat in northern Thailand's rice paddies. The perfect luxury base for the Chiang Mai championship golf circuit.",
        url: "https://www.asiagolfspecialists.com/accommodations/thailand/four-seasons-chiang-mai/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/thailand/four-seasons-chiang-mai/thailand-luxury-hotel-four-seasons-chiang-mai-rice-paddies-1.webp",
            width: 1200,
            height: 630,
            alt: "Four Seasons Resort Chiang Mai | Luxury Highland Golf Retreat | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Four Seasons Chiang Mai | Thailand" },
        description: "Four Seasons Chiang Mai — legendary retreat in northern Thailand's rice paddies. The perfect luxury base for the Chiang Mai championship golf circuit.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/thailand/four-seasons-chiang-mai/thailand-luxury-hotel-four-seasons-chiang-mai-rice-paddies-1.webp"],
    },
};

const images = [
 { src: "/images/accommodations/thailand/four-seasons-chiang-mai/thailand-luxury-hotel-four-seasons-chiang-mai-rice-paddies-1.webp", alt: "Four Seasons Resort Chiang Mai Terraced Rice Paddies", caption: "Terraced Rice Paddies" },
 { src: "/images/accommodations/thailand/four-seasons-chiang-mai/thailand-luxury-hotel-four-seasons-chiang-mai-suite-2.webp", alt: "Four Seasons Chiang Mai Luxury Suite Interior - Premium Southeast Asia Golf Tours 2026", caption: "Private pool pavilion villa" },
 { src: "/images/accommodations/thailand/four-seasons-chiang-mai/thailand-luxury-hotel-four-seasons-chiang-mai-terrace-3.webp", alt: "Four Seasons Chiang Mai Terrace Rice Paddy View - Premium Southeast Asia Golf Tours 2026", caption: "Rice paddy terrace view" },
 { src: "/images/accommodations/thailand/four-seasons-chiang-mai/thailand-luxury-hotel-four-seasons-chiang-mai-private-pool-villa-4.webp", alt: "Four Seasons Chiang Mai Private Pool Villa Highland", caption: "Private pool villa and gardens" },
 { src: "/images/accommodations/thailand/four-seasons-chiang-mai/thailand-luxury-hotel-four-seasons-chiang-mai-elephant-camp-5.webp", alt: "Four Seasons Chiang Mai Elephant Camp Northern Thailand", caption: "Elephant Camp experience, Chiang Mai" },
];

export default function FourSeasonsChiangMai() {
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
 <h1 style={{ marginBottom: '1rem' }}>Four Seasons Resort <br /><span className="text-gold">Chiang Mai</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Set among working terraced rice paddies — the definitive northern Thai golf retreat that resets the soul between rounds."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
 {[
 ["Category", "Luxury Highland Villa Resort"],
 ["Star Rating", "5 Star (Forbes Five-Star)"],
 ["Location", "Mae Rim Valley, Chiang Mai, Thailand"],
 ["Total Rooms", "98 Pavilions, Suites & Pool Residences"],
 ["Setting", "Working terraced rice paddies, northern valley"],
 ["Nearest Golf", "Alpine Golf Chiang Mai (20 min), CM Highlands (25 min)"],
 ["Key Amenity", "Elephant Camp, Cooking School, Spa"],
 ].map(([k, v], i, arr) => (<tr key={k}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none' }}>{v}</td></tr>))}
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Four Seasons Resort Chiang Mai occupies a setting that has no parallel in Thai hospitality: 20 acres of working, terraced rice paddies in the Mae Rim Valley, 30 minutes north of the ancient city. The resort's 98 pavilions, suites and pool residences are distributed around the paddy system, with each unit designed to maximise the view of the agricultural landscape and its surrounding mountain rim.</p>
 <p>The resort is the natural anchor for northern Thailand golf — providing comfortable, stylish proximity to Alpine Golf Resort Chiang Mai's Ron Garl-designed valley masterpiece and Chiang Mai Highlands Golf & Spa Resort, both among the finest highland golf experiences in Southeast Asia. Private transfers are coordinated with the housekeeping schedule, ensuring clubs are cleaned and returned before morning coffee is served.</p>
 <p>Between rounds, the Four Seasons Chiang Mai provides a depth of cultural programming that is unique to the northern Thailand context. The resort's ethical elephant camp, traditional cooking school, and daily rice-planting activities create an experience that matches the golf in terms of genuine engagement — making this perhaps the most culturally complete luxury golf base in the AGS portfolio.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/thailand/four-seasons-chiang-mai/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates tee times at Alpine Chiang Mai and Chiang Mai Highlands for all Four Seasons guests.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Four Seasons Resort Chiang Mai",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Chiang Mai", "addressCountry": "TH" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/thailand/four-seasons-chiang-mai/",
                          "sameAs": ["https://www.fourseasons.com/chiangmai/","https://www.forbestravelguide.com/hotels/chiang-mai-thailand/four-seasons-resort-chiang-mai","https://guide.michelin.com/en/hotels-stays/thailand/chiang-mai/mae-rim/four-seasons-resort-chiang-mai-10000000000000000","https://www.cntraveler.com/hotels/chiang-mai/four-seasons-resort-chiang-mai"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Thailand", "item": "https://www.asiagolfspecialists.com/destinations/thailand/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Four Seasons Resort Chiang Mai", "item": "https://www.asiagolfspecialists.com/accommodations/thailand/four-seasons-chiang-mai/" }
                            ]
                        }
                    ]
                }) }} />
 
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Nestled among working terraced emerald rice paddies in the cool Mae Rim Valley roughly 30 minutes north of Chiang Mai&apos;s Old City, Forbes 5-Star Four Seasons Resort Chiang Mai is our curated northern Thailand luxury partner for tranquil highland golf itineraries. Its 98 Lanna-style pavilions, pool villas, and multi-bedroom Private Residences feature covered outdoor salas overlooking rice terraces and misty Doi Suthep ridges.</p>
                        <p style={{ marginBottom: '1rem' }}>Staying in Mae Rim puts golfers roughly 15 minutes from Summit Green Valley Chiang Mai, 35 minutes from Mae Jo Golf Resort, and 50 to 55 minutes from Chiangmai Highlands and Alpine Golf Resort Chiang Mai via private AGS vehicle — trading city traffic for crisp morning mountain air.</p>
                        <p>Non-golfing afternoons feel restorative and deeply local: traditional northern Thai herbal poultices at Wara Cheewa Spa, rice-planting or culinary classes at Rim Tai Kitchen, Khao restaurant&apos;s elevated Lanna cuisine, and open-air sunset cocktails at Ratree Bar.</p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Four Seasons Resort Chiang Mai"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/thailand/four-seasons-chiang-mai/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/thailand/four-seasons-chiang-mai/thailand-luxury-hotel-four-seasons-chiang-mai-rice-paddies-1.webp"
    addressLocality="Chiang Mai"
    addressCountry="TH"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="Working Rice Valley Paradise • Mae Rim, Chiang Mai"
    inspectionDate="Curated AGS Partner — Vetted via Client Feedback"
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.9,
            highlight: "Lanna pavilion terraces over rice fields"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.9,
            highlight: "Secluded Mae Rim valley sanctuary"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.8,
            highlight: "Wara Cheewa Spa herbal compresses"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.8,
            highlight: "Khao Restaurant Northern Thai mastery"
      }
]}
    verdict="Set amidst working emerald rice fields in the Mae Rim Valley. Private Lanna pavilions, soothing water buffalo rituals, and rapid executive transfers to Chiang Mai Highlands and Alpine."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How far is Four Seasons Resort Chiang Mai from Chiang Mai's top golf courses?","acceptedAnswer":{"@type":"Answer","text":"Summit Green Valley Chiang Mai is 15 minutes away, Mae Jo Golf Resort is 35 minutes, and Chiangmai Highlands Golf & Spa Resort or Alpine Golf Resort Chiang Mai are roughly 50–55 minutes via private AGS touring vehicle."}},{"@type":"Question","name":"Which accommodations at Four Seasons Chiang Mai work best for 4-to-8-player golf groups?","acceptedAnswer":{"@type":"Answer","text":"The 2-, 3-, and 4-Bedroom Private Residences feature massive open-air teak salas, private swimming pools, full kitchens, and dedicated residence staff — ideal for travelling golf groups seeking shared private estate luxury."}},{"@type":"Question","name":"When is the best season to visit Four Seasons Resort Chiang Mai for golf?","acceptedAnswer":{"@type":"Answer","text":"November through February delivers crisp, cool northern mornings (15–26°C) and clear blue mountain skies; note that we generally steer golfers away from March–April during northern Thailand's agricultural burning season."}},{"@type":"Question","name":"How easy is it to visit Chiang Mai's Old City temples and night markets from Mae Rim?","acceptedAnswer":{"@type":"Answer","text":"Central Chiang Mai and the Old City sit roughly 30 minutes south by resort shuttle or private AGS vehicle, giving you complete rural serenity by day with effortless evening city access."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "How far is Four Seasons Resort Chiang Mai from Chiang Mai's top golf courses?",
    "a": "Summit Green Valley Chiang Mai is 15 minutes away, Mae Jo Golf Resort is 35 minutes, and Chiangmai Highlands Golf & Spa Resort or Alpine Golf Resort Chiang Mai are roughly 50–55 minutes via private AGS touring vehicle."
  },
  {
    "q": "Which accommodations at Four Seasons Chiang Mai work best for 4-to-8-player golf groups?",
    "a": "The 2-, 3-, and 4-Bedroom Private Residences feature massive open-air teak salas, private swimming pools, full kitchens, and dedicated residence staff — ideal for travelling golf groups seeking shared private estate luxury."
  },
  {
    "q": "When is the best season to visit Four Seasons Resort Chiang Mai for golf?",
    "a": "November through February delivers crisp, cool northern mornings (15–26°C) and clear blue mountain skies; note that we generally steer golfers away from March–April during northern Thailand's agricultural burning season."
  },
  {
    "q": "How easy is it to visit Chiang Mai's Old City temples and night markets from Mae Rim?",
    "a": "Central Chiang Mai and the Old City sit roughly 30 minutes south by resort shuttle or private AGS vehicle, giving you complete rural serenity by day with effortless evening city access."
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

            <AccommodationConciergeBlock hotelName="Four Seasons Resort Chiang Mai" location="Chiang Mai" countryName="Thailand" />

            <VenueItineraries venueHref="/accommodations/thailand/four-seasons-chiang-mai/" venueName="Four Seasons Resort Chiang Mai" venueType="accommodation" />

</main>
 );
}
