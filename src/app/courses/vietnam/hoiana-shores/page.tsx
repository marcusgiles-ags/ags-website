import VenueItineraries from "@/components/VenueItineraries";
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
 title: { absolute: "Hoiana Shores Golf Club | Vietnam's First True Coastal Links" },
 description: "Hoiana Shores Golf Club — Vietnam's first true links course by Robert Trent Jones Jr. on the East Sea near Hoi An. A must-play.",
 keywords: ["Hoiana Shores Golf Club", "Robert Trent Jones Jr Vietnam", "Vietnam Coastal Links Golf", "Hoi An Golf Course", "Vietnam Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/hoiana-shores/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Hoiana Shores Golf Club | Vietnam's First True Coastal Links" },
        description: "Hoiana Shores Golf Club — Vietnam's first true links course by Robert Trent Jones Jr. on the East Sea near Hoi An. A must-play.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/hoiana-shores/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/hoiana-shores/hoiana-shores-golf-club-coastal-vietnam-1.webp",
            width: 1200,
            height: 630,
            alt: "Hoiana Shores Golf Club | Vietnam — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Hoiana Shores Golf Club | Vietnam's First True Coastal Links" },
        description: "Hoiana Shores Golf Club — Vietnam's first true links course by Robert Trent Jones Jr. on the East Sea near Hoi An. A must-play.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/hoiana-shores/hoiana-shores-golf-club-coastal-vietnam-1.webp"],
    },
};

