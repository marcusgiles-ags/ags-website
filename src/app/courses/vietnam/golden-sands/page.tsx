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
 title: { absolute: "Golden Sands Golf Resort Vietnam | Coastal Links Da Nang" },
 description: "Golden Sands Golf Club Quang Nam: Championship golf near Hoi An. Experience coastal, wetland, and dune terrain. Book your Vietnam/Thailand Tour!",
 keywords: ["Golden Sands Golf Resort Vietnam", "Da Nang Coastal Golf", "Links Golf Vietnam", "Vietnam Golf Tours", "Central Vietnam Golf"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/golden-sands/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Golden Sands Golf Resort Vietnam | Coastal Links Da Nang" },
        description: "Golden Sands Golf Club Quang Nam: Championship golf near Hoi An. Experience coastal, wetland, and dune terrain. Book your Vietnam/Thailand Tour!",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/golden-sands/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/golden-sands/golden-sands-golf-resort-vietnam-1.webp",
            width: 1200,
            height: 630,
            alt: "Golden Sands Golf Resort Vietnam | Coastal Links Da Nang — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Golden Sands Golf Resort Vietnam | Coastal Links Da Nang" },
        description: "Golden Sands Golf Club Quang Nam: Championship golf near Hoi An. Experience coastal, wetland, and dune terrain. Book your Vietnam/Thailand Tour!",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/golden-sands/golden-sands-golf-resort-vietnam-1.webp"],
    },
};

