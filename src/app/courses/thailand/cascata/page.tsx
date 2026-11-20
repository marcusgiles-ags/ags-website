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
    title: { absolute: "Cascata Golf Club Bangkok | 36-Hole Championship Layout" },
    description: "Play Cascata Golf Club Bangkok — fun and creative 36-hole facility with massive greens and imaginative bunkers near Bangkok. Book with AGS.",
    keywords: ["Cascata Golf Club Bangkok", "36 Hole Golf Bangkok", "Bangkok Golf Course", "Creative Golf Thailand", "Thailand Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/thailand/cascata/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Cascata Golf Club Bangkok | 36-Hole Championship Layout" },
        description: "Play Cascata Golf Club Bangkok — fun and creative 36-hole facility with massive greens and imaginative bunkers near Bangkok. Book with AGS.",
        url: "https://www.asiagolfspecialists.com/courses/thailand/cascata/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/thailand/cascata/cascata-golf-club-massive-greens-2.webp",
            width: 1200,
            height: 630,
            alt: "Cascata Golf Club Bangkok | 36-Hole Massive Greens Imaginative Bunkers — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Cascata Golf Club Bangkok | 36-Hole Championship Layout" },
        description: "Play Cascata Golf Club Bangkok — fun and creative 36-hole facility with massive greens and imaginative bunkers near Bangkok. Book with AGS.",
        images: ["https://www.asiagolfspecialists.com/images/courses/thailand/cascata/cascata-golf-club-massive-greens-2.webp"],
    },
};

