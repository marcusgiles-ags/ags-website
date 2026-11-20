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
 title: { absolute: "Heron Lake Golf Course Vietnam | Natural Wetlands Golf Hanoi" },
 description: "Play Heron Lake Golf Course near Hanoi — a serene resort layout blending naturally with Vietnam's wetlands and birdlife. Book with Asia Golf Specialists.",
 keywords: ["Heron Lake Golf Course", "Hanoi Golf Vietnam", "Vietnam Wetlands Golf", "Resort Golf Vietnam", "Northern Vietnam Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/heron-lake/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Heron Lake Golf Course Vietnam | Natural Wetlands Golf Hanoi" },
        description: "Play Heron Lake Golf Course near Hanoi — a serene resort layout blending naturally with Vietnam's wetlands and birdlife. Book with Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/heron-lake/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/heron-lake/heron-lake-golf-course-vietnam-1.webp",
            width: 1200,
            height: 630,
            alt: "Heron Lake Golf Course Vietnam | Natural Wetlands Golf Hanoi — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Heron Lake Golf Course Vietnam | Natural Wetlands Golf Hanoi" },
        description: "Play Heron Lake Golf Course near Hanoi — a serene resort layout blending naturally with Vietnam's wetlands and birdlife. Book with Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/heron-lake/heron-lake-golf-course-vietnam-1.webp"],
    },
};

