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
 title: { absolute: "Van Tri Golf Club | Vietnam's Premier Private Course" },
 description: "Van Tri Golf Club is Hanoi's most exclusive private golf estate. Designed by Peter Rousseau, this 18-hole championship layout offers an elite experience.",
 keywords: ["Van Tri Golf Club", "Private golf course Hanoi", "Peter Rousseau Vietnam golf", "Hanoi exclusive golf", "Vietnam luxury golf tours"],
 alternates: {
 canonical: "https://www.asiagolfspecialists.com/courses/vietnam/van-tri-golf-club/",
 },
 openGraph: {
 type: "website",
 title: { absolute: "Van Tri Golf Club | Vietnam's Premier Private Course" },
 description: "Van Tri Golf Club is Hanoi's most exclusive private golf estate. Designed by Peter Rousseau, this 18-hole championship layout offers an elite experience.",
 url: "https://www.asiagolfspecialists.com/courses/vietnam/van-tri-golf-club/",
 siteName: "Asia Golf Specialists",
 images: [{
 url: "https://www.asiagolfspecialists.com/images/courses/vietnam/van-tri-golf-club/van-tri-golf-club-water.webp",
 width: 1200,
 height: 630,
 alt: "Van Tri Golf Club Private Course Hanoi Vietnam 2026",
 }],
 },
 twitter: {
 card: "summary_large_image",
 title: { absolute: "Van Tri Golf Club | Vietnam's Premier Private Course" },
 description: "Van Tri Golf Club is Hanoi's most exclusive private golf estate. Designed by Peter Rousseau, this 18-hole championship layout offers an elite experience.",
 images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/van-tri-golf-club/van-tri-golf-club-water.webp"],
 },
};

