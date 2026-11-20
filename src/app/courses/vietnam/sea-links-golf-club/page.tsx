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
 title: { absolute: "Sea Links Golf Club | Vietnam's Most Challenging Links" },
 description: "Experience Sea Links Golf Club in Phan Thiet, offering 18 holes of challenging links-style golf with panoramic views of the East Sea.",
 keywords: ["Sea Links Golf Club", "Ronald Fream Vietnam", "Vietnam Golf Course", "Vietnam Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/sea-links-golf-club/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Sea Links Golf Club | Vietnam's Most Challenging Links" },
        description: "Experience Sea Links Golf Club in Phan Thiet, offering 18 holes of challenging links-style golf with panoramic views of the East Sea.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/sea-links-golf-club/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/sea-links-golf-club/sea-links-golf-hero.webp",
            width: 1200,
            height: 630,
            alt: "Sea Links Golf Club | Vietnam — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Sea Links Golf Club | Vietnam's Most Challenging Links" },
        description: "Experience Sea Links Golf Club in Phan Thiet, offering 18 holes of challenging links-style golf with panoramic views of the East Sea.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/sea-links-golf-club/sea-links-golf-hero.webp"],
    },
};

export default function CoursePage() {
 const images = [
  { src: "/images/courses/vietnam/sea-links-golf-club/sea-links-golf-hero.webp", alt: "Sea Links Golf Club Hero", caption: "Breathtaking elevation changes at Sea Links" },
  { src: "/images/courses/vietnam/sea-links-golf-club/sea-links-golf-coastal-view.webp", alt: "Sea Links Coastal View", caption: "Panoramic views of the East Sea" },
  { src: "/images/courses/vietnam/sea-links-golf-club/sea-links-golf-elevation-changes.webp", alt: "Sea Links Elevation Changes", caption: "Challenging elevation changes" },
  { src: "/images/courses/vietnam/sea-links-golf-club/sea-links-golf-clubhouse.webp", alt: "Sea Links Clubhouse", caption: "Luxurious clubhouse" },
  { src: "/images/courses/vietnam/sea-links-golf-club/sea-links-golf-aerial.webp", alt: "Sea Links Aerial", caption: "Links-style layout" },
  { src: "/images/courses/vietnam/sea-links-golf-club/sea-links-golf-mui-ne-golf.webp", alt: "Sea Links Mui Ne", caption: "Golf in Mui Ne" }
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
 AGS Course Heritage
 </div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Sea <br /><span className="text-gold">Links Golf Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">
 "Sea Links Golf Club is often described as the most challenging links-style course in Asia. Located in Phan Thiet (Mui Ne), it offers spectacular ocean views from every hole."
 </p>
 </div>
 </header>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Sea Links Golf Club"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/sea-links-golf-club/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/sea-links-golf-club/sea-links-golf-hero.webp"
    addressLocality="Mui Ne"
    addressCountry="VN"
    overallScore={4.6}
    maxScore={5.0}
    gradeBadge="Mui Ne Clifftop Challenge • Ronald Fream"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Fierce Clifftop Ocean Winds",
            score: 9.7,
            highlight: "One of Asia's windiest tests"
      },
      {
            label: "Undulating Duneland Fairways",
            score: 9.3,
            highlight: "Rolling topography 80m above sea"
      },
      {
            label: "Caddie Wind Reading & Local Grain",
            score: 9.3,
            highlight: "Vital for staying on greens"
      },
      {
            label: "Mui Ne Beach Resort Integration",
            score: 9.3,
            highlight: "Full villa & resort amenities"
      }
]}
    verdict="Recognized as one of the most challenging links layouts in Asia. Set 80 meters above Mui Ne Bay, fierce crosswinds and steep dune contours test every shot in your bag."
  />


 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
              <tbody>
                {[
                  ['Designer', 'Ronald Fream'],
                  ['Year Opened', '2008'],
                  ['Par', '72'],
                  ['Length', '7,617 Yards'],
                  ['Grass Type', 'Seashore Paspalum'],
                  ['Setting', 'Coastal Links'],
                  ['Top Ranking', 'Top Courses in South Vietnam']
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
 <p>Set against the stunning backdrop of the East Sea, Sea Links Golf Club is a masterpiece of golf course architecture. Designed by Ronald Fream, the course stretches over 7,600 yards and is renowned for its sheer difficulty, characterized by steep elevation changes, deep bunkers, and fast, undulating greens.

The coastal winds add another layer of complexity, demanding precision and strategic thinking from every tee. Despite its challenging nature, the spectacular views and world-class conditions make it an unforgettable experience.

The resort also features a 5-star hotel, luxury villas, and a massive clubhouse with panoramic views, making it a complete destination for golf travelers.</p>
 </div>
 </div>
 </div>
 </section>

 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Course</span></h2>
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
    pagePath="/courses/vietnam/sea-links-golf-club/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={[]}
                name="Sea Links Golf Club"
                description="Experience Sea Links Golf Club in Phan Thiet, offering 18 holes of challenging links-style golf with panoramic views of the East Sea."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/sea-links-golf-club/"}
                imageUrl={"/images/courses/vietnam/sea-links-golf-club/sea-links-golf-hero.webp"}
                addressLocality={""}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={7617}
                par={72}
                designer="Ronald Fream"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Sea Links Golf Club", item: "https://www.asiagolfspecialists.com/courses/vietnam/sea-links-golf-club/" },
                ]}
            />


 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Sea Links Golf Club</strong> is a premier Par 72 championship layout in Mui Ne, Vietnam, crafted by <strong>Ronald Fream</strong> (2008) and stretching to <strong>7,617 Yards</strong> across a coastal links environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its fierce clifftop ocean winds (One of Asia) and undulating duneland fairways (Rolling topography 80m above sea).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Sea Links Golf Club (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie wind reading & local grain (Vital for staying on greens), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Mui Ne golf tour by AGS, Sea Links Golf Club provides a distinct architectural test by Ronald Fream that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

            <CourseFAQSection
                courseName="Sea Links Golf Club"
                faqs={[
          {
                    "q": "What are the key course specifications for Sea Links Golf Club?",
                    "a": "Sea Links Golf Club in Mui Ne, Vietnam is a Par 72 championship layout designed by Ronald Fream (opened 2008), measuring 7,617 Yards within a coastal links setting. It is particularly noted for fierce clifftop ocean winds (One of Asia)."
          },
          {
                    "q": "How do I secure tee times and caddies at Sea Links Golf Club?",
                    "a": "Sea Links Golf Club operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie wind reading & local grain (Vital for staying on greens)), and private VIP transfers from your Mui Ne hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Sea Links Golf Club?",
                    "a": "Our field inspection highlights Sea Links Golf Club's undulating duneland fairways (Rolling topography 80m above sea) alongside fierce clifftop ocean winds (One of Asia). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Sea Links Golf Club?",
                    "a": "Peak playing conditions at Sea Links Golf Club in Mui Ne typically run during the cooler, drier months from November through April, with early morning tee times recommended year-round."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/sea-links-golf-club/" venueName="Sea Links Golf Club" venueType="course" />
            <CourseNavigation
                prev={{ title: "Sapa Grand Golf Course", path: "/courses/vietnam/sapa-grand/" }}
                next={{ title: "Silk Path Dong Trieu Golf", path: "/courses/vietnam/silk-path-dong-trieu/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
 );
}
