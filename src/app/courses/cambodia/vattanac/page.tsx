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
 title: "Vattanac Golf Resort | Phnom Penh Golf",
 description: "Play championship golf at Vattanac Golf Resort in Cambodia. Two 18-hole courses by Sir Nick Faldo, featuring Khmer temple models.",
 keywords: ["Vattanac Golf Resort", "Phnom Penh Golf Courses", "Cambodia Golf Tours", "Sir Nick Faldo Cambodia", "Vattanac East Course", "Vattanac West Course"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/cambodia/vattanac/",
    },
    openGraph: {
        type: "website",
        title: "Vattanac Golf Resort | Phnom Penh Golf",
        description: "Play championship golf at Vattanac Golf Resort in Cambodia. Two 18-hole courses by Sir Nick Faldo, featuring Khmer temple models.",
        url: "https://www.asiagolfspecialists.com/courses/cambodia/vattanac/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/cambodia/vattanac/vattanac-1.webp",
            width: 1200,
            height: 630,
            alt: "Vattanac Golf Resort — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Vattanac Golf Resort | Phnom Penh Golf",
        description: "Play championship golf at Vattanac Golf Resort in Cambodia. Two 18-hole courses by Sir Nick Faldo, featuring Khmer temple models.",
        images: ["https://www.asiagolfspecialists.com/images/courses/cambodia/vattanac/vattanac-1.webp"],
    },
};

