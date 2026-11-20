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
    title: { absolute: "Chi Linh Golf | Northern Vietnam's Most Challenging Course" },
    description: "Play Chi Linh Star Golf & Country Club, a 36-hole championship course near Hanoi. Host of Asian Tour events. Book your Vietnam/Thailand golf tour.",
    keywords: ["Chi Linh Golf", "Northern Vietnam Golf", "Hardest Golf Course Vietnam", "Vietnam Golf Tours", "Hanoi Golf"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/vietnam/chi-linh-golf/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Chi Linh Golf | Northern Vietnam's Most Challenging Course" },
        description: "Play Chi Linh Star Golf & Country Club, a 36-hole championship course near Hanoi. Host of Asian Tour events. Book your Vietnam/Thailand golf tour.",
        url: "https://www.asiagolfspecialists.com/courses/vietnam/chi-linh-golf/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/chi-linh-golf/chi-linh-golf-resort-vietnam-1.webp",
            width: 1200,
            height: 630,
            alt: "Chi Linh Golf | Northern Vietnam — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Chi Linh Golf | Northern Vietnam's Most Challenging Course" },
        description: "Play Chi Linh Star Golf & Country Club, a 36-hole championship course near Hanoi. Host of Asian Tour events. Book your Vietnam/Thailand golf tour.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/chi-linh-golf/chi-linh-golf-resort-vietnam-1.webp"],
    },
};

