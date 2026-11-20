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
 title: { absolute: "West Lakes Golf & Villas | Championship Golf Near Saigon" },
 description: "West Lakes Golf & Villas offers a championship 18-hole course designed by Thomson Perrett near Ho Chi Minh City.",
 keywords: ["West Lakes Golf & Villas", "Thomson Perrett Vietnam", "Vietnam Golf Course", "Vietnam Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/west-lakes-golf-club/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "West Lakes Golf & Villas | Championship Golf Near Saigon" },
        description: "West Lakes Golf & Villas offers a championship 18-hole course designed by Thomson Perrett near Ho Chi Minh City.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/west-lakes-golf-club/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/west-lakes-golf-club/west-lakes-golf-long-an.webp",
            width: 1200,
            height: 630,
            alt: "West Lakes Golf & Villas | Vietnam — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "West Lakes Golf & Villas | Championship Golf Near Saigon" },
        description: "West Lakes Golf & Villas offers a championship 18-hole course designed by Thomson Perrett near Ho Chi Minh City.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/west-lakes-golf-club/west-lakes-golf-long-an.webp"],
    },
};

export default function CoursePage() {
 const images = [
  { src: "/images/courses/vietnam/west-lakes-golf-club/west-lakes-golf-long-an.webp", alt: "West Lakes Golf Hero", caption: "West Lakes Golf & Villas" },
  { src: "/images/courses/vietnam/west-lakes-golf-club/west-lakes-golf-long-an-fairway.webp", alt: "West Lakes Fairways", caption: "Pristine Zeon Zoysia fairways" },
  { src: "/images/courses/vietnam/west-lakes-golf-club/west-lakes-golf-long-an-island.webp", alt: "West Lakes Island Green", caption: "Challenging water hazards" },
  { src: "/images/courses/vietnam/west-lakes-golf-club/west-lakes-golf-long-an-aerial.webp", alt: "West Lakes Aerial", caption: "Thomson Perrett design" },
  { src: "/images/courses/vietnam/west-lakes-golf-club/west-lakes-golf-long-an-clubhouse.webp", alt: "West Lakes Clubhouse", caption: "Clubhouse and facilities" }
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
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>West <br /><span className="text-gold">Lakes Golf & Villas</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">
 "An exciting Thomson Perrett designed course located just outside Ho Chi Minh City, characterized by picturesque lakes and excellent conditioning."
 </p>
 </div>
 </header>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="West Lakes Golf & Villas"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/west-lakes-golf-club/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/west-lakes-golf-club/west-lakes-golf-long-an.webp"
    addressLocality="Long An"
    addressCountry="VN"
    overallScore={4.6}
    maxScore={5.0}
    gradeBadge="Western Saigon Championship • Thomson Perrett"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Zeon Zoysia Fairway Quality",
            score: 9.6,
            highlight: "Pristine turf roll from tee to green"
      },
      {
            label: "Dramatic Lakeside Water Carries",
            score: 9.3,
            highlight: "Water in play on key holes"
      },
      {
            label: "Caddie Distance & Hazard Reading",
            score: 9.3,
            highlight: "Accurate yardage advice"
      },
      {
            label: "Modern Western Clubhouse Comfort",
            score: 9.3,
            highlight: "Spacious lockers and dining"
      }
]}
    verdict="The first course in Western Ho Chi Minh City to feature Zeon Zoysia grass from tee to green. Designed by Thomson Perrett, it weaves through vast lakes with superb year-round turf."
  />


 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
              <tbody>
                {[
                  ['Designer', 'Thomson Perrett'],
                  ['Year Opened', '2018'],
                  ['Par', '72'],
                  ['Length', '6,634 Yards (Blue Tees)'],
                  ['Grass Type', 'Zeon Zoysia'],
                  ['Setting', 'Lakeside / Parkland'],
                  ['Top Ranking', 'Top Courses near HCMC']
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
 <p>West Lakes Golf & Villas brings a high-quality golf experience to the western suburbs of Ho Chi Minh City. The Thomson Perrett design makes exceptional use of the flat terrain by incorporating vast lakes, which come into play on numerous holes, requiring accuracy and thoughtful course management.

The conditioning is consistently top-tier, thanks to the use of Zeon Zoysia grass, which provides lush, green fairways year-round. The greens are well-guarded and fast, ensuring a test for all skill levels.

Coupled with a modern clubhouse, expansive practice facilities, and luxurious on-site villas, West Lakes is an ideal destination for a day trip from the city or a relaxing golf getaway.</p>
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
    pagePath="/courses/vietnam/west-lakes-golf-club/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={[]}
                name="West Lakes Golf & Villas"
                description="West Lakes Golf & Villas offers a championship 18-hole course designed by Thomson Perrett near Ho Chi Minh City."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/west-lakes-golf-club/"}
                imageUrl={"/images/courses/vietnam/west-lakes-golf-club/west-lakes-golf-long-an.webp"}
                addressLocality={""}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={6634}
                par={72}
                designer="Thomson Perrett"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "West Lakes Golf & Villas", item: "https://www.asiagolfspecialists.com/courses/vietnam/west-lakes-golf-club/" },
                ]}
            />


 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>West Lakes Golf & Villas</strong> is a premier Par 72 championship layout in Long An, Vietnam, crafted by <strong>Thomson Perrett</strong> (2018) and stretching to <strong>6,634 Yards (Blue Tees)</strong> across a lakeside / parkland environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its zeon zoysia fairway quality (Pristine turf roll from tee to green) and dramatic lakeside water carries (Water in play on key holes).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, West Lakes Golf & Villas (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie distance & hazard reading (Accurate yardage advice), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Long An golf tour by AGS, West Lakes Golf & Villas provides a distinct architectural test by Thomson Perrett that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

            <CourseFAQSection
                courseName="West Lakes Golf & Villas"
                faqs={[
          {
                    "q": "What are the key course specifications for West Lakes Golf & Villas?",
                    "a": "West Lakes Golf & Villas in Long An, Vietnam is a Par 72 championship layout designed by Thomson Perrett (opened 2018), measuring 6,634 Yards (Blue Tees) within a lakeside / parkland setting. It is particularly noted for zeon zoysia fairway quality (Pristine turf roll from tee to green)."
          },
          {
                    "q": "How do I secure tee times and caddies at West Lakes Golf & Villas?",
                    "a": "West Lakes Golf & Villas operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie distance & hazard reading (Accurate yardage advice)), and private VIP transfers from your Long An hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at West Lakes Golf & Villas?",
                    "a": "Our field inspection highlights West Lakes Golf & Villas's dramatic lakeside water carries (Water in play on key holes) alongside zeon zoysia fairway quality (Pristine turf roll from tee to green). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play West Lakes Golf & Villas?",
                    "a": "Peak playing conditions at West Lakes Golf & Villas in Long An typically run during the cooler, drier months from November through April, with early morning tee times recommended year-round."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/west-lakes-golf-club/" venueName="West Lakes Golf & Villas" venueType="course" />
            <CourseNavigation
                prev={{ title: "Vinpearl Golf Nam Hoi An", path: "/courses/vietnam/vinpearl-nam-hoi-an/" }}
                next={{ title: "Ba Na Hills Golf Club", path: "/courses/vietnam/ba-na-hills/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
 );
}
