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
 title: { absolute: "Sapa Grand Golf Course | High-Altitude Mountain Golf Vietnam" },
 description: "Sapa Grand Golf Club — Vietnam's highest-altitude golf course amid the dramatic rice terraces of the northern highlands near Sapa.",
 keywords: ["Sapa Grand Golf Course", "Sapa Golf Vietnam", "Mountain Golf Vietnam", "High Altitude Golf Vietnam", "Vietnam Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/sapa-grand/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Sapa Grand Golf Course | High-Altitude Mountain Golf Vietnam" },
        description: "Sapa Grand Golf Club — Vietnam's highest-altitude golf course amid the dramatic rice terraces of the northern highlands near Sapa.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/sapa-grand/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/sapa-grand/sapa-grand-golf-course-vietnam-1.webp",
            width: 1200,
            height: 630,
            alt: "Sapa Grand Golf Course | High-Altitude Mountain Golf Vietnam — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Sapa Grand Golf Course | High-Altitude Mountain Golf Vietnam" },
        description: "Sapa Grand Golf Club — Vietnam's highest-altitude golf course amid the dramatic rice terraces of the northern highlands near Sapa.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/sapa-grand/sapa-grand-golf-course-vietnam-1.webp"],
    },
};

export default function SapaGrand() {
 const images = [
 { src: "/images/courses/vietnam/sapa-grand/sapa-grand-golf-course-vietnam-1.webp", alt: "Sapa Grand Golf Course Vietnam Mountain Aerial Misty", caption: "Vietnam Mountain Aerial Misty" },
 { src: "/images/courses/vietnam/sapa-grand/sapa-grand-golf-course-highland-2.webp", alt: "Sapa Golf Course Vietnam High Altitude Mountain Valley", caption: "Sapa Golf Course Vietnam High Altitude Mountain Valley" },
 { src: "/images/courses/vietnam/sapa-grand/sapa-grand-golf-course-elevation-3.webp", alt: "Sapa Grand Golf Vietnam Dramatic Elevation Views - Premium Southeast Asia Golf Tours 2026", caption: "Vietnam Dramatic Elevation Views" },
 { src: "/images/courses/vietnam/sapa-grand/sapa-grand-golf-course-fairway-4.webp", alt: "Sapa Golf Course Vietnam Fairway Mountain Terrace - Premium Southeast Asia Golf Tours 2026", caption: "Sapa Golf Course Vietnam Fairway Mountain Terrace" },
 { src: "/images/courses/vietnam/sapa-grand/sapa-grand-golf-course-championship-5.webp", alt: "Sapa Grand Golf Vietnam Championship Hole Green - Premium Southeast Asia Golf Tours 2026", caption: "Vietnam Championship Hole Green" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Mountain Golf</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Sapa Grand<br /><span className="text-gold">Golf Course</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Vietnam's highest course — terrace rice paddies, mist-filled valleys, and cool mountain air."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', <a href="https://gngcd.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">Greg Norman</a>], ['Year Opened', '2023'], ['Location', 'Sapa, Lao Cai Province'], ['Altitude', '~1,500m above sea level'], ['Par', '71'], ['Length', '6,128 Yards (Blue Tees)'], ['Setting', 'Mountain valley, rice terraces'], ['Character', 'High-altitude, dramatic elevation'], ['Access', 'Sapa Town (direct)']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Sapa Grand Golf Course is Vietnam's most altitude-extreme golf experience — set in the hearts of one of Southeast Asia's most dramatic highland landscapes, where terraced rice paddies cascade down mountain slopes and mist rolls through valleys at 1,500 metres above sea level.</p>
 <p>The significant elevation changes throughout the layout create a strategic challenge unlike anything available in the lowland courses. Ball flight behaves differently at altitude, approach angles are made more extreme by the sloping terrain, and the cool mountain air provides a playing environment that feels entirely removed from Vietnam's tropical lowlands.</p>
 <p>Best incorporated into a multi-day Sapa experience combining golf with trekking and homestay cultural experiences in the Lao Cai highlands, the course appeals to adventurous discerning golfers seeking the most unique experience available in the country.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Highlands</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/vietnam/sapa-grand/"
  />
  </div>
  </section>
            <CourseSchemaBlock
                name="Sapa Grand Golf Course"
                description="Vietnam's highest course — terrace rice paddies, mist-filled valleys, and cool mountain air."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/sapa-grand/"}
                imageUrl={"/images/courses/vietnam/sapa-grand/sapa-grand-golf-course-vietnam-1.webp"}
                addressLocality={"Sapa"}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={6128}
                par={71}
                designer="IMG Design"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Sapa Grand Golf Course", item: "https://www.asiagolfspecialists.com/courses/vietnam/sapa-grand/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Sapa Grand Golf Course</strong> is a premier Par 71 championship layout in Sapa, Vietnam, crafted by <strong>IMG Design</strong> (2023) and stretching to <strong>6,128 Yards (Blue Tees)</strong> across a mountain valley, rice terraces environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its dramatic mountain terraces & cloud inversions (Play above mountain fog) and crisp alpine climate in tropical asia (Cool temperatures year-round).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Sapa Grand Golf Course (Sapa Town (direct)) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie steep slope adjustments (Calculates severe elevation changes), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Sapa golf tour by AGS, Sapa Grand Golf Course provides a distinct architectural test by IMG Design that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Sapa Grand Golf Course"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/sapa-grand/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/sapa-grand/sapa-grand-golf-course-vietnam-1.webp"
    addressLocality="Sapa"
    addressCountry="VN"
    overallScore={4.6}
    maxScore={5.0}
    gradeBadge="High-Altitude Cloudline Golf • Northern Border"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Dramatic Mountain Terraces & Cloud Inversions",
            score: 9.8,
            highlight: "Play above mountain fog"
      },
      {
            label: "Crisp Alpine Climate in Tropical Asia",
            score: 9.7,
            highlight: "Cool temperatures year-round"
      },
      {
            label: "Caddie Steep Slope Adjustments",
            score: 9.2,
            highlight: "Calculates severe elevation changes"
      },
      {
            label: "Mountain Resort Hospitality",
            score: 9.1,
            highlight: "Authentic highland warmth"
      }
]}
    verdict="Perched high in the Hoang Lien Son range near the roof of Indochina. Sapa Grand offers refreshing mountain air, steep elevation drops, and views across terraced valleys."
  />


            <CourseFAQSection
                courseName="Sapa Grand Golf Course"
                faqs={[
          {
                    "q": "What are the key course specifications for Sapa Grand Golf Course?",
                    "a": "Sapa Grand Golf Course in Sapa, Vietnam is a Par 71 championship layout designed by IMG Design (opened 2023), measuring 6,128 Yards (Blue Tees) within a mountain valley, rice terraces setting. It is particularly noted for dramatic mountain terraces & cloud inversions (Play above mountain fog)."
          },
          {
                    "q": "How do I secure tee times and caddies at Sapa Grand Golf Course?",
                    "a": "Sapa Grand Golf Course operates under sapa town (direct) protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie steep slope adjustments (Calculates severe elevation changes)), and private VIP transfers from your Sapa hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Sapa Grand Golf Course?",
                    "a": "Our field inspection highlights Sapa Grand Golf Course's crisp alpine climate in tropical asia (Cool temperatures year-round) alongside dramatic mountain terraces & cloud inversions (Play above mountain fog). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Sapa Grand Golf Course?",
                    "a": "April through October is ideal for Sapa Grand Golf Course given the high-altitude climate."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/sapa-grand/" venueName="Sapa Grand Golf Course" venueType="course" />
            <CourseNavigation
                prev={{ title: "Royal Long An Golf & Country Club", path: "/courses/vietnam/royal-long-an/" }}
                next={{ title: "Sea Links Golf Club", path: "/courses/vietnam/sea-links-golf-club/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
  );
}
