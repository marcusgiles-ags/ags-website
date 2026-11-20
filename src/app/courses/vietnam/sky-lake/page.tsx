import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
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
 title: "Sky Lake Resort & Golf Club ",
 description: "Experience Sky Lake Resort & Golf Club near Hanoi. Featuring 36 holes of dramatic championship golf carved into the rugged mountainsides. Book with AGS.",
 keywords: ["Sky Lake Resort", "Hanoi Golf Courses", "Sky Lake Lake Course", "Sky Lake Sky Course", "Vietnam Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/sky-lake/",
    },
    openGraph: {
        type: "website",
        title: "Sky Lake Resort & Golf Club ",
        description: "Experience Sky Lake Resort & Golf Club near Hanoi. Featuring 36 holes of dramatic championship golf carved into the rugged mountainsides. Book with AGS.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/sky-lake/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/sky-lake/sky-lake-lake-course-vietnam-1.webp",
            width: 1200,
            height: 630,
            alt: "Sky Lake Resort & Golf Club  — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Sky Lake Resort & Golf Club ",
        description: "Experience Sky Lake Resort & Golf Club near Hanoi. Featuring 36 holes of dramatic championship golf carved into the rugged mountainsides. Book with AGS.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/sky-lake/sky-lake-lake-course-vietnam-1.webp"],
    },
};

