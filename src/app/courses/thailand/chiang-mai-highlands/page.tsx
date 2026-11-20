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
 title: { absolute: "Chiang Mai Highlands Golf Club | Thailand" },
 description: "Experience Chiang Mai Highlands Golf & Country Club. Lee Schmidt's design, spectacular mountain views. Book your Vietnam/Thailand golf tour with AGS.",
 keywords: ["Chiang Mai Highlands Golf Club", "Chiang Mai Golf Course", "Lee Schmidt Golf Thailand", "Mountain Golf Chiang Mai", "Thailand Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/thailand/chiang-mai-highlands/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Chiang Mai Highlands Golf Club | Thailand" },
        description: "Experience Chiang Mai Highlands Golf & Country Club. Lee Schmidt's design, spectacular mountain views. Book your Vietnam/Thailand golf tour with AGS.",
        url: "https://www.asiagolfspecialists.com/courses/thailand/chiang-mai-highlands/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/thailand/chiang-mai-highlands/chiang-mai-highlands-golf-country-club-thailand-1.webp",
            width: 1200,
            height: 630,
            alt: "Chiang Mai Highlands Golf Club | Lee Schmidt Mountain Views Thailand — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Chiang Mai Highlands Golf Club | Thailand" },
        description: "Experience Chiang Mai Highlands Golf & Country Club. Lee Schmidt's design, spectacular mountain views. Book your Vietnam/Thailand golf tour with AGS.",
        images: ["https://www.asiagolfspecialists.com/images/courses/thailand/chiang-mai-highlands/chiang-mai-highlands-golf-country-club-thailand-1.webp"],
    },
};

