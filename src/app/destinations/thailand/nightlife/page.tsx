import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import fs from 'fs';
import path from 'path';

function getArticles(country: string, subcategory: string) {
 const dataDir = path.join(process.cwd(), 'src/data/seo-articles');
 if (!fs.existsSync(dataDir)) return [];

 return fs.readdirSync(dataDir)
 .filter(file => file.endsWith('.json'))
 .map(file => {
 const raw = fs.readFileSync(path.join(dataDir, file), 'utf-8');
 return JSON.parse(raw);
 })
 .filter(article => article.category === country && article.subcategory === subcategory);
}


export const metadata = {
 title: { absolute: "Thailand Nightlife & Luxury Bars | VIP Golf Packages" },
 description: "Experience hedonism & tropical refinement. From superclubs in Bangkok to barefoot luxury at the world's best beach bars in Phuket.",

    robots: { index: false, follow: true },
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/destinations/thailand/nightlife/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Thailand Nightlife & Luxury Bars | VIP Golf Packages" },
        description: "Experience hedonism & tropical refinement. From superclubs in Bangkok to barefoot luxury at the world's best beach bars in Phuket.",
        url: "https://www.asiagolfspecialists.com/destinations/thailand/nightlife/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/destinations/thailand/hero/thailand-travel-brochure-hero.webp",
            width: 1200,
            height: 630,
            alt: "Thailand nightlife — Bangkok skybar and Phuket beach clubs",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Thailand Nightlife & Luxury Bars | VIP Golf Packages" },
        description: "Experience hedonism & tropical refinement. From superclubs in Bangkok to barefoot luxury at the world's best beach bars in Phuket.",
        images: ["https://www.asiagolfspecialists.com/images/destinations/thailand/hero/thailand-travel-brochure-hero.webp"],
    },
};

