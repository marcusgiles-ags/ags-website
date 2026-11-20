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
 title: { absolute: "Silk Path Dong Trieu Golf | 27-Hole Parkland Vietnam" },
 description: "Play Silk Path Dong Trieu Golf — a sweeping 27-hole parkland facility blending hill-style and parkland golf in Northern Vietnam. Book with AGS.",
 keywords: ["Silk Path Dong Trieu Golf", "Dong Trieu Golf Vietnam", "27 Hole Golf Vietnam", "Parkland Golf Vietnam", "Northern Vietnam Golf"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/silk-path-dong-trieu/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Silk Path Dong Trieu Golf | 27-Hole Parkland Vietnam" },
        description: "Play Silk Path Dong Trieu Golf — a sweeping 27-hole parkland facility blending hill-style and parkland golf in Northern Vietnam. Book with AGS.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/silk-path-dong-trieu/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-golf-vietnam-1.webp",
            width: 1200,
            height: 630,
            alt: "Silk Path Dong Trieu Golf | 27-Hole Parkland Vietnam — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Silk Path Dong Trieu Golf | 27-Hole Parkland Vietnam" },
        description: "Play Silk Path Dong Trieu Golf — a sweeping 27-hole parkland facility blending hill-style and parkland golf in Northern Vietnam. Book with AGS.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-golf-vietnam-1.webp"],
    },
};

