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
 title: { absolute: "Tan Son Nhat Golf Course | 36-Hole Saigon City Centre Golf" },
 description: "Play Tan Son Nhat Golf Course — an incredible 36-hole Nelson & Haworth complex in the heart of Ho Chi Minh City. Book with Asia Golf Specialists.",
 keywords: ["Tan Son Nhat Golf Course", "Saigon Golf Course", "Ho Chi Minh City Golf", "36 Hole Golf Vietnam", "Vietnam Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/tan-son-nhat/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Tan Son Nhat Golf Course | 36-Hole Saigon City Centre Golf" },
        description: "Play Tan Son Nhat Golf Course — an incredible 36-hole Nelson & Haworth complex in the heart of Ho Chi Minh City. Book with Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/tan-son-nhat/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/tan-son-nhat/tan-son-nhat-golf-course-vietnam-1.webp",
            width: 1200,
            height: 630,
            alt: "Tan Son Nhat Golf Course | 36-Hole Saigon City Centre Golf — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Tan Son Nhat Golf Course | 36-Hole Saigon City Centre Golf" },
        description: "Play Tan Son Nhat Golf Course — an incredible 36-hole Nelson & Haworth complex in the heart of Ho Chi Minh City. Book with Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/tan-son-nhat/tan-son-nhat-golf-course-vietnam-1.webp"],
    },
};

