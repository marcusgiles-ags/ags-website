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
 title: { absolute: "Siem Reap Booyoung Country Club | Championship Cambodia" },
 description: "Play Siem Reap Booyoung Country Club — generous fairways and floral landscaping for excellent scoring and a relaxing round near Angkor Wat. Book with AGS.",
 keywords: ["Siem Reap Booyoung Country Club", "Siem Reap Golf Course", "Floral Golf Cambodia", "Angkor Golf Siem Reap", "Cambodia Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/cambodia/siem-reap-booyoung/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Siem Reap Booyoung Country Club | Championship Cambodia" },
        description: "Play Siem Reap Booyoung Country Club — generous fairways and floral landscaping for excellent scoring and a relaxing round near Angkor Wat. Book with AGS.",
        url: "https://www.asiagolfspecialists.com/courses/cambodia/siem-reap-booyoung/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/cambodia/siem-reap-booyoung/siem-reap-booyoung-country-club-cambodia-1.webp",
            width: 1200,
            height: 630,
            alt: "Siem Reap Booyoung Country Club | Floral Scoring Golf Cambodia — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Siem Reap Booyoung Country Club | Championship Cambodia" },
        description: "Play Siem Reap Booyoung Country Club — generous fairways and floral landscaping for excellent scoring and a relaxing round near Angkor Wat. Book with AGS.",
        images: ["https://www.asiagolfspecialists.com/images/courses/cambodia/siem-reap-booyoung/siem-reap-booyoung-country-club-cambodia-1.webp"],
    },
};