export default function HeronLake() {
 const images = [
 { src: "/images/courses/vietnam/heron-lake/heron-lake-golf-course-vietnam-1.webp", alt: "Heron Lake Golf Course Vietnam Aerial Wetlands - Premium Southeast Asia Golf Tours 2026", caption: "Aerial wetlands view, Heron Lake Golf, Hanoi" },
 { src: "/images/courses/vietnam/heron-lake/heron-lake-golf-course-wetland-fairway-2.webp", alt: "Heron Lake Golf Course Wetland Fairway Natural Vietnam", caption: "Wetland fairway, natural course setting" },
 { src: "/images/courses/vietnam/heron-lake/heron-lake-golf-course-resort-layout-3.webp", alt: "Heron Lake Golf Resort Vietnam Course Layout Hole - Premium Southeast Asia Golf Tours 2026", caption: "Championship hole layout, Heron Lake Golf" },
 { src: "/images/courses/vietnam/heron-lake/heron-lake-golf-course-northern-vietnam-4.webp", alt: "Heron Lake Golf Course Lake Hole Northern Vietnam - Premium Southeast Asia Golf Tours 2026", caption: "Lake hole, northern Vietnam parkland golf" },
 { src: "/images/courses/vietnam/heron-lake/heron-lake-golf-course-championship-green-5.webp", alt: "Heron Lake Golf Vietnam Championship Green Putting", caption: "Championship green, Heron Lake Golf Hanoi" },
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
                    <DestinationBackLink country="Vietnam" countryLink="/destinations/vietnam/courses/" />
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Heron Lake<br /><span className="text-gold">Golf Course</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Where golf meets the natural rhythm of the wetlands — serene, strategic, unforgettable."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', 'Pacific Coast Design'], ['Year Opened', '2010'], ['Par', '72'], ['Length', '6,971 Yards'], ['Grass Type', 'Paspalum / Bermuda'], ['Setting', 'Natural wetlands and lake']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Heron Lake Golf Course is one of Northern Vietnam's most naturally integrated playing experiences — a resort layout that respects and incorporates the region's native wetland ecosystem rather than fighting against it. Herons, egrets, and wildlife are constant companions throughout the round.</p>
 <p>Designed by Brian Curley (Schmidt-Curley Design), the course flows seamlessly through the natural landscape with strategic water features and mature tree corridors framing each hole. The greens are undulating and receptive, rewarding approach shots hit with precision and appropriate trajectory.</p>
 <p>Located within easy reach of Hanoi, Heron Lake is an excellent choice for the discerning golfer who wants a peaceful, countryside round in contrast to the busier resort circuits. Its combination of natural beauty and solid course design consistently earns it high marks from visiting internationals.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Wetlands</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
  {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}

 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/vietnam/heron-lake/"
  />
  </div>
  </section>
            <CourseSchemaBlock
                name="Heron Lake Golf Course"
                description="Where golf meets the natural rhythm of the wetlands — serene, strategic, unforgettable."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/heron-lake/"}
                imageUrl={"/images/courses/vietnam/heron-lake/heron-lake-golf-course-vietnam-1.webp"}
                addressLocality={"Hanoi"}
                addressCountry={"VN"}
                numberOfHoles={27}
                courseLength={6971}
                par={72}
                designer="Pacific Coast Design"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Heron Lake Golf Course", item: "https://www.asiagolfspecialists.com/courses/vietnam/heron-lake/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Heron Lake Golf Course</strong> is a premier Par 72 championship layout in Hanoi, Vietnam, crafted by <strong>Pacific Coast Design</strong> (2010) and stretching to <strong>6,971 Yards</strong> across a natural wetlands and lake environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its natural wildlife & wetlands integration (Habitat for native wild herons) and strategic water hazard placement (Water in play on 14 holes).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Heron Lake Golf Course (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie local familiarity & line reading (Helps avoid hidden lake bays), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Hanoi golf tour by AGS, Heron Lake Golf Course provides a distinct architectural test by Pacific Coast Design that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Heron Lake Golf Course"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/heron-lake/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/heron-lake/heron-lake-golf-course-vietnam-1.webp"
    addressLocality="Hanoi"
    addressCountry="VN"
    overallScore={4.5}
    maxScore={5.0}
    gradeBadge="Eco-Sanctuary Wetlands Golf • Hanoi"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Natural Wildlife & Wetlands Integration",
            score: 9.5,
            highlight: "Habitat for native wild herons"
      },
      {
            label: "Strategic Water Hazard Placement",
            score: 9.2,
            highlight: "Water in play on 14 holes"
      },
      {
            label: "Caddie Local Familiarity & Line Reading",
            score: 9.3,
            highlight: "Helps avoid hidden lake bays"
      },
      {
            label: "Classic Lakeside Clubhouse Service",
            score: 9.1,
            highlight: "Peaceful natural ambiance"
      }
]}
    verdict="A peaceful resort layout that blends harmoniously into the Heron Lake wetlands. Native water birds, palm-lined fairways, and strategic water hazards reward thoughtful shot placement."
  />


            <CourseFAQSection
                courseName="Heron Lake Golf Course"
                faqs={[
          {
                    "q": "What are the key course specifications for Heron Lake Golf Course?",
                    "a": "Heron Lake Golf Course in Hanoi, Vietnam is a Par 72 championship layout designed by Pacific Coast Design (opened 2010), measuring 6,971 Yards within a natural wetlands and lake setting. It is particularly noted for natural wildlife & wetlands integration (Habitat for native wild herons)."
          },
          {
                    "q": "How do I secure tee times and caddies at Heron Lake Golf Course?",
                    "a": "Heron Lake Golf Course operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie local familiarity & line reading (Helps avoid hidden lake bays)), and private VIP transfers from your Hanoi hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Heron Lake Golf Course?",
                    "a": "Our field inspection highlights Heron Lake Golf Course's strategic water hazard placement (Water in play on 14 holes) alongside natural wildlife & wetlands integration (Habitat for native wild herons). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Heron Lake Golf Course?",
                    "a": "October through April is ideal for Heron Lake Golf Course north of Hanoi."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/heron-lake/" venueName="Heron Lake Golf Course" venueType="course" />
            <CourseNavigation
                prev={{ title: "Golden Sands Golf Resort Vietnam", path: "/courses/vietnam/golden-sands/" }}
                next={{ title: "Hoiana Shores Golf Club", path: "/courses/vietnam/hoiana-shores/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />

 

</main>
 );
}