export default function TanSonNhat() {
 const images = [
 { src: "/images/courses/vietnam/tan-son-nhat/tan-son-nhat-golf-course-vietnam-1.webp", alt: "Tan Son Nhat Golf Course Ho Chi Minh City Aerial Vietnam", caption: "Ho Chi Minh City Aerial" },
 { src: "/images/courses/vietnam/tan-son-nhat/tan-son-nhat-golf-course-city-center-2.webp", alt: "Tan Son Nhat Golf Course City Centre Saigon Vietnam", caption: "City Centre Saigon" },
 { src: "/images/courses/vietnam/tan-son-nhat/tan-son-nhat-golf-course-36-holes-layout-3.webp", alt: "Tan Son Nhat Golf Course 36 Hole Championship Vietnam Layout", caption: "36 Hole Championship Vietnam Layout" },
 { src: "/images/courses/vietnam/tan-son-nhat/tan-son-nhat-golf-course-fairway-4.webp", alt: "Tan Son Nhat Golf Course Fairway Championship Vietnam", caption: "Fairway Championship" },
 { src: "/images/courses/vietnam/tan-son-nhat/tan-son-nhat-golf-course-greens-saigon-5.webp", alt: "Tan Son Nhat Golf Course Championship Greens Saigon Vietnam", caption: "Championship Greens Saigon" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Tan Son Nhat<br /><span className="text-gold">Golf Course</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"36 holes in the heart of a megacity — the world's most convenient golf experience."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', 'Nelson & Haworth'], ['Year Opened', '2015'], ['Par', '71 / 72 (two courses)'], ['Length', '7,081 Yards (Blue Tees)'], ['Location', 'Tan Binh District, HCMC'], ['Distance from CBD', '5 minutes'], ['Total Holes', '36 (two 18-hole layouts)']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Tan Son Nhat Golf Course holds a unique position in global golf — it is a massive 36-hole complex located in a densely populated urban setting, just five minutes from the centre of Ho Chi Minh City. Adjacent to the international airport, it is frequently the first or last round of the trip for discerning golfers transiting through Saigon.</p>
 <p>Designed by Nelson & Haworth, the two layouts offer different character and challenges, both making inventive use of their constrained urban setting. Water features, strategic bunkering, and mature tree lines create a surprisingly authentic golf experience despite the city skyline visible in all directions.</p>
 <p>Tan Son Nhat is the most accessible course in southern Vietnam for the convenience-focused golfer. A round here before catching an evening connection flight makes for one of the most memorable pre-departure experiences in Asian golf.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">City Course</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/vietnam/tan-son-nhat/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://tansonnhatgolf.vn/"]}
                name="Tan Son Nhat Golf Course"
                description="36 holes in the heart of a megacity — the world's most convenient golf experience."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/tan-son-nhat/"}
                imageUrl={"/images/courses/vietnam/tan-son-nhat/tan-son-nhat-golf-course-vietnam-1.webp"}
                addressLocality={"Ho Chi Minh City"}
                addressCountry={"VN"}
                numberOfHoles={36}
                courseLength={7081}
                par={72}
                designer="Nelson & Haworth"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Tan Son Nhat Golf Course", item: "https://www.asiagolfspecialists.com/courses/vietnam/tan-son-nhat/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Tan Son Nhat Golf Course</strong> is a premier Par 71 / 72 (two courses) championship layout in Ho Chi Minh City, Vietnam, crafted by <strong>Nelson & Haworth</strong> (2015) and stretching to <strong>7,081 Yards (Blue Tees)</strong> across a championship layout environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its central city proximity & night golf lights (Play until midnight minutes from airport) and fast true greens & strategic water hazards (Manicured city fairways).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Tan Son Nhat Golf Course (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its high-volume caddie professionalism (Polished and punctual), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Ho Chi Minh City golf tour by AGS, Tan Son Nhat Golf Course provides a distinct architectural test by Nelson & Haworth that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Tan Son Nhat Golf Course"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/tan-son-nhat/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/tan-son-nhat/tan-son-nhat-golf-course-vietnam-1.webp"
    addressLocality="Ho Chi Minh City"
    addressCountry="VN"
    overallScore={4.6}
    maxScore={5.0}
    gradeBadge="36-Hole Saigon City Center Golf • Nelson & Haworth"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Central City Proximity & Night Golf Lights",
            score: 9.8,
            highlight: "Play until midnight minutes from airport"
      },
      {
            label: "Fast True Greens & Strategic Water Hazards",
            score: 9.4,
            highlight: "Manicured city fairways"
      },
      {
            label: "High-Volume Caddie Professionalism",
            score: 9.4,
            highlight: "Polished and punctual"
      },
      {
            label: "Massive Resort-Style Clubhouse",
            score: 9.5,
            highlight: "One of Asia's largest clubhouses"
      }
]}
    verdict="Located right next to Tan Son Nhat airport in Ho Chi Minh City, this 36-hole facility is ideal for arrival day or departure rounds. Exceptional floodlit night golf and comprehensive amenities."
  />


            <CourseFAQSection
                courseName="Tan Son Nhat Golf Course"
                faqs={[
          {
                    "q": "What are the key course specifications for Tan Son Nhat Golf Course?",
                    "a": "Tan Son Nhat Golf Course in Ho Chi Minh City, Vietnam is a Par 71 / 72 (two courses) championship layout designed by Nelson & Haworth (opened 2015), measuring 7,081 Yards (Blue Tees) within a championship layout setting. It is particularly noted for central city proximity & night golf lights (Play until midnight minutes from airport)."
          },
          {
                    "q": "How do I secure tee times and caddies at Tan Son Nhat Golf Course?",
                    "a": "Tan Son Nhat Golf Course operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (high-volume caddie professionalism (Polished and punctual)), and private VIP transfers from your Ho Chi Minh City hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Tan Son Nhat Golf Course?",
                    "a": "Our field inspection highlights Tan Son Nhat Golf Course's fast true greens & strategic water hazards (Manicured city fairways) alongside central city proximity & night golf lights (Play until midnight minutes from airport). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Tan Son Nhat Golf Course?",
                    "a": "November through April is the recommended season for Tan Son Nhat Golf Course."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/tan-son-nhat/" venueName="Tan Son Nhat Golf Course" venueType="course" />
            <CourseNavigation
                prev={{ title: "Taekwang Jeongsan Country Club", path: "/courses/vietnam/taekwang-jeongsan/" }}
                next={{ title: "Thanh Lanh Valley Golf & Resort", path: "/courses/vietnam/thanh-lanh-valley/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
 );
}
