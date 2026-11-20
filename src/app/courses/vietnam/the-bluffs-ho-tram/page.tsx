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
 title: { absolute: "The Bluffs Grand Ho Tram | Top 100 World Golf Course Vietnam" },
 description: "The Bluffs Ho Tram Strip — Greg Norman's award-winning links course on the South China Sea coast. Consistently ranked Asia's best.",
 keywords: ["The Bluffs Grand Ho Tram", "Top 100 Golf Courses World", "Greg Norman Golf Vietnam", "Ho Tram Golf", "Vietnam Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/the-bluffs-ho-tram/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "The Bluffs Grand Ho Tram | Top 100 World Golf Course Vietnam" },
        description: "The Bluffs Ho Tram Strip — Greg Norman's award-winning links course on the South China Sea coast. Consistently ranked Asia's best.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/the-bluffs-ho-tram/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/the-bluffs-ho-tram/the-bluffs-ho-tram-strip-vietnam-1.webp",
            width: 1200,
            height: 630,
            alt: "The Bluffs Grand Ho Tram | Top 100 World Golf Course Vietnam — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "The Bluffs Grand Ho Tram | Top 100 World Golf Course Vietnam" },
        description: "The Bluffs Ho Tram Strip — Greg Norman's award-winning links course on the South China Sea coast. Consistently ranked Asia's best.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/the-bluffs-ho-tram/the-bluffs-ho-tram-strip-vietnam-1.webp"],
    },
};

