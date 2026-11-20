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
 title: { absolute: "Phoenix Golf Resort | 'Halong Bay on Land' Golf Experience" },
 description: "Play Phoenix Golf Resort in Hoa Binh, the largest golf facility in North Vietnam. Enjoy 54 holes surrounded by spectacular karst limestone mountains.",
 keywords: ["Phoenix Golf Resort", "Ron Fream, Calvin Peete, Tatsukawa Vietnam", "Vietnam Golf Course", "Vietnam Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/phoenix-golf-resort/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Phoenix Golf Resort | 'Halong Bay on Land' Golf Experience" },
        description: "Play Phoenix Golf Resort in Hoa Binh, the largest golf facility in North Vietnam. Enjoy 54 holes surrounded by spectacular karst limestone mountains.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/phoenix-golf-resort/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/phoenix-golf-resort/phoenix-golf-resort-hero.webp",
            width: 1200,
            height: 630,
            alt: "Phoenix Golf Resort | Vietnam — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Phoenix Golf Resort | 'Halong Bay on Land' Golf Experience" },
        description: "Play Phoenix Golf Resort in Hoa Binh, the largest golf facility in North Vietnam. Enjoy 54 holes surrounded by spectacular karst limestone mountains.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/phoenix-golf-resort/phoenix-golf-resort-hero.webp"],
    },
};

