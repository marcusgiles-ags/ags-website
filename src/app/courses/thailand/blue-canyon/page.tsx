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
 title: { absolute: "Blue Canyon Country Club | Phuket" },
 description: "Play Blue Canyon Country Club Phuket — legendary for dramatic finishes over water-filled canyons and ranked among Asia's finest. Book with AGS.",
 keywords: ["Blue Canyon Country Club Phuket", "Phuket Golf Course", "Canyon Golf Thailand", "Thailand Golf Tours", "Blue Canyon Golf"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/thailand/blue-canyon/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Blue Canyon Country Club | Phuket" },
        description: "Play Blue Canyon Country Club Phuket — legendary for dramatic finishes over water-filled canyons and ranked among Asia's finest. Book with AGS.",
        url: "https://www.asiagolfspecialists.com/courses/thailand/blue-canyon/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/thailand/blue-canyon/blue-canyon-country-club-phuket-thailand-1.webp",
            width: 1200,
            height: 630,
            alt: "Blue Canyon Country Club Phuket | Dramatic Water Canyon Golf Thailand — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Blue Canyon Country Club | Phuket" },
        description: "Play Blue Canyon Country Club Phuket — legendary for dramatic finishes over water-filled canyons and ranked among Asia's finest. Book with AGS.",
        images: ["https://www.asiagolfspecialists.com/images/courses/thailand/blue-canyon/blue-canyon-country-club-phuket-thailand-1.webp"],
    },
};

