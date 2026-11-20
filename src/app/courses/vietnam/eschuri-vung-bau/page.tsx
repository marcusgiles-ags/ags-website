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
 title: { absolute: "Eschuri Vung Bau Golf Resort | Phu Quoc Island Golf Vietnam" },
 description: "Experience Eschuri Vung Bau Golf Club Phu Quoc! Island golf with Pacific views & tropical conditions. Book your Vietnam/Thailand Tour.",
 keywords: ["Eschuri Vung Bau Golf Resort", "Phu Quoc Golf Course", "Phu Quoc Island Golf", "Vietnam Golf Tours", "Tropical Golf Vietnam"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/eschuri-vung-bau/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Eschuri Vung Bau Golf Resort | Phu Quoc Island Golf Vietnam" },
        description: "Experience Eschuri Vung Bau Golf Club Phu Quoc! Island golf with Pacific views & tropical conditions. Book your Vietnam/Thailand Tour.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/eschuri-vung-bau/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/eschuri-vung-bau/eschuri-vung-bau-golf-resort-phu-quoc-1.webp",
            width: 1200,
            height: 630,
            alt: "Eschuri Vung Bau Golf Resort | Phu Quoc Island Golf Vietnam — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Eschuri Vung Bau Golf Resort | Phu Quoc Island Golf Vietnam" },
        description: "Experience Eschuri Vung Bau Golf Club Phu Quoc! Island golf with Pacific views & tropical conditions. Book your Vietnam/Thailand Tour.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/eschuri-vung-bau/eschuri-vung-bau-golf-resort-phu-quoc-1.webp"],
    },
};

