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
 title: { absolute: "Phokeethra Country Club Siem Reap | Cambodia Championship" },
 description: "Play Phokeethra Country Club, Siem Reap. 18-hole championship golf at Sofitel Angkor. Book your Vietnam/Thailand golf tour today!",
 keywords: ["Phokeethra Country Club Siem Reap", "Cambodian Open Golf", "Asian Tour Cambodia", "Siem Reap Golf Course", "Cambodia Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/cambodia/phokeethra/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Phokeethra Country Club Siem Reap | Cambodia Championship" },
        description: "Play Phokeethra Country Club, Siem Reap. 18-hole championship golf at Sofitel Angkor. Book your Vietnam/Thailand golf tour today!",
        url: "https://www.asiagolfspecialists.com/courses/cambodia/phokeethra/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/cambodia/phokeethra/phokeethra-country-club-siem-reap-cambodia-1.webp",
            width: 1200,
            height: 630,
            alt: "Phokeethra Country Club Siem Reap | Asian Tour Cambodia Open Host — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Phokeethra Country Club Siem Reap | Cambodia Championship" },
        description: "Play Phokeethra Country Club, Siem Reap. 18-hole championship golf at Sofitel Angkor. Book your Vietnam/Thailand golf tour today!",
        images: ["https://www.asiagolfspecialists.com/images/courses/cambodia/phokeethra/phokeethra-country-club-siem-reap-cambodia-1.webp"],
    },
};

