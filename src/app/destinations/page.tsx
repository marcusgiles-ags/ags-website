import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/HeroSlider";
import GuideDownloadCTA from "@/components/GuideDownloadCTA";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
    title: { absolute: "Golf Destinations | Vietnam, Thailand & Cambodia" },
    description: "Curated golf destinations across Vietnam, Thailand, and Cambodia. Championship courses, luxury resorts, and bespoke itineraries from Asia Golf Specialists.",
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/destinations/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Golf Destinations | Vietnam, Thailand & Cambodia" },
        description: "Curated golf destinations across Vietnam, Thailand, and Cambodia. Championship courses, luxury resorts, and bespoke itineraries from Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/destinations/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/destinations/vietnam/hero/vietnam-north-rice-terraces-hero.webp",
            width: 1200,
            height: 630,
            alt: "Golf Destinations in Southeast Asia — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Golf Destinations | Vietnam, Thailand & Cambodia" },
        description: "Curated golf destinations across Vietnam, Thailand, and Cambodia. Championship courses, luxury resorts, and bespoke itineraries from Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/destinations/vietnam/hero/vietnam-north-rice-terraces-hero.webp"],
    },
};


export default function DestinationsHub() {
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
            { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://www.asiagolfspecialists.com/destinations/" }
        ]
    };

 const destinations = [
 {
 id: "vietnam",
 title: "Vietnam",
 subtitle: "Coastal Masterpieces & Culinary Excellence",
 description: "Golf Tour Vietnam & Thailand: Experience dramatic coastal layouts & rugged mountain designs. Asia's most explosive new golf destination!",
 link: "/destinations/vietnam/",
 image: "/images/destinations/vietnam/hero/vietnam-north-rice-terraces-hero.webp",
 
 
 },
 {
 id: "thailand",
 title: "Thailand",
 subtitle: "Elite Tracks & Absolute Relaxation",
 description: "Experience championship golf in Thailand! From Bangkok's energy to Phuket's serene fairways, enjoy world-class hospitality.",
 link: "/destinations/thailand/",
 image: "/images/destinations/thailand/hero/thailand-travel-brochure-hero.webp",
 
 
 },
 {
 id: "cambodia",
 title: "Cambodia",
 subtitle: "Evocative Retreats & Modern Fairways",
 description: "Experience luxury golf tours in Vietnam & Thailand. Play world-class courses & explore ancient wonders like Angkor Wat.",
 link: "/destinations/cambodia/",
 image: "/images/destinations/cambodia/hero/cambodia-angkor-wat-majestic-hero.webp",
 
 
 }
 ];

 return (
 <div style={{ backgroundColor: '#020617', minHeight: '100vh', color: '#F8FAFC' }}>
 <Navbar />
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

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
 <HeroSlider
 images={[
 "/images/destinations/vietnam/hero/vietnam-north-rice-terraces-hero.webp",
 "/images/destinations/thailand/hero/thailand-travel-brochure-hero.webp",
 "/images/destinations/cambodia/hero/cambodia-angkor-wat-majestic-hero.webp"
 ]}
 objectPosition={[
 "center",
 "center",
 "center 25%" // Shifts focus down to reveal the top of the temple
 ]}
 />
 <div className="hero-overlay" style={{ position: 'absolute', inset: 0 }}></div>
 </div>
 <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '800px', paddingTop: '15vh' }}>
 <span style={{ color: '#D4AF37', letterSpacing: '0.25em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block', fontWeight: 600 }}>The AGS Collection</span>
 <h1 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(3.5rem, 6vw, 5rem)', marginBottom: '1.5rem', color: '#F8FAFC', lineHeight: 1.1, fontWeight: 700 }}>
 Elite <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Destinations</span>
 </h1>
 <p style={{ fontSize: '1.25rem', color: 'rgba(248, 250, 252, 0.7)', lineHeight: 1.6, margin: '0 auto', maxWidth: '600px' }} itemProp="description" id="exec-summary">
 Curated regions featuring Asia's most exclusive, manicured layouts and 5-star recovery. Choose your next grand journey.
 </p>
 </div>
 </header>

            <section className="section" style={{ padding: '4rem 0 2rem' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                    <GuideDownloadCTA />
                </div>
            </section>

 {/* Destinations Grid */}
 <main className="section" style={{ padding: '0 0 12rem 0', position: 'relative', zIndex: 10 }}>
 <div className="container">
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem' }}>
 {destinations.map((dest) => (
 <Link key={dest.id} href={dest.link} className="ags-card-link">
 <div className="ags-card">
 <div className="ags-card-image-container">
 <Image
 src={dest.image}
 alt={dest.title}
 className="ags-card-image"
 fill
 sizes="(max-width: 768px) 100vw, 33vw"
 style={{ objectFit: 'cover' }}
 />
 <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5, 11, 26, 1) 0%, transparent 70%)' }}></div>
 </div>

 <div className="ags-card-content">
 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
 <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '2.5rem', color: '#D4AF37', margin: 0, fontWeight: 700 }}>{dest.title}</h2>
 
 </div>
 <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F8FAFC', opacity: 0.8, marginBottom: '1.5rem', fontWeight: 500 }}>{dest.subtitle}</h3>
 <p style={{ fontSize: '1rem', color: 'rgba(248, 250, 252, 0.6)', lineHeight: 1.6, marginBottom: '2.5rem' }}>
 {dest.description}
 </p>

 <div className="ags-card-footer">
 <span>Explore Region</span>
 <span className="ags-card-cta-arrow">→</span>
 </div>
 </div>
 </div>
 </Link>
 ))}
 </div>
 </div>
 </main>

 {/* CTA Section */}
 <section className="section" style={{ textAlign: 'center', position: 'relative', overflow: 'hidden', padding: '10rem 0', borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}>
 <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.05) 0%, transparent 60%)' }}></div>
 <div className="container" style={{ position: 'relative', zIndex: 10, maxWidth: '800px' }}>
 <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '3.5rem', marginBottom: '1.5rem', color: '#F8FAFC', fontWeight: 700 }}>
 Not Sure Where to <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Start?</span>
 </h2>
 <p style={{ fontSize: '1.25rem', color: 'rgba(248, 250, 252, 0.7)', lineHeight: 1.6, marginBottom: '3rem', margin: '0 auto 3rem auto', maxWidth: '600px' }}>
 Let our Local Guardians orchestrate the perfect itinerary based on your group's preferences.
 </p>
 <Link href="/quote/" className="btn-primary">Speak to a Specialist</Link>
 </div>
 </section>
 </div>
 );
}

