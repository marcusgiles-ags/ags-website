import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
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
 title: { absolute: "FLC Ha Long Bay Golf Club | UNESCO Limestone Views Vietnam" },
 description: "Play FLC Ha Long Bay Golf Club — the only course in the world with UNESCO World Heritage limestone karst views on every hole. Book with AGS.",
 keywords: ["FLC Ha Long Bay Golf Club", "Ha Long Bay Golf Vietnam", "UNESCO Golf Course Vietnam", "Vietnam Golf Tours", "Limestone Karst Golf"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/flc-ha-long-bay/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "FLC Ha Long Bay Golf Club | UNESCO Limestone Views Vietnam" },
        description: "Play FLC Ha Long Bay Golf Club — the only course in the world with UNESCO World Heritage limestone karst views on every hole. Book with AGS.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/flc-ha-long-bay/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/flc-ha-long-bay/flc-ha-long-bay-golf-club-vietnam-1.webp",
            width: 1200,
            height: 630,
            alt: "FLC Ha Long Bay Golf Club | UNESCO Limestone Views Vietnam — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "FLC Ha Long Bay Golf Club | UNESCO Limestone Views Vietnam" },
        description: "Play FLC Ha Long Bay Golf Club — the only course in the world with UNESCO World Heritage limestone karst views on every hole. Book with AGS.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/flc-ha-long-bay/flc-ha-long-bay-golf-club-vietnam-1.webp"],
    },
};

