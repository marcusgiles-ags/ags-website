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
 title: { absolute: "Montgomerie Links Vietnam | Colin Montgomerie Da Nang Golf" },
 description: "Montgomerie Links Golf Club Da Nang — Colin Montgomerie's signature design through coastal dunes near Hoi An. A top-ranked Vietnam championship course.",
 keywords: ["Montgomerie Links Vietnam", "Colin Montgomerie Golf Da Nang", "Da Nang Links Golf", "Vietnam Golf Tours", "Premier Golf Vietnam"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/montgomerie-links/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Montgomerie Links Vietnam | Colin Montgomerie Da Nang Golf" },
        description: "Montgomerie Links Golf Club Da Nang — Colin Montgomerie's signature design through coastal dunes near Hoi An. A top-ranked Vietnam championship course.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/montgomerie-links/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-da-nang-1-hero.webp",
            width: 1200,
            height: 630,
            alt: "Montgomerie Links Vietnam | Colin Montgomerie Da Nang Golf — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Montgomerie Links Vietnam | Colin Montgomerie Da Nang Golf" },
        description: "Montgomerie Links Golf Club Da Nang — Colin Montgomerie's signature design through coastal dunes near Hoi An. A top-ranked Vietnam championship course.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-da-nang-1-hero.webp"],
    },
};

export default function MontgomerieLinks() {
 const images = [
 { src: "/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-da-nang-1-hero.webp", alt: "Montgomerie Links Vietnam Da Nang Golf Course Aerial", caption: "Da Nang Golf Course Aerial" },
 { src: "/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-da-nang-1-hero.webp", alt: "Montgomerie Links Vietnam Colin Montgomerie Signature Design Fairway", caption: "Colin Montgomerie Signature Design Fairway" },
 { src: "/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-coastal-hole-3.webp", alt: "Montgomerie Links Vietnam Coastal Links Hole Championship", caption: "Coastal Links Hole Championship" },
 { src: "/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-greens-bunkers-4.webp", alt: "Montgomerie Links Vietnam Greens and Bunkers Championship Layout", caption: "Greens and Bunkers Championship Layout" },
 { src: "/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-clubhouse-5.webp", alt: "Montgomerie Links Vietnam Clubhouse Premium Facilities Da Nang", caption: "Clubhouse Premium Facilities" },
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
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Montgomerie <br /><span className="text-gold">Links Vietnam</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">
 "The perfect blend of links heritage and Southeast Asian hospitality." — Colin Montgomerie
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
                  ['Designer', 'Colin Montgomerie'],
                  ['Year Opened', '2010'],
                  ['Par', '72'],
                  ['Length', '7,091 Yards'],
                  ['Grass Type', 'TifEagle Bermuda / Paspalum'],
                  ['Setting', 'Parkland']
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
 Montgomerie Links Vietnam carries the unmistakable DNA of Colin Montgomerie's European tour sensibility, transplanted into the warm coastal climate of Da Nang. Opened in 2009, it was among the first world-class layouts to put Vietnam firmly on the international golf map.
 </p>
 <p>
 The classic links design makes strategic use of natural rolling terrain, firm fairways, and deep pot bunkers inspired by the finest Scottish and Irish links. The layout demands a thoughtful, measured game — raw power is secondary to course management.
 </p>
 <p>
 Part of the prestigious Montgomery Links development, the club offers an immaculate clubhouse experience with a welcoming, home-away-from-home atmosphere. Consistently rated among Vietnam's top five courses, it remains an essential fixture on any serious golf tour itinerary.
 </p>
 </div>
 </div>
 </div>
 </section>

 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Classic Links</span></h2>
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
    pagePath="/courses/vietnam/montgomerie-links/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://www.montgomerielinks.com/","https://www.top100golfcourses.com/golf-course/montgomerie-links"]}
                name="Montgomerie Links Vietnam"
                description="Montgomerie Links Golf Club Da Nang — Colin Montgomerie"
                url={"https://www.asiagolfspecialists.com/courses/vietnam/montgomerie-links/"}
                imageUrl={"/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-da-nang-1-hero.webp"}
                addressLocality={"Da Nang"}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={7091}
                par={72}
                designer="Colin Montgomerie"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Montgomerie Links Vietnam", item: "https://www.asiagolfspecialists.com/courses/vietnam/montgomerie-links/" },
                ]}
            />


 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Montgomerie Links Vietnam</strong> is a premier Par 72 championship layout in Da Nang, Vietnam, crafted by <strong>Colin Montgomerie</strong> (2010) and stretching to <strong>7,091 Yards</strong> across a parkland environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its manicured paspalum conditioning (Consistently flawless carpets) and strategic bunkering & massive greens (Monty).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Montgomerie Links Vietnam (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie green reading on severe slopes (Essential on cavernous greens), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Da Nang golf tour by AGS, Montgomerie Links Vietnam provides a distinct architectural test by Colin Montgomerie that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Montgomerie Links Vietnam"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/montgomerie-links/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-coastal-hole-3.webp"
    addressLocality="Da Nang"
    addressCountry="VN"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Boutique Parkland Links • Colin Montgomerie"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Manicured Paspalum Conditioning",
            score: 9.6,
            highlight: "Consistently flawless carpets"
      },
      {
            label: "Strategic Bunkering & Massive Greens",
            score: 9.5,
            highlight: "Monty's trademark sand traps"
      },
      {
            label: "Caddie Green Reading on Severe Slopes",
            score: 9.5,
            highlight: "Essential on cavernous greens"
      },
      {
            label: "Clubhouse Hospitality & Pro Shop",
            score: 9.4,
            highlight: "Warm European boutique feel"
      }
]}
    verdict="A refined boutique experience that balances generous fairways with formidable greenside collection areas. Colin Montgomerie's strategic touches create a pleasant yet competitive challenge."
  />


            
 <VenueItineraries venueHref="/courses/vietnam/montgomerie-links/" venueName="Montgomerie Links Vietnam" venueType="course" />

 <CourseFAQSection
                courseName="Montgomerie Links Vietnam"
                faqs={[
          {
                    "q": "What are the key course specifications for Montgomerie Links Vietnam?",
                    "a": "Montgomerie Links Vietnam in Da Nang, Vietnam is a Par 72 championship layout designed by Colin Montgomerie (opened 2010), measuring 7,091 Yards within a parkland setting. It is particularly noted for manicured paspalum conditioning (Consistently flawless carpets)."
          },
          {
                    "q": "How do I secure tee times and caddies at Montgomerie Links Vietnam?",
                    "a": "Montgomerie Links Vietnam operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie green reading on severe slopes (Essential on cavernous greens)), and private VIP transfers from your Da Nang hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Montgomerie Links Vietnam?",
                    "a": "Our field inspection highlights Montgomerie Links Vietnam's strategic bunkering & massive greens (Monty) alongside manicured paspalum conditioning (Consistently flawless carpets). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Montgomerie Links Vietnam?",
                    "a": "February through September is the recommended season for Montgomerie Links Vietnam."
          }
]}
            />
            <CourseNavigation
                prev={{ title: "Long Thanh Golf Resort Vietnam", path: "/courses/vietnam/long-thanh/" }}
                next={{ title: "Nara Binh Tien Golf Club", path: "/courses/vietnam/nara-binh-tien/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
 );
}
