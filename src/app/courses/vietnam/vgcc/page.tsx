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
 title: "Vietnam Golf & Country Club ",
 description: "Play Vietnam Golf & Country Club, a tranquil oasis near Ho Chi Minh City. Book your Vietnam & Thailand golf tour with Asia Golf Specialists.",
 keywords: ["Vietnam Golf and Country Club", "VGCC", "Ho Chi Minh City Golf", "Vietnam Golf Tours", "Saigon Golf Courses"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/vgcc/",
    },
    openGraph: {
        type: "website",
        title: "Vietnam Golf & Country Club ",
        description: "Play Vietnam Golf & Country Club, a tranquil oasis near Ho Chi Minh City. Book your Vietnam & Thailand golf tour with Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/vgcc/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/vgcc/vgcc-1.webp",
            width: 1200,
            height: 630,
            alt: "Vietnam Golf & Country Club  — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Vietnam Golf & Country Club ",
        description: "Play Vietnam Golf & Country Club, a tranquil oasis near Ho Chi Minh City. Book your Vietnam & Thailand golf tour with Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/vgcc/vgcc-1.webp"],
    },
};

export default function VGCC() {
 const images = [
 { src: "/images/courses/vietnam/vgcc/vgcc-1.webp", alt: "Vietnam Golf and Country Club Aerial", caption: "Vietnam Golf & Country Club Aerial View" },
 { src: "/images/courses/vietnam/vgcc/vgcc-2.webp", alt: "VGCC West Course Fairway", caption: "West Course Championship Fairway" },
 { src: "/images/courses/vietnam/vgcc/vgcc-3.webp", alt: "Vietnam Golf Country Club Lake", caption: "Strategic Water Hazards at VGCC" },
 { src: "/images/courses/vietnam/vgcc/vgcc-4.webp", alt: "VGCC East Course Approach", caption: "Approach Shot on the East Course" },
 { src: "/images/courses/vietnam/vgcc/vgcc-5.webp", alt: "Vietnam Golf Country Club Clubhouse", caption: "The Classic Clubhouse at VGCC" },
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
 AGS Course Heritage — Classic Parkland
 </div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Vietnam Golf <br /><span className="text-gold">& Country Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">
 "An oasis of tranquility just outside the bustling city limits."
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
                  ['Designer', 'Chen King Shih (West) / Lee Trevino (East)'],
                  ['Year Opened', '1994 (West) / 1997 (East)'],
                  ['Par', '72 (West) / 72 (East)'],
                  ['Length', '7,106 Yards / 6,946 Yards'],
                  ['Grass Type', 'Bermuda'],
                  ['Setting', 'Parkland'],
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
 Vietnam Golf & Country Club (VGCC) is widely regarded as Vietnam’s premier golf and country club. Located just 20 kilometers from the center of Ho Chi Minh City, it offers an accessible escape into lush parkland surroundings.
 </p>
 <p>
 The club features two championship courses. The West Course, designed by Taiwanese architect Chen King Shih, opened in 1994 and is characterized by narrow tree-lined fairways and fast greens. The East Course, designed by six-time major champion Lee Trevino, opened in 1997 and offers wider fairways with cleverly positioned hazards, providing a strategic test for players of all levels.
 </p>
 <p>
 VGCC has hosted numerous prestigious events, including the Vietnam Open. Its mature trees, meandering waterways, and meticulously manicured grounds make it a classic, must-play destination on any Southern Vietnam golf tour.
 </p>
 </div>
 </div>
 </div>
 </section>

 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Oasis</span></h2>
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
    pagePath="/courses/vietnam/vgcc/"
  />
  </div>
  </section>
            <CourseSchemaBlock
                name="Vietnam Golf & Country Club (VGCC)"
                description="Play Vietnam Golf & Country Club, a tranquil oasis near Ho Chi Minh City. Book your Vietnam & Thailand golf tour with Asia Golf Specialists."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/vgcc/"}
                imageUrl={"/images/courses/vietnam/vgcc/vgcc-1.webp"}
                addressLocality={"Ho Chi Minh City"}
                addressCountry={"VN"}
                numberOfHoles={36}
                courseLength={7106}
                par={72}
                designer="Chen King Shih (West) / Lee Trevino (East)"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Vietnam Golf & Country Club (VGCC)", item: "https://www.asiagolfspecialists.com/courses/vietnam/vgcc/" },
                ]}
            />


            
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Vietnam Golf & Country Club (VGCC)</strong> is a premier Par 72 (West) / 72 (East) championship layout in Ho Chi Minh City, Vietnam, crafted by <strong>Chen King Shih (West) / Lee Trevino (East)</strong> (1994 (West) / 1997 (East)) and stretching to <strong>7,106 Yards / 6,946 Yards</strong> across a parkland environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its historic heritage & mature tree canopy (Vietnam) and lee trevino east course challenge (Severe multi-tier greens).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Vietnam Golf & Country Club (VGCC) (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie experience & pacing (Decades of veteran intuition), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Ho Chi Minh City golf tour by AGS, Vietnam Golf & Country Club (VGCC) provides a distinct architectural test by Chen King Shih (West) / Lee Trevino (East) that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Vietnam Golf & Country Club (VGCC)"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/vgcc/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/vgcc/vgcc-1.webp"
    addressLocality="Ho Chi Minh City"
    addressCountry="VN"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="36-Hole Heritage Club • Lee Trevino East Course"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Historic Heritage & Mature Tree Canopy",
            score: 9.6,
            highlight: "Vietnam's first 36-hole complex"
      },
      {
            label: "Lee Trevino East Course Challenge",
            score: 9.5,
            highlight: "Severe multi-tier greens"
      },
      {
            label: "Caddie Experience & Pacing",
            score: 9.5,
            highlight: "Decades of veteran intuition"
      },
      {
            label: "Traditional Private Members' Ambiance",
            score: 9.4,
            highlight: "Classic clubhouse heritage"
      }
]}
    verdict="Vietnam's first 36-hole golf club. The East Course by Lee Trevino offers generous landing areas but severely undulating greens, while the West Course tests driving accuracy through narrow tree-lined fairways."
  />


            <CourseFAQSection
                courseName="Vietnam Golf & Country Club (VGCC)"
                faqs={[
          {
                    "q": "What are the key course specifications for Vietnam Golf & Country Club (VGCC)?",
                    "a": "Vietnam Golf & Country Club (VGCC) in Ho Chi Minh City, Vietnam is a Par 72 (West) / 72 (East) championship layout designed by Chen King Shih (West) / Lee Trevino (East) (opened 1994 (West) / 1997 (East)), measuring 7,106 Yards / 6,946 Yards within a parkland setting. It is particularly noted for historic heritage & mature tree canopy (Vietnam)."
          },
          {
                    "q": "How do I secure tee times and caddies at Vietnam Golf & Country Club (VGCC)?",
                    "a": "Vietnam Golf & Country Club (VGCC) operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie experience & pacing (Decades of veteran intuition)), and private VIP transfers from your Ho Chi Minh City hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Vietnam Golf & Country Club (VGCC)?",
                    "a": "Our field inspection highlights Vietnam Golf & Country Club (VGCC)'s lee trevino east course challenge (Severe multi-tier greens) alongside historic heritage & mature tree canopy (Vietnam). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Vietnam Golf & Country Club (VGCC)?",
                    "a": "November through April is prime season for Southern Vietnam golf courses."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/vgcc/" venueName="Vietnam Golf & Country Club (VGCC)" venueType="course" />
            <CourseNavigation
                prev={{ title: "Van Tri Golf Club", path: "/courses/vietnam/van-tri-golf-club/" }}
                next={{ title: "Vinpearl Golf Nam Hoi An", path: "/courses/vietnam/vinpearl-nam-hoi-an/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
 );
}
