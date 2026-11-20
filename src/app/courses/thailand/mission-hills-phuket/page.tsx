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
 title: "Mission Hills Phuket Golf Club",
 description: "Experience Mission Hills Phuket Golf Resort, a Nicklaus-designed 18-hole course. World-class facilities. Book your Vietnam/Thailand golf tour!",
 keywords: ["Mission Hills Golf Club Phuket", "Phuket Oceanfront Golf", "Jack Nicklaus Golf Thailand", "Andaman Sea Golf", "Thailand Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/thailand/mission-hills-phuket/",
    },
    openGraph: {
        type: "website",
        title: "Mission Hills Phuket Golf Club",
        description: "Experience Mission Hills Phuket Golf Resort, a Nicklaus-designed 18-hole course. World-class facilities. Book your Vietnam/Thailand golf tour!",
        url: "https://www.asiagolfspecialists.com/courses/thailand/mission-hills-phuket/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/thailand/mission-hills-phuket/mission-hills-golf-phuket-thailand-1.webp",
            width: 1200,
            height: 630,
            alt: "Mission Hills Golf Club Phuket | Nicklaus Oceanfront Andaman Views — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Mission Hills Phuket Golf Club",
        description: "Experience Mission Hills Phuket Golf Resort, a Nicklaus-designed 18-hole course. World-class facilities. Book your Vietnam/Thailand golf tour!",
        images: ["https://www.asiagolfspecialists.com/images/courses/thailand/mission-hills-phuket/mission-hills-golf-phuket-thailand-1.webp"],
    },
};

