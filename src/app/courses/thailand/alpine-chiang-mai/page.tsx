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
 title: { absolute: "Alpine Golf Resort Chiang Mai | Mountain Valley Thailand" },
 description: "Alpine Golf Resort Chiang Mai — 18-hole mountain course in northern Thailand's cultural capital with cool conditions and dramatic highland terrain.",
 keywords: ["Alpine Golf Resort Chiang Mai", "Chiang Mai Golf Course", "Ron Garl Golf Thailand", "Mountain Golf Thailand", "Thailand Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/thailand/alpine-chiang-mai/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Alpine Golf Resort Chiang Mai | Mountain Valley Thailand" },
        description: "Alpine Golf Resort Chiang Mai — 18-hole mountain course in northern Thailand's cultural capital with cool conditions and dramatic highland terrain.",
        url: "https://www.asiagolfspecialists.com/courses/thailand/alpine-chiang-mai/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/thailand/alpine-chiang-mai/alpine-golf-resort-chiang-mai-thailand-1.webp",
            width: 1200,
            height: 630,
            alt: "Alpine Golf Resort Chiang Mai | Ron Garl Mountain Valley Thailand — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Alpine Golf Resort Chiang Mai | Mountain Valley Thailand" },
        description: "Alpine Golf Resort Chiang Mai — 18-hole mountain course in northern Thailand's cultural capital with cool conditions and dramatic highland terrain.",
        images: ["https://www.asiagolfspecialists.com/images/courses/thailand/alpine-chiang-mai/alpine-golf-resort-chiang-mai-thailand-1.webp"],
    },
};

