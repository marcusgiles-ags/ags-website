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
 title: { absolute: "BRG Kings Island Golf Resort | Hanoi" },
 description: "BRG Kings Island Golf Resort Hanoi — Vietnam's most iconic golf destination with island and lakeside championship layouts north of the capital. Book wit.",
 keywords: ["Kings Island Golf Resort", "Hanoi Golf Courses", "Vietnam Golf Tours", "Dong Mo Lake Golf", "Northern Vietnam Golf"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/kings-island/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "BRG Kings Island Golf Resort | Hanoi" },
        description: "BRG Kings Island Golf Resort Hanoi — Vietnam's most iconic golf destination with island and lakeside championship layouts north of the capital. Book wit.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/kings-island/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/kings-island/kings-island-1.webp",
            width: 1200,
            height: 630,
            alt: "King — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "BRG Kings Island Golf Resort | Hanoi" },
        description: "BRG Kings Island Golf Resort Hanoi — Vietnam's most iconic golf destination with island and lakeside championship layouts north of the capital. Book wit.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/kings-island/kings-island-1.webp"],
    },
};

export default function KingsIsland() {
 const images = [
 { src: "/images/courses/vietnam/kings-island/kings-island-1.webp", alt: "Kings Island Golf Resort Dong Mo Lake", caption: "King's Island Golf Resort Boat Arrival" },
 { src: "/images/courses/vietnam/kings-island/kings-island-2.webp", alt: "Kings Island Mountainview Course", caption: "Mountainview Course Vista" },
 { src: "/images/courses/vietnam/kings-island/kings-island-3.webp", alt: "Kings Island Lakeside Course", caption: "Lakeside Course Water Hazard" },
 { src: "/images/courses/vietnam/kings-island/kings-island-4.webp", alt: "Kings Island Kings Course", caption: "Jack Nicklaus II Signature King's Course" },
 { src: "/images/courses/vietnam/kings-island/kings-island-5.webp", alt: "Kings Island Golf Resort Island Green", caption: "The Famous Island Green at King's Course" },
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
 AGS Course Heritage — Island Retreat
 </div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>King's Island <br /><span className="text-gold">Golf Resort</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">
 "A tranquil speedboat ride across Dong Mo Lake delivers you to an exclusive golfing sanctuary."
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
                  ['Designer', 'Robert McFarland (Lakeside) / PCD (Mountainview) / Jack Nicklaus II (Kings)'],
                  ['Year Opened', '1993 / 2004 / 2018'],
                  ['Par', '72 / 72 / 72'],
                  ['Length', '6,516 Yards / 7,000 Yards / 7,310 Yards'],
                  ['Grass Type', 'Bermuda / Zoysia'],
                  ['Setting', 'Lakeside / Mountain Parkland'],
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
 BRG King's Island Golf Resort is an expansive and tranquil 54-hole golf complex situated on the shores of the Dong Mo reservoir, roughly an hour from Hanoi. Access to the island resort is uniquely via a short, scenic speedboat ride, immediately setting a serene tone for the day.
 </p>
 <p>
 The resort offers three distinct layouts. The Lakeside Course, designed by Robert McFarland, weaves tightly along the water's edge, bringing the lake into play on 14 holes. The Mountainview Course, crafted by Pacific Coast Design, offers a breathtaking backdrop of the Ba Vi Mountains and features wide fairways flanked by mature forests. The newest addition, the King's Course by Jack Nicklaus II, presents a formidable modern championship test, culminating in a spectacular par-3 19th hole featuring an island green.
 </p>
 <p>
 With its combination of accessibility, world-class design variety, and profound tranquility, King's Island is an essential stop for any Northern Vietnam golf itinerary.
 </p>
 </div>
 </div>
 </div>
 </section>

 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Island</span></h2>
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
    pagePath="/courses/vietnam/kings-island/"
  />
  </div>
  </section>
            <CourseSchemaBlock
                name="BRG Kings Island Golf Resort"
                description="BRG Kings Island Golf Resort Hanoi — Vietnam"
                url={"https://www.asiagolfspecialists.com/courses/vietnam/kings-island/"}
                imageUrl={"/images/courses/vietnam/kings-island/kings-island-1.webp"}
                addressLocality={"Hanoi"}
                addressCountry={"VN"}
                numberOfHoles={54}
                courseLength={6516}
                par={72}
                designer="Robert McFarland (Lakeside) / PCD (Mountainview) / Jack Nicklaus II (Kings)"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "BRG Kings Island Golf Resort", item: "https://www.asiagolfspecialists.com/courses/vietnam/kings-island/" },
                ]}
            />


            
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>BRG Kings Island Golf Resort</strong> is a premier Par 72 / 72 / 72 championship layout in Hanoi, Vietnam, crafted by <strong>Robert McFarland (Lakeside) / PCD (Mountainview) / Jack Nicklaus II (Kings)</strong> (1993 / 2004 / 2018) and stretching to <strong>6,516 Yards / 7,000 Yards / 7,310 Yards</strong> across a lakeside / mountain parkland environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its scenic boat transfer & island atmosphere (Arrive via private speedboat) and lakeside routing & mature pine canopies (Lakeside, Mountainview & Kings).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, BRG Kings Island Golf Resort (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie course management expertise (Experienced veteran caddies), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Hanoi golf tour by AGS, BRG Kings Island Golf Resort provides a distinct architectural test by Robert McFarland (Lakeside) / PCD (Mountainview) / Jack Nicklaus II (Kings) that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="BRG Kings Island Golf Resort"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/kings-island/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/kings-island/kings-island-1.webp"
    addressLocality="Hanoi"
    addressCountry="VN"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="54-Hole Island Golf Sanctuary • Jack Nicklaus II"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Scenic Boat Transfer & Island Atmosphere",
            score: 9.8,
            highlight: "Arrive via private speedboat"
      },
      {
            label: "Lakeside Routing & Mature Pine Canopies",
            score: 9.5,
            highlight: "Lakeside, Mountainview & Kings"
      },
      {
            label: "Caddie Course Management Expertise",
            score: 9.4,
            highlight: "Experienced veteran caddies"
      },
      {
            label: "Clubhouse Heritage & Lakeside Dining",
            score: 9.3,
            highlight: "Northern Vietnam golf institution"
      }
]}
    verdict="Accessible exclusively by speed-boat across Dong Mo Lake, Kings Island is legendary in Northern Vietnam. The Jack Nicklaus II Kings Course brings world-class bunkering and modern design to an iconic island retreat."
  />


            <CourseFAQSection
                courseName="King's Island Golf Resort"
                faqs={[
                    { q: "How do I book a round at this course?", a: "Tee times are exclusively arranged through Asia Golf Specialists as part of our bespoke itinerary service. Contact us to design your perfect golf journey \u2014 we handle all bookings, transfers, and logistics on your behalf." },
                    { q: "What are the green fees?", a: "Green fees vary by season and group size. Asia Golf Specialists negotiates preferred rates on behalf of our clients \u2014 request a custom quote for current pricing and availability." },
                    { q: "What is the dress code?", a: "Standard golf attire is required: collared shirts, proper golf shoes (soft spikes preferred), and tailored shorts or trousers. Smart casual dress is expected in the clubhouse." },
                    { q: "What is the best time of year to play?", a: "October through April is prime season for Northern Vietnam golf, offering cooler, drier conditions." },
                ]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/kings-island/" venueName="BRG Kings Island Golf Resort" venueType="course" />
            <CourseNavigation
                prev={{ title: "Hoiana Shores Golf Club", path: "/courses/vietnam/hoiana-shores/" }}
                next={{ title: "KN Golf Links Cam Ranh", path: "/courses/vietnam/kn-golf-links/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
 );
}
