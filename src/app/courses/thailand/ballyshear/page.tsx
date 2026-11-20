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
 title: { absolute: "Ballyshear Golf Links | Hua Hin" },
 description: "Ballyshear Golf Links Hua Hin — Thailand's finest links-style layout set between mountain and the Gulf of Thailand. A world-class experience.",
 keywords: ["Ballyshear Golf Links Bangkok", "Lido Golf Course Thailand", "C.B. Macdonald Golf Thailand", "Bangkok Links Golf", "Thailand Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/thailand/ballyshear/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Ballyshear Golf Links | Hua Hin" },
        description: "Ballyshear Golf Links Hua Hin — Thailand's finest links-style layout set between mountain and the Gulf of Thailand. A world-class experience.",
        url: "https://www.asiagolfspecialists.com/courses/thailand/ballyshear/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/thailand/ballyshear/ballyshear-golf-links-bangkok-thailand-1.webp",
            width: 1200,
            height: 630,
            alt: "Ballyshear Golf Links Bangkok | Lido C.B. Macdonald Recreation Thailand — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Ballyshear Golf Links | Hua Hin" },
        description: "Ballyshear Golf Links Hua Hin — Thailand's finest links-style layout set between mountain and the Gulf of Thailand. A world-class experience.",
        images: ["https://www.asiagolfspecialists.com/images/courses/thailand/ballyshear/ballyshear-golf-links-bangkok-thailand-1.webp"],
    },
};