export default function CascataGolfClub() {
    const images = [
        { src: "/images/courses/thailand/cascata/cascata-golf-club-massive-greens-2.webp", alt: "Cascata Golf Club Bangkok Thailand Massive Greens Imaginative Bunkers", caption: "Bangkok Thailand Massive Greens Imaginative Bunkers" },
        { src: "/images/courses/thailand/cascata/cascata-golf-club-bangkok-thailand-1.webp", alt: "Cascata Golf Club Bangkok Thailand 36 Hole Aerial - Premium Southeast Asia Golf Tours 2026", caption: "Bangkok Thailand 36 Hole Aerial" },
        { src: "/images/courses/thailand/cascata/cascata-golf-club-creative-hole-3.webp", alt: "Cascata Golf Club Thailand Creative Championship Hole", caption: "Thailand Creative Championship Hole" },
        { src: "/images/courses/thailand/cascata/cascata-golf-club-fountain-water-4.webp", alt: "Cascata Golf Club Bangkok Thailand Water Feature Hole", caption: "Bangkok Thailand Water Feature Hole" },
        { src: "/images/courses/thailand/cascata/cascata-golf-club-fairway-5.webp", alt: "Cascata Golf Club Bangkok Thailand Championship Fairway", caption: "Bangkok Thailand Championship Fairway" },
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
                    <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Bangkok's Creative 36</div>
                    <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Cascata<br /><span className="text-gold">Golf Club</span></h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"36 holes of Bangkok creativity — massive greens, imaginative bunkering, pure enjoyment."</p>
                </div>
            </header>
            <section className="section" style={{ paddingTop: '4rem' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    <div className="article-content">
                        <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
                        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
                            {[
    ['Designer', 'Dr. Thanawat Saprungruang'], ['Year Opened', '2006'], ['Location', 'Bangkok region'], ['Total Holes', '36 holes (two 18-hole layouts)'], ['Character', 'Creative, fun, inventive bunkering'], ['Feature', 'Massive, multi-tiered greens'], ['Water', 'Abundant water features throughout'], ['Appeal', 'All levels — entertaining and challenging']
  ].map(([k, v], i) => (
                                <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
                            ))}
                        </tbody></table>
                    </div>
                    <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
                        <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <p>Cascata Golf Club takes a refreshingly playful approach to course design in a Bangkok market that can sometimes takes itself too seriously — delivering 36 holes of inventive, entertaining golf that manages to be genuinely challenging while also being undeniably fun. The hallmark features are the unusually large, multi-tiered greens and the creative bunkering arrangements that require golfers to think laterally about approach shots and putting.</p>
                            <p>Water plays a persistent strategic role across both layouts, with fountains, lakes, and streams appearing in locations that demand respect without being unnecessarily punishing. The overall tone is of a course designed to generate excellent memories and good scoring challenges rather than to intimidate or frustrate — a genuine strength for group golf.</p>
                            <p>AGS recommends Cascata for Bangkok programs that include mixed ability groups, corporate golf events, or societies looking for a Bangkok round that prioritises shared enjoyment over pure championship challenge. The 36-hole capacity also makes it excellent for full-day group programs without course congestion.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">36 Holes</span></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                        {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
                    </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/thailand/cascata/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://www.cascatagolf.com/"]}
                name="Cascata Golf Club"
                description="36 holes of Bangkok creativity — massive greens, imaginative bunkering, pure enjoyment."
                url={"https://www.asiagolfspecialists.com/courses/thailand/cascata/"}
                imageUrl={"/images/courses/thailand/cascata/cascata-golf-club-massive-greens-2.webp"}
                addressLocality={"Pattaya"}
                addressCountry={"TH"}
                numberOfHoles={18}
                courseLength={6630}
                par={72}
                designer="Dr. Thanawat Saprungruang"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Thailand", item: "https://www.asiagolfspecialists.com/destinations/thailand/" },
                    { name: "Thailand Courses", item: "https://www.asiagolfspecialists.com/destinations/thailand/courses/" },
                    { name: "Cascata Golf Club", item: "https://www.asiagolfspecialists.com/courses/thailand/cascata/" },
                ]}
            />

            
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Cascata Golf Club</strong> is a premier Par 72 championship layout in Bangkok, Thailand, crafted by <strong>Dr. Thanawat Saprungruang</strong> (2006) and stretching to <strong>6,630 Yards (Blue Tees)</strong> across a championship layout environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its 36-hole variety (a, b, c, d courses) (Diverse architectural styles) and dramatic mound shaping & waste bunkers (Links-style hummocks on D).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Cascata Golf Club (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Thailand dry season. Our curatorial scorecard specifically notes its caddie pacing & cheer (Courteous and reliable), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Bangkok golf tour by AGS, Cascata Golf Club provides a distinct architectural test by Dr. Thanawat Saprungruang that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Cascata Golf Club"
    itemUrl="https://www.asiagolfspecialists.com/courses/thailand/cascata/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/thailand/cascata/cascata-golf-club-massive-greens-2.webp"
    addressLocality="Bangkok"
    addressCountry="TH"
    overallScore={4.6}
    maxScore={5.0}
    gradeBadge="36-Hole Spanish & Links Sanctuary • Bangkok"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "36-Hole Variety (A, B, C, D Courses)",
            score: 9.6,
            highlight: "Diverse architectural styles"
      },
      {
            label: "Dramatic Mound Shaping & Waste Bunkers",
            score: 9.4,
            highlight: "Links-style hummocks on D"
      },
      {
            label: "Caddie Pacing & Cheer",
            score: 9.3,
            highlight: "Courteous and reliable"
      },
      {
            label: "Modern Spanish Colonial Clubhouse",
            score: 9.3,
            highlight: "Grand spacious clubhouse"
      }
]}
    verdict="A 36-hole green oasis designed like a private botanical sanctuary. Course D features links-style hummocks and expansive waste bunkers that challenge approach accuracy."
  />


            <CourseFAQSection
                courseName="Cascata Golf Club"
                faqs={[
          {
                    "q": "What are the key course specifications for Cascata Golf Club?",
                    "a": "Cascata Golf Club in Bangkok, Thailand is a Par 72 championship layout designed by Dr. Thanawat Saprungruang (opened 2006), measuring 6,630 Yards (Blue Tees) within a championship layout setting. It is particularly noted for 36-hole variety (a, b, c, d courses) (Diverse architectural styles)."
          },
          {
                    "q": "How do I secure tee times and caddies at Cascata Golf Club?",
                    "a": "Cascata Golf Club operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie pacing & cheer (Courteous and reliable)), and private VIP transfers from your Bangkok hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Cascata Golf Club?",
                    "a": "Our field inspection highlights Cascata Golf Club's dramatic mound shaping & waste bunkers (Links-style hummocks on D) alongside 36-hole variety (a, b, c, d courses) (Diverse architectural styles). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Cascata Golf Club?",
                    "a": "November through April is the recommended season for Cascata Golf Club Pattaya."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/thailand/cascata/" venueName="Cascata Golf Club" venueType="course" />
            <CourseNavigation
                prev={{ title: "Blue Canyon Country Club", path: "/courses/thailand/blue-canyon/" }}
                next={{ title: "Chiang Mai Highlands Golf Club", path: "/courses/thailand/chiang-mai-highlands/" }}
                country="Thailand"
                countryLink="/destinations/thailand/courses/"
            />
        

</main>
    );
}
