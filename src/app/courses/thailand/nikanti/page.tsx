import VenueItineraries from "@/components/VenueItineraries";
﻿import Link from "next/link";
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
 title: { absolute: "Nikanti Golf Club Bangkok | All-Inclusive Six-Hole Loops" },
 description: "Play Nikanti Golf Club Bangkok — pioneer of all-inclusive luxury offering three loops of six holes and seamless five-star service. Book with AGS.",
 keywords: ["Nikanti Golf Club Bangkok", "All-Inclusive Golf Thailand", "Luxury Golf Bangkok", "Six Hole Loop Golf Thailand", "Thailand Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/thailand/nikanti/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Nikanti Golf Club Bangkok | All-Inclusive Six-Hole Loops" },
        description: "Play Nikanti Golf Club Bangkok — pioneer of all-inclusive luxury offering three loops of six holes and seamless five-star service. Book with AGS.",
        url: "https://www.asiagolfspecialists.com/courses/thailand/nikanti/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/thailand/nikanti/nikanti-golf-club-bangkok-thailand-1.webp",
            width: 1200,
            height: 630,
            alt: "Nikanti Golf Club Bangkok | All-Inclusive Luxury Six-Hole Loops — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Nikanti Golf Club Bangkok | All-Inclusive Six-Hole Loops" },
        description: "Play Nikanti Golf Club Bangkok — pioneer of all-inclusive luxury offering three loops of six holes and seamless five-star service. Book with AGS.",
        images: ["https://www.asiagolfspecialists.com/images/courses/thailand/nikanti/nikanti-golf-club-bangkok-thailand-1.webp"],
    },
};

