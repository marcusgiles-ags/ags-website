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
 title: { absolute: "Alpine Golf & Sports Club Bangkok | Championship Venue" },
 description: "Alpine Golf & Sports Club Bangkok — a prestigious 27-hole championship facility south of Bangkok, regularly ranked among Thailand's finest courses. Book.",
 keywords: ["Alpine Golf Sports Club Bangkok", "Bangkok Golf Course", "Tiger Woods Golf Thailand", "Johnnie Walker Classic Thailand", "Thailand Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/thailand/alpine-golf-club/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Alpine Golf & Sports Club Bangkok | Championship Venue" },
        description: "Alpine Golf & Sports Club Bangkok — a prestigious 27-hole championship facility south of Bangkok, regularly ranked among Thailand's finest courses. Book.",
        url: "https://www.asiagolfspecialists.com/courses/thailand/alpine-golf-club/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/thailand/alpine-golf-club/alpine-golf-sports-club-bangkok-thailand-1.webp",
            width: 1200,
            height: 630,
            alt: "Alpine Golf & Sports Club Bangkok | Tiger Woods — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Alpine Golf & Sports Club Bangkok | Championship Venue" },
        description: "Alpine Golf & Sports Club Bangkok — a prestigious 27-hole championship facility south of Bangkok, regularly ranked among Thailand's finest courses. Book.",
        images: ["https://www.asiagolfspecialists.com/images/courses/thailand/alpine-golf-club/alpine-golf-sports-club-bangkok-thailand-1.webp"],
    },
};