export default function ChiangMaiHighlands() {
 const images = [
 { src: "/images/courses/thailand/chiang-mai-highlands/chiang-mai-highlands-golf-country-club-thailand-1.webp", alt: "Chiang Mai Highlands Golf Country Club Thailand Lee Schmidt Aerial", caption: "Country Club Thailand Lee Schmidt Aerial" },
 { src: "/images/courses/thailand/chiang-mai-highlands/chiang-mai-highlands-mountain-view-2.webp", alt: "Chiang Mai Highlands Golf Thailand Mountain View Spectacular Tee", caption: "Thailand Mountain View Spectacular Tee" },
 { src: "/images/courses/thailand/chiang-mai-highlands/chiang-mai-highlands-rolling-hills-3.webp", alt: "Chiang Mai Highlands Golf Thailand Rolling Hills Fairway", caption: "Thailand Rolling Hills Fairway" },
 { src: "/images/courses/thailand/chiang-mai-highlands/chiang-mai-highlands-scenic-hole-4.webp", alt: "Chiang Mai Highlands Golf Thailand Scenic Hole Mountain Valley", caption: "Thailand Scenic Hole Mountain Valley" },
 { src: "/images/courses/thailand/chiang-mai-highlands/chiang-mai-highlands-championship-green-5.webp", alt: "Chiang Mai Highlands Golf Thailand Championship Green Northern", caption: "Thailand Championship Green" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Lee Schmidt Design</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Chiang Mai Highlands<br /><span className="text-gold">Golf & Country Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Every tee with a mountain panorama — Lee Schmidt's rolling highland masterpiece."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', <a href="https://www.schmidt-curley.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">Schmidt-Curley Design</a>], ['Year Opened', '2005'], ['Location', 'Mae On, Chiang Mai'], ['Par', '72'], ['Length', '6,872 Yards'], ['Setting', 'Rolling highland hills, mountain views'], ['Character', 'Scenic, hilly, panoramic']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Chiang Mai Highlands Golf & Country Club is one of the most visually spectacular courses in northern Thailand — a Lee Schmidt design that threads through rolling highland terrain east of Chiang Mai city, delivering mountain panoramas from virtually every tee box and approach shot on the course. The cool highland air, the dramatic elevation changes, and the quality of Schmidt's routing combine to create an experience that feels refreshingly different from lowland resort golf.</p>
 <p>Schmidt's design intelligence is evident in the way the course uses the natural terrain to create risk-reward moments without resorting to artificial obstacles — the hills themselves provide the strategic variety, with uphill approaches demanding extra club selection and downhill tee shots requiring precision placement for manageable approaches. The greens are consistently firm and fast, requiring subtle reads and controlled approaches.</p>
 <p>AGS pairs Chiang Mai Highlands regularly with Alpine Golf Resort Chiang Mai to create a compelling two-round Chiang Mai program — the valley character of Alpine contrasted with the highland panoramas of Highlands makes for a genuinely complete northern Thailand golf experience. Both courses are consistently rated among the best golf experiences available in Asia by top international golf media.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Highlands</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
  {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/thailand/chiang-mai-highlands/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://www.chiangmaihighlands.com/","https://www.top100golfcourses.com/golf-course/chiangmai-highlands"]}
                name="Chiang Mai Highlands Golf and Spa Resort"
                description="Every tee with a mountain panorama — Lee Schmidt's rolling highland masterpiece."
                url={"https://www.asiagolfspecialists.com/courses/thailand/chiang-mai-highlands/"}
                imageUrl={"/images/courses/thailand/chiang-mai-highlands/chiang-mai-highlands-golf-country-club-thailand-1.webp"}
                addressLocality={"Chiang Mai"}
                addressCountry={"TH"}
                numberOfHoles={18}
                courseLength={6872}
                par={72}
                designer="Schmidt-Curley Design"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Thailand", item: "https://www.asiagolfspecialists.com/destinations/thailand/" },
                    { name: "Thailand Courses", item: "https://www.asiagolfspecialists.com/destinations/thailand/courses/" },
                    { name: "Chiang Mai Highlands Golf and Spa Resort", item: "https://www.asiagolfspecialists.com/courses/thailand/chiang-mai-highlands/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Chiang Mai Highlands Golf and Spa Resort</strong> is a premier Par 72 championship layout in Chiang Mai, Thailand, crafted by <strong>Schmidt-Curley Design</strong> (2005) and stretching to <strong>6,872 Yards</strong> across a rolling highland hills, mountain views environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its panoramic mountain vistas & cool climate (1,000ft above sea level) and sculpted bunkers & paspalum turf quality (Deep flash-faced sand).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Chiang Mai Highlands Golf and Spa Resort (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Thailand dry season. Our curatorial scorecard specifically notes its exceptional friendly northern caddies (Voted best in Thailand), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Chiang Mai golf tour by AGS, Chiang Mai Highlands Golf and Spa Resort provides a distinct architectural test by Schmidt-Curley Design that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Chiang Mai Highlands Golf and Spa Resort"
    itemUrl="https://www.asiagolfspecialists.com/courses/thailand/chiang-mai-highlands/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/thailand/chiang-mai-highlands/chiang-mai-highlands-golf-country-club-thailand-1.webp"
    addressLocality="Chiang Mai"
    addressCountry="TH"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="Schmidt-Curley Mountain Jewel • Chiang Mai"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Panoramic Mountain Vistas & Cool Climate",
            score: 9.9,
            highlight: "1,000ft above sea level"
      },
      {
            label: "Sculpted Bunkers & Paspalum Turf Quality",
            score: 9.7,
            highlight: "Deep flash-faced sand"
      },
      {
            label: "Exceptional Friendly Northern Caddies",
            score: 9.7,
            highlight: "Voted best in Thailand"
      },
      {
            label: "27-Hole Award-Winning Layout",
            score: 9.6,
            highlight: "Valley, Highlands & Mountain"
      }
]}
    verdict="Consistently voted among the top golf experiences in Asia. Schmidt-Curley carved 27 majestic holes into the northern foothills, offering breathtaking views, cavernous bunkers, and cool highland breezes."
  />


            <CourseFAQSection
                courseName="Chiang Mai Highlands Golf and Spa Resort"
                faqs={[
          {
                    "q": "What are the key course specifications for Chiang Mai Highlands Golf and Spa Resort?",
                    "a": "Chiang Mai Highlands Golf and Spa Resort in Chiang Mai, Thailand is a Par 72 championship layout designed by Schmidt-Curley Design (opened 2005), measuring 6,872 Yards within a rolling highland hills, mountain views setting. It is particularly noted for panoramic mountain vistas & cool climate (1,000ft above sea level)."
          },
          {
                    "q": "How do I secure tee times and caddies at Chiang Mai Highlands Golf and Spa Resort?",
                    "a": "Chiang Mai Highlands Golf and Spa Resort operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (exceptional friendly northern caddies (Voted best in Thailand)), and private VIP transfers from your Chiang Mai hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Chiang Mai Highlands Golf and Spa Resort?",
                    "a": "Our field inspection highlights Chiang Mai Highlands Golf and Spa Resort's sculpted bunkers & paspalum turf quality (Deep flash-faced sand) alongside panoramic mountain vistas & cool climate (1,000ft above sea level). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Chiang Mai Highlands Golf and Spa Resort?",
                    "a": "November through April offers ideal highland conditions at Chiang Mai Highlands Golf."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/thailand/chiang-mai-highlands/" venueName="Chiang Mai Highlands Golf and Spa Resort" venueType="course" />
            <CourseNavigation
                prev={{ title: "Cascata Golf Club", path: "/courses/thailand/cascata/" }}
                next={{ title: "Flora Ville Golf & Country Club", path: "/courses/thailand/flora-ville/" }}
                country="Thailand"
                countryLink="/destinations/thailand/courses/"
            />
 

</main>
 );
}
