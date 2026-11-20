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
 title: { absolute: "Black Mountain Golf Club Hua Hin | Thailand Golf Tours" },
 description: "Black Mountain Golf Club Hua Hin — Thailand's No.1 course and one of Asia's finest championship facilities. A 27-hole must-play.",
 keywords: ["Black Mountain Golf Club Hua Hin", "Asia Best Golf Course Thailand", "Hua Hin Golf", "Thailand Golf Tours", "Granite Mountain Golf Thailand"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/thailand/black-mountain/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Black Mountain Golf Club Hua Hin | Thailand Golf Tours" },
        description: "Black Mountain Golf Club Hua Hin — Thailand's No.1 course and one of Asia's finest championship facilities. A 27-hole must-play.",
        url: "https://www.asiagolfspecialists.com/courses/thailand/black-mountain/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/thailand/black-mountain/black-mountain-golf-club-hua-hin-thailand-1.webp",
            width: 1200,
            height: 630,
            alt: "Black Mountain Golf Club Hua Hin | Asia — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Black Mountain Golf Club Hua Hin | Thailand Golf Tours" },
        description: "Black Mountain Golf Club Hua Hin — Thailand's No.1 course and one of Asia's finest championship facilities. A 27-hole must-play.",
        images: ["https://www.asiagolfspecialists.com/images/courses/thailand/black-mountain/black-mountain-golf-club-hua-hin-thailand-1.webp"],
    },
};

