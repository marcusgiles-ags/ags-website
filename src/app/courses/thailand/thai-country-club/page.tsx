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
 title: "Thai Country Club Bangkok | Championship Golf",
 description: "Experience Thai Country Club, a luxurious neo-classic design in Bangkok, famously played by Tiger Woods. Book your Thailand golf tour with AGS.",
 keywords: ["Thai Country Club", "Bangkok Golf Courses", "Thailand Golf Tours", "Tiger Woods Thailand", "Premium Bangkok Golf"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/thailand/thai-country-club/",
    },
    openGraph: {
        type: "website",
        title: "Thai Country Club Bangkok | Championship Golf",
        description: "Experience Thai Country Club, a luxurious neo-classic design in Bangkok, famously played by Tiger Woods. Book your Thailand golf tour with AGS.",
        url: "https://www.asiagolfspecialists.com/courses/thailand/thai-country-club/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/thailand/thai-country-club/thai-country-club-1.webp",
            width: 1200,
            height: 630,
            alt: "Thai Country Club  — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Thai Country Club Bangkok | Championship Golf",
        description: "Experience Thai Country Club, a luxurious neo-classic design in Bangkok, famously played by Tiger Woods. Book your Thailand golf tour with AGS.",
        images: ["https://www.asiagolfspecialists.com/images/courses/thailand/thai-country-club/thai-country-club-1.webp"],
    },
};

