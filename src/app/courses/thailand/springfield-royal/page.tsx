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
 title: "Springfield Royal Country Club ",
 description: "Experience Springfield Royal Country Club in Hua Hin, a classic Jack Nicklaus design featuring strategic bunkering and mature woodlands. Book with AGS.",
 keywords: ["Springfield Royal Country Club", "Hua Hin Golf Courses", "Jack Nicklaus Thailand", "Thailand Golf Tours", "Hua Hin Golf Resorts"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/thailand/springfield-royal/",
    },
    openGraph: {
        type: "website",
        title: "Springfield Royal Country Club ",
        description: "Experience Springfield Royal Country Club in Hua Hin, a classic Jack Nicklaus design featuring strategic bunkering and mature woodlands. Book with AGS.",
        url: "https://www.asiagolfspecialists.com/courses/thailand/springfield-royal/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/thailand/springfield-royal/springfield-royal-1.webp",
            width: 1200,
            height: 630,
            alt: "Springfield Royal Country Club  — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Springfield Royal Country Club ",
        description: "Experience Springfield Royal Country Club in Hua Hin, a classic Jack Nicklaus design featuring strategic bunkering and mature woodlands. Book with AGS.",
        images: ["https://www.asiagolfspecialists.com/images/courses/thailand/springfield-royal/springfield-royal-1.webp"],
    },
};