export default function TheBluffs() {
 const images = [
 { src: "/images/courses/vietnam/the-bluffs-ho-tram/the-bluffs-ho-tram-strip-vietnam-1.webp", alt: "The Bluffs Grand Ho Tram Strip Vietnam Aerial Coastal Dunes", caption: "The Bluffs Grand Ho Tram Strip Vietnam Aerial Coastal Dunes" },
 { src: "/images/courses/vietnam/the-bluffs-ho-tram/the-bluffs-ho-tram-greg-norman-design-2.webp", alt: "The Bluffs Grand Ho Tram Greg Norman Signature Design Fairway", caption: "The Bluffs Grand Ho Tram Greg Norman Signature Design Fairway" },
 { src: "/images/courses/vietnam/the-bluffs-ho-tram/the-bluffs-ho-tram-ocean-view-3.webp", alt: "The Bluffs Grand Ho Tram Ocean View Championship Hole Vietnam", caption: "The Bluffs Grand Ho Tram Ocean View Championship Hole" },
 { src: "/images/courses/vietnam/the-bluffs-ho-tram/the-bluffs-ho-tram-sand-dunes-links-4.webp", alt: "The Bluffs Grand Ho Tram Massive Sand Dunes Links Vietnam", caption: "The Bluffs Grand Ho Tram Massive Sand Dunes Links" },
 { src: "/images/courses/vietnam/the-bluffs-ho-tram/the-bluffs-ho-tram-top-100-world-5.webp", alt: "The Bluffs Grand Ho Tram Top 100 World Golf Digest Signature Hole", caption: "The Bluffs Grand Ho Tram Top 100 World Golf Digest Signature Hole" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
 AGS Course Heritage — Top 100 World
 </div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>The Bluffs <br /><span className="text-gold">Grand Ho Tram</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">
 "The best golf course I have ever designed." — Greg Norman
 </p>
 </div>
 </header>

 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
              <tbody>
                {[
                  ['Designer', <a href="https://gngcd.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">Greg Norman</a>],
                  ['Year Opened', '2014'],
                  ['Par', '71'],
                  ['Length', '7,207 Yards'],
                  ['Grass Type', 'Zeon Zoysia / Paspalum Greens'],
                  ['Setting', 'Parkland'], ['Top 100 Asia Ranking', <a href="https://www.top100golfcourses.com/golf-courses/asia/vietnam" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">#10 in Asia (2026)</a>]
                ].map(([k, v], i) => (
                  <tr key={i}>
                    <th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>{k}</th>
                    <td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>
 The Bluffs Grand Ho Tram Strip is Vietnam's uncontested champion — a Greg Norman masterpiece that has been ranked in Golf Digest's Top 100 Courses in the World. Sitting on a remote stretch of Vietnam's southern coastline, the course tumbles through enormous coastal sand dunes unlike anything else in Asia.
 </p>
 <p>
 Norman himself calls it his favourite design. The layout exploits the natural terrain with relentless creativity: blind tee shots over dune ridges, platform greens carved into clifftops, and sweeping fairways that shift direction with the ocean breeze. It is physically and mentally the most demanding course in Vietnam.
 </p>
 <p>
 Despite its remote location, the Ho Tram Strip resort provides five-star accommodation and a private airstrip for charter access. For the serious discerning golfer, The Bluffs is the defining Vietnam experience and a bucket-list course by any global standard.
 </p>
 </div>
 </div>
 </div>
 </section>

 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Dunes</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (
 <div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', transition: 'transform 0.3s ease', display: 'block' }}>
 <Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
 <div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>
 {(img as any).caption || `Image ${i + 1}`}
 </div>
 </div>
 ))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/vietnam/the-bluffs-ho-tram/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://thebluffshotram.com/"]}
                name="The Bluffs Grand Ho Tram"
                description="The Bluffs Ho Tram Strip — Greg Norman"
                url={"https://www.asiagolfspecialists.com/courses/vietnam/the-bluffs-ho-tram/"}
                imageUrl={"/images/courses/vietnam/the-bluffs-ho-tram/the-bluffs-ho-tram-strip-vietnam-1.webp"}
                addressLocality={"Ho Tram"}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={7207}
                par={71}
                designer="Greg Norman"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "The Bluffs Grand Ho Tram", item: "https://www.asiagolfspecialists.com/courses/vietnam/the-bluffs-ho-tram/" },
                ]}
            />


            
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>The Bluffs Grand Ho Tram</strong> is a premier Par 71 championship layout in Ho Tram, Vietnam, crafted by <strong>Greg Norman</strong> (2014) and stretching to <strong>7,207 Yards</strong> across a parkland environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its clifftop sand dune elevation & ocean views (50m elevation shifts above sea) and fierce coastal wind exposure (Authentic linksland gale test).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, The Bluffs Grand Ho Tram (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its true firm links ground conditions (Fast running Zeon Zoysia), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Ho Tram golf tour by AGS, The Bluffs Grand Ho Tram provides a distinct architectural test by Greg Norman that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                        <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'rgba(212, 175, 55, 0.08)', borderLeft: '3px solid #D4AF37', borderRadius: '4px' }}>
                            <strong>In-Depth Review:</strong> Read our clifftop design evaluation — <Link href="/blog/the-bluffs-ho-tram-review/" style={{ color: '#D4AF37', textDecoration: 'underline', fontWeight: 600 }}>The Bluffs Ho Tram Strip Review: Greg Norman's Coastal Masterpiece</Link>.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="The Bluffs Grand Ho Tram"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/the-bluffs-ho-tram/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/the-bluffs-ho-tram/the-bluffs-ho-tram-sand-dunes-links-4.webp"
    addressLocality="Ho Tram"
    addressCountry="VN"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="World Top 100 Clifftop Links • Greg Norman"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Clifftop Sand Dune Elevation & Ocean Views",
            score: 9.9,
            highlight: "50m elevation shifts above sea"
      },
      {
            label: "Fierce Coastal Wind Exposure",
            score: 9.8,
            highlight: "Authentic linksland gale test"
      },
      {
            label: "True Firm Links Ground Conditions",
            score: 9.7,
            highlight: "Fast running Zeon Zoysia"
      },
      {
            label: "Luxury Clubhouse & Grand Casino Resort",
            score: 9.8,
            highlight: "Full 5-star beachfront complex"
      }
]}
    verdict="One of Greg Norman's finest global achievements. Towering coastal dunes, fierce South China Sea winds, and stunning 360-degree vistas make this a world-class bucket-list round."
  />


            <CourseFAQSection
                courseName="The Bluffs Grand Ho Tram"
                faqs={[
          {
                    "q": "What are the key course specifications for The Bluffs Grand Ho Tram?",
                    "a": "The Bluffs Grand Ho Tram in Ho Tram, Vietnam is a Par 71 championship layout designed by Greg Norman (opened 2014), measuring 7,207 Yards within a parkland setting. It is particularly noted for clifftop sand dune elevation & ocean views (50m elevation shifts above sea)."
          },
          {
                    "q": "How do I secure tee times and caddies at The Bluffs Grand Ho Tram?",
                    "a": "The Bluffs Grand Ho Tram operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (true firm links ground conditions (Fast running Zeon Zoysia)), and private VIP transfers from your Ho Tram hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at The Bluffs Grand Ho Tram?",
                    "a": "Our field inspection highlights The Bluffs Grand Ho Tram's fierce coastal wind exposure (Authentic linksland gale test) alongside clifftop sand dune elevation & ocean views (50m elevation shifts above sea). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play The Bluffs Grand Ho Tram?",
                    "a": "November through April is prime season for The Bluffs Grand Ho Tram."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/the-bluffs-ho-tram/" venueName="The Bluffs Grand Ho Tram" venueType="course" />
            <CourseNavigation
                prev={{ title: "Thanh Lanh Valley Golf & Resort", path: "/courses/vietnam/thanh-lanh-valley/" }}
                next={{ title: "Twin Doves Golf Club", path: "/courses/vietnam/twin-doves/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
 );
}