export default function CoursePage() {
 const images = [
  { src: "/images/courses/vietnam/phoenix-golf-resort/phoenix-golf-resort-hero.webp", alt: "Phoenix Golf Resort Hero", caption: "The 'Halong Bay on Land'" },
  { src: "/images/courses/vietnam/phoenix-golf-resort/phoenix-golf-resort-karst.webp", alt: "Phoenix Golf Karst", caption: "Spectacular limestone mountains" },
  { src: "/images/courses/vietnam/phoenix-golf-resort/phoenix-golf-resort-fairways.webp", alt: "Phoenix Golf Fairways", caption: "Lush fairways and dramatic backdrops" },
  { src: "/images/courses/vietnam/phoenix-golf-resort/phoenix-golf-resort-aerial.webp", alt: "Phoenix Golf Aerial", caption: "54-hole golf complex" },
  { src: "/images/courses/vietnam/phoenix-golf-resort/phoenix-golf-resort-clubhouse.webp", alt: "Phoenix Golf Clubhouse", caption: "Massive clubhouse facilities" }
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
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Phoenix <br /><span className="text-gold">Golf Resort</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">
 "Nicknamed 'Halong Bay on Land', this 54-hole mega-resort offers a surreal golfing experience amidst towering limestone karst mountains in North Vietnam."
 </p>
 </div>
 </header>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Phoenix Golf Resort"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/phoenix-golf-resort/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/phoenix-golf-resort/phoenix-golf-resort-hero.webp"
    addressLocality="Hoa Binh"
    addressCountry="VN"
    overallScore={4.6}
    maxScore={5.0}
    gradeBadge="54-Hole Halong Bay on Land • Hoa Binh"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Towering Limestone Karst Scenery",
            score: 9.9,
            highlight: "Dramatic vertical rock towers"
      },
      {
            label: "54-Hole Diversity (Champion, Phoenix, Dragon)",
            score: 9.4,
            highlight: "Vast complex in secluded valley"
      },
      {
            label: "Caddie Cart Maneuvering on Steep Slopes",
            score: 9.2,
            highlight: "Navigates dramatic elevation"
      },
      {
            label: "Expansive Panoramic Clubhouse",
            score: 9.3,
            highlight: "Sweeping views of karst valleys"
      }
]}
    verdict="Dubbed 'Ha Long Bay on Land,' the 54-hole Phoenix Golf Resort delivers jaw-dropping scenery as you play between towering vertical limestone pillars rising from the valley floor."
  />


 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
              <tbody>
                {[
                  ['Designer', 'Ron Fream, Calvin Peete, Tatsukawa'],
                  ['Year Opened', '2006'],
                  ['Par', '72'],
                  ['Length', '7,184 Yards'],
                  ['Grass Type', 'Bermuda'],
                  ['Setting', 'Mountain / Karst'],
                  ['Top Ranking', 'Largest Golf Resort in Vietnam']
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
 <p>Set in a landscape that seems straight out of a fantasy movie, Phoenix Golf Resort offers a golfing experience unlike any other. The towering limestone formations provide a dramatic and intimidating backdrop to almost every shot across the 54-hole complex.

The three courses offer varied challenges: the Phoenix Course (designed by Ron Fream), the Dragon Course (by Japanese designer Tatsukawa), and the Master Course (by Calvin Peete). Each course demands accuracy to avoid the water hazards, deep rough, and out-of-bounds areas created by the natural rocky terrain.

The resort's massive European-style clubhouse stands as a grand centerpiece, offering extensive facilities, locker rooms, and dining options to accommodate hundreds of golfers daily.</p>
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
    pagePath="/courses/vietnam/phoenix-golf-resort/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={[]}
                name="Phoenix Golf Resort"
                description="Play Phoenix Golf Resort in Hoa Binh, the largest golf facility in North Vietnam. Enjoy 54 holes surrounded by spectacular karst limestone mountains."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/phoenix-golf-resort/"}
                imageUrl={"/images/courses/vietnam/phoenix-golf-resort/phoenix-golf-resort-hero.webp"}
                addressLocality={""}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={7184}
                par={72}
                designer="Ron Fream, Calvin Peete, Tatsukawa"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Phoenix Golf Resort", item: "https://www.asiagolfspecialists.com/courses/vietnam/phoenix-golf-resort/" },
                ]}
            />


 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Phoenix Golf Resort</strong> is a premier Par 72 championship layout in Hoa Binh, Vietnam, crafted by <strong>Ron Fream, Calvin Peete, Tatsukawa</strong> (2006) and stretching to <strong>7,184 Yards</strong> across a mountain / karst environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its towering limestone karst scenery (Dramatic vertical rock towers) and 54-hole diversity (champion, phoenix, dragon) (Vast complex in secluded valley).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Phoenix Golf Resort (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie cart maneuvering on steep slopes (Navigates dramatic elevation), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Hoa Binh golf tour by AGS, Phoenix Golf Resort provides a distinct architectural test by Ron Fream, Calvin Peete, Tatsukawa that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

            <CourseFAQSection
                courseName="Phoenix Golf Resort"
                faqs={[
          {
                    "q": "What are the key course specifications for Phoenix Golf Resort?",
                    "a": "Phoenix Golf Resort in Hoa Binh, Vietnam is a Par 72 championship layout designed by Ron Fream, Calvin Peete, Tatsukawa (opened 2006), measuring 7,184 Yards within a mountain / karst setting. It is particularly noted for towering limestone karst scenery (Dramatic vertical rock towers)."
          },
          {
                    "q": "How do I secure tee times and caddies at Phoenix Golf Resort?",
                    "a": "Phoenix Golf Resort operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie cart maneuvering on steep slopes (Navigates dramatic elevation)), and private VIP transfers from your Hoa Binh hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Phoenix Golf Resort?",
                    "a": "Our field inspection highlights Phoenix Golf Resort's 54-hole diversity (champion, phoenix, dragon) (Vast complex in secluded valley) alongside towering limestone karst scenery (Dramatic vertical rock towers). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Phoenix Golf Resort?",
                    "a": "Peak playing conditions at Phoenix Golf Resort in Hoa Binh typically run during the cooler, drier months from November through April, with early morning tee times recommended year-round."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/phoenix-golf-resort/" venueName="Phoenix Golf Resort" venueType="course" />
            <CourseNavigation
                prev={{ title: "PGA Ocean Course NovaWorld", path: "/courses/vietnam/pga-ocean-course/" }}
                next={{ title: "Royal Long An Golf & Country Club", path: "/courses/vietnam/royal-long-an/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
 );
}
