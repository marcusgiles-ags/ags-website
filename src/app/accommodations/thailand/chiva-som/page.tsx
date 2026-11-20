import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Chiva-Som Hua Hin | Luxury Wellness & Golf Sanctuary" },
 description: "Chiva-Som Hua Hin — Asia's premier wellness sanctuary alongside world-class golf. The ultimate recovery base in Thailand. Book with Asia Golf Specialists.",
 keywords: ["Chiva-Som Hua Hin", "luxury wellness resort golf Thailand", "Hua Hin five star hotel golf", "Black Mountain golf accommodation", "golf recovery resort Thailand"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/thailand/chiva-som/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Chiva-Som Hua Hin | Luxury Wellness & Golf Sanctuary" },
        description: "Chiva-Som Hua Hin — Asia's premier wellness sanctuary alongside world-class golf. The ultimate recovery base in Thailand. Book with Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/accommodations/thailand/chiva-som/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/thailand/chiva-som/thailand-luxury-hotel-chiva-som-hua-hin-beachfront-1.webp",
            width: 1200,
            height: 630,
            alt: "Chiva-Som Hua Hin | World-Leading Wellness Resort Thailand | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Chiva-Som Hua Hin | Luxury Wellness & Golf Sanctuary" },
        description: "Chiva-Som Hua Hin — Asia's premier wellness sanctuary alongside world-class golf. The ultimate recovery base in Thailand. Book with Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/thailand/chiva-som/thailand-luxury-hotel-chiva-som-hua-hin-beachfront-1.webp"],
    },
};

const images = [
 { src: "/images/accommodations/thailand/chiva-som/thailand-luxury-hotel-chiva-som-hua-hin-beachfront-1.webp", alt: "Chiva-Som Hua Hin Beachfront Resort Thailand - Premium Southeast Asia Golf Tours 2026", caption: "Chiva-Som beachfront resort, Hua Hin" },
 { src: "/images/accommodations/thailand/chiva-som/thailand-luxury-hotel-chiva-som-hua-hin-wellness-spa-2.webp", alt: "Chiva-Som International Health Resort Wellness Spa", caption: "Wellness spa treatment pavilion" },
 { src: "/images/accommodations/thailand/chiva-som/thailand-luxury-hotel-chiva-som-hua-hin-aerial-drone-3.webp", alt: "Chiva-Som Hua Hin Aerial Drone View Gulf of Thailand", caption: "Aerial view over the Gulf of Thailand" },
 { src: "/images/accommodations/thailand/chiva-som/thailand-luxury-hotel-chiva-som-hua-hin-entrance-4.webp", alt: "Chiva-Som Hua Hin Entrance Gardens Thailand - Premium Southeast Asia Golf Tours 2026", caption: "Resort entrance and tropical gardens" },
 { src: "/images/accommodations/thailand/chiva-som/thailand-luxury-hotel-chiva-som-hua-hin-wellness-pool-5.webp", alt: "Chiva-Som Hua Hin Wellness Pool Beachfront - Premium Southeast Asia Golf Tours 2026", caption: "Beachfront wellness pool, Hua Hin" },
];

