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
 title: { absolute: "Sky Lake Golf Club Lake Course | Limestone Karst Golf Hanoi" },
 description: "Golf Vietnam & Thailand: Play Sky Lake Lake Course, Hanoi. Stunning limestone karsts, open to public. Book your tour with AGS.",
 keywords: ["Sky Lake Golf Club Lake Course", "Limestone Karst Golf Vietnam", "Hanoi Public Golf Course", "Vietnam Golf Tours", "Scenic Golf Vietnam"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/sky-lake-lake/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Sky Lake Golf Club Lake Course | Limestone Karst Golf Hanoi" },
        description: "Golf Vietnam & Thailand: Play Sky Lake Lake Course, Hanoi. Stunning limestone karsts, open to public. Book your tour with AGS.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/sky-lake-lake/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/sky-lake-lake/sky-lake-lake-course-vietnam-1.webp",
            width: 1200,
            height: 630,
            alt: "Sky Lake Golf Club Lake Course | Limestone Karst Golf Hanoi — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Sky Lake Golf Club Lake Course | Limestone Karst Golf Hanoi" },
        description: "Golf Vietnam & Thailand: Play Sky Lake Lake Course, Hanoi. Stunning limestone karsts, open to public. Book your tour with AGS.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/sky-lake-lake/sky-lake-lake-course-vietnam-1.webp"],
    },
};