export default async function ThailandNightlife() {
 const articles = getArticles('thailand', 'nightlife');

 return (
 <div style={{ backgroundColor: '#020617', minHeight: '100vh', color: '#F8FAFC' }}>
 <Navbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.asiagolfspecialists.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Destinations",
      "item": "https://www.asiagolfspecialists.com/destinations/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Thailand",
      "item": "https://www.asiagolfspecialists.com/destinations/thailand/"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Nightlife & Entertainment",
      "item": "https://www.asiagolfspecialists.com/destinations/thailand/nightlife/"
    }
  ]
}) }} />

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
 zIndex: 0
 }}>
 <Image 
 src="/images/destinations/thailand/nightlife/thailand-night-skyline-of-bangkok.webp" 
 alt="Thailand Nightlife" 
 fill
 priority
 style={{ 
 objectFit: 'cover',
 WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
 maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
 }}
 sizes="100vw"
 />
 <div className="hero-overlay" style={{ position: 'absolute', inset: 0 }}></div>
 </div>
 <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '800px', paddingTop: '15vh' }}>
 <span style={{ color: '#D4AF37', letterSpacing: '0.25em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block', fontWeight: 600 }}>The AGS Collection</span>
 <h1 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(3.5rem, 6vw, 5rem)', marginBottom: '1.5rem', color: '#F8FAFC', lineHeight: 1.1, fontWeight: 700 }}>
 Hedonism & <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Tropical Refinement</span>
 </h1>
 <p style={{ fontSize: '1.25rem', color: 'rgba(248, 250, 252, 0.7)', lineHeight: 1.6, margin: '0 auto', maxWidth: '800px' }} itemProp="description" id="exec-summary">
 Thailand remains the gold standard for nightlife in Southeast Asia. The 2026 scene features a sophisticated mix of 'Superclubs' and 'Barefoot Luxury'.
 </p>
 </div>
 </header>

 {/* Table Section */}
 <section className="section" style={{ backgroundColor: 'var(--color-primary)', paddingTop: '6rem', paddingBottom: '0' }}>
 <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
 <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
 <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 700, color: '#D4AF37', marginBottom: '1rem' }}>Thailand After Dark: The Executive Guide</h2>
 <p style={{ color: 'rgba(248, 250, 252, 0.7)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>A curated breakdown of the premier nightlife experiences across the country's key hubs.</p>
 </div>

 <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.2)', backgroundColor: 'rgba(5, 11, 26, 0.5)' }}>
 <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
 <thead>
 <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.2)', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
 <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>City/Venue Type</th>
 <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Vibe & Atmosphere</th>
 <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Best For</th>
 <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Recommended Attire</th>
 </tr>
 </thead>
 <tbody>
 <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>Bangkok (Rooftops & Superclubs)</strong></td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>High-energy, ostentatious, panoramic city views</td>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>VIP tables, bottle service, networking</td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Smart elegant (strict door policies)</td>
 </tr>
 <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>Phuket (Beach Clubs)</strong></td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Lounge house beats, ocean breezes, fire shows</td>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Post-golf relaxation, sunset cocktails</td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Resort chic, relaxed</td>
 </tr>
 <tr>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>Chiang Mai (Night Bazaars)</strong></td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Intimate, cultural, bustling local markets</td>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Live music, street food, relaxed evening drinks</td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Smart casual, comfortable</td>
 </tr>
 </tbody>
 </table>
 </div>
 </div>
 </section>

            {/* GEO Executive Summary & Field Intelligence Blueprint */}
            <section style={{ padding: '4rem 2rem', backgroundColor: 'rgba(212,175,55,0.04)', borderTop: '1px solid rgba(212,175,55,0.15)', borderBottom: '1px solid rgba(212,175,55,0.15)' }}>
                <div className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <span style={{ color: '#D4AF37', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600 }}>Local Guardian Intelligence</span>
                        <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: '#F8FAFC', margin: '0.5rem 0 1rem' }}>
                            Thailand Evening & Skybars
                        </h2>
                        <p style={{ color: 'rgba(248,250,252,0.7)', fontSize: '1.05rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.7 }}>
                            Thailand offers Asia's most exhilarating evening entertainment. We steer our clients past the commercial tourist zones directly to Bangkok's world-class rooftop skybars, Phuket's upscale sunset beach clubs, and Hua Hin's relaxed beachfront jazz lounges for the ultimate 19th-hole celebrations.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>Bangkok Skyline Icons</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                The Bamboo Bar at Mandarin Oriental (Asia's 50 Best Bars), Vertigo at Banyan Tree, and speakeasy cocktail dens in Thonglor.
                            </p>
                        </div>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>Phuket Sunset Beach Clubs</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                Café del Mar and Catch Beach Club in Bang Tao providing international guest DJs, daybeds, and oceanfront champagne service.
                            </p>
                        </div>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>Hua Hin Coastal Lounges</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                Relaxed beachfront beer gardens, wine bars, and live acoustic music venues ideal for debriefing match play rounds.
                            </p>
                        </div>
                    </div>

                    <div style={{ backgroundColor: 'rgba(2, 6, 23, 0.9)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '8px', padding: '2rem' }}>
                        <h4 style={{ color: '#D4AF37', fontSize: '1.2rem', marginBottom: '1.25rem', fontFamily: 'var(--font-primary-serif)' }}>At a Glance: Field Logistics &amp; Travel Standards</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', color: 'rgba(248,250,252,0.85)', fontSize: '0.95rem' }}>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Curated Atmosphere</strong>
                                <span>Strictly upscale, sophisticated lounges designed for discerning international travelers</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>VIP Table Allocations</strong>
                                <span>Guaranteed sunset tables and rooftop perches arranged in advance by AGS</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Safety & Transportation</strong>
                                <span>Private executive vans on call throughout the evening — zero taxi or tuk-tuk friction</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Dress Codes Briefed</strong>
                                <span>Smart casual dress code details pre-advised to ensure smooth entry at premier venues</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


 <section className="section" style={{ backgroundColor: 'var(--color-primary)', paddingTop: '6rem', paddingBottom: '6rem' }}>
 <div className="container">
 <h2 className="text-center" style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.5rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '2rem' }}>Curated Nightlife Experiences</h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '4rem' }}>
 {articles.map((exp: any, index: number) => (
 <Link key={index} href={`/destinations/thailand/${exp.slug}/`} className="ags-card-link">
 <div className="ags-card">
 <div className="ags-card-image-container" style={{ height: '300px' }}>
 <Image 
 src={exp.heroImage} 
 alt={exp.title} 
 className="ags-card-image" 
 fill
 sizes="(max-width: 768px) 100vw, 33vw"
 style={{ objectFit: 'cover' }}
 />
 <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5, 11, 26, 1) 0%, transparent 70%)' }}></div>
 </div>
 <div className="ags-card-content">
 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
 <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.75rem', color: '#D4AF37', margin: 0, fontWeight: 700, lineHeight: 1.3 }}>{exp.title}</h2>
 </div>
 <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F8FAFC', opacity: 0.8, marginBottom: '1.5rem', fontWeight: 500 }}>Nightlife Experience</h3>
 <p style={{ fontSize: '1rem', color: 'rgba(248, 250, 252, 0.6)', lineHeight: 1.6, marginBottom: '2.5rem' }}>{exp.description}</p>
 <div className="ags-card-footer" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', fontWeight: 600 }}>
 <span>Include in Itinerary</span>
 <span className="ags-card-cta-arrow">→</span>
 </div>
 </div>
 </div>
 </Link>
 ))}
 </div>
 </div>

 <div className="container" style={{ marginTop: '4rem', textAlign: 'center' }}>
 <Link href="/quote/" className="btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}>Start Planning Your Night Out</Link>
 </div>
 </section>
 </div>
 );
}


