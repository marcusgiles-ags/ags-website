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
 title: { absolute: "Mission Hills Kanchanaburi | Thailand" },
 description: "Play Mission Hills Golf Club Kanchanaburi, a historic Jack Nicklaus design. Experience double-fairways & mountain scenery. Book your Golf Tour with AGS.",
 keywords: ["Mission Hills Golf Kanchanaburi", "River Kwai Golf Course", "Jack Nicklaus Golf Kanchanaburi", "Double Fairway Golf Thailand", "Thailand Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/thailand/mission-hills-kanchanaburi/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Mission Hills Kanchanaburi | Thailand" },
        description: "Play Mission Hills Golf Club Kanchanaburi, a historic Jack Nicklaus design. Experience double-fairways & mountain scenery. Book your Golf Tour with AGS.",
        url: "https://www.asiagolfspecialists.com/courses/thailand/mission-hills-kanchanaburi/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/thailand/mission-hills-kanchanaburi/mission-hills-kanchanaburi-golf-club-thailand-1.webp",
            width: 1200,
            height: 630,
            alt: "Mission Hills Golf Club Kanchanaburi | River Kwai Nicklaus Thailand — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Mission Hills Kanchanaburi | Thailand" },
        description: "Play Mission Hills Golf Club Kanchanaburi, a historic Jack Nicklaus design. Experience double-fairways & mountain scenery. Book your Golf Tour with AGS.",
        images: ["https://www.asiagolfspecialists.com/images/courses/thailand/mission-hills-kanchanaburi/mission-hills-kanchanaburi-golf-club-thailand-1.webp"],
    },
};