export default function ChiLinh() {
    const images = [
        { src: "/images/courses/vietnam/chi-linh-golf/chi-linh-golf-resort-vietnam-1.webp", alt: "Chi Linh Golf Vietnam Aerial Forested Valley - Premium Southeast Asia Golf Tours 2026", caption: "Aerial view, Chi Linh Star Golf, Hai Duong" },
        { src: "/images/courses/vietnam/chi-linh-golf/chi-linh-golf-resort-forest-valley-2.webp", alt: "Chi Linh Golf Forested Valley Pine Trees Vietnam - Premium Southeast Asia Golf Tours 2026", caption: "Forested valley fairway, Chi Linh Golf" },
        { src: "/images/courses/vietnam/chi-linh-golf/chi-linh-golf-resort-championship-layout-3.webp", alt: "Chi Linh Golf Championship Layout Northern Vietnam", caption: "Championship layout, northern Vietnam" },
        { src: "/images/courses/vietnam/chi-linh-golf/chi-linh-golf-resort-northern-vietnam-4.webp", alt: "Chi Linh Golf Pine Hills Northern Vietnam Golf - Premium Southeast Asia Golf Tours 2026", caption: "Pine hills setting, Chi Linh Golf" },
        { src: "/images/courses/vietnam/chi-linh-golf/chi-linh-golf-resort-greens-bunker-5.webp", alt: "Chi Linh Golf Championship Greens Bunkers Vietnam - Premium Southeast Asia Golf Tours 2026", caption: "Championship greens and bunkers, Chi Linh" },
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
                    <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>Chi Linh<br /><span className="text-gold">Golf</span></h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Northern Vietnam's ultimate challenge — a benchmark for the serious discerning golfer."</p>
                </div>
            </header>
            <section className="section" style={{ paddingTop: '4rem' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    <div className="article-content">
                        <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Course <span className="text-gold">Specifications</span></h2>
                        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}><tbody>
                            {[
    ['Designer', 'Lee Nifong / IMG'], ['Year Opened', '2006'], ['Par', '72'], ['Length', '7,160 Yards'], ['Grass Type', 'Bentgrass Greens'], ['Setting', 'Pine-forested mountain valley']
  ].map(([k, v], i) => (
                                <tr key={i}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td></tr>
                            ))}
                        </tbody></table>
                    </div>
                    <div><h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
                        <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <p>Chi Linh Golf is uniformly regarded as the hardest course in Northern Vietnam — a title it wears with pride. Carved through a dramatic pine-forested valley in Hai Duong Province, the layout's significant elevation changes, narrow corridors, and true bentgrass greens combine to create an unrelenting challenge.</p>
                            <p>Earning the nickname "the Dalat of the North" for its cool mountain air and rugged terrain, the course winds through ravines and along ridgelines with little room for error off the tee. The fast, true bentgrass surfaces — rare in Northern Vietnam — demand precision on every approach.</p>
                            <p>For the serious discerning golfer who wants to put their game to the ultimate test, Chi Linh Golf is the benchmark. AGS regularly programmes it on challenge-focused itineraries for groups seeking a genuine step up from the standard Hanoi resort circuits.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Experience the <span className="text-gold">Challenge</span></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                        {images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ width: '100%', height: '150px', objectFit: 'cover' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: '#020617' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}
                    </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/courses/vietnam/chi-linh-golf/"
  />
  </div>
  </section>
            <CourseSchemaBlock sameAs={["https://chilinhgolf.com/"]}
                name="Chi Linh Golf"
                description="Northern Vietnam's ultimate challenge — a benchmark for the serious discerning golfer."
                url={"https://www.asiagolfspecialists.com/courses/vietnam/chi-linh-golf/"}
                imageUrl={"/images/courses/vietnam/chi-linh-golf/chi-linh-golf-resort-vietnam-1.webp"}
                addressLocality={"Hai Duong"}
                addressCountry={"VN"}
                numberOfHoles={36}
                courseLength={7160}
                par={72}
                designer="Lee Nifong / IMG"
                breadcrumbs={[
                    { name: "Home", item: "https://www.asiagolfspecialists.com/" },
                    { name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                    { name: "Vietnam Courses", item: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" },
                    { name: "Chi Linh Golf", item: "https://www.asiagolfspecialists.com/courses/vietnam/chi-linh-golf/" },
                ]}
            />

            
            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Chi Linh Golf</strong> is a premier Par 72 championship layout in Hai Duong, Vietnam, crafted by <strong>Lee Nifong / IMG</strong> (2006) and stretching to <strong>7,160 Yards</strong> across a pine-forested mountain valley environment. In Asia Golf Specialists&apos; (AGS) field evaluations, the course stands out for its natural valley & lake setting (Surrounded by pine-clad hills) and undulating green slopes & tiered targets (Severe breaks on putts).
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From an itinerary-engineering perspective, Chi Linh Golf (Resort & Visitor Access via AGS) requires advance flight allocation and experienced local caddie pairing—particularly during the peak Vietnam dry season. Our curatorial scorecard specifically notes its caddie experience on rolling hills (Decades of course knowledge), making pre-reserved morning tee times and private door-to-clubhouse VIP transfers essential for maintaining pace of play.
                        </p>
                        <p>
                            When integrated into a multi-round Hai Duong golf tour by AGS, Chi Linh Golf provides a distinct architectural test by Lee Nifong / IMG that complements neighboring regional layouts while keeping daily hotel-to-tee transfer times streamlined.
                        </p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="GolfCourse"
    itemName="Chi Linh Golf"
    itemUrl="https://www.asiagolfspecialists.com/courses/vietnam/chi-linh-golf/"
    itemImage="https://www.asiagolfspecialists.com/images/courses/vietnam/chi-linh-golf/chi-linh-golf-resort-vietnam-1.webp"
    addressLocality="Hai Duong"
    addressCountry="VN"
    overallScore={4.6}
    maxScore={5.0}
    gradeBadge="27-Hole Valley Classic • Northern Vietnam"
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Course Review Team"
    leadCuratorTitle="Asia Golf Specialists"
    criteria={[
      {
            label: "Natural Valley & Lake Setting",
            score: 9.4,
            highlight: "Surrounded by pine-clad hills"
      },
      {
            label: "Undulating Green Slopes & Tiered Targets",
            score: 9.3,
            highlight: "Severe breaks on putts"
      },
      {
            label: "Caddie Experience on Rolling Hills",
            score: 9.3,
            highlight: "Decades of course knowledge"
      },
      {
            label: "Traditional Northern Clubhouse Comfort",
            score: 9.1,
            highlight: "Full dining & locker service"
      }
]}
    verdict="Northern Vietnam's pioneering championship facility. Set in a wooded valley surrounding a large natural lake, Chi Linh features dramatic elevation changes and tough tiered greens that reward accurate approach play."
  />


            <CourseFAQSection
                courseName="Chi Linh Golf"
                faqs={[
          {
                    "q": "What are the key course specifications for Chi Linh Golf?",
                    "a": "Chi Linh Golf in Hai Duong, Vietnam is a Par 72 championship layout designed by Lee Nifong / IMG (opened 2006), measuring 7,160 Yards within a pine-forested mountain valley setting. It is particularly noted for natural valley & lake setting (Surrounded by pine-clad hills)."
          },
          {
                    "q": "How do I secure tee times and caddies at Chi Linh Golf?",
                    "a": "Chi Linh Golf operates under resort & visitor access via ags protocols. Asia Golf Specialists secures guaranteed morning tee times, compulsory caddie and cart pairings (caddie experience on rolling hills (Decades of course knowledge)), and private VIP transfers from your Hai Duong hotel as part of a custom golf itinerary."
          },
          {
                    "q": "What playing conditions and turf can golfers expect at Chi Linh Golf?",
                    "a": "Our field inspection highlights Chi Linh Golf's undulating green slopes & tiered targets (Severe breaks on putts) alongside natural valley & lake setting (Surrounded by pine-clad hills). Standard championship golf attire (collared shirts, tailored trousers or shorts, and soft-spike golf shoes) is strictly enforced by the starter."
          },
          {
                    "q": "What is the best time of year to play Chi Linh Golf?",
                    "a": "October through April is the recommended season for Chi Linh Golf."
          }
]}
            />
            
            <VenueItineraries venueHref="/courses/vietnam/chi-linh-golf/" venueName="Chi Linh Golf" venueType="course" />
            <CourseNavigation
                prev={{ title: "BRG Da Nang Golf Resort Norman Course", path: "/courses/vietnam/brg-da-nang-norman/" }}
                next={{ title: "Dragon Golf Links Vietnam", path: "/courses/vietnam/dragon-golf-links/" }}
                country="Vietnam"
                countryLink="/destinations/vietnam/courses/"
            />
        

</main>
    );
}