export default function Vattanac() {
 const images = [
 { src: "/images/courses/cambodia/vattanac/vattanac-1.webp", alt: "Vattanac Golf Resort Aerial Cambodia", caption: "Vattanac Golf Resort Aerial Overview" },
 { src: "/images/courses/cambodia/vattanac/vattanac-2.webp", alt: "Vattanac East Course Sir Nick Faldo", caption: "The Championship East Course" },
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
                    <DestinationBackLink country="Cambodia" countryLink="/destinations/cambodia/courses/" />
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
 AGS Course Heritage — Faldo Signature
 </div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Vattanac <br /><span className="text-gold">Golf Resort</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">
 "An awe-inspiring 36-hole resort seamlessly integrating intricate scale models of ancient Khmer temples into immaculate fairways."
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
                  ['Designer', 'Sir Nick Faldo'],
                  ['Year Opened', '2019 (East) / 2020 (West)'],
                  ['Par', '72 / 72'],
                  ['Length', '7,467 Yards / 7,249 Yards'],
                  ['Grass Type', 'Paspalum'],
                  ['Setting', 'Cultural Parkland'],
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
 Located just 20 kilometers from the heart of Phnom Penh, Vattanac Golf Resort is redefining luxury golf in Cambodia. The resort features two 18-hole championship courses, both crafted by the legendary six-time Major winner, Sir Nick Faldo.
 </p>
 <p>
 The East Course is a strategic masterpiece, stretching to over 7,400 yards. It's defined by extensive water features, dramatic bunkering, and the inclusion of stunning scale models of pre-Angkorian architectural ruins, such as Preah Vihear and Angkor Wat, seamlessly integrated into the layout. The West Course, slightly shorter but no less challenging, offers narrower fairways and a more parkland-style feel, presenting a distinct contrast to the East.
 </p>
 <p>
 Both courses are maintained to impeccable standards with pure Paspalum grass. Supported by a spectacular, state-of-the-art clubhouse and elite practice facilities, Vattanac Golf Resort has quickly established itself as the premier golfing destination in Cambodia's capital.
 </p>
 <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
    <Link href="/courses/cambodia/vattanac-east/" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', textDecoration: 'none', display: 'inline-block' }}>View East Course</Link>
    <Link href="/courses/cambodia/vattanac-west/" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', textDecoration: 'none', display: 'inline-block' }}>View West Course</Link>
 </div>
 </div>
 </div>
 </div>
 </section>

 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience <span className="text-gold">Vattanac</span></h2>
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
    pagePath="/courses/cambodia/vattanac/"
  />
  </div>
  </section>
            <CourseSchemaBlock
                name="Vattanac Golf Resort"
                description="Play championship golf at Vattanac Golf Resort in Cambodia. Two 18-hole courses by Sir Nick Faldo, featuring Khmer temple models."
                url={"https://www.asiagolfspecialists.com/courses/cambodia/vattanac/"}
                imageUrl={"/images/courses/cambodia/vattanac/vattanac-1.webp"}
                addressLocality={"Phnom Penh"}
                addressCountry={"KH"}
                numberOfHoles={36}
                courseLength={7467}
                par={72}
                designer="Sir Nick Faldo"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Cambodia", item: "https://www.asiagolfspecialists.com/destinations/cambodia/" },
                    { name: "Cambodia Courses", item: "https://www.asiagolfspecialists.com/destinations/cambodia/courses/" },
                    { name: "Vattanac Golf Resort", item: "https://www.asiagolfspecialists.com/courses/cambodia/vattanac/" },
                ]}
            />


            
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Vattanac Golf Resort</strong> is a premier Par 72 / 72 championship layout in Phnom Penh, Cambodia, crafted by <strong>Sir Nick Faldo</strong> (2019 (East) / 2020 (West)) and stretching to <strong>7,467 Yards / 7,249 Yards</strong> across a cultural parkland environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its khmer cultural replica architecture (Miniature Angkorian wonders) and tournament standard conditioning (Flawless Paspalum carpet).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Vattanac Golf Resort (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Cambodia dry season. Our curatorial scorecard specifically notes its elite caddie service (First-class etiquette), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Phnom Penh golf tour by AGS, Vattanac Golf Resort provides a distinct architectural test by Sir Nick Faldo that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Vattanac Golf Resort"
    itemUrl="https://www.asiagolfspecialists.com/courses/cambodia/vattanac/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/cambodia/vattanac/vattanac-1.webp"
    addressLocality="Phnom Penh"
    addressCountry="KH"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="Sir Nick Faldo 36-Hole Luxury Resort • Phnom Penh"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Khmer Cultural Replica Architecture",
            score: 9.8,
            highlight: "Miniature Angkorian wonders"
      },
      {
            label: "Tournament Standard Conditioning",
            score: 9.8,
            highlight: "Flawless Paspalum carpet"
      },
      {
            label: "Elite Caddie Service",
            score: 9.7,
            highlight: "First-class etiquette"
      },
      {
            label: "World-Class Academy & Night Golf",
            score: 9.8,
            highlight: "State-of-the-art facilities"
      }
]}
    verdict="A 36-hole statement of grandeur by Sir Nick Faldo. Features scale replicas of historic Khmer landmarks and incorporates state-of-the-art night golf across two world-class championship layouts."
  />


            <CourseFAQSection
                courseName="Vattanac Golf Resort"
                faqs={[
          {
                    "q": "What are the key course specifications for Vattanac Golf Resort?",
                    "a": "Vattanac Golf Resort in Phnom Penh, Cambodia is a Par 72 / 72 championship layout designed by Sir Nick Faldo (opened 2019 (East) / 2020 (West)), measuring 7,467 Yards / 7,249 Yards within a cultural parkland setting. It is particularly noted for khmer cultural replica architecture (Miniature Angkorian wonders)."
          },
          {
                    "q": "How do I secure tee times and caddies at Vattanac Golf Resort?",
                    "a": "Vattanac Golf Resort operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (elite caddie service (First-class etiquette)), and private VIP transfers from your Phnom Penh hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Vattanac Golf Resort?",
                    "a": "Our field inspection highlights Vattanac Golf Resort's tournament standard conditioning (Flawless Paspalum carpet) alongside khmer cultural replica architecture (Miniature Angkorian wonders). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Vattanac Golf Resort?",
                    "a": "Peak playing conditions at Vattanac Golf Resort in Phnom Penh typically run during the cooler, drier months from November through April, with early morning tee times recommended year-round."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/cambodia/vattanac/" venueName="Vattanac Golf Resort" venueType="course" />
            <CourseNavigation
                prev={{ title: "Siem Reap Booyoung Country Club", path: "/courses/cambodia/siem-reap-booyoung/" }}
                next={{ title: "Vattanac Golf Resort East Course", path: "/courses/cambodia/vattanac-east/" }}
                country="Cambodia"
                countryLink="/destinations/cambodia/courses/"
            />
 

</main>
 );
}
