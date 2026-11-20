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
 title: "Chhun On Golf Resort | Phnom Penh Golf",
 description: "Chhun On Golf Resort Phnom Penh — a popular 18-hole championship layout on the outskirts of the Cambodian capital. Book with Asia Golf Specialists.",
 keywords: ["Chhun On Golf Resort", "Phnom Penh Golf Courses", "Cambodia Golf Tours", "Chhun On Lakes Course", "Chhun On Palm Course"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/cambodia/chhun-on-golf-resort/",
    },
    openGraph: {
        type: "website",
        title: "Chhun On Golf Resort | Phnom Penh Golf",
        description: "Chhun On Golf Resort Phnom Penh — a popular 18-hole championship layout on the outskirts of the Cambodian capital. Book with Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/courses/cambodia/chhun-on-golf-resort/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/cambodia/chhun-on-golf-resort/chhun-on-golf-resort-lakes-water-hole-2-hero.webp",
            width: 1200,
            height: 630,
            alt: "Chhun On Golf Resort — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Chhun On Golf Resort | Phnom Penh Golf",
        description: "Chhun On Golf Resort Phnom Penh — a popular 18-hole championship layout on the outskirts of the Cambodian capital. Book with Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/courses/cambodia/chhun-on-golf-resort/chhun-on-golf-resort-lakes-water-hole-2-hero.webp"],
    },
};

