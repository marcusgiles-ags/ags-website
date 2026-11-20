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
 title: { absolute: "PGA Ocean Course NovaWorld | PGA Certified Course in Vietnam" },
 description: "Play the PGA Ocean Course at NovaWorld Phan Thiet. Designed by Greg Norman, this PGA-certified championship course offers a premier golf experience. Boo.",
 keywords: ["PGA Ocean Course NovaWorld", "Greg Norman Vietnam", "Vietnam Golf Course", "Vietnam Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/pga-ocean-course/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "PGA Ocean Course NovaWorld | PGA Certified Course in Vietnam" },
        description: "Play the PGA Ocean Course at NovaWorld Phan Thiet. Designed by Greg Norman, this PGA-certified championship course offers a premier golf experience. Boo.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/pga-ocean-course/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/pga-ocean-course/pga-ocean-course-phan-thiet-herojpg.webp",
            width: 1200,
            height: 630,
            alt: "PGA Ocean Course NovaWorld | Vietnam — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "PGA Ocean Course NovaWorld | PGA Certified Course in Vietnam" },
        description: "Play the PGA Ocean Course at NovaWorld Phan Thiet. Designed by Greg Norman, this PGA-certified championship course offers a premier golf experience. Boo.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/pga-ocean-course/pga-ocean-course-phan-thiet-herojpg.webp"],
    },
};

