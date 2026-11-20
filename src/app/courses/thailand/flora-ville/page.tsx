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
 title: { absolute: "Flora Ville Golf & Country Club | Thailand" },
 description: "Play Flora Ville Golf & Country Club Bangkok — classic parkland experience focused on lush greenery and floral aesthetics near Bangkok. Book with AGS.",
 keywords: ["Flora Ville Golf Country Club Bangkok", "Bangkok Parkland Golf", "Flora Ville Golf Thailand", "Bangkok Golf Course", "Thailand Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/thailand/flora-ville/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Flora Ville Golf & Country Club | Thailand" },
        description: "Play Flora Ville Golf & Country Club Bangkok — classic parkland experience focused on lush greenery and floral aesthetics near Bangkok. Book with AGS.",
        url: "https://www.asiagolfspecialists.com/courses/thailand/flora-ville/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/thailand/flora-ville/flora-ville-golf-country-club-bangkok-thailand-1.webp",
            width: 1200,
            height: 630,
            alt: "Flora Ville Golf & Country Club Bangkok | Classic Parkland Floral Thailand — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Flora Ville Golf & Country Club | Thailand" },
        description: "Play Flora Ville Golf & Country Club Bangkok — classic parkland experience focused on lush greenery and floral aesthetics near Bangkok. Book with AGS.",
        images: ["https://www.asiagolfspecialists.com/images/courses/thailand/flora-ville/flora-ville-golf-country-club-bangkok-thailand-1.webp"],
    },
};

