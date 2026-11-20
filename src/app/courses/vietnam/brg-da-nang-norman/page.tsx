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
    title: { absolute: "BRG Da Nang Norman Course | Vietnam Coastal Links Golf" },
    description: "BRG Danang Golf Resort Norman Course — a Greg Norman Signature Design on the Da Nang coast, rated among Vietnam's finest championship layouts.",
    keywords: ["BRG Da Nang Golf Resort", "Greg Norman Golf Course", "Da Nang Golf", "Vietnam Coastal Links", "Vietnam Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/brg-da-nang-norman/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "BRG Da Nang Norman Course | Vietnam Coastal Links Golf" },
        description: "BRG Danang Golf Resort Norman Course — a Greg Norman Signature Design on the Da Nang coast, rated among Vietnam's finest championship layouts.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/brg-da-nang-norman/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/brg-da-nang-norman/brg-da-nang-golf-resort-coastal-dunes-3.webp",
            width: 1200,
            height: 630,
            alt: "BRG Da Nang Golf Resort Norman Course | Vietnam Coastal Links — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "BRG Da Nang Norman Course | Vietnam Coastal Links Golf" },
        description: "BRG Danang Golf Resort Norman Course — a Greg Norman Signature Design on the Da Nang coast, rated among Vietnam's finest championship layouts.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/brg-da-nang-norman/brg-da-nang-golf-resort-coastal-dunes-3.webp"],
    },
};