export default function MissionHillsKanchanaburi() {
 const images = [
 { src: "/images/courses/thailand/mission-hills-kanchanaburi/mission-hills-kanchanaburi-golf-club-thailand-1.webp", alt: "Mission Hills Golf Club Kanchanaburi Thailand River Kwai Nicklaus Aerial", caption: "Mission Hills Golf Club Kanchanaburi Thailand River Kwai Nicklaus Aerial" },
 { src: "/images/courses/thailand/mission-hills-kanchanaburi/mission-hills-kanchanaburi-river-kwai-2.webp", alt: "Mission Hills Kanchanaburi Thailand River Kwai Golf Course Mountain", caption: "Mission Hills Kanchanaburi Thailand River Kwai Golf Course Mountain" },
 { src: "/images/courses/thailand/mission-hills-kanchanaburi/mission-hills-kanchanaburi-double-fairway-3.webp", alt: "Mission Hills Kanchanaburi Thailand Double Fairway Championship Nicklaus", caption: "Mission Hills Kanchanaburi Thailand Double Fairway Championship Nicklaus" },
 { src: "/images/courses/thailand/mission-hills-kanchanaburi/mission-hills-kanchanaburi-mountain-scenery-4.webp", alt: "Mission Hills Kanchanaburi Thailand Mountain Scenery Golf Hole", caption: "Mission Hills Kanchanaburi Thailand Mountain Scenery Golf Hole" },
 { src: "/images/courses/thailand/mission-hills-kanchanaburi/mission-hills-kanchanaburi-championship-green-5.webp", alt: "Mission Hills Golf Kanchanaburi Thailand Championship Green", caption: "Thailand Championship Green" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Jack Nicklaus River Kwai</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Mission Hills Golf Club<br /><span className="text-gold">Kanchanaburi</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"On the banks of the River Kwai — Nicklaus's double-fairway design amid mountain drama."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', <a href="https://nicklausdesign.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">Jack Nicklaus</a>], ['Year Opened', '1990'], ['Location', 'Kanchanaburi (River Kwai region)'], ['Par', '72'], ['Length', '6,364 Yards (Blue Tees)'], ['Setting', 'Mountain scenery, River Kwai valley'], ['Signature Feature', 'Double-fairways on multiple holes'], ['Distinction', 'Most scenic drive from Bangkok (3hrs)']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Mission Hills Golf Club Kanchanaburi represents something genuinely different from the Bangkok region's conventional golf offer — a Jack Nicklaus design positioned deep in the Kwai River valley, surrounded by dramatic limestone mountain ranges, and featuring the signature double-fairway concept that Nicklaus employed here to give golfers genuine strategic choice on every tee.</p>
 <p>The double-fairway format means most holes present two defined landing corridors — one conservative and wide, one aggressive and rewarding — with the approach angle varying significantly depending on which route the player takes. It is a genuinely strategic design that rewards decisive course management and punishes indecision more sharply than conventional layouts.</p>
 <p>For discerning golfers who want to combine their Thailand golf trip with a River Kwai historical experience — the Bridge, the Death Railway, the JEATH War Museum — AGS builds comprehensive Kanchanaburi programs where Mission Hills serves as the centrepiece sporting activity. It is one of the most uniquely situated courses in Asia.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">River Kwai</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/thailand/mission-hills-kanchanaburi/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://www.missionhillsgolfclub.com/kanchanaburi/"]}
                name="Mission Hills Kanchanaburi"
                description="On the banks of the River Kwai — Nicklaus's double-fairway design amid mountain drama."
                url={"https://www.asiagolfspecialists.com/courses/thailand/mission-hills-kanchanaburi/"}
                imageUrl={"/images/courses/thailand/mission-hills-kanchanaburi/mission-hills-kanchanaburi-golf-club-thailand-1.webp"}
                addressLocality={"Kanchanaburi"}
                addressCountry={"TH"}
                numberOfHoles={18}
                courseLength={6364}
                par={72}
                designer="Jack Nicklaus"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Thailand", item: "https://www.asiagolfspecialists.com/destinations/thailand/" },
                    { name: "Thailand Courses", item: "https://www.asiagolfspecialists.com/destinations/thailand/courses/" },
                    { name: "Mission Hills Kanchanaburi", item: "https://www.asiagolfspecialists.com/courses/thailand/mission-hills-kanchanaburi/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Mission Hills Kanchanaburi</strong> is a premier Par 72 championship layout in Kanchanaburi, Thailand, crafted by <strong>Jack Nicklaus</strong> (1990) and stretching to <strong>6,364 Yards (Blue Tees)</strong> across a mountain scenery, river kwai valley environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its river kwai mountain drama (Serene mountain ridges) and expansive waste bunkers & water hazards (Golden Bear signatures).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Mission Hills Kanchanaburi (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Thailand dry season. Our curatorial scorecard specifically notes its caddie local knowledge & lines (Dependable club advice), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Kanchanaburi golf tour by AGS, Mission Hills Kanchanaburi provides a distinct architectural test by Jack Nicklaus that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Mission Hills Kanchanaburi"
    itemUrl="https://www.asiagolfspecialists.com/courses/thailand/mission-hills-kanchanaburi/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/thailand/mission-hills-kanchanaburi/mission-hills-kanchanaburi-golf-club-thailand-1.webp"
    addressLocality="Kanchanaburi"
    addressCountry="TH"
    overallScore={4.6}
    maxScore={5.0}
    gradeBadge="Jack Nicklaus River Kwai Setting • Kanchanaburi"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "River Kwai Mountain Drama",
            score: 9.6,
            highlight: "Serene mountain ridges"
      },
      {
            label: "Expansive Waste Bunkers & Water Hazards",
            score: 9.4,
            highlight: "Golden Bear signatures"
      },
      {
            label: "Caddie Local Knowledge & Lines",
            score: 9.2,
            highlight: "Dependable club advice"
      },
      {
            label: "Historic Countryside Escape",
            score: 9.3,
            highlight: "Historic River Kwai backdrop"
      }
]}
    verdict="A rugged Jack Nicklaus layout set against the dramatic mountain ranges of Kanchanaburi. Expansive waste bunkers and palm-fringed fairways create a classic countryside championship feel."
  />


            <CourseFAQSection
                courseName="Mission Hills Kanchanaburi"
                faqs={[
          {
                    "q": "What are the key course specifications for Mission Hills Kanchanaburi?",
                    "a": "Mission Hills Kanchanaburi in Kanchanaburi, Thailand is a Par 72 championship layout designed by Jack Nicklaus (opened 1990), measuring 6,364 Yards (Blue Tees) within a mountain scenery, river kwai valley setting. It is particularly noted for river kwai mountain drama (Serene mountain ridges)."
          },
          {
                    "q": "How do I secure tee times and caddies at Mission Hills Kanchanaburi?",
                    "a": "Mission Hills Kanchanaburi operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie local knowledge & lines (Dependable club advice)), and private VIP transfers from your Kanchanaburi hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Mission Hills Kanchanaburi?",
                    "a": "Our field inspection highlights Mission Hills Kanchanaburi's expansive waste bunkers & water hazards (Golden Bear signatures) alongside river kwai mountain drama (Serene mountain ridges). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Mission Hills Kanchanaburi?",
                    "a": "November through April is ideal for Mission Hills Golf Club Kanchanaburi."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/thailand/mission-hills-kanchanaburi/" venueName="Mission Hills Kanchanaburi" venueType="course" />
            <CourseNavigation
                prev={{ title: "Mae Jo Golf Club", path: "/courses/thailand/mae-jo/" }}
                next={{ title: "Mission Hills Phuket Golf Club", path: "/courses/thailand/mission-hills-phuket/" }}
                country="Thailand"
                countryLink="/destinations/thailand/courses/"
            />
 

</main>
 );
}
