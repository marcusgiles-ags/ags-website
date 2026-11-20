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
 title: { absolute: "Taekwang Jeongsan Country Club | Saigon River Golf Vietnam" },
 description: "Reach Taekwang Jeongsan by private speedboat down the Saigon River — a unique Ron Fream golf experience near Ho Chi Minh City. Book with AGS.",
 keywords: ["Taekwang Jeongsan Country Club", "Saigon River Golf", "Ho Chi Minh City Golf", "Vietnam Golf Tours", "Ron Fream Golf Vietnam"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/taekwang-jeongsan/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Taekwang Jeongsan Country Club | Saigon River Golf Vietnam" },
        description: "Reach Taekwang Jeongsan by private speedboat down the Saigon River — a unique Ron Fream golf experience near Ho Chi Minh City. Book with AGS.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/taekwang-jeongsan/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/taekwang-jeongsan/taekwang-jeongsan-country-club-vietnam-1.webp",
            width: 1200,
            height: 630,
            alt: "Taekwang Jeongsan Country Club | Saigon River Golf Vietnam — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Taekwang Jeongsan Country Club | Saigon River Golf Vietnam" },
        description: "Reach Taekwang Jeongsan by private speedboat down the Saigon River — a unique Ron Fream golf experience near Ho Chi Minh City. Book with AGS.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/taekwang-jeongsan/taekwang-jeongsan-country-club-vietnam-1.webp"],
    },
};

