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
 title: "Mae Jo Golf Resort & Spa | Chiang Mai Golf",
 description: "Play Mae Jo Golf Club, a scenic Chiang Mai course with Doi Suthep views. Book your Thailand golf tour with AGS today!",
 keywords: ["Mae Jo Golf Club", "Chiang Mai Golf Courses", "Thailand Golf Tours", "Northern Thailand Golf", "Doi Suthep Views"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/thailand/mae-jo/",
    },
    openGraph: {
        type: "website",
        title: "Mae Jo Golf Resort & Spa | Chiang Mai Golf",
        description: "Play Mae Jo Golf Club, a scenic Chiang Mai course with Doi Suthep views. Book your Thailand golf tour with AGS today!",
        url: "https://www.asiagolfspecialists.com/courses/thailand/mae-jo/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/thailand/mae-jo/mae-jo-1.webp",
            width: 1200,
            height: 630,
            alt: "Mae Jo Golf Club  — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Mae Jo Golf Resort & Spa | Chiang Mai Golf",
        description: "Play Mae Jo Golf Club, a scenic Chiang Mai course with Doi Suthep views. Book your Thailand golf tour with AGS today!",
        images: ["https://www.asiagolfspecialists.com/images/courses/thailand/mae-jo/mae-jo-1.webp"],
    },
};

