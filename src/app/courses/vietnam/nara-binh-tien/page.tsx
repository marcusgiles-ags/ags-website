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
 title: { absolute: "Nara Binh Tien Golf Club | Coastal Masterpiece in Vietnam" },
 description: "Discover Nara Binh Tien Golf Club, a breathtaking 18-hole coastal course set against the Nui Chua mountains. Book your tee time with Asia Golf Specialists.",
 keywords: ["Nara Binh Tien Golf Club", "Kevin Ramsey / David Dale (Golfplan) Vietnam", "Vietnam Golf Course", "Vietnam Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/nara-binh-tien/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Nara Binh Tien Golf Club | Coastal Masterpiece in Vietnam" },
        description: "Discover Nara Binh Tien Golf Club, a breathtaking 18-hole coastal course set against the Nui Chua mountains. Book your tee time with Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/nara-binh-tien/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/nara-binh-tien/nara-binh-tien-beachfront-golf-hero.webp",
            width: 1200,
            height: 630,
            alt: "Nara Binh Tien Golf Club | Vietnam — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Nara Binh Tien Golf Club | Coastal Masterpiece in Vietnam" },
        description: "Discover Nara Binh Tien Golf Club, a breathtaking 18-hole coastal course set against the Nui Chua mountains. Book your tee time with Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/nara-binh-tien/nara-binh-tien-beachfront-golf-hero.webp"],
    },
};