export default function FLCHaLongBay() {
 const images = [
 { src: "/images/courses/vietnam/flc-ha-long-bay/flc-ha-long-bay-golf-club-vietnam-1.webp", alt: "FLC Ha Long Bay Golf Club Vietnam Aerial Limestone UNESCO", caption: "Aerial view, FLC Ha Long Bay Golf Club" },
 { src: "/images/courses/vietnam/flc-ha-long-bay/flc-ha-long-bay-golf-limestone-karst-2.webp", alt: "FLC Ha Long Bay Golf Vietnam Limestone Karst UNESCO View", caption: "Limestone karst UNESCO backdrop, Ha Long" },
 { src: "/images/courses/vietnam/flc-ha-long-bay/flc-ha-long-bay-golf-course-layout-3.webp", alt: "FLC Ha Long Bay Golf Vietnam Course Layout Championship", caption: "Championship course layout, Ha Long Bay" },
 { src: "/images/courses/vietnam/flc-ha-long-bay/flc-ha-long-bay-golf-fairway-bay-4.webp", alt: "FLC Ha Long Bay Golf Vietnam Fairway Bay View - Premium Southeast Asia Golf Tours 2026", caption: "Fairway with bay view, FLC Ha Long" },
 { src: "/images/courses/vietnam/flc-ha-long-bay/flc-ha-long-bay-golf-championship-green-5.webp", alt: "FLC Ha Long Bay Golf Vietnam Championship Green - Premium Southeast Asia Golf Tours 2026", caption: "Championship green, FLC Ha Long Bay Golf" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — UNESCO Setting</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>FLC Ha Long Bay<br /><span className="text-gold">Golf Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"The only course in the world with UNESCO World Heritage limestone views from every tee."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', <a href="https://www.schmidt-curley.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">Schmidt-Curley Design</a>], ['Year Opened', '2018'], ['Location', 'Ha Long Bay, Quang Ninh Province'], ['Setting', 'UNESCO World Heritage Site'], ['Par', '71'], ['Length', '6,092 Yards (Blue Tees)'], ['Unique Feature', 'Limestone karst views every hole'], ['Style', 'Resort Championship'], ['Access', 'Ha Long City (2.5hrs from Hanoi)']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>FLC Ha Long Bay Golf Club is genuinely unique in world golf. Overlooking Ha Long Bay — a UNESCO World Heritage Site and one of the world's most photographed natural landscapes — the course offers the extraordinary privilege of playing golf with an audience of thousands of limestone karst formations rising from the emerald waters below.</p>
 <p>The layout is well-designed in its own right, with elevation changes, water features, and excellent course conditioning providing a genuine championship challenge. But the setting is the star: on a clear day, the 360-degree panorama of the bay, the karsts, and the South China Sea is simply without peer in global golf.</p>
 <p>FLC Ha Long Bay is best incorporated into a multi-day Ha Long Bay itinerary — combining a cruise on the bay with a round on the clubhouse's terrace. AGS can build full overnight Ha Long experiences that make golf the headline act alongside one of Asia's great natural wonders.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Bay</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/vietnam/flc-ha-long-bay/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://flchalong.com.vn/en/golf/"]}
                name="FLC Ha Long Bay Golf Club"
                description="The only course in the world with UNESCO World Heritage limestone views from every tee."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/flc-ha-long-bay/"}
                imageUrl={"/images/courses/vietnam/flc-ha-long-bay/flc-ha-long-bay-golf-club-vietnam-1.webp"}
                addressLocality={"Ha Long"}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={6092}
                par={71}
                designer="Schmidt-Curley Design"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "FLC Ha Long Bay Golf Club", item: "https://www.asiagolfspecialists.com/courses/vietnam/flc-ha-long-bay/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>FLC Ha Long Bay Golf Club</strong> is a premier Par 71 championship layout in Ha Long, Vietnam, crafted by <strong>Schmidt-Curley Design</strong> (2018) and stretching to <strong>6,092 Yards (Blue Tees)</strong> across a unesco world heritage site environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its cliffside vistas over ha long bay (Unrivaled UNESCO panoramic view) and dramatic clifftop elevation shots (Steep drops across canyons).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, FLC Ha Long Bay Golf Club (Ha Long City (2.5hrs from Hanoi)) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie cliff & wind adjustments (Key for severe downhill carries), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Ha Long golf tour by AGS, FLC Ha Long Bay Golf Club provides a distinct architectural test by Schmidt-Curley Design that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="FLC Ha Long Bay Golf Club"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/flc-ha-long-bay/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/flc-ha-long-bay/flc-ha-long-bay-golf-club-vietnam-1.webp"
    addressLocality="Ha Long"
    addressCountry="VN"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="UNESCO World Heritage Vistas • Schmidt-Curley"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Cliffside Vistas over Ha Long Bay",
            score: 9.9,
            highlight: "Unrivaled UNESCO panoramic view"
      },
      {
            label: "Dramatic Clifftop Elevation Shots",
            score: 9.4,
            highlight: "Steep drops across canyons"
      },
      {
            label: "Caddie Cliff & Wind Adjustments",
            score: 9.4,
            highlight: "Key for severe downhill carries"
      },
      {
            label: "High-End Resort Facilities & Terrace Dining",
            score: 9.4,
            highlight: "Stunning bayview dining"
      }
]}
    verdict="Perched high on the hills overlooking the emerald waters and limestone pillars of Ha Long Bay. Several cliffside greens deliver what are arguably the most photogenic golf vistas on earth."
  />


            <CourseFAQSection
                courseName="FLC Ha Long Bay Golf Club"
                faqs={[
          {
                    "q": "What are the key course specifications for FLC Ha Long Bay Golf Club?",
                    "a": "FLC Ha Long Bay Golf Club in Ha Long, Vietnam is a Par 71 championship layout designed by Schmidt-Curley Design (opened 2018), measuring 6,092 Yards (Blue Tees) within a unesco world heritage site setting. It is particularly noted for cliffside vistas over ha long bay (Unrivaled UNESCO panoramic view)."
          },
          {
                    "q": "How do I secure tee times and caddies at FLC Ha Long Bay Golf Club?",
                    "a": "FLC Ha Long Bay Golf Club operates under ha long city (2.5hrs from hanoi) protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie cliff & wind adjustments (Key for severe downhill carries)), and private VIP transfers from your Ha Long hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at FLC Ha Long Bay Golf Club?",
                    "a": "Our field inspection highlights FLC Ha Long Bay Golf Club's dramatic clifftop elevation shots (Steep drops across canyons) alongside cliffside vistas over ha long bay (Unrivaled UNESCO panoramic view). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play FLC Ha Long Bay Golf Club?",
                    "a": "October through April suits the northern location of FLC Ha Long Bay Golf Club."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/flc-ha-long-bay/" venueName="FLC Ha Long Bay Golf Club" venueType="course" />
            <CourseNavigation
                prev={{ title: "Eschuri Vung Bau Golf Resort", path: "/courses/vietnam/eschuri-vung-bau/" }}
                next={{ title: "Golden Sands Golf Resort Vietnam", path: "/courses/vietnam/golden-sands/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
 );
}