export default function SpringfieldRoyal() {
 const images = [
 { src: "/images/courses/thailand/springfield-royal/springfield-royal-1.webp", alt: "Springfield Royal Country Club Hua Hin", caption: "Springfield Royal Country Club Aerial" },
 { src: "/images/courses/thailand/springfield-royal/springfield-royal-2.webp", alt: "Springfield Royal Jack Nicklaus Bunkers", caption: "Signature Jack Nicklaus Bunkering" },
 { src: "/images/courses/thailand/springfield-royal/springfield-royal-3.webp", alt: "Springfield Royal Water Hazards", caption: "Strategic Water Features in Hua Hin" },
 { src: "/images/courses/thailand/springfield-royal/springfield-royal-4.webp", alt: "Springfield Royal Mature Woodlands", caption: "Mature Woodlands Framing the Fairways" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
 AGS Course Heritage — Nicklaus Masterpiece
 </div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Springfield Royal <br /><span className="text-gold">Country Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">
 "A classic Jack Nicklaus design featuring strategic bunkering, mature woodlands, and an immaculate test of golf."
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
                  ['Designer', 'Jack Nicklaus (A/B) / Lee Schmidt (C)'],
                  ['Year Opened', '1993 (A/B) / 2005 (C)'],
                  ['Par', '72 (A/B) / 36 (C)'],
                  ['Length', '7,063 Yards (A/B)'],
                  ['Grass Type', 'Bermuda (Fairways) / Tifdwarf (Greens)'],
                  ['Setting', 'Woodland Parkland'],
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
 Located a short drive inland from the royal beach resort town of Hua Hin, Springfield Royal Country Club is widely considered one of the finest and most challenging courses in the region. The original 18 holes (the Mountain and Lake nines) were designed by Jack Nicklaus, showcasing his signature style of rewarding accuracy and strategic shot placement.
 </p>
 <p>
 True to a Nicklaus design, Springfield demands respect from the tee. The fairways are framed by mature, sweeping woodlands and a vast array of expansive bunkers. Water comes into play frequently, most notably on the iconic island green 18th hole, which requires a precise approach to finish the round.
 </p>
 <p>
 A third nine (the Valley course), designed by Lee Schmidt, was added in 2005, expanding the facility to 27 holes. With its beautiful natural surroundings, exceptional maintenance, and rich pedigree, Springfield Royal is an essential stop on any Hua Hin golf itinerary.
 </p>
 </div>
 </div>
 </div>
 </section>

 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience <span className="text-gold">Springfield Royal</span></h2>
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
    pagePath="/courses/thailand/springfield-royal/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://www.springfieldroyal.com/"]}
                name="Springfield Royal Country Club"
                description="Experience Springfield Royal Country Club in Hua Hin, a classic Jack Nicklaus design featuring strategic bunkering and mature woodlands. Book with AGS."
                url={"https://www.asiagolfspecialists.com/courses/thailand/springfield-royal/"}
                imageUrl={"/images/courses/thailand/springfield-royal/springfield-royal-1.webp"}
                addressLocality={"Hua Hin"}
                addressCountry={"TH"}
                numberOfHoles={27}
                courseLength={7063}
                par={72}
                designer="Jack Nicklaus (A/B) / Lee Schmidt (C)"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Thailand", item: "https://www.asiagolfspecialists.com/destinations/thailand/" },
                    { name: "Thailand Courses", item: "https://www.asiagolfspecialists.com/destinations/thailand/courses/" },
                    { name: "Springfield Royal Country Club", item: "https://www.asiagolfspecialists.com/courses/thailand/springfield-royal/" },
                ]}
            />


            
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Springfield Royal Country Club</strong> is a premier Par 72 (A/B) / 36 (C) championship layout in Hua Hin, Thailand, crafted by <strong>Jack Nicklaus (A/B) / Lee Schmidt (C)</strong> (1993 (A/B) / 2005 (C)) and stretching to <strong>7,063 Yards (A/B)</strong> across a woodland parkland environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its classic nicklaus mound & bunker architecture (Signature Golden Bear traps) and 27 holes (mountain, lake, valley) (Superb variety across nines).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Springfield Royal Country Club (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Thailand dry season. Our curatorial scorecard specifically notes its caddie pacing & etiquette (Attentive royal service), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Hua Hin golf tour by AGS, Springfield Royal Country Club provides a distinct architectural test by Jack Nicklaus (A/B) / Lee Schmidt (C) that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Springfield Royal Country Club"
    itemUrl="https://www.asiagolfspecialists.com/courses/thailand/springfield-royal/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/thailand/springfield-royal/springfield-royal-1.webp"
    addressLocality="Hua Hin"
    addressCountry="TH"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Jack Nicklaus 27-Hole Masterpiece • Hua Hin"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Classic Nicklaus Mound & Bunker Architecture",
            score: 9.6,
            highlight: "Signature Golden Bear traps"
      },
      {
            label: "27 Holes (Mountain, Lake, Valley)",
            score: 9.6,
            highlight: "Superb variety across nines"
      },
      {
            label: "Caddie Pacing & Etiquette",
            score: 9.4,
            highlight: "Attentive royal service"
      },
      {
            label: "Grand Traditional Clubhouse Facilities",
            score: 9.3,
            highlight: "Expansive marble clubhouse"
      }
]}
    verdict="A timeless Jack Nicklaus 27-hole design featuring cavernous bunkers, manicured mounding, and difficult water-guarded approaches. A pillar of royal Hua Hin's golfing legacy."
  />


            
 <VenueItineraries venueHref="/courses/thailand/springfield-royal/" venueName="Springfield Royal Country Club" venueType="course" />

 <CourseFAQSection
                courseName="Springfield Royal Country Club"
                faqs={[
          {
                    "q": "What are the key course specifications for Springfield Royal Country Club?",
                    "a": "Springfield Royal Country Club in Hua Hin, Thailand is a Par 72 (A/B) / 36 (C) championship layout designed by Jack Nicklaus (A/B) / Lee Schmidt (C) (opened 1993 (A/B) / 2005 (C)), measuring 7,063 Yards (A/B) within a woodland parkland setting. It is particularly noted for classic nicklaus mound & bunker architecture (Signature Golden Bear traps)."
          },
          {
                    "q": "How do I secure tee times and caddies at Springfield Royal Country Club?",
                    "a": "Springfield Royal Country Club operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie pacing & etiquette (Attentive royal service)), and private VIP transfers from your Hua Hin hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Springfield Royal Country Club?",
                    "a": "Our field inspection highlights Springfield Royal Country Club's 27 holes (mountain, lake, valley) (Superb variety across nines) alongside classic nicklaus mound & bunker architecture (Signature Golden Bear traps). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Springfield Royal Country Club?",
                    "a": "Hua Hin is great year-round, but November through April offers the most optimal, dry conditions."
          }
]}
            />
            <CourseNavigation
                prev={{ title: "Siam Country Club Old Course", path: "/courses/thailand/siam-country-club/" }}
                next={{ title: "Thai Country Club", path: "/courses/thailand/thai-country-club/" }}
                country="Thailand"
                countryLink="/destinations/thailand/courses/"
            />
 

</main>
 );
}
