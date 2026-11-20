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
 title: { absolute: "Cultural tours & Heritage in Cambodia | Authentic Luxury" },
 description: "Experience the Kingdom's resilience. Explore Angkorian architectural genius with private archaeological exclusives & master artisans.",

    robots: { index: false, follow: true },
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/destinations/cambodia/culture/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Cultural tours & Heritage in Cambodia | Authentic Luxury" },
        description: "Experience the Kingdom's resilience. Explore Angkorian architectural genius with private archaeological exclusives & master artisans.",
        url: "https://www.asiagolfspecialists.com/destinations/cambodia/culture/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/destinations/cambodia/hero/cambodia-angkor-wat-majestic-hero.webp",
            width: 1200,
            height: 630,
            alt: "Cambodia cultural experiences — Angkor Wat and Khmer heritage",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Cultural tours & Heritage in Cambodia | Authentic Luxury" },
        description: "Experience the Kingdom's resilience. Explore Angkorian architectural genius with private archaeological exclusives & master artisans.",
        images: ["https://www.asiagolfspecialists.com/images/destinations/cambodia/hero/cambodia-angkor-wat-majestic-hero.webp"],
    },
};

export default async function CambodiaCulture() {
 const articles = getArticles('cambodia', 'culture');

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
      "name": "Cambodia",
      "item": "https://www.asiagolfspecialists.com/destinations/cambodia/"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Cultural Heritage",
      "item": "https://www.asiagolfspecialists.com/destinations/cambodia/culture/"
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
                        src="/images/destinations/cambodia/culture/cambodia-culture-traditional-brochure.webp" 
                        alt="Cambodia Culture" 
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
 Resilience of the <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Kingdom</span>
 </h1>
 <p style={{ fontSize: '1.25rem', color: 'rgba(248, 250, 252, 0.7)', lineHeight: 1.6, margin: '0 auto', maxWidth: '800px' }} itemProp="description" id="exec-summary">
 Cambodia's identity is anchored by the architectural genius of the Angkorian era, brought to life through its celestial dancers, shadow puppeteers, and local artisans.
 </p>
 </div>
 </header>

 {/* Table Section */}
 <section className="section" style={{ backgroundColor: 'var(--color-primary)', paddingTop: '6rem', paddingBottom: '0' }}>
 <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
 <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
 <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 700, color: '#D4AF37', marginBottom: '1rem' }}>Cambodia Cultural Blueprint</h2>
 <p style={{ color: 'rgba(248, 250, 252, 0.7)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>A curated guide to understanding the multifaceted heritage of the Kingdom.</p>
 </div>

 <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.2)', backgroundColor: 'rgba(5, 11, 26, 0.5)' }}>
 <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
 <thead>
 <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.2)', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
 <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Region</th>
 <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Primary Focus</th>
 <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Key Historical Era</th>
 <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>The AGS Exclusive</th>
 </tr>
 </thead>
 <tbody>
 <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>Siem Reap</strong></td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Angkorian Temples, Classical Arts</td>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>9th to 15th Centuries (Khmer Empire)</td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Helicopter access to isolated ruins like Koh Ker</td>
 </tr>
 <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>Phnom Penh</strong></td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Royal Palaces, French Colonial Architecture</td>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>19th Century to Post-War Renaissance</td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Private architectural tours by leading historians</td>
 </tr>
 <tr>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>Battambang & Kampong Luong</strong></td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Heritage Arts & Craftsmanship</td>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Living Traditions</td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Masterclass with royal silversmiths</td>
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
                            Cambodia Cultural Heritage
                        </h2>
                        <p style={{ color: 'rgba(248,250,252,0.7)', fontSize: '1.05rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.7 }}>
                            Cambodia is the cradle of the Khmer Empire, once the most powerful civilization in Southeast Asia. Our itineraries feature private archaeologist-accompanied explorations of the 400-square-kilometre Angkor Archaeological Park, carefully timed around your morning rounds at Angkor Golf Resort.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>Angkor Wat Dawn Expeditions</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                Private sunrise viewing at Angkor Wat followed by crowd-free exploration of the intricate bas-relief galleries and central sanctum.
                            </p>
                        </div>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>The Lost Jungle Temples</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                Ta Prohm (engulfed by strangler fig trees) and the 216 enigmatic carved stone faces of the Bayon in Angkor Thom.
                            </p>
                        </div>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>Sacred Water Blessing Ceremonies</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                Private blessings conducted by senior Buddhist monks at active pagodas for good health, travel fortune, and golf peace of mind.
                            </p>
                        </div>
                    </div>

                    <div style={{ backgroundColor: 'rgba(2, 6, 23, 0.9)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '8px', padding: '2rem' }}>
                        <h4 style={{ color: '#D4AF37', fontSize: '1.2rem', marginBottom: '1.25rem', fontFamily: 'var(--font-primary-serif)' }}>At a Glance: Field Logistics &amp; Travel Standards</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', color: 'rgba(248,250,252,0.85)', fontSize: '0.95rem' }}>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Private Archaeologist</strong>
                                <span>Licensed specialist guides detailing 9th-to-15th century Khmer hydraulic and architectural feats</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>VIP Pass Management</strong>
                                <span>Pre-registered multi-day Angkor passes eliminating ticket booth queues on arrival</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Tuk-Tuk & SUV Logistics</strong>
                                <span>Private open-air remork (tuk-tuk) temple hops paired with air-conditioned SUV course transfers</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Apsara Classical Dance</strong>
                                <span>Private performances of classical Khmer court dance at heritage venues in Siem Reap</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


 <section className="section" style={{ backgroundColor: 'var(--color-primary)', paddingTop: '6rem', paddingBottom: '6rem' }}>
 <div className="container">
 <h2 className="text-center" style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.5rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '2rem' }}>Curated Cultural Experiences</h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '4rem' }}>
 {articles.map((exp: any, index: number) => (
 <Link key={index} href={`/destinations/cambodia/${exp.slug}/`} className="ags-card-link">
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
 <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F8FAFC', opacity: 0.8, marginBottom: '1.5rem', fontWeight: 500 }}>Cultural Experience</h3>
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
 <Link href="/quote/" className="btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}>Start Planning Your Cultural Journey</Link>
 </div>
 </section>
 </div>
 );
}