export default function BlueCanyon() {
 const images = [
 { src: "/images/courses/thailand/blue-canyon/blue-canyon-country-club-phuket-thailand-1.webp", alt: "Blue Canyon Country Club Phuket Thailand Aerial Canyon Water", caption: "Phuket Thailand Aerial Canyon Water" },
 { src: "/images/courses/thailand/blue-canyon/blue-canyon-country-club-dramatic-finish-2.webp", alt: "Blue Canyon Country Club Phuket Thailand Dramatic Water Finish", caption: "Phuket Thailand Dramatic Water Finish" },
 { src: "/images/courses/thailand/blue-canyon/blue-canyon-country-club-canyon-course-3.webp", alt: "Blue Canyon Country Club Phuket Thailand Canyon Course Hole", caption: "Phuket Thailand Canyon Course Hole" },
 { src: "/images/courses/thailand/blue-canyon/blue-canyon-country-club-lake-hole-4.webp", alt: "Blue Canyon Phuket Thailand Lake Hole Championship Aerial", caption: "Blue Canyon Phuket Thailand Lake Hole Championship Aerial" },
 { src: "/images/courses/thailand/blue-canyon/blue-canyon-country-club-signature-5.webp", alt: "Blue Canyon Country Club Phuket Thailand Signature Hole Championship", caption: "Phuket Thailand Signature Hole Championship" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Phuket Legend</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Blue Canyon<br /><span className="text-gold">Country Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Phuket's most dramatic finishes — emerald water canyons frame every closing hole."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', 'Yoshikazu Kato'], ['Year Opened', '1991 (Canyon) / 1999 (Lakes)'], ['Location', 'Thalang, Phuket'], ['Courses', 'Canyon Course & Lakes Course'], ['Par', '72 (Canyon)'], ['Length', '7,165 Yards (Canyon)'], ['Setting', 'Water-filled canyons, jungle'], ['Tournament History', 'Johnnie Walker Classic (multiple)'], ['Top 100 Asia Ranking', <a href="https://www.top100golfcourses.com/golf-courses/asia/thailand" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">#6 in Asia (2026)</a>]
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Blue Canyon Country Club is one of the defining golf experiences in Phuket — a course whose canyon layouts, emerald water features, and dramatic finishing holes have made it a must-play destination for visiting golfers for three decades. Multiple Johnnie Walker Classic championships were held here, cementing its reputation as a genuine international stage.</p>
 <p>The Canyon Course is the headline offering: a routing through rubber plantation and over water-filled canyons that were created when the land was previously mined. The resulting visual drama is extraordinary, and the strategic demand is equally serious — water threatens approach shots on numerous occasions in the back nine, and the canyon-framed par threes are among the most photographed holes in Asia.</p>
 <p>AGS consistently recommends Blue Canyon as the mandatory first round on any Phuket golf trip, setting the tone for the island's premium golf offering and establishing an aesthetic benchmark that all subsequent rounds will be measured against.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Canyon</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
  {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/thailand/blue-canyon/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://www.bluecanyonphuket.com/"]}
                name="Blue Canyon Country Club (Canyon Course)"
                description="Phuket's most dramatic finishes — emerald water canyons frame every closing hole."
                url={"https://www.asiagolfspecialists.com/courses/thailand/blue-canyon/"}
                imageUrl={"/images/courses/thailand/blue-canyon/blue-canyon-country-club-phuket-thailand-1.webp"}
                addressLocality={"Phuket"}
                addressCountry={"TH"}
                numberOfHoles={36}
                courseLength={7165}
                par={72}
                designer="Yoshikazu Kato"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Thailand", item: "https://www.asiagolfspecialists.com/destinations/thailand/" },
                    { name: "Thailand Courses", item: "https://www.asiagolfspecialists.com/destinations/thailand/courses/" },
                    { name: "Blue Canyon Country Club (Canyon Course)", item: "https://www.asiagolfspecialists.com/courses/thailand/blue-canyon/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Blue Canyon Country Club (Canyon Course)</strong> is a premier Par 72 (Canyon) championship layout in Phuket, Thailand, crafted by <strong>Yoshikazu Kato</strong> (1991 (Canyon) / 1999 (Lakes)) and stretching to <strong>7,165 Yards (Canyon)</strong> across a water-filled canyons, jungle environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its canyon chasm 13th & 14th holes (Tiger) and yoshikazu kato tournament routing (Intense shotmaking exam).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Blue Canyon Country Club (Canyon Course) (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Thailand dry season. Our curatorial scorecard specifically notes its veteran caddie experience (Deep institutional memory), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Phuket golf tour by AGS, Blue Canyon Country Club (Canyon Course) provides a distinct architectural test by Yoshikazu Kato that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Blue Canyon Country Club (Canyon Course)"
    itemUrl="https://www.asiagolfspecialists.com/courses/thailand/blue-canyon/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/thailand/blue-canyon/blue-canyon-country-club-phuket-thailand-1.webp"
    addressLocality="Phuket"
    addressCountry="TH"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="Canyon & Lakes Championship Legend • Phuket"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Canyon Chasm 13th & 14th Holes",
            score: 9.9,
            highlight: "Tiger's canyon carry hole"
      },
      {
            label: "Yoshikazu Kato Tournament Routing",
            score: 9.6,
            highlight: "Intense shotmaking exam"
      },
      {
            label: "Veteran Caddie Experience",
            score: 9.5,
            highlight: "Deep institutional memory"
      },
      {
            label: "Iconic Phuket Golf History",
            score: 9.7,
            highlight: "Triple Johnnie Walker host"
      }
]}
    verdict="Phuket's historic championship proving ground. Host to the Johnnie Walker Classic, the Canyon Course features Tiger Woods' famous drive across the canyon on hole 13 and tests mental fortitude across deep chasms."
  />


            <CourseFAQSection
                courseName="Blue Canyon Country Club (Canyon Course)"
                faqs={[
          {
                    "q": "What are the key course specifications for Blue Canyon Country Club (Canyon Course)?",
                    "a": "Blue Canyon Country Club (Canyon Course) in Phuket, Thailand is a Par 72 (Canyon) championship layout designed by Yoshikazu Kato (opened 1991 (Canyon) / 1999 (Lakes)), measuring 7,165 Yards (Canyon) within a water-filled canyons, jungle setting. It is particularly noted for canyon chasm 13th & 14th holes (Tiger)."
          },
          {
                    "q": "How do I secure tee times and caddies at Blue Canyon Country Club (Canyon Course)?",
                    "a": "Blue Canyon Country Club (Canyon Course) operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (veteran caddie experience (Deep institutional memory)), and private VIP transfers from your Phuket hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Blue Canyon Country Club (Canyon Course)?",
                    "a": "Our field inspection highlights Blue Canyon Country Club (Canyon Course)'s yoshikazu kato tournament routing (Intense shotmaking exam) alongside canyon chasm 13th & 14th holes (Tiger). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Blue Canyon Country Club (Canyon Course)?",
                    "a": "November through April is the ideal season for Blue Canyon Country Club Phuket."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/thailand/blue-canyon/" venueName="Blue Canyon Country Club (Canyon Course)" venueType="course" />
            <CourseNavigation
                prev={{ title: "Black Mountain Golf Club Hua Hin", path: "/courses/thailand/black-mountain/" }}
                next={{ title: "Cascata Golf Club", path: "/courses/thailand/cascata/" }}
                country="Thailand"
                countryLink="/destinations/thailand/courses/"
            />
 

</main>
 );
}