export default function TaekwangJeongsan() {
 const images = [
 { src: "/images/courses/vietnam/taekwang-jeongsan/taekwang-jeongsan-country-club-vietnam-1.webp", alt: "Taekwang Jeongsan Country Club Vietnam Aerial Golf", caption: "Vietnam Aerial Golf" },
 { src: "/images/courses/vietnam/taekwang-jeongsan/taekwang-jeongsan-country-club-saigon-river-2.webp", alt: "Taekwang Jeongsan Country Club Saigon River Speedboat Access", caption: "Saigon River Speedboat Access" },
 { src: "/images/courses/vietnam/taekwang-jeongsan/taekwang-jeongsan-country-club-layout-3.webp", alt: "Taekwang Jeongsan Country Club Ron Fream Design Vietnam Hole", caption: "Ron Fream Design Vietnam Hole" },
 { src: "/images/courses/vietnam/taekwang-jeongsan/taekwang-jeongsan-country-club-fairway-4.webp", alt: "Taekwang Jeongsan Country Club Fairway Championship Vietnam", caption: "Fairway Championship" },
 { src: "/images/courses/vietnam/taekwang-jeongsan/taekwang-jeongsan-country-club-greens-5.webp", alt: "Taekwang Jeongsan Country Club Championship Greens Vietnam", caption: "Championship Greens" },
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
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Taekwang Jeongsan<br /><span className="text-gold">Country Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"The only course in Asia you arrive at by private speedboat down the Saigon River."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', 'Golfplan / Ron Fream'], ['Year Opened', '2012'], ['Par', '72'], ['Length', '7,174 Yards'], ['Grass Type', 'Paspalum / Bermuda'], ['Access', 'Private speedboat (Saigon River)']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Taekwang Jeongsan Country Club occupies a unique position in Vietnam's golf landscape — literally. Situated on a river island south of Ho Chi Minh City, the club is accessible exclusively by private speedboat from the Saigon River pier, making the journey to the first tee a uniquely cinematic experience.</p>
 <p>Designed by Ron Fream of Golfplan, the layout is known for its use of challenging, strategic bunkering and strong par-4 corridors through dense tropical vegetation. The course offers a private, exclusive atmosphere that stands in sharp contrast to the busier resort circuits around the city.</p>
 <p>Taekwang Jeongsan caters to a discerning clientele seeking a private-members experience in southern Vietnam. For the discerning golf traveller who has played the standard Saigon circuit, this destination offers something genuinely different and memorable.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">River Island</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/vietnam/taekwang-jeongsan/"
  />
  </div>
  </section>
            <CourseSchemaBlock
                name="Taekwang Jeongsan Country Club"
                description="The only course in Asia you arrive at by private speedboat down the Saigon River."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/taekwang-jeongsan/"}
                imageUrl={"/images/courses/vietnam/taekwang-jeongsan/taekwang-jeongsan-country-club-vietnam-1.webp"}
                addressLocality={"Ho Chi Minh City"}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={7174}
                par={72}
                designer="Golfplan / Ron Fream"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Taekwang Jeongsan Country Club", item: "https://www.asiagolfspecialists.com/courses/vietnam/taekwang-jeongsan/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Taekwang Jeongsan Country Club</strong> is a premier Par 72 championship layout in Ho Chi Minh City, Vietnam, crafted by <strong>Golfplan / Ron Fream</strong> (2012) and stretching to <strong>7,174 Yards</strong> across a championship layout environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its private river speedboat transfer (30-min cruise from downtown Saigon) and island breeze & tree-lined fairways (Refreshing river micro-climate).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Taekwang Jeongsan Country Club (Private speedboat (Saigon River)) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie consistency & professionalism (Disciplined service), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Ho Chi Minh City golf tour by AGS, Taekwang Jeongsan Country Club provides a distinct architectural test by Golfplan / Ron Fream that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Taekwang Jeongsan Country Club"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/taekwang-jeongsan/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/taekwang-jeongsan/taekwang-jeongsan-country-club-vietnam-1.webp"
    addressLocality="Ho Chi Minh City"
    addressCountry="VN"
    overallScore={4.6}
    maxScore={5.0}
    gradeBadge="Saigon River Island Golf • Dai Phuoc"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Private River Speedboat Transfer",
            score: 9.6,
            highlight: "30-min cruise from downtown Saigon"
      },
      {
            label: "Island Breeze & Tree-Lined Fairways",
            score: 9.3,
            highlight: "Refreshing river micro-climate"
      },
      {
            label: "Caddie Consistency & Professionalism",
            score: 9.4,
            highlight: "Disciplined service"
      },
      {
            label: "Korean-Standard Clubhouse Luxury",
            score: 9.5,
            highlight: "High-end Korean dining & bathhouse"
      }
]}
    verdict="Located on Dai Phuoc Island on the Dong Nai River, accessible by direct boat from downtown Saigon. A tranquil island layout offering firm greens, cooling breezes, and great dining."
  />


            <CourseFAQSection
                courseName="Taekwang Jeongsan Country Club"
                faqs={[
          {
                    "q": "What are the key course specifications for Taekwang Jeongsan Country Club?",
                    "a": "Taekwang Jeongsan Country Club in Ho Chi Minh City, Vietnam is a Par 72 championship layout designed by Golfplan / Ron Fream (opened 2012), measuring 7,174 Yards within a championship layout setting. It is particularly noted for private river speedboat transfer (30-min cruise from downtown Saigon)."
          },
          {
                    "q": "How do I secure tee times and caddies at Taekwang Jeongsan Country Club?",
                    "a": "Taekwang Jeongsan Country Club operates under private speedboat (saigon river) protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie consistency & professionalism (Disciplined service)), and private VIP transfers from your Ho Chi Minh City hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Taekwang Jeongsan Country Club?",
                    "a": "Our field inspection highlights Taekwang Jeongsan Country Club's island breeze & tree-lined fairways (Refreshing river micro-climate) alongside private river speedboat transfer (30-min cruise from downtown Saigon). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Taekwang Jeongsan Country Club?",
                    "a": "November through April offers the best conditions at Taekwang Jeongsan Country Club."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/taekwang-jeongsan/" venueName="Taekwang Jeongsan Country Club" venueType="course" />
            <CourseNavigation
                prev={{ title: "Sky Lake Golf Club Sky Course", path: "/courses/vietnam/sky-lake-sky/" }}
                next={{ title: "Tan Son Nhat Golf Course", path: "/courses/vietnam/tan-son-nhat/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
 );
}