export default function CoursePage() {
 const images = [
  { src: "/images/courses/vietnam/nara-binh-tien/nara-binh-tien-beachfront-golf-hero.webp", alt: "Nara Binh Tien Hero", caption: "Beachfront golf at Nara Binh Tien" },
  { src: "/images/courses/vietnam/nara-binh-tien/nara-binh-tien-coastal-golf.webp", alt: "Nara Binh Tien Coastal", caption: "Stunning coastal backdrop" },
  { src: "/images/courses/vietnam/nara-binh-tien/nara-binh-tien-water-hazard.webp", alt: "Nara Binh Tien Water Hazard", caption: "Strategic water features" },
  { src: "/images/courses/vietnam/nara-binh-tien/nara-binh-tien-site-overview.webp", alt: "Nara Binh Tien Overview", caption: "Nui Chua mountain views" },
  { src: "/images/courses/vietnam/nara-binh-tien/nara-binh-tien-aerial1.webp", alt: "Nara Binh Tien Aerial", caption: "Golfplan design masterpiece" },
  { src: "/images/courses/vietnam/nara-binh-tien/nara-binh-tien-clubhouse.webp", alt: "Nara Binh Tien Clubhouse", caption: "World-class clubhouse" }
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
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Nara <br /><span className="text-gold">Binh Tien Golf Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">
 "A stunning coastal mountain golf course set inside a protected national park, offering a unique blend of ocean breezes and dramatic landscapes."
 </p>
 </div>
 </header>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Nara Binh Tien Golf Club"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/nara-binh-tien/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/nara-binh-tien/nara-binh-tien-beachfront-golf-hero.webp"
    addressLocality="Ninh Thuan"
    addressCountry="VN"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="Pristine Coastal Wilderness • Golfplan"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Nui Chua National Park & Ocean Backdrop",
            score: 9.9,
            highlight: "Breathtaking untouched nature"
      },
      {
            label: "Platinum TE Paspalum Carpet Conditioning",
            score: 9.8,
            highlight: "Lush, dense emerald turf"
      },
      {
            label: "Caddie Ocean Line Expertise",
            score: 9.5,
            highlight: "Masterful on subtle breaks"
      },
      {
            label: "Striking Modern Resort Clubhouse",
            score: 9.6,
            highlight: "5-star luxury finishes"
      }
]}
    verdict="Flanked by the rugged peaks of Nui Chua National Park and the turquoise waters of Binh Tien Beach. One of Vietnam's most visually arresting hidden-gem championship layouts."
  />


 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
              <tbody>
                {[
                  ['Designer', 'Kevin Ramsey / David Dale (Golfplan)'],
                  ['Year Opened', '2022'],
                  ['Par', '72'],
                  ['Length', '6,718 Yards (Blue Tees)'],
                  ['Grass Type', 'Platinum Paspalum'],
                  ['Setting', 'Coastal Mountain'],
                  ['Top Ranking', 'Top New Course in Asia']
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
 <p>Nestled in the pristine Binh Tien coastline, Nara Binh Tien Golf Club is a true hidden gem. The Golfplan design team has brilliantly crafted a course that transitions from rugged natural dunes to lush parkland bordered by water, and finally up into the foothills of the Nui Chua mountains.

Every hole offers a distinct character and challenge, heavily influenced by the ever-present coastal winds. The pristine Platinum Paspalum grass ensures perfect lies and fast, true-rolling greens.

Beyond the course, the expansive clubhouse offers five-star amenities, making it a perfect retreat after a challenging round. Its remote beauty and top-tier design make it an essential stop on any Vietnam golf itinerary.</p>
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
    pagePath="/courses/vietnam/nara-binh-tien/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={[]}
                name="Nara Binh Tien Golf Club"
                description="Discover Nara Binh Tien Golf Club, a breathtaking 18-hole coastal course set against the Nui Chua mountains. Book your tee time with Asia Golf Specialists."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/nara-binh-tien/"}
                imageUrl={"/images/courses/vietnam/nara-binh-tien/nara-binh-tien-beachfront-golf-hero.webp"}
                addressLocality={""}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={6718}
                par={72}
                designer="Kevin Ramsey / David Dale (Golfplan)"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Nara Binh Tien Golf Club", item: "https://www.asiagolfspecialists.com/courses/vietnam/nara-binh-tien/" },
                ]}
            />


 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Nara Binh Tien Golf Club</strong> is a premier Par 72 championship layout in Ninh Thuan, Vietnam, crafted by <strong>Kevin Ramsey / David Dale (Golfplan)</strong> (2022) and stretching to <strong>6,718 Yards (Blue Tees)</strong> across a coastal mountain environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its nui chua national park & ocean backdrop (Breathtaking untouched nature) and platinum te paspalum carpet conditioning (Lush, dense emerald turf).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Nara Binh Tien Golf Club (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie ocean line expertise (Masterful on subtle breaks), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Ninh Thuan golf tour by AGS, Nara Binh Tien Golf Club provides a distinct architectural test by Kevin Ramsey / David Dale (Golfplan) that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

            <CourseFAQSection
                courseName="Nara Binh Tien Golf Club"
                faqs={[
          {
                    "q": "What are the key course specifications for Nara Binh Tien Golf Club?",
                    "a": "Nara Binh Tien Golf Club in Ninh Thuan, Vietnam is a Par 72 championship layout designed by Kevin Ramsey / David Dale (Golfplan) (opened 2022), measuring 6,718 Yards (Blue Tees) within a coastal mountain setting. It is particularly noted for nui chua national park & ocean backdrop (Breathtaking untouched nature)."
          },
          {
                    "q": "How do I secure tee times and caddies at Nara Binh Tien Golf Club?",
                    "a": "Nara Binh Tien Golf Club operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie ocean line expertise (Masterful on subtle breaks)), and private VIP transfers from your Ninh Thuan hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Nara Binh Tien Golf Club?",
                    "a": "Our field inspection highlights Nara Binh Tien Golf Club's platinum te paspalum carpet conditioning (Lush, dense emerald turf) alongside nui chua national park & ocean backdrop (Breathtaking untouched nature). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Nara Binh Tien Golf Club?",
                    "a": "Peak playing conditions at Nara Binh Tien Golf Club in Ninh Thuan typically run during the cooler, drier months from November through April, with early morning tee times recommended year-round."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/nara-binh-tien/" venueName="Nara Binh Tien Golf Club" venueType="course" />
            <CourseNavigation
                prev={{ title: "Montgomerie Links Vietnam", path: "/courses/vietnam/montgomerie-links/" }}
                next={{ title: "PGA Ocean Course NovaWorld", path: "/courses/vietnam/pga-ocean-course/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
 );
}