export default function SkyLake() {
 const images = [
 { src: "/images/courses/vietnam/sky-lake/sky-lake-lake-course-vietnam-1.webp", alt: "Sky Lake Resort Golf Club Aerial", caption: "Sky Lake Resort & Golf Club Panorama" },
 { src: "/images/courses/vietnam/sky-lake/sky-lake-lake-course-limestone-karst-2.webp", alt: "Sky Lake Lake Course Water Hazard", caption: "The Dramatic Lake Course" },
 { src: "/images/courses/vietnam/sky-lake/sky-lake-lake-course-public-layout-3.webp", alt: "Sky Lake Sky Course Elevation", caption: "Elevation Changes on the Sky Course" },
 { src: "/images/courses/vietnam/sky-lake/sky-lake-lake-course-fairway-4.webp", alt: "Sky Lake Golf Resort Van Son Lake", caption: "Views of Van Son Lake" },
 { src: "/images/courses/vietnam/sky-lake/sky-lake-lake-course-scenic-green-5.webp", alt: "Sky Lake Clubhouse Hanoi", caption: "The Modern Clubhouse at Sky Lake" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
 AGS Course Heritage — Mountain Resort
 </div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Sky Lake Resort <br /><span className="text-gold">& Golf Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">
 "36 holes of dramatic championship golf carved into the rugged mountainsides."
 </p>
 </div>
 </header>

 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
              <tbody>
                {[
                  ['Designer', 'Ahn Moon Hwan'],
                  ['Year Opened', '2012 (Lake) / 2014 (Sky)'],
                  ['Par', '72 / 72'],
                  ['Length', '7,557 Yards / 7,265 Yards'],
                  ['Grass Type', 'Paspalum'],
                  ['Setting', 'Mountain Parkland'],
                ].map(([k, v], i) => (
                  <tr key={i}>
                    <th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>{k}</th>
                    <td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>
 Located roughly an hour southwest of Hanoi, Sky Lake Resort & Golf Club is a massive 36-hole complex featuring dramatic topography, pristine conditions, and sweeping panoramic views of the surrounding Van Son Lake and limestone mountains.
 </p>
 <p>
 The resort is divided into two distinct 18-hole layouts. The Lake Course, stretching to a formidable 7,557 yards from the tips, is a rigorous championship test that weaves through the dramatic mountain valley and brings the lake into play on numerous holes. It was voted Vietnam's Most Challenging Golf Course in 2012/2013.
 </p>
 <p>
 The Sky Course, while slightly shorter, is no less dramatic. It offers immense elevation changes, wide fairways, and spectacular elevated tee boxes that provide some of the best vistas in Vietnamese golf. Together, they form a unified resort experience that is a must-play for any golfer visiting the capital.
 </p>
 <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
    <Link href="/courses/vietnam/sky-lake-lake/" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', textDecoration: 'none', display: 'inline-block' }}>View Lake Course</Link>
    <Link href="/courses/vietnam/sky-lake-sky/" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', textDecoration: 'none', display: 'inline-block' }}>View Sky Course</Link>
 </div>
 </div>
 </div>
 </div>
 </section>

 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience <span className="text-gold">Sky Lake</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (
 <div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', transition: 'transform 0.3s ease', display: 'block' }}>
 <Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
 <div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>
 {(img as any).caption || `Image ${i + 1}`}
 </div>
 </div>
 ))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/vietnam/sky-lake/"
  />
  </div>
  </section>
            <CourseSchemaBlock
                name="Sky Lake Resort & Golf Club"
                description="Experience Sky Lake Resort & Golf Club near Hanoi. Featuring 36 holes of dramatic championship golf carved into the rugged mountainsides. Book with AGS."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/sky-lake/"}
                imageUrl={"/images/courses/vietnam/sky-lake/sky-lake-lake-course-vietnam-1.webp"}
                addressLocality={"Hanoi"}
                addressCountry={"VN"}
                numberOfHoles={36}
                courseLength={6987}
                par={72}
                designer="Ahn Moon Hwan"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Sky Lake Resort & Golf Club", item: "https://www.asiagolfspecialists.com/courses/vietnam/sky-lake/" },
                ]}
            />


            
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Sky Lake Resort & Golf Club</strong> is a premier Par 72 / 72 championship layout in Hanoi, Vietnam, crafted by <strong>Ahn Moon Hwan</strong> (2012 (Lake) / 2014 (Sky)) and stretching to <strong>7,557 Yards / 7,265 Yards</strong> across a mountain parkland environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its dramatic karst mountain backdrops (Surrounded by Van Son Lake) and elevation changes & water carries (Severe mountain drop-offs).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Sky Lake Resort & Golf Club (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie mountain line reading (Expertise on downhill slopes), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Hanoi golf tour by AGS, Sky Lake Resort & Golf Club provides a distinct architectural test by Ahn Moon Hwan that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Sky Lake Resort & Golf Club"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/sky-lake/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/sky-lake/sky-lake-lake-course-vietnam-1.webp"
    addressLocality="Hanoi"
    addressCountry="VN"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Limestone Karst Championship • Hanoi"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Dramatic Karst Mountain Backdrops",
            score: 9.7,
            highlight: "Surrounded by Van Son Lake"
      },
      {
            label: "Elevation Changes & Water Carries",
            score: 9.6,
            highlight: "Severe mountain drop-offs"
      },
      {
            label: "Caddie Mountain Line Reading",
            score: 9.4,
            highlight: "Expertise on downhill slopes"
      },
      {
            label: "Private Club Exclusivity & Hospitality",
            score: 9.5,
            highlight: "Premier Hanoi executive venue"
      }
]}
    verdict="Set among dramatic limestone karsts, Sky Lake is one of Northern Vietnam's most scenic and demanding mountain courses. The Lake Course is an unrelenting test, while the Sky Course offers sweeping panoramas."
  />


            
 <VenueItineraries venueHref="/courses/vietnam/sky-lake/" venueName="Sky Lake Resort & Golf Club" venueType="course" />

 <CourseFAQSection
                courseName="Sky Lake Resort & Golf Club"
                faqs={[
          {
                    "q": "What are the key course specifications for Sky Lake Resort & Golf Club?",
                    "a": "Sky Lake Resort & Golf Club in Hanoi, Vietnam is a Par 72 / 72 championship layout designed by Ahn Moon Hwan (opened 2012 (Lake) / 2014 (Sky)), measuring 7,557 Yards / 7,265 Yards within a mountain parkland setting. It is particularly noted for dramatic karst mountain backdrops (Surrounded by Van Son Lake)."
          },
          {
                    "q": "How do I secure tee times and caddies at Sky Lake Resort & Golf Club?",
                    "a": "Sky Lake Resort & Golf Club operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie mountain line reading (Expertise on downhill slopes)), and private VIP transfers from your Hanoi hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Sky Lake Resort & Golf Club?",
                    "a": "Our field inspection highlights Sky Lake Resort & Golf Club's elevation changes & water carries (Severe mountain drop-offs) alongside dramatic karst mountain backdrops (Surrounded by Van Son Lake). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Sky Lake Resort & Golf Club?",
                    "a": "Peak playing conditions at Sky Lake Resort & Golf Club in Hanoi typically run during the cooler, drier months from November through April, with early morning tee times recommended year-round."
          }
]}
            />
            <CourseNavigation
                prev={{ title: "Silk Path Dong Trieu Golf", path: "/courses/vietnam/silk-path-dong-trieu/" }}
                next={{ title: "Sky Lake Golf Club Lake Course", path: "/courses/vietnam/sky-lake-lake/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
 );
}
