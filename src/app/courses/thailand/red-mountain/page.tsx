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
 title: { absolute: "Red Mountain Golf Club Phuket | Asia's Dramatic Layout" },
 description: "Play Red Mountain Golf Club Phuket — carved through a former tin mine filled with canyons, rated Asia's most dramatic course. Book with AGS.",
 keywords: ["Red Mountain Golf Club Phuket", "Phuket Golf Course", "Most Dramatic Golf Course Asia", "Tin Mine Golf Thailand", "Thailand Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/thailand/red-mountain/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Red Mountain Golf Club Phuket | Asia's Dramatic Layout" },
        description: "Play Red Mountain Golf Club Phuket — carved through a former tin mine filled with canyons, rated Asia's most dramatic course. Book with AGS.",
        url: "https://www.asiagolfspecialists.com/courses/thailand/red-mountain/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/thailand/red-mountain/red-mountain-golf-club-phuket-thailand-1.webp",
            width: 1200,
            height: 630,
            alt: "Red Mountain Golf Club Phuket | Asia — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Red Mountain Golf Club Phuket | Asia's Dramatic Layout" },
        description: "Play Red Mountain Golf Club Phuket — carved through a former tin mine filled with canyons, rated Asia's most dramatic course. Book with AGS.",
        images: ["https://www.asiagolfspecialists.com/images/courses/thailand/red-mountain/red-mountain-golf-club-phuket-thailand-1.webp"],
    },
};