export default function AlpineGolfSportsClub() {
 const images = [
 { src: "/images/courses/thailand/alpine-golf-club/alpine-golf-sports-club-bangkok-thailand-1.webp", alt: "Alpine Golf Sports Club Bangkok Thailand Championship Aerial", caption: "Alpine Golf Sports Club Bangkok Thailand Championship Aerial" },
 { src: "/images/courses/thailand/alpine-golf-club/alpine-golf-sports-club-tiger-woods-johnnie-walker-2.webp", alt: "Alpine Golf Sports Club Thailand Tiger Woods Johnnie Walker Classic", caption: "Alpine Golf Sports Club Thailand Tiger Woods Johnnie Walker Classic" },
 { src: "/images/courses/thailand/alpine-golf-club/alpine-golf-sports-club-hilly-fairway-3.webp", alt: "Alpine Golf Club Bangkok Thailand Hilly Terrain Fairway", caption: "Thailand Hilly Terrain Fairway" },
 { src: "/images/courses/thailand/alpine-golf-club/alpine-golf-sports-club-green-forest-4.webp", alt: "Alpine Golf Club Thailand Championship Green Forested", caption: "Thailand Championship Green Forested" },
 { src: "/images/courses/thailand/alpine-golf-club/alpine-golf-sports-club-signature-hole-5.webp", alt: "Alpine Golf Club Bangkok Thailand Signature Championship Hole", caption: "Thailand Signature Championship Hole" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Championship Venue</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Alpine Golf<br /><span className="text-gold">& Sports Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Where Tiger Woods made history — Bangkok's most celebrated championship venue."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', 'Ronald M. Garl'], ['Year Opened', '1996'], ['Location', 'Pathum Thani, Bangkok'], ['Par', '72'], ['Length', '7,007 Yards'], ['Setting', 'Hilly terrain, forested'], ['Tournament History', 'Johnnie Walker Classic 1997'], ['Top 100 Asia Ranking', <a href="https://www.top100golfcourses.com/golf-courses/asia/thailand" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">#3 in Asia (2026)</a>]
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Alpine Golf & Sports Club holds a place in history that few courses in Asia can match — it was here in 1997, on a course of remarkable natural topography, that a young Tiger Woods won the Johnnie Walker Classic and announced to the world that Thai golf was ready for a global stage.</p>
 <p>Set in Bangkok's green lung north of the city, Alpine commands unusual terrain for a Bangkok course: genuine elevation changes, forested ridges, and dramatic hill-to-valley transitions that reward careful course management. The layout challenges all classes of player, with narrow tree-lined corridors demanding accuracy off the tee and fast, undulating greens demanding patience on every approach.</p>
 <p>For discerning golfers with an appreciation for tournament history and genuine course character, Alpine Golf & Sports Club is essential. AGS can build Bangkok itineraries pairing it with the city's other elite facilities for a thoroughly satisfying northern Thailand golf experience.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Experience <span className="text-gold">Alpine</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/thailand/alpine-golf-club/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://alpinegolfclub.com/"]}
                name="Alpine Golf Club Bangkok"
                description="Where Tiger Woods made history — Bangkok's most celebrated championship venue."
                url={"https://www.asiagolfspecialists.com/courses/thailand/alpine-golf-club/"}
                imageUrl={"/images/courses/thailand/alpine-golf-club/alpine-golf-sports-club-bangkok-thailand-1.webp"}
                addressLocality={"Bangkok"}
                addressCountry={"TH"}
                numberOfHoles={18}
                courseLength={7007}
                par={72}
                designer="Ronald M. Garl"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Thailand", item: "https://www.asiagolfspecialists.com/destinations/thailand/" },
                    { name: "Thailand Courses", item: "https://www.asiagolfspecialists.com/destinations/thailand/courses/" },
                    { name: "Alpine Golf Club Bangkok", item: "https://www.asiagolfspecialists.com/courses/thailand/alpine-golf-club/" },
                ]}
            />

            
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Alpine Golf Club Bangkok</strong> is a premier Par 72 championship layout in Bangkok, Thailand, crafted by <strong>Ronald M. Garl</strong> (1996) and stretching to <strong>7,007 Yards</strong> across a hilly terrain, forested environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its ron garl contouring & rolling elevation (Sculpted rolling terrain) and pristine bermuda turf standards (True, fast-rolling greens).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Alpine Golf Club Bangkok (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Thailand dry season. Our curatorial scorecard specifically notes its elite private club service (Exclusive member access), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Bangkok golf tour by AGS, Alpine Golf Club Bangkok provides a distinct architectural test by Ronald M. Garl that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Alpine Golf Club Bangkok"
    itemUrl="https://www.asiagolfspecialists.com/courses/thailand/alpine-golf-club/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/thailand/alpine-golf-club/alpine-golf-sports-club-bangkok-thailand-1.webp"
    addressLocality="Bangkok"
    addressCountry="TH"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="Johnnie Walker Classic Host • Bangkok"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Ron Garl Contouring & Rolling Elevation",
            score: 9.8,
            highlight: "Sculpted rolling terrain"
      },
      {
            label: "Pristine Bermuda Turf Standards",
            score: 9.7,
            highlight: "True, fast-rolling greens"
      },
      {
            label: "Elite Private Club Service",
            score: 9.6,
            highlight: "Exclusive member access"
      },
      {
            label: "Historic Tournament Heritage",
            score: 9.7,
            highlight: "Site of Tiger Woods' victory"
      }
]}
    verdict="The venue where Tiger Woods conquered the Johnnie Walker Classic. Ron Garl transformed flat Bangkok plains into a heavily contoured parkland masterpiece with severe undulating greens and rolling hills."
  />


            <CourseFAQSection
                courseName="Alpine Golf Club Bangkok"
                faqs={[
          {
                    "q": "What are the key course specifications for Alpine Golf Club Bangkok?",
                    "a": "Alpine Golf Club Bangkok in Bangkok, Thailand is a Par 72 championship layout designed by Ronald M. Garl (opened 1996), measuring 7,007 Yards within a hilly terrain, forested setting. It is particularly noted for ron garl contouring & rolling elevation (Sculpted rolling terrain)."
          },
          {
                    "q": "How do I secure tee times and caddies at Alpine Golf Club Bangkok?",
                    "a": "Alpine Golf Club Bangkok operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (elite private club service (Exclusive member access)), and private VIP transfers from your Bangkok hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Alpine Golf Club Bangkok?",
                    "a": "Our field inspection highlights Alpine Golf Club Bangkok's pristine bermuda turf standards (True, fast-rolling greens) alongside ron garl contouring & rolling elevation (Sculpted rolling terrain). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Alpine Golf Club Bangkok?",
                    "a": "November through April offers the best conditions at Alpine Golf Club Bangkok."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/thailand/alpine-golf-club/" venueName="Alpine Golf Club Bangkok" venueType="course" />
            <CourseNavigation
                prev={{ title: "Alpine Golf Resort Chiang Mai", path: "/courses/thailand/alpine-chiang-mai/" }}
                next={{ title: "Aquella Golf & Country Club", path: "/courses/thailand/aquella/" }}
                country="Thailand"
                countryLink="/destinations/thailand/courses/"
            />
 

</main>
 );
}
