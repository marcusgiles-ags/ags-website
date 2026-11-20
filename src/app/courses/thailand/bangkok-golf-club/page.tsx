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
  title: "Bangkok Golf Club | Championship Night Golf",
  description: "Play Bangkok Golf Club: night golf, strategic water hazards in central Bangkok. Book your Thailand golf tour with Asia Golf Specialists.",
  keywords: ["Bangkok Golf Club | Championship Night Golf", "Night Golf Bangkok", "Bangkok Golf Course", "Thailand Night Golf", "Thailand Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/thailand/bangkok-golf-club/",
    },
    openGraph: {
        type: "website",
        title: "Bangkok Golf Club | Championship Night Golf",
        description: "Play Bangkok Golf Club: night golf, strategic water hazards in central Bangkok. Book your Thailand golf tour with Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/courses/thailand/bangkok-golf-club/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/thailand/bangkok-golf-club/bangkok-golf-club-thailand-1.webp",
            width: 1200,
            height: 630,
            alt: "Bangkok Golf Club | Professional Night Golf Water Hazards Thailand — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Bangkok Golf Club | Championship Night Golf",
        description: "Play Bangkok Golf Club: night golf, strategic water hazards in central Bangkok. Book your Thailand golf tour with Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/courses/thailand/bangkok-golf-club/bangkok-golf-club-thailand-1.webp"],
    },
};

