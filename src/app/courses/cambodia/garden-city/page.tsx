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
 title: { absolute: "Garden City Golf Club | Phnom Penh" },
 description: "Play Garden City Golf Club Phnom Penh — IMG-managed facility known for undulating greens and professional-level challenge. Book with Asia Golf Specialists.",
 keywords: ["Garden City Golf Club Phnom Penh", "Phnom Penh Golf Course", "IMG Golf Cambodia", "Championship Golf Cambodia", "Cambodia Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/cambodia/garden-city/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Garden City Golf Club | Phnom Penh" },
        description: "Play Garden City Golf Club Phnom Penh — IMG-managed facility known for undulating greens and professional-level challenge. Book with Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/courses/cambodia/garden-city/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/cambodia/garden-city/garden-city-golf-club-phnom-penh-cambodia-1.webp",
            width: 1200,
            height: 630,
            alt: "Garden City Golf Club Phnom Penh | IMG Managed Championship Cambodia — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Garden City Golf Club | Phnom Penh" },
        description: "Play Garden City Golf Club Phnom Penh — IMG-managed facility known for undulating greens and professional-level challenge. Book with Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/courses/cambodia/garden-city/garden-city-golf-club-phnom-penh-cambodia-1.webp"],
    },
};

export default function GardenCityGolfClub() {
 const images = [
 { src: "/images/courses/cambodia/garden-city/garden-city-golf-club-phnom-penh-cambodia-1.webp", alt: "Garden City Golf Club Phnom Penh Cambodia IMG Aerial", caption: "Aerial view, Garden City Golf Club" },
 { src: "/images/courses/cambodia/garden-city/garden-city-golf-club-undulating-greens-2.webp", alt: "Garden City Golf Club Cambodia Phnom Penh Undulating Greens Championship Hole", caption: "Undulating greens, Garden City Golf" },
 { src: "/images/courses/cambodia/garden-city/garden-city-golf-club-professional-3.webp", alt: "Garden City Golf Club Cambodia Phnom Penh Professional Layout Fairway", caption: "Professional layout fairway, Phnom Penh" },
 { src: "/images/courses/cambodia/garden-city/garden-city-golf-club-water-4.webp", alt: "Garden City Golf Club Phnom Penh Cambodia Water Hazard Championship", caption: "Water hazard championship hole" },
 { src: "/images/courses/cambodia/garden-city/garden-city-golf-club-signature-5.webp", alt: "Garden City Golf Club Cambodia Phnom Penh Signature Hole Championship", caption: "Signature championship hole, Garden City" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — IMG Managed</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Garden City<br /><span className="text-gold">Golf Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"IMG-managed precision golf — wide fairways and championship greens that reward the professional mind."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 174, 55, 0.2)' }}><tbody>
 {[
    ['Designer', 'Weerayudth Phetbuasak'], ['Year Opened', '2013'], ['Location', 'Phnom Penh, Cambodia'], ['Manager', 'IMG (International Management Group)'], ['Par', '72'], ['Length', '6,215 Yards (Blue Tees)'], ['Character', 'Open, undulating greens, professional challenge'], ['Holes', '18'], ['Access', 'Public — centrally accessible in Phnom Penh'], ['Top 100 Asia Ranking', <a href="https://www.top100golfcourses.com/golf-courses/asia/cambodia" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">#2 in Asia (2026)</a>]
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Garden City Golf Club is Phnom Penh's most professionally structured golf operation — managed by IMG, one of global golf's most respected event and facility management organisations, the course operates to management standards and conditioning protocols consistent with internationally recognised professional events rather than the casual resort approaches typical of the regional market.</p>
 <p>The course design itself emphasises openness and variety: generous fairway widths accommodate players of all abilities off the tee, while the undulating greens — which slope and contour in ways that create genuine three-putt risk for casual readers — provide the precision challenge that rewards thorough course reconnaissance and disciplined putting stroke execution. The overall experience is one of professional-grade golf delivered with the hospitality warmth that Cambodia does so naturally well.</p>
 <p>For discerning golfers visiting Phnom Penh, Garden City Golf Club provides an excellent standalone round or an ideal companion to the Chhun On facility — the different design characters of the two courses create a satisfying Phnom Penh two-round combination. AGS regularly pairs these venues for clients spending two or more days in the capital.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Garden City</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/cambodia/garden-city/"
  />
  </div>
  </section>
            <CourseSchemaBlock
                name="Garden City Golf Club"
                description="IMG-managed precision golf — wide fairways and championship greens that reward the professional mind."
                url={"https://www.asiagolfspecialists.com/courses/cambodia/garden-city/"}
                imageUrl={"/images/courses/cambodia/garden-city/garden-city-golf-club-phnom-penh-cambodia-1.webp"}
                addressLocality={"Phnom Penh"}
                addressCountry={"KH"}
                numberOfHoles={18}
                courseLength={6215}
                par={72}
                designer="Weerayudth Phetbuasak"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Cambodia", item: "https://www.asiagolfspecialists.com/destinations/cambodia/" },
                    { name: "Cambodia Courses", item: "https://www.asiagolfspecialists.com/destinations/cambodia/courses/" },
                    { name: "Garden City Golf Club", item: "https://www.asiagolfspecialists.com/courses/cambodia/garden-city/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Garden City Golf Club</strong> is a premier Par 72 championship layout in Phnom Penh, Cambodia, crafted by <strong>Weerayudth Phetbuasak</strong> (2013) and stretching to <strong>6,215 Yards (Blue Tees)</strong> across a championship layout environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its expansive lakes & rolling mounds (Generous watery corridors) and tour-caliber fairway carpets (Firm, responsive turf).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Garden City Golf Club (Public — centrally accessible in Phnom Penh) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Cambodia dry season. Our curatorial scorecard specifically notes its experienced caddie guidance (Accurate water lines), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Phnom Penh golf tour by AGS, Garden City Golf Club provides a distinct architectural test by Weerayudth Phetbuasak that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Garden City Golf Club"
    itemUrl="https://www.asiagolfspecialists.com/courses/cambodia/garden-city/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/cambodia/garden-city/garden-city-golf-club-phnom-penh-cambodia-1.webp"
    addressLocality="Phnom Penh"
    addressCountry="KH"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Weerayudth Phetbuasak Lake Challenge • Phnom Penh"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Expansive Lakes & Rolling Mounds",
            score: 9.6,
            highlight: "Generous watery corridors"
      },
      {
            label: "Tour-Caliber Fairway Carpets",
            score: 9.5,
            highlight: "Firm, responsive turf"
      },
      {
            label: "Experienced Caddie Guidance",
            score: 9.4,
            highlight: "Accurate water lines"
      },
      {
            label: "Integrated 5-Star Resort & Spa Hotel",
            score: 9.5,
            highlight: "Full resort amenities"
      }
]}
    verdict="Set on the northern outskirts of Phnom Penh, Garden City features broad fairways guarded by large water reservoirs and slick undulating greens. Impeccably conditioned year-round."
  />


            <CourseFAQSection
                courseName="Garden City Golf Club"
                faqs={[
          {
                    "q": "What are the key course specifications for Garden City Golf Club?",
                    "a": "Garden City Golf Club in Phnom Penh, Cambodia is a Par 72 championship layout designed by Weerayudth Phetbuasak (opened 2013), measuring 6,215 Yards (Blue Tees) within a championship layout setting. It is particularly noted for expansive lakes & rolling mounds (Generous watery corridors)."
          },
          {
                    "q": "How do I secure tee times and caddies at Garden City Golf Club?",
                    "a": "Garden City Golf Club operates under public — centrally accessible in phnom penh protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (experienced caddie guidance (Accurate water lines)), and private VIP transfers from your Phnom Penh hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Garden City Golf Club?",
                    "a": "Our field inspection highlights Garden City Golf Club's tour-caliber fairway carpets (Firm, responsive turf) alongside expansive lakes & rolling mounds (Generous watery corridors). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Garden City Golf Club?",
                    "a": "November through May is the prime season for Garden City Golf Club Phnom Penh."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/cambodia/garden-city/" venueName="Garden City Golf Club" venueType="course" />
            <CourseNavigation
                prev={{ title: "Chhun On Golf Resort", path: "/courses/cambodia/chhun-on-golf-resort/" }}
                next={{ title: "Grand Phnom Penh Golf Club", path: "/courses/cambodia/grand-phnom-penh/" }}
                country="Cambodia"
                countryLink="/destinations/cambodia/courses/"
            />
 

</main>
 );
}



