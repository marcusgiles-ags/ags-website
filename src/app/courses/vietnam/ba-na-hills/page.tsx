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
 title: { absolute: "Ba Na Hills Golf Club | Elite Vietnam Night Golf" },
 description: "Experience Ba Na Hills Golf Club in Da Nang. A Luke Donald championship mountain layout featuring dramatic elevation changes and floodlit night golf.",
 keywords: ["Ba Na Hills Golf Club", "Da Nang Golf", "Vietnam Golf Tours", "Night Golf Vietnam", "Luke Donald Golf Course"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/ba-na-hills/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Ba Na Hills Golf Club | Elite Vietnam Night Golf" },
        description: "Experience Ba Na Hills Golf Club, Da Nang! Stunning mountain golf with cool weather & valley views.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/ba-na-hills/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-da-nang-vietnam-1.webp",
            width: 1200,
            height: 630,
            alt: "Ba Na Hills Golf Club | Elite Vietnam Night Golf — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Ba Na Hills Golf Club | Elite Vietnam Night Golf" },
        description: "Experience Ba Na Hills Golf Club, Da Nang! Stunning mountain golf with cool weather & valley views.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-da-nang-vietnam-1.webp"],
    },
};

export default function BaNaHills() {
 return (
 <main style={{ backgroundColor: '#020617', color: 'var(--color-tertiary)', minHeight: '100vh' }}>
 {/* Sticky Navigation */}
 <Navbar />

 {/* Heritage Hero */}
 <header className="hero" style={{ minHeight: '85vh' }}>
 <div style={{ position: 'absolute', inset: 0, zIndex: 0, WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)' }}>
 <HeroSlider images={[
 "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-da-nang-vietnam-1.webp",
 "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-mountain-course-2.webp",
 "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-luke-donald-design-3.webp",
 "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-night-golf-4.webp",
 "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-vietnam-championship-5.webp"
 ]} />
 <div className="hero-overlay" style={{ position: 'absolute', inset: 0, zIndex: 2 }}></div>
 </div>
 <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <DestinationBackLink country="Vietnam" countryLink="/destinations/vietnam/courses/" />
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
 AGS Course Heritage
 </div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Ba Na Hills <br /><span className="text-gold">Golf Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">
 "A mountain parkland masterpiece, engineered for precision." — Luke Donald
 </p>
 </div>
 </header>

 {/* Specifications & Overview */}
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
              <tbody>
                {[
                  ['Designer', 'Luke Donald / IMG'],
                  ['Year Opened', '2016'],
                  ['Par', '72'],
                  ['Length', '7,858 Yards'],
                  ['Grass Type', 'SeaIsle Paspalum Greens'],
                  ['Setting', 'Parkland'], ['Top 100 Asia Ranking', <a href="https://www.top100golfcourses.com/golf-courses/asia/vietnam" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">#6 in Asia (2026)</a>]
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
 Ba Na Hills Golf Club, set at the foot of the Ba Na Mountains in Da Nang, Vietnam, is a multi-award-winning championship layout designed by former World No. 1 Luke Donald. As the signature debut for Donald, the course offers a unique parkland experience that contrasts with the region's typical coastal links.
 </p>
 <p>
 The layout winds through diverse terrain, from valley floors to dramatic hillside peaks, featuring significant elevation changes and natural water hazards. One of its standout features is the state-of-the-art LED lighting system, making it the premier destination for night golf in Vietnam.
 </p>
 <p>
 Managed by IMG, the club maintains world-class standards, utilizing SeaIsle Paspalum grass to ensure a premium playing surface year-round. Whether playing under the tropical sun or the glow of stadium lights, Ba Na Hills provides an unforgettable technical test.
 </p>
 </div>
 </div>
 </div>
 </section>

 {/* Clickable Image Gallery */}
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Terrain</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {[
 { src: "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-da-nang-vietnam-1.webp", alt: "Ba Na Hills Golf Club Vietnam Panoramic View", caption: "Ba Na Hills Golf Club, Da Nang highlands panorama" },
 { src: "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-mountain-course-2.webp", alt: "Ba Na Hills Golf Club Mountain Parkland Fairway - Premium Southeast Asia Golf Tours 2026", caption: "Mountain parkland fairway, Ba Na Hills" },
 { src: "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-luke-donald-design-3.webp", alt: "Ba Na Hills Golf Club Luke Donald Signature Design", caption: "Luke Donald signature design, Da Nang" },
 { src: "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-night-golf-4.webp", alt: "Ba Na Hills Golf Club LED Night Golf Lights - Premium Southeast Asia Golf Tours 2026", caption: "Night golf under LED lights, Ba Na Hills" },
 { src: "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-vietnam-championship-5.webp", alt: "Ba Na Hills Golf Club Championship Greens Vietnam - Premium Southeast Asia Golf Tours 2026", caption: "Championship greens, Ba Na Hills Golf Club" }
 ].map((img, i) => (
 <div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', transition: 'transform 0.3s ease' }} className="hover-scale">
 <Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
 <div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>
 {(img as any).caption || `Image ${i + 1}`}
 </div>
 </div>
 ))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/vietnam/ba-na-hills/"
  />
  </div>
  </section>

 {/* JSON-LD Heritage Schema */}
            <CourseSchemaBlock sameAs={["https://banahillsgolf.com/","https://www.top100golfcourses.com/golf-course/ba-na-hills"]}
                name="Ba Na Hills Golf Club"
                description="Experience Ba Na Hills Golf Club in Da Nang. A Luke Donald championship mountain layout featuring dramatic elevation changes and floodlit night golf."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/ba-na-hills/"}
                imageUrl={"/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-da-nang-vietnam-1.webp"}
                addressLocality={"Da Nang"}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={7858}
                par={72}
                designer="Luke Donald / IMG"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Ba Na Hills Golf Club", item: "https://www.asiagolfspecialists.com/courses/vietnam/ba-na-hills/" },
                ]}
            />

            
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Ba Na Hills Golf Club</strong> is a premier Par 72 championship layout in Da Nang, Vietnam, crafted by <strong>Luke Donald / IMG</strong> (2016) and stretching to <strong>7,858 Yards</strong> across a parkland environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its turf quality & greens conditioning (SeaIsle Paspalum • Stimp 10.5+) and strategic routing & elevation challenge (Luke Donald / IMG Mountain Design).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Ba Na Hills Golf Club (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie knowledge & line reading (High altitude & mountain slope expertise), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Da Nang golf tour by AGS, Ba Na Hills Golf Club provides a distinct architectural test by Luke Donald / IMG that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                        <p style={{ marginTop: '1rem', padding: '1rem', backgroundColor: 'rgba(212, 175, 55, 0.08)', borderLeft: '3px solid #D4AF37', borderRadius: '4px' }}>
                            <strong>In-Depth Review:</strong> Read our investigative field analysis — <Link href="/blog/ba-na-hills-golf-club-review/" style={{ color: '#D4AF37', textDecoration: 'underline', fontWeight: 600 }}>Ba Na Hills Golf Club Review: Vietnam Night Golf &amp; Course Architecture</Link>.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Ba Na Hills Golf Club"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/ba-na-hills/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-da-nang-vietnam-1.webp"
    addressLocality="Da Nang"
    addressCountry="VN"
    overallScore={4.8}
    maxScore={5.0}
    gradeBadge="Championship Mountain Layout • Top 10 Vietnam"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      { label: "Turf Quality & Greens Conditioning", score: 9.6, highlight: "SeaIsle Paspalum • Stimp 10.5+" },
      { label: "Strategic Routing & Elevation Challenge", score: 9.4, highlight: "Luke Donald / IMG Mountain Design" },
      { label: "Caddie Knowledge & Line Reading", score: 9.5, highlight: "High altitude & mountain slope expertise" },
      { label: "Clubhouse Amenities & Night Golf Experience", score: 9.8, highlight: "Full 18 floodlit championship test" },
    ]}
    verdict="Ba Na Hills is the quintessential mountain championship layout in Southeast Asia. Luke Donald's tactical routing rewards disciplined club selection from dramatic elevated tees, while the comprehensive floodlighting creates an unmatched evening tournament atmosphere. An essential anchor round for any Da Nang golf tour."
  />

            
 <VenueItineraries venueHref="/courses/vietnam/ba-na-hills/" venueName="Ba Na Hills Golf Club" venueType="course" />

 <CourseFAQSection
                courseName="Ba Na Hills Golf Club"
                faqs={[
          {
                    "q": "What are the key course specifications for Ba Na Hills Golf Club?",
                    "a": "Ba Na Hills Golf Club in Da Nang, Vietnam is a Par 72 championship layout designed by Luke Donald / IMG (opened 2016), measuring 7,858 Yards within a parkland setting. It is particularly noted for turf quality & greens conditioning (SeaIsle Paspalum • Stimp 10.5+)."
          },
          {
                    "q": "How do I secure tee times and caddies at Ba Na Hills Golf Club?",
                    "a": "Ba Na Hills Golf Club operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie knowledge & line reading (High altitude & mountain slope expertise)), and private VIP transfers from your Da Nang hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Ba Na Hills Golf Club?",
                    "a": "Our field inspection highlights Ba Na Hills Golf Club's strategic routing & elevation challenge (Luke Donald / IMG Mountain Design) alongside turf quality & greens conditioning (SeaIsle Paspalum • Stimp 10.5+). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Ba Na Hills Golf Club?",
                    "a": "February through September is the prime season for Ba Na Hills Golf Club."
          }
]}
            />
            <CourseNavigation
                prev={{ title: "West Lakes Golf & Villas", path: "/courses/vietnam/west-lakes-golf-club/" }}
                next={{ title: "BRG Da Nang Golf Resort Nicklaus Course", path: "/courses/vietnam/brg-da-nang-nicklaus/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
 );
}



