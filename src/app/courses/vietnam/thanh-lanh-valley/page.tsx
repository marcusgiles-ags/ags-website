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
 title: { absolute: "Thanh Lanh Valley Golf & Resort | Northern Vietnam Golf" },
 description: "Experience Thanh Lanh Valley Golf Club, an 18-hole parkland course north of Hanoi. Excellent year-round conditions. Book your Vietnam golf tour with AGS.",
 keywords: ["Thanh Lanh Valley Golf Resort", "Northern Vietnam Mountain Golf", "Vietnam Highland Golf", "Vietnam Golf Tours", "Swiss Alps Vietnam Golf"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/thanh-lanh-valley/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Thanh Lanh Valley Golf & Resort | Northern Vietnam Golf" },
        description: "Experience Thanh Lanh Valley Golf Club, an 18-hole parkland course north of Hanoi. Excellent year-round conditions. Book your Vietnam golf tour with AGS.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/thanh-lanh-valley/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/thanh-lanh-valley/thanh-lanh-valley-golf-resort-vietnam-1.webp",
            width: 1200,
            height: 630,
            alt: "Thanh Lanh Valley Golf & Resort | Switzerland of Northern Vietnam — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Thanh Lanh Valley Golf & Resort | Northern Vietnam Golf" },
        description: "Experience Thanh Lanh Valley Golf Club, an 18-hole parkland course north of Hanoi. Excellent year-round conditions. Book your Vietnam golf tour with AGS.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/thanh-lanh-valley/thanh-lanh-valley-golf-resort-vietnam-1.webp"],
    },
};

