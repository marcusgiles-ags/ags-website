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
 title: { absolute: "Laguna Golf Lang Co | Nick Faldo Masterpiece Central Vietnam" },
 description: "Laguna Lang Co Golf Club — an acclaimed 18-hole Sir Nick Faldo design set between mountains and lagoon in Central Vietnam. Book with Asia Golf Specialists.",
 keywords: ["Laguna Golf Lang Co", "Nick Faldo Golf Vietnam", "Lang Co Golf Course", "Vietnam Golf Tours", "Central Vietnam Golf"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/laguna-lang-co/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Laguna Golf Lang Co | Nick Faldo Masterpiece Central Vietnam" },
        description: "Laguna Lang Co Golf Club — an acclaimed 18-hole Sir Nick Faldo design set between mountains and lagoon in Central Vietnam. Book with Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/laguna-lang-co/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3.webp",
            width: 1200,
            height: 630,
            alt: "Laguna Golf Lang Co | Nick Faldo Masterpiece Central Vietnam — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Laguna Golf Lang Co | Nick Faldo Masterpiece Central Vietnam" },
        description: "Laguna Lang Co Golf Club — an acclaimed 18-hole Sir Nick Faldo design set between mountains and lagoon in Central Vietnam. Book with Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3.webp"],
    },
};

export default function LagunaLangCo() {
    const images = [
        { src: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3.webp", alt: "Laguna Golf Lang Co Tropical Jungle Course Hole Vietnam", caption: "Tropical jungle course hole, Lang Co" },
        { src: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-bach-ma-mountain-5.webp", alt: "Laguna Golf Lang Co Bach Ma Mountain Backdrop Central Vietnam", caption: "Bach Ma mountain backdrop, Lang Co" },
        { src: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-nick-faldo-vietnam-1.webp", alt: "Laguna Golf Lang Co Nick Faldo Design Aerial View Vietnam", caption: "Aerial view, Nick Faldo design, Lang Co" },
        { src: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-championship-layout-4.webp", alt: "Laguna Golf Lang Co Championship Layout Faldo Signature Hole", caption: "Faldo signature hole, Laguna Lang Co" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
 AGS Course Heritage
 </div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Laguna Golf <br /><span className="text-gold">Lang Co</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">
 "My favourite course in Asia — it has everything." — Sir Nick Faldo
 </p>
 </div>
 </header>

 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
              <tbody>
                {[
                  ['Designer', <a href="https://nickfaldodesign.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">Sir Nick Faldo</a>],
                  ['Year Opened', '2013'],
                  ['Par', '71'],
                  ['Length', '6,891 Yards'],
                  ['Grass Type', 'TifEagle Bermuda Greens'],
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
 Laguna Golf Lang Co is the jewel of Central Vietnam's championship golf scene. Designed by Sir Nick Faldo — who famously declared it his favourite Asian course — the layout weaves through a breathtaking tapestry of rice paddies, tropical jungle, coastal lagoons, and the dramatic backdrop of the Bach Ma National Park.
 </p>
 <p>
 No two holes share the same visual character, making it one of the most diverse and scenic rounds available in Southeast Asia. The par-71 layout is strategically demanding, requiring players to plot their way through corridors defined by water, elevation, and natural hazards.
 </p>
 <p>
 Positioned within the Laguna Lang Co resort, the club benefits from award-winning hospitality infrastructure. For the discerning golfer seeking a course that delivers equal measures of challenge and beauty, Lang Co stands apart from the rest.
 </p>
 </div>
 </div>
 </div>
 </section>

 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Landscape</span></h2>
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
    pagePath="/courses/vietnam/laguna-lang-co/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://www.lagunalangco.com/golf/"]}
                name="Laguna Golf Lang Co"
                description="Laguna Lang Co Golf Club — an acclaimed 18-hole Sir Nick Faldo design set between mountains and lagoon in Central Vietnam. Book with Asia Golf Specialists."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/laguna-lang-co/"}
                imageUrl={"/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3.webp"}
                addressLocality={"Lang Co"}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={6891}
                par={71}
                designer="Sir Nick Faldo"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Laguna Golf Lang Co", item: "https://www.asiagolfspecialists.com/courses/vietnam/laguna-lang-co/" },
                ]}
            />


            
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Laguna Golf Lang Co</strong> is a premier Par 71 championship layout in Lang Co, Vietnam, crafted by <strong>Sir Nick Faldo</strong> (2013) and stretching to <strong>6,891 Yards</strong> across a parkland environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its natural terrain & rice paddy routing (Signature working rice fields) and shot shaping & tactical strategy (Faldo).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Laguna Golf Lang Co (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie local line knowledge (Expert on elevation & green grain), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Lang Co golf tour by AGS, Laguna Golf Lang Co provides a distinct architectural test by Sir Nick Faldo that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Laguna Golf Lang Co"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/laguna-lang-co/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3.webp"
    addressLocality="Lang Co"
    addressCountry="VN"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="Nick Faldo Parkland & Rice Paddy Design • Central Coast"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Natural Terrain & Rice Paddy Routing",
            score: 9.8,
            highlight: "Signature working rice fields"
      },
      {
            label: "Shot Shaping & Tactical Strategy",
            score: 9.7,
            highlight: "Faldo's thinking-man's layout"
      },
      {
            label: "Caddie Local Line Knowledge",
            score: 9.5,
            highlight: "Expert on elevation & green grain"
      },
      {
            label: "Integrated Banyan Tree Resort Logistics",
            score: 9.6,
            highlight: "Direct cart transfers to luxury villas"
      }
]}
    verdict="Sir Nick Faldo's layout weaves through jungle hills, rice paddies, and rocky ocean headlands. Demands positional golf over raw power; a truly unique Asian golf masterpiece."
  />


            <CourseFAQSection
                courseName="Laguna Golf Lang Co"
                faqs={[
          {
                    "q": "What are the key course specifications for Laguna Golf Lang Co?",
                    "a": "Laguna Golf Lang Co in Lang Co, Vietnam is a Par 71 championship layout designed by Sir Nick Faldo (opened 2013), measuring 6,891 Yards within a parkland setting. It is particularly noted for natural terrain & rice paddy routing (Signature working rice fields)."
          },
          {
                    "q": "How do I secure tee times and caddies at Laguna Golf Lang Co?",
                    "a": "Laguna Golf Lang Co operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie local line knowledge (Expert on elevation & green grain)), and private VIP transfers from your Lang Co hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Laguna Golf Lang Co?",
                    "a": "Our field inspection highlights Laguna Golf Lang Co's shot shaping & tactical strategy (Faldo) alongside natural terrain & rice paddy routing (Signature working rice fields). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Laguna Golf Lang Co?",
                    "a": "February through September suits the central location of Laguna Golf Lang Co."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/laguna-lang-co/" venueName="Laguna Golf Lang Co" venueType="course" />
            <CourseNavigation
                prev={{ title: "KN Golf Links Cam Ranh", path: "/courses/vietnam/kn-golf-links/" }}
                next={{ title: "BRG Legend Hill Golf Resort", path: "/courses/vietnam/legend-hill/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
 );
}
