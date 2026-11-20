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
 title: "Vattanac Golf Resort West Course",
 description: "Play Vattanac Golf Resort West Course — exclusive private-members layout with technically challenging fast and firm surfaces in Phnom Penh. Book with AGS.",
 keywords: ["Vattanac Golf Resort West Course", "Phnom Penh Private Golf", "Exclusive Golf Cambodia", "Vattanac Golf Cambodia", "Cambodia Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/cambodia/vattanac-west/",
    },
    openGraph: {
        type: "website",
        title: "Vattanac Golf Resort West Course",
        description: "Play Vattanac Golf Resort West Course — exclusive private-members layout with technically challenging fast and firm surfaces in Phnom Penh. Book with AGS.",
        url: "https://www.asiagolfspecialists.com/courses/cambodia/vattanac-west/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/cambodia/vattanac-west/vattanac-golf-resort-west-course-cambodia-1.webp",
            width: 1200,
            height: 630,
            alt: "Vattanac Golf Resort West Course | Private Members Exclusive Cambodia — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Vattanac Golf Resort West Course",
        description: "Play Vattanac Golf Resort West Course — exclusive private-members layout with technically challenging fast and firm surfaces in Phnom Penh. Book with AGS.",
        images: ["https://www.asiagolfspecialists.com/images/courses/cambodia/vattanac-west/vattanac-golf-resort-west-course-cambodia-1.webp"],
    },
};