export default function ThanhLanhValley() {
 const images = [
 { src: "/images/courses/vietnam/thanh-lanh-valley/thanh-lanh-valley-golf-resort-vietnam-1.webp", alt: "Thanh Lanh Valley Golf Resort Vietnam Aerial Mountain Lake", caption: "Resort Vietnam Aerial Mountain Lake" },
 { src: "/images/courses/vietnam/thanh-lanh-valley/thanh-lanh-valley-golf-resort-swiss-alps-2.webp", alt: "Thanh Lanh Valley Golf Vietnam Swiss Alps Lake View", caption: "Vietnam Swiss Alps Lake View" },
 { src: "/images/courses/vietnam/thanh-lanh-valley/thanh-lanh-valley-golf-resort-fairway-3.webp", alt: "Thanh Lanh Valley Golf Vietnam Fairway Mountain Valley", caption: "Vietnam Fairway Mountain Valley" },
 { src: "/images/courses/vietnam/thanh-lanh-valley/thanh-lanh-valley-golf-resort-lake-4.webp", alt: "Thanh Lanh Valley Golf Vietnam Lake Hole Championship", caption: "Vietnam Lake Hole Championship" },
 { src: "/images/courses/vietnam/thanh-lanh-valley/thanh-lanh-valley-golf-resort-scenic-5.webp", alt: "Thanh Lanh Valley Golf Vietnam Scenic Mountain Course", caption: "Vietnam Scenic Mountain Course" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Highland Resort</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Thanh Lanh Valley<br /><span className="text-gold">Golf & Resort</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"The 'Switzerland of Vietnam' — the lake, the peaks, the cool air, and the silence."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', <a href="https://nickfaldodesign.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">Sir Nick Faldo</a>], ['Year Opened', '2021'], ['Location', 'Vinh Phuc Province, Northern Vietnam'], ['Style', 'Highland Resort'], ['Par', '72'], ['Length', '6,793 Yards (Blue Tees)'], ['Setting', 'Mountain valley, vast lake'], ['Character', 'Serene, cool, alpine feel'], ['Nickname', 'The Switzerland of Vietnam']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Thanh Lanh Valley Golf & Resort has earned the affectionate nickname "the Switzerland of Vietnam" — a title that captures the serene, alpine character of its stunning highland setting in Vinh Phuc Province. A massive natural lake sits at the heart of the resort, with towering forest-clad peaks rising on all sides and cool mountain breezes providing welcome relief from the Vietnamese heat.</p>
 <p>The golf course works sympathetically with the natural landscape, using the lake as both a visual centrepiece and a strategic water feature on multiple holes. The routing balances short, risk-reward par fours with longer, more measured challenges, providing a thoroughly enjoyable experience for a wide range of handicaps.</p>
 <p>Thanh Lanh Valley is one of the North's great weekend destinations for the visiting discerning golfer — close enough to Hanoi for a comfortable day trip, but immersive enough in its mountain and lakeside setting to feel entirely worlds away from the city.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Valley</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/vietnam/thanh-lanh-valley/"
  />
  </div>
  </section>
            <CourseSchemaBlock
                name="Thanh Lanh Valley Golf & Resort"
                description="The 'Switzerland of Vietnam' — the lake, the peaks, the cool air, and the silence."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/thanh-lanh-valley/"}
                imageUrl={"/images/courses/vietnam/thanh-lanh-valley/thanh-lanh-valley-golf-resort-vietnam-1.webp"}
                addressLocality={"Vinh Phuc"}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={6793}
                par={72}
                designer="Sir Nick Faldo"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Thanh Lanh Valley Golf & Resort", item: "https://www.asiagolfspecialists.com/courses/vietnam/thanh-lanh-valley/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Thanh Lanh Valley Golf & Resort</strong> is a premier Par 72 championship layout in Vinh Phuc, Vietnam, crafted by <strong>Sir Nick Faldo</strong> (2021) and stretching to <strong>6,793 Yards (Blue Tees)</strong> across a mountain valley, vast lake environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its alpine valley scenery & mirrored lake vistas (1,000m above sea level) and flawless green maintenance & rolling speed (Stimp 10.5+ year-round).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Thanh Lanh Valley Golf & Resort (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie slope & elevation expertise (Accurate club adjustment), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Vinh Phuc golf tour by AGS, Thanh Lanh Valley Golf & Resort provides a distinct architectural test by Sir Nick Faldo that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Thanh Lanh Valley Golf & Resort"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/thanh-lanh-valley/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/thanh-lanh-valley/thanh-lanh-valley-golf-resort-vietnam-1.webp"
    addressLocality="Vinh Phuc"
    addressCountry="VN"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="The Alpine Sanctuary of Northern Vietnam • Faldo Design"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Alpine Valley Scenery & Mirrored Lake Vistas",
            score: 9.9,
            highlight: "1,000m above sea level"
      },
      {
            label: "Flawless Green Maintenance & Rolling Speed",
            score: 9.7,
            highlight: "Stimp 10.5+ year-round"
      },
      {
            label: "Caddie Slope & Elevation Expertise",
            score: 9.5,
            highlight: "Accurate club adjustment"
      },
      {
            label: "European Chateau Clubhouse Architecture",
            score: 9.8,
            highlight: "Palatial alpine design"
      }
]}
    verdict="Often called the 'Switzerland of Vietnam,' Thanh Lanh Valley sits 1,000 meters above sea level beside a mirrored alpine lake. Cool breezes, dramatic elevation shifts, and a fairy-tale European clubhouse."
  />


            <CourseFAQSection
                courseName="Thanh Lanh Valley Golf & Resort"
                faqs={[
          {
                    "q": "What are the key course specifications for Thanh Lanh Valley Golf & Resort?",
                    "a": "Thanh Lanh Valley Golf & Resort in Vinh Phuc, Vietnam is a Par 72 championship layout designed by Sir Nick Faldo (opened 2021), measuring 6,793 Yards (Blue Tees) within a mountain valley, vast lake setting. It is particularly noted for alpine valley scenery & mirrored lake vistas (1,000m above sea level)."
          },
          {
                    "q": "How do I secure tee times and caddies at Thanh Lanh Valley Golf & Resort?",
                    "a": "Thanh Lanh Valley Golf & Resort operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie slope & elevation expertise (Accurate club adjustment)), and private VIP transfers from your Vinh Phuc hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Thanh Lanh Valley Golf & Resort?",
                    "a": "Our field inspection highlights Thanh Lanh Valley Golf & Resort's flawless green maintenance & rolling speed (Stimp 10.5+ year-round) alongside alpine valley scenery & mirrored lake vistas (1,000m above sea level). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Thanh Lanh Valley Golf & Resort?",
                    "a": "October through April is ideal for Thanh Lanh Valley Golf & Resort."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/thanh-lanh-valley/" venueName="Thanh Lanh Valley Golf & Resort" venueType="course" />
            <CourseNavigation
                prev={{ title: "Tan Son Nhat Golf Course", path: "/courses/vietnam/tan-son-nhat/" }}
                next={{ title: "The Bluffs Grand Ho Tram", path: "/courses/vietnam/the-bluffs-ho-tram/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
  

</main>
  );
}