export default function VanTriGolfClub() {
 const images = [
 { src: "/images/courses/vietnam/van-tri-golf-club/van-tri-golf-club-water.webp", alt: "Van Tri Golf Club Signature Water Hole Hanoi Vietnam", caption: "Signature water hole at Van Tri" },
 { src: "/images/courses/vietnam/van-tri-golf-club/van-tri-clubhouse.webp", alt: "Van Tri Golf Club Luxury Clubhouse Exterior Hanoi", caption: "The exclusive private clubhouse" },
 { src: "/images/courses/vietnam/van-tri-golf-club/van-tri-bunkering-clubhouse.webp", alt: "Van Tri Golf Club Strategic Bunkering Approach Vietnam 2026", caption: "Strategic bunkering approach to the green" },
 { src: "/images/courses/vietnam/van-tri-golf-club/van-tri-golf-club_carts.webp", alt: "Van Tri Golf Club Premium Golf Carts Hanoi 2026", caption: "Premium fleet for an elite experience" },
 { src: "/images/courses/vietnam/van-tri-golf-club/van-tri-restaurant.webp", alt: "Van Tri Golf Club Private Dining Restaurant Vietnam", caption: "Private dining overlooking the course" },
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
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Van Tri <br /><span className="text-gold">Golf Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">
 "Hanoi's first exclusive private golf estate, delivering an immaculate parkland experience."
 </p>
 </div>
 </header>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Van Tri Golf Club"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/van-tri-golf-club/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/van-tri-golf-club/van-tri-golf-club-water.webp"
    addressLocality="Dong Anh, Hanoi"
    addressCountry="VN"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="Hanoi's Most Exclusive Private Sanctuary"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Strict Private Member Exclusivity",
            score: 9.9,
            highlight: "Limited tee times, zero crowds"
      },
      {
            label: "PGA-Standard Turf Maintenance",
            score: 9.8,
            highlight: "Immaculate fairways and greens"
      },
      {
            label: "Elite Caddie Service & Etiquette",
            score: 9.7,
            highlight: "Top-tier private club service"
      },
      {
            label: "High-Security Luxury Clubhouse",
            score: 9.7,
            highlight: "Fine dining & executive suites"
      }
]}
    verdict="Hanoi's most prestigious private membership club. Impeccably manicured fairways and lightning-fast greens weave through pine forests and tranquil water hazards. Uncompromising private luxury."
  />


 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
 {[
 ['Designer', 'Peter Rousseau'],
 ['Year Opened', '2007'],
 ['Par', '72'],
 ['Length', 'Up to 7,601 Yards'],
 ['Grass Type', 'Paspalum'],
 ['Setting', 'Parkland / Lakes'],
 ['Access', 'Private (AGS Arranged)']
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
 Van Tri Golf Club is synonymous with exclusivity and high standards in the North of Vietnam. Conceptualized by Peter Rousseau, the layout is a brilliant execution of parkland golf, carved out of an expansive rural landscape just outside Hanoi's urban core.
 </p>
 <p>
 Water plays a defining role in the Van Tri experience. It comes into play on the vast majority of holes, challenging golfers to make strategic decisions off the tee and demanding precise iron play on the approach. The fairways, carpeted in Paspalum, provide a lush, flawless surface that contrasts beautifully with the white sand bunkers.
 </p>
 <p>
 Because it operates as a strictly private club, the course rarely sees the heavy traffic typical of resort courses, ensuring pristine conditions year-round. The opulent clubhouse matches the on-course standard, making Van Tri a mandatory stop for discerning travelers visiting the capital.
 </p>
 </div>
 </div>
 </div>
 </section>

 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Private Estate</span></h2>
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
    pagePath="/courses/vietnam/van-tri-golf-club/"
  />
  </div>
  </section>

 <CourseSchemaBlock sameAs={["https://vantrigolf.com.vn/"]}
 name="Van Tri Golf Club"
 description="Van Tri Golf Club is Hanoi's most exclusive private golf estate. Designed by Peter Rousseau, this 18-hole championship layout offers an elite experience."
 url={"https://www.asiagolfspecialists.com/courses/vietnam/van-tri-golf-club/"}
 imageUrl={"https://www.asiagolfspecialists.com/images/courses/vietnam/van-tri-golf-club/van-tri-golf-club-water.webp"}
 addressLocality={"Dong Anh, Hanoi"}
 addressCountry={"VN"}
 numberOfHoles={18}
 courseLength={7601}
 par={72}
 designer="Peter Rousseau"
 breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Van Tri Golf Club", item: "https://www.asiagolfspecialists.com/courses/vietnam/van-tri-golf-club/" },
                ]}
 />

 {/* GEO Executive Summary / AI Citation Block */}
 <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
 <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
 <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
 <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Van Tri Golf Club</strong> is a premier Par 72 championship layout in Dong Anh, Hanoi, Vietnam, crafted by <strong>Peter Rousseau</strong> (2007) and stretching to <strong>Up to 7,601 Yards</strong> across a parkland / lakes environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its strict private member exclusivity (Limited tee times, zero crowds) and pga-standard turf maintenance (Immaculate fairways and greens).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Van Tri Golf Club (Private (AGS Arranged)) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its elite caddie service & etiquette (Top-tier private club service), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Dong Anh, Hanoi golf tour by AGS, Van Tri Golf Club provides a distinct architectural test by Peter Rousseau that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
 </div>
 </section>

 <CourseFAQSection
                courseName="Van Tri Golf Club"
                faqs={[
          {
                    "q": "What are the key course specifications for Van Tri Golf Club?",
                    "a": "Van Tri Golf Club in Dong Anh, Hanoi, Vietnam is a Par 72 championship layout designed by Peter Rousseau (opened 2007), measuring Up to 7,601 Yards within a parkland / lakes setting. It is particularly noted for strict private member exclusivity (Limited tee times, zero crowds)."
          },
          {
                    "q": "How do I secure tee times and caddies at Van Tri Golf Club?",
                    "a": "Van Tri Golf Club operates under private (ags arranged) protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (elite caddie service & etiquette (Top-tier private club service)), and private VIP transfers from your Dong Anh, Hanoi hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Van Tri Golf Club?",
                    "a": "Our field inspection highlights Van Tri Golf Club's pga-standard turf maintenance (Immaculate fairways and greens) alongside strict private member exclusivity (Limited tee times, zero crowds). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Van Tri Golf Club?",
                    "a": "October through April offers the most comfortable weather for golf in Hanoi, avoiding the heavy summer rains."
          }
]}
            />

 
            <VenueItineraries venueHref="/courses/vietnam/van-tri-golf-club/" venueName="Van Tri Golf Club" venueType="course" />
            <CourseNavigation
                prev={{ title: "Twin Doves Golf Club", path: "/courses/vietnam/twin-doves/" }}
                next={{ title: "Vietnam Golf & Country Club", path: "/courses/vietnam/vgcc/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 </main>
 );
}