export default function NikantiGolfClub() {
 const images = [
 { src: "/images/courses/thailand/nikanti/nikanti-golf-club-bangkok-thailand-1.webp", alt: "Nikanti Golf Club Bangkok Thailand All-Inclusive Aerial Six Holes", caption: "Bangkok Thailand All-Inclusive Aerial Six Holes" },
 { src: "/images/courses/thailand/nikanti/nikanti-golf-club-luxury-loop-2.webp", alt: "Nikanti Golf Club Thailand Luxury All-Inclusive Loop Six Holes", caption: "Thailand Luxury All-Inclusive Loop Six Holes" },
 { src: "/images/courses/thailand/nikanti/nikanti-golf-club-fairway-3.webp", alt: "Nikanti Golf Club Bangkok Thailand Championship Fairway", caption: "Bangkok Thailand Championship Fairway" },
 { src: "/images/courses/thailand/nikanti/nikanti-golf-club-green-4.webp", alt: "Nikanti Golf Club Thailand Championship Green Premium", caption: "Thailand Championship Green Premium" },
 { src: "/images/courses/thailand/nikanti/nikanti-golf-club-signature-5.webp", alt: "Nikanti Golf Club Bangkok Thailand Signature Hole Premium", caption: "Bangkok Thailand Signature Hole Premium" },
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
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Bangkok's Luxury Pioneer</div>
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Nikanti<br /><span className="text-gold">Golf Club</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"All-inclusive luxury reimagined — three distinctive six-hole loops, zero compromises."</p>
 </div>
 </header>
 <section className="section" style={{ paddingTop: '4rem' }}>
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
 {[
    ['Designer', 'Pirapon Namatra / Golf East'], ['Year Opened', '2014'], ['Location', 'Nakhon Pathom, Bangkok region'], ['Format', '3 — six-hole loops (18 holes total)'], ['Model', 'All-inclusive — greens, caddie, cart, food & beverage'], ['Character', 'Luxury, service-first, seamless'], ['Distinction', 'Asia\'s first all-inclusive luxury golf model'], ['Playing Time', '— 3.5 hours (efficient routing)']
  ].map(([k, v], i) => (
 <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
 ))}
 </tbody></table>
 </div>
 <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Nikanti Golf Club is unlike any other course in Thailand — a genuine innovation in the golf hospitality model that has redefined what all-inclusive means in the premium golf market. Rather than the conventional 18-hole layout, Nikanti is structured as three individual six-hole loops, each returning to the stunning central clubhouse, where food, beverages, and service are delivered between loops as standard inclusions with your round fee.</p>
 <p>The result is an experience that feels genuinely different from a conventional round of golf: more social, more relaxed, more frequently interrupted by excellent cuisine and attentive service, and ultimately more memorable. The golf itself is challenging and well-designed, with each loop offering distinct character and genuine scoring variety.</p>
 <p>For international groups looking for a Bangkok round that provides genuine talking points and a premium shared experience, AGS consistently recommends Nikanti as the standout choice. The format performs exceptionally well for corporate groups, golf societies, and first-time Thailand visitors looking for something beyond the conventional.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Loops</span></h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
 {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
 </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/thailand/nikanti/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://www.nikantigolfclub.com/"]}
                name="Nikanti Golf Club"
                description="All-inclusive luxury reimagined — three distinctive six-hole loops, zero compromises."
                url={"https://www.asiagolfspecialists.com/courses/thailand/nikanti/"}
                imageUrl={"/images/courses/thailand/nikanti/nikanti-golf-club-bangkok-thailand-1.webp"}
                addressLocality={"Bangkok"}
                addressCountry={"TH"}
                numberOfHoles={18}
                courseLength={6273}
                par={72}
                designer="Pirapon Namatra / Golf East"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Thailand", item: "https://www.asiagolfspecialists.com/destinations/thailand/" },
                    { name: "Thailand Courses", item: "https://www.asiagolfspecialists.com/destinations/thailand/courses/" },
                    { name: "Nikanti Golf Club", item: "https://www.asiagolfspecialists.com/courses/thailand/nikanti/" },
                ]}
            />

 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Nikanti Golf Club</strong> is a premier Par 72 championship layout in Bangkok, Thailand, crafted by <strong>Pirapon Namatra / Golf East</strong> (2014) and stretching to <strong>6,273 Yards (Blue Tees)</strong> across a championship layout environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its innovative 6-6-6 triple loop routing (2 par-3s, 2 par-4s, 2 par-5s per loop) and all-inclusive 5-star vip hospitality (Gourmet dining & caddie fee included).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Nikanti Golf Club (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Thailand dry season. Our curatorial scorecard specifically notes its elite caddie line & turf guidance (Unmatched service training), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Bangkok golf tour by AGS, Nikanti Golf Club provides a distinct architectural test by Pirapon Namatra / Golf East that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Nikanti Golf Club"
    itemUrl="https://www.asiagolfspecialists.com/courses/thailand/nikanti/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/thailand/nikanti/nikanti-golf-club-bangkok-thailand-1.webp"
    addressLocality="Bangkok"
    addressCountry="TH"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="Asia's Revolutionary Six-Hole Loop Concept • Bangkok"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Innovative 6-6-6 Triple Loop Routing",
            score: 9.9,
            highlight: "2 par-3s, 2 par-4s, 2 par-5s per loop"
      },
      {
            label: "All-Inclusive 5-Star VIP Hospitality",
            score: 9.9,
            highlight: "Gourmet dining & caddie fee included"
      },
      {
            label: "Elite Caddie Line & Turf Guidance",
            score: 9.8,
            highlight: "Unmatched service training"
      },
      {
            label: "Impeccable Conditioning & Fast Pace",
            score: 9.8,
            highlight: "Strictly enforced 4-hour rounds"
      }
]}
    verdict="A revolutionary ultra-luxury experience. Three six-hole loops (two par 3s, two par 4s, two par 5s each) ensure varied shotmaking, while all-inclusive chef dining and pristine turf set a new benchmark."
  />


            <CourseFAQSection
                courseName="Nikanti Golf Club"
                faqs={[
          {
                    "q": "What are the key course specifications for Nikanti Golf Club?",
                    "a": "Nikanti Golf Club in Bangkok, Thailand is a Par 72 championship layout designed by Pirapon Namatra / Golf East (opened 2014), measuring 6,273 Yards (Blue Tees) within a championship layout setting. It is particularly noted for innovative 6-6-6 triple loop routing (2 par-3s, 2 par-4s, 2 par-5s per loop)."
          },
          {
                    "q": "How do I secure tee times and caddies at Nikanti Golf Club?",
                    "a": "Nikanti Golf Club operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (elite caddie line & turf guidance (Unmatched service training)), and private VIP transfers from your Bangkok hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Nikanti Golf Club?",
                    "a": "Our field inspection highlights Nikanti Golf Club's all-inclusive 5-star vip hospitality (Gourmet dining & caddie fee included) alongside innovative 6-6-6 triple loop routing (2 par-3s, 2 par-4s, 2 par-5s per loop). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Nikanti Golf Club?",
                    "a": "November through April offers ideal conditions at Nikanti Golf Club Bangkok."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/thailand/nikanti/" venueName="Nikanti Golf Club" venueType="course" />
            <CourseNavigation
                prev={{ title: "Mission Hills Phuket Golf Club", path: "/courses/thailand/mission-hills-phuket/" }}
                next={{ title: "Pineapple Valley Golf Club", path: "/courses/thailand/pineapple-valley/" }}
                country="Thailand"
                countryLink="/destinations/thailand/courses/"
            />
 

</main>
 );
}