export default function BlackMountain() {
 const images = [
 { src: "/images/courses/thailand/black-mountain/black-mountain-golf-club-hua-hin-thailand-1.webp", alt: "Black Mountain Golf Club Hua Hin Thailand Granite Mountain Aerial", caption: "Hua Hin Thailand Granite Mountain Aerial" },
 { src: "/images/courses/thailand/black-mountain/black-mountain-golf-club-rock-fairway-2.webp", alt: "Black Mountain Golf Club Hua Hin Thailand Granite Rock Fairway", caption: "Hua Hin Thailand Granite Rock Fairway" },
 { src: "/images/courses/thailand/black-mountain/black-mountain-golf-club-asia-best-3.webp", alt: "Black Mountain Golf Club Thailand Asia Best Championship Hole", caption: "Thailand Asia Best Championship Hole" },
 { src: "/images/courses/thailand/black-mountain/black-mountain-golf-club-canyon-4.webp", alt: "Black Mountain Golf Club Hua Hin Thailand Dramatic Canyon Hole", caption: "Hua Hin Thailand Dramatic Canyon Hole" },
 { src: "/images/courses/thailand/black-mountain/black-mountain-golf-club-signature-hole-5.webp", alt: "Black Mountain Golf Club Hua Hin Thailand Signature Hole Mountain", caption: "Hua Hin Thailand Signature Hole Mountain" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Ranked Asia's Best</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Black Mountain<br /><span className="text-gold">Golf Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Consistently named Asia's finest — carved from a Hua Hin granite mountain."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', 'Phil Ryan'], ['Year Opened', '2007'], ['Location', 'Hua Hin, Prachuap Khiri Khan'], ['Par', '72'], ['Length', '7,375 Yards'], ['Setting', 'Granite mountain terrain'], ['Accolades', "Asia's Best Golf Course (multiple)"], ['Character', 'Dramatic, canyon-style, challenging'], ['Top 100 Asia Ranking', <a href="https://www.top100golfcourses.com/golf-courses/asia/thailand" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">#9 in Asia (2026)</a>]
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Black Mountain Golf Club in Hua Hin is, quite simply, the benchmark for Thailand golf — and for many international ranking panels, the benchmark for Asian golf. Carved directly from a granite mountain on the outskirts of Hua Hin, the course offers visual drama and strategic depth in equal measure, with the natural rock formations, canyon-style valleys, and sweeping ridge views making every hole a genuine event.</p>
 <p>At 7,375 yards from the back tees, Black Mountain is a genuine championship examination. The exposed granite boulders serve as both aesthetic masterstrokes and penalty-zone hazards, and the greens — fast, firm, and beautifully conditioned year-round — demand proper reading of the full hole before committing to an approach.</p>
 <p>AGS considers Black Mountain essential on any Thailand golf itinerary. It is the course that consistently generates the most enthusiastic feedback from returning discerning clients — the combination of extraordinary visual setting, perfect conditioning, and genuine challenge is unmatched in the region.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Mountain</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/thailand/black-mountain/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://www.blackmountainhua.com/","https://www.top100golfcourses.com/golf-course/black-mountain"]}
                name="Black Mountain Golf Club"
                description="Consistently named Asia's finest — carved from a Hua Hin granite mountain."
                url={"https://www.asiagolfspecialists.com/courses/thailand/black-mountain/"}
                imageUrl={"/images/courses/thailand/black-mountain/black-mountain-golf-club-hua-hin-thailand-1.webp"}
                addressLocality={"Hua Hin"}
                addressCountry={"TH"}
                numberOfHoles={18}
                courseLength={7375}
                par={72}
                designer="Phil Ryan"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Thailand", item: "https://www.asiagolfspecialists.com/destinations/thailand/" },
                    { name: "Thailand Courses", item: "https://www.asiagolfspecialists.com/destinations/thailand/courses/" },
                    { name: "Black Mountain Golf Club", item: "https://www.asiagolfspecialists.com/courses/thailand/black-mountain/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Black Mountain Golf Club</strong> is a premier Par 72 championship layout in Hua Hin, Thailand, crafted by <strong>Phil Ryan</strong> (2007) and stretching to <strong>7,375 Yards</strong> across a granite mountain terrain environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its dramatic granite mountain backdrop (Striking black rock peaks) and tournament fairway & green speed (Stimp 11+ tournament roll).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Black Mountain Golf Club (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Thailand dry season. Our curatorial scorecard specifically notes its caddie precision & pin reading (Best trained caddies in Asia), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Hua Hin golf tour by AGS, Black Mountain Golf Club provides a distinct architectural test by Phil Ryan that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Black Mountain Golf Club"
    itemUrl="https://www.asiagolfspecialists.com/courses/thailand/black-mountain/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/thailand/black-mountain/black-mountain-golf-club-hua-hin-thailand-1.webp"
    addressLocality="Hua Hin"
    addressCountry="TH"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="European Tour Host • World Top 100 • Hua Hin"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Dramatic Granite Mountain Backdrop",
            score: 9.9,
            highlight: "Striking black rock peaks"
      },
      {
            label: "Tournament Fairway & Green Speed",
            score: 9.8,
            highlight: "Stimp 11+ tournament roll"
      },
      {
            label: "Caddie Precision & Pin Reading",
            score: 9.7,
            highlight: "Best trained caddies in Asia"
      },
      {
            label: "27-Hole Championship Resort Complex",
            score: 9.8,
            highlight: "World-class villas & spa"
      }
]}
    verdict="The jewel of Hua Hin and one of Asia's undisputed icons. Multiple European Tour venue featuring 27 holes carved into the foothills of Black Mountain. Fast, undulating greens, brilliant risk-reward design, and first-class clubhouse amenities."
  />


            
 <VenueItineraries venueHref="/courses/thailand/black-mountain/" venueName="Black Mountain Golf Club" venueType="course" />

 <CourseFAQSection
                courseName="Black Mountain Golf Club"
                faqs={[
          {
                    "q": "What are the key course specifications for Black Mountain Golf Club?",
                    "a": "Black Mountain Golf Club in Hua Hin, Thailand is a Par 72 championship layout designed by Phil Ryan (opened 2007), measuring 7,375 Yards within a granite mountain terrain setting. It is particularly noted for dramatic granite mountain backdrop (Striking black rock peaks)."
          },
          {
                    "q": "How do I secure tee times and caddies at Black Mountain Golf Club?",
                    "a": "Black Mountain Golf Club operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie precision & pin reading (Best trained caddies in Asia)), and private VIP transfers from your Hua Hin hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Black Mountain Golf Club?",
                    "a": "Our field inspection highlights Black Mountain Golf Club's tournament fairway & green speed (Stimp 11+ tournament roll) alongside dramatic granite mountain backdrop (Striking black rock peaks). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Black Mountain Golf Club?",
                    "a": "November through April is the prime season for Black Mountain Golf Club Hua Hin."
          }
]}
            />
            <CourseNavigation
                prev={{ title: "Bangkok Golf Club", path: "/courses/thailand/bangkok-golf-club/" }}
                next={{ title: "Blue Canyon Country Club", path: "/courses/thailand/blue-canyon/" }}
                country="Thailand"
                countryLink="/destinations/thailand/courses/"
            />
 </main >
 );
}
