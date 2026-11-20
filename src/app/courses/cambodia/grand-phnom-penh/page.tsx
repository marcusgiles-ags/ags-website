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
  title: { absolute: "Grand Phnom Penh Golf Club | Cambodia" },
  description: "Play Grand Phnom Penh Golf Club — private Jack Nicklaus Design offering rare exclusivity and signature Golden Bear strategic bunkering. Book with AGS.",
  keywords: ["Grand Phnom Penh Golf Club", "Nicklaus Design Cambodia", "Private Golf Phnom Penh", "Golden Bear Golf Cambodia", "Cambodia Golf Tours"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/cambodia/grand-phnom-penh/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Grand Phnom Penh Golf Club | Cambodia" },
        description: "Play Grand Phnom Penh Golf Club — private Jack Nicklaus Design offering rare exclusivity and signature Golden Bear strategic bunkering. Book with AGS.",
        url: "https://www.asiagolfspecialists.com/courses/cambodia/grand-phnom-penh/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/cambodia/grand-phnom-penh/grand-phnom-penh-golf-club-cambodia-1.webp",
            width: 1200,
            height: 630,
            alt: "Grand Phnom Penh Golf Club | Nicklaus Design Private Exclusive Cambodia — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Grand Phnom Penh Golf Club | Cambodia" },
        description: "Play Grand Phnom Penh Golf Club — private Jack Nicklaus Design offering rare exclusivity and signature Golden Bear strategic bunkering. Book with AGS.",
        images: ["https://www.asiagolfspecialists.com/images/courses/cambodia/grand-phnom-penh/grand-phnom-penh-golf-club-cambodia-1.webp"],
    },
};

