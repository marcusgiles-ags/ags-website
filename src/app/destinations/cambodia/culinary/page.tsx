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
 title: { absolute: "Fine Dining & Street Food in Cambodia | Culinary Golf Tours" },
 description: "Savor Khmer cuisine on our Cambodia golf tours. Enjoy exclusive dining, from Champagne breakfasts at Angkor Wat to Cuisine Wat Damnak.",

    robots: { index: false, follow: true },
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/destinations/cambodia/culinary/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Fine Dining & Street Food in Cambodia | Culinary Golf Tours" },
        description: "Savor Khmer cuisine on our Cambodia golf tours. Enjoy exclusive dining, from Champagne breakfasts at Angkor Wat to Cuisine Wat Damnak.",
        url: "https://www.asiagolfspecialists.com/destinations/cambodia/culinary/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/destinations/cambodia/hero/cambodia-angkor-wat-majestic-hero.webp",
            width: 1200,
            height: 630,
            alt: "Cambodia culinary experiences — Khmer cuisine and fine dining",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Fine Dining & Street Food in Cambodia | Culinary Golf Tours" },
        description: "Savor Khmer cuisine on our Cambodia golf tours. Enjoy exclusive dining, from Champagne breakfasts at Angkor Wat to Cuisine Wat Damnak.",
        images: ["https://www.asiagolfspecialists.com/images/destinations/cambodia/hero/cambodia-angkor-wat-majestic-hero.webp"],
    },
};

export default async function CambodiaCulinary() {
 const articles = getArticles('cambodia', 'culinary');

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
      "name": "Culinary Experiences",
      "item": "https://www.asiagolfspecialists.com/destinations/cambodia/culinary/"
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
                        src="/images/destinations/cambodia/culinary/cambodia-culinary-high-end-experience.webp" 
                        alt="Cambodia Culinary" 
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
 The Aromatic <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Wonder</span>
 </h1>
 <p style={{ fontSize: '1.25rem', color: 'rgba(248, 250, 252, 0.7)', lineHeight: 1.6, margin: '0 auto', maxWidth: '800px' }} itemProp="description" id="exec-summary">
 Often overshadowed by its neighbors, Cambodian cuisine is a hidden gem. Less fiery than Thai, but profound in its use of fragrant Kroeung pastes and rich Prahok.
 </p>
 </div>
 </header>

 {/* Table Section */}
 <section className="section" style={{ backgroundColor: 'var(--color-primary)', paddingTop: '6rem', paddingBottom: '0' }}>
 <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
 <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
 <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 700, color: '#D4AF37', marginBottom: '1rem' }}>Cambodia's Culinary Blueprint</h2>
 <p style={{ color: 'rgba(248, 250, 252, 0.7)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>An introduction to the complex flavors of the Khmer Empire.</p>
 </div>

 <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.2)', backgroundColor: 'rgba(5, 11, 26, 0.5)' }}>
 <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
 <thead>
 <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.2)', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
 <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Region</th>
 <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Primary Flavor Profile</th>
 <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Key Ingredients</th>
 <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Must-Try Experience</th>
 </tr>
 </thead>
 <tbody>
 <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>Siem Reap</strong></td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Aromatic, Herbal, Earthy</td>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Lemongrass, turmeric, fresh lake fish</td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Fish Amok, private temple dining</td>
 </tr>
 <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>Phnom Penh</strong></td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>French-Khmer Fusion, Cosmopolitan</td>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Baguettes, beef, rich broths</td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Sora skybar views, fine dining at Rosewood</td>
 </tr>
 <tr>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>Kampot / Kep</strong></td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Pungent, Peppery, Coastal Fresh</td>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Kampot pepper, blue crab</td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Kep crab market, pepper plantation lunches</td>
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
                            Cambodia Gastronomy
                        </h2>
                        <p style={{ color: 'rgba(248,250,252,0.7)', fontSize: '1.05rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.7 }}>
                            Cambodian gastronomy is experiencing a dynamic renaissance, blending centuries-old royal Khmer recipes with French Indochinese technique. The dining scene in Siem Reap and Phnom Penh surprises international travelers with its delicate use of kroeung spice pastes, fresh freshwater fish, and world-famous Kampot pepper.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>Khmer Fine Dining Pioneers</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                Cuisine Wat Damnak in Siem Reap (pioneered by Chef Joannès Rivière, World's 50 Best recognized) presenting inventive seasonal tasting menus.
                            </p>
                        </div>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>Kampot Pepper & Coastal Seafood</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                Kep flower crab stir-fried with fresh green Kampot peppercorns, Mekong giant river prawns, and fragrant amok fish steamed in banana leaves.
                            </p>
                        </div>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>French-Indochinese Heritage</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                Refined colonial bistros in Phnom Penh serving classic duck confit and dry-aged steaks alongside local craft cocktails.
                            </p>
                        </div>
                    </div>

                    <div style={{ backgroundColor: 'rgba(2, 6, 23, 0.9)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '8px', padding: '2rem' }}>
                        <h4 style={{ color: '#D4AF37', fontSize: '1.2rem', marginBottom: '1.25rem', fontFamily: 'var(--font-primary-serif)' }}>At a Glance: Field Logistics &amp; Travel Standards</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', color: 'rgba(248,250,252,0.85)', fontSize: '0.95rem' }}>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Produce Standards</strong>
                                <span>Locally sourced organic vegetables from community farms surrounding Siem Reap</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Private Temple Dinners</strong>
                                <span>Exclusive candlelit dinners staged within private heritage pavilions near the temples</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Hygiene & Quality</strong>
                                <span>All AGS dining partners strictly vetted for 5-star international food safety standards</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Sommelier Pairings</strong>
                                <span>Extensive French and New World wine cellars maintained at partner properties</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


 <section className="section" style={{ backgroundColor: 'var(--color-primary)', paddingTop: '6rem', paddingBottom: '6rem' }}>
 <div className="container">
 <h2 className="text-center" style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.5rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '2rem' }}>Curated Culinary Experiences</h2>
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
 <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F8FAFC', opacity: 0.8, marginBottom: '1.5rem', fontWeight: 500 }}>Culinary Experience</h3>
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
 <Link href="/quote/" className="btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 2.5rem' }}>Start Planning Your Culinary Journey</Link>
 </div>
 </section>
 </div>
 );
}