export default function PhokeethraCountryClub() {
 const images = [
 { src: "/images/courses/cambodia/phokeethra/phokeethra-country-club-siem-reap-cambodia-1.webp", alt: "Phokeethra Country Club Siem Reap Cambodia Asian Tour Aerial", caption: "Asian Tour host course, Siem Reap aerial" },
 { src: "/images/courses/cambodia/phokeethra/phokeethra-country-club-asian-tour-2.webp", alt: "Phokeethra Country Club Cambodia Cambodian Open Asian Tour Hole", caption: "Cambodian Open host fairway, Phokeethra" },
 { src: "/images/courses/cambodia/phokeethra/phokeethra-country-club-water-carry-3.webp", alt: "Phokeethra Country Club Cambodia Forced Water Carry Championship", caption: "Forced water carry, Phokeethra Golf" },
 { src: "/images/courses/cambodia/phokeethra/phokeethra-country-club-fairway-4.webp", alt: "Phokeethra Country Club Siem Reap Cambodia Championship Fairway", caption: "Championship fairway, Phokeethra Siem Reap" },
 { src: "/images/courses/cambodia/phokeethra/phokeethra-country-club-green-5.webp", alt: "Phokeethra Country Club Cambodia Championship Green", caption: "Championship green, Phokeethra Golf" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Asian Tour Venue</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Phokeethra<br /><span className="text-gold">Country Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Former home of the Cambodian Open — where Asian Tour professionals tested forced water carries in Siem Reap."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', 'Weerayudth Phetbuasak'], ['Year Opened', '2004'], ['Location', 'Siem Reap, Cambodia'], ['Par', '72'], ['Length', '6,791 Yards (Blue Tees)'], ['Tournament History', 'Asian Tour Cambodian Open (former host)'], ['Signature Feature', 'Forced water carries throughout'], ['Setting', 'Tropical, near Angkor temples'], ['Character', 'Championship standard, demanding'], ['Top 100 Asia Ranking', <a href="https://www.top100golfcourses.com/golf-courses/asia/cambodia" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">#3 in Asia (2026)</a>]
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Phokeethra Country Club carries the prestigious distinction of having hosted the Asian Tour's Cambodian Open — an accolade that certifies the course to a professional tournament standard and makes it one of the most credentialled layouts in Cambodia. The Asian Tour brings the world's top emerging professionals together for a serious championship test, and Phokeethra met that standard convincingly during its time as the national Open host.</p>
 <p>The course's signature challenge is its system of forced water carries — genuine carry requirements off tees and into greens that leave no room for the layup approach that more forgiving designs allow. The water is positioned to punish truly errant shots decisively while still rewarding conservative but accurate target-finding. It is a more demanding playing experience than either Angkor Golf Resort or the Chhun On courses, and is best suited to golfers who want a genuine championship test alongside their Siem Reap cultural itinerary.</p>
 <p>AGS recommends Phokeethra as a strong option for lower-handicap discerning golfers visiting Siem Reap who want to experience the course where professional golf was played in Cambodia. Pairing it with Angkor Golf Resort creates an excellent two-round Siem Reap program at contrasting levels of celebrity design prestige.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Asian Tour</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/cambodia/phokeethra/"
  />
  </div>
  </section>
            <CourseSchemaBlock
                name="Phokeethra Country Club"
                description="Former home of the Cambodian Open — where Asian Tour professionals tested forced water carries in Siem Reap."
                url={"https://www.asiagolfspecialists.com/courses/cambodia/phokeethra/"}
                imageUrl={"/images/courses/cambodia/phokeethra/phokeethra-country-club-siem-reap-cambodia-1.webp"}
                addressLocality={"Siem Reap"}
                addressCountry={"KH"}
                numberOfHoles={18}
                courseLength={6791}
                par={72}
                designer="Weerayudth Phetbuasak"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Cambodia", item: "https://www.asiagolfspecialists.com/destinations/cambodia/" },
                    { name: "Cambodia Courses", item: "https://www.asiagolfspecialists.com/destinations/cambodia/courses/" },
                    { name: "Phokeethra Country Club", item: "https://www.asiagolfspecialists.com/courses/cambodia/phokeethra/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Phokeethra Country Club</strong> is a premier Par 72 championship layout in Siem Reap, Cambodia, crafted by <strong>Weerayudth Phetbuasak</strong> (2004) and stretching to <strong>6,791 Yards (Blue Tees)</strong> across a tropical, near angkor temples environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its 11th-century angkor bridge historic feature (Cross historic bridge on 9) and natural lagoons & palm corridors (Classic tropical parkland).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Phokeethra Country Club (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Cambodia dry season. Our curatorial scorecard specifically notes its caddie local line knowledge (Warm, experienced caddies), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Siem Reap golf tour by AGS, Phokeethra Country Club provides a distinct architectural test by Weerayudth Phetbuasak that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Phokeethra Country Club"
    itemUrl="https://www.asiagolfspecialists.com/courses/cambodia/phokeethra/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/cambodia/phokeethra/phokeethra-country-club-siem-reap-cambodia-1.webp"
    addressLocality="Siem Reap"
    addressCountry="KH"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Asian Tour Cambodia Open Host • Siem Reap"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "11th-Century Angkor Bridge Historic Feature",
            score: 9.8,
            highlight: "Cross historic bridge on 9"
      },
      {
            label: "Natural Lagoons & Palm Corridors",
            score: 9.5,
            highlight: "Classic tropical parkland"
      },
      {
            label: "Caddie Local Line Knowledge",
            score: 9.5,
            highlight: "Warm, experienced caddies"
      },
      {
            label: "Sofitel Luxury Resort Service",
            score: 9.6,
            highlight: "5-star Sofitel management"
      }
]}
    verdict="Home of the Asian Tour's Johnnie Walker Cambodian Open. Features an authentic 11th-century stone bridge on the 9th hole and delivers a classic parkland challenge amidst ancient history."
  />


            
 <VenueItineraries venueHref="/courses/cambodia/phokeethra/" venueName="Phokeethra Country Club" venueType="course" />

 <CourseFAQSection
                courseName="Phokeethra Country Club"
                faqs={[
          {
                    "q": "What are the key course specifications for Phokeethra Country Club?",
                    "a": "Phokeethra Country Club in Siem Reap, Cambodia is a Par 72 championship layout designed by Weerayudth Phetbuasak (opened 2004), measuring 6,791 Yards (Blue Tees) within a tropical, near angkor temples setting. It is particularly noted for 11th-century angkor bridge historic feature (Cross historic bridge on 9)."
          },
          {
                    "q": "How do I secure tee times and caddies at Phokeethra Country Club?",
                    "a": "Phokeethra Country Club operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie local line knowledge (Warm, experienced caddies)), and private VIP transfers from your Siem Reap hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Phokeethra Country Club?",
                    "a": "Our field inspection highlights Phokeethra Country Club's natural lagoons & palm corridors (Classic tropical parkland) alongside 11th-century angkor bridge historic feature (Cross historic bridge on 9). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Phokeethra Country Club?",
                    "a": "November through May is the recommended season for Phokeethra Country Club Siem Reap."
          }
]}
            />
            <CourseNavigation
                prev={{ title: "Grand Phnom Penh Golf Club", path: "/courses/cambodia/grand-phnom-penh/" }}
                next={{ title: "Royal Phnom Penh Golf Club", path: "/courses/cambodia/royal-phnom-penh/" }}
                country="Cambodia"
                countryLink="/destinations/cambodia/courses/"
            />
 

</main>
 );
}



