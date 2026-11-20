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
 title: "Vattanac Golf Resort East Course",
 description: "Vattanac Golf Resort East Course Phnom Penh — championship 18-hole layout within Cambodia's premier 36-hole complex near the capital.",
 keywords: ["Vattanac Golf Resort East Course", "Phnom Penh Golf Course", "Nick Faldo Golf Cambodia", "Vattanac Golf Cambodia", "Cambodia Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/cambodia/vattanac-east/",
    },
    openGraph: {
        type: "website",
        title: "Vattanac Golf Resort East Course",
        description: "Vattanac Golf Resort East Course Phnom Penh — championship 18-hole layout within Cambodia's premier 36-hole complex near the capital.",
        url: "https://www.asiagolfspecialists.com/courses/cambodia/vattanac-east/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/cambodia/vattanac-east/vattanac-golf-resort-east-course-cambodia-1.webp",
            width: 1200,
            height: 630,
            alt: "Vattanac Golf Resort East Course | Nick Faldo Angkor Sculptures Cambodia — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Vattanac Golf Resort East Course",
        description: "Vattanac Golf Resort East Course Phnom Penh — championship 18-hole layout within Cambodia's premier 36-hole complex near the capital.",
        images: ["https://www.asiagolfspecialists.com/images/courses/cambodia/vattanac-east/vattanac-golf-resort-east-course-cambodia-1.webp"],
    },
};

