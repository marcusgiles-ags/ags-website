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
 title: { absolute: "Aquella Golf & Country Club | Thailand" },
 description: "Play Aquella Golf Resort Phuket: modern coastal gem with platinum paspalum turf & stunning Andaman Sea vistas. Book with Asia Golf Specialists.",
 keywords: ["Aquella Golf Resort Phuket", "Phuket Golf Course", "Andaman Sea Golf", "Paspalum Golf Thailand", "Thailand Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/thailand/aquella/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Aquella Golf & Country Club | Thailand" },
        description: "Play Aquella Golf Resort Phuket: modern coastal gem with platinum paspalum turf & stunning Andaman Sea vistas. Book with Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/courses/thailand/aquella/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/thailand/aquella/aquella-golf-resort-phuket-thailand-1.webp",
            width: 1200,
            height: 630,
            alt: "Aquella Golf Resort Phuket | Platinum Paspalum Coastal Andaman Thailand — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Aquella Golf & Country Club | Thailand" },
        description: "Play Aquella Golf Resort Phuket: modern coastal gem with platinum paspalum turf & stunning Andaman Sea vistas. Book with Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/courses/thailand/aquella/aquella-golf-resort-phuket-thailand-1.webp"],
    },
};

export default function AquellaGolf() {
 const images = [
 { src: "/images/courses/thailand/aquella/aquella-golf-resort-phuket-thailand-1.webp", alt: "Aquella Golf Resort Country Club Phuket Thailand Aerial Andaman", caption: "Aquella Golf Resort Country Club Phuket Thailand Aerial Andaman" },
 { src: "/images/courses/thailand/aquella/aquella-golf-resort-andaman-sea-view-2.webp", alt: "Aquella Golf Club Phuket Thailand Andaman Sea View", caption: "Aquella Golf Club Phuket Thailand Andaman Sea View" },
 { src: "/images/courses/thailand/aquella/aquella-golf-resort-paspalum-fairway-3.webp", alt: "Aquella Golf Club Thailand Platinum Paspalum Fairway Coastal", caption: "Aquella Golf Club Thailand Platinum Paspalum Fairway Coastal" },
 { src: "/images/courses/thailand/aquella/aquella-golf-resort-ocean-hole-4.webp", alt: "Aquella Golf Phuket Thailand Ocean View Championship Hole", caption: "Aquella Golf Phuket Thailand Ocean View Championship Hole" },
 { src: "/images/courses/thailand/aquella/aquella-golf-resort-championship-green-5.webp", alt: "Aquella Golf Resort Phuket Thailand Championship Green Scenic", caption: "Aquella Golf Resort Phuket Thailand Championship Green Scenic" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Phuket Coastal Gem</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Aquella Golf<br /><span className="text-gold">Resort & Country Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Platinum paspalum fairways, Andaman panoramas — Phuket's modern coastal standout."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', 'Pacific Coast Design'], ['Year Opened', '2021'], ['Location', 'Phuket, Southern Thailand'], ['Par', '72'], ['Length', '6,532 Yards (Blue Tees)'], ['Turf', 'Platinum Paspalum'], ['Setting', 'Coastal, Andaman Sea views'], ['Character', 'Modern, premium, scenic'], ['Facilities', 'Full resort facilities']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Aquella Golf Resort & Country Club represents Phuket's most modern premium golf offering — a meticulously crafted coastal facility featuring platinum paspalum turf throughout the course, a playing surface prized in tropical golf for its salt tolerance, visual vibrancy, and superior playability in humid conditions. The result is fairways and greens that look and play immaculately regardless of Phuket's seasonal weather.</p>
 <p>The course design takes full advantage of its coastal positioning — multiple holes play off elevated tees with Andaman Sea panoramas, and the routing thread between the island's hillside and coastal terrain creates a pleasing variety of hole shapes and challenge levels. It is a course that rewards both experienced tournament golfers and resort visitors approaching the game more casually.</p>
 <p>AGS recommends Aquella for clients who want a premium but comfortable Phuket round alongside the dramatic experiences of Red Mountain and Blue Canyon. Its modern facilities and excellent service standards make it a natural fit for any high-end Phuket golf program.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Coast</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/thailand/aquella/"
  />
  </div>
  </section>
            <CourseSchemaBlock
                name="Aquella Golf & Country Club"
                description="Platinum paspalum fairways, Andaman panoramas — Phuket's modern coastal standout."
                url={"https://www.asiagolfspecialists.com/courses/thailand/aquella/"}
                imageUrl={"/images/courses/thailand/aquella/aquella-golf-resort-phuket-thailand-1.webp"}
                addressLocality={"Bangkok"}
                addressCountry={"TH"}
                numberOfHoles={18}
                courseLength={6532}
                par={72}
                designer="Pacific Coast Design"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Thailand", item: "https://www.asiagolfspecialists.com/destinations/thailand/" },
                    { name: "Thailand Courses", item: "https://www.asiagolfspecialists.com/destinations/thailand/courses/" },
                    { name: "Aquella Golf & Country Club", item: "https://www.asiagolfspecialists.com/courses/thailand/aquella/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Aquella Golf & Country Club</strong> is a premier Par 72 championship layout in Phang Nga, Thailand, crafted by <strong>Pacific Coast Design</strong> (2021) and stretching to <strong>6,532 Yards (Blue Tees)</strong> across a coastal, andaman sea views environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its direct andaman beachfront frontage (Signature ocean par-3) and platinum te paspalum carpet roll (Firm, bouncy links turf).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Aquella Golf & Country Club (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Thailand dry season. Our curatorial scorecard specifically notes its caddie coastal wind mastery (Navigates sea breezes), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Phang Nga golf tour by AGS, Aquella Golf & Country Club provides a distinct architectural test by Pacific Coast Design that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Aquella Golf & Country Club"
    itemUrl="https://www.asiagolfspecialists.com/courses/thailand/aquella/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/thailand/aquella/aquella-golf-resort-phuket-thailand-1.webp"
    addressLocality="Phang Nga"
    addressCountry="TH"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Andaman Sea Beachfront Links • Phang Nga"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Direct Andaman Beachfront Frontage",
            score: 9.8,
            highlight: "Signature ocean par-3"
      },
      {
            label: "Platinum TE Paspalum Carpet Roll",
            score: 9.6,
            highlight: "Firm, bouncy links turf"
      },
      {
            label: "Caddie Coastal Wind Mastery",
            score: 9.5,
            highlight: "Navigates sea breezes"
      },
      {
            label: "Modern Sustainable Beach Clubhouse",
            score: 9.5,
            highlight: "Stunning beachfront terrace"
      }
]}
    verdict="Phang Nga's premier coastal links facility. Located on the pristine sands of Thai Muang Beach, Aquella features firm, bouncy turf, authentic sea breezes, and an exquisite beachfront signature par-3."
  />


            <CourseFAQSection
                courseName="Aquella Golf & Country Club"
                faqs={[
          {
                    "q": "What are the key course specifications for Aquella Golf & Country Club?",
                    "a": "Aquella Golf & Country Club in Phang Nga, Thailand is a Par 72 championship layout designed by Pacific Coast Design (opened 2021), measuring 6,532 Yards (Blue Tees) within a coastal, andaman sea views setting. It is particularly noted for direct andaman beachfront frontage (Signature ocean par-3)."
          },
          {
                    "q": "How do I secure tee times and caddies at Aquella Golf & Country Club?",
                    "a": "Aquella Golf & Country Club operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie coastal wind mastery (Navigates sea breezes)), and private VIP transfers from your Phang Nga hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Aquella Golf & Country Club?",
                    "a": "Our field inspection highlights Aquella Golf & Country Club's platinum te paspalum carpet roll (Firm, bouncy links turf) alongside direct andaman beachfront frontage (Signature ocean par-3). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Aquella Golf & Country Club?",
                    "a": "November through April is the recommended season for Aquella Golf Club."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/thailand/aquella/" venueName="Aquella Golf & Country Club" venueType="course" />
            <CourseNavigation
                prev={{ title: "Alpine Golf & Sports Club Bangkok", path: "/courses/thailand/alpine-golf-club/" }}
                next={{ title: "Ballyshear Golf Links", path: "/courses/thailand/ballyshear/" }}
                country="Thailand"
                countryLink="/destinations/thailand/courses/"
            />
 

</main>
 );
}