export default function BrgNorman() {
    const images = [
        { src: "/images/courses/vietnam/brg-da-nang-norman/brg-da-nang-golf-resort-coastal-dunes-3.webp", alt: "BRG Da Nang Golf Resort Coastal Sand Dunes Vietnam", caption: "Coastal sand dunes, Greg Norman Course" },
        { src: "/images/courses/vietnam/brg-da-nang-norman/brg-da-nang-golf-resort-norman-course-da-nang-1.webp", alt: "BRG Da Nang Golf Resort Norman Course Aerial View Da Nang Vietnam", caption: "Aerial view, BRG Norman Course Da Nang" },
        { src: "/images/courses/vietnam/brg-da-nang-norman/brg-da-nang-golf-resort-greg-norman-links-2.webp", alt: "BRG Da Nang Golf Resort Greg Norman Links Design Fairway", caption: "Greg Norman links-style fairway" },
        { src: "/images/courses/vietnam/brg-da-nang-norman/brg-da-nang-golf-resort-norman-fairway-vietnam-4.webp", alt: "BRG Da Nang Golf Resort Norman Course Fairway Championship Layout", caption: "Championship links fairway layout" },
        { src: "/images/courses/vietnam/brg-da-nang-norman/brg-da-nang-golf-resort-norman-signature-hole-5.webp", alt: "BRG Da Nang Golf Resort Norman Course Signature Hole 16 Coastal", caption: "Signature hole 16, coastal links" },
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
                    <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>BRG Da Nang <br /><span className="text-gold">Norman Course</span></h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">
                        "A pure links negotiation with the sand and wind." — Greg Norman
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
                                    ['Designer', <a href="https://gngcd.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">Greg Norman</a>],
                                    ['Year Opened', '2010'],
                                    ['Par', '72'],
                                    ['Length', '7,160 Yards'],
                                    ['Grass Type', 'Bermuda Evergreen / Paspalum'],
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
                                The Norman Course at BRG Da Nang Golf Resort is a Greg Norman classic, widely regarded as the ultimate links-style challenge on Vietnam's Central Coast. Designed to mimic the raw, windswept layouts of the British Isles, the course utilizes the natural, rugged sand dunes of Da Nang.
                            </p>
                            <p>
                                Fairways are framed by native waste areas and scrub, requiring technical dominance and strategic shot-making rather than brute force. The greens are firm and fast, demanding precise approach shots. Hole 16, with its breathtaking coastal vistas, serves as the signature experience.
                            </p>
                            <p>
                                As part of the BRG Da Nang 36-hole complex, the Norman Course maintains the Gold Standard of hospitality, providing a mature and sophisticated infrastructure for the discerning international golf traveller.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Clickable Image Gallery */}
            <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Links</span></h2>
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
    pagePath="/courses/vietnam/brg-da-nang-norman/"
  />
  </div>
  </section>

            {/* JSON-LD Schema */}
            <CourseSchemaBlock sameAs={["https://brggolf.vn/"]}
                name="BRG Da Nang Golf Resort (Norman Course)"
                description="BRG Danang Golf Resort Norman Course — a Greg Norman Signature Design on the Da Nang coast, rated among Vietnam"
                url={"https://www.asiagolfspecialists.com/courses/vietnam/brg-da-nang-norman/"}
                imageUrl={"/images/courses/vietnam/brg-da-nang-norman/brg-da-nang-golf-resort-coastal-dunes-3.webp"}
                addressLocality={"Da Nang"}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={7160}
                par={72}
                designer="Greg Norman"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "BRG Da Nang Golf Resort (Norman Course)", item: "https://www.asiagolfspecialists.com/courses/vietnam/brg-da-nang-norman/" },
                ]}
            />

            {/* Footer */}

            
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>BRG Da Nang Golf Resort (Norman Course)</strong> is a premier Par 72 championship layout in Da Nang, Vietnam, crafted by <strong>Greg Norman</strong> (2010) and stretching to <strong>7,160 Yards</strong> across a parkland environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its native sand dune integration (Classic Aussie Sandbelt cues) and wind exposure & run-up aprons (Firm links-style options).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, BRG Da Nang Golf Resort (Norman Course) (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie coastal wind knowledge (Trained on ocean breezes), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Da Nang golf tour by AGS, BRG Da Nang Golf Resort (Norman Course) provides a distinct architectural test by Greg Norman that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="BRG Da Nang Golf Resort (Norman Course)"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/brg-da-nang-norman/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/brg-da-nang-norman/brg-da-nang-golf-resort-coastal-dunes-3.webp"
    addressLocality="Da Nang"
    addressCountry="VN"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="Original Dunes Masterpiece • Greg Norman"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Native Sand Dune Integration",
            score: 9.8,
            highlight: "Classic Aussie Sandbelt cues"
      },
      {
            label: "Wind Exposure & Run-Up Aprons",
            score: 9.7,
            highlight: "Firm links-style options"
      },
      {
            label: "Caddie Coastal Wind Knowledge",
            score: 9.6,
            highlight: "Trained on ocean breezes"
      },
      {
            label: "Practice Facilities & Pro Shop",
            score: 9.3,
            highlight: "Extensive grass driving range"
      }
]}
    verdict="The pioneering layout that ignited Da Nang's reputation as a world-class golf destination. Classic Aussie-style dunes golf with expansive waste bunkers framed by casuarina pines and sea breezes."
  />


            
 <VenueItineraries venueHref="/courses/vietnam/brg-da-nang-norman/" venueName="BRG Da Nang Golf Resort (Norman Course)" venueType="course" />

 <CourseFAQSection
                courseName="BRG Da Nang Golf Resort (Norman Course)"
                faqs={[
          {
                    "q": "What are the key course specifications for BRG Da Nang Golf Resort (Norman Course)?",
                    "a": "BRG Da Nang Golf Resort (Norman Course) in Da Nang, Vietnam is a Par 72 championship layout designed by Greg Norman (opened 2010), measuring 7,160 Yards within a parkland setting. It is particularly noted for native sand dune integration (Classic Aussie Sandbelt cues)."
          },
          {
                    "q": "How do I secure tee times and caddies at BRG Da Nang Golf Resort (Norman Course)?",
                    "a": "BRG Da Nang Golf Resort (Norman Course) operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie coastal wind knowledge (Trained on ocean breezes)), and private VIP transfers from your Da Nang hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at BRG Da Nang Golf Resort (Norman Course)?",
                    "a": "Our field inspection highlights BRG Da Nang Golf Resort (Norman Course)'s wind exposure & run-up aprons (Firm links-style options) alongside native sand dune integration (Classic Aussie Sandbelt cues). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play BRG Da Nang Golf Resort (Norman Course)?",
                    "a": "February through September is the recommended season for BRG Da Nang's Norman Course."
          }
]}
            />
            <CourseNavigation
                prev={{ title: "BRG Da Nang Golf Resort Nicklaus Course", path: "/courses/vietnam/brg-da-nang-nicklaus/" }}
                next={{ title: "Chi Linh Golf", path: "/courses/vietnam/chi-linh-golf/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
        

</main>
    );
}
