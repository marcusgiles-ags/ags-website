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
 title: { absolute: "Long Thanh Golf Resort | Ron Fream Saigon Golf Course" },
 description: "Experience premium golf at Long Thanh Golf Club, Ho Chi Minh City. This 27-hole championship course offers stunning views.",
 keywords: ["Long Thanh Golf Resort", "Ron Fream Golf Vietnam", "Saigon Golf Course", "Ho Chi Minh City Golf", "Vietnam Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/long-thanh/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Long Thanh Golf Resort | Ron Fream Saigon Golf Course" },
        description: "Experience premium golf at Long Thanh Golf Club, Ho Chi Minh City. This 27-hole championship course offers stunning views.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/long-thanh/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/long-thanh/long-thanh-golf-resort-vietnam-saigon-1.webp",
            width: 1200,
            height: 630,
            alt: "Long Thanh Golf Resort Vietnam | Ron Fream Saigon Golf Course — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Long Thanh Golf Resort | Ron Fream Saigon Golf Course" },
        description: "Experience premium golf at Long Thanh Golf Club, Ho Chi Minh City. This 27-hole championship course offers stunning views.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/long-thanh/long-thanh-golf-resort-vietnam-saigon-1.webp"],
    },
};

export default function LongThanh() {
 const images = [
 { src: "/images/courses/vietnam/long-thanh/long-thanh-golf-resort-vietnam-saigon-1.webp", alt: "Long Thanh Golf Resort Vietnam Saigon Aerial View - Premium Southeast Asia Golf Tours 2026", caption: "Resort Vietnam Saigon Aerial View" },
 { src: "/images/courses/vietnam/long-thanh/long-thanh-golf-resort-ron-fream-design-2.webp", alt: "Long Thanh Golf Resort Ron Fream Design Vietnam Hole", caption: "Resort Ron Fream Design Vietnam Hole" },
 { src: "/images/courses/vietnam/long-thanh/long-thanh-golf-resort-water-hazard-3.webp", alt: "Long Thanh Golf Resort Water Hazard Rolling Terrain Vietnam", caption: "Resort Water Hazard Rolling Terrain" },
 { src: "/images/courses/vietnam/long-thanh/long-thanh-golf-resort-championship-layout-4.webp", alt: "Long Thanh Golf Resort Championship Layout Vietnam", caption: "Resort Championship Layout" },
 { src: "/images/courses/vietnam/long-thanh/long-thanh-golf-resort-fairway-saigon-5.webp", alt: "Long Thanh Golf Resort Fairway South Vietnam Saigon", caption: "Resort Fairway South Vietnam Saigon" },
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
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Long Thanh<br /><span className="text-gold">Golf Resort</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Rolling terrain and relentless water — every shot demands full commitment."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', 'Golfplan / Ron Fream'], ['Year Opened', '2001'], ['Par', '72'], ['Length', '6,897 Yards'], ['Grass Type', 'Zoysia / Bermuda Greens'], ['Signature Feature', 'Massive lake water hazards']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Long Thanh Golf Resort is one of the most enduring and popular golf venues in Southern Vietnam, serving the Ho Chi Minh City market since 1994. Designed by Ron Fream — the prolific American designer responsible for some of Asia's most creative layouts — the course uses its rolling topography to strong creative effect.</p>
 <p>Massive natural and man-made lake hazards define the visual experience at Long Thanh, coming into play on hole after hole in ways that demand genuine commitment to the target line rather than cautious misses in the wrong direction. The routing rewards attacking golf balanced with intelligent course management.</p>
 <p>Well maintained and professionally managed, Long Thanh is a staple on the Saigon golf circuit for a reason. For discerning golfers based in Ho Chi Minh City for business or leisure, it represents a reliable, high-quality round just 30 minutes from the city centre.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Challenge</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/vietnam/long-thanh/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://longthanhgolf.com/"]}
                name="Long Thanh Golf Resort"
                description="Rolling terrain and relentless water — every shot demands full commitment."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/long-thanh/"}
                imageUrl={"/images/courses/vietnam/long-thanh/long-thanh-golf-resort-vietnam-saigon-1.webp"}
                addressLocality={"Ho Chi Minh City"}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={6897}
                par={72}
                designer="Golfplan / Ron Fream"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Long Thanh Golf Resort", item: "https://www.asiagolfspecialists.com/courses/vietnam/long-thanh/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Long Thanh Golf Resort</strong> is a premier Par 72 championship layout in Ho Chi Minh City, Vietnam, crafted by <strong>Golfplan / Ron Fream</strong> (2001) and stretching to <strong>6,897 Yards</strong> across a championship layout environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its manicured tropical landscaping (Pristine palms, lakes & flowers) and lake & hill layout variety (Two distinct 18-hole experiences).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Long Thanh Golf Resort (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie line-reading expertise (Regarded as best in Southern Vietnam), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Ho Chi Minh City golf tour by AGS, Long Thanh Golf Resort provides a distinct architectural test by Golfplan / Ron Fream that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Long Thanh Golf Resort"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/long-thanh/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/long-thanh/long-thanh-golf-resort-vietnam-saigon-1.webp"
    addressLocality="Ho Chi Minh City"
    addressCountry="VN"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="36-Hole Palm & Lake Sanctuary • Ron Fream"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Manicured Tropical Landscaping",
            score: 9.7,
            highlight: "Pristine palms, lakes & flowers"
      },
      {
            label: "Lake & Hill Layout Variety",
            score: 9.5,
            highlight: "Two distinct 18-hole experiences"
      },
      {
            label: "Caddie Line-Reading Expertise",
            score: 9.5,
            highlight: "Regarded as best in Southern Vietnam"
      },
      {
            label: "Clubhouse Hospitality & Dining",
            score: 9.4,
            highlight: "Outstanding Vietnamese cuisine"
      }
]}
    verdict="Consistently voted among the best golf courses in Southern Vietnam. Ron Fream's 36-hole complex combines scenic lake holes with rolling hill layouts amidst pristine palms and waterfalls."
  />


            <CourseFAQSection
                courseName="Long Thanh Golf Resort"
                faqs={[
          {
                    "q": "What are the key course specifications for Long Thanh Golf Resort?",
                    "a": "Long Thanh Golf Resort in Ho Chi Minh City, Vietnam is a Par 72 championship layout designed by Golfplan / Ron Fream (opened 2001), measuring 6,897 Yards within a championship layout setting. It is particularly noted for manicured tropical landscaping (Pristine palms, lakes & flowers)."
          },
          {
                    "q": "How do I secure tee times and caddies at Long Thanh Golf Resort?",
                    "a": "Long Thanh Golf Resort operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie line-reading expertise (Regarded as best in Southern Vietnam)), and private VIP transfers from your Ho Chi Minh City hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Long Thanh Golf Resort?",
                    "a": "Our field inspection highlights Long Thanh Golf Resort's lake & hill layout variety (Two distinct 18-hole experiences) alongside manicured tropical landscaping (Pristine palms, lakes & flowers). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Long Thanh Golf Resort?",
                    "a": "November through April is the prime season for Long Thanh Golf Resort."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/long-thanh/" venueName="Long Thanh Golf Resort" venueType="course" />
            <CourseNavigation
                prev={{ title: "BRG Legend Hill Golf Resort", path: "/courses/vietnam/legend-hill/" }}
                next={{ title: "Montgomerie Links Vietnam", path: "/courses/vietnam/montgomerie-links/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
 );
}
