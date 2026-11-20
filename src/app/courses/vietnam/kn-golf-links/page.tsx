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
 title: { absolute: "KN Golf Links Cam Ranh | Greg Norman Scottish Links Vietnam" },
 description: "KN Golf Links Cam Ranh — a Greg Norman coastal masterpiece with ocean views on every hole near Nha Trang, Vietnam. Book with Asia Golf Specialists.",
 keywords: ["KN Golf Links Cam Ranh", "Greg Norman Golf Vietnam", "Cam Ranh Golf", "Scottish Links Vietnam", "Vietnam Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/kn-golf-links/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "KN Golf Links Cam Ranh | Greg Norman Scottish Links Vietnam" },
        description: "KN Golf Links Cam Ranh — a Greg Norman coastal masterpiece with ocean views on every hole near Nha Trang, Vietnam. Book with Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/kn-golf-links/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/kn-golf-links/kn-golf-links-cam-ranh-vietnam-1.webp",
            width: 1200,
            height: 630,
            alt: "KN Golf Links Cam Ranh | Greg Norman Scottish Links Vietnam — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "KN Golf Links Cam Ranh | Greg Norman Scottish Links Vietnam" },
        description: "KN Golf Links Cam Ranh — a Greg Norman coastal masterpiece with ocean views on every hole near Nha Trang, Vietnam. Book with Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/kn-golf-links/kn-golf-links-cam-ranh-vietnam-1.webp"],
    },
};

