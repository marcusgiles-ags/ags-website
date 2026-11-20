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
    title: { absolute: "Twin Doves Golf Club | 27-Hole Championship Golf in Vietnam" },
    description: "Play Twin Doves Golf Club - an exclusive 27-hole Peter Rousseau designed private championship golf course near Ho Chi Minh City.",
    keywords: ["Twin Doves Golf Club", "Vietnam Golf Tours", "Binh Duong Golf", "Ho Chi Minh City Golf", "Luna Stella Sole Courses"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/twin-doves/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Twin Doves Golf Club | 27-Hole Championship Golf in Vietnam" },
        description: "Play Twin Doves Golf Club - an exclusive 27-hole Peter Rousseau designed private championship golf course near Ho Chi Minh City.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/twin-doves/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/twin-doves/twin-doves-clubhouse-practice-green.webp",
            width: 1200,
            height: 630,
            alt: "Twin Doves Golf Club 27-Hole Championship Golf Vietnam - Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Twin Doves Golf Club | 27-Hole Championship Golf in Vietnam" },
        description: "Play Twin Doves Golf Club - an exclusive 27-hole Peter Rousseau designed private championship golf course near Ho Chi Minh City.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/twin-doves/twin-doves-clubhouse-practice-green.webp"],
    },
};

export default function TwinDoves() {
    const images = [
        { src: "/images/courses/vietnam/twin-doves/twin-doves-clubhouse-practice-green.webp", alt: "Twin Doves Golf Club impressive modern clubhouse and practice green Binh Duong Vietnam 2026", caption: "Modern Clubhouse & Practice Green" },
        { src: "/images/courses/vietnam/twin-doves/twin-doves-4th-hole.webp", alt: "Twin Doves Golf Club 4th hole water hazard championship course Binh Duong Vietnam 2026", caption: "Championship 4th Hole" },
        { src: "/images/courses/vietnam/twin-doves/twin-doves-golf-course-approach.webp", alt: "Twin Doves Golf Club strategic fairway approach Luna course Binh Duong Vietnam 2026", caption: "Strategic Fairway Approach" },
        { src: "/images/courses/vietnam/twin-doves/twin-doves-saigon-aerial.webp", alt: "Twin Doves Golf Club aerial view of 27-hole layout near Ho Chi Minh City Vietnam 2026", caption: "Aerial View of 27-Hole Layout" },
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
                    <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage</div>
                    <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Twin Doves<br /><span className="text-gold">Golf Club</span></h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"A tranquil 27-hole private estate - strategic design meets natural elegance."</p>
                </div>
            </header>
            <section className="section" style={{ paddingTop: '4rem' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    <div className="article-content">
                        <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
                        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
                        {[
                            ['Designer', 'Peter Rousseau (P+Z)'], ['Year Opened', '2011'], ['Par', '72 (Any 18)'], ['Length', '7,234 Yards'], ['Grass Type', 'Paspalum'], ['Signature Feature', '27-Hole Layout & Member-Only Exclusivity']
                        ].map(([k, v], i) => (
                        <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
                        ))}
                        </tbody></table>
                    </div>
                    <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
                        <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <p>Twin Doves Golf Club is widely regarded as one of the finest private clubs in southern Vietnam. Comprising the Luna, Stella, and Sole nines, the 27-hole complex provides a diverse test of golf in an idyllic setting just one hour from the bustling center of Ho Chi Minh City.</p>
                            <p>The Luna Course winds through gentle hills and mature forests, requiring pinpoint accuracy off the tee. The Stella Course demands a strategic approach, with natural creeks and lakes coming into play on almost every hole. Finally, the Sole Course offers a challenging links-style feel, characterized by strategic bunkering and island greens.</p>
                            <p>Beyond the immaculate course conditioning, Twin Doves is renowned for its exceptional facilities. The sweeping, contemporary clubhouse overlooks the 18th greens, providing an expansive space for post-round relaxation, a well-stocked pro shop, and world-class dining spanning Vietnamese, Korean, and Western cuisines.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Estate</span></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                    {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
                    </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/vietnam/twin-doves/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://www.twindovesgolf.vn/"]}
                name="Twin Doves Golf Club"
                description="A tranquil 27-hole private estate - strategic design meets natural elegance."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/twin-doves/"}
                imageUrl={"https://www.asiagolfspecialists.com/images/courses/vietnam/twin-doves/twin-doves-clubhouse-practice-green.webp"}
                addressLocality={"Binh Duong"}
                addressCountry={"VN"}
                numberOfHoles={27}
                courseLength={7234}
                par={72}
                designer="Peter Rousseau (P+Z)"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Twin Doves Golf Club", item: "https://www.asiagolfspecialists.com/courses/vietnam/twin-doves/" },
                ]}
            />
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Twin Doves Golf Club</strong> is a premier Par 72 (Any 18) championship layout in Binh Duong, Vietnam, crafted by <strong>Peter Rousseau (P+Z)</strong> (2011) and stretching to <strong>7,234 Yards</strong> across a championship layout environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its 27-hole rotation (luna, stella, sole) (Diverse architectural styles) and course conditioning & deep bunkering (Paspalum carpets and crisp sand).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Twin Doves Golf Club (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie pacing & etiquette (Polished and highly trained), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Binh Duong golf tour by AGS, Twin Doves Golf Club provides a distinct architectural test by Peter Rousseau (P+Z) that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Twin Doves Golf Club"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/twin-doves/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/twin-doves/twin-doves-clubhouse-practice-green.webp"
    addressLocality="Binh Duong"
    addressCountry="VN"
    overallScore={4.6}
    maxScore={5.0}
    gradeBadge="27-Hole Private Club • Saigon"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "27-Hole Rotation (Luna, Stella, Sole)",
            score: 9.4,
            highlight: "Diverse architectural styles"
      },
      {
            label: "Course Conditioning & Deep Bunkering",
            score: 9.4,
            highlight: "Paspalum carpets and crisp sand"
      },
      {
            label: "Caddie Pacing & Etiquette",
            score: 9.4,
            highlight: "Polished and highly trained"
      },
      {
            label: "Elite Private Member Atmosphere",
            score: 9.5,
            highlight: "Exclusive executive feel"
      }
]}
    verdict="An upscale 27-hole private members' club in Binh Duong offering immaculate tournament conditioning and a seamless 5-star clubhouse environment."
  />


            <CourseFAQSection
                courseName="Twin Doves Golf Club"
                faqs={[
          {
                    "q": "What are the key course specifications for Twin Doves Golf Club?",
                    "a": "Twin Doves Golf Club in Binh Duong, Vietnam is a Par 72 (Any 18) championship layout designed by Peter Rousseau (P+Z) (opened 2011), measuring 7,234 Yards within a championship layout setting. It is particularly noted for 27-hole rotation (luna, stella, sole) (Diverse architectural styles)."
          },
          {
                    "q": "How do I secure tee times and caddies at Twin Doves Golf Club?",
                    "a": "Twin Doves Golf Club operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie pacing & etiquette (Polished and highly trained)), and private VIP transfers from your Binh Duong hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Twin Doves Golf Club?",
                    "a": "Our field inspection highlights Twin Doves Golf Club's course conditioning & deep bunkering (Paspalum carpets and crisp sand) alongside 27-hole rotation (luna, stella, sole) (Diverse architectural styles). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Twin Doves Golf Club?",
                    "a": "November through April is the prime season for Twin Doves Golf Club."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/twin-doves/" venueName="Twin Doves Golf Club" venueType="course" />
            <CourseNavigation
                prev={{ title: "The Bluffs Grand Ho Tram", path: "/courses/vietnam/the-bluffs-ho-tram/" }}
                next={{ title: "Van Tri Golf Club", path: "/courses/vietnam/van-tri-golf-club/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
        </main>
    );
}