export default function EschuriVungBau() {
 const images = [
 { src: "/images/courses/vietnam/eschuri-vung-bau/eschuri-vung-bau-golf-resort-phu-quoc-1.webp", alt: "Eschuri Vung Bau Golf Resort Phu Quoc Island Vietnam Aerial", caption: "Aerial view, Eschuri Golf Club, Phu Quoc Island" },
 { src: "/images/courses/vietnam/eschuri-vung-bau/eschuri-vung-bau-golf-coastal-tropical-2.webp", alt: "Vung Bau Golf Resort Phu Quoc Vietnam Coastal Tropical", caption: "Coastal tropical setting, Phu Quoc golf" },
 { src: "/images/courses/vietnam/eschuri-vung-bau/eschuri-vung-bau-golf-ocean-view-3.webp", alt: "Vung Bau Golf Resort Phu Quoc Ocean View Vietnam - Premium Southeast Asia Golf Tours 2026", caption: "Ocean view fairway, Phu Quoc Golf Club" },
 { src: "/images/courses/vietnam/eschuri-vung-bau/eschuri-vung-bau-golf-fairway-island-4.webp", alt: "Phu Quoc Island Golf Course Vietnam Fairway Championship", caption: "Island championship fairway layout" },
 { src: "/images/courses/vietnam/eschuri-vung-bau/eschuri-vung-bau-golf-championship-hole-5.webp", alt: "Vung Bau Golf Resort Phu Quoc Vietnam Championship Hole Green", caption: "Championship hole and green, Vung Bau Golf" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Island Golf</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Eschuri Vung Bau<br /><span className="text-gold">Golf Resort</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Phu Quoc's finest golf — where the South China Sea frames every shot."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', 'IMG / Steven McFarlane'], ['Year Opened', '2024'], ['Location', 'Phu Quoc Island, Vietnam'], ['Style', 'Tropical Coastal Resort'], ['Par', '72'], ['Length', '6,865 Yards (Blue Tees)'], ['Setting', 'Ocean-front, South China Sea'], ['Character', 'Raw tropical beauty'], ['Access', 'Phu Quoc International Airport']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Eschuri Vung Bau Golf Resort is Vietnam's island golf showcase — a spectacular tropical course on Phu Quoc Island where the South China Sea serves as the defining visual backdrop and strategic companion throughout the round. Located in one of Southeast Asia's fastest-growing resort destinations, it combines pristine natural beauty with championship-standard conditioning.</p>
 <p>The layout hugs the coastline, with several holes played directly along the ocean's edge rewarding bold play with unforgettable vistas. The vegetation is lush, raw, and tropical — a deliberate contrast to the manicured resort aesthetic found at many competitor layouts, giving Vung Bau an authentic, adventurous character.</p>
 <p>For discerning golfers extending their Vietnam itinerary to include Phu Quoc Island, Eschuri Vung Bau is the natural headline course. AGS can build full island packages incorporating golf, beach resorts, and island excursions for extended Vietnam travel experiences.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Island</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/vietnam/eschuri-vung-bau/"
  />
  </div>
  </section>
            <CourseSchemaBlock
                name="Eschuri Vung Bau Golf Resort"
                description="Phu Quoc's finest golf — where the South China Sea frames every shot."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/eschuri-vung-bau/"}
                imageUrl={"/images/courses/vietnam/eschuri-vung-bau/eschuri-vung-bau-golf-resort-phu-quoc-1.webp"}
                addressLocality={"Phu Quoc"}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={6865}
                par={72}
                designer="IMG / Steven McFarlane"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Eschuri Vung Bau Golf Resort", item: "https://www.asiagolfspecialists.com/courses/vietnam/eschuri-vung-bau/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Eschuri Vung Bau Golf Resort</strong> is a premier Par 72 championship layout in Phu Quoc, Vietnam, crafted by <strong>IMG / Steven McFarlane</strong> (2024) and stretching to <strong>6,865 Yards (Blue Tees)</strong> across a ocean-front, south china sea environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its coastal island rainforest environment (Pristine coastal jungle canopy) and pristine paspalum conditioning (Smooth tournament greens).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Eschuri Vung Bau Golf Resort (Phu Quoc International Airport) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie island hospitality & warmth (Attentive personalized service), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Phu Quoc golf tour by AGS, Eschuri Vung Bau Golf Resort provides a distinct architectural test by IMG / Steven McFarlane that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Eschuri Vung Bau Golf Resort"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/eschuri-vung-bau/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/eschuri-vung-bau/eschuri-vung-bau-golf-resort-phu-quoc-1.webp"
    addressLocality="Phu Quoc"
    addressCountry="VN"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Tropical Island Rainforest Sanctuary • Phu Quoc"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Coastal Island Rainforest Environment",
            score: 9.8,
            highlight: "Pristine coastal jungle canopy"
      },
      {
            label: "Pristine Paspalum Conditioning",
            score: 9.5,
            highlight: "Smooth tournament greens"
      },
      {
            label: "Caddie Island Hospitality & Warmth",
            score: 9.4,
            highlight: "Attentive personalized service"
      },
      {
            label: "Phu Quoc Tropical Resort Integration",
            score: 9.5,
            highlight: "Minutes from 5-star island villas"
      }
]}
    verdict="Phu Quoc Island's latest luxury golf statement. Seamlessly integrated between virgin tropical forests and the calm waters of Vung Bau Bay, delivering an unforgettable island golf escape."
  />


            <CourseFAQSection
                courseName="Eschuri Vung Bau Golf Resort"
                faqs={[
          {
                    "q": "What are the key course specifications for Eschuri Vung Bau Golf Resort?",
                    "a": "Eschuri Vung Bau Golf Resort in Phu Quoc, Vietnam is a Par 72 championship layout designed by IMG / Steven McFarlane (opened 2024), measuring 6,865 Yards (Blue Tees) within a ocean-front, south china sea setting. It is particularly noted for coastal island rainforest environment (Pristine coastal jungle canopy)."
          },
          {
                    "q": "How do I secure tee times and caddies at Eschuri Vung Bau Golf Resort?",
                    "a": "Eschuri Vung Bau Golf Resort operates under phu quoc international airport protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie island hospitality & warmth (Attentive personalized service)), and private VIP transfers from your Phu Quoc hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Eschuri Vung Bau Golf Resort?",
                    "a": "Our field inspection highlights Eschuri Vung Bau Golf Resort's pristine paspalum conditioning (Smooth tournament greens) alongside coastal island rainforest environment (Pristine coastal jungle canopy). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Eschuri Vung Bau Golf Resort?",
                    "a": "November through April is the best season for Eschuri Vung Bau Golf Resort on Phu Quoc Island."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/eschuri-vung-bau/" venueName="Eschuri Vung Bau Golf Resort" venueType="course" />
            <CourseNavigation
                prev={{ title: "Dragon Golf Links Vietnam", path: "/courses/vietnam/dragon-golf-links/" }}
                next={{ title: "FLC Ha Long Bay Golf Club", path: "/courses/vietnam/flc-ha-long-bay/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
 );
}