export default function FloraVille() {
 const images = [
 { src: "/images/courses/thailand/flora-ville/flora-ville-golf-country-club-bangkok-thailand-1.webp", alt: "Flora Ville Golf Country Club Bangkok Thailand Parkland Aerial", caption: "Flora Ville Golf Country Club Bangkok Thailand Parkland Aerial" },
 { src: "/images/courses/thailand/flora-ville/flora-ville-golf-country-club-floral-2.webp", alt: "Flora Ville Golf Bangkok Thailand Floral Gardens Parkland Course", caption: "Flora Ville Golf Bangkok Thailand Floral Gardens Parkland Course" },
 { src: "/images/courses/thailand/flora-ville/flora-ville-golf-country-club-fairway-3.webp", alt: "Flora Ville Golf Club Thailand Championship Fairway Parkland", caption: "Flora Ville Golf Club Thailand Championship Fairway Parkland" },
 { src: "/images/courses/thailand/flora-ville/flora-ville-golf-country-club-green-4.webp", alt: "Flora Ville Golf Bangkok Thailand Championship Green Lush", caption: "Flora Ville Golf Bangkok Thailand Championship Green Lush" },
 { src: "/images/courses/thailand/flora-ville/flora-ville-golf-country-club-hole-5.webp", alt: "Flora Ville Golf Club Bangkok Thailand Signature Hole", caption: "Flora Ville Golf Club Bangkok Thailand Signature Hole" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Classic Bangkok Parkland</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Flora Ville<br /><span className="text-gold">Golf & Country Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"A garden of golf — lush tropical parkland and floral beauty just beyond the Bangkok skyline."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', <a href="https://nickfaldodesign.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">Nick Faldo</a>], ['Year Opened', '1998'], ['Location', 'Bangkok region'], ['Par', '72'], ['Length', '6,728 Yards (Blue Tees)'], ['Setting', 'Classic parkland, tropical gardens'], ['Character', 'Lush, green, floral aesthetic'], ['Appeal', 'All abilities welcome'], ['Facilities', 'Full clubhouse and practice range']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Flora Ville Golf & Country Club provides a beautifully cultivated parkland golf experience near Bangkok — a course where the horticultural presentation is as much the attraction as the golf itself. Tropical flowering plants, manicured hedgerows, and lush green aesthetics create a visual environment that feels genuinely like a garden course, with the golf layout providing an enjoyable challenge through this botanical backdrop.</p>
 <p>The course design is accessible and welcoming to all standards of golfer, with generous fairways, clearly defined hazards, and greens that reward proper alignment and committed putting strokes. There is no artificial difficulty here — the challenge comes from executing shots properly within a benign but well-constructed layout that makes good golf rewarding and poor golf still enjoyable.</p>
 <p>For Bangkok programs that need a relaxed, scenic round without the premium difficulty of Alpine or Nikanti, AGS recommends Flora Ville as an excellent choice for mixed-ability groups, corporate programs with non-players who occasionally pick up a club, or as a gentle introduction day for Sydney or Melbourne golfers making their first Thailand golf trip.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Gardens</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
  {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/thailand/flora-ville/"
  />
  </div>
  </section>
            <CourseSchemaBlock
                name="Flora Ville Golf & Country Club"
                description="A garden of golf — lush tropical parkland and floral beauty just beyond the Bangkok skyline."
                url={"https://www.asiagolfspecialists.com/courses/thailand/flora-ville/"}
                imageUrl={"/images/courses/thailand/flora-ville/flora-ville-golf-country-club-bangkok-thailand-1.webp"}
                addressLocality={"Bangkok"}
                addressCountry={"TH"}
                numberOfHoles={18}
                courseLength={6728}
                par={72}
                designer="Pirapon Namatra"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Thailand", item: "https://www.asiagolfspecialists.com/destinations/thailand/" },
                    { name: "Thailand Courses", item: "https://www.asiagolfspecialists.com/destinations/thailand/courses/" },
                    { name: "Flora Ville Golf & Country Club", item: "https://www.asiagolfspecialists.com/courses/thailand/flora-ville/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Flora Ville Golf & Country Club</strong> is a premier Par 72 championship layout in Bangkok, Thailand, crafted by <strong>Pirapon Namatra</strong> (1998) and stretching to <strong>6,728 Yards (Blue Tees)</strong> across a classic parkland, tropical gardens environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its mature trees & tranquil water hazards (Shaded parkland corridors) and generous fairways & large greens (Playable and rewarding).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Flora Ville Golf & Country Club (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Thailand dry season. Our curatorial scorecard specifically notes its courteous caddie service (Attentive yardage help), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Bangkok golf tour by AGS, Flora Ville Golf & Country Club provides a distinct architectural test by Pirapon Namatra that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Flora Ville Golf & Country Club"
    itemUrl="https://www.asiagolfspecialists.com/courses/thailand/flora-ville/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/thailand/flora-ville/flora-ville-golf-country-club-bangkok-thailand-1.webp"
    addressLocality="Bangkok"
    addressCountry="TH"
    overallScore={4.5}
    maxScore={5.0}
    gradeBadge="Lakeside Parkland Sanctuary • Pathum Thani"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Mature Trees & Tranquil Water Hazards",
            score: 9.3,
            highlight: "Shaded parkland corridors"
      },
      {
            label: "Generous Fairways & Large Greens",
            score: 9.3,
            highlight: "Playable and rewarding"
      },
      {
            label: "Courteous Caddie Service",
            score: 9.3,
            highlight: "Attentive yardage help"
      },
      {
            label: "Modern Renovated Clubhouse",
            score: 9.2,
            highlight: "Comfortable dining & lockers"
      }
]}
    verdict="A peaceful parkland escape just 30 minutes from downtown Bangkok. Generous fairways and lush tree-lined corridors provide a relaxed, classic day on the links."
  />


            <CourseFAQSection
                courseName="Flora Ville Golf & Country Club"
                faqs={[
          {
                    "q": "What are the key course specifications for Flora Ville Golf & Country Club?",
                    "a": "Flora Ville Golf & Country Club in Bangkok, Thailand is a Par 72 championship layout designed by Pirapon Namatra (opened 1998), measuring 6,728 Yards (Blue Tees) within a classic parkland, tropical gardens setting. It is particularly noted for mature trees & tranquil water hazards (Shaded parkland corridors)."
          },
          {
                    "q": "How do I secure tee times and caddies at Flora Ville Golf & Country Club?",
                    "a": "Flora Ville Golf & Country Club operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (courteous caddie service (Attentive yardage help)), and private VIP transfers from your Bangkok hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Flora Ville Golf & Country Club?",
                    "a": "Our field inspection highlights Flora Ville Golf & Country Club's generous fairways & large greens (Playable and rewarding) alongside mature trees & tranquil water hazards (Shaded parkland corridors). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Flora Ville Golf & Country Club?",
                    "a": "November through April is the best season for Flora Ville Golf Club Bangkok."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/thailand/flora-ville/" venueName="Flora Ville Golf & Country Club" venueType="course" />
            <CourseNavigation
                prev={{ title: "Chiang Mai Highlands Golf Club", path: "/courses/thailand/chiang-mai-highlands/" }}
                next={{ title: "Laem Chabang International CC", path: "/courses/thailand/laem-chabang/" }}
                country="Thailand"
                countryLink="/destinations/thailand/courses/"
            />
 

</main>
 );
}