export default function ChhunOnGolfResort() {
 const images = [
 { src: "/images/courses/cambodia/chhun-on-golf-resort/chhun-on-golf-resort-lakes-water-hole-2-hero.webp", alt: "Chhun On Golf Resort Lakes Course Water Hole", caption: "The stunning water hazards of the Lakes Course" },
 { src: "/images/courses/cambodia/chhun-on-golf-resort/chhun-on-golf-resort-lakes-course-cambodia-1.webp", alt: "Chhun On Golf Resort Lakes Aerial", caption: "Lakes Course Aerial View" },
 { src: "/images/courses/cambodia/chhun-on-golf-resort/chhun-on-golf-resort-lakes-fairway-3.webp", alt: "Chhun On Golf Resort Lakes Fairway", caption: "Lakes Course Fairway" },
 { src: "/images/courses/cambodia/chhun-on-golf-resort/chhun-on-golf-resort-palm-course-cambodia-1.webp", alt: "Chhun On Golf Resort Palm Aerial", caption: "Palm Course Aerial View" },
 { src: "/images/courses/cambodia/chhun-on-golf-resort/chhun-on-golf-resort-palm-fairway-3.webp", alt: "Chhun On Golf Resort Palm Fairway", caption: "Palm Course Fairway" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
 AGS Course Selection
 </div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Chhun On <br /><span className="text-gold">Golf Resort</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">
 "A spectacular 36-hole complex near Phnom Penh offering two distinct and challenging layouts."
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
                  ['Designer', 'Brian Curley (Lakes) / Traditional (Palm)'],
                  ['Year Opened', '2023'],
                  ['Par', '72 / 72'], ['Length', '6,200 Yards (Blue Tees)'],
                  ['Grass Type', 'Platinum Paspalum'],
                  ['Setting', 'Lakeside / Parkland'],
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
 Located just outside Phnom Penh, Chhun On Golf Resort is an impressive 36-hole golfing sanctuary that features two highly contrasting and world-class championship courses: the Lakes Course and the Palm Course.
 </p>
 <p>
 The <strong>Lakes Course</strong>, designed by renowned architect Brian Curley, is a visual masterpiece characterized by expansive water hazards that come into play on almost every hole. The strategic placement of water demands precision and shot-making skills, while the beautifully contoured fairways and platinum paspalum greens offer a truly rewarding experience.
 </p>
 <p>
 The <strong>Palm Course</strong> offers a distinctly different, classic parkland feel. Framed by hundreds of indigenous palm trees, the layout challenges golfers with its mature, natural setting, requiring careful positioning off the tee and strategic navigation to the well-protected greens.
 </p>
 <p>
 Both courses are complemented by first-class resort amenities, making Chhun On a must-play destination on any luxury Cambodian golf tour.
 </p>
 </div>
 </div>
 </div>
 </section>

 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience <span className="text-gold">Chhun On</span></h2>
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
    pagePath="/courses/cambodia/chhun-on-golf-resort/"
  />
  </div>
  </section>
            <CourseSchemaBlock
                name="Chhun On Golf Resort"
                description="Chhun On Golf Resort Phnom Penh — a popular 18-hole championship layout on the outskirts of the Cambodian capital. Book with Asia Golf Specialists."
                url={"https://www.asiagolfspecialists.com/courses/cambodia/chhun-on-golf-resort/"}
                imageUrl={"/images/courses/cambodia/chhun-on-golf-resort/chhun-on-golf-resort-lakes-water-hole-2-hero.webp"}
                addressLocality={"Phnom Penh"}
                addressCountry={"KH"}
                numberOfHoles={36}
                courseLength={6200}
                par={72}
                designer="Brian Curley (Lakes) / Traditional (Palm)"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Cambodia", item: "https://www.asiagolfspecialists.com/destinations/cambodia/" },
                    { name: "Cambodia Courses", item: "https://www.asiagolfspecialists.com/destinations/cambodia/courses/" },
                    { name: "Chhun On Golf Resort", item: "https://www.asiagolfspecialists.com/courses/cambodia/chhun-on-golf-resort/" },
                ]}
            />


            
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Chhun On Golf Resort</strong> is a premier Par 72 / 72 championship layout in Phnom Penh, Cambodia, crafted by <strong>Brian Curley (Lakes) / Traditional (Palm)</strong> (2023) and stretching to <strong>6,200 Yards (Blue Tees)</strong> across a lakeside / parkland environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its dramatic island green & water sculpting (Thrilling signature target) and flawless modern zoysia conditioning (Lush, tight lie surfaces).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Chhun On Golf Resort (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Cambodia dry season. Our curatorial scorecard specifically notes its caddie service & etiquette (Attentive yardage help), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Phnom Penh golf tour by AGS, Chhun On Golf Resort provides a distinct architectural test by Brian Curley (Lakes) / Traditional (Palm) that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Chhun On Golf Resort"
    itemUrl="https://www.asiagolfspecialists.com/courses/cambodia/chhun-on-golf-resort/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/cambodia/chhun-on-golf-resort/chhun-on-golf-resort-lakes-water-hole-2-hero.webp"
    addressLocality="Phnom Penh"
    addressCountry="KH"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Brian Curley Lakes & Island Green • Phnom Penh"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Dramatic Island Green & Water Sculpting",
            score: 9.7,
            highlight: "Thrilling signature target"
      },
      {
            label: "Flawless Modern Zoysia Conditioning",
            score: 9.6,
            highlight: "Lush, tight lie surfaces"
      },
      {
            label: "Caddie Service & Etiquette",
            score: 9.5,
            highlight: "Attentive yardage help"
      },
      {
            label: "Modern Luxury Clubhouse Architecture",
            score: 9.5,
            highlight: "Striking contemporary pavilion"
      }
]}
    verdict="Brian Curley's newest design near Phnom Penh. Dramatic water features, expansive waste bunkers, and a signature island green deliver high-stakes excitement on every shot."
  />


            <CourseFAQSection
                courseName="Chhun On Golf Resort"
                faqs={[
          {
                    "q": "What are the key course specifications for Chhun On Golf Resort?",
                    "a": "Chhun On Golf Resort in Phnom Penh, Cambodia is a Par 72 / 72 championship layout designed by Brian Curley (Lakes) / Traditional (Palm) (opened 2023), measuring 6,200 Yards (Blue Tees) within a lakeside / parkland setting. It is particularly noted for dramatic island green & water sculpting (Thrilling signature target)."
          },
          {
                    "q": "How do I secure tee times and caddies at Chhun On Golf Resort?",
                    "a": "Chhun On Golf Resort operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie service & etiquette (Attentive yardage help)), and private VIP transfers from your Phnom Penh hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Chhun On Golf Resort?",
                    "a": "Our field inspection highlights Chhun On Golf Resort's flawless modern zoysia conditioning (Lush, tight lie surfaces) alongside dramatic island green & water sculpting (Thrilling signature target). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Chhun On Golf Resort?",
                    "a": "Peak playing conditions at Chhun On Golf Resort in Phnom Penh typically run during the cooler, drier months from November through April, with early morning tee times recommended year-round."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/cambodia/chhun-on-golf-resort/" venueName="Chhun On Golf Resort" venueType="course" />
            <CourseNavigation
                prev={{ title: "Angkor Golf Resort Siem Reap", path: "/courses/cambodia/angkor-golf-resort/" }}
                next={{ title: "Garden City Golf Club", path: "/courses/cambodia/garden-city/" }}
                country="Cambodia"
                countryLink="/destinations/cambodia/courses/"
            />
 

</main>
 );
}