export default function MaeJo() {
 const images = [
 { src: "/images/courses/thailand/mae-jo/mae-jo-1.webp", alt: "Mae Jo Golf Club Chiang Mai", caption: "Mae Jo Golf Club and Fruit Orchards" },
 { src: "/images/courses/thailand/mae-jo/mae-jo-2.webp", alt: "Mae Jo Golf Club Doi Suthep Views", caption: "Stunning Views of Doi Suthep Mountain" },
 { src: "/images/courses/thailand/mae-jo/mae-jo-3.webp", alt: "Mae Jo Golf Club Zoysia Fairways", caption: "Immaculate Zoysia Fairways" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
 AGS Course Heritage — Scenic Parkland
 </div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Mae Jo <br /><span className="text-gold">Golf Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">
 "A tranquil test of golf set amidst rolling fruit orchards with stunning mountain vistas."
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
                  ['Designer', 'Seni Thirawat'],
                  ['Year Opened', '2004'],
                  ['Par', '72'],
                  ['Length', '6,730 Yards'],
                  ['Grass Type', 'Zoysia (Fairways) / Korean Velvet (Greens)'],
                  ['Setting', 'Parkland / Orchard'],
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
 Located just a short 20-minute drive from the center of Chiang Mai, Mae Jo Golf Club is widely considered one of the most picturesque and enjoyable courses in Northern Thailand. Designed by local Thai architect Seni Thirawat, the layout fits seamlessly into its natural surroundings.
 </p>
 <p>
 The course is beautifully routed through mature fruit orchards featuring mango, pomelo, and lychee trees, which provide both a visual feast and strategic obstacles. The defining characteristic of Mae Jo is the breathtaking views of the iconic Doi Suthep temple and the surrounding mountain ranges, which are visible from nearly every hole.
 </p>
 <p>
 While relatively short at 6,730 yards from the back tees, Mae Jo is a thinking player's course. It demands precision off the tee and careful distance control on approaches to the firm, undulating Korean Velvet greens. It's an idyllic addition to any Chiang Mai golf itinerary.
 </p>
 </div>
 </div>
 </div>
 </section>

 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience <span className="text-gold">Mae Jo</span></h2>
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
    pagePath="/courses/thailand/mae-jo/"
  />
  </div>
  </section>
            <CourseSchemaBlock
                name="Mae Jo Golf Resort & Spa"
                description="Play Mae Jo Golf Club, a scenic Chiang Mai course with Doi Suthep views. Book your Thailand golf tour with AGS today!"
                url={"https://www.asiagolfspecialists.com/courses/thailand/mae-jo/"}
                imageUrl={"/images/courses/thailand/mae-jo/mae-jo-1.webp"}
                addressLocality={"Chiang Mai"}
                addressCountry={"TH"}
                numberOfHoles={18}
                courseLength={6730}
                par={72}
                designer="Seni Thirawat"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Thailand", item: "https://www.asiagolfspecialists.com/destinations/thailand/" },
                    { name: "Thailand Courses", item: "https://www.asiagolfspecialists.com/destinations/thailand/courses/" },
                    { name: "Mae Jo Golf Resort & Spa", item: "https://www.asiagolfspecialists.com/courses/thailand/mae-jo/" },
                ]}
            />


            
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Mae Jo Golf Resort & Spa</strong> is a premier Par 72 championship layout in Chiang Mai, Thailand, crafted by <strong>Seni Thirawat</strong> (2004) and stretching to <strong>6,730 Yards</strong> across a parkland / orchard environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its fruit orchard & forest landscape (Surrounded by Longan trees) and fun undulating greens & doglegs (Strategic thinking test).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Mae Jo Golf Resort & Spa (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Thailand dry season. Our curatorial scorecard specifically notes its friendly lanna caddie culture (Renowned northern hospitality), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Chiang Mai golf tour by AGS, Mae Jo Golf Resort & Spa provides a distinct architectural test by Seni Thirawat that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Mae Jo Golf Resort & Spa"
    itemUrl="https://www.asiagolfspecialists.com/courses/thailand/mae-jo/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/thailand/mae-jo/mae-jo-1.webp"
    addressLocality="Chiang Mai"
    addressCountry="TH"
    overallScore={4.6}
    maxScore={5.0}
    gradeBadge="Lanna Orchards & Mountain Golf • Chiang Mai"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Fruit Orchard & Forest Landscape",
            score: 9.5,
            highlight: "Surrounded by Longan trees"
      },
      {
            label: "Fun Undulating Greens & Doglegs",
            score: 9.3,
            highlight: "Strategic thinking test"
      },
      {
            label: "Friendly Lanna Caddie Culture",
            score: 9.4,
            highlight: "Renowned northern hospitality"
      },
      {
            label: "Relaxed Highland Atmosphere",
            score: 9.3,
            highlight: "Scenic clubhouse mountain views"
      }
]}
    verdict="Surrounded by Longan and Lychee fruit orchards, Mae Jo offers a scenic, tranquil test with steep doglegs and contoured greens that reward strategic club choices."
  />


            <CourseFAQSection
                courseName="Mae Jo Golf Resort & Spa"
                faqs={[
          {
                    "q": "What are the key course specifications for Mae Jo Golf Resort & Spa?",
                    "a": "Mae Jo Golf Resort & Spa in Chiang Mai, Thailand is a Par 72 championship layout designed by Seni Thirawat (opened 2004), measuring 6,730 Yards within a parkland / orchard setting. It is particularly noted for fruit orchard & forest landscape (Surrounded by Longan trees)."
          },
          {
                    "q": "How do I secure tee times and caddies at Mae Jo Golf Resort & Spa?",
                    "a": "Mae Jo Golf Resort & Spa operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (friendly lanna caddie culture (Renowned northern hospitality)), and private VIP transfers from your Chiang Mai hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Mae Jo Golf Resort & Spa?",
                    "a": "Our field inspection highlights Mae Jo Golf Resort & Spa's fun undulating greens & doglegs (Strategic thinking test) alongside fruit orchard & forest landscape (Surrounded by Longan trees). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Mae Jo Golf Resort & Spa?",
                    "a": "November through February is the prime season for Northern Thailand golf, offering very comfortable temperatures and low humidity."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/thailand/mae-jo/" venueName="Mae Jo Golf Resort & Spa" venueType="course" />
            <CourseNavigation
                prev={{ title: "Lake View Hotel & Golf Club", path: "/courses/thailand/lake-view/" }}
                next={{ title: "Mission Hills Kanchanaburi", path: "/courses/thailand/mission-hills-kanchanaburi/" }}
                country="Thailand"
                countryLink="/destinations/thailand/courses/"
            />
 

</main>
 );
}
