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
 title: { absolute: "Royal Phnom Penh Golf Club | Championship Golf Cambodia" },
 description: "Play Royal Phnom Penh Golf Club — peaceful rural atmosphere among traditional rice paddies and coconut palms near Phnom Penh airport. Book with AGS.",
 keywords: ["Royal Phnom Penh Golf Club", "Phnom Penh Golf Course", "Rice Paddy Golf Cambodia", "Rural Golf Cambodia", "Cambodia Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/cambodia/royal-phnom-penh/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Royal Phnom Penh Golf Club | Championship Golf Cambodia" },
        description: "Play Royal Phnom Penh Golf Club — peaceful rural atmosphere among traditional rice paddies and coconut palms near Phnom Penh airport. Book with AGS.",
        url: "https://www.asiagolfspecialists.com/courses/cambodia/royal-phnom-penh/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/cambodia/royal-phnom-penh/royal-phnom-penh-golf-club-cambodia-1.webp",
            width: 1200,
            height: 630,
            alt: "Royal Phnom Penh Golf Club | Rice Paddies Coconut Palms Cambodia — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Royal Phnom Penh Golf Club | Championship Golf Cambodia" },
        description: "Play Royal Phnom Penh Golf Club — peaceful rural atmosphere among traditional rice paddies and coconut palms near Phnom Penh airport. Book with AGS.",
        images: ["https://www.asiagolfspecialists.com/images/courses/cambodia/royal-phnom-penh/royal-phnom-penh-golf-club-cambodia-1.webp"],
    },
};