export default function GoldenSands() {
 const images = [
 { src: "/images/courses/vietnam/golden-sands/golden-sands-golf-resort-vietnam-1.webp", alt: "Golden Sands Golf Resort Vietnam Coastal Aerial View", caption: "Coastal aerial view, Golden Sands Golf Links" },
 { src: "/images/courses/vietnam/golden-sands/golden-sands-golf-resort-links-hole-2.webp", alt: "Golden Sands Golf Resort Vietnam Links Hole Coastal", caption: "Links-style coastal hole, Golden Sands" },
 { src: "/images/courses/vietnam/golden-sands/golden-sands-golf-resort-fairway-3.webp", alt: "Golden Sands Golf Resort Vietnam Championship Fairway", caption: "Championship fairway, Golden Sands Da Nang" },
 { src: "/images/courses/vietnam/golden-sands/golden-sands-golf-resort-bunkers-4.webp", alt: "Golden Sands Golf Vietnam Bunkers Greens Seaside - Premium Southeast Asia Golf Tours 2026", caption: "Bunkers and greens, Golden Sands seaside" },
 { src: "/images/courses/vietnam/golden-sands/golden-sands-golf-resort-signature-hole-5.webp", alt: "Golden Sands Golf Vietnam Signature Championship Hole", caption: "Signature championship hole, Golden Sands" },
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
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Golden Sands<br /><span className="text-gold">Golf Resort</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"A purist's links — firm, fast fairways and the constant companionship of the sea breeze."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', <a href="https://nicklausdesign.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">Nicklaus Design</a>], ['Year Opened', '2024'], ['Location', 'Central Vietnam Coastline'], ['Style', 'Links-style, Coastal'], ['Par', '72'], ['Length', '6,564 Yards (Blue Tees)'], ['Philosophy', 'Firm and fast, traditional links'], ['Setting', 'Coastal dunes and beach'], ['Character', 'Wind-influenced, classic links']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Golden Sands Golf Resort deliberately embraces the philosophy of classic links design — firm fairways, fast-running surfaces, and a commitment to ground-game strategy that rewards the inventive shot-maker over the high-ball hitter who seeks to fly everything to the pin.</p>
 <p>Located on Vietnam's central coastline, the layout is exposed to the prevailing sea breeze which transforms the course's character dramatically depending on the day's wind speed and direction. Players who adapt their game to the conditions will find Golden Sands thoroughly rewarding; those who stubbornly attack with the same approach every hole will be punished.</p>
 <p>An excellent option within a central Vietnam golf itinerary alongside the more internationally famous Da Nang courses, Golden Sands offers a different style of challenge and a more traditional playing experience making it a strong complement for any multi-course trip.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Sands</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/vietnam/golden-sands/"
  />
  </div>
  </section>
            <CourseSchemaBlock
                name="Golden Sands Golf Resort"
                description="A purist's links — firm, fast fairways and the constant companionship of the sea breeze."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/golden-sands/"}
                imageUrl={"/images/courses/vietnam/golden-sands/golden-sands-golf-resort-vietnam-1.webp"}
                addressLocality={"Da Nang"}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={6564}
                par={72}
                designer="Jack Nicklaus Design"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Golden Sands Golf Resort", item: "https://www.asiagolfspecialists.com/courses/vietnam/golden-sands/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Golden Sands Golf Resort</strong> is a premier Par 72 championship layout in Da Nang, Vietnam, crafted by <strong>Jack Nicklaus Design</strong> (2024) and stretching to <strong>6,564 Yards (Blue Tees)</strong> across a coastal dunes and beach environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its oceanfront dunes routing & beachfront holes (Direct beachside linksland) and fast-running sandy turf quality (Encourages low-running shotmaking).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Golden Sands Golf Resort (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie dunes navigation & reading (Local coastal sand knowledge), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Da Nang golf tour by AGS, Golden Sands Golf Resort provides a distinct architectural test by Jack Nicklaus Design that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Golden Sands Golf Resort"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/golden-sands/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/golden-sands/golden-sands-golf-resort-vietnam-1.webp"
    addressLocality="Da Nang"
    addressCountry="VN"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="Central Coast True Ocean Dunes • Nicklaus Design"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Oceanfront Dunes Routing & Beachfront Holes",
            score: 9.8,
            highlight: "Direct beachside linksland"
      },
      {
            label: "Fast-Running Sandy Turf Quality",
            score: 9.6,
            highlight: "Encourages low-running shotmaking"
      },
      {
            label: "Caddie Dunes Navigation & Reading",
            score: 9.5,
            highlight: "Local coastal sand knowledge"
      },
      {
            label: "Modern Coastal Clubhouse Architecture",
            score: 9.4,
            highlight: "Panoramic ocean terraces"
      }
]}
    verdict="A thrilling modern links-style addition to Central Vietnam's golf coast. Wide sandy waste areas and windswept beachside greens make every round an exhilarating challenge."
  />


            <CourseFAQSection
                courseName="Golden Sands Golf Resort"
                faqs={[
          {
                    "q": "What are the key course specifications for Golden Sands Golf Resort?",
                    "a": "Golden Sands Golf Resort in Da Nang, Vietnam is a Par 72 championship layout designed by Jack Nicklaus Design (opened 2024), measuring 6,564 Yards (Blue Tees) within a coastal dunes and beach setting. It is particularly noted for oceanfront dunes routing & beachfront holes (Direct beachside linksland)."
          },
          {
                    "q": "How do I secure tee times and caddies at Golden Sands Golf Resort?",
                    "a": "Golden Sands Golf Resort operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie dunes navigation & reading (Local coastal sand knowledge)), and private VIP transfers from your Da Nang hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Golden Sands Golf Resort?",
                    "a": "Our field inspection highlights Golden Sands Golf Resort's fast-running sandy turf quality (Encourages low-running shotmaking) alongside oceanfront dunes routing & beachfront holes (Direct beachside linksland). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Golden Sands Golf Resort?",
                    "a": "February through September is ideal for Golden Sands Golf Resort."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/golden-sands/" venueName="Golden Sands Golf Resort" venueType="course" />
            <CourseNavigation
                prev={{ title: "FLC Ha Long Bay Golf Club", path: "/courses/vietnam/flc-ha-long-bay/" }}
                next={{ title: "Heron Lake Golf Course Vietnam", path: "/courses/vietnam/heron-lake/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
 );
}
