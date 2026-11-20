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
 title: { absolute: "Sky Lake Golf Club Sky Course | Hanoi Championship Golf" },
 description: "Experience Sky Lake Resort's Sky Course Hanoi, a championship 18-hole layout with dramatic elevation. Book your Vietnam/Thailand Golf Tour!",
 keywords: ["Sky Lake Golf Club Sky Course", "Vietnam Championship Golf", "Exclusive Golf Vietnam", "Hanoi Golf", "Vietnam Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/sky-lake-sky/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Sky Lake Golf Club Sky Course | Hanoi Championship Golf" },
        description: "Experience Sky Lake Resort's Sky Course Hanoi, a championship 18-hole layout with dramatic elevation. Book your Vietnam/Thailand Golf Tour!",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/sky-lake-sky/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/sky-lake-sky/sky-lake-sky-course-vietnam-1.webp",
            width: 1200,
            height: 630,
            alt: "Sky Lake Golf Club Sky Course | Vietnam Championship Exclusive — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Sky Lake Golf Club Sky Course | Hanoi Championship Golf" },
        description: "Experience Sky Lake Resort's Sky Course Hanoi, a championship 18-hole layout with dramatic elevation. Book your Vietnam/Thailand Golf Tour!",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/sky-lake-sky/sky-lake-sky-course-vietnam-1.webp"],
    },
};