export default function SiemReapBooyoung() {
 const images = [
 { src: "/images/courses/cambodia/siem-reap-booyoung/siem-reap-booyoung-country-club-cambodia-1.webp", alt: "Siem Reap Booyoung Country Club Cambodia Floral Landscaping Aerial", caption: "Floral landscaping, Siem Reap Booyoung Golf" },
 { src: "/images/courses/cambodia/siem-reap-booyoung/siem-reap-booyoung-country-club-generous-fairway-2.webp", alt: "Siem Reap Booyoung Country Club Cambodia Generous Fairways Floral", caption: "Generous fairways with floral gardens" },
 { src: "/images/courses/cambodia/siem-reap-booyoung/siem-reap-booyoung-country-club-floral-3.webp", alt: "Siem Reap Booyoung Golf Club Cambodia Floral Gardens Hole", caption: "Floral garden hole, Siem Reap" },
 { src: "/images/courses/cambodia/siem-reap-booyoung/siem-reap-booyoung-country-club-green-4.webp", alt: "Siem Reap Booyoung Country Club Cambodia Championship Green", caption: "Championship green, Booyoung Golf" },
 { src: "/images/courses/cambodia/siem-reap-booyoung/siem-reap-booyoung-country-club-scenic-5.webp", alt: "Siem Reap Booyoung Country Club Cambodia Scenic Championship Hole", caption: "Scenic championship hole, Siem Reap" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Siem Reap Floral Classic</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Siem Reap Booyoung<br /><span className="text-gold">Country Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Cambodia&apos;s most welcoming scoring course — generous fairways framed by stunning floral gardens."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', 'Kentaro Sato'], ['Year Opened', '2009'], ['Location', 'Siem Reap, Cambodia'], ['Par', '72'], ['Length', '6,963 Yards (Blue Tees)'], ['Character', 'Generous fairways, floral landscaping'], ['Setting', 'Tropical, relaxing, scenic'], ['Appeal', 'All skill levels — excellent scoring rounds'], ['Access', 'Near Angkor Wat temples'], ['Top 100 Asia Ranking', <a href="https://www.top100golfcourses.com/golf-courses/asia/cambodia" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">#4 in Asia (2026)</a>]
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Siem Reap Booyoung Country Club occupies a welcoming position in Cambodia's golf landscape — a course designed for enjoyment first, where the generous fairway widths and thoughtful floral landscaping create a playing environment that is genuinely relaxing without sacrificing all scoring challenge. It is the course AGS recommends for groups looking to balance a great day of golf with beautiful surroundings and accessible playing conditions near the Angkor Wat temple complex.</p>
 <p>The floral landscaping at Booyoung is genuinely striking — tropical flowering plants and manicured garden borders give the course the visual warmth of a botanical garden, with the golf fairways threading through what feels at times like a cultivated flower estate rather than a conventional golf facility. The effect is immersive and deeply pleasant, creating an atmosphere of ease and calm that complements the cultural weight of the surrounding Siem Reap temple region.</p>
 <p>For international groups visiting Siem Reap with mixed-handicap compositions, where some players want maximum challenge (Angkor Golf Resort, Phokeethra) and others prefer a more rewarding social round, AGS often recommends Booyoung Country Club as the day where the group plays together comfortably. Everyone scores well, the environment is beautiful, and the post-round conversation over dinner focuses on temple experiences rather than golf frustrations.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Floral Garden</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/cambodia/siem-reap-booyoung/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://www.siemreapbooyounggolf.com/","https://www.top100golfcourses.com/golf-course/siem-reap-booyoung"]}
                name="Siem Reap Booyoung Country Club"
                description="Cambodia&apos;s most welcoming scoring course — generous fairways framed by stunning floral gardens."
                url={"https://www.asiagolfspecialists.com/courses/cambodia/siem-reap-booyoung/"}
                imageUrl={"/images/courses/cambodia/siem-reap-booyoung/siem-reap-booyoung-country-club-cambodia-1.webp"}
                addressLocality={"Siem Reap"}
                addressCountry={"KH"}
                numberOfHoles={18}
                courseLength={6963}
                par={72}
                designer="Kentaro Sato"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Cambodia", item: "https://www.asiagolfspecialists.com/destinations/cambodia/" },
                    { name: "Cambodia Courses", item: "https://www.asiagolfspecialists.com/destinations/cambodia/courses/" },
                    { name: "Siem Reap Booyoung Country Club", item: "https://www.asiagolfspecialists.com/courses/cambodia/siem-reap-booyoung/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Siem Reap Booyoung Country Club</strong> is a premier Par 72 championship layout in Siem Reap, Cambodia, crafted by <strong>Kentaro Sato</strong> (2009) and stretching to <strong>6,963 Yards (Blue Tees)</strong> across a tropical, relaxing, scenic environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its extensive floral landscaping & watercourses (Vibrant tropical garden feel) and strategic bunkering & elevated greens (Tests high-iron approaches).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Siem Reap Booyoung Country Club (Near Angkor Wat temples) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Cambodia dry season. Our curatorial scorecard specifically notes its caddie line-reading warmth (Polite and helpful advice), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Siem Reap golf tour by AGS, Siem Reap Booyoung Country Club provides a distinct architectural test by Kentaro Sato that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Siem Reap Booyoung Country Club"
    itemUrl="https://www.asiagolfspecialists.com/courses/cambodia/siem-reap-booyoung/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/cambodia/siem-reap-booyoung/siem-reap-booyoung-country-club-cambodia-1.webp"
    addressLocality="Siem Reap"
    addressCountry="KH"
    overallScore={4.6}
    maxScore={5.0}
    gradeBadge="Sato Kentaro Floral Championship • Siem Reap"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Extensive Floral Landscaping & Watercourses",
            score: 9.5,
            highlight: "Vibrant tropical garden feel"
      },
      {
            label: "Strategic Bunkering & Elevated Greens",
            score: 9.3,
            highlight: "Tests high-iron approaches"
      },
      {
            label: "Caddie Line-Reading Warmth",
            score: 9.4,
            highlight: "Polite and helpful advice"
      },
      {
            label: "Grand Korean-Style Clubhouse",
            score: 9.4,
            highlight: "Spacious lockers and saunas"
      }
]}
    verdict="Designed by renowned Japanese architect Sato Kentaro. Features dramatic water hazards, split fairways, and immaculate tropical floral landscaping just 15 minutes from Angkor Wat."
  />


            
 <VenueItineraries venueHref="/courses/cambodia/siem-reap-booyoung/" venueName="Siem Reap Booyoung Country Club" venueType="course" />

 <CourseFAQSection
                courseName="Siem Reap Booyoung Country Club"
                faqs={[
          {
                    "q": "What are the key course specifications for Siem Reap Booyoung Country Club?",
                    "a": "Siem Reap Booyoung Country Club in Siem Reap, Cambodia is a Par 72 championship layout designed by Kentaro Sato (opened 2009), measuring 6,963 Yards (Blue Tees) within a tropical, relaxing, scenic setting. It is particularly noted for extensive floral landscaping & watercourses (Vibrant tropical garden feel)."
          },
          {
                    "q": "How do I secure tee times and caddies at Siem Reap Booyoung Country Club?",
                    "a": "Siem Reap Booyoung Country Club operates under near angkor wat temples protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie line-reading warmth (Polite and helpful advice)), and private VIP transfers from your Siem Reap hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Siem Reap Booyoung Country Club?",
                    "a": "Our field inspection highlights Siem Reap Booyoung Country Club's strategic bunkering & elevated greens (Tests high-iron approaches) alongside extensive floral landscaping & watercourses (Vibrant tropical garden feel). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Siem Reap Booyoung Country Club?",
                    "a": "November through May is ideal for Siem Reap Booyoung Country Club."
          }
]}
            />
            <CourseNavigation
                prev={{ title: "Royal Phnom Penh Golf Club", path: "/courses/cambodia/royal-phnom-penh/" }}
                next={{ title: "Vattanac Golf Resort", path: "/courses/cambodia/vattanac/" }}
                country="Cambodia"
                countryLink="/destinations/cambodia/courses/"
            />
 

</main>
 );
}



