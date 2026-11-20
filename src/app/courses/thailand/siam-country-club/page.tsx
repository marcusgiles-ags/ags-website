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
 title: { absolute: "Siam Country Club Old Course | Home of LPGA Thailand" },
 description: "Play Siam Country Club Old Course — the historical heart of Thai golf and permanent home of the Honda LPGA Thailand. Book with Asia Golf Specialists.",
 keywords: ["Siam Country Club Old Course", "LPGA Thailand Golf", "Pattaya Golf Course", "Historical Thai Golf", "Thailand Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/thailand/siam-country-club/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Siam Country Club Old Course | Home of LPGA Thailand" },
        description: "Play Siam Country Club Old Course — the historical heart of Thai golf and permanent home of the Honda LPGA Thailand. Book with Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/courses/thailand/siam-country-club/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/thailand/siam-country-club/siam-country-club-old-course-pattaya-thailand-1.webp",
            width: 1200,
            height: 630,
            alt: "Siam Country Club Old Course | Home of Thai Golf & LPGA Thailand — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Siam Country Club Old Course | Home of LPGA Thailand" },
        description: "Play Siam Country Club Old Course — the historical heart of Thai golf and permanent home of the Honda LPGA Thailand. Book with Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/courses/thailand/siam-country-club/siam-country-club-old-course-pattaya-thailand-1.webp"],
    },
};

