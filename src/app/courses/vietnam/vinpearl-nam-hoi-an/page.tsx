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
 title: { absolute: "Vinpearl Golf Nam Hoi An | Central Coast Vietnam Golf" },
 description: "Play Vinpearl Golf Nam Hoi An: wide fairways, rolling dunes, and old-growth trees near Hoi An. Book your Vietnam golf tour with Asia Golf Specialists.",
 keywords: ["Vinpearl Golf Nam Hoi An", "Hoi An Golf Resort", "Vietnam Golf Tours", "Vinpearl Golf Vietnam", "Premium Golf Vietnam"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/vinpearl-nam-hoi-an/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Vinpearl Golf Nam Hoi An | Central Coast Vietnam Golf" },
        description: "Play Vinpearl Golf Nam Hoi An: wide fairways, rolling dunes, and old-growth trees near Hoi An. Book your Vietnam golf tour with Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/vinpearl-nam-hoi-an/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/vinpearl-nam-hoi-an/vinpearl-golf-nam-hoi-an-vietnam-1.webp",
            width: 1200,
            height: 630,
            alt: "Vinpearl Golf Nam Hoi An | Premium Vietnam Golf Resort Course — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Vinpearl Golf Nam Hoi An | Central Coast Vietnam Golf" },
        description: "Play Vinpearl Golf Nam Hoi An: wide fairways, rolling dunes, and old-growth trees near Hoi An. Book your Vietnam golf tour with Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/vinpearl-nam-hoi-an/vinpearl-golf-nam-hoi-an-vietnam-1.webp"],
    },
};