export default function RedMountain() {
 const images = [
 { src: "/images/courses/thailand/red-mountain/red-mountain-golf-club-phuket-thailand-1.webp", alt: "Red Mountain Golf Club Phuket Thailand Tin Mine Canyon Aerial", caption: "Red Mountain Golf Club, former tin mine setting" },
 { src: "/images/courses/thailand/red-mountain/red-mountain-golf-club-dramatic-canyon-2.webp", alt: "Red Mountain Golf Club Phuket Thailand Dramatic Canyon Hole", caption: "Iron ore canyon terrain, Red Mountain Phuket" },
 { src: "/images/courses/thailand/red-mountain/red-mountain-golf-club-iron-ore-3.webp", alt: "Red Mountain Golf Club Phuket Thailand Iron Ore Red Rock Canyon Hole", caption: "Championship hole amid red rock canyon" },
 { src: "/images/courses/thailand/red-mountain/red-mountain-golf-club-fairway-4.webp", alt: "Red Mountain Golf Club Phuket Thailand Championship Fairway Red Rock", caption: "Championship fairway, Red Rock Phuket" },
 { src: "/images/courses/thailand/red-mountain/red-mountain-golf-club-signature-5.webp", alt: "Red Mountain Golf Club Phuket Signature Hole 18 Water Canyon", caption: "Signature hole 18 over water canyon" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Asia's Most Dramatic</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Red Mountain<br /><span className="text-gold">Golf Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"The most dramatic course in Asia — carved through a former tin mine, iron-red and unforgettable."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', 'Johnathan Morrow / Al Tikkanen'], ['Year Opened', '2007'], ['Location', 'Kathu, Phuket'], ['Par', '72'], ['Length', '7,002 Yards'], ['Setting', 'Former tin mine — iron-red canyons'], ['Character', 'Visually spectacular, risk-reward']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Red Mountain Golf Club in Phuket is the most visually extraordinary golf experience in Asia — a course carved from the remnants of a former tin mine, where the iron-rich soil creates a stunning palette of deep reds and burnt oranges against the surrounding jungle green. The canyons, cliffs, and vertical rock faces that frame the holes are not manufactured — they are the raw legacy of decades of mining, reshaped into one of the most memorable 18-hole routes anywhere in the world.</p>
 <p>The signature 18th hole — a dramatic par five requiring a carry over a flooded canyon to a tiered green — creates a finishing crescendo that players discuss for years after their round. The course demands courage on multiple occasions, but the risk is always clearly rewarded by elevation, sight lines, and visual theatre that no conventional course can replicate.</p>
 <p>Red Mountain is consistently AGS's most requested first-booking on Phuket golf itineraries from discerning clients who have read about it online and want to experience it first-hand. It never disappoints. We build it into every Phuket golf program we design.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Red Rock</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/thailand/red-mountain/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://www.redmountainswings.com/"]}
                name="Red Mountain Golf Club"
                description="The most dramatic course in Asia — carved through a former tin mine, iron-red and unforgettable."
                url={"https://www.asiagolfspecialists.com/courses/thailand/red-mountain/"}
                imageUrl={"/images/courses/thailand/red-mountain/red-mountain-golf-club-phuket-thailand-1.webp"}
                addressLocality={"Phuket"}
                addressCountry={"TH"}
                numberOfHoles={18}
                courseLength={7002}
                par={72}
                designer="Johnathan Morrow / Al Tikkanen"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Thailand", item: "https://www.asiagolfspecialists.com/destinations/thailand/" },
                    { name: "Thailand Courses", item: "https://www.asiagolfspecialists.com/destinations/thailand/courses/" },
                    { name: "Red Mountain Golf Club", item: "https://www.asiagolfspecialists.com/courses/thailand/red-mountain/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Red Mountain Golf Club</strong> is a premier Par 72 championship layout in Phuket, Thailand, crafted by <strong>Johnathan Morrow / Al Tikkanen</strong> (2007) and stretching to <strong>7,002 Yards</strong> across a former tin mine — iron-red canyons environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its red tin mine cliffs & vertical drops (Sensational dramatic elevation) and strategic shot-shaping over chasms (Risk-reward jungle corridors).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Red Mountain Golf Club (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Thailand dry season. Our curatorial scorecard specifically notes its caddie slope & elevation math (Calculates severe drop-offs), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Phuket golf tour by AGS, Red Mountain Golf Club provides a distinct architectural test by Johnathan Morrow / Al Tikkanen that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Red Mountain Golf Club"
    itemUrl="https://www.asiagolfspecialists.com/courses/thailand/red-mountain/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/thailand/red-mountain/red-mountain-golf-club-phuket-thailand-1.webp"
    addressLocality="Phuket"
    addressCountry="TH"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="Asia's Most Visually Spectacular Layout • Phuket"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Red Tin Mine Cliffs & Vertical Drops",
            score: 9.9,
            highlight: "Sensational dramatic elevation"
      },
      {
            label: "Strategic Shot-Shaping Over Chasms",
            score: 9.8,
            highlight: "Risk-reward jungle corridors"
      },
      {
            label: "Caddie Slope & Elevation Math",
            score: 9.7,
            highlight: "Calculates severe drop-offs"
      },
      {
            label: "Intimate Luxury Boutique Clubhouse",
            score: 9.6,
            highlight: "Chic open-air jungle terrace"
      }
]}
    verdict="Carved into the rugged topography of an abandoned Phuket tin mine. Dramatic red cliffs, towering elevation drops, and rainforest corridors create an intoxicating, visually stunning sensory overload."
  />


            <CourseFAQSection
                courseName="Red Mountain Golf Club"
                faqs={[
          {
                    "q": "What are the key course specifications for Red Mountain Golf Club?",
                    "a": "Red Mountain Golf Club in Phuket, Thailand is a Par 72 championship layout designed by Johnathan Morrow / Al Tikkanen (opened 2007), measuring 7,002 Yards within a former tin mine — iron-red canyons setting. It is particularly noted for red tin mine cliffs & vertical drops (Sensational dramatic elevation)."
          },
          {
                    "q": "How do I secure tee times and caddies at Red Mountain Golf Club?",
                    "a": "Red Mountain Golf Club operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie slope & elevation math (Calculates severe drop-offs)), and private VIP transfers from your Phuket hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Red Mountain Golf Club?",
                    "a": "Our field inspection highlights Red Mountain Golf Club's strategic shot-shaping over chasms (Risk-reward jungle corridors) alongside red tin mine cliffs & vertical drops (Sensational dramatic elevation). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Red Mountain Golf Club?",
                    "a": "November through April is the ideal season for Red Mountain Golf Club Phuket."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/thailand/red-mountain/" venueName="Red Mountain Golf Club" venueType="course" />
            <CourseNavigation
                prev={{ title: "Pineapple Valley Golf Club", path: "/courses/thailand/pineapple-valley/" }}
                next={{ title: "Siam Country Club Old Course", path: "/courses/thailand/siam-country-club/" }}
                country="Thailand"
                countryLink="/destinations/thailand/courses/"
            />
 </main >
 );
}
