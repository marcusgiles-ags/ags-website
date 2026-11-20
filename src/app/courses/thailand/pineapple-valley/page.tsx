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
 title: { absolute: "Pineapple Valley Golf Club | Hua Hin" },
 description: "Play Pineapple Valley Golf Club Hua Hin — world-class facility winding through former pineapple plantations with championship conditioning. Book with AGS.",
 keywords: ["Pineapple Valley Golf Club Hua Hin", "Hua Hin Golf Course", "Pineapple Plantation Golf Thailand", "Thailand Golf Tours", "Hua Hin Championship Golf"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/thailand/pineapple-valley/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Pineapple Valley Golf Club | Hua Hin" },
        description: "Play Pineapple Valley Golf Club Hua Hin — world-class facility winding through former pineapple plantations with championship conditioning. Book with AGS.",
        url: "https://www.asiagolfspecialists.com/courses/thailand/pineapple-valley/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/thailand/pineapple-valley/pineapple-valley-golf-club-hua-hin-thailand-1.webp",
            width: 1200,
            height: 630,
            alt: "Pineapple Valley Golf Club Hua Hin | Former Plantation Championship Golf — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Pineapple Valley Golf Club | Hua Hin" },
        description: "Play Pineapple Valley Golf Club Hua Hin — world-class facility winding through former pineapple plantations with championship conditioning. Book with AGS.",
        images: ["https://www.asiagolfspecialists.com/images/courses/thailand/pineapple-valley/pineapple-valley-golf-club-hua-hin-thailand-1.webp"],
    },
};

