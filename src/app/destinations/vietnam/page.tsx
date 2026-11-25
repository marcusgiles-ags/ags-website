import { buildPublisherRef } from "@/lib/schema";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import ReadMoreExpander from "@/components/ReadMoreExpander";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import fs from 'fs';
import path from 'path';

export const metadata = {
 title: { absolute: "Vietnam Golf Packages: Custom Tours & Expat Hosts | AGS" },
 description: "Premium Vietnam golf packages 2026. Conquer championship fairways in Da Nang, Hoi An & Hanoi with personalized itineraries, private caddies, and 5-star stays.",
 keywords: "Vietnam golf tours, luxury golf Vietnam, Da Nang golf, Vietnam hub",
 alternates: {
   canonical: "https://www.asiagolfspecialists.com/destinations/vietnam/",
 },
    openGraph: {
        type: "website",
        title: { absolute: "Vietnam Golf Packages: Custom Tours & Expat Hosts | AGS" },
        description: "Premium Vietnam golf packages 2026. Conquer championship fairways in Da Nang, Hoi An & Hanoi with personalized itineraries, private caddies, and 5-star stays.",
        url: "https://www.asiagolfspecialists.com/destinations/vietnam/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/destinations/vietnam/hero/vietnam-north-rice-terraces-hero.webp",
            width: 1200,
            height: 630,
            alt: "Vietnam luxury golf tours — Da Nang, Hoi An, Hanoi",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Vietnam Golf Packages: Custom Tours & Expat Hosts | AGS" },
        description: "Premium Vietnam golf packages 2026. Conquer championship fairways in Da Nang, Hoi An & Hanoi with personalized itineraries, private caddies, and 5-star stays.",
        images: ["https://www.asiagolfspecialists.com/images/destinations/vietnam/hero/vietnam-north-rice-terraces-hero.webp"],
    },
};

