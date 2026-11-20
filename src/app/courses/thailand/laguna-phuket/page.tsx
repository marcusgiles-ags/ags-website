import VenueItineraries from "@/components/VenueItineraries";
﻿import Link from "next/link";
import Image from "next/image";
import CourseNavigation from "@/components/CourseNavigation";
import HeroSlider from "@/components/HeroSlider";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CourseSchemaBlock from "@/components/CourseSchemaBlock";
import CourseFAQSection from "@/components/CourseFAQSection";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Laguna Golf Phuket | Championship Resort Course Thailand" },
 description: "Play Laguna Golf Phuket — scenic resort layout within Laguna Phuket, weaving through coconut groves and tranquil lagoons. Book with Asia Golf Specialists.",
 keywords: ["Laguna Golf Phuket", "Phuket Golf Course", "Laguna Phuket Golf", "Coconut Grove Golf Thailand", "Thailand Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/thailand/laguna-phuket/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Laguna Golf Phuket | Championship Resort Course Thailand" },
        description: "Play Laguna Golf Phuket — scenic resort layout within Laguna Phuket, weaving through coconut groves and tranquil lagoons. Book with Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/courses/thailand/laguna-phuket/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/thailand/laguna-phuket/laguna-golf-phuket-thailand-1.webp",
            width: 1200,
            height: 630,
            alt: "Laguna Golf Phuket | Coconut Grove Lagoon Championship Thailand — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Laguna Golf Phuket | Championship Resort Course Thailand" },
        description: "Play Laguna Golf Phuket — scenic resort layout within Laguna Phuket, weaving through coconut groves and tranquil lagoons. Book with Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/courses/thailand/laguna-phuket/laguna-golf-phuket-thailand-1.webp"],
    },
};