export default function SkyLakeLake() {
 const images = [
 { src: "/images/courses/vietnam/sky-lake-lake/sky-lake-lake-course-vietnam-1.webp", alt: "Sky Lake Golf Club Lake Course Vietnam Aerial Limestone Karst", caption: "Club Lake Course Vietnam Aerial Limestone Karst" },
 { src: "/images/courses/vietnam/sky-lake-lake/sky-lake-lake-course-limestone-karst-2.webp", alt: "Sky Lake Lake Course Limestone Karst Mountain View Vietnam", caption: "Sky Lake Lake Course Limestone Karst Mountain View" },
 { src: "/images/courses/vietnam/sky-lake-lake/sky-lake-lake-course-public-layout-3.webp", alt: "Sky Lake Lake Course Public Layout Scenic Vietnam Hole", caption: "Sky Lake Lake Course Public Layout Scenic Vietnam Hole" },
 { src: "/images/courses/vietnam/sky-lake-lake/sky-lake-lake-course-fairway-4.webp", alt: "Sky Lake Golf Club Lake Course Fairway Hanoi Vietnam", caption: "Club Lake Course Fairway" },
 { src: "/images/courses/vietnam/sky-lake-lake/sky-lake-lake-course-scenic-green-5.webp", alt: "Sky Lake Lake Course Beautiful Green Vietnam Championship", caption: "Sky Lake Lake Course Beautiful Green Vietnam Championship" },
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
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Sky Lake<br /><span className="text-gold">Lake Course</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Limestone karsts as your gallery — golf's most dramatic natural amphitheatre."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', 'Ahn Moon Hwan / Bori Golf Design'], ['Year Opened', '2012'], ['Par', '72'], ['Length', '6,987 Yards'], ['Access', 'Open to the public'], ['Setting', 'Limestone karst landscape']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>The Lake Course at Sky Lake Resort Golf Club is the public-facing companion to the exclusive Sky Course, and it is no consolation prize. Framed by dramatic limestone karst formations that rise from the landscape like natural amphitheatre walls, the setting is among the most visually spectacular of any course in Northern Vietnam.</p>
 <p>Designed by Korean architect Ahn Moon Hwan (Bori Golf Design), the Lake Course plays 6,987 yards from the Blue Tees, with generous fairways giving way to well-guarded paspalum green complexes and natural lake hazards that demand precision.</p>
 <p>Open to all players, the Lake Course is an excellent option for golfers of any ability visiting Hanoi, offering world-class scenery paired with a fair yet engaging test of golf. A firm favourite with AGS groups and returning international golf groups who have done the Hanoi circuit before.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Karst Landscape</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/vietnam/sky-lake-lake/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://skylakegolf.com/"]}
                name="Sky Lake Golf Club (Lake Course)"
                description="Limestone karsts as your gallery — golf's most dramatic natural amphitheatre."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/sky-lake-lake/"}
                imageUrl={"/images/courses/vietnam/sky-lake-lake/sky-lake-lake-course-vietnam-1.webp"}
                addressLocality={"Hanoi"}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={6987}
                par={72}
                designer="Ahn Moon Hwan / Bori Golf Design"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Sky Lake Golf Club (Lake Course)", item: "https://www.asiagolfspecialists.com/courses/vietnam/sky-lake-lake/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Sky Lake Golf Club (Lake Course)</strong> is a premier Par 72 championship layout in Hanoi, Vietnam, crafted by <strong>Ahn Moon Hwan / Bori Golf Design</strong> (2012) and stretching to <strong>6,987 Yards</strong> across a limestone karst landscape environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its formidable length &amp; forced water carries (6,987 yards from Blue Tees) and tournament-grade fast paspalum greens (Stimp 10.5+ year-round).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Sky Lake Golf Club (Lake Course) (Open to the public) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie hazard avoidance &amp; pacing (Crucial for target golf), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Hanoi golf tour by AGS, Sky Lake Golf Club (Lake Course) provides a distinct architectural test by Ahn Moon Hwan / Bori Golf Design that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Sky Lake Golf Club (Lake Course)"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/sky-lake-lake/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/sky-lake-lake/sky-lake-lake-course-vietnam-1.webp"
    addressLocality="Hanoi"
    addressCountry="VN"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="Hanoi's Toughest Championship Test • IMG"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Formidable Length & Forced Water Carries",
            score: 9.8,
            highlight: "6,987 yards from Blue Tees"
      },
      {
            label: "Tournament-Grade Fast Paspalum Greens",
            score: 9.6,
            highlight: "Stimp 10.5+ year-round"
      },
      {
            label: "Caddie Hazard Avoidance & Pacing",
            score: 9.5,
            highlight: "Crucial for target golf"
      },
      {
            label: "Private Member Exclusivity",
            score: 9.5,
            highlight: "Strict priority access"
      }
]}
    verdict="The Lake Course is universally respected as one of the sternest championship tests in Vietnam. Stretching to 6,987 yards from the Blue Tees with water guarding nearly every target, it demands disciplined long-iron play and course management."
  />


            <CourseFAQSection
                courseName="Sky Lake Golf Club (Lake Course)"
                faqs={[
          {
                    "q": "What are the key course specifications for Sky Lake Golf Club (Lake Course)?",
                    "a": "Sky Lake Golf Club (Lake Course) in Hanoi, Vietnam is a Par 72 championship layout designed by Ahn Moon Hwan / Bori Golf Design (opened 2012), measuring 6,987 Yards from the Blue Tees within a limestone karst landscape setting."
          },
          {
                    "q": "How do I secure tee times and caddies at Sky Lake Golf Club (Lake Course)?",
                    "a": "Sky Lake Golf Club (Lake Course) operates under visitor tee-time allocation protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings, and luxury private touring vehicle transfers from your Hanoi hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Sky Lake Golf Club (Lake Course)?",
                    "a": "Our field inspection highlights Sky Lake Golf Club (Lake Course)'s tournament-grade fast paspalum greens (Stimp 10.5+ year-round) alongside formidable water carries across 6,987 yards from the Blue Tees. Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Sky Lake Golf Club (Lake Course)?",
                    "a": "October through April is the recommended season for Sky Lake's Lake Course."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/sky-lake-lake/" venueName="Sky Lake Golf Club (Lake Course)" venueType="course" />
            <CourseNavigation
                prev={{ title: "Sky Lake Resort & Golf Club", path: "/courses/vietnam/sky-lake/" }}
                next={{ title: "Sky Lake Golf Club Sky Course", path: "/courses/vietnam/sky-lake-sky/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
 );
}