function getArticles(category: string) {
 const dataDir = path.join(process.cwd(), 'src/data/seo-articles');
 if (!fs.existsSync(dataDir)) return [];

 return fs.readdirSync(dataDir)
 .filter(file => file.endsWith('.json'))
 .map(file => {
 const raw = fs.readFileSync(path.join(dataDir, file), 'utf-8');
 const article = JSON.parse(raw);
      if (!article.description && article.content) {
        article.description = article.content.replace(/[\s\S]*?Executive Summary:\*\*/, '').replace(/[\[\]\*\#\>\`]/g, '').replace(/\n/g, ' ').trim().substring(0, 160) + '...';
      }
      return article;
 })
 .filter(article => article.category === category);
}

export default function VietnamHub() {
   const vietnamArticles = getArticles('vietnam'); // Show all articles
   const lastUpdated = vietnamArticles.length > 0
    ? new Date(Math.max(...vietnamArticles.map((a: any) => new Date(a.dateAdded || '2026-05-01').getTime())))
        .toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
    : 'May 2026';
  
   return (
   <div style={{ backgroundColor: '#020617', minHeight: '100vh', color: '#F8FAFC' }}>
   <Navbar />

   {/* Hero Section */}
   <header className="hero" style={{
   minHeight: '75vh',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   position: 'relative'
   }}>
   <div style={{
   position: 'absolute',
   inset: 0,
   WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
   maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
   zIndex: 0
   }}>
   <HeroSlider images={[
   "/images/destinations/vietnam/hero/vietnam-north-rice-terraces-hero.webp"
   ]} objectPosition="center 15%" />
   <div className="hero-overlay" style={{ position: 'absolute', inset: 0 }}></div>
   </div>
   <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '800px', paddingTop: '15vh' }}>
   <span style={{ color: '#D4AF37', letterSpacing: '0.25em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block', fontWeight: 600 }}>The AGS Collection</span>
   <h1 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(3.5rem, 6vw, 5rem)', marginBottom: '1.5rem', color: '#F8FAFC', lineHeight: 1.1, fontWeight: 700 }}>
   Personalized Golf Packages<br /><span style={{ color: "#D4AF37", fontStyle: "italic" }}>in Vietnam 2026</span>
   </h1>
   <div style={{ fontSize: '1.15rem', color: 'rgba(248, 250, 252, 0.7)', lineHeight: 1.6, margin: '0 auto', maxWidth: '800px', textAlign: 'left' }} itemProp="description" id="exec-summary">
     <h2 style={{ color: '#D4AF37', fontSize: '1.35rem', marginBottom: '1rem', fontFamily: 'var(--font-primary-serif)', textAlign: 'center' }}>Why Choose AGS for Vietnam Golf Packages?</h2>
     <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
       <li><span style={{ color: '#D4AF37' }}>✓</span> <strong>Knowledgeable Expat Hosts:</strong> True "Local Guardians" residing in Vietnam.</li>
       <li><span style={{ color: '#D4AF37' }}>✓</span> <strong>100% Customized Itineraries:</strong> Highly personalized tours tailored to your group, rejecting mass-market templates.</li>
       <li><span style={{ color: '#D4AF37' }}>✓</span> <strong>5-Star Comfort & VIP Logistics:</strong> Seamless transitions between championship fairways and premium resorts.</li>
       <li><span style={{ color: '#D4AF37' }}>✓</span> <strong>Elite Private Caddies:</strong> Mandatory, highly-trained caddies to elevate your round on every course.</li>
     </ul>
     <p style={{ textAlign: 'center' }}>From the dramatic dunes of the Central Coast to the mist-shrouded greens of the North, we engineer the ultimate bespoke itineraries integrating championship fairways, VIP logistics, and Michelin-level dining with profound cultural heritage.</p>
   </div>
   <div style={{ marginTop: '2rem', display: 'flex', gap: '2rem', justifyContent: 'center', fontSize: '0.85rem' }}>
     <a href="https://vietnam.travel" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">Official Vietnam Tourism Board</a>
     <a href="https://www.top100golfcourses.com/golf-courses/asia/vietnam" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'none' }} className="hover:underline">Vietnam Course Rankings</a>
   </div>
    <p style={{ marginTop: "1.5rem", fontSize: "0.72rem", color: "rgba(248,250,252,0.35)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Last Updated: {lastUpdated}</p>
   </div>
   </header>

 {/* The Hub Links */}
 <section className="section" style={{ backgroundColor: 'var(--color-primary)', paddingTop: '6rem', paddingBottom: '6rem' }}>
 <div className="container">
 <h2 className="text-center" style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.5rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '2rem' }}>Build Your Masterpiece</h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
 
 <Link href="/tours/" className="ags-card-link">
 <div className="ags-card ags-card-highlighted">
 <div className="ags-card-image-container">
  <Image 
    src="/images/destinations/vietnam/hero/vietnam-north-rice-terraces-hero.webp" 
    alt="The Grand Vietnam Odyssey Curated Tour" 
    className="ags-card-image" 
    fill
    sizes="(max-width: 768px) 100vw, 33vw"
    style={{ objectFit: 'cover' }}
  />
 <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5, 11, 26, 1) 0%, transparent 70%)' }}></div>
 </div>
 <div className="ags-card-content">
 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
 <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.75rem', color: '#D4AF37', margin: 0, fontWeight: 700, lineHeight: 1.3 }}>Curated Tours</h2>
 </div>
 <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F8FAFC', opacity: 0.8, marginBottom: '1.5rem', fontWeight: 500 }}>The Flagship Experience</h3>
 <p style={{ fontSize: '1rem', color: 'rgba(248, 250, 252, 0.6)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
 View our handcrafted, ultimate bucket-list itineraries for human inspiration.
 </p>
 <div className="ags-card-footer" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', fontWeight: 600 }}>
 <span>View All Tours</span>
 <span className="ags-card-cta-arrow">→</span>
 </div>
 </div>
 </div>
 </Link>

 <Link href="/destinations/vietnam/courses/" className="ags-card-link">
 <div className="ags-card">
 <div className="ags-card-image-container">
  <Image 
    src="/images/courses/vietnam/vietnam-golf-course-hoiana-shores-championship-layout.webp" 
    alt="Vietnam Golf Courses" 
    className="ags-card-image" 
    fill
    sizes="(max-width: 768px) 100vw, 33vw"
    style={{ objectFit: 'cover' }}
  />
 <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5, 11, 26, 1) 0%, transparent 70%)' }}></div>
 </div>
 <div className="ags-card-content">
 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
 <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.75rem', color: '#D4AF37', margin: 0, fontWeight: 700, lineHeight: 1.3 }}>The Courses</h2>
 </div>
 <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F8FAFC', opacity: 0.8, marginBottom: '1.5rem', fontWeight: 500 }}>Championship Layouts</h3>
 <p style={{ fontSize: '1rem', color: 'rgba(248, 250, 252, 0.6)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
 Explore 18 world-class layouts designed by Norman, Faldo, and Nicklaus.
 </p>
 <div className="ags-card-footer" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', fontWeight: 600 }}>
 <span>Explore Golf</span>
 <span className="ags-card-cta-arrow">→</span>
 </div>
 </div>
 </div>
 </Link>

 <Link href="/destinations/vietnam/culinary/" className="ags-card-link">
 <div className="ags-card">
 <div className="ags-card-image-container">
  <Image 
    src="/images/destinations/vietnam/culinary/vietnam-culinary-tour.webp" 
    alt="Luxury fine dining and authentic culinary tours in Vietnam" 
    className="ags-card-image" 
    fill
    sizes="(max-width: 768px) 100vw, 33vw"
    style={{ objectFit: 'cover' }}
  />
 <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5, 11, 26, 1) 0%, transparent 70%)' }}></div>
 </div>
 <div className="ags-card-content">
 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
 <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.75rem', color: '#D4AF37', margin: 0, fontWeight: 700, lineHeight: 1.3 }}>The Culinary</h2>
 </div>
 <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F8FAFC', opacity: 0.8, marginBottom: '1.5rem', fontWeight: 500 }}>Michelin & Street Food</h3>
 <p style={{ fontSize: '1rem', color: 'rgba(248, 250, 252, 0.6)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
 From Michelin-starred molecular gastronomy to secret Vespa street-food safaris.
 </p>
 <div className="ags-card-footer" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', fontWeight: 600 }}>
 <span>Taste Vietnam</span>
 <span className="ags-card-cta-arrow">→</span>
 </div>
 </div>
 </div>
 </Link>

 <Link href="/destinations/vietnam/culture/" className="ags-card-link">
 <div className="ags-card">
 <div className="ags-card-image-container">
  <Image 
    src="/images/destinations/vietnam/culture/vietnam-culture-lanterns.webp" 
    alt="Vietnam Culture" 
    className="ags-card-image" 
    fill
    sizes="(max-width: 768px) 100vw, 33vw"
    style={{ objectFit: 'cover' }}
  />
 <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5, 11, 26, 1) 0%, transparent 70%)' }}></div>
 </div>
 <div className="ags-card-content">
 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
 <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.75rem', color: '#D4AF37', margin: 0, fontWeight: 700, lineHeight: 1.3 }}>The Culture</h2>
 </div>
 <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F8FAFC', opacity: 0.8, marginBottom: '1.5rem', fontWeight: 500 }}>Living Heritage</h3>
 <p style={{ fontSize: '1rem', color: 'rgba(248, 250, 252, 0.6)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
 Engage with living heritage, Imperial Hue rites, and secret diplomat tunnels.
 </p>
 <div className="ags-card-footer" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', fontWeight: 600 }}>
 <span>Discover Culture</span>
 <span className="ags-card-cta-arrow">→</span>
 </div>
 </div>
 </div>
 </Link>

 <Link href="/destinations/vietnam/nightlife/" className="ags-card-link">
 <div className="ags-card">
 <div className="ags-card-image-container">
  <Image 
    src="/images/destinations/vietnam/nightlife/vietnam-nightlife-party-experience.webp" 
    alt="Vietnam Nightlife" 
    className="ags-card-image" 
    fill
    sizes="(max-width: 768px) 100vw, 33vw"
    style={{ objectFit: 'cover' }}
  />
 <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5, 11, 26, 1) 0%, transparent 70%)' }}></div>
 </div>
 <div className="ags-card-content">
 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
 <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.75rem', color: '#D4AF37', margin: 0, fontWeight: 700, lineHeight: 1.3 }}>The Nightlife</h2>
 </div>
 <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F8FAFC', opacity: 0.8, marginBottom: '1.5rem', fontWeight: 500 }}>Skybars & Speakeasies</h3>
 <p style={{ fontSize: '1rem', color: 'rgba(248, 250, 252, 0.6)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
 Skyline glamour, rooftop infinity parties, and password-only speakeasies.
 </p>
 <div className="ags-card-footer" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', fontWeight: 600 }}>
 <span>Own the Night</span>
 <span className="ags-card-cta-arrow">→</span>
 </div>
 </div>
 </div>
 </Link>

 <Link href="/destinations/vietnam/accommodations/" className="ags-card-link">
 <div className="ags-card">
   <div className="ags-card-image-container">
    <Image 
      src="/images/accommodations/vietnam/four-seasons-nam-hai/vietnam-luxury-hotel-four-seasons-resort-the-nam-hai-5-star-recovery.webp" 
      alt="Vietnam Accommodations" 
      className="ags-card-image" 
      fill
    sizes="(max-width: 768px) 100vw, 33vw"
    style={{ objectFit: 'cover' }}
  />
 <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5, 11, 26, 1) 0%, transparent 70%)' }}></div>
 </div>
 <div className="ags-card-content">
 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
 <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.75rem', color: '#D4AF37', margin: 0, fontWeight: 700, lineHeight: 1.3 }}>The Recovery</h2>
 </div>
 <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F8FAFC', opacity: 0.8, marginBottom: '1.5rem', fontWeight: 500 }}>Elite Sanctuaries</h3>
 <p style={{ fontSize: '1rem', color: 'rgba(248, 250, 252, 0.6)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
 Decompress in absolute privacy at elite coastal resorts and pool villas.
 </p>
 <div className="ags-card-footer" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', fontWeight: 600 }}>
 <span>Find Rest</span>
 <span className="ags-card-cta-arrow">→</span>
 </div>
 </div>
 </div>
 </Link>
 </div>
 </div>
 </section>

 {/* SEO CONTENT: The Definitive Guide to Golfing in Vietnam */}
 <section className="section" style={{ backgroundColor: '#0f172a', paddingTop: '6rem', paddingBottom: '6rem', color: '#cbd5e1' }}>
 <div className="container" style={{ maxWidth: '900px', margin: '0 auto' }}>
 <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: '#D4AF37', marginBottom: '2rem' }}>The Definitive Guide to Personalized Golf in Vietnam</h2>
 
 <ReadMoreExpander buttonText="Vietnam" intro={
   <div className="seo-content" style={{ fontSize: '1.05rem', marginBottom: '2rem' }}>
     <h3 style={{ color: '#D4AF37', fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-primary-serif)' }}>What constitutes a premium Vietnam golf tour?</h3>
     <p>A premium Vietnam golf tour is a highly curated travel experience that integrates championship-caliber golf courses with elite, on-the-ground VIP logistics and authentic Southeast Asian cultural immersion. Voted the "World's Best Golf Destination" multiple times by the World Golf Awards, Vietnam currently features over 80 operational courses across three distinct climatic zones: the historical North (Hanoi), the coastal links of the Central region (Da Nang and Hoi An), and the energetic South (Ho Chi Minh City). Premium tours are defined by mandatory, highly-trained private caddies at every course, private luxury vehicle transfers, and stays at 5-star beachfront resorts or pool villas. Unlike do-it-yourself tee-time bookings, a truly personalized tour is engineered end-to-end by local expats to include un-googleable culinary experiences, from Michelin-starred gastronomy to guided Vespa street-food safaris, ensuring a seamless, 5-star experience both on and off the fairways.</p>
     <p>Explore our <Link href="/blog/top-10-golf-courses-vietnam-2026/" style={{ color: "#D4AF37", textDecoration: "underline" }}>Top 10 Championship Golf Courses in Vietnam Ranking</Link> and our <Link href="/blog/best-time-to-golf-in-vietnam/" style={{ color: "#D4AF37", textDecoration: "underline" }}>Vietnam Golf Seasonality Guide</Link> to plan your ideal Central Coast, Northern, or Southern itinerary.</p>
     <div style={{ marginTop: '2rem' }}>
       <h3 style={{ color: '#F8FAFC', fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-primary-serif)' }}>Comparison: Classic Itinerary Architectures</h3>
       <p>When engineering a Vietnam golf tour, we typically structure itineraries around distinct travel philosophies. Here is a comparison of the most popular architectures:</p>
       <div style={{ overflowX: 'auto', marginBottom: '2rem' }}>
         <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.95rem' }}>
           <thead>
             <tr style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)', borderBottom: '2px solid #D4AF37' }}>
               <th style={{ padding: '1rem', color: '#D4AF37', fontWeight: 600 }}>Tour Name</th>
               <th style={{ padding: '1rem', color: '#D4AF37', fontWeight: 600 }}>Duration</th>
               <th style={{ padding: '1rem', color: '#D4AF37', fontWeight: 600 }}>Regions Covered</th>
               <th style={{ padding: '1rem', color: '#D4AF37', fontWeight: 600 }}>Best Suited For</th>
             </tr>
           </thead>
           <tbody>
             <tr style={{ borderBottom: '1px solid rgba(248, 250, 252, 0.1)' }}>
               <td style={{ padding: '1rem', fontWeight: 600, color: '#F8FAFC' }}>
                 <Link href="/packages/da-nang-championship-links/" style={{ color: "#D4AF37", textDecoration: "underline" }}>Da Nang Championship Coastal Links</Link>
               </td>
               <td style={{ padding: '1rem' }}>7 Days</td>
               <td style={{ padding: '1rem' }}>Central Coast (Da Nang, Hoi An)</td>
               <td style={{ padding: '1rem' }}>High-intensity golf without domestic flights; Coastal links lovers.</td>
             </tr>
             <tr style={{ borderBottom: '1px solid rgba(248, 250, 252, 0.1)' }}>
               <td style={{ padding: '1rem', fontWeight: 600, color: '#F8FAFC' }}>
                 <Link href="/packages/vietnam-north-to-south-trilogy/" style={{ color: "#D4AF37", textDecoration: "underline" }}>Vietnam Grand Trilogy</Link>
               </td>
               <td style={{ padding: '1rem' }}>12 Days</td>
               <td style={{ padding: '1rem' }}>Hanoi, Da Nang &amp; Ho Tram</td>
               <td style={{ padding: '1rem' }}>Experiencing both the historic capital, coastal dunes, and modern energy.</td>
             </tr>
             <tr style={{ borderBottom: '1px solid rgba(248, 250, 252, 0.1)' }}>
               <td style={{ padding: '1rem', fontWeight: 600, color: '#F8FAFC' }}>
                 <Link href="/tours/the-grand-vietnam-odyssey/" style={{ color: "#D4AF37", textDecoration: "underline" }}>The Grand Vietnam Odyssey</Link>
               </td>
               <td style={{ padding: '1rem' }}>14 Days</td>
               <td style={{ padding: '1rem' }}>North, Central, &amp; South</td>
               <td style={{ padding: '1rem' }}>The ultimate bucket-list trip encompassing all major cultural hubs.</td>
             </tr>
           </tbody>
         </table>
       </div>
     </div>
   </div>
 }>
 <div className="seo-content" style={{ display: 'grid', gap: '2rem', fontSize: '1.05rem' }}>
 
 <div>
 <h3 style={{ color: '#F8FAFC', fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-primary-serif)' }}>The Central Coast: The Beating Heart of Vietnam Golf</h3>
 <p>The corridor stretching from the vibrant city of Da Nang south to the ancient, lantern-lit streets of Hoi An represents the densest concentration of world-class golf in Asia. This region is the crown jewel of Vietnam golf tours.</p>
 <p>Here, players face the authentic, wind-swept links conditions of <Link href="/courses/vietnam/hoiana-shores/" style={{ color: "#D4AF37", textDecoration: "underline", fontWeight: 600 }}>Hoiana Shores Golf Club</Link>, a mesmerizing Robert Trent Jones Jr. design built directly into the coastal sand dunes that offers a pure, unadulterated links experience overlooking the Cham Islands. Just up the coast lies the strategic bunkering of <Link href="/courses/vietnam/montgomerie-links/" style={{ color: "#D4AF37", textDecoration: "underline", fontWeight: 600 }}>Montgomerie Links</Link>, which demands precise iron play and tactical course management.</p>
 
 <div style={{ position: 'relative', width: '100%', height: '400px', margin: '2rem 0', borderRadius: '4px', overflow: 'hidden' }}>
   <Image src="/images/courses/vietnam/hoiana-shores/hoiana-shores-golf-club-coastal-vietnam-1.webp" alt="Hoiana Shores Golf Club coastal links course in Vietnam" fill sizes="(max-width: 900px) 100vw, 900px" style={{ objectFit: 'cover' }} />
 </div>

 <p>In stark contrast to the coastal links, a short drive inland takes you to the breathtaking elevation changes of <Link href="/courses/vietnam/ba-na-hills/" style={{ color: "#D4AF37", textDecoration: "underline", fontWeight: 600 }}>Ba Na Hills Golf Club</Link>. Designed by Luke Donald and managed by IMG, this mountain course is carved through dense tropical forests (7,858 yards from the championship tips) and features state-of-the-art floodlighting for spectacular night golf. Operating from a private beachfront villa in Da Nang or Hoi An allows seamless daily access to these iconic layouts, perfectly balanced with evenings exploring UNESCO World Heritage cultural sites and fine gastronomy.</p>
 </div>

 <div>
 <h3 style={{ color: '#F8FAFC', fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-primary-serif)' }}>Northern Splendor: Hanoi, Thanh Lanh Valley and Ha Long Bay</h3>
 <p>Beyond the Central Coast, Northern Vietnam offers a distinctly different, highly atmospheric golfing experience. Just 60 minutes north of Hanoi in the cool Vinh Phuc foothills sits <Link href="/courses/vietnam/thanh-lanh-valley/" style={{ color: "#D4AF37", textDecoration: "underline", fontWeight: 600 }}>Thanh Lanh Valley Golf &amp; Resort</Link> — Sir Nick Faldo&apos;s 6,793-yard, Par 72 championship highland lake masterpiece framed by Tam Dao mountain peaks. Closer to Noi Bai International Airport, <Link href="/courses/vietnam/legend-hill/" style={{ color: "#D4AF37", textDecoration: "underline", fontWeight: 600 }}>BRG Legend Hill Golf Resort</Link> showcases Jack Nicklaus&apos;s signature twin-green architecture, while <Link href="/courses/vietnam/kings-island/" style={{ color: "#D4AF37", textDecoration: "underline", fontWeight: 600 }}>BRG King&apos;s Island Golf Resort</Link> sits majestically on the shores of Dong Mo Lake, requiring a serene boat ride to reach the first tee.</p>
 
 <div style={{ position: 'relative', width: '100%', height: '400px', margin: '2rem 0', borderRadius: '4px', overflow: 'hidden' }}>
   <Image src="/images/courses/vietnam/flc-ha-long-bay/flc-ha-long-bay-golf-club-vietnam-1.webp" alt="FLC Ha Long Bay Golf Club overlooking limestone karsts in Northern Vietnam" fill sizes="(max-width: 900px) 100vw, 900px" style={{ objectFit: 'cover' }} />
 </div>

 <p>Further east, the spectacular <Link href="/courses/vietnam/flc-ha-long-bay/" style={{ color: "#D4AF37", textDecoration: "underline", fontWeight: 600 }}>FLC Ha Long Bay Golf Club</Link> provides what might be the most dramatic backdrop in world golf. Perched high above the legendary UNESCO World Heritage site, nearly every hole offers panoramic vistas of the thousands of mist-shrouded limestone karsts erupting from the emerald waters of the Gulf of Tonkin.</p>
 </div>

 <div>
 <h3 style={{ color: '#F8FAFC', fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-primary-serif)' }}>Southern Energy: Ho Chi Minh City and Ho Tram</h3>
 <p>In the South, Ho Chi Minh City (Saigon) pulses with an intoxicating, relentless energy. It serves as the ultimate urban hub, offering access to elite nightlife, skybars, and sophisticated dining. From here, luxury travelers transition to the coast to experience the legendary <Link href="/courses/vietnam/the-bluffs-ho-tram/" style={{ color: "#D4AF37", textDecoration: "underline", fontWeight: 600 }}>The Bluffs Grand Ho Tram Strip</Link>.</p>
 
 <div style={{ position: 'relative', width: '100%', height: '400px', margin: '2rem 0', borderRadius: '4px', overflow: 'hidden' }}>
   <Image src="/images/courses/vietnam/the-bluffs-ho-tram/the-bluffs-ho-tram-strip-vietnam-1.webp" alt="The Bluffs Grand Ho Tram Strip Greg Norman coastal course in Southern Vietnam" fill sizes="(max-width: 900px) 100vw, 900px" style={{ objectFit: 'cover' }} />
 </div>

 <p>Consistently ranked among the absolute elite courses globally, this Greg Norman signature design routes through towering coastal sand dunes, heavily exposed to the roaring winds of the South China Sea. It is a punishing, exhilarating test of golf that draws comparisons to the finest links courses of Ireland and Scotland, but set in a tropical climate.</p>
 </div>

 <div>
 <h3 style={{ color: '#F8FAFC', fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-primary-serif)' }}>The VIP Logistics & Vietnamese Caddie Culture</h3>
 <p>A defining hallmark of luxury golf in Vietnam—and a major reason why golfers return year after year—is the mandatory, highly-trained private caddie program. Unlike Western courses where caddies are optional or shared, every player in Vietnam is assigned a dedicated caddie.</p>
 <p>These professionals act as indispensable local guides, expertly reading the subtle grain of the Bermuda and Paspalum greens, navigating complex yardages, and providing invaluable course strategy. Their hospitality and course knowledge elevate the entire round. Asia Golf Specialists integrates this caddie culture with our own VIP logistics—from private VIP airport tarmac transfers to secured prime tee times, and seamless transitions between the 18th hole and your private villa.</p>
 <p>Read our comprehensive guide to <Link href="/blog/caddie-culture-southeast-asia/" style={{ color: "#D4AF37", textDecoration: "underline" }}>Southeast Asian Caddie Culture &amp; Tipping Etiquette</Link> for detailed advice on gratuities, communication, and on-course protocols.</p>
 </div>
 
 <div>
 <h3 style={{ color: '#F8FAFC', fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-primary-serif)' }}>What are the essential travel logistics for golfing in Vietnam?</h3>
 <p>Traveling to Vietnam for golf requires specific logistical planning. For most Western travelers (including Australians, Americans, and Europeans), an E-Visa is required prior to arrival. The process is straightforward but must be completed weeks in advance. When flying with golf clubs, we highly recommend utilizing premium carriers that offer generous sporting goods allowances (such as Singapore Airlines or Vietnam Airlines).</p>
 <p>While renting clubs is possible at all premium courses, the bespoke nature of our tours means we manage the seamless transport of your personal clubs from the moment you land. Our dedicated ground team handles all equipment transfers between courses and hotels, meaning you never touch your golf bag unless you are on the tee box.</p>
 </div>

 <div>
 <h3 style={{ color: '#F8FAFC', fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--font-primary-serif)' }}>When is the best time to book a golf trip to Vietnam?</h3>
 <p>Vietnam's elongated geography means regional climates vary significantly, and understanding the monsoon seasons is critical to planning a successful golf holiday. The absolute premium window for the Central Coast (Da Nang/Hoi An) is between <strong>February and September</strong>, offering pristine playing conditions, dry weather, and warm ocean waters.</p>
 <p>For Southern itineraries (Ho Chi Minh City, Ho Tram), the dry season runs from <strong>November through April</strong>. This aligns perfectly with the crisp, cool autumn and winter months in the North (Hanoi and Ha Long Bay), making a cross-country "Grand Odyssey" tour ideal during the November to March window.</p>
 <p>For an exhaustive breakdown of regional rainfall cycles, typhoons, and playing recommendations, explore our <Link href="/blog/best-time-to-golf-in-vietnam/" style={{ color: "#D4AF37", textDecoration: "underline" }}>Month-by-Month Guide to the Best Time to Golf in Vietnam</Link>.</p>
 </div>

 <div style={{ marginTop: '2rem', padding: '2rem', backgroundColor: 'rgba(212, 175, 55, 0.05)', borderLeft: '4px solid #D4AF37', borderRadius: '4px' }}>
   <h4 style={{ color: '#D4AF37', fontSize: '1.25rem', marginBottom: '0.5rem', fontFamily: 'var(--font-primary-serif)' }}>About the Authors: Asia Golf Specialists (AGS)</h4>
   <p style={{ fontSize: '0.95rem', color: 'rgba(248, 250, 252, 0.8)', margin: 0, lineHeight: 1.6 }}>This definitive guide was authored by the founders of Asia Golf Specialists, Australian expats who permanently reside in Vietnam. With decades of combined experience playing and reviewing Southeast Asia's elite layouts, AGS acts as your "Local Guardian," providing direct, middleman-free access to Vietnam's most exclusive golfing and cultural experiences.</p>
 </div>
 </div>
 </ReadMoreExpander>
 </div>
 </section>

 {/* SECONDARY CONTENT: The Deep Dives (Luxury Editorial/Bento Grid) */}
 <section className="section" style={{ backgroundColor: 'var(--color-bg)', paddingTop: '8rem', paddingBottom: '6rem' }}>
 <div className="container">
 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
 <div>
 <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.5rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '1rem' }}>Deep Dives & Insider Knowledge</h2>
 <p style={{ color: 'var(--color-secondary)' }}>Exclusive editorial perspectives from our Local Guardians.</p>
 </div>
 </div>

 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '4rem' }}>
 {vietnamArticles.map((article: any) => (
 <Link href={`/destinations/vietnam/${article.slug}/`} key={article.slug} className="ags-card-link">
 <div className="ags-card">
  <div className="ags-card-image-container" style={{ height: '300px' }}>
  {article.heroImage ? (
  <Image 
    src={article.heroImage} 
    alt={article.title} 
    className="ags-card-image" 
    fill 
    sizes="(max-width: 768px) 100vw, 33vw"
    style={{ objectFit: 'cover' }}
  />
  ) : (
 <div style={{ width: '100%', height: '100%', backgroundColor: 'var(--color-primary)' }}></div>
 )}
 <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5, 11, 26, 1) 0%, transparent 70%)' }}></div>
 </div>
 <div className="ags-card-content">
 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
 <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.75rem', color: '#D4AF37', margin: 0, fontWeight: 700, lineHeight: 1.3 }}>{article.title}</h2>
 </div>
 <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F8FAFC', opacity: 0.8, marginBottom: '1.5rem', fontWeight: 500 }}>Editorial Deep Dive</h3>
 <p style={{ fontSize: '1rem', color: 'rgba(248, 250, 252, 0.6)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
 {article.description || "Discover the depths of Vietnamese luxury and golf traditions in this exclusive feature."}
 </p>
 <div className="ags-card-footer" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', fontWeight: 600 }}>
 <span>Read Article</span>
 <span className="ags-card-cta-arrow">→</span>
 </div>
 </div>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </section>

 {/* Final Conversion Push */}
 <section className="cta-section" style={{ borderTop: 'none', paddingBottom: '10rem' }}>
 <div className="container">
 <h2>Demand More From Your Next Golf Trip.</h2>
 <p style={{ maxWidth: '600px', margin: '0 auto 2rem' }}>Ready to conquer the Vietnam Coast? Drop in your details and we'll engineer the perfect itinerary.</p>
 <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
 <Link href="/quote/" className="btn-primary">Request a Custom Quote</Link>
 </div>
 </div>
 </section>
 
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "CollectionPage",
                            "@id": "https://www.asiagolfspecialists.com/destinations/vietnam/",
                            "name": "Vietnam Premium Golf Packages",
                            "description": "Premium Vietnam golf packages. Conquer championship fairways in Da Nang, Hoi An, and Hanoi with elite private caddies and 5-star villa stays.",
                            "url": "https://www.asiagolfspecialists.com/destinations/vietnam/",
                            "about": { "@id": "https://www.asiagolfspecialists.com/destinations/vietnam/#destination" },
                            "publisher": buildPublisherRef()
                        },
                        {
                            "@type": "TouristDestination",
                            "@id": "https://www.asiagolfspecialists.com/destinations/vietnam/#destination",
                            "name": "Vietnam Golf Destinations (Da Nang, Hoi An, Hanoi & Ho Tram)",
                            "description": "Premium Vietnam golf packages. Conquer championship fairways in Da Nang, Hoi An, and Hanoi with elite private caddies and 5-star villa stays.",
                            "touristType": ["Golfers", "Luxury Travelers"],
                            "url": "https://www.asiagolfspecialists.com/destinations/vietnam/",
                            "sameAs": "https://en.wikipedia.org/wiki/Vietnam",
                            "includesAttraction": [
    {
        "@type": "GolfCourse",
        "name": "Hoiana Shores Golf Club",
        "url": "https://www.asiagolfspecialists.com/courses/vietnam/hoiana-shores/",
        "image": "https://www.asiagolfspecialists.com/images/courses/vietnam/hoiana-shores/hoiana-shores-golf-club-coastal-vietnam-1.webp",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "VN"
        }
    },
    {
        "@type": "GolfCourse",
        "name": "Montgomerie Links",
        "url": "https://www.asiagolfspecialists.com/courses/vietnam/montgomerie-links/",
        "image": "https://www.asiagolfspecialists.com/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-da-nang-1-hero.webp",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "VN"
        }
    },
    {
        "@type": "GolfCourse",
        "name": "Ba Na Hills Golf Club",
        "url": "https://www.asiagolfspecialists.com/courses/vietnam/ba-na-hills/",
        "image": "https://www.asiagolfspecialists.com/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-da-nang-vietnam-1.webp",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "VN"
        }
    },
    {
        "@type": "GolfCourse",
        "name": "The Bluffs Grand Ho Tram Strip",
        "url": "https://www.asiagolfspecialists.com/courses/vietnam/the-bluffs-ho-tram/",
        "image": "https://www.asiagolfspecialists.com/images/courses/vietnam/the-bluffs-ho-tram/the-bluffs-ho-tram-strip-vietnam-1.webp",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "VN"
        }
    },
    {
        "@type": "GolfCourse",
        "name": "BRG King's Island Golf Resort",
        "url": "https://www.asiagolfspecialists.com/courses/vietnam/kings-island/",
        "image": "https://www.asiagolfspecialists.com/images/courses/vietnam/kings-island/kings-island-1.webp",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "VN"
        }
    },
    {
        "@type": "GolfCourse",
        "name": "FLC Ha Long Bay Golf Club",
        "url": "https://www.asiagolfspecialists.com/courses/vietnam/flc-ha-long-bay/",
        "image": "https://www.asiagolfspecialists.com/images/courses/vietnam/flc-ha-long-bay/flc-ha-long-bay-golf-club-vietnam-1.webp",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "VN"
        }
    }
]
                        },
                        {
                            "@type": "ItemList",
                            "name": "Deep Dives & Insider Knowledge - Vietnam",
                            "itemListElement": vietnamArticles.map((article: any, index: number) => ({
                                "@type": "ListItem",
                                "position": index + 1,
                                "item": {
                                    "@type": "Article",
                                    "name": article.title,
                                    "url": `https://www.asiagolfspecialists.com/destinations/vietnam/${article.slug}/`
                                }
                            }))
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://www.asiagolfspecialists.com/destinations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/" }
                            ]
                        }
                    ]
                })
            }} />
</div>
 );
}