export default function VattanacEast() {
 const images = [
 { src: "/images/courses/cambodia/vattanac-east/vattanac-golf-resort-east-course-cambodia-1.webp", alt: "Vattanac Golf Resort East Course Cambodia Nick Faldo Angkor Aerial", caption: "Aerial view, Vattanac East Course" },
 { src: "/images/courses/cambodia/vattanac-east/vattanac-golf-resort-east-angkor-sculpture-2.webp", alt: "Vattanac Golf Cambodia East Course Pre-Angkorean Sculpture Faldo", caption: "Pre-Angkorean sculpture feature, Vattanac" },
 { src: "/images/courses/cambodia/vattanac-east/vattanac-golf-resort-east-championship-3.webp", alt: "Vattanac Golf Resort East Course Cambodia Championship Hole Fairway", caption: "Championship hole, Vattanac East Course" },
 { src: "/images/courses/cambodia/vattanac-east/vattanac-golf-resort-east-public-layout-4.webp", alt: "Vattanac Golf Cambodia East Course Public Epic Layout Championship", caption: "Epic layout, Vattanac East Championship" },
 { src: "/images/courses/cambodia/vattanac-east/vattanac-golf-resort-east-green-5.webp", alt: "Vattanac Golf Resort Cambodia East Championship Green", caption: "Championship green, Vattanac East" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Nick Faldo Design</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Vattanac Golf Resort<br /><span className="text-gold">East Course</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Faldo&apos;s Khmer epic — Pre-Angkorean temple sculptures set within a championship layout."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', <a href="https://nickfaldodesign.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">Sir Nick Faldo</a>], ['Year Opened', '2019'], ['Location', 'Phnom Penh, Cambodia'], ['Par', '72'], ['Length', '6,401 Yards (Blue Tees)'], ['Type', 'Public course'], ['Setting', 'Pre-Angkorean sculpture features throughout'], ['Companion', 'Vattanac West Course (private members)']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Vattanac Golf Resort East Course is one of the most culturally immersive golf experiences available anywhere in Asia — a Sir Nick Faldo design that integrates scale reproductions of Pre-Angkorean architectural structures throughout the course, creating an outdoor gallery of Khmer heritage that is as educationally extraordinary as it is visually stunning. Golfers encounter these sculptural features at tee boxes, along fairway corridors, and near greens throughout the round.</p>
 <p>Faldo's routing on the East Course is designed to showcase these cultural landmarks at their most dramatic — elevated tee positions provide perspective on the scale of the sculptures, and approach shots framed by temple structures create photographs that no conventional golf course can rival. The golf itself is a genuine championship examination: accurate iron play is rewarded, while spray shots encounter both the sculptural features and the natural bunkering that characterises Faldo's design style globally.</p>
 <p>As a public-access layout, the East Course provides visiting discerning golfers with a genuine Faldo design experience at Cambodia's most prestigious resort address. AGS views this course as an essential component of any Phnom Penh golf program — the combination of championship golf quality and Cambodian cultural immersion is unmatched anywhere else in the country.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Khmer</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/cambodia/vattanac-east/"
  />
  </div>
  </section>
            <CourseSchemaBlock
                name="Vattanac Golf Resort (East Course)"
                description="Faldo&apos;s Khmer epic — Pre-Angkorean temple sculptures set within a championship layout."
                url={"https://www.asiagolfspecialists.com/courses/cambodia/vattanac-east/"}
                imageUrl={"/images/courses/cambodia/vattanac-east/vattanac-golf-resort-east-course-cambodia-1.webp"}
                addressLocality={"Phnom Penh"}
                addressCountry={"KH"}
                numberOfHoles={18}
                courseLength={6401}
                par={72}
                designer="Sir Nick Faldo"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Cambodia", item: "https://www.asiagolfspecialists.com/destinations/cambodia/" },
                    { name: "Cambodia Courses", item: "https://www.asiagolfspecialists.com/destinations/cambodia/courses/" },
                    { name: "Vattanac Golf Resort (East Course)", item: "https://www.asiagolfspecialists.com/courses/cambodia/vattanac-east/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Vattanac Golf Resort (East Course)</strong> is a premier Par 72 championship layout in Phnom Penh, Cambodia, crafted by <strong>Sir Nick Faldo</strong> (2019) and stretching to <strong>6,401 Yards (Blue Tees)</strong> across a pre-angkorean sculpture features throughout environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its scale landmark sculptures & water features (Angkor Wat replica holes) and water hazard placement & strategy (Dramatic carries and margins).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Vattanac Golf Resort (East Course) (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Cambodia dry season. Our curatorial scorecard specifically notes its caddie distance precision (Sharp yardage readings), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Phnom Penh golf tour by AGS, Vattanac Golf Resort (East Course) provides a distinct architectural test by Sir Nick Faldo that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Vattanac Golf Resort (East Course)"
    itemUrl="https://www.asiagolfspecialists.com/courses/cambodia/vattanac-east/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/cambodia/vattanac-east/vattanac-golf-resort-east-course-cambodia-1.webp"
    addressLocality="Phnom Penh"
    addressCountry="KH"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="Sir Nick Faldo East Course • Phnom Penh"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Scale Landmark Sculptures & Water Features",
            score: 9.9,
            highlight: "Angkor Wat replica holes"
      },
      {
            label: "Water Hazard Placement & Strategy",
            score: 9.8,
            highlight: "Dramatic carries and margins"
      },
      {
            label: "Caddie Distance Precision",
            score: 9.7,
            highlight: "Sharp yardage readings"
      },
      {
            label: "PGA-Level Practice & Dining Facilities",
            score: 9.8,
            highlight: "Opulent palatial clubhouse"
      }
]}
    verdict="The East Course plays through grand lakes and dramatic scale models of Angkorian temples. Generous fairways yield to complex multi-tiered greens requiring surgical approach play."
  />


            <CourseFAQSection
                courseName="Vattanac Golf Resort (East Course)"
                faqs={[
          {
                    "q": "What are the key course specifications for Vattanac Golf Resort (East Course)?",
                    "a": "Vattanac Golf Resort (East Course) in Phnom Penh, Cambodia is a Par 72 championship layout designed by Sir Nick Faldo (opened 2019), measuring 6,401 Yards (Blue Tees) within a pre-angkorean sculpture features throughout setting. It is particularly noted for scale landmark sculptures & water features (Angkor Wat replica holes)."
          },
          {
                    "q": "How do I secure tee times and caddies at Vattanac Golf Resort (East Course)?",
                    "a": "Vattanac Golf Resort (East Course) operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie distance precision (Sharp yardage readings)), and private VIP transfers from your Phnom Penh hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Vattanac Golf Resort (East Course)?",
                    "a": "Our field inspection highlights Vattanac Golf Resort (East Course)'s water hazard placement & strategy (Dramatic carries and margins) alongside scale landmark sculptures & water features (Angkor Wat replica holes). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Vattanac Golf Resort (East Course)?",
                    "a": "November through May is the prime season for Vattanac Golf Resort (East Course)."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/cambodia/vattanac-east/" venueName="Vattanac Golf Resort (East Course)" venueType="course" />
            <CourseNavigation
                prev={{ title: "Vattanac Golf Resort", path: "/courses/cambodia/vattanac/" }}
                next={{ title: "Vattanac Golf Resort West Course", path: "/courses/cambodia/vattanac-west/" }}
                country="Cambodia"
                countryLink="/destinations/cambodia/courses/"
            />
 

</main>
 );
}