export default function RoyalPhnomPenh() {
 const images = [
 { src: "/images/courses/cambodia/royal-phnom-penh/royal-phnom-penh-golf-club-cambodia-1.webp", alt: "Royal Phnom Penh Golf Club Cambodia Rice Paddies Coconut Palms Aerial", caption: "Rice paddies and coconut palms, aerial view" },
 { src: "/images/courses/cambodia/royal-phnom-penh/royal-phnom-penh-golf-club-rice-paddy-2.webp", alt: "Royal Phnom Penh Golf Club Cambodia Rice Paddies Rural Atmosphere", caption: "Rice paddy rural atmosphere, Royal PP Golf" },
 { src: "/images/courses/cambodia/royal-phnom-penh/royal-phnom-penh-golf-club-coconut-3.webp", alt: "Royal Phnom Penh Golf Club Cambodia Coconut Palms Peaceful Hole", caption: "Peaceful hole through coconut palms" },
 { src: "/images/courses/cambodia/royal-phnom-penh/royal-phnom-penh-golf-club-peaceful-4.webp", alt: "Royal Phnom Penh Golf Club Cambodia Peaceful Rural Championship Fairway", caption: "Championship fairway, Royal Phnom Penh" },
 { src: "/images/courses/cambodia/royal-phnom-penh/royal-phnom-penh-golf-club-green-5.webp", alt: "Royal Phnom Penh Golf Club Cambodia Championship Green", caption: "Championship green, Royal Phnom Penh Golf" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Rural Cambodian Golf</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Royal Phnom Penh<br /><span className="text-gold">Golf Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Golf among rice paddies and coconut palms — Cambodia&apos;s most authentically rural course."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', 'P + Z Development'], ['Year Opened', '1999'], ['Location', 'Phnom Penh (near airport), Cambodia'], ['Par', '72'], ['Length', '6,538 Yards (Blue Tees)'], ['Setting', 'Traditional rice paddies, coconut palms'], ['Atmosphere', 'Peaceful, rural, authentically Cambodian'], ['Access', 'Excellent — near Phnom Penh airport'], ['Character', 'Serene, scenic, accessible']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Royal Phnom Penh Golf Club offers something genuinely rare in Asian golf tourism — an authentic rural experience where the course setting is as much the attraction as the game itself. Set among traditional Cambodian rice paddies and mature coconut palm groves near Phnom Penh's international airport, this course provides a window into the agricultural heart of Cambodia that no museum or city tour can replicate, all delivered from the seat of a golf cart with a caddie at your side.</p>
 <p>The course design respects its rural environment — the routing works with the existing landscape features rather than imposing artificial drama, creating a natural, unhurried flow around the 18 holes that encourages taking in the surrounding fields, palms, and the peaceful sounds of rural Cambodian life. Water features from the rice paddy irrigation system are integrated into the layout, and the greens are consistently well-maintained despite the relatively modest green fee schedule.</p>
 <p>For discerning golfers landing in Phnom Penh and looking for an immediate, accessible, and genuinely memorable first round, AGS often recommends Royal Phnom Penh Golf Club as the arrival-day option — close to the airport, no transport stress, and a culturally immersive experience that sets the tone perfectly for what Cambodia golf has to offer beyond its city-centre venues.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Rice Paddies</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/cambodia/royal-phnom-penh/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://www.royalphnompenhgolf.com/"]}
                name="Royal Phnom Penh Golf Club"
                description="Golf among rice paddies and coconut palms — Cambodia&apos;s most authentically rural course."
                url={"https://www.asiagolfspecialists.com/courses/cambodia/royal-phnom-penh/"}
                imageUrl={"/images/courses/cambodia/royal-phnom-penh/royal-phnom-penh-golf-club-cambodia-1.webp"}
                addressLocality={"Phnom Penh"}
                addressCountry={"KH"}
                numberOfHoles={27}
                courseLength={6538}
                par={72}
                designer="P + Z Development"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Cambodia", item: "https://www.asiagolfspecialists.com/destinations/cambodia/" },
                    { name: "Cambodia Courses", item: "https://www.asiagolfspecialists.com/destinations/cambodia/courses/" },
                    { name: "Royal Phnom Penh Golf Club", item: "https://www.asiagolfspecialists.com/courses/cambodia/royal-phnom-penh/" },
                ]}
            />

        
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Royal Phnom Penh Golf Club</strong> is a premier Par 72 championship layout in Phnom Penh, Cambodia, crafted by <strong>P + Z Development</strong> (1999) and stretching to <strong>6,538 Yards (Blue Tees)</strong> across a traditional rice paddies, coconut palms environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its native coconut palm canopies (Shaded tree-lined fairways) and broad flat fairways (Walkable and relaxing).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Royal Phnom Penh Golf Club (Excellent — near Phnom Penh airport) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Cambodia dry season. Our curatorial scorecard specifically notes its attentive caddie support (Courteous local caddies), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Phnom Penh golf tour by AGS, Royal Phnom Penh Golf Club provides a distinct architectural test by P + Z Development that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Royal Phnom Penh Golf Club"
    itemUrl="https://www.asiagolfspecialists.com/courses/cambodia/royal-phnom-penh/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/cambodia/royal-phnom-penh/royal-phnom-penh-golf-club-cambodia-1.webp"
    addressLocality="Phnom Penh"
    addressCountry="KH"
    overallScore={4.5}
    maxScore={5.0}
    gradeBadge="Traditional Cambodian Parkland • Phnom Penh"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Native Coconut Palm Canopies",
            score: 9.4,
            highlight: "Shaded tree-lined fairways"
      },
      {
            label: "Broad Flat Fairways",
            score: 9.2,
            highlight: "Walkable and relaxing"
      },
      {
            label: "Attentive Caddie Support",
            score: 9.3,
            highlight: "Courteous local caddies"
      },
      {
            label: "Classic Local Clubhouse Dining",
            score: 9.1,
            highlight: "Authentic Khmer cuisine"
      }
]}
    verdict="One of Cambodia's classic original layouts. Flat, walkable fairways lined with mature coconut palms and native floral beds provide an authentic and relaxing round of golf."
  />


            <CourseFAQSection
                courseName="Royal Phnom Penh Golf Club"
                faqs={[
          {
                    "q": "What are the key course specifications for Royal Phnom Penh Golf Club?",
                    "a": "Royal Phnom Penh Golf Club in Phnom Penh, Cambodia is a Par 72 championship layout designed by P + Z Development (opened 1999), measuring 6,538 Yards (Blue Tees) within a traditional rice paddies, coconut palms setting. It is particularly noted for native coconut palm canopies (Shaded tree-lined fairways)."
          },
          {
                    "q": "How do I secure tee times and caddies at Royal Phnom Penh Golf Club?",
                    "a": "Royal Phnom Penh Golf Club operates under excellent — near phnom penh airport protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (attentive caddie support (Courteous local caddies)), and private VIP transfers from your Phnom Penh hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Royal Phnom Penh Golf Club?",
                    "a": "Our field inspection highlights Royal Phnom Penh Golf Club's broad flat fairways (Walkable and relaxing) alongside native coconut palm canopies (Shaded tree-lined fairways). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Royal Phnom Penh Golf Club?",
                    "a": "November through May offers the best conditions at Royal Phnom Penh Golf Club."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/cambodia/royal-phnom-penh/" venueName="Royal Phnom Penh Golf Club" venueType="course" />
            <CourseNavigation
                prev={{ title: "Phokeethra Country Club Siem Reap", path: "/courses/cambodia/phokeethra/" }}
                next={{ title: "Siem Reap Booyoung Country Club", path: "/courses/cambodia/siem-reap-booyoung/" }}
                country="Cambodia"
                countryLink="/destinations/cambodia/courses/"
            />
 

</main>
 );
}