export default function SkyLakeSky() {
 const images = [
 { src: "/images/courses/vietnam/sky-lake-sky/sky-lake-sky-course-vietnam-1.webp", alt: "Sky Lake Golf Club Sky Course Vietnam Aerial Championship", caption: "Club Sky Course Vietnam Aerial Championship" },
 { src: "/images/courses/vietnam/sky-lake-sky/sky-lake-sky-course-championship-layout-2.webp", alt: "Sky Lake Sky Course Championship Layout Vietnam Hole", caption: "Sky Lake Sky Course Championship Layout Vietnam Hole" },
 { src: "/images/courses/vietnam/sky-lake-sky/sky-lake-sky-course-members-exclusive-3.webp", alt: "Sky Lake Sky Course Members Exclusive Vietnam Golf", caption: "Sky Lake Sky Course Members Exclusive Vietnam Golf" },
 { src: "/images/courses/vietnam/sky-lake-sky/sky-lake-sky-course-fairway-vietnam-4.webp", alt: "Sky Lake Golf Club Sky Course Fairway Vietnam - Premium Southeast Asia Golf Tours 2026", caption: "Club Sky Course Fairway" },
 { src: "/images/courses/vietnam/sky-lake-sky/sky-lake-sky-course-greens-5.webp", alt: "Sky Lake Sky Course Championship Greens Vietnam - Premium Southeast Asia Golf Tours 2026", caption: "Sky Lake Sky Course Championship Greens" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Members Exclusive</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Sky Lake<br /><span className="text-gold">Sky Course</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"The pinnacle of Vietnamese championship golf — exclusively for those who earn it."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', 'Ahn Moon Hwan / Bori Golf Design'], ['Year Opened', '2014'], ['Par', '72'], ['Length', '7,128 Yards'], ['Access', 'Members & invited guests only'], ['Challenge Level', 'Low handicap required']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>The Sky Course at Sky Lake Resort Golf Club is the most exclusive layout in Northern Vietnam — a members-only, championship-grade test reserved for the country's most accomplished players. It operates strictly on invitation and member access, making it a genuine prestige experience for the travelling golfer.</p>
 <p>Designed by Korean architect Ahn Moon Hwan (Bori Golf Design), the Sky Course plays 7,128 yards from the Blue Tees and features demanding doglegs, deep bunkering complexes, and undulating greens that reward strategic course management.</p>
 <p>AGS maintains specialist access arrangements for qualified visiting guest players. If the challenge and exclusivity of Sky Lake's members course appeals to you, speak to one of our specialists to discuss access and itinerary options.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Exclusivity</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/vietnam/sky-lake-sky/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://skylakegolf.com/"]}
                name="Sky Lake Golf Club (Sky Course)"
                description="The pinnacle of Vietnamese championship golf — exclusively for those who earn it."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/sky-lake-sky/"}
                imageUrl={"/images/courses/vietnam/sky-lake-sky/sky-lake-sky-course-vietnam-1.webp"}
                addressLocality={"Hanoi"}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={7128}
                par={72}
                designer="Ahn Moon Hwan / Bori Golf Design"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Sky Lake Golf Club (Sky Course)", item: "https://www.asiagolfspecialists.com/courses/vietnam/sky-lake-sky/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Sky Lake Golf Club (Sky Course)</strong> is a premier Par 72 championship layout in Hanoi, Vietnam, crafted by <strong>Ahn Moon Hwan / Bori Golf Design</strong> (2014) and stretching to <strong>7,128 Yards</strong> across a championship layout environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its sweeping valley & karst vistas (Elevation changes with panoramic views) and generous landing corridors (Playable for all handicaps).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Sky Lake Golf Club (Sky Course) (Members & invited guests only) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie distance calculations (Excellent slope club selection), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Hanoi golf tour by AGS, Sky Lake Golf Club (Sky Course) provides a distinct architectural test by Ahn Moon Hwan / Bori Golf Design that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Sky Lake Golf Club (Sky Course)"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/sky-lake-sky/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/sky-lake-sky/sky-lake-sky-course-vietnam-1.webp"
    addressLocality="Hanoi"
    addressCountry="VN"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Scenic Mountain Parkland • Hanoi"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Sweeping Valley & Karst Vistas",
            score: 9.7,
            highlight: "Elevation changes with panoramic views"
      },
      {
            label: "Generous Landing Corridors",
            score: 9.4,
            highlight: "Playable for all handicaps"
      },
      {
            label: "Caddie Distance Calculations",
            score: 9.4,
            highlight: "Excellent slope club selection"
      },
      {
            label: "Resort Clubhouse Facilities",
            score: 9.5,
            highlight: "Full spa and fine dining"
      }
]}
    verdict="The counterpart to the brutal Lake layout, the Sky Course is a scenic, open parkland journey. Sweeping elevation changes and broad fairways framed by indigenous forest create an exhilarating round."
  />


            <CourseFAQSection
                courseName="Sky Lake Golf Club (Sky Course)"
                faqs={[
          {
                    "q": "What are the key course specifications for Sky Lake Golf Club (Sky Course)?",
                    "a": "Sky Lake Golf Club (Sky Course) in Hanoi, Vietnam is a Par 72 championship layout designed by Ahn Moon Hwan / Bori Golf Design (opened 2014), measuring 7,128 Yards within a championship layout setting. It is particularly noted for sweeping valley & karst vistas (Elevation changes with panoramic views)."
          },
          {
                    "q": "How do I secure tee times and caddies at Sky Lake Golf Club (Sky Course)?",
                    "a": "Sky Lake Golf Club (Sky Course) operates under members & invited guests only protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie distance calculations (Excellent slope club selection)), and private VIP transfers from your Hanoi hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Sky Lake Golf Club (Sky Course)?",
                    "a": "Our field inspection highlights Sky Lake Golf Club (Sky Course)'s generous landing corridors (Playable for all handicaps) alongside sweeping valley & karst vistas (Elevation changes with panoramic views). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Sky Lake Golf Club (Sky Course)?",
                    "a": "October through April is the recommended season for Sky Lake's Sky Course."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/sky-lake-sky/" venueName="Sky Lake Golf Club (Sky Course)" venueType="course" />
            <CourseNavigation
                prev={{ title: "Sky Lake Golf Club Lake Course", path: "/courses/vietnam/sky-lake-lake/" }}
                next={{ title: "Taekwang Jeongsan Country Club", path: "/courses/vietnam/taekwang-jeongsan/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
 );
}
