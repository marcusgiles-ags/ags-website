import VenueItineraries from "@/components/VenueItineraries";
﻿import React from "react";
import Link from "next/link";
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
 title: { absolute: "Angkor Golf Resort Siem Reap | Nick Faldo Course" },
 description: "Angkor Golf Resort Siem Reap — a Nick Faldo championship design near Angkor Wat and Cambodia's premier golf venue. Book exclusive tee times with Asia Go.",
 keywords: ["Angkor Golf Resort Siem Reap", "Cambodia Best Golf Course", "Nick Faldo Golf Cambodia", "Angkor Wat Golf", "Cambodia Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/cambodia/angkor-golf-resort/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Angkor Golf Resort Siem Reap | Nick Faldo Course" },
        description: "Angkor Golf Resort Siem Reap — a Nick Faldo championship design near Angkor Wat and Cambodia's premier golf venue. Book exclusive tee times with Asia Go.",
        url: "https://www.asiagolfspecialists.com/courses/cambodia/angkor-golf-resort/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/cambodia/angkor-golf-resort/angkor-golf-resort-siem-reap-cambodia-1.webp",
            width: 1200,
            height: 630,
            alt: "Angkor Golf Resort Siem Reap | Nick Faldo Cambodia — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Angkor Golf Resort Siem Reap | Nick Faldo Course" },
        description: "Angkor Golf Resort Siem Reap — a Nick Faldo championship design near Angkor Wat and Cambodia's premier golf venue. Book exclusive tee times with Asia Go.",
        images: ["https://www.asiagolfspecialists.com/images/courses/cambodia/angkor-golf-resort/angkor-golf-resort-siem-reap-cambodia-1.webp"],
    },
};

