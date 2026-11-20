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
 title: { absolute: "Royal Long An Golf & Country Club | Nick Faldo Vietnam" },
 description: "Experience Royal Long An Golf & Country Club, a premier 18-hole championship course in Vietnam. Book your Asia Golf Tour today!",
 keywords: ["Royal Long An Golf Country Club", "Nick Faldo Golf Vietnam", "Ho Chi Minh City Golf", "Vietnam Golf Tours", "Sustainable Golf Vietnam"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/royal-long-an/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Royal Long An Golf & Country Club | Nick Faldo Vietnam" },
        description: "Experience Royal Long An Golf & Country Club, a premier 18-hole championship course in Vietnam. Book your Asia Golf Tour today!",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/royal-long-an/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/royal-long-an/royal-long-an-golf-country-club-vietnam-1.webp",
            width: 1200,
            height: 630,
            alt: "Royal Long An Golf & Country Club | Nick Faldo Vietnam — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Royal Long An Golf & Country Club | Nick Faldo Vietnam" },
        description: "Experience Royal Long An Golf & Country Club, a premier 18-hole championship course in Vietnam. Book your Asia Golf Tour today!",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/royal-long-an/royal-long-an-golf-country-club-vietnam-1.webp"],
    },
};

export default function RoyalLongAn() {
 const images = [
 { src: "/images/courses/vietnam/royal-long-an/royal-long-an-golf-country-club-vietnam-1.webp", alt: "Royal Long An Golf Country Club Vietnam Aerial Nick Faldo", caption: "Country Club Vietnam Aerial Nick Faldo" },
 { src: "/images/courses/vietnam/royal-long-an/royal-long-an-golf-nick-faldo-design-2.webp", alt: "Royal Long An Golf Club Vietnam Nick Faldo Championship Hole", caption: "Club Vietnam Nick Faldo Championship Hole" },
 { src: "/images/courses/vietnam/royal-long-an/royal-long-an-golf-sustainability-3.webp", alt: "Royal Long An Golf Club Vietnam Sustainable Course Design", caption: "Club Vietnam Sustainable Course Design" },
 { src: "/images/courses/vietnam/royal-long-an/royal-long-an-golf-fairway-saigon-4.webp", alt: "Royal Long An Golf Vietnam Fairway South Vietnam Championship", caption: "Vietnam Fairway South Vietnam Championship" },
 { src: "/images/courses/vietnam/royal-long-an/royal-long-an-golf-championship-green-5.webp", alt: "Royal Long An Golf Club Vietnam Championship Green", caption: "Club Vietnam Championship Green" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Sir Nick Faldo Design</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Royal Long An<br /><span className="text-gold">Golf & Country Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Sir Nick Faldo's most environmentally considered design — golf in harmony with the land."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', <a href="https://nickfaldodesign.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">Sir Nick Faldo</a>], ['Year Opened', '2023'], ['Location', 'Long An Province, near HCMC'], ['Par', '72'], ['Length', '7,090 Yards'], ['Philosophy', 'Sustainability-focused design'], ['Setting', 'Parkland, water features']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Royal Long An Golf & Country Club represents a different philosophy in Sir Nick Faldo's design portfolio — one centred on environmental integration and sustainability. Located in Long An Province, the course was designed to work with the existing wetland and agricultural landscape rather than imposing a manufactured golf environment onto it.</p>
 <p>The result is a layout of genuine natural beauty, where rice paddies, wetlands, and mature vegetation frame the holes throughout the round. The course design rewards strategic thinking and precise iron play, with Faldo's signature emphasis on properly positioned approach shots to reach short-sided pin positions.</p>
 <p>An excellent complement to the more dramatic southern Vietnam courses, Royal Long An appeals to golfers who appreciate refined design over visual spectacle, and who want to experience a genuinely different style of championship golf just south of Ho Chi Minh City.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Estate</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/vietnam/royal-long-an/"
  />
  </div>
  </section>
            <CourseSchemaBlock
                name="Royal Long An Golf & Country Club"
                description="Sir Nick Faldo's most environmentally considered design — golf in harmony with the land."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/royal-long-an/"}
                imageUrl={"/images/courses/vietnam/royal-long-an/royal-long-an-golf-country-club-vietnam-1.webp"}
                addressLocality={"Long An"}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={7090}
                par={72}
                designer="Sir Nick Faldo"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Royal Long An Golf & Country Club", item: "https://www.asiagolfspecialists.com/courses/vietnam/royal-long-an/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Royal Long An Golf & Country Club</strong> is a premier Par 72 championship layout in Long An, Vietnam, crafted by <strong>Sir Nick Faldo</strong> (2023) and stretching to <strong>7,090 Yards</strong> across a parkland, water features environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its natural delta waterway hazard strategy (Water comes into play cleverly) and immaculate green surfaces & roll (True, fast-rolling surfaces).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Royal Long An Golf & Country Club (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie wind & carry reading (Prevents penal water miscues), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Long An golf tour by AGS, Royal Long An Golf & Country Club provides a distinct architectural test by Sir Nick Faldo that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Royal Long An Golf & Country Club"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/royal-long-an/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/royal-long-an/royal-long-an-golf-country-club-vietnam-1.webp"
    addressLocality="Long An"
    addressCountry="VN"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Sir Nick Faldo Waterway Masterpiece • South"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Natural Delta Waterway Hazard Strategy",
            score: 9.6,
            highlight: "Water comes into play cleverly"
      },
      {
            label: "Immaculate Green Surfaces & Roll",
            score: 9.5,
            highlight: "True, fast-rolling surfaces"
      },
      {
            label: "Caddie Wind & Carry Reading",
            score: 9.4,
            highlight: "Prevents penal water miscues"
      },
      {
            label: "Contemporary Eco-Clubhouse Facilities",
            score: 9.4,
            highlight: "Sustainable modern luxury"
      }
]}
    verdict="Sir Nick Faldo's modern Southern Vietnam masterpiece makes brilliant use of Mekong Delta waterways. Demands crisp iron play and strategic tee shots to avoid penalty hazards."
  />


            <CourseFAQSection
                courseName="Royal Long An Golf & Country Club"
                faqs={[
          {
                    "q": "What are the key course specifications for Royal Long An Golf & Country Club?",
                    "a": "Royal Long An Golf & Country Club in Long An, Vietnam is a Par 72 championship layout designed by Sir Nick Faldo (opened 2023), measuring 7,090 Yards within a parkland, water features setting. It is particularly noted for natural delta waterway hazard strategy (Water comes into play cleverly)."
          },
          {
                    "q": "How do I secure tee times and caddies at Royal Long An Golf & Country Club?",
                    "a": "Royal Long An Golf & Country Club operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie wind & carry reading (Prevents penal water miscues)), and private VIP transfers from your Long An hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Royal Long An Golf & Country Club?",
                    "a": "Our field inspection highlights Royal Long An Golf & Country Club's immaculate green surfaces & roll (True, fast-rolling surfaces) alongside natural delta waterway hazard strategy (Water comes into play cleverly). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Royal Long An Golf & Country Club?",
                    "a": "November through April is ideal for Royal Long An Golf & Country Club."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/royal-long-an/" venueName="Royal Long An Golf & Country Club" venueType="course" />
            <CourseNavigation
                prev={{ title: "Phoenix Golf Resort", path: "/courses/vietnam/phoenix-golf-resort/" }}
                next={{ title: "Sapa Grand Golf Course", path: "/courses/vietnam/sapa-grand/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
 );
}
