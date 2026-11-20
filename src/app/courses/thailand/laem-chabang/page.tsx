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
 title: { absolute: "Laem Chabang International CC | Thailand" },
 description: "Play Laem Chabang International Country Club — Jack Nicklaus 27-hole design widely considered the best golf in the Pattaya region. Book with AGS.",
 keywords: ["Laem Chabang International Country Club", "Pattaya Best Golf Course", "Jack Nicklaus Golf Thailand", "27 Hole Golf Pattaya", "Thailand Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/thailand/laem-chabang/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Laem Chabang International CC | Thailand" },
        description: "Play Laem Chabang International Country Club — Jack Nicklaus 27-hole design widely considered the best golf in the Pattaya region. Book with AGS.",
        url: "https://www.asiagolfspecialists.com/courses/thailand/laem-chabang/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/thailand/laem-chabang/laem-chabang-international-pattaya-thailand-1.webp",
            width: 1200,
            height: 630,
            alt: "Laem Chabang International Country Club | Best Golf Pattaya Nicklaus — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Laem Chabang International CC | Thailand" },
        description: "Play Laem Chabang International Country Club — Jack Nicklaus 27-hole design widely considered the best golf in the Pattaya region. Book with AGS.",
        images: ["https://www.asiagolfspecialists.com/images/courses/thailand/laem-chabang/laem-chabang-international-pattaya-thailand-1.webp"],
    },
};