export default function GrandPhnomPenh() {
  const images = [
    { src: "/images/courses/cambodia/grand-phnom-penh/grand-phnom-penh-golf-club-cambodia-1.webp", alt: "Grand Phnom Penh Golf Club Cambodia Nicklaus Design Private Aerial", caption: "Aerial view, Grand Phnom Penh Golf Club" },
    { src: "/images/courses/cambodia/grand-phnom-penh/grand-phnom-penh-golf-club-nicklaus-2.webp", alt: "Grand Phnom Penh Golf Club Cambodia Nicklaus Design Golden Bear Bunkering", caption: "Nicklaus Design bunkering, Phnom Penh" },
    { src: "/images/courses/cambodia/grand-phnom-penh/grand-phnom-penh-golf-club-exclusive-3.webp", alt: "Grand Phnom Penh Golf Club Cambodia Exclusive Private Club Championship Hole", caption: "Championship hole, Grand Phnom Penh" },
    { src: "/images/courses/cambodia/grand-phnom-penh/grand-phnom-penh-golf-club-fairway-4.webp", alt: "Grand Phnom Penh Golf Club Cambodia Championship Fairway Nicklaus", caption: "Championship fairway, Nicklaus design" },
    { src: "/images/courses/cambodia/grand-phnom-penh/grand-phnom-penh-golf-club-green-5.webp", alt: "Grand Phnom Penh Golf Club Cambodia Championship Green Private", caption: "Championship green, Phnom Penh" },
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
                    <DestinationBackLink country="Cambodia" countryLink="/destinations/cambodia/courses/" />
          <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Course Heritage — Jack Nicklaus Design</div>
          <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Grand Phnom Penh<br /><span className="text-gold">Golf Club</span></h1>
          <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"The Golden Bear&apos;s Cambodian signature — private exclusivity meets championship architecture in Phnom Penh."</p>
        </div>
      </header>
      <section className="section" style={{ paddingTop: '4rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
          <div className="article-content">
            <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
            <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
              {[
                ['Designer', <a href="https://nicklausdesign.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">Nicklaus Design</a>], ['Year Opened', '2009'], ['Location', 'Phnom Penh, Cambodia'], ['Type', 'Private club'], ['Par', '72'], ['Length', '6,489 Yards (Blue Tees)'], ['Signature', 'Golden Bear strategic bunker complexes'], ['Access', 'Via AGS facilitation for visiting guests'], ['Top 100 Asia Ranking', <a href="https://www.top100golfcourses.com/golf-courses/asia/cambodia" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">#5 in Asia (2026)</a>]
              ].map(([k, v], i) => (
                <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
              ))}
            </tbody></table>
          </div>
          <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
            <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
              <p>Grand Phnom Penh Golf Club is one of Cambodia's most genuinely exclusive golf experiences — a private Jack Nicklaus Design facility that restricts access to members and carefully arranged visitor guests, creating an atmosphere of intimacy and privilege that Cambodia's more accessible public courses cannot replicate. The rarity of the access is part of the appeal, and it is a course that AGS clients consistently describe as one of the highlights of their Cambodia golf itinerary.</p>
              <p>Nicklaus's characteristic design signature is evident throughout: the bunker complexes are strategically placed to demand precise carry-over or deliberate avoidance decisions on key approach shots, the greens are firm enough to reward approaches from below the pin position, and the routing uses the available land with the spatial efficiency that the Golden Bear's design team is known for globally. It is a demanding, thoughtful course that rewards the patient strategic thinker.</p>
              <p>For premium international golf tours that want Cambodia's most exclusive playing experience, AGS's established relationships at Grand Phnom Penh Golf Club provide the access that visiting golfers cannot arrange independently. We recommend pairing it with the Vattanac East Course for a compelling Phnom Penh two-round program that balances public epic scale with private championship intimacy.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
        <div className="container">
          <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Golden Bear</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
          </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/cambodia/grand-phnom-penh/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://www.grandphnompenh.com/golf"]}
                name="Grand Phnom Penh Golf Club"
                description="The Golden Bear&apos;s Cambodian signature — private exclusivity meets championship architecture in Phnom Penh."
                url={"https://www.asiagolfspecialists.com/courses/cambodia/grand-phnom-penh/"}
                imageUrl={"/images/courses/cambodia/grand-phnom-penh/grand-phnom-penh-golf-club-cambodia-1.webp"}
                addressLocality={"Phnom Penh"}
                addressCountry={"KH"}
                numberOfHoles={18}
                courseLength={6489}
                par={72}
                designer="Jack Nicklaus"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Cambodia", item: "https://www.asiagolfspecialists.com/destinations/cambodia/" },
                    { name: "Cambodia Courses", item: "https://www.asiagolfspecialists.com/destinations/cambodia/courses/" },
                    { name: "Grand Phnom Penh Golf Club", item: "https://www.asiagolfspecialists.com/courses/cambodia/grand-phnom-penh/" },
                ]}
            />

      
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Grand Phnom Penh Golf Club</strong> is a premier Par 72 championship layout in Phnom Penh, Cambodia, crafted by <strong>Jack Nicklaus</strong> (2009) and stretching to <strong>6,489 Yards (Blue Tees)</strong> across a championship layout environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its nicklaus geometric bunker shapes (Demanding green recovery) and pristine paspalum turf roll (Fast, true putting surfaces).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Grand Phnom Penh Golf Club (Via AGS facilitation for visiting guests) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Cambodia dry season. Our curatorial scorecard specifically notes its caddie pacing & yardages (Reliable pin calculations), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Phnom Penh golf tour by AGS, Grand Phnom Penh Golf Club provides a distinct architectural test by Jack Nicklaus that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Grand Phnom Penh Golf Club"
    itemUrl="https://www.asiagolfspecialists.com/courses/cambodia/grand-phnom-penh/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/cambodia/grand-phnom-penh/grand-phnom-penh-golf-club-cambodia-1.webp"
    addressLocality="Phnom Penh"
    addressCountry="KH"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Jack Nicklaus Private Championship Club • Phnom Penh"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Nicklaus Geometric Bunker Shapes",
            score: 9.6,
            highlight: "Demanding green recovery"
      },
      {
            label: "Pristine Paspalum Turf Roll",
            score: 9.5,
            highlight: "Fast, true putting surfaces"
      },
      {
            label: "Caddie Pacing & Yardages",
            score: 9.4,
            highlight: "Reliable pin calculations"
      },
      {
            label: "Upscale Gated Community Clubhouse",
            score: 9.4,
            highlight: "Quiet executive ambiance"
      }
]}
    verdict="The original Jack Nicklaus signature layout in Cambodia. Flawless paspalum turf, subtle doglegs, and deep geometric bunkers reward players who shape their shots with authority."
  />


            <CourseFAQSection
                courseName="Grand Phnom Penh Golf Club"
                faqs={[
          {
                    "q": "What are the key course specifications for Grand Phnom Penh Golf Club?",
                    "a": "Grand Phnom Penh Golf Club in Phnom Penh, Cambodia is a Par 72 championship layout designed by Jack Nicklaus (opened 2009), measuring 6,489 Yards (Blue Tees) within a championship layout setting. It is particularly noted for nicklaus geometric bunker shapes (Demanding green recovery)."
          },
          {
                    "q": "How do I secure tee times and caddies at Grand Phnom Penh Golf Club?",
                    "a": "Grand Phnom Penh Golf Club operates under via ags facilitation for visiting guests protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie pacing & yardages (Reliable pin calculations)), and private VIP transfers from your Phnom Penh hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Grand Phnom Penh Golf Club?",
                    "a": "Our field inspection highlights Grand Phnom Penh Golf Club's pristine paspalum turf roll (Fast, true putting surfaces) alongside nicklaus geometric bunker shapes (Demanding green recovery). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Grand Phnom Penh Golf Club?",
                    "a": "November through May is ideal for Grand Phnom Penh International Golf Club."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/cambodia/grand-phnom-penh/" venueName="Grand Phnom Penh Golf Club" venueType="course" />
            <CourseNavigation
                prev={{ title: "Garden City Golf Club", path: "/courses/cambodia/garden-city/" }}
                next={{ title: "Phokeethra Country Club Siem Reap", path: "/courses/cambodia/phokeethra/" }}
                country="Cambodia"
                countryLink="/destinations/cambodia/courses/"
            />
    

</main>
  );
}