export default function AngkorGolfResort() {
 const images = [
 { src: "/images/courses/cambodia/angkor-golf-resort/angkor-golf-resort-siem-reap-cambodia-1.webp", alt: "Angkor Golf Resort Siem Reap Cambodia Nick Faldo Aerial Angkor Wat", caption: "Nick Faldo design, aerial view, Siem Reap" },
 { src: "/images/courses/cambodia/angkor-golf-resort/angkor-golf-resort-faldo-championship-2.webp", alt: "Angkor Golf Resort Cambodia Faldo Design Championship Fairway", caption: "Faldo design championship fairway" },
 { src: "/images/courses/cambodia/angkor-golf-resort/angkor-golf-resort-cambodia-hole-3.webp", alt: "Angkor Golf Resort Cambodia Championship Hole Scenic", caption: "Championship hole, Angkor Golf" },
 { src: "/images/courses/cambodia/angkor-golf-resort/angkor-golf-resort-angkor-wat-view-4.webp", alt: "Angkor Golf Resort Siem Reap Cambodia Angkor Wat Backdrop Hole", caption: "Angkor Wat backdrop hole, Siem Reap" },
 { src: "/images/courses/cambodia/angkor-golf-resort/angkor-golf-resort-signature-green-5.webp", alt: "Angkor Golf Resort Cambodia Best Course Southeast Asia Green", caption: "Championship green, Angkor Golf Resort" },
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
                    <DestinationBackLink country="Cambodia" countryLink="/destinations/cambodia/courses/" />
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Cambodia&apos;s Finest</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Angkor Golf Resort<br /><span className="text-gold">Siem Reap</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Sir Nick Faldo&apos;s Cambodian masterpiece — where the temples of Angkor frame every round."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
  {([
     { k: 'Designer', v: <a href="https://nickfaldodesign.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">Sir Nick Faldo</a> },
     { k: 'Year Opened', v: '2008' },
     { k: 'Location', v: 'Siem Reap, Cambodia' },
     { k: 'Par', v: '72' },
     { k: 'Length', v: '6,666 Yards (Blue Tees)' },
     { k: 'Setting', v: 'Tropical, near Angkor Wat' },
     { k: 'Top 100 Asia Ranking', v: <a href="https://www.top100golfcourses.com/golf-courses/asia/cambodia" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">#1 in Asia (2026)</a> },
   ] as { k: string; v: React.ReactNode }[]).map(({ k, v }) => (
  <tr key={k}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
  ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Angkor Golf Resort stands unchallenged as Cambodia's premier golf destination — a Sir Nick Faldo design positioned just minutes from the ancient temples of Angkor Wat in Siem Reap, combining world-class golf architecture with one of the most extraordinary cultural backdrops found anywhere on earth. Playing here is a genuinely immersive experience; the spires of twelfth-century temple complexes are visible from multiple vantage points across the course.</p>
 <p>Faldo's design is characteristically strategic and demanding: wide enough to be rewarding for visiting resort golfers, but with sufficient precision required off key tees and into several well-defended greens to provide the championship examination that serious players want. The course is maintained to a standard that rivals Thailand's very best, which given Cambodia's relative youth as a golf tourism destination is genuinely remarkable.</p>
 <p>AGS regards Angkor Golf Resort as the centrepiece of any Cambodia golf itinerary — the combination of Sir Nick Faldo's design, Angkor Wat proximity, and the cultural depth of Siem Reap makes it one of the most compelling golf travel propositions in all of Southeast Asia for discerning golfers seeking the genuinely extraordinary.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Experience <span className="text-gold">Angkor</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/cambodia/angkor-golf-resort/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://www.angkor-golf.com/"]}
                name="Angkor Golf Resort"
                description="Sir Nick Faldo&apos;s Cambodian masterpiece — where the temples of Angkor frame every round."
                url={"https://www.asiagolfspecialists.com/courses/cambodia/angkor-golf-resort/"}
                imageUrl={"/images/courses/cambodia/angkor-golf-resort/angkor-golf-resort-siem-reap-cambodia-1.webp"}
                addressLocality={"Siem Reap"}
                addressCountry={"KH"}
                numberOfHoles={18}
                courseLength={6666}
                par={72}
                designer="Sir Nick Faldo"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Cambodia", item: "https://www.asiagolfspecialists.com/destinations/cambodia/" },
                    { name: "Cambodia Courses", item: "https://www.asiagolfspecialists.com/destinations/cambodia/courses/" },
                    { name: "Angkor Golf Resort", item: "https://www.asiagolfspecialists.com/courses/cambodia/angkor-golf-resort/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Angkor Golf Resort</strong> is a premier Par 72 championship layout in Siem Reap, Cambodia, crafted by <strong>Sir Nick Faldo</strong> (Modern Championship Era) and stretching to <strong>6,666 Yards (Blue Tees)</strong> across a championship layout environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its faldo signature tactical bunkering (Deep revetted and flash faces) and flawless paspalum turf roll (Tour-level fairway carpets).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Angkor Golf Resort (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Cambodia dry season. Our curatorial scorecard specifically notes its english-speaking caddie excellence (Highly articulate line readers), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Siem Reap golf tour by AGS, Angkor Golf Resort provides a distinct architectural test by Sir Nick Faldo that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Angkor Golf Resort"
    itemUrl="https://www.asiagolfspecialists.com/courses/cambodia/angkor-golf-resort/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/cambodia/angkor-golf-resort/angkor-golf-resort-siem-reap-cambodia-1.webp"
    addressLocality="Siem Reap"
    addressCountry="KH"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="Sir Nick Faldo Cambodia Masterpiece • Siem Reap"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Faldo Signature Tactical Bunkering",
            score: 9.9,
            highlight: "Deep revetted and flash faces"
      },
      {
            label: "Flawless Paspalum Turf Roll",
            score: 9.8,
            highlight: "Tour-level fairway carpets"
      },
      {
            label: "English-Speaking Caddie Excellence",
            score: 9.8,
            highlight: "Highly articulate line readers"
      },
      {
            label: "5-Star Angkor Colonial Clubhouse",
            score: 9.8,
            highlight: "Refined Khmer hospitality"
      }
]}
    verdict="The undisputed premier championship golf course in Cambodia. Sir Nick Faldo sculpted a tactical paradise just minutes from Angkor Wat. Impeccable conditioning, bold bunker shapes, and elite caddie service make this an essential bucket-list round."
  />


            
 <VenueItineraries venueHref="/courses/cambodia/angkor-golf-resort/" venueName="Angkor Golf Resort" venueType="course" />

 <CourseFAQSection
                courseName="Angkor Golf Resort"
                faqs={[
          {
                    "q": "What are the key course specifications for Angkor Golf Resort?",
                    "a": "Angkor Golf Resort in Siem Reap, Cambodia is a Par 72 championship layout designed by Sir Nick Faldo (opened Modern Championship Era), measuring 6,666 Yards (Blue Tees) within a championship layout setting. It is particularly noted for faldo signature tactical bunkering (Deep revetted and flash faces)."
          },
          {
                    "q": "How do I secure tee times and caddies at Angkor Golf Resort?",
                    "a": "Angkor Golf Resort operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (english-speaking caddie excellence (Highly articulate line readers)), and private VIP transfers from your Siem Reap hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Angkor Golf Resort?",
                    "a": "Our field inspection highlights Angkor Golf Resort's flawless paspalum turf roll (Tour-level fairway carpets) alongside faldo signature tactical bunkering (Deep revetted and flash faces). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Angkor Golf Resort?",
                    "a": "November through May is ideal for Angkor Golf Resort. Peak months are December through February."
          }
]}
            />
            <CourseNavigation
                prev={{ title: "Vattanac Golf Resort West Course", path: "/courses/cambodia/vattanac-west/" }}
                next={{ title: "Chhun On Golf Resort", path: "/courses/cambodia/chhun-on-golf-resort/" }}
                country="Cambodia"
                countryLink="/destinations/cambodia/courses/"
            />
 

</main>
 );
}