export default function ChivaSom() {
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
 <h1 style={{ marginBottom: '1rem' }}>Chiva-Som <br /><span className="text-gold">International Health Resort</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"The world's most awarded wellness destination — the scientifically designed antidote to an intensive golf schedule."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
 {[
 ["Category", "International Health & Wellness Resort"],
 ["Star Rating", "5 Star (Independently Managed)"],
 ["Location", "Hua Hin, Prachuap Khiri Khan, Thailand"],
 ["Total Rooms", "54 Suites & Pavilions (exclusive setting)"],
 ["Setting", "Beachfront, Gulf of Thailand"],
 ["Nearest Golf", "Black Mountain GC (20 min), Banyan GC (25 min)"],
 ["Key Amenity", "57 Treatment Rooms, Medical Wellness, Pool"],
 ].map(([k, v], i, arr) => (<tr key={k}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none' }}>{v}</td></tr>))}
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Chiva-Som International Health Resort is the world's most acclaimed wellness destination — a medically supervised, all-inclusive retreat that operates on the principle that genuine luxury begins with how you feel, not just what surrounds you. Its 54 suites and pavilions run along a private beachfront on the Gulf of Thailand, connected by immaculate gardens designed to facilitate the transition from the physical demands of golf to a state of deep restoration.</p>
 <p>The resort's 57 treatment rooms are staffed by medical doctors, physiotherapists, and traditional Thai wellness practitioners working in concert across protocols that span from golf-specific deep tissue recovery to cardiovascular optimisation. The nutritional programme — custom-designed around each guest's health profile — operates simultaneously with the activity schedule, creating a total system for physical performance recovery.</p>
 <p>For AGS clients who use Black Mountain or Banyan Golf Club as their Hua Hin golf base, Chiva-Som provides the ultimate recovery partner — a rare resort where the experience between rounds is as scientifically purposeful as the rounds themselves. For groups that compete hard for a week before transitioning to a wellness phase, Chiva-Som Hua Hin is the non-negotiable conclusion.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/thailand/chiva-som/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates Chiva-Som wellness stays with Black Mountain and Banyan tee times for a complete Hua Hin experience.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Chiva-Som International Health Resort",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Hua Hin", "addressCountry": "TH" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/thailand/chiva-som/",
                          "sameAs": ["https://www.chivasom.com/","https://www.forbestravelguide.com/hotels/hua-hin-thailand/chiva-som-international-health-resort","https://guide.michelin.com/en/thailand/hua-hin/hotels/chiva-som-international-health-resort-202390","https://www.cntraveler.com/hotels/hua-hin/chiva-som-international-health-resort"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Thailand", "item": "https://www.asiagolfspecialists.com/destinations/thailand/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Chiva-Som International Health Resort", "item": "https://www.asiagolfspecialists.com/accommodations/thailand/chiva-som/" }
                            ]
                        }
                    ]
                }) }} />
 
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Occupying seven acres of serene beachfront gardens along the Gulf of Thailand in royal Hua Hin, the 54-room Chiva-Som International Health Resort is one of the world&apos;s most celebrated destination wellness retreats — and a property Marcus has personally stayed at. Designed around holistic physical longevity, its adults-only, device-conscious grounds offer deep stillness unmatched by conventional beach hotels.</p>
                        <p style={{ marginBottom: '1rem' }}>For golfers wanting to pair championship Thai fairways with serious sports physiotherapy, mobility work, and post-round recovery, Chiva-Som sits roughly 20 to 25 minutes from Black Mountain Golf Club and Pineapple Valley (formerly Banyan) Golf Club. AGS structures tee times to dovetail cleanly with your daily scheduled physiotherapy, hydrotherapy, and personal training sessions.</p>
                        <p>Dining centres on vibrant, nutrient-dense spa cuisine at Taste of Siam and Emerald Room, supported by 57 treatment rooms, saltwater watsu pools, infrared saunas, and medical-grade sports rehab specialists.</p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Chiva-Som International Health Resort"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/thailand/chiva-som/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/thailand/chiva-som/thailand-luxury-hotel-chiva-som-hua-hin-beachfront-1.webp"
    addressLocality="Hua Hin"
    addressCountry="TH"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="World-Leading Health & Wellness Pioneer • Hua Hin"
    inspectionDate="Personally Stayed & Inspected — Marcus Giles"
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.8,
            highlight: "Oceanfront rooms & digital detox calm"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.9,
            highlight: "Quiet, adults-only beachfront grounds"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.9,
            highlight: "World-famous physiotherapy & sports rehab"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.8,
            highlight: "Gourmet nutritional spa cuisine"
      }
]}
    verdict="The gold standard in global wellness retreats. Positioned on the royal Hua Hin beachfront, Chiva-Som offers world-class physiotherapy and post-round body restoration tailored for discerning golfers."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Can you actually play golf while staying on a wellness retreat at Chiva-Som Hua Hin?","acceptedAnswer":{"@type":"Answer","text":"Yes. While Chiva-Som is primarily an immersive wellness sanctuary, AGS coordinates morning tee times at Black Mountain (25 min) and Pineapple Valley (20 min) paired with targeted afternoon sports physiotherapy, stretching, and recovery sessions back at the resort."}},{"@type":"Question","name":"What is included in a Chiva-Som stay booked through AGS?","acceptedAnswer":{"@type":"Answer","text":"All Chiva-Som retreats include three tailored wellness meals daily, an initial health & wellness consultation, daily massage or treatment allowance, unlimited group movement classes, and full access to the hydrotherapy suites and gymnasium."}},{"@type":"Question","name":"What should golf groups know about Chiva-Som's house rules before booking?","acceptedAnswer":{"@type":"Answer","text":"Chiva-Som welcomes guests aged 16+ and maintains quiet, phone-free public areas plus a refined, wellness-focused evening atmosphere — making it best suited to couples, solo golfers, and wellness-minded pairs rather than loud buddy-trip parties."}},{"@type":"Question","name":"How long is the private transfer from Bangkok Airport (BKK) to Chiva-Som Hua Hin?","acceptedAnswer":{"@type":"Answer","text":"Expect approximately 2 hours 45 minutes to 3 hours door-to-door from Suvarnabhumi Airport (BKK) in an AGS luxury private touring vehicle."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "Can you actually play golf while staying on a wellness retreat at Chiva-Som Hua Hin?",
    "a": "Yes. While Chiva-Som is primarily an immersive wellness sanctuary, AGS coordinates morning tee times at Black Mountain (25 min) and Pineapple Valley (20 min) paired with targeted afternoon sports physiotherapy, stretching, and recovery sessions back at the resort."
  },
  {
    "q": "What is included in a Chiva-Som stay booked through AGS?",
    "a": "All Chiva-Som retreats include three tailored wellness meals daily, an initial health & wellness consultation, daily massage or treatment allowance, unlimited group movement classes, and full access to the hydrotherapy suites and gymnasium."
  },
  {
    "q": "What should golf groups know about Chiva-Som's house rules before booking?",
    "a": "Chiva-Som welcomes guests aged 16+ and maintains quiet, phone-free public areas plus a refined, wellness-focused evening atmosphere — making it best suited to couples, solo golfers, and wellness-minded pairs rather than loud buddy-trip parties."
  },
  {
    "q": "How long is the private transfer from Bangkok Airport (BKK) to Chiva-Som Hua Hin?",
    "a": "Expect approximately 2 hours 45 minutes to 3 hours door-to-door from Suvarnabhumi Airport (BKK) in an AGS luxury private touring vehicle."
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

            <AccommodationConciergeBlock hotelName="Chiva-Som International Health Resort" location="Hua Hin" countryName="Thailand" />

            <VenueItineraries venueHref="/accommodations/thailand/chiva-som/" venueName="Chiva-Som International Health Resort" venueType="accommodation" />

</main>
 );
}