export default function KNGolfLinks() {
 const images = [
 { src: "/images/courses/vietnam/kn-golf-links/kn-golf-links-cam-ranh-vietnam-1.webp", alt: "KN Golf Links Cam Ranh Vietnam Aerial Greg Norman - Premium Southeast Asia Golf Tours 2026", caption: "Aerial view, KN Golf Links Cam Ranh" },
 { src: "/images/courses/vietnam/kn-golf-links/kn-golf-links-cam-ranh-dunes-2.webp", alt: "KN Golf Links Cam Ranh Vietnam Massive Dunes Links", caption: "Massive sand dunes, links-style layout" },
 { src: "/images/courses/vietnam/kn-golf-links/kn-golf-links-cam-ranh-ocean-3.webp", alt: "KN Golf Links Cam Ranh Vietnam Ocean View Links Hole", caption: "Ocean view links hole, Cam Ranh Bay" },
 { src: "/images/courses/vietnam/kn-golf-links/kn-golf-links-cam-ranh-scottish-4.webp", alt: "KN Golf Links Cam Ranh Vietnam Scottish Links Fairway", caption: "Scottish-style links fairway, KN Golf" },
 { src: "/images/courses/vietnam/kn-golf-links/kn-golf-links-cam-ranh-championship-5.webp", alt: "KN Golf Links Cam Ranh Vietnam Championship Course", caption: "Championship course, South China Sea" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Greg Norman Design</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>KN Golf Links<br /><span className="text-gold">Cam Ranh</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Scotland on the South China Sea — Greg Norman's most transportive design in Asia."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', <a href="https://gngcd.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">Greg Norman</a>], ['Year Opened', '2018'], ['Location', 'Cam Ranh Bay, Khanh Hoa'], ['Style', 'Scottish-inspired Links'], ['Par', '72'], ['Length', '6,345 Yards (Blue Tees)'], ['Setting', 'Massive coastal dunes'], ['Character', 'Wind-driven, firm and fast'], ['Top 100 Asia Ranking', <a href="https://www.top100golfcourses.com/golf-courses/asia/vietnam" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">#3 in Asia (2026)</a>]
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>KN Golf Links Cam Ranh is Greg Norman's tribute to the great links courses of Scotland, transplanted to one of Vietnam's most spectacular coastal landscapes. The massive natural dunes of Cam Ranh Bay provide genuine blind shots, wind exposure, and elevation changes that transport players to Ayrshire rather than Southeast Asia.</p>
 <p>Norman has routed the course through and over the natural terrain rather than flattening it, preserving the dramatic dune character that makes KN Golf Links one of the most distinctive playing experiences in Vietnam. The firm, fast conditions reward creative ground-game play over aerial assaults.</p>
 <p>AGS regularly builds Cam Ranh / Nha Trang itineraries pairing this course with beachside luxury resort stays — one of Vietnam's best golf and beach combinations for discerning travellers.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Dunes</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
  {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/vietnam/kn-golf-links/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://www.kn-golf-links.com/","https://www.top100golfcourses.com/golf-course/kn-golf-links"]}
                name="KN Golf Links Cam Ranh"
                description="Scotland on the South China Sea — Greg Norman's most transportive design in Asia."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/kn-golf-links/"}
                imageUrl={"/images/courses/vietnam/kn-golf-links/kn-golf-links-cam-ranh-vietnam-1.webp"}
                addressLocality={"Cam Ranh"}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={6345}
                par={72}
                designer="Greg Norman"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "KN Golf Links Cam Ranh", item: "https://www.asiagolfspecialists.com/courses/vietnam/kn-golf-links/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>KN Golf Links Cam Ranh</strong> is a premier Par 72 championship layout in Cam Ranh, Vietnam, crafted by <strong>Greg Norman</strong> (2018) and stretching to <strong>6,345 Yards (Blue Tees)</strong> across a massive coastal dunes environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its sandy turf conditioning & fast firm fairways (Zeon Zoysia on pure sand) and dramatic ocean dunes routing (Elevated tee shots over beach).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, KN Golf Links Cam Ranh (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie coastal reading & speed control (Excellent slope & wind advice), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Cam Ranh golf tour by AGS, KN Golf Links Cam Ranh provides a distinct architectural test by Greg Norman that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="KN Golf Links Cam Ranh"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/kn-golf-links/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/kn-golf-links/kn-golf-links-cam-ranh-vietnam-1.webp"
    addressLocality="Cam Ranh"
    addressCountry="VN"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="Cam Ranh Pure Coastal Links • Greg Norman"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Sandy Turf Conditioning & Fast Firm Fairways",
            score: 9.8,
            highlight: "Zeon Zoysia on pure sand"
      },
      {
            label: "Dramatic Ocean Dunes Routing",
            score: 9.7,
            highlight: "Elevated tee shots over beach"
      },
      {
            label: "Caddie Coastal Reading & Speed Control",
            score: 9.6,
            highlight: "Excellent slope & wind advice"
      },
      {
            label: "Club Facilities & Oasis 9-Hole Addition",
            score: 9.4,
            highlight: "Full 27-hole championship complex"
      }
]}
    verdict="Carved through expansive white sand dunes overlooking Cam Ranh Bay, KN Golf Links presents a pure Scottish-style test under tropical skies. Spectacular, fast-running, and impeccably maintained."
  />


            <CourseFAQSection
                courseName="KN Golf Links Cam Ranh"
                faqs={[
          {
                    "q": "What are the key course specifications for KN Golf Links Cam Ranh?",
                    "a": "KN Golf Links Cam Ranh in Cam Ranh, Vietnam is a Par 72 championship layout designed by Greg Norman (opened 2018), measuring 6,345 Yards (Blue Tees) within a massive coastal dunes setting. It is particularly noted for sandy turf conditioning & fast firm fairways (Zeon Zoysia on pure sand)."
          },
          {
                    "q": "How do I secure tee times and caddies at KN Golf Links Cam Ranh?",
                    "a": "KN Golf Links Cam Ranh operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie coastal reading & speed control (Excellent slope & wind advice)), and private VIP transfers from your Cam Ranh hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at KN Golf Links Cam Ranh?",
                    "a": "Our field inspection highlights KN Golf Links Cam Ranh's dramatic ocean dunes routing (Elevated tee shots over beach) alongside sandy turf conditioning & fast firm fairways (Zeon Zoysia on pure sand). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play KN Golf Links Cam Ranh?",
                    "a": "November through April is ideal for KN Golf Links Cam Ranh."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/kn-golf-links/" venueName="KN Golf Links Cam Ranh" venueType="course" />
            <CourseNavigation
                prev={{ title: "BRG Kings Island Golf Resort", path: "/courses/vietnam/kings-island/" }}
                next={{ title: "Laguna Golf Lang Co", path: "/courses/vietnam/laguna-lang-co/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
 );
}
