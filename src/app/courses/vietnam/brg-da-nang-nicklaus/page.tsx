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
    title: { absolute: "BRG Da Nang Golf Resort Nicklaus Bulkhead Course" },
    description: "BRG Danang Golf Resort Nicklaus Course — a Jack Nicklaus Signature Design on the coastal sands of Da Nang, Vietnam. Book with Asia Golf Specialists.",
    keywords: ["BRG Da Nang Nicklaus Course", "Jack Nicklaus Golf Vietnam", "Bulkhead Golf Course Asia", "Da Nang Golf Resort", "Vietnam Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/brg-da-nang-nicklaus/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "BRG Da Nang Golf Resort Nicklaus Bulkhead Course" },
        description: "BRG Danang Golf Resort Nicklaus Course — a Jack Nicklaus Signature Design on the coastal sands of Da Nang, Vietnam. Book with Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/brg-da-nang-nicklaus/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/brg-da-nang-nicklaus/brg-da-nang-golf-resort-nicklaus-water-feature-3.webp",
            width: 1200,
            height: 630,
            alt: "BRG Da Nang Golf Resort Nicklaus Course | Asia — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "BRG Da Nang Golf Resort Nicklaus Bulkhead Course" },
        description: "BRG Danang Golf Resort Nicklaus Course — a Jack Nicklaus Signature Design on the coastal sands of Da Nang, Vietnam. Book with Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/brg-da-nang-nicklaus/brg-da-nang-golf-resort-nicklaus-water-feature-3.webp"],
    },
};