export default function PineappleValley() {
 const images = [
 { src: "/images/courses/thailand/pineapple-valley/pineapple-valley-golf-club-hua-hin-thailand-1.webp", alt: "Pineapple Valley Golf Club Hua Hin Thailand Pineapple Plantation Aerial", caption: "Hua Hin Thailand Pineapple Plantation Aerial" },
 { src: "/images/courses/thailand/pineapple-valley/pineapple-valley-golf-club-plantation-2.webp", alt: "Pineapple Valley Golf Hua Hin Thailand Former Pineapple Plantation Hole", caption: "Pineapple Valley Golf Hua Hin Thailand Former Pineapple Plantation Hole" },
 { src: "/images/courses/thailand/pineapple-valley/pineapple-valley-golf-club-championship-3.webp", alt: "Pineapple Valley Golf Club Hua Hin Thailand Championship Layout", caption: "Hua Hin Thailand Championship Layout" },
 { src: "/images/courses/thailand/pineapple-valley/pineapple-valley-golf-club-fairway-4.webp", alt: "Pineapple Valley Golf Thailand World Class Fairway Hua Hin", caption: "Pineapple Valley Golf Thailand World Class Fairway" },
 { src: "/images/courses/thailand/pineapple-valley/pineapple-valley-golf-club-green-5.webp", alt: "Pineapple Valley Golf Club Hua Hin Thailand Championship Green", caption: "Hua Hin Thailand Championship Green" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Hua Hin World Class</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Pineapple Valley<br /><span className="text-gold">Golf Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"World-class Hua Hin golf through the historic heart of a former pineapple estate."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', 'Pirapon Namatra / Golf East'], ['Year Opened', '2009'], ['Location', 'Hua Hin, Prachuap Khiri Khan'], ['Par', '72'], ['Length', '6,774 Yards (Blue Tees)'], ['Setting', 'Former pineapple plantation, gently rolling'], ['Character', 'Lush, well-conditioned, resort-friendly'], ['Holes', '18'], ['Facilities', 'World-class clubhouse and practice facilities'], ['Top 100 Asia Ranking', <a href="https://www.top100golfcourses.com/golf-courses/asia/thailand" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">#5 in Asia (2026)</a>]
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Pineapple Valley Golf Club is one of Hua Hin's most consistently enjoyable championship experiences — a course built on former pineapple plantation land that retains the gentle rolling terrain and tropical vegetation of its agricultural past while providing immaculate championship-level conditioning and facilities throughout.</p>
 <p>The layout is refreshingly honest in its design: no artificial drama, no manufactured features — just well-crafted holes that reward thoughtful play, excellent greens, and the kind of lush, green-on-green visual palette that makes tropical golf feel genuinely special. The transitions between plantation-remnant rough and meticulously maintained fairways are aesthetically striking.</p>
 <p>For Hua Hin itineraries, AGS regularly combines Pineapple Valley with Black Mountain to offer clients the full spectrum of what the destination provides: the dramatic mountain granite character of Black Mountain against the flowing, plantation-green beauty of Pineapple Valley.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Plantation</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/thailand/pineapple-valley/"
  />
  </div>
  </section>
            <CourseSchemaBlock
                name="Pineapple Valley Golf Club"
                description="World-class Hua Hin golf through the historic heart of a former pineapple estate."
                url={"https://www.asiagolfspecialists.com/courses/thailand/pineapple-valley/"}
                imageUrl={"/images/courses/thailand/pineapple-valley/pineapple-valley-golf-club-hua-hin-thailand-1.webp"}
                addressLocality={"Hua Hin"}
                addressCountry={"TH"}
                numberOfHoles={18}
                courseLength={6774}
                par={72}
                designer="Pirapon Namatra / Golf East"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Thailand", item: "https://www.asiagolfspecialists.com/destinations/thailand/" },
                    { name: "Thailand Courses", item: "https://www.asiagolfspecialists.com/destinations/thailand/courses/" },
                    { name: "Pineapple Valley Golf Club", item: "https://www.asiagolfspecialists.com/courses/thailand/pineapple-valley/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Pineapple Valley Golf Club</strong> is a premier Par 72 championship layout in Hua Hin, Thailand, crafted by <strong>Pirapon Namatra / Golf East</strong> (2009) and stretching to <strong>6,774 Yards (Blue Tees)</strong> across a former pineapple plantation, gently rolling environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its natural foothill contours & pineapple fields (Organic natural routing) and elevated tee vistas toward mountain range (Panoramic Burmese border vistas).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Pineapple Valley Golf Club (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Thailand dry season. Our curatorial scorecard specifically notes its caddie green slopes expertise (Reads subtle mountain grain), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Hua Hin golf tour by AGS, Pineapple Valley Golf Club provides a distinct architectural test by Pirapon Namatra / Golf East that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Pineapple Valley Golf Club"
    itemUrl="https://www.asiagolfspecialists.com/courses/thailand/pineapple-valley/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/thailand/pineapple-valley/pineapple-valley-golf-club-hua-hin-thailand-1.webp"
    addressLocality="Hua Hin"
    addressCountry="TH"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="Pirapon Namatra Pineapple Foothills • Hua Hin"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Natural Foothill Contours & Pineapple Fields",
            score: 9.8,
            highlight: "Organic natural routing"
      },
      {
            label: "Elevated Tee Vistas Toward Mountain Range",
            score: 9.7,
            highlight: "Panoramic Burmese border vistas"
      },
      {
            label: "Caddie Green Slopes Expertise",
            score: 9.6,
            highlight: "Reads subtle mountain grain"
      },
      {
            label: "Multi-Award Winning Modern Clubhouse",
            score: 9.7,
            highlight: "Signature sunset terrace"
      }
]}
    verdict="Formerly Banyan Golf Club, this Pirapon Namatra masterpiece snakes through natural pineapple valleys with elevated tee boxes offering sunset views of the Burmese mountains. Flawless 5-star service."
  />


            
 <VenueItineraries venueHref="/courses/thailand/pineapple-valley/" venueName="Pineapple Valley Golf Club" venueType="course" />

 <CourseFAQSection
                courseName="Pineapple Valley Golf Club"
                faqs={[
          {
                    "q": "What are the key course specifications for Pineapple Valley Golf Club?",
                    "a": "Pineapple Valley Golf Club in Hua Hin, Thailand is a Par 72 championship layout designed by Pirapon Namatra / Golf East (opened 2009), measuring 6,774 Yards (Blue Tees) within a former pineapple plantation, gently rolling setting. It is particularly noted for natural foothill contours & pineapple fields (Organic natural routing)."
          },
          {
                    "q": "How do I secure tee times and caddies at Pineapple Valley Golf Club?",
                    "a": "Pineapple Valley Golf Club operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie green slopes expertise (Reads subtle mountain grain)), and private VIP transfers from your Hua Hin hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Pineapple Valley Golf Club?",
                    "a": "Our field inspection highlights Pineapple Valley Golf Club's elevated tee vistas toward mountain range (Panoramic Burmese border vistas) alongside natural foothill contours & pineapple fields (Organic natural routing). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Pineapple Valley Golf Club?",
                    "a": "November through April is the recommended season for Pineapple Valley Golf Club Hua Hin."
          }
]}
            />
            <CourseNavigation
                prev={{ title: "Nikanti Golf Club Bangkok", path: "/courses/thailand/nikanti/" }}
                next={{ title: "Red Mountain Golf Club Phuket", path: "/courses/thailand/red-mountain/" }}
                country="Thailand"
                countryLink="/destinations/thailand/courses/"
            />
 

</main>
 );
}