export default function AlpineChiangMai() {
 const images = [
 { src: "/images/courses/thailand/alpine-chiang-mai/alpine-golf-resort-chiang-mai-thailand-1.webp", alt: "Alpine Golf Resort Chiang Mai Thailand Ron Garl Mountain Valley", caption: "Thailand Ron Garl Mountain Valley" },
 { src: "/images/courses/thailand/alpine-chiang-mai/alpine-golf-resort-chiang-mai-mountain-view-2.webp", alt: "Alpine Golf Resort Chiang Mai Thailand Mountain Valley Aerial", caption: "Thailand Mountain Valley Aerial" },
 { src: "/images/courses/thailand/alpine-chiang-mai/alpine-golf-resort-chiang-mai-fairway-3.webp", alt: "Alpine Golf Resort Chiang Mai Thailand Championship Fairway", caption: "Thailand Championship Fairway" },
 { src: "/images/courses/thailand/alpine-chiang-mai/alpine-golf-resort-chiang-mai-green-4.webp", alt: "Alpine Golf Chiang Mai Thailand Championship Green Northern", caption: "Alpine Golf Chiang Mai Thailand Championship Green" },
 { src: "/images/courses/thailand/alpine-chiang-mai/alpine-golf-resort-chiang-mai-scenic-5.webp", alt: "Alpine Golf Resort Chiang Mai Thailand Scenic Hole Northern Mountains", caption: "Thailand Scenic Hole Northern Mountains" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Ron Garl Design</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Alpine Golf Resort<br /><span className="text-gold">Chiang Mai</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Ron Garl's northern Thailand masterpiece — the Doi Inthanon range as your backdrop."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', 'Ron Garl'], ['Year Opened', '2008'], ['Location', 'Chiang Mai, Northern Thailand'], ['Par', '72'], ['Length', '6,904 Yards (Blue Tees)'], ['Setting', 'Mountain valley, surrounded by peaks'], ['Character', 'Hilly, scenic, strategic'], ['Access', '30 mins from Chiang Mai city']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Alpine Golf Resort Chiang Mai is widely regarded as one of the most scenic golf experiences in all of Thailand. Ron Garl's design sits in a spectacular mountain valley surrounded by the ranges of Northern Thailand, offering elevation changes, mountain vistas, and a cool highland climate that makes playing here feel closer to New Zealand than Southeast Asia.</p>
 <p>The layout uses the natural valley terrain to create a flowing course where every hole feels organically routed — there are no artificial mounds or manufactured features, just the honest golf that emerges when a skilled architect works with strong natural material. The result is a course of beauty and genuine strategic challenge.</p>
 <p>Chiang Mai is an outstanding golf destination for discerning travellers who want to combine great golf with cultural immersion in Thailand's most charming city. AGS regularly builds week-long Chiang Mai itineraries pairing multiple rounds with temple visits, night markets, and elephant sanctuary experiences.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Valley</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/thailand/alpine-chiang-mai/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://alpinegolfresort.com/"]}
                name="Alpine Golf Resort Chiang Mai"
                description="Ron Garl's northern Thailand masterpiece — the Doi Inthanon range as your backdrop."
                url={"https://www.asiagolfspecialists.com/courses/thailand/alpine-chiang-mai/"}
                imageUrl={"/images/courses/thailand/alpine-chiang-mai/alpine-golf-resort-chiang-mai-thailand-1.webp"}
                addressLocality={"Chiang Mai"}
                addressCountry={"TH"}
                numberOfHoles={18}
                courseLength={6904}
                par={72}
                designer="Ron Garl"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Thailand", item: "https://www.asiagolfspecialists.com/destinations/thailand/" },
                    { name: "Thailand Courses", item: "https://www.asiagolfspecialists.com/destinations/thailand/courses/" },
                    { name: "Alpine Golf Resort Chiang Mai", item: "https://www.asiagolfspecialists.com/courses/thailand/alpine-chiang-mai/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Alpine Golf Resort Chiang Mai</strong> is a premier Par 72 championship layout in Chiang Mai, Thailand, crafted by <strong>Ron Garl</strong> (2008) and stretching to <strong>6,904 Yards (Blue Tees)</strong> across a mountain valley, surrounded by peaks environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its majestic valley mountain setting (Surrounded by misty peaks) and strategic water hazards & island green (Demanding water carries).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Alpine Golf Resort Chiang Mai (30 mins from Chiang Mai city) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Thailand dry season. Our curatorial scorecard specifically notes its northern thai caddie warmth (Attentive, skilled guidance), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Chiang Mai golf tour by AGS, Alpine Golf Resort Chiang Mai provides a distinct architectural test by Ron Garl that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Alpine Golf Resort Chiang Mai"
    itemUrl="https://www.asiagolfspecialists.com/courses/thailand/alpine-chiang-mai/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/thailand/alpine-chiang-mai/alpine-golf-resort-chiang-mai-thailand-1.webp"
    addressLocality="Chiang Mai"
    addressCountry="TH"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Ron Garl Northern Mountain Classic • Chiang Mai"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Majestic Valley Mountain Setting",
            score: 9.8,
            highlight: "Surrounded by misty peaks"
      },
      {
            label: "Strategic Water Hazards & Island Green",
            score: 9.6,
            highlight: "Demanding water carries"
      },
      {
            label: "Northern Thai Caddie Warmth",
            score: 9.5,
            highlight: "Attentive, skilled guidance"
      },
      {
            label: "27-Hole Mountain Resort Facilities",
            score: 9.4,
            highlight: "Full 27-hole resort complex"
      }
]}
    verdict="Nestled in the San Kamphaeng valley surrounded by misty mountain ranges. Host of multiple Asian Tour events, Alpine Chiang Mai tests ball-striking with dramatic lake carries and sweeping valley fairways."
  />


            <CourseFAQSection
                courseName="Alpine Golf Resort Chiang Mai"
                faqs={[
          {
                    "q": "What are the key course specifications for Alpine Golf Resort Chiang Mai?",
                    "a": "Alpine Golf Resort Chiang Mai in Chiang Mai, Thailand is a Par 72 championship layout designed by Ron Garl (opened 2008), measuring 6,904 Yards (Blue Tees) within a mountain valley, surrounded by peaks setting. It is particularly noted for majestic valley mountain setting (Surrounded by misty peaks)."
          },
          {
                    "q": "How do I secure tee times and caddies at Alpine Golf Resort Chiang Mai?",
                    "a": "Alpine Golf Resort Chiang Mai operates under 30 mins from chiang mai city protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (northern thai caddie warmth (Attentive, skilled guidance)), and private VIP transfers from your Chiang Mai hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Alpine Golf Resort Chiang Mai?",
                    "a": "Our field inspection highlights Alpine Golf Resort Chiang Mai's strategic water hazards & island green (Demanding water carries) alongside majestic valley mountain setting (Surrounded by misty peaks). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Alpine Golf Resort Chiang Mai?",
                    "a": "November through April is the prime season for Alpine Golf Club Chiang Mai."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/thailand/alpine-chiang-mai/" venueName="Alpine Golf Resort Chiang Mai" venueType="course" />
            <CourseNavigation
                prev={{ title: "Thai Country Club", path: "/courses/thailand/thai-country-club/" }}
                next={{ title: "Alpine Golf & Sports Club Bangkok", path: "/courses/thailand/alpine-golf-club/" }}
                country="Thailand"
                countryLink="/destinations/thailand/courses/"
            />
 

</main>
 );
}