export default function BrgNicklaus() {
    const images = [
        { src: "/images/courses/vietnam/brg-da-nang-nicklaus/brg-da-nang-golf-resort-nicklaus-water-feature-3.webp", alt: "BRG Da Nang Golf Resort Nicklaus Course Water Feature Hazard Vietnam", caption: "Water feature hazard, Nicklaus Course" },
        { src: "/images/courses/vietnam/brg-da-nang-nicklaus/brg-da-nang-golf-resort-nicklaus-course-da-nang-1.webp", alt: "BRG Da Nang Golf Resort Nicklaus Course Aerial View Da Nang Vietnam", caption: "Aerial view, BRG Da Nang Golf Resort" },
        { src: "/images/courses/vietnam/brg-da-nang-nicklaus/brg-da-nang-golf-resort-nicklaus-fairway-vietnam-4.webp", alt: "BRG Da Nang Golf Resort Nicklaus Course Fairway Championship Layout", caption: "Championship fairway layout, Da Nang" },
        { src: "/images/courses/vietnam/brg-da-nang-nicklaus/brg-da-nang-golf-resort-nicklaus-hole-17-5.webp", alt: "BRG Da Nang Golf Resort Nicklaus Course Signature Hole 17 Bulkhead Par 3", caption: "Signature hole 17, par-3 bulkhead" },
        { src: "/images/courses/vietnam/brg-da-nang-nicklaus/brg-danang-golf-nicklaus.webp", alt: "BRG Da Nang Golf Resort Nicklaus Bulkhead Course Vietnam", caption: "Nicklaus Course, BRG Da Nang" },
    ];

    return (
        <main style={{ backgroundColor: '#020617', color: 'var(--color-tertiary)', minHeight: '100vh' }}>
            {/* Sticky Navigation */}
            <Navbar />

            {/* Heritage Hero with Auto-Slider */}
            <header className="hero" style={{ minHeight: '85vh' }}>
                <div style={{ position: 'absolute', inset: 0, zIndex: 0, WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)' }}>
                    <HeroSlider images={images.map(i => i.src)} />
                    <div className="hero-overlay" style={{ position: 'absolute', inset: 0, zIndex: 2 }}></div>
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <DestinationBackLink country="Vietnam" countryLink="/destinations/vietnam/courses/" />
                    <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
                        AGS Course Heritage
                    </div>
                    <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>BRG Da Nang <br /><span className="text-gold">Nicklaus Course</span></h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">
                        "Precision meets the water's edge in Asia's first bulkhead layout." — Jack Nicklaus Design
                    </p>
                </div>
            </header>

            {/* Course Specifications & Overview */}
            <section className="section" style={{ paddingTop: '4rem' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    <div className="article-content">
                        <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
                        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
              <tbody>
                {[
                  ['Designer', <a href="https://nicklausdesign.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">Nicklaus Design</a>],
                  ['Year Opened', '2018'],
                  ['Par', '73'],
                  ['Length', '7,380 Yards'],
                  ['Grass Type', 'Platinum Paspalum'],
                  ['Setting', 'Parkland']
                ].map(([k, v], i) => (
                  <tr key={i}>
                    <th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>{k}</th>
                    <td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
                    </div>
                    <div>
                        <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
                        <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <p>
                                The Nicklaus Course at BRG Da Nang Golf Resort is a bold departure from traditional Asian layouts, bringing Asia's first authentic bulkhead-style course to Vietnam's Central Coast. Designed by the Jack Nicklaus Design team, the course emphasizes precision and tactical navigation at every turn.
                            </p>
                            <p>
                                Opened in 2020, the layout features iconic wood-faced bulkheads separating perfectly manicured fairways from strategic water features. Hole 17 — a dramatic par-3 requiring a carry over water to a bulkheaded green — stands as the course's unforgettable signature experience.
                            </p>
                            <p>
                                Utilizing premium Platinum Paspalum turf throughout, the course ensures a lush, responsive playing surface year-round. As part of the world-class 36-hole BRG Da Nang complex, the Nicklaus Course offers a technically distinct challenge for golfers seeking professional-grade conditioning.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clickable Image Gallery */}
            <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Precision</span></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                        {images.map((img, i) => (
                            <div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', transition: 'transform 0.3s ease', display: 'block' }}>
                                <Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                                <div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>
                                    {(img as any).caption || `Image ${i + 1}`}
                                </div>
                            </div>
                        ))}
                    </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/vietnam/brg-da-nang-nicklaus/"
  />
  </div>
  </section>

            {/* JSON-LD Schema */}
            <CourseSchemaBlock sameAs={["https://brggolf.vn/"]}
                name="BRG Da Nang Golf Resort (Nicklaus Course)"
                description="BRG Danang Golf Resort Nicklaus Course — a Jack Nicklaus Signature Design on the coastal sands of Da Nang, Vietnam. Book with Asia Golf Specialists."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/brg-da-nang-nicklaus/"}
                imageUrl={"/images/courses/vietnam/brg-da-nang-nicklaus/brg-da-nang-golf-resort-nicklaus-water-feature-3.webp"}
                addressLocality={"Da Nang"}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={7380}
                par={73}
                designer="Jack Nicklaus Design"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "BRG Da Nang Golf Resort (Nicklaus Course)", item: "https://www.asiagolfspecialists.com/courses/vietnam/brg-da-nang-nicklaus/" },
                ]}
            />

            {/* Footer */}

            
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>BRG Da Nang Golf Resort (Nicklaus Course)</strong> is a premier Par 73 championship layout in Da Nang, Vietnam, crafted by <strong>Jack Nicklaus Design</strong> (2018) and stretching to <strong>7,380 Yards</strong> across a parkland environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its bulkhead water carries & precision greens (Hardwood bulkheads along lagoon) and fairway shaping & paspalum turf quality (Tour-grade turf roll).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, BRG Da Nang Golf Resort (Nicklaus Course) (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie hazard line & distance reading (Crucial for forced water carries), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Da Nang golf tour by AGS, BRG Da Nang Golf Resort (Nicklaus Course) provides a distinct architectural test by Jack Nicklaus Design that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="BRG Da Nang Golf Resort (Nicklaus Course)"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/brg-da-nang-nicklaus/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/brg-da-nang-nicklaus/brg-da-nang-golf-resort-nicklaus-water-feature-3.webp"
    addressLocality="Da Nang"
    addressCountry="VN"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="Nicklaus Bulkhead Design • Central Coast"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Bulkhead Water Carries & Precision Greens",
            score: 9.7,
            highlight: "Hardwood bulkheads along lagoon"
      },
      {
            label: "Fairway Shaping & Paspalum Turf Quality",
            score: 9.6,
            highlight: "Tour-grade turf roll"
      },
      {
            label: "Caddie Hazard Line & Distance Reading",
            score: 9.5,
            highlight: "Crucial for forced water carries"
      },
      {
            label: "Clubhouse Dining & 36-Hole Resort Amenities",
            score: 9.4,
            highlight: "Shared 36-hole luxury complex"
      }
]}
    verdict="Jack Nicklaus's signature bulkhead design delivers an unyielding tactical exam. Water borders multiple approach corridors, demanding precise ball-striking over raw distance. An essential twin-billing alongside the adjacent Norman course."
  />


            <CourseFAQSection
                courseName="BRG Da Nang Golf Resort (Nicklaus Course)"
                faqs={[
          {
                    "q": "What are the key course specifications for BRG Da Nang Golf Resort (Nicklaus Course)?",
                    "a": "BRG Da Nang Golf Resort (Nicklaus Course) in Da Nang, Vietnam is a Par 73 championship layout designed by Jack Nicklaus Design (opened 2018), measuring 7,380 Yards within a parkland setting. It is particularly noted for bulkhead water carries & precision greens (Hardwood bulkheads along lagoon)."
          },
          {
                    "q": "How do I secure tee times and caddies at BRG Da Nang Golf Resort (Nicklaus Course)?",
                    "a": "BRG Da Nang Golf Resort (Nicklaus Course) operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie hazard line & distance reading (Crucial for forced water carries)), and private VIP transfers from your Da Nang hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at BRG Da Nang Golf Resort (Nicklaus Course)?",
                    "a": "Our field inspection highlights BRG Da Nang Golf Resort (Nicklaus Course)'s fairway shaping & paspalum turf quality (Tour-grade turf roll) alongside bulkhead water carries & precision greens (Hardwood bulkheads along lagoon). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play BRG Da Nang Golf Resort (Nicklaus Course)?",
                    "a": "February through September offers ideal conditions at BRG Da Nang's Nicklaus Course."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/brg-da-nang-nicklaus/" venueName="BRG Da Nang Golf Resort (Nicklaus Course)" venueType="course" />
            <CourseNavigation
                prev={{ title: "Ba Na Hills Golf Club", path: "/courses/vietnam/ba-na-hills/" }}
                next={{ title: "BRG Da Nang Golf Resort Norman Course", path: "/courses/vietnam/brg-da-nang-norman/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
        

</main>
    );
}