export default function CoursePage() {
 const images = [
  { src: "/images/courses/vietnam/pga-ocean-course/pga-ocean-course-phan-thiet-herojpg.webp", alt: "PGA Ocean Course Hero", caption: "PGA Ocean Course at NovaWorld" },
  { src: "/images/courses/vietnam/pga-ocean-course/pga-ocean-course-phan-thiet-links.webp", alt: "PGA Ocean Course Links", caption: "Greg Norman Design" },
  { src: "/images/courses/vietnam/pga-ocean-course/pga-ocean-course-phan-thiet-coastal-holes.webp", alt: "PGA Ocean Course Coastal", caption: "Stunning coastal holes" },
  { src: "/images/courses/vietnam/pga-ocean-course/pga-ocean-course-phan-thiet-hole-7.webp", alt: "PGA Ocean Course Hole 7", caption: "Signature holes" },
  { src: "/images/courses/vietnam/pga-ocean-course/pga-ocean-course-phan-thiet-clubhouse.webp", alt: "PGA Ocean Course Clubhouse", caption: "Modern clubhouse facilities" }
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
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>PGA <br /><span className="text-gold">Ocean Course NovaWorld</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">
 "The only PGA-certified golf course in Vietnam, designed by Greg Norman with magnificent views of the Phan Thiet coastline."
 </p>
 </div>
 </header>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="PGA Ocean Course (NovaWorld)"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/pga-ocean-course/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/pga-ocean-course/pga-ocean-course-phan-thiet-herojpg.webp"
    addressLocality="Phan Thiet"
    addressCountry="VN"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="PGA Tour Certified Standards • Greg Norman"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "PGA Tour Certified Design & Conditioning",
            score: 9.7,
            highlight: "Built to international specs"
      },
      {
            label: "Panoramic Ocean Views & Undulating Dunes",
            score: 9.6,
            highlight: "Rugged Australian Sandbelt style"
      },
      {
            label: "Caddie Tour-Caliber Yardages",
            score: 9.5,
            highlight: "Laser-sharp pin management"
      },
      {
            label: "NovaWorld Resort Amenities & Dining",
            score: 9.5,
            highlight: "Expansive beach resort ecosystem"
      }
]}
    verdict="Officially certified by the PGA of America, this Greg Norman layout offers rolling fairways, dramatic ocean views, and rugged bunkers reminiscent of the Australian Sandbelt."
  />


 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
              <tbody>
                {[
                  ['Designer', 'Greg Norman'],
                  ['Year Opened', '2021'],
                  ['Par', '72'],
                  ['Length', '7,400 Yards'],
                  ['Grass Type', 'Zeon Zoysia / Primo Zoysia'],
                  ['Setting', 'Coastal Parkland'],
                  ['Top Ranking', 'PGA Exclusive in Vietnam']
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
 <p>Located within the expansive NovaWorld Phan Thiet resort, the PGA Ocean Course is a crowning achievement in Vietnam's growing golf portfolio. Greg Norman has masterfully utilized the natural contours of the land, creating a layout that is both visually stunning and strategically demanding.

The course is defined by its pristine Zoysia grass fairways, rugged bunkering, and sweeping ocean vistas. As a PGA-branded property, it meets the highest international standards, ready to host top-tier professional tournaments while remaining accessible and enjoyable for amateur players.

The world-class amenities, including a premier academy and an opulent clubhouse, ensure an unparalleled golf experience from arrival to departure.</p>
 </div>
 </div>
 </div>
 </section>

 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Course</span></h2>
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
    pagePath="/courses/vietnam/pga-ocean-course/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={[]}
                name="PGA Ocean Course (NovaWorld)"
                description="Play the PGA Ocean Course at NovaWorld Phan Thiet. Designed by Greg Norman, this PGA-certified championship course offers a premier golf experience. Boo."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/pga-ocean-course/"}
                imageUrl={"/images/courses/vietnam/pga-ocean-course/pga-ocean-course-phan-thiet-herojpg.webp"}
                addressLocality={""}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={7400}
                par={72}
                designer="Greg Norman"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "PGA Ocean Course (NovaWorld)", item: "https://www.asiagolfspecialists.com/courses/vietnam/pga-ocean-course/" },
                ]}
            />


 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>PGA Ocean Course (NovaWorld)</strong> is a premier Par 72 championship layout in Phan Thiet, Vietnam, crafted by <strong>Greg Norman</strong> (2021) and stretching to <strong>7,400 Yards</strong> across a coastal parkland environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its pga tour certified design & conditioning (Built to international specs) and panoramic ocean views & undulating dunes (Rugged Australian Sandbelt style).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, PGA Ocean Course (NovaWorld) (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie tour-caliber yardages (Laser-sharp pin management), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Phan Thiet golf tour by AGS, PGA Ocean Course (NovaWorld) provides a distinct architectural test by Greg Norman that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

            <CourseFAQSection
                courseName="PGA Ocean Course (NovaWorld)"
                faqs={[
          {
                    "q": "What are the key course specifications for PGA Ocean Course (NovaWorld)?",
                    "a": "PGA Ocean Course (NovaWorld) in Phan Thiet, Vietnam is a Par 72 championship layout designed by Greg Norman (opened 2021), measuring 7,400 Yards within a coastal parkland setting. It is particularly noted for pga tour certified design & conditioning (Built to international specs)."
          },
          {
                    "q": "How do I secure tee times and caddies at PGA Ocean Course (NovaWorld)?",
                    "a": "PGA Ocean Course (NovaWorld) operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie tour-caliber yardages (Laser-sharp pin management)), and private VIP transfers from your Phan Thiet hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at PGA Ocean Course (NovaWorld)?",
                    "a": "Our field inspection highlights PGA Ocean Course (NovaWorld)'s panoramic ocean views & undulating dunes (Rugged Australian Sandbelt style) alongside pga tour certified design & conditioning (Built to international specs). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play PGA Ocean Course (NovaWorld)?",
                    "a": "Peak playing conditions at PGA Ocean Course (NovaWorld) in Phan Thiet typically run during the cooler, drier months from November through April, with early morning tee times recommended year-round."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/pga-ocean-course/" venueName="PGA Ocean Course (NovaWorld)" venueType="course" />
            <CourseNavigation
                prev={{ title: "Nara Binh Tien Golf Club", path: "/courses/vietnam/nara-binh-tien/" }}
                next={{ title: "Phoenix Golf Resort", path: "/courses/vietnam/phoenix-golf-resort/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
 );
}