export default function VinpearlNamHoiAn() {
 const images = [
 { src: "/images/courses/vietnam/vinpearl-nam-hoi-an/vinpearl-golf-nam-hoi-an-vietnam-1.webp", alt: "Vinpearl Golf Nam Hoi An Vietnam Resort Course Aerial View", caption: "Vinpearl Golf Nam Hoi An Vietnam Resort Course Aerial View" },
 { src: "/images/courses/vietnam/vinpearl-nam-hoi-an/vinpearl-golf-nam-hoi-an-dunes-fairway-2.webp", alt: "Vinpearl Golf Nam Hoi An Rolling Dunes Fairway Championship", caption: "Vinpearl Golf Nam Hoi An Rolling Dunes Fairway Championship" },
 { src: "/images/courses/vietnam/vinpearl-nam-hoi-an/vinpearl-golf-nam-hoi-an-old-growth-trees-3.webp", alt: "Vinpearl Golf Nam Hoi An Old Growth Trees Course Design", caption: "Vinpearl Golf Nam Hoi An Old Growth Trees Course Design" },
 { src: "/images/courses/vietnam/vinpearl-nam-hoi-an/vinpearl-golf-nam-hoi-an-resort-facilities-4.webp", alt: "Vinpearl Golf Nam Hoi An Premium Resort Clubhouse Facilities", caption: "Vinpearl Golf Nam Hoi An Premium Resort Clubhouse Facilities" },
 { src: "/images/courses/vietnam/vinpearl-nam-hoi-an/vinpearl-golf-nam-hoi-an-signature-hole-5.webp", alt: "Vinpearl Golf Nam Hoi An Signature Hole Championship Green", caption: "Vinpearl Golf Nam Hoi An Signature Hole Championship Green" },
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
 <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Vinpearl Golf <br /><span className="text-gold">Nam Hoi An</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">
 "Rolling dunes, ancient trees, and the soul of Hoi An on every hole."
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
                  ['Designer', 'IMG Worldwide'],
                  ['Year Opened', '2018'],
                  ['Par', '72'],
                  ['Length', '7,035 Yards'],
                  ['Grass Type', 'SeaIsle Paspalum'],
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
 Vinpearl Golf Nam Hoi An occupies a uniquely beautiful stretch of land near the UNESCO World Heritage town of Hoi An. The 18-hole layout flows through rolling coastal dunes, shaded by magnificent old-growth casuarina and melaleuca trees that give it a timeless, park-like character.
 </p>
 <p>
 Wide, generous fairways make the course accessible to golfers of all abilities, yet the strategic placement of bunkering and water hazards ensure that scoring well requires discipline. Hole 9 — a sweeping par-5 across a natural dune valley — is among the most photographically stunning in Vietnam.
 </p>
 <p>
 The course is part of Vinpearl's premium resort complex, which includes five-star accommodation, multiple dining outlets, a casino, and a world-class spa. It is an ideal base for golfers looking to explore both the Hoi An golf corridor and the nearby Da Nang club circuit.
 </p>
 </div>
 </div>
 </div>
 </section>

 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
 <div className="container">
 <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Resort</span></h2>
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
    pagePath="/courses/vietnam/vinpearl-nam-hoi-an/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://www.vinpearl.com/en/golf/vinpearl-golf-nam-hoi-an"]}
                name="Vinpearl Golf Nam Hoi An"
                description="Play Vinpearl Golf Nam Hoi An: wide fairways, rolling dunes, and old-growth trees near Hoi An. Book your Vietnam golf tour with Asia Golf Specialists."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/vinpearl-nam-hoi-an/"}
                imageUrl={"/images/courses/vietnam/vinpearl-nam-hoi-an/vinpearl-golf-nam-hoi-an-vietnam-1.webp"}
                addressLocality={"Hoi An"}
                addressCountry={"VN"}
                numberOfHoles={18}
                courseLength={7035}
                par={72}
                designer="IMG Worldwide"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Vinpearl Golf Nam Hoi An", item: "https://www.asiagolfspecialists.com/courses/vietnam/vinpearl-nam-hoi-an/" },
                ]}
            />


 
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Vinpearl Golf Nam Hoi An</strong> is a premier Par 72 championship layout in Hoi An, Vietnam, crafted by <strong>IMG Worldwide</strong> (2018) and stretching to <strong>7,035 Yards</strong> across a parkland environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its broad fairways & forgiving landings (Wide coastal landing corridors) and expansive white sand waste bunkers (Framed by native coastal brush).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Vinpearl Golf Nam Hoi An (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its resort caddie service & helpfulness (Friendly and highly attentive), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Hoi An golf tour by AGS, Vinpearl Golf Nam Hoi An provides a distinct architectural test by IMG Worldwide that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Vinpearl Golf Nam Hoi An"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/vinpearl-nam-hoi-an/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/vinpearl-nam-hoi-an/vinpearl-golf-nam-hoi-an-vietnam-1.webp"
    addressLocality="Hoi An"
    addressCountry="VN"
    overallScore={4.6}
    maxScore={5.0}
    gradeBadge="Resort Championship Layout • Central Coast"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Broad Fairways & Forgiving Landings",
            score: 9.4,
            highlight: "Wide coastal landing corridors"
      },
      {
            label: "Expansive White Sand Waste Bunkers",
            score: 9.3,
            highlight: "Framed by native coastal brush"
      },
      {
            label: "Resort Caddie Service & Helpfulness",
            score: 9.4,
            highlight: "Friendly and highly attentive"
      },
      {
            label: "Clubhouse Facilities & Buggy Comfort",
            score: 9.5,
            highlight: "Modern 5-star Vinpearl standard"
      }
]}
    verdict="A beautifully manicured resort course featuring expansive white sand bunkers and wide fairways that wind through coastal woodlands. Highly enjoyable for mixed-handicap group societies."
  />


            
 <VenueItineraries venueHref="/courses/vietnam/vinpearl-nam-hoi-an/" venueName="Vinpearl Golf Nam Hoi An" venueType="course" />

 <CourseFAQSection
                courseName="Vinpearl Golf Nam Hoi An"
                faqs={[
          {
                    "q": "What are the key course specifications for Vinpearl Golf Nam Hoi An?",
                    "a": "Vinpearl Golf Nam Hoi An in Hoi An, Vietnam is a Par 72 championship layout designed by IMG Worldwide (opened 2018), measuring 7,035 Yards within a parkland setting. It is particularly noted for broad fairways & forgiving landings (Wide coastal landing corridors)."
          },
          {
                    "q": "How do I secure tee times and caddies at Vinpearl Golf Nam Hoi An?",
                    "a": "Vinpearl Golf Nam Hoi An operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (resort caddie service & helpfulness (Friendly and highly attentive)), and private VIP transfers from your Hoi An hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Vinpearl Golf Nam Hoi An?",
                    "a": "Our field inspection highlights Vinpearl Golf Nam Hoi An's expansive white sand waste bunkers (Framed by native coastal brush) alongside broad fairways & forgiving landings (Wide coastal landing corridors). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Vinpearl Golf Nam Hoi An?",
                    "a": "February through September offers ideal conditions at Vinpearl Golf Nam Hoi An."
          }
]}
            />
            <CourseNavigation
                prev={{ title: "Vietnam Golf & Country Club", path: "/courses/vietnam/vgcc/" }}
                next={{ title: "West Lakes Golf & Villas", path: "/courses/vietnam/west-lakes-golf-club/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
 

</main>
 );
}