export default function LaemChabang() {
 const images = [
 { src: "/images/courses/thailand/laem-chabang/laem-chabang-international-pattaya-thailand-1.webp", alt: "Laem Chabang International Country Club Pattaya Thailand Jack Nicklaus Aerial", caption: "Pattaya Thailand Jack Nicklaus Aerial" },
 { src: "/images/courses/thailand/laem-chabang/laem-chabang-international-nicklaus-27-hole-2.webp", alt: "Laem Chabang International Golf Thailand Nicklaus 27 Hole Design", caption: "Laem Chabang International Golf Thailand Nicklaus 27 Hole Design" },
 { src: "/images/courses/thailand/laem-chabang/laem-chabang-international-best-pattaya-3.webp", alt: "Laem Chabang International Golf Thailand Best Pattaya Course", caption: "Laem Chabang International Golf Thailand Best Pattaya Course" },
 { src: "/images/courses/thailand/laem-chabang/laem-chabang-international-championship-layout-4.webp", alt: "Laem Chabang International Golf Pattaya Thailand Championship Hole", caption: "Laem Chabang International Golf Pattaya Thailand Championship Hole" },
 { src: "/images/courses/thailand/laem-chabang/laem-chabang-international-fairway-5.webp", alt: "Laem Chabang International Golf Thailand Championship Fairway", caption: "Laem Chabang International Golf Thailand Championship Fairway" },
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
                    <DestinationBackLink country="Thailand" countryLink="/destinations/thailand/courses/" />
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Jack Nicklaus Design</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Laem Chabang<br /><span className="text-gold">International Country Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Pattaya's finest 27 holes — Jack Nicklaus's most celebrated Thai design."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', <a href="https://nicklausdesign.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">Jack Nicklaus</a>], ['Year Opened', '1995'], ['Location', 'Si Racha, Chonburi (near Pattaya)'], ['Total Holes', '27 (three 9-hole loops: Valley, Mountain, Lake)'], ['Par', '72 (any 18 combination)'], ['Length', '6,772 Yards (Blue Tees)'], ['Setting', 'Rolling hills, lakes, mountain views'], ['Distinction', 'Best golf course in Pattaya region'], ['Top 100 Asia Ranking', <a href="https://www.top100golfcourses.com/golf-courses/asia/thailand" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">#8 in Asia (2026)</a>]
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Laem Chabang International Country Club is Jack Nicklaus's most celebrated design in Thailand and the unanimous benchmark for golf in the Pattaya region. The expansive 27-hole facility — divided into Valley, Mountain, and Lake nines — offers a variety of terrain and playing styles that ensures no two visits feel the same, even for regular members.</p>
 <p>The Mountain and Valley combination is considered the premium pairing, with the Mountain nine's elevation changes and panoramic views complementing the Valley nine's strategic water features and tree-lined corridors. The Lake nine, while shorter, is relentlessly scenic and tests approach play with demanding pin positions surrounded by water on multiple holes.</p>
 <p>For discerning golfers making the Pattaya golf circuit, Laem Chabang is non-negotiable — it is the course that all others in the region are measured against, and it consistently delivers the thorough playing experience and excellent conditioning that Nicklaus's best designs are known for worldwide.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">27 Holes</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/thailand/laem-chabang/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://www.laemchabanggolf.com/"]}
                name="Laem Chabang International Country Club"
                description="Pattaya's finest 27 holes — Jack Nicklaus's most celebrated Thai design."
                url={"https://www.asiagolfspecialists.com/courses/thailand/laem-chabang/"}
                imageUrl={"/images/courses/thailand/laem-chabang/laem-chabang-international-pattaya-thailand-1.webp"}
                addressLocality={"Pattaya"}
                addressCountry={"TH"}
                numberOfHoles={27}
                courseLength={6772}
                par={72}
                designer="Jack Nicklaus"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Thailand", item: "https://www.asiagolfspecialists.com/destinations/thailand/" },
                    { name: "Thailand Courses", item: "https://www.asiagolfspecialists.com/destinations/thailand/courses/" },
                    { name: "Laem Chabang International Country Club", item: "https://www.asiagolfspecialists.com/courses/thailand/laem-chabang/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Laem Chabang International Country Club</strong> is a premier Par 72 (any 18 combination) championship layout in Pattaya, Thailand, crafted by <strong>Jack Nicklaus</strong> (1995) and stretching to <strong>6,772 Yards (Blue Tees)</strong> across a rolling hills, lakes, mountain views environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its 27-hole nicklaus tri-course variety (Mountain, Lake, and Valley) and distinct dramatic elevations & rocks (Exposed granite outcroppings).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Laem Chabang International Country Club (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Thailand dry season. Our curatorial scorecard specifically notes its night golf on mountain course (Premier floodlit layout), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Pattaya golf tour by AGS, Laem Chabang International Country Club provides a distinct architectural test by Jack Nicklaus that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Laem Chabang International Country Club"
    itemUrl="https://www.asiagolfspecialists.com/courses/thailand/laem-chabang/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/thailand/laem-chabang/laem-chabang-international-pattaya-thailand-1.webp"
    addressLocality="Pattaya"
    addressCountry="TH"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="Jack Nicklaus 27-Hole Masterpiece • Pattaya"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "27-Hole Nicklaus Tri-Course Variety",
            score: 9.8,
            highlight: "Mountain, Lake, and Valley"
      },
      {
            label: "Distinct Dramatic Elevations & Rocks",
            score: 9.7,
            highlight: "Exposed granite outcroppings"
      },
      {
            label: "Night Golf on Mountain Course",
            score: 9.6,
            highlight: "Premier floodlit layout"
      },
      {
            label: "Premier Pattaya Golf Resort Complex",
            score: 9.5,
            highlight: "Grand clubhouse & villas"
      }
]}
    verdict="Considered Jack Nicklaus's finest layout in Thailand. 27 distinct holes weaving through steep rocky hills, natural reservoirs, and scenic valleys. A mandatory inclusion for Pattaya itineraries."
  />


            <CourseFAQSection
                courseName="Laem Chabang International Country Club"
                faqs={[
          {
                    "q": "What are the key course specifications for Laem Chabang International Country Club?",
                    "a": "Laem Chabang International Country Club in Pattaya, Thailand is a Par 72 (any 18 combination) championship layout designed by Jack Nicklaus (opened 1995), measuring 6,772 Yards (Blue Tees) within a rolling hills, lakes, mountain views setting. It is particularly noted for 27-hole nicklaus tri-course variety (Mountain, Lake, and Valley)."
          },
          {
                    "q": "How do I secure tee times and caddies at Laem Chabang International Country Club?",
                    "a": "Laem Chabang International Country Club operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (night golf on mountain course (Premier floodlit layout)), and private VIP transfers from your Pattaya hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Laem Chabang International Country Club?",
                    "a": "Our field inspection highlights Laem Chabang International Country Club's distinct dramatic elevations & rocks (Exposed granite outcroppings) alongside 27-hole nicklaus tri-course variety (Mountain, Lake, and Valley). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Laem Chabang International Country Club?",
                    "a": "November through April is the prime season for Laem Chabang International Country Club."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/thailand/laem-chabang/" venueName="Laem Chabang International Country Club" venueType="course" />
            <CourseNavigation
                prev={{ title: "Flora Ville Golf & Country Club", path: "/courses/thailand/flora-ville/" }}
                next={{ title: "Laguna Golf Phuket", path: "/courses/thailand/laguna-phuket/" }}
                country="Thailand"
                countryLink="/destinations/thailand/courses/"
            />
 

</main>
 );
}