export default function HoianaShores() {
 const images = [
 { src: "/images/courses/vietnam/hoiana-shores/hoiana-shores-golf-club-coastal-vietnam-1.webp", alt: "Hoiana Shores Golf Club Coastal Links Vietnam Panoramic View", caption: "Coastal links panorama, Hoiana Shores Golf Club" },
 { src: "/images/courses/vietnam/hoiana-shores/hoiana-shores-golf-club-robert-trent-jones-jr-2.webp", alt: "Hoiana Shores Golf Club Robert Trent Jones Jr Design Fairway", caption: "Designed by Robert Trent Jones Jr." },
 { src: "/images/courses/vietnam/hoiana-shores/hoiana-shores-golf-club-east-sea-links-3.webp", alt: "Hoiana Shores Golf Club East Sea Links Hole Vietnam", caption: "Links hole along the East Sea" },
 { src: "/images/courses/vietnam/hoiana-shores/hoiana-shores-golf-club-dunes-hoi-an-4.webp", alt: "Hoiana Shores Golf Club Coastal Sand Dunes Hoi An - Premium Southeast Asia Golf Tours 2026", caption: "Coastal sand dunes, Hoiana Shores" },
 { src: "/images/courses/vietnam/hoiana-shores/hoiana-shores-golf-club-championship-layout-5.webp", alt: "Hoiana Shores Golf Club Championship Layout Vietnam Green", caption: "Championship layout, Hoiana Shores Golf Club" },
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
        AGS Course Heritage
      </div>
      <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Hoiana Shores <br /><span className="text-gold">Golf Club</span></h1>
      <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">
        &quot;Vietnam&apos;s first true links experience, sculpted from the East Sea&apos;s edge.&quot; — Robert Trent Jones Jr.
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
                  ['Designer', <a href="https://www.rtj2.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">Robert Trent Jones II</a>],
                  ['Year Opened', '2019'],
                  ['Par', '71'],
                  ['Length', '6,554 Yards (Blue Tees)'],
                  ['Grass Type', 'Zeon Zoysia'],
                  ['Setting', 'Links'], ['Top 100 Asia Ranking', <a href="https://www.top100golfcourses.com/golf-courses/asia/vietnam" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">#2 in Asia (2026)</a>]
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
 Hoiana Shores Golf Club stands as one of the most significant golf openings in Southeast Asia in recent years. Designed by the legendary Robert Trent Jones Jr., it is the first course in Vietnam to sit directly on the East Sea, delivering a true links experience in a tropical setting.
 </p>
 <p>
 The 18-hole layout winds through natural coastal dunes near the UNESCO World Heritage site of Hoi An, offering spectacular panoramic ocean views from nearly every hole. The course demands respect for the wind, rewarding players who think their way around rather than overpower it.
 </p>
 <p>
 Part of the prestigious Hoiana integrated resort, the club features world-class clubhouse facilities, a luxury pro-shop, and a strategic practice facility. For discerning golfers seeking the authentic links challenge in an exotic location, Hoiana Shores is unmissable.
 </p>
 </div>
 </div>
 </div>
 </section>

 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">East Sea Links</span></h2>
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
   pagePath="/courses/vietnam/hoiana-shores/"
 />
 </div>
 </section>
            <CourseSchemaBlock sameAs={["https://www.hoianashores.com/"]}
                name="Hoiana Shores Golf Club"
                description="Hoiana Shores Golf Club — Vietnam"
                url={"https://www.asiagolfspecialists.com/courses/vietnam/hoiana-shores/"}
                imageUrl={"/images/courses/vietnam/hoiana-shores/hoiana-shores-golf-club-coastal-vietnam-1.webp"}
                addressLocality={"Hoi An"}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={6554}
                par={71}
                designer="Robert Trent Jones Jr."
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Hoiana Shores Golf Club", item: "https://www.asiagolfspecialists.com/courses/vietnam/hoiana-shores/" },
                ]}
            />


 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Hoiana Shores Golf Club</strong> is a premier Par 71 championship links layout in Hoi An, Vietnam, crafted by <strong>Robert Trent Jones Jr.</strong> (2019) and playing <strong>6,554 Yards from the Blue Tees</strong> (7,004 yards from the Back Tips) across a coastal dunes environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its turf quality &amp; pure links sand base (Zeon Zoysia • Firm, fast links roll) and strategic dunes routing &amp; ocean drama (Robert Trent Jones II coastal design).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Hoiana Shores Golf Club (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie wind & contour reading (Experienced local caddies on subtle dunes), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Hoi An golf tour by AGS, Hoiana Shores Golf Club provides a distinct architectural test by Robert Trent Jones Jr. that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                        <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'rgba(212, 175, 55, 0.08)', borderLeft: '3px solid #D4AF37', borderRadius: '4px' }}>
                            <strong>In-Depth Review:</strong> Read our comprehensive course breakdown — <Link href="/blog/hoiana-shores-golf-club-review/" style={{ color: '#D4AF37', textDecoration: 'underline', fontWeight: 600 }}>Hoiana Shores Golf Club Review: Vietnam's #1 Links Course</Link>.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Hoiana Shores Golf Club"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/hoiana-shores/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/hoiana-shores/hoiana-shores-golf-club-dunes-hoi-an-4.webp"
    addressLocality="Hoi An"
    addressCountry="VN"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="Vietnam's Premier Links Layout • Asia Top 10"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      { label: "Turf Quality & Pure Links Sand Base", score: 9.9, highlight: "Zeon Zoysia • Firm, fast links roll" },
      { label: "Strategic Dunes Routing & Ocean Drama", score: 9.8, highlight: "Robert Trent Jones II coastal design" },
      { label: "Caddie Wind & Contour Reading", score: 9.7, highlight: "Experienced local caddies on subtle dunes" },
      { label: "Luxury Clubhouse & Beachfront Facilities", score: 9.6, highlight: "5-star Hoiana Resort integration" },
    ]}
    verdict="A tour-de-force in modern links architecture. Robert Trent Jones Jr. sculpted a layout that directly hugs the East Sea dunes, demanding creative ground-game imagination in shifting afternoon sea breezes. Indisputably one of the top championship golf experiences in Asia."
  />

            
 <VenueItineraries venueHref="/courses/vietnam/hoiana-shores/" venueName="Hoiana Shores Golf Club" venueType="course" />

 <CourseFAQSection
                courseName="Hoiana Shores Golf Club"
                faqs={[
          {
                    "q": "What are the key course specifications for Hoiana Shores Golf Club?",
                    "a": "Hoiana Shores Golf Club in Hoi An, Vietnam is a Par 71 championship links layout designed by Robert Trent Jones Jr. (opened 2019), measuring 6,554 Yards from the Blue Tees (7,004 yards from the tips) within a coastal dunes setting. It is particularly noted for turf quality & pure links sand base (Zeon Zoysia • Firm, fast links roll)."
          },
          {
                    "q": "How do I secure tee times and caddies at Hoiana Shores Golf Club?",
                    "a": "Hoiana Shores Golf Club operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie wind & contour reading (Experienced local caddies on subtle dunes)), and private VIP transfers from your Hoi An hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Hoiana Shores Golf Club?",
                    "a": "Our field inspection highlights Hoiana Shores Golf Club's strategic dunes routing & ocean drama (Robert Trent Jones II coastal design) alongside turf quality & pure links sand base (Zeon Zoysia • Firm, fast links roll). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Hoiana Shores Golf Club?",
                    "a": "February through September is the prime season for Hoiana Shores Golf Club."
          }
]}
            />
            <CourseNavigation
                prev={{ title: "Heron Lake Golf Course Vietnam", path: "/courses/vietnam/heron-lake/" }}
                next={{ title: "BRG Kings Island Golf Resort", path: "/courses/vietnam/kings-island/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
 );
}