export default function ThaiCountryClub() {
 const images = [
 { src: "/images/courses/thailand/thai-country-club/thai-country-club-1.webp", alt: "Thai Country Club Bangkok Aerial", caption: "Thai Country Club Championship Layout" },
 { src: "/images/courses/thailand/thai-country-club/thai-country-club-2.webp", alt: "Thai Country Club Fairway", caption: "Immaculately Conditioned Fairways" },
 { src: "/images/courses/thailand/thai-country-club/thai-country-club-3.webp", alt: "Thai Country Club Water Hazard", caption: "Strategic Water Features on the Approach" },
 { src: "/images/courses/thailand/thai-country-club/thai-country-club-4.webp", alt: "Thai Country Club Green", caption: "Tour-Quality Putting Surfaces" },
 { src: "/images/courses/thailand/thai-country-club/thai-country-club-5.webp", alt: "Thai Country Club Peninsula Clubhouse", caption: "The Award-Winning Peninsula-Managed Clubhouse" },
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
 AGS Course Heritage — Tour Championship
 </div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Thai <br /><span className="text-gold">Country Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">
 "A luxurious neo-classic design that offers a genuine tour-level experience from the first tee to the opulent clubhouse."
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
                  ['Designer', 'Denis Griffiths'],
                  ['Year Opened', '1996'],
                  ['Par', '72'],
                  ['Length', '7,097 Yards'],
                  ['Grass Type', 'Bermuda (Fairways) / Tifdwarf (Greens)'],
                  ['Setting', 'Parkland'],
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
 Located just under an hour from central Bangkok, Thai Country Club is widely recognized as one of the finest golf clubs in Asia. Designed to exacting PGA Tour standards by Denis Griffiths, the course gained global fame when Tiger Woods cruised to victory here in the 1997 Asian Honda Classic.
 </p>
 <p>
 The layout is a masterpiece of neo-classic parkland design, featuring undulating fairways, deep strategically placed bunkers, and water hazards that come into play on nearly every hole. The conditions are consistently immaculate, with lightning-fast greens and perfectly manicured rough.
 </p>
 <p>
 Beyond the golf, Thai Country Club is famous for its luxurious amenities. The magnificent clubhouse, managed by The Peninsula Hotels group, offers unmatched five-star hospitality, award-winning dining, and some of the best locker room facilities in the golfing world. It is the gold standard for premium golf in Bangkok.
 </p>
 </div>
 </div>
 </div>
 </section>

 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience <span className="text-gold">Thai Country Club</span></h2>
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
    pagePath="/courses/thailand/thai-country-club/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://www.thaicountryclub.com/","https://www.top100golfcourses.com/golf-course/thai-country-club"]}
                name="Thai Country Club"
                description="Experience Thai Country Club, a luxurious neo-classic design in Bangkok, famously played by Tiger Woods. Book your Thailand golf tour with AGS."
                url={"https://www.asiagolfspecialists.com/courses/thailand/thai-country-club/"}
                imageUrl={"/images/courses/thailand/thai-country-club/thai-country-club-1.webp"}
                addressLocality={"Bangkok"}
                addressCountry={"TH"}
                numberOfHoles={18}
                courseLength={7097}
                par={72}
                designer="Denis Griffiths"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Thailand", item: "https://www.asiagolfspecialists.com/destinations/thailand/" },
                    { name: "Thailand Courses", item: "https://www.asiagolfspecialists.com/destinations/thailand/courses/" },
                    { name: "Thai Country Club", item: "https://www.asiagolfspecialists.com/courses/thailand/thai-country-club/" },
                ]}
            />


            
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Thai Country Club</strong> is a premier Par 72 championship layout in Bangkok, Thailand, crafted by <strong>Denis Griffiths</strong> (1996) and stretching to <strong>7,097 Yards</strong> across a parkland environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its peninsula hotel group 5-star hospitality (Legendary service culture) and classic american parkland conditioning (Flawless fairway grooming).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Thai Country Club (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Thailand dry season. Our curatorial scorecard specifically notes its impeccable pga-level caddie etiquette (Elite tournament caddies), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Bangkok golf tour by AGS, Thai Country Club provides a distinct architectural test by Denis Griffiths that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Thai Country Club"
    itemUrl="https://www.asiagolfspecialists.com/courses/thailand/thai-country-club/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/thailand/thai-country-club/thai-country-club-1.webp"
    addressLocality="Bangkok"
    addressCountry="TH"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="Tiger Woods Asian Tour Champion • Bangkok"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Peninsula Hotel Group 5-Star Hospitality",
            score: 9.9,
            highlight: "Legendary service culture"
      },
      {
            label: "Classic American Parkland Conditioning",
            score: 9.7,
            highlight: "Flawless fairway grooming"
      },
      {
            label: "Impeccable PGA-Level Caddie Etiquette",
            score: 9.8,
            highlight: "Elite tournament caddies"
      },
      {
            label: "Lavish Clubhouse & Jacuzzi Amenities",
            score: 9.9,
            highlight: "Finest locker room in Asia"
      }
]}
    verdict="Site of Tiger Woods' legendary 1997 Asian Honda Classic victory. Managed by the Peninsula Hotel Group, Thai Country Club sets the gold standard for executive luxury, caddie professionalism, and course grooming."
  />


            <CourseFAQSection
                courseName="Thai Country Club"
                faqs={[
          {
                    "q": "What are the key course specifications for Thai Country Club?",
                    "a": "Thai Country Club in Bangkok, Thailand is a Par 72 championship layout designed by Denis Griffiths (opened 1996), measuring 7,097 Yards within a parkland setting. It is particularly noted for peninsula hotel group 5-star hospitality (Legendary service culture)."
          },
          {
                    "q": "How do I secure tee times and caddies at Thai Country Club?",
                    "a": "Thai Country Club operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (impeccable pga-level caddie etiquette (Elite tournament caddies)), and private VIP transfers from your Bangkok hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Thai Country Club?",
                    "a": "Our field inspection highlights Thai Country Club's classic american parkland conditioning (Flawless fairway grooming) alongside peninsula hotel group 5-star hospitality (Legendary service culture). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Thai Country Club?",
                    "a": "November through February is the prime season for Bangkok golf, offering comfortable temperatures and dry conditions."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/thailand/thai-country-club/" venueName="Thai Country Club" venueType="course" />
            <CourseNavigation
                prev={{ title: "Springfield Royal Country Club", path: "/courses/thailand/springfield-royal/" }}
                next={{ title: "Alpine Golf Resort Chiang Mai", path: "/courses/thailand/alpine-chiang-mai/" }}
                country="Thailand"
                countryLink="/destinations/thailand/courses/"
            />
 

</main>
 );
}