export default function LagunaGolfPhuket() {
 const images = [
 { src: "/images/courses/thailand/laguna-phuket/laguna-golf-phuket-thailand-1.webp", alt: "Laguna Golf Phuket Thailand Aerial Coconut Grove Lagoon", caption: "Laguna Golf Phuket Thailand Aerial Coconut Grove Lagoon" },
 { src: "/images/courses/thailand/laguna-phuket/laguna-golf-phuket-lagoon-hole-2.webp", alt: "Laguna Golf Phuket Thailand Lagoon Hole Resort Aerial", caption: "Laguna Golf Phuket Thailand Lagoon Hole Resort Aerial" },
 { src: "/images/courses/thailand/laguna-phuket/laguna-golf-phuket-coconut-grove-3.webp", alt: "Laguna Golf Phuket Thailand Coconut Grove Scenic Fairway", caption: "Laguna Golf Phuket Thailand Coconut Grove Scenic Fairway" },
 { src: "/images/courses/thailand/laguna-phuket/laguna-golf-phuket-resort-view-4.webp", alt: "Laguna Golf Club Phuket Thailand Resort View Championship", caption: "Laguna Golf Club Phuket Thailand Resort View Championship" },
 { src: "/images/courses/thailand/laguna-phuket/laguna-golf-phuket-signature-hole-5.webp", alt: "Laguna Golf Phuket Thailand Island Green Signature Hole", caption: "Laguna Golf Phuket Thailand Island Green Signature Hole" },
 ];
 return (
 <main style={{ backgroundColor: '#020617', color: 'var(--color-tertiary)', minHeight: '100vh' }}>
 <Navbar />
 <header className="hero" style={{ minHeight: '85vh' }}>
 <div style={{ position: 'absolute', inset: 0, zIndex: 0, WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)' }}>
 <HeroSlider images={images.map(i => i.src)} />
 <div className="hero-overlay" style={{ position: 'absolute', inset: 0, zIndex: 2 }}></div>
 </div>
 <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <DestinationBackLink country="Thailand" countryLink="/destinations/thailand/courses/" />
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Laguna Phuket Resort</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Laguna Golf<br /><span className="text-gold">Phuket</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Phuket's most scenic resort layout — coconut groves, lagoons, and island views."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', 'Paul Jansen / Max Wexler'], ['Year Opened', '1993 (2014 Redesign)'], ['Location', 'Bang Tao, Phuket'], ['Par', '71'], ['Length', '6,606 Yards'], ['Setting', 'Lagoons, coconut groves, tropical gardens'], ['Character', 'Resort-style, scenic, enjoyable'], ['Resort', 'Laguna Phuket estate']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Laguna Golf Phuket offers the quintessential resort golf experience — a beautifully conditioned layout winding through the 1,000-acre Laguna Phuket estate, where fairways thread between coconut palm groves, over serene lagoons, and past the manicured gardens that connect the estate's world-class hotels. It is a course where the natural beauty of the setting is the primary attraction.</p>
 <p>The layout is accessible to all levels of golfer while still providing genuine scoring challenge from the back tees. The signature island green finishes create memorable moments on multiple holes, the greens are consistently true and well-paced, and the support infrastructure — clubhouse, caddies, dining — matches the estate's five-star resort standards.</p>
 <p>For discerning golfers staying within the Laguna Phuket estate at Bang Tao or travelling for a combined beach and golf holiday, AGS recommends Laguna Golf as an outstanding round-start for any Phuket program — comfortable enough to ease into the trip, beautiful enough to set an excellent tone.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Lagoon</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
  {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/thailand/laguna-phuket/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://www.lagunagolf.com/phuket/"]}
                name="Laguna Golf Phuket"
                description="Phuket's most scenic resort layout — coconut groves, lagoons, and island views."
                url={"https://www.asiagolfspecialists.com/courses/thailand/laguna-phuket/"}
                imageUrl={"/images/courses/thailand/laguna-phuket/laguna-golf-phuket-thailand-1.webp"}
                addressLocality={"Phuket"}
                addressCountry={"TH"}
                numberOfHoles={18}
                courseLength={6606}
                par={71}
                designer="Paul Jansen / Max Wexler"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Thailand", item: "https://www.asiagolfspecialists.com/destinations/thailand/" },
                    { name: "Thailand Courses", item: "https://www.asiagolfspecialists.com/destinations/thailand/courses/" },
                    { name: "Laguna Golf Phuket", item: "https://www.asiagolfspecialists.com/courses/thailand/laguna-phuket/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Laguna Golf Phuket</strong> is a premier Par 71 championship layout in Phuket, Thailand, crafted by <strong>Paul Jansen / Max Wexler</strong> (1993 (2014 Redesign)) and stretching to <strong>6,606 Yards</strong> across a lagoons, coconut groves, tropical gardens environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its tranquil lagoon & coconut grove routing (Scenic water-framed fairways) and immaculate paspalum fairway roll (Firm, crisp ball-striking).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Laguna Golf Phuket (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Thailand dry season. Our curatorial scorecard specifically notes its caddie water hazard guidance (Crucial for lagoon positioning), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Phuket golf tour by AGS, Laguna Golf Phuket provides a distinct architectural test by Paul Jansen / Max Wexler that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Laguna Golf Phuket"
    itemUrl="https://www.asiagolfspecialists.com/courses/thailand/laguna-phuket/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/thailand/laguna-phuket/laguna-golf-phuket-thailand-1.webp"
    addressLocality="Phuket"
    addressCountry="TH"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Laguna Integrated Resort Parkland • Phuket"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Tranquil Lagoon & Coconut Grove Routing",
            score: 9.6,
            highlight: "Scenic water-framed fairways"
      },
      {
            label: "Immaculate Paspalum Fairway Roll",
            score: 9.5,
            highlight: "Firm, crisp ball-striking"
      },
      {
            label: "Caddie Water Hazard Guidance",
            score: 9.5,
            highlight: "Crucial for lagoon positioning"
      },
      {
            label: "World-Class Banyan Tree Resort Logistics",
            score: 9.7,
            highlight: "Seamless resort transfers"
      }
]}
    verdict="Redesigned by Paul Jansen, Laguna Golf Phuket is an elegant, walkable resort course winding through scenic waterways and coconut groves inside the acclaimed Laguna Phuket destination."
  />


            <CourseFAQSection
                courseName="Laguna Golf Phuket"
                faqs={[
          {
                    "q": "What are the key course specifications for Laguna Golf Phuket?",
                    "a": "Laguna Golf Phuket in Phuket, Thailand is a Par 71 championship layout designed by Paul Jansen / Max Wexler (opened 1993 (2014 Redesign)), measuring 6,606 Yards within a lagoons, coconut groves, tropical gardens setting. It is particularly noted for tranquil lagoon & coconut grove routing (Scenic water-framed fairways)."
          },
          {
                    "q": "How do I secure tee times and caddies at Laguna Golf Phuket?",
                    "a": "Laguna Golf Phuket operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie water hazard guidance (Crucial for lagoon positioning)), and private VIP transfers from your Phuket hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Laguna Golf Phuket?",
                    "a": "Our field inspection highlights Laguna Golf Phuket's immaculate paspalum fairway roll (Firm, crisp ball-striking) alongside tranquil lagoon & coconut grove routing (Scenic water-framed fairways). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Laguna Golf Phuket?",
                    "a": "November through April is the recommended season for Laguna Golf Phuket."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/thailand/laguna-phuket/" venueName="Laguna Golf Phuket" venueType="course" />
            <CourseNavigation
                prev={{ title: "Laem Chabang International CC", path: "/courses/thailand/laem-chabang/" }}
                next={{ title: "Lake View Hotel & Golf Club", path: "/courses/thailand/lake-view/" }}
                country="Thailand"
                countryLink="/destinations/thailand/courses/"
            />
 

</main>
 );
}