export default function SiamCountryClub() {
 const images = [
 { src: "/images/courses/thailand/siam-country-club/siam-country-club-old-course-pattaya-thailand-1.webp", alt: "Siam Country Club Old Course Pattaya Thailand LPGA Aerial", caption: "Old Course aerial, Siam Country Club Pattaya" },
 { src: "/images/courses/thailand/siam-country-club/siam-country-club-old-course-history-2.webp", alt: "Siam Country Club Old Course Thailand Historical Thai Golf", caption: "Historical Old Course, Siam CC Thailand" },
 { src: "/images/courses/thailand/siam-country-club/siam-country-club-old-course-classic-3.webp", alt: "Siam Country Club Thailand Classic Championship Hole Fairway", caption: "Classic championship fairway, Pattaya" },
 { src: "/images/courses/thailand/siam-country-club/siam-country-club-old-course-lpga-4.webp", alt: "Siam Country Club Thailand LPGA Championship Hole Green", caption: "LPGA championship hole, Siam CC" },
 { src: "/images/courses/thailand/siam-country-club/siam-country-club-old-course-signature-5.webp", alt: "Siam Country Club Old Course Thailand Signature Championship Hole", caption: "Signature championship hole, Old Course" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — LPGA Permanent Home</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Siam Country Club<br /><span className="text-gold">Old Course</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"The original heart of Thai golf — where the Honda LPGA has been played since 2006."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', 'Schmidt-Curley (Redesign)'], ['Year Opened', '2007'], ['Location', 'Chonburi, near Pattaya'], ['Par', '72'], ['Length', '6,990 Yards'], ['Tournament', 'Honda LPGA Thailand (permanent)'], ['Setting', 'Classic parkland, mature trees'], ['Top 100 Asia Ranking', <a href="https://www.top100golfcourses.com/golf-courses/asia/thailand" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">#4 in Asia (2026)</a>]
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Siam Country Club Old Course is Thai golf's spiritual home — founded in 1971, it is the oldest golf club in the country and carries with it a weight of history and prestige that no other Thai course can claim. Since 2006, it has served as the permanent home of the Honda LPGA Thailand, hosting the world's top women professionals on its classically conditioned parkland layout every season.</p>
 <p>The Old Course is a traditional design of great dignity — mature trees line every fairway, the greens are consistently among the best-paced in the region, and the overall playing experience carries an unhurried, club-like atmosphere that the newer resort courses struggle to replicate. It is a course where golf history is tangible.</p>
 <p>For discerning golfers who want to walk the same fairways as world-ranked LPGA professionals and connect with the deep roots of Thai golf, Siam Country Club Old Course is an essential experience. AGS includes it regularly on Pattaya and Bangkok-extension golf programs.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Classic</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/thailand/siam-country-club/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://www.siamcountryclub.com/"]}
                name="Siam Country Club (Old Course)"
                description="The original heart of Thai golf — where the Honda LPGA has been played since 2006."
                url={"https://www.asiagolfspecialists.com/courses/thailand/siam-country-club/"}
                imageUrl={"/images/courses/thailand/siam-country-club/siam-country-club-old-course-pattaya-thailand-1.webp"}
                addressLocality={"Pattaya"}
                addressCountry={"TH"}
                numberOfHoles={18}
                courseLength={6990}
                par={72}
                designer="Schmidt-Curley (Redesign)"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Thailand", item: "https://www.asiagolfspecialists.com/destinations/thailand/" },
                    { name: "Thailand Courses", item: "https://www.asiagolfspecialists.com/destinations/thailand/courses/" },
                    { name: "Siam Country Club (Old Course)", item: "https://www.asiagolfspecialists.com/courses/thailand/siam-country-club/" },
                ]}
            />

            
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Siam Country Club (Old Course)</strong> is a premier Par 72 championship layout in Pattaya, Thailand, crafted by <strong>Schmidt-Curley (Redesign)</strong> (2007) and stretching to <strong>6,990 Yards</strong> across a classic parkland, mature trees environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its historic lpga tournament greens (Lightning fast putting surfaces) and strategic bunkering & mature tree line (Demanding driving accuracy).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Siam Country Club (Old Course) (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Thailand dry season. Our curatorial scorecard specifically notes its world-class caddie training & line reading (Tour-grade green readers), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Pattaya golf tour by AGS, Siam Country Club (Old Course) provides a distinct architectural test by Schmidt-Curley (Redesign) that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Siam Country Club (Old Course)"
    itemUrl="https://www.asiagolfspecialists.com/courses/thailand/siam-country-club/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/thailand/siam-country-club/siam-country-club-old-course-pattaya-thailand-1.webp"
    addressLocality="Pattaya"
    addressCountry="TH"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="Home of LPGA Thailand • Legendary Pattaya Complex"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Historic LPGA Tournament Greens",
            score: 9.9,
            highlight: "Lightning fast putting surfaces"
      },
      {
            label: "Strategic Bunkering & Mature Tree Line",
            score: 9.8,
            highlight: "Demanding driving accuracy"
      },
      {
            label: "World-Class Caddie Training & Line Reading",
            score: 9.8,
            highlight: "Tour-grade green readers"
      },
      {
            label: "5-Star Japanese-Influenced Clubhouse",
            score: 9.8,
            highlight: "Renowned dining & luxury baths"
      }
]}
    verdict="The spiritual home of tournament golf in Thailand. Host of the Honda LPGA Thailand, the Old Course offers lightning-fast putting surfaces and treacherous bunkers set against pristine floral landscaping."
  />


            <CourseFAQSection
                courseName="Siam Country Club (Old Course)"
                faqs={[
          {
                    "q": "What are the key course specifications for Siam Country Club (Old Course)?",
                    "a": "Siam Country Club (Old Course) in Pattaya, Thailand is a Par 72 championship layout designed by Schmidt-Curley (Redesign) (opened 2007), measuring 6,990 Yards within a classic parkland, mature trees setting. It is particularly noted for historic lpga tournament greens (Lightning fast putting surfaces)."
          },
          {
                    "q": "How do I secure tee times and caddies at Siam Country Club (Old Course)?",
                    "a": "Siam Country Club (Old Course) operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (world-class caddie training & line reading (Tour-grade green readers)), and private VIP transfers from your Pattaya hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Siam Country Club (Old Course)?",
                    "a": "Our field inspection highlights Siam Country Club (Old Course)'s strategic bunkering & mature tree line (Demanding driving accuracy) alongside historic lpga tournament greens (Lightning fast putting surfaces). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Siam Country Club (Old Course)?",
                    "a": "November through April is the prime season for Siam Country Club Pattaya."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/thailand/siam-country-club/" venueName="Siam Country Club (Old Course)" venueType="course" />
            <CourseNavigation
                prev={{ title: "Red Mountain Golf Club Phuket", path: "/courses/thailand/red-mountain/" }}
                next={{ title: "Springfield Royal Country Club", path: "/courses/thailand/springfield-royal/" }}
                country="Thailand"
                countryLink="/destinations/thailand/courses/"
            />
 

</main>
 );
}