export default function SilkPathDongTrieu() {
 const images = [
 { src: "/images/courses/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-golf-vietnam-1.webp", alt: "Silk Path Dong Trieu Golf Vietnam Aerial 27 Hole - Premium Southeast Asia Golf Tours 2026", caption: "Silk Path Dong Trieu Golf Vietnam Aerial 27 Hole" },
 { src: "/images/courses/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-golf-parkland-2.webp", alt: "Dong Trieu Golf Vietnam Parkland Hole Fairway - Premium Southeast Asia Golf Tours 2026", caption: "Dong Trieu Golf Vietnam Parkland Hole Fairway" },
 { src: "/images/courses/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-golf-layout-3.webp", alt: "Silk Path Dong Trieu Golf Course Vietnam Layout - Premium Southeast Asia Golf Tours 2026", caption: "Silk Path Dong Trieu Golf Course Vietnam Layout" },
 { src: "/images/courses/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-golf-fairway-4.webp", alt: "Silk Path Golf Vietnam Championship Fairway Northern", caption: "Silk Path Golf Vietnam Championship Fairway" },
 { src: "/images/courses/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-golf-green-5.webp", alt: "Silk Path Dong Trieu Golf Vietnam Championship Green", caption: "Silk Path Dong Trieu Golf Vietnam Championship Green" },
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
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Silk Path<br /><span className="text-gold">Dong Trieu Golf</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"An expansive 27-hole canvas — parkland serenity meets hill-style challenge."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', <a href="https://nickfaldodesign.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">Sir Nick Faldo</a>], ['Year Opened', '2025'], ['Location', 'Dong Trieu, Quang Ninh Province'], ['Total Holes', '27 (three 9-hole loops)'], ['Style', 'Parkland / Hill-style blend'], ['Setting', 'Rolling hills, parkland corridors'], ['Grass Type', 'Zoysia / Bermuda Greens'], ['Managed by', 'Silk Path Group']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Silk Path Dong Trieu Golf is Northern Vietnam's most expansive golf facility — a 27-hole layout spread across rolling hills that blend parkland character with the natural topography of Quang Ninh Province. The three interchangeable nine-hole loops offer golfers significant variety without the repetition that can come with playing the same 18 holes again.</p>
 <p>The parkland corridors provide tree-lined definition and visual intimacy, while the hillside sections open up to broader views and more exposed, strategic play. The combination creates a highly varied round — or rounds — across any combination of nines the visiting golfer chooses.</p>
 <p>Located in the Ha Long Bay region, Silk Path Dong Trieu is an excellent pairing with FLC Ha Long Bay Golf Club for a two-day golf experience in one of Vietnam's most scenically spectacular provinces. AGS builds Ha Long / Quang Ninh itineraries combining both courses with bay cruises and overnight resort stays.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Parkland</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/vietnam/silk-path-dong-trieu/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://silkpathdongtrieu.com/"]}
                name="Silk Path Dong Trieu Golf"
                description="An expansive 27-hole canvas — parkland serenity meets hill-style challenge."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/silk-path-dong-trieu/"}
                imageUrl={"/images/courses/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-golf-vietnam-1.webp"}
                addressLocality={"Quang Ninh"}
                addressCountry={"VN"}
                numberOfHoles={27}
                courseLength={6858}
                par={72}
                designer="Sir Nick Faldo"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Silk Path Dong Trieu Golf", item: "https://www.asiagolfspecialists.com/courses/vietnam/silk-path-dong-trieu/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Silk Path Dong Trieu Golf</strong> is a premier Par 72 championship layout in Quang Ninh, Vietnam, crafted by <strong>Sir Nick Faldo</strong> (2025) and stretching to <strong>6,858 Yards (Blue Tees)</strong> across a rolling hills, parkland corridors environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its 27-hole strategic routing variety (Hill, Lake & Valley nines) and pristine fairway carpet conditioning (Top-tier grass maintenance).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Silk Path Dong Trieu Golf (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie professionalism & pacing (Exemplary 5-star standards), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Quang Ninh golf tour by AGS, Silk Path Dong Trieu Golf provides a distinct architectural test by Sir Nick Faldo that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Silk Path Dong Trieu Golf"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/silk-path-dong-trieu/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-golf-vietnam-1.webp"
    addressLocality="Quang Ninh"
    addressCountry="VN"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="27-Hole Parkland Oasis • Quang Ninh"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "27-Hole Strategic Routing Variety",
            score: 9.5,
            highlight: "Hill, Lake & Valley nines"
      },
      {
            label: "Pristine Fairway Carpet Conditioning",
            score: 9.5,
            highlight: "Top-tier grass maintenance"
      },
      {
            label: "Caddie Professionalism & Pacing",
            score: 9.4,
            highlight: "Exemplary 5-star standards"
      },
      {
            label: "Silk Path 5-Star Resort Clubhouse",
            score: 9.6,
            highlight: "Boutique luxury hotel styling"
      }
]}
    verdict="A brand-new 27-hole luxury golf oasis nestled in Quang Ninh province. Features rolling hills, crystal-clear water lakes, and the signature 5-star service of Silk Path hospitality."
  />


            <CourseFAQSection
                courseName="Silk Path Dong Trieu Golf"
                faqs={[
          {
                    "q": "What are the key course specifications for Silk Path Dong Trieu Golf?",
                    "a": "Silk Path Dong Trieu Golf in Quang Ninh, Vietnam is a Par 72 championship layout designed by Sir Nick Faldo (opened 2025), measuring 6,858 Yards (Blue Tees) within a rolling hills, parkland corridors setting. It is particularly noted for 27-hole strategic routing variety (Hill, Lake & Valley nines)."
          },
          {
                    "q": "How do I secure tee times and caddies at Silk Path Dong Trieu Golf?",
                    "a": "Silk Path Dong Trieu Golf operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie professionalism & pacing (Exemplary 5-star standards)), and private VIP transfers from your Quang Ninh hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Silk Path Dong Trieu Golf?",
                    "a": "Our field inspection highlights Silk Path Dong Trieu Golf's pristine fairway carpet conditioning (Top-tier grass maintenance) alongside 27-hole strategic routing variety (Hill, Lake & Valley nines). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Silk Path Dong Trieu Golf?",
                    "a": "October through April is the best season for Silk Path Dong Trieu Golf."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/silk-path-dong-trieu/" venueName="Silk Path Dong Trieu Golf" venueType="course" />
            <CourseNavigation
                prev={{ title: "Sea Links Golf Club", path: "/courses/vietnam/sea-links-golf-club/" }}
                next={{ title: "Sky Lake Resort & Golf Club", path: "/courses/vietnam/sky-lake/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
  );
}