export default function BangkokGolfClub() {
  const images = [
    { src: "/images/courses/thailand/bangkok-golf-club/bangkok-golf-club-thailand-1.webp", alt: "Bangkok Golf Club Thailand Night Golf Aerial - Premium Southeast Asia Golf Tours 2026", caption: "Thailand Night Golf Aerial" },
    { src: "/images/courses/thailand/bangkok-golf-club/bangkok-golf-club-night-golf-2.webp", alt: "Bangkok Golf Club Thailand Professional Night Golf Floodlit", caption: "Thailand Professional Night Golf Floodlit" },
    { src: "/images/courses/thailand/bangkok-golf-club/bangkok-golf-club-water-hazard-3.webp", alt: "Bangkok Golf Club Thailand Water Hazard Strategic Championship", caption: "Thailand Water Hazard Strategic Championship" },
    { src: "/images/courses/thailand/bangkok-golf-club/bangkok-golf-club-fairway-4.webp", alt: "Bangkok Golf Club Thailand Championship Fairway City", caption: "Thailand Championship Fairway City" },
    { src: "/images/courses/thailand/bangkok-golf-club/bangkok-golf-club-green-5.webp", alt: "Bangkok Golf Club Thailand Championship Green - Premium Southeast Asia Golf Tours 2026", caption: "Thailand Championship Green" },
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
          <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Bangkok Night Golf</div>
          <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Bangkok<br /><span className="text-gold">Golf Club</span></h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Professional night golf under Bangkok lights — a uniquely Asian golf experience."</p>
        </div>
      </header>
      <section className="section" style={{ paddingTop: '4rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          <div className="article-content">
            <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
              {[
                ['Designer', 'Chird Boonyarattanevet'], ['Year Opened', '1993'], ['Location', 'Don Mueang, Bangkok'], ['Par', '72'], ['Length', '6,268 Yards (Blue Tees)'], ['Setting', 'City course with water features'], ['Signature Feature', 'Full professional night golf lighting'], ['Playing Hours', 'Dawn to 10pm (night rounds available)'], ['Character', 'Strategic, water-focused, accessible']
              ].map(([k, v], i) => (
                <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
              ))}
            </tbody></table>
          </div>
          <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
            <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
              <p>Bangkok Golf Club offers one of the most genuinely unique golf experiences available in Southeast Asia — professional-standard night golf under full floodlighting, enabling Bangkok visitors to play a proper 18-hole round after dinner or extend a late arrival day into a quality golf experience that no daytime schedule could accommodate. It is a testament to Thailand's creative approach to golf business that a city course has invested fully in this format.</p>
              <p>The daytime course is strategically interesting in its own right — multiple water hazards thread through the layout requiring accurate approaches and disciplined shot selection, and the greens are consistently well-paced. But the night golf experience is what distinguishes Bangkok Golf Club from every other course in the city, and it is the reason AGS recommends it to international groups with tight Bangkok schedules.</p>
              <p>For groups flying into Bangkok's Don Mueang Airport or staying in the northern city districts, Bangkok Golf Club is conveniently positioned and offers exceptional value combined with a truly memorable evening experience. There is no global equivalent of night golf quite like it — experiencing it in Bangkok is worth the round fee alone for the novelty and genuine enjoyment it delivers.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
        <div className="container">
          <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Night Round</span></h2>
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
    pagePath="/courses/thailand/bangkok-golf-club/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://www.bangkokgolfclub.com/"]}
                name="Bangkok Golf Club | Championship Night Golf"
                description="Professional night golf under Bangkok lights — a uniquely Asian golf experience."
                url={"https://www.asiagolfspecialists.com/courses/thailand/bangkok-golf-club/"}
                imageUrl={"/images/courses/thailand/bangkok-golf-club/bangkok-golf-club-thailand-1.webp"}
                addressLocality={"Bangkok"}
                addressCountry={"TH"}
                numberOfHoles={18}
                courseLength={6268}
                par={72}
                designer="Chird Boonyarattanevet"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Thailand", item: "https://www.asiagolfspecialists.com/destinations/thailand/" },
                    { name: "Thailand Courses", item: "https://www.asiagolfspecialists.com/destinations/thailand/courses/" },
                    { name: "Bangkok Golf Club | Championship Night Golf", item: "https://www.asiagolfspecialists.com/courses/thailand/bangkok-golf-club/" },
                ]}
            />

      
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Bangkok Golf Club | Championship Night Golf</strong> is a premier Par 72 championship layout in Bangkok, Thailand, crafted by <strong>Chird Boonyarattanevet</strong> (1993) and stretching to <strong>6,268 Yards (Blue Tees)</strong> across a city course with water features environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its water-guarded signature island green (High drama par-3 17th) and floodlit evening golf experience (Play under stadium lights).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Bangkok Golf Club | Championship Night Golf (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Thailand dry season. Our curatorial scorecard specifically notes its caddie shot selection & pacing (Polished and dependable), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Bangkok golf tour by AGS, Bangkok Golf Club | Championship Night Golf provides a distinct architectural test by Chird Boonyarattanevet that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Bangkok Golf Club | Championship Night Golf"
    itemUrl="https://www.asiagolfspecialists.com/courses/thailand/bangkok-golf-club/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/thailand/bangkok-golf-club/bangkok-golf-club-thailand-1.webp"
    addressLocality="Bangkok"
    addressCountry="TH"
    overallScore={4.5}
    maxScore={5.0}
    gradeBadge="Floodlit City Golf & Island Green • Pathum Thani"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Water-Guarded Signature Island Green",
            score: 9.5,
            highlight: "High drama par-3 17th"
      },
      {
            label: "Floodlit Evening Golf Experience",
            score: 9.5,
            highlight: "Play under stadium lights"
      },
      {
            label: "Caddie Shot Selection & Pacing",
            score: 9.2,
            highlight: "Polished and dependable"
      },
      {
            label: "Practical City Club Amenities",
            score: 9.1,
            highlight: "Minutes from city center"
      }
]}
    verdict="An established Bangkok favorite featuring one of Thailand's most dramatic island greens on the par-3 17th. Excellent night golf facilities for after-work rounds."
  />


            <CourseFAQSection
                courseName="Bangkok Golf Club | Championship Night Golf"
                faqs={[
          {
                    "q": "What are the key course specifications for Bangkok Golf Club | Championship Night Golf?",
                    "a": "Bangkok Golf Club | Championship Night Golf in Bangkok, Thailand is a Par 72 championship layout designed by Chird Boonyarattanevet (opened 1993), measuring 6,268 Yards (Blue Tees) within a city course with water features setting. It is particularly noted for water-guarded signature island green (High drama par-3 17th)."
          },
          {
                    "q": "How do I secure tee times and caddies at Bangkok Golf Club | Championship Night Golf?",
                    "a": "Bangkok Golf Club | Championship Night Golf operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie shot selection & pacing (Polished and dependable)), and private VIP transfers from your Bangkok hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Bangkok Golf Club | Championship Night Golf?",
                    "a": "Our field inspection highlights Bangkok Golf Club | Championship Night Golf's floodlit evening golf experience (Play under stadium lights) alongside water-guarded signature island green (High drama par-3 17th). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Bangkok Golf Club | Championship Night Golf?",
                    "a": "November through April offers excellent conditions at Bangkok Golf Club."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/thailand/bangkok-golf-club/" venueName="Bangkok Golf Club | Championship Night Golf" venueType="course" />
            <CourseNavigation
                prev={{ title: "Ballyshear Golf Links", path: "/courses/thailand/ballyshear/" }}
                next={{ title: "Black Mountain Golf Club Hua Hin", path: "/courses/thailand/black-mountain/" }}
                country="Thailand"
                countryLink="/destinations/thailand/courses/"
            />
    

</main>
  );
}