export default function BallyshearGolfLinks() {
 const images = [
 { src: "/images/courses/thailand/ballyshear/ballyshear-golf-links-bangkok-thailand-1.webp", alt: "Ballyshear Golf Links Bangkok Thailand Lido C.B. Macdonald Aerial", caption: "Bangkok Thailand Lido C.B. Macdonald Aerial" },
 { src: "/images/courses/thailand/ballyshear/ballyshear-golf-links-classic-hole-2.webp", alt: "Ballyshear Golf Links Thailand Classic Links Hole Fairway", caption: "Thailand Classic Links Hole Fairway" },
 { src: "/images/courses/thailand/ballyshear/ballyshear-golf-links-championship-layout-3.webp", alt: "Ballyshear Golf Links Thailand Championship Layout Hole", caption: "Thailand Championship Layout Hole" },
 { src: "/images/courses/thailand/ballyshear/ballyshear-golf-links-green-bunker-4.webp", alt: "Ballyshear Golf Links Thailand Green Bunker Championship Classic", caption: "Thailand Green Bunker Championship Classic" },
 { src: "/images/courses/thailand/ballyshear/ballyshear-golf-links-signature-5.webp", alt: "Ballyshear Golf Links Thailand Signature Hole Connoisseur", caption: "Thailand Signature Hole Connoisseur" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — The Connoisseur's Choice</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Ballyshear<br /><span className="text-gold">Golf Links</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Bangkok's most intellectually demanding course — a faithful recreation of C.B. Macdonald's lost 'Lido'."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', 'Gil Hanse'], ['Year Opened', '2021'], ['Location', 'Bangkok region'], ['Design Inspiration', 'Lido Golf Club by C.B. Macdonald (1914)'], ['Character', 'Classical links, strategic, demanding'], ['Setting', 'Flat links terrain, wide fairways'], ['Target Golfer', 'Serious, historically-minded players'], ['Par', '71'], ['Length', '6,152 Yards (Blue Tees)']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Ballyshear Golf Links is Bangkok's most intellectually serious golf offering — a course built for players who understand and appreciate golf history. The design is a faithful contemporary recreation of C.B. Macdonald's legendary Lido Golf Club (1914), a Long Island layout considered among the finest classical designs ever created, and destroyed decades ago by development. Ballyshear resurrects it in Southeast Asia for a new generation of golfers.</p>
 <p>Macdonald's design philosophy — wide corridors, multiple strategic approaches, ground game emphasis, and template holes derived from the greatest holes in golf history — is preserved faithfully throughout. Playing Ballyshear demands a different mental approach from the typical resort experience: bump-and-run, links creativity, and strategic positioning matter far more than conventional shot selection.</p>
 <p>For discerning golfers with a deep love of classical golf architecture and a desire for something genuinely unique in Thailand's golf landscape, AGS regards Ballyshear as an extraordinary discovery. It sits in an entirely different cultural category from the resort courses that dominate the market — and that is precisely its value.</p>
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
    pagePath="/courses/thailand/ballyshear/"
  />
  </div>
  </section>
            <CourseSchemaBlock
                name="Ballyshear Golf Links"
                description="Bangkok's most intellectually demanding course — a faithful recreation of C.B. Macdonald's lost 'Lido'."
                url={"https://www.asiagolfspecialists.com/courses/thailand/ballyshear/"}
                imageUrl={"/images/courses/thailand/ballyshear/ballyshear-golf-links-bangkok-thailand-1.webp"}
                addressLocality={"Chiang Mai"}
                addressCountry={"TH"}
                numberOfHoles={18}
                courseLength={6152}
                par={71}
                designer="Gil Hanse"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Thailand", item: "https://www.asiagolfspecialists.com/destinations/thailand/" },
                    { name: "Thailand Courses", item: "https://www.asiagolfspecialists.com/destinations/thailand/courses/" },
                    { name: "Ballyshear Golf Links", item: "https://www.asiagolfspecialists.com/courses/thailand/ballyshear/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Ballyshear Golf Links</strong> is a premier Par 71 championship layout in Bangkok, Thailand, crafted by <strong>Gil Hanse</strong> (2021) and stretching to <strong>6,152 Yards (Blue Tees)</strong> across a flat links terrain, wide fairways environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its historic template holes (redan, biarritz, eden) (Tribute to Macdonald & Raynor) and firm running fast links style (Ground game architecture).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Ballyshear Golf Links (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Thailand dry season. Our curatorial scorecard specifically notes its caddie template knowledge (Crucial on deep swales), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Bangkok golf tour by AGS, Ballyshear Golf Links provides a distinct architectural test by Gil Hanse that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Ballyshear Golf Links"
    itemUrl="https://www.asiagolfspecialists.com/courses/thailand/ballyshear/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/thailand/ballyshear/ballyshear-golf-links-bangkok-thailand-1.webp"
    addressLocality="Bangkok"
    addressCountry="TH"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Gil Hanse Vintage Template Masterpiece • Bangkok"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Historic Template Holes (Redan, Biarritz, Eden)",
            score: 9.8,
            highlight: "Tribute to Macdonald & Raynor"
      },
      {
            label: "Firm Running Fast Links Style",
            score: 9.6,
            highlight: "Ground game architecture"
      },
      {
            label: "Caddie Template Knowledge",
            score: 9.5,
            highlight: "Crucial on deep swales"
      },
      {
            label: "Exclusive Private Club Ambiance",
            score: 9.6,
            highlight: "Refined vintage styling"
      }
]}
    verdict="Designed by Gil Hanse as an homage to C.B. Macdonald's legendary Lido Club. A thrilling strategic revival featuring authentic Golden Age template holes like the Biarritz, Redan, and Punchbowl."
  />


            <CourseFAQSection
                courseName="Ballyshear Golf Links"
                faqs={[
          {
                    "q": "What are the key course specifications for Ballyshear Golf Links?",
                    "a": "Ballyshear Golf Links in Bangkok, Thailand is a Par 71 championship layout designed by Gil Hanse (opened 2021), measuring 6,152 Yards (Blue Tees) within a flat links terrain, wide fairways setting. It is particularly noted for historic template holes (redan, biarritz, eden) (Tribute to Macdonald & Raynor)."
          },
          {
                    "q": "How do I secure tee times and caddies at Ballyshear Golf Links?",
                    "a": "Ballyshear Golf Links operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie template knowledge (Crucial on deep swales)), and private VIP transfers from your Bangkok hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Ballyshear Golf Links?",
                    "a": "Our field inspection highlights Ballyshear Golf Links's firm running fast links style (Ground game architecture) alongside historic template holes (redan, biarritz, eden) (Tribute to Macdonald & Raynor). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Ballyshear Golf Links?",
                    "a": "November through April is ideal for Ballyshear Golf Links Chiang Mai."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/thailand/ballyshear/" venueName="Ballyshear Golf Links" venueType="course" />
            <CourseNavigation
                prev={{ title: "Aquella Golf & Country Club", path: "/courses/thailand/aquella/" }}
                next={{ title: "Bangkok Golf Club", path: "/courses/thailand/bangkok-golf-club/" }}
                country="Thailand"
                countryLink="/destinations/thailand/courses/"
            />
 

</main>
 );
}
