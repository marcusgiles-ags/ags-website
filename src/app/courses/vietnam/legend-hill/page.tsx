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
 title: "BRG Legend Hill Golf Resort",
 description: "Play BRG Legend Hill, Vietnam's first Nicklaus Design course with unique twin greens. Book your Vietnam & Thailand golf tour with Asia Golf Specialists.",
 keywords: ["BRG Legend Hill", "Nicklaus Design Vietnam", "Twin Greens Golf", "Hanoi Golf Courses", "Northern Vietnam Golf"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/legend-hill/",
    },
    openGraph: {
        type: "website",
        title: "BRG Legend Hill Golf Resort ",
        description: "Play BRG Legend Hill, Vietnam's first Nicklaus Design course with unique twin greens. Book your Vietnam & Thailand golf tour with Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/legend-hill/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/legend-hill/legend-hill-1.webp",
            width: 1200,
            height: 630,
            alt: "BRG Legend Hill Golf Resort  — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "BRG Legend Hill Golf Resort ",
        description: "Play BRG Legend Hill, Vietnam's first Nicklaus Design course with unique twin greens. Book your Vietnam & Thailand golf tour with Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/legend-hill/legend-hill-1.webp"],
    },
};

export default function LegendHill() {
 const images = [
 { src: "/images/courses/vietnam/legend-hill/legend-hill-1.webp", alt: "BRG Legend Hill Golf Resort Twin Greens", caption: "The Unique 'Twin Green' Concept at BRG Legend Hill" },
 { src: "/images/courses/vietnam/legend-hill/legend-hill-2.webp", alt: "Legend Hill Nicklaus Design Fairway", caption: "Nicklaus Design Championship Fairway" },
 { src: "/images/courses/vietnam/legend-hill/legend-hill-3.webp", alt: "BRG Legend Hill Clubhouse View", caption: "The Spectacular Neo-Classical Clubhouse" },
 { src: "/images/courses/vietnam/legend-hill/legend-hill-4.webp", alt: "Legend Hill Golf Resort Bunkers", caption: "Strategic Nicklaus Bunkering" },
 { src: "/images/courses/vietnam/legend-hill/legend-hill-5.webp", alt: "Legend Hill Soc Son Mountains", caption: "Surrounded by the Soc Son Mountains" },
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
 AGS Course Heritage — Nicklaus Design
 </div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>BRG Legend Hill <br /><span className="text-gold">Golf Resort</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">
 "The first Nicklaus Design course in Vietnam, featuring an innovative 'twin green' concept."
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
                  ['Designer', 'Nicklaus Design'],
                  ['Year Opened', '2015'],
                  ['Par', '72'],
                  ['Length', '7,068 Yards'],
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
 BRG Legend Hill Golf Resort is located in the beautiful mountainous area of Soc Son, roughly an hour from Hanoi's city center. It holds the prestigious title of being the very first golf course in Vietnam designed by the legendary Nicklaus Design firm.
 </p>
 <p>
 The defining feature of Legend Hill is its innovative "twin green" concept. Each of the 18 holes has been designed with two separate, completely different greens. This means that depending on the day's setup, the strategic puzzle of the hole changes entirely, offering a 36-hole experience within an 18-hole footprint.
 </p>
 <p>
 The course is impeccably maintained, with lush Paspalum grass providing an excellent playing surface year-round. The impressive neoclassical clubhouse, which sits atop a hill overlooking the layout, adds to the grandeur of the experience, making Legend Hill a standout in Northern Vietnam.
 </p>
 </div>
 </div>
 </div>
 </section>

 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Legend</span></h2>
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
    pagePath="/courses/vietnam/legend-hill/"
  />
  </div>
  </section>
            <CourseSchemaBlock
                name="BRG Legend Hill Golf Resort"
                description="Play BRG Legend Hill, Vietnam"
                url={"https://www.asiagolfspecialists.com/courses/vietnam/legend-hill/"}
                imageUrl={"/images/courses/vietnam/legend-hill/legend-hill-1.webp"}
                addressLocality={"Hanoi"}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={7068}
                par={72}
                designer="Nicklaus Design"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "BRG Legend Hill Golf Resort", item: "https://www.asiagolfspecialists.com/courses/vietnam/legend-hill/" },
                ]}
            />


            
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>BRG Legend Hill Golf Resort</strong> is a premier Par 72 championship layout in Hanoi, Vietnam, crafted by <strong>Nicklaus Design</strong> (2015) and stretching to <strong>7,068 Yards</strong> across a mountain parkland environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its innovative twin-green routing concept (36 green variations on 18 holes) and pristine paspalum turf quality (Lush fairways and rapid greens).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, BRG Legend Hill Golf Resort (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie pin-placement accuracy (Well-versed in dual green sets), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Hanoi golf tour by AGS, BRG Legend Hill Golf Resort provides a distinct architectural test by Nicklaus Design that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="BRG Legend Hill Golf Resort"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/legend-hill/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/legend-hill/legend-hill-1.webp"
    addressLocality="Hanoi"
    addressCountry="VN"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Nicklaus Twin-Green Architecture • Hanoi"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Innovative Twin-Green Routing Concept",
            score: 9.6,
            highlight: "36 green variations on 18 holes"
      },
      {
            label: "Pristine Paspalum Turf Quality",
            score: 9.5,
            highlight: "Lush fairways and rapid greens"
      },
      {
            label: "Caddie Pin-Placement Accuracy",
            score: 9.5,
            highlight: "Well-versed in dual green sets"
      },
      {
            label: "Contemporary Luxury Clubhouse",
            score: 9.4,
            highlight: "Classical neoclassical styling"
      }
]}
    verdict="The first course in Vietnam designed by Nicklaus Design featuring a unique 'twin green' system that varies the pin angles and strategy every day. Impeccable turf and majestic mountain vistas."
  />


            
 <VenueItineraries venueHref="/courses/vietnam/legend-hill/" venueName="BRG Legend Hill Golf Resort" venueType="course" />

 <CourseFAQSection
                courseName="BRG Legend Hill Golf Resort"
                faqs={[
          {
                    "q": "What are the key course specifications for BRG Legend Hill Golf Resort?",
                    "a": "BRG Legend Hill Golf Resort in Hanoi, Vietnam is a Par 72 championship layout designed by Nicklaus Design (opened 2015), measuring 7,068 Yards within a mountain parkland setting. It is particularly noted for innovative twin-green routing concept (36 green variations on 18 holes)."
          },
          {
                    "q": "How do I secure tee times and caddies at BRG Legend Hill Golf Resort?",
                    "a": "BRG Legend Hill Golf Resort operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie pin-placement accuracy (Well-versed in dual green sets)), and private VIP transfers from your Hanoi hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at BRG Legend Hill Golf Resort?",
                    "a": "Our field inspection highlights BRG Legend Hill Golf Resort's pristine paspalum turf quality (Lush fairways and rapid greens) alongside innovative twin-green routing concept (36 green variations on 18 holes). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play BRG Legend Hill Golf Resort?",
                    "a": "October through April is prime season for Northern Vietnam golf, offering cooler, drier conditions."
          }
]}
            />
            <CourseNavigation
                prev={{ title: "Laguna Golf Lang Co", path: "/courses/vietnam/laguna-lang-co/" }}
                next={{ title: "Long Thanh Golf Resort Vietnam", path: "/courses/vietnam/long-thanh/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
 );
}