export default function VattanacWest() {
 const images = [
 { src: "/images/courses/cambodia/vattanac-west/vattanac-golf-resort-west-course-cambodia-1.webp", alt: "Vattanac Golf Resort West Course Cambodia Private Members Exclusive", caption: "Private members club, Vattanac West" },
 { src: "/images/courses/cambodia/vattanac-west/vattanac-golf-resort-west-private-2.webp", alt: "Vattanac Golf Cambodia West Course Private Club Championship Hole", caption: "Championship hole, Vattanac West Course" },
 { src: "/images/courses/cambodia/vattanac-west/vattanac-golf-resort-west-fast-firm-3.webp", alt: "Vattanac Golf Resort West Course Cambodia Fast Firm Championship Fairway", caption: "Fast, firm fairway, Vattanac West" },
 { src: "/images/courses/cambodia/vattanac-west/vattanac-golf-resort-west-technical-4.webp", alt: "Vattanac Golf Cambodia West Course Technically Challenging Championship", caption: "Technically challenging signature hole" },
 { src: "/images/courses/cambodia/vattanac-west/vattanac-golf-resort-west-green-5.webp", alt: "Vattanac Golf Resort West Cambodia Championship Green Exclusive", caption: "Championship green, Vattanac West Course" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Private Members Exclusive</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Vattanac Golf Resort<br /><span className="text-gold">West Course</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Cambodia&apos;s most exclusive members layout — fast, firm, and technically demanding."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', <a href="https://nickfaldodesign.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">Sir Nick Faldo</a>], ['Year Opened', '2020'], ['Location', 'Phnom Penh, Cambodia'], ['Type', 'Private members course'], ['Par', '72'], ['Length', '6,418 Yards (Blue Tees)'], ['Setting', 'Intimate, manicured, exclusive'], ['Surface', 'Fast and firm playing conditions'], ['Access', 'Via AGS arrangements for visiting guests']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Vattanac Golf Resort's West Course is one of Southeast Asia's most exclusive golf experiences — a private-members layout that deliberately contrasts with the more accessible East Course in every significant dimension. Where the East Course is epic in scale and culturally theatrical, the West Course is intimate, technically demanding, and pointedly private in its atmosphere, with the fast, firm playing surfaces and precise green complexes that characterise the best members clubs globally.</p>
 <p>The technical challenge of the West Course is genuine: the greens are maintained to speeds and firmness levels that demand proper approach angles and disciplined pace control on the putting surface. Shots that arrive from the wrong angle are routinely rejected by slopes and contours that have been engineered to reward positioning far more than raw power.</p>
 <p>Access to the West Course for visiting discerning golfers requires AGS facilitation through established resort relationships — it is not a walk-up experience. But for the golfer who wants to experience Cambodia's most exclusive and technically satisfying golf, the West Course at Vattanac is a genuinely special arrangement that AGS is positioned to provide.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">West Course</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/cambodia/vattanac-west/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://vattanacgolfresort.com/"]}
                name="Vattanac Golf Resort (West Course)"
                description="Cambodia&apos;s most exclusive members layout — fast, firm, and technically demanding."
                url={"https://www.asiagolfspecialists.com/courses/cambodia/vattanac-west/"}
                imageUrl={"/images/courses/cambodia/vattanac-west/vattanac-golf-resort-west-course-cambodia-1.webp"}
                addressLocality={"Phnom Penh"}
                addressCountry={"KH"}
                numberOfHoles={18}
                courseLength={6418}
                par={72}
                designer="Sir Nick Faldo"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Cambodia", item: "https://www.asiagolfspecialists.com/destinations/cambodia/" },
                    { name: "Cambodia Courses", item: "https://www.asiagolfspecialists.com/destinations/cambodia/courses/" },
                    { name: "Vattanac Golf Resort (West Course)", item: "https://www.asiagolfspecialists.com/courses/cambodia/vattanac-west/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Vattanac Golf Resort (West Course)</strong> is a premier Par 72 championship layout in Phnom Penh, Cambodia, crafted by <strong>Sir Nick Faldo</strong> (2020) and stretching to <strong>6,418 Yards (Blue Tees)</strong> across a intimate, manicured, exclusive environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its narrower tree corridors & intricate hazards (Tighter driving corridors) and paspalum surface speed & consistency (Firm, pure putting roll).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Vattanac Golf Resort (West Course) (Via AGS arrangements for visiting guests) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Cambodia dry season. Our curatorial scorecard specifically notes its caddie hazard guidance (Navigates winding canals), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Phnom Penh golf tour by AGS, Vattanac Golf Resort (West Course) provides a distinct architectural test by Sir Nick Faldo that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Vattanac Golf Resort (West Course)"
    itemUrl="https://www.asiagolfspecialists.com/courses/cambodia/vattanac-west/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/cambodia/vattanac-west/vattanac-golf-resort-west-course-cambodia-1.webp"
    addressLocality="Phnom Penh"
    addressCountry="KH"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="Sir Nick Faldo West Course • Phnom Penh"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Narrower Tree Corridors & Intricate Hazards",
            score: 9.7,
            highlight: "Tighter driving corridors"
      },
      {
            label: "Paspalum Surface Speed & Consistency",
            score: 9.8,
            highlight: "Firm, pure putting roll"
      },
      {
            label: "Caddie Hazard Guidance",
            score: 9.6,
            highlight: "Navigates winding canals"
      },
      {
            label: "Advanced Floodlighting System",
            score: 9.8,
            highlight: "Full night golf experience"
      }
]}
    verdict="The complementary sibling to the East layout. The West Course offers a tighter, more intimate tactical exam framed by native palms and challenging water canals."
  />


            <CourseFAQSection
                courseName="Vattanac Golf Resort (West Course)"
                faqs={[
          {
                    "q": "What are the key course specifications for Vattanac Golf Resort (West Course)?",
                    "a": "Vattanac Golf Resort (West Course) in Phnom Penh, Cambodia is a Par 72 championship layout designed by Sir Nick Faldo (opened 2020), measuring 6,418 Yards (Blue Tees) within a intimate, manicured, exclusive setting. It is particularly noted for narrower tree corridors & intricate hazards (Tighter driving corridors)."
          },
          {
                    "q": "How do I secure tee times and caddies at Vattanac Golf Resort (West Course)?",
                    "a": "Vattanac Golf Resort (West Course) operates under via ags arrangements for visiting guests protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie hazard guidance (Navigates winding canals)), and private VIP transfers from your Phnom Penh hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Vattanac Golf Resort (West Course)?",
                    "a": "Our field inspection highlights Vattanac Golf Resort (West Course)'s paspalum surface speed & consistency (Firm, pure putting roll) alongside narrower tree corridors & intricate hazards (Tighter driving corridors). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Vattanac Golf Resort (West Course)?",
                    "a": "November through May is the recommended season for Vattanac Golf Resort (West Course)."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/cambodia/vattanac-west/" venueName="Vattanac Golf Resort (West Course)" venueType="course" />
            <CourseNavigation
                prev={{ title: "Vattanac Golf Resort East Course", path: "/courses/cambodia/vattanac-east/" }}
                next={{ title: "Angkor Golf Resort Siem Reap", path: "/courses/cambodia/angkor-golf-resort/" }}
                country="Cambodia"
                countryLink="/destinations/cambodia/courses/"
            />
 

</main>
  );
}