export default function MissionHillsPhuket() {
 const images = [
 { src: "/images/courses/thailand/mission-hills-phuket/mission-hills-golf-phuket-thailand-1.webp", alt: "Mission Hills Golf Club Phuket Thailand Oceanfront Nicklaus Aerial Andaman", caption: "Mission Hills Golf Club Phuket Thailand Oceanfront Nicklaus Aerial Andaman" },
 { src: "/images/courses/thailand/mission-hills-phuket/mission-hills-golf-phuket-andaman-2.webp", alt: "Mission Hills Golf Phuket Thailand Andaman Sea Ocean View Hole", caption: "Mission Hills Golf Phuket Thailand Andaman Sea Ocean View Hole" },
 { src: "/images/courses/thailand/mission-hills-phuket/mission-hills-golf-phuket-oceanfront-3.webp", alt: "Mission Hills Golf Phuket Thailand Oceanfront Hole Nicklaus Design", caption: "Mission Hills Golf Phuket Thailand Oceanfront Hole Nicklaus Design" },
 { src: "/images/courses/thailand/mission-hills-phuket/mission-hills-golf-phuket-spectacular-4.webp", alt: "Mission Hills Golf Phuket Thailand Spectacular Island Hole Championship", caption: "Mission Hills Golf Phuket Thailand Spectacular Island Hole Championship" },
 { src: "/images/courses/thailand/mission-hills-phuket/mission-hills-golf-phuket-championship-5.webp", alt: "Mission Hills Golf Phuket Thailand Championship Green Andaman", caption: "Mission Hills Golf Phuket Thailand Championship Green Andaman" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Jack Nicklaus Design</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Mission Hills Golf Club<br /><span className="text-gold">Phuket</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Phuket's only oceanfront course — Jack Nicklaus and the Andaman Sea in perfect dialogue."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', <a href="https://nicklausdesign.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">Jack Nicklaus</a>], ['Year Opened', '2004'], ['Location', 'Sakhu, Phuket'], ['Par', '72'], ['Setting', 'Oceanfront, Andaman Sea views'], ['Length', '7,005 Yards'], ['Distinction', 'Phuket\'s only true oceanfront course']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Mission Hills Golf Club Phuket holds a unique distinction on the island — it is the only course where the Andaman Sea appears as a genuine backdrop to multiple holes, making it the closest thing to true ocean-front golf that Phuket offers. Jack Nicklaus's design responds to this advantage intelligently, routing the back nine along the coastline to maximise sea exposure on approach shots and from elevated tee positions.</p>
 <p>The course quality is world-class, with bentgrass greens, well-defined fairway corridors, and premium conditioning that matches Phuket's most celebrated facilities. Nicklaus's strategic philosophy of rewarding proper positioning over raw distance plays out across all 18 holes, making it a course where course management determines scores as much as ball-striking.</p>
 <p>For discerning golfers who want Phuket's premium oceanfront experience alongside championship-standard golf, Mission Hills Phuket is the definitive answer. AGS pairs it with Red Mountain and Blue Canyon for a complete Phuket golf trilogy that showcases the full range of what the island offers.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Ocean</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
  {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/thailand/mission-hills-phuket/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://www.missionhillsphuket.com/"]}
                name="Mission Hills Phuket Golf Resort"
                description="Phuket's only oceanfront course — Jack Nicklaus and the Andaman Sea in perfect dialogue."
                url={"https://www.asiagolfspecialists.com/courses/thailand/mission-hills-phuket/"}
                imageUrl={"/images/courses/thailand/mission-hills-phuket/mission-hills-golf-phuket-thailand-1.webp"}
                addressLocality={"Phuket"}
                addressCountry={"TH"}
                numberOfHoles={18}
                courseLength={7005}
                par={72}
                designer="Jack Nicklaus"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Thailand", item: "https://www.asiagolfspecialists.com/destinations/thailand/" },
                    { name: "Thailand Courses", item: "https://www.asiagolfspecialists.com/destinations/thailand/courses/" },
                    { name: "Mission Hills Phuket Golf Resort", item: "https://www.asiagolfspecialists.com/courses/thailand/mission-hills-phuket/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Mission Hills Phuket Golf Resort</strong> is a premier Par 72 championship layout in Phuket, Thailand, crafted by <strong>Jack Nicklaus</strong> (2004) and stretching to <strong>7,005 Yards</strong> across a oceanfront, andaman sea views environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its mangrove forest & sea-view holes (Over Phang Nga Bay waters) and dual paspalum green targets (Twin greens on coastal holes).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Mission Hills Phuket Golf Resort (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Thailand dry season. Our curatorial scorecard specifically notes its caddie ocean breeze calculation (Essential in crosswinds), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Phuket golf tour by AGS, Mission Hills Phuket Golf Resort provides a distinct architectural test by Jack Nicklaus that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Mission Hills Phuket Golf Resort"
    itemUrl="https://www.asiagolfspecialists.com/courses/thailand/mission-hills-phuket/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/thailand/mission-hills-phuket/mission-hills-golf-phuket-thailand-1.webp"
    addressLocality="Phuket"
    addressCountry="TH"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Jack Nicklaus Mangrove Ocean Frontage • Phuket"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Mangrove Forest & Sea-View Holes",
            score: 9.7,
            highlight: "Over Phang Nga Bay waters"
      },
      {
            label: "Dual Paspalum Green Targets",
            score: 9.4,
            highlight: "Twin greens on coastal holes"
      },
      {
            label: "Caddie Ocean Breeze Calculation",
            score: 9.4,
            highlight: "Essential in crosswinds"
      },
      {
            label: "High-End Island Clubhouse",
            score: 9.4,
            highlight: "Beachfront dining & pool"
      }
]}
    verdict="Jack Nicklaus engineered several signature ocean holes playing directly over the azure waters of Phang Nga Bay and coastal mangrove flats. Stunning photography and island drama."
  />


            <CourseFAQSection
                courseName="Mission Hills Phuket Golf Resort"
                faqs={[
          {
                    "q": "What are the key course specifications for Mission Hills Phuket Golf Resort?",
                    "a": "Mission Hills Phuket Golf Resort in Phuket, Thailand is a Par 72 championship layout designed by Jack Nicklaus (opened 2004), measuring 7,005 Yards within a oceanfront, andaman sea views setting. It is particularly noted for mangrove forest & sea-view holes (Over Phang Nga Bay waters)."
          },
          {
                    "q": "How do I secure tee times and caddies at Mission Hills Phuket Golf Resort?",
                    "a": "Mission Hills Phuket Golf Resort operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie ocean breeze calculation (Essential in crosswinds)), and private VIP transfers from your Phuket hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Mission Hills Phuket Golf Resort?",
                    "a": "Our field inspection highlights Mission Hills Phuket Golf Resort's dual paspalum green targets (Twin greens on coastal holes) alongside mangrove forest & sea-view holes (Over Phang Nga Bay waters). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Mission Hills Phuket Golf Resort?",
                    "a": "November through April is the prime season for Mission Hills Phuket Golf Club."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/thailand/mission-hills-phuket/" venueName="Mission Hills Phuket Golf Resort" venueType="course" />
            <CourseNavigation
                prev={{ title: "Mission Hills Kanchanaburi", path: "/courses/thailand/mission-hills-kanchanaburi/" }}
                next={{ title: "Nikanti Golf Club Bangkok", path: "/courses/thailand/nikanti/" }}
                country="Thailand"
                countryLink="/destinations/thailand/courses/"
            />
 

</main>
 );
}
