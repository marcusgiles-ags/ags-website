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
 title: { absolute: "Dragon Golf Links Vietnam | Coastal Links Hai Phong" },
 description: "Play Dragon Golf Links near Hai Phong — a sea-encroaching true links experience unlike any other in Northern Vietnam. Book with Asia Golf Specialists.",
 keywords: ["Dragon Golf Links Vietnam", "Hai Phong Golf Course", "Coastal Links Vietnam", "Vietnam Golf Tours", "Northern Vietnam Links Golf"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/dragon-golf-links/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Dragon Golf Links Vietnam | Coastal Links Hai Phong" },
        description: "Play Dragon Golf Links near Hai Phong — a sea-encroaching true links experience unlike any other in Northern Vietnam. Book with Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/dragon-golf-links/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/dragon-golf-links/dragon-golf-links-hai-phong-vietnam-1.webp",
            width: 1200,
            height: 630,
            alt: "Dragon Golf Links Vietnam | Coastal Links Hai Phong — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Dragon Golf Links Vietnam | Coastal Links Hai Phong" },
        description: "Play Dragon Golf Links near Hai Phong — a sea-encroaching true links experience unlike any other in Northern Vietnam. Book with Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/dragon-golf-links/dragon-golf-links-hai-phong-vietnam-1.webp"],
    },
};

export default function DragonGolfLinks() {
 const images = [
 { src: "/images/courses/vietnam/dragon-golf-links/dragon-golf-links-hai-phong-vietnam-1.webp", alt: "Dragon Golf Links Hai Phong Vietnam Aerial Coastal", caption: "Aerial coastal view, Dragon Links, Hai Phong" },
 { src: "/images/courses/vietnam/dragon-golf-links/dragon-golf-links-seaside-hole-2.webp", alt: "Dragon Golf Links Vietnam Seaside Coastal Links Hole", caption: "Seaside coastal links hole, Hai Phong" },
 { src: "/images/courses/vietnam/dragon-golf-links/dragon-golf-links-championship-layout-3.webp", alt: "Dragon Golf Links Vietnam Championship Layout Hole", caption: "Championship layout hole, Hai Phong corridor" },
 { src: "/images/courses/vietnam/dragon-golf-links/dragon-golf-links-fairway-ocean-4.webp", alt: "Dragon Golf Links Vietnam Ocean Fairway Northern Coast", caption: "Hai Phong coastal golf course, ocean fairway" },
 { src: "/images/courses/vietnam/dragon-golf-links/dragon-golf-links-greens-bunkers-5.webp", alt: "Dragon Golf Links Vietnam Championship Greens Coastal Bunkers", caption: "Championship greens and coastal bunkers" },
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
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Dragon Golf<br /><span className="text-gold">Links</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"A true sea-encroaching links — the wind dictates every shot."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', <a href="https://gngcd.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">Greg Norman</a>], ['Year Opened', '2023'], ['Location', 'Near Hai Phong, Northern Vietnam'], ['Style', 'True Coastal Links'], ['Par', '72'], ['Length', '6,950 Yards'], ['Character', 'Sea-encroaching, wind-exposed'], ['Setting', 'Coastal dunes and seaside']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Dragon Golf Links near Hai Phong is one of the most authentic links-style golf experiences in Northern Vietnam. Positioned directly on the coast with the sea encroaching on multiple holes, the layout offers a wind-driven challenge that demands the full repertoire of creative shot-making that defines genuine links play.</p>
 <p>Firm and fast playing conditions reward the low-running approach, and the natural coastal bunkering provides both visual drama and tactical consequence. The course changes character completely depending on wind direction, ensuring every visit feels like a fresh challenge even for returning players.</p>
 <p>An excellent choice for the discerning golfer who wants a pure links experience in the north of Vietnam. Its coastal character, accessibility from Hanoi, and tactical depth make Dragon Golf Links a standout addition to any extended northern Vietnam golf itinerary.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Links</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
  {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}

 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/vietnam/dragon-golf-links/"
  />
  </div>
  </section>
            <CourseSchemaBlock
                name="Dragon Golf Links"
                description="A true sea-encroaching links — the wind dictates every shot."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/dragon-golf-links/"}
                imageUrl={"/images/courses/vietnam/dragon-golf-links/dragon-golf-links-hai-phong-vietnam-1.webp"}
                addressLocality={"Hai Phong"}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={6950}
                par={72}
                designer="Greg Norman"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Dragon Golf Links", item: "https://www.asiagolfspecialists.com/courses/vietnam/dragon-golf-links/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Dragon Golf Links</strong> is a premier Par 72 championship layout in Hai Phong, Vietnam, crafted by <strong>Greg Norman</strong> (2023) and stretching to <strong>6,950 Yards</strong> across a coastal dunes and seaside environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its peninsula ocean panorama & sea winds (Juts directly into Tonkin Gulf) and paspalum salt-tolerant turf conditioning (Lush green oceanfront carpet).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Dragon Golf Links (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie wind reading & club selection (Navigates 2-to-3 club breezes), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Hai Phong golf tour by AGS, Dragon Golf Links provides a distinct architectural test by Greg Norman that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Dragon Golf Links"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/dragon-golf-links/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/dragon-golf-links/dragon-golf-links-hai-phong-vietnam-1.webp"
    addressLocality="Hai Phong"
    addressCountry="VN"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Coastal Sea Reclamation Links • Hai Phong"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Peninsula Ocean Panorama & Sea Winds",
            score: 9.7,
            highlight: "Juts directly into Tonkin Gulf"
      },
      {
            label: "Paspalum Salt-Tolerant Turf Conditioning",
            score: 9.5,
            highlight: "Lush green oceanfront carpet"
      },
      {
            label: "Caddie Wind Reading & Club Selection",
            score: 9.4,
            highlight: "Navigates 2-to-3 club breezes"
      },
      {
            label: "Striking Dragon-Inspired Clubhouse",
            score: 9.5,
            highlight: "Iconic architectural landmark"
      }
]}
    verdict="Constructed on reclaimed land jutting directly into the Gulf of Tonkin, Dragon Golf Links exposes players to authentic coastal gale conditions and scenic open-water panoramas on nearly every hole."
  />


            <CourseFAQSection
                courseName="Dragon Golf Links"
                faqs={[
          {
                    "q": "What are the key course specifications for Dragon Golf Links?",
                    "a": "Dragon Golf Links in Hai Phong, Vietnam is a Par 72 championship layout designed by Greg Norman (opened 2023), measuring 6,950 Yards within a coastal dunes and seaside setting. It is particularly noted for peninsula ocean panorama & sea winds (Juts directly into Tonkin Gulf)."
          },
          {
                    "q": "How do I secure tee times and caddies at Dragon Golf Links?",
                    "a": "Dragon Golf Links operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie wind reading & club selection (Navigates 2-to-3 club breezes)), and private VIP transfers from your Hai Phong hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Dragon Golf Links?",
                    "a": "Our field inspection highlights Dragon Golf Links's paspalum salt-tolerant turf conditioning (Lush green oceanfront carpet) alongside peninsula ocean panorama & sea winds (Juts directly into Tonkin Gulf). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Dragon Golf Links?",
                    "a": "October through April suits the northern location of Dragon Golf Links."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/dragon-golf-links/" venueName="Dragon Golf Links" venueType="course" />
            <CourseNavigation
                prev={{ title: "Chi Linh Golf", path: "/courses/vietnam/chi-linh-golf/" }}
                next={{ title: "Eschuri Vung Bau Golf Resort", path: "/courses/vietnam/eschuri-vung-bau/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />

 

</main>
 );
}
