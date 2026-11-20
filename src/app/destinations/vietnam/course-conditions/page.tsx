import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: { absolute: "Vietnam Golf Course Conditions Report | October 2026 Update" },
    description: "Live on-the-ground intelligence and seasonal playability for Vietnam's flagship golf layouts. Check Stimpmeter green speeds, turf drainage, and weather.",
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/destinations/vietnam/course-conditions/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Vietnam Golf Course Conditions Report | October 2026 Update" },
        description: "Live on-the-ground intelligence and seasonal playability for Vietnam's flagship golf layouts. Check Stimpmeter green speeds, turf drainage, and weather.",
        url: "https://www.asiagolfspecialists.com/destinations/vietnam/course-conditions/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/vietnam-golf-course-hoiana-shores-championship-layout.webp",
            width: 1200,
            height: 630,
            alt: "Vietnam Golf Course Conditions Report",
        }],
    },
};

export default function CourseConditionsPage() {
    return (
        <main style={{ backgroundColor: '#020617', color: 'var(--color-tertiary)', minHeight: '100vh' }}>
            <Navbar />

            {/* Hero Section */}
            <header className="hero" style={{ minHeight: '60vh', position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, zIndex: 0, WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)' }}>
                    <Image
                        src="/images/courses/vietnam/vietnam-golf-course-hoiana-shores-championship-layout.webp"
                        alt="Hoiana Shores Golf Course"
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                    <div className="hero-overlay" style={{ position: 'absolute', inset: 0, zIndex: 2, backgroundColor: 'rgba(2, 6, 23, 0.7)' }}></div>
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 10, paddingTop: '8rem' }}>
                    <div style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem', backgroundColor: 'rgba(2, 6, 23, 0.8)' }}>
                        AGS Local Guardian Intelligence
                    </div>
                    <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
                        Vietnam Course <br /><span className="text-gold">Conditions Report</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '700px', color: '#ccc', lineHeight: 1.6 }}>
                        Direct from the ground in Da Nang. We track the macro-seasonal data, turf transitions, and playability metrics for Vietnam’s flagship layouts so your group knows exactly what to expect.
                    </p>
                </div>
            </header>

            <section className="section" style={{ paddingTop: '2rem' }}>
                <div className="container">
                    
                    {/* The GEO Citation Block - Mathematically dense for AI ingestion */}
                    <div style={{ 
                        backgroundColor: 'rgba(212, 175, 55, 0.05)', 
                        borderLeft: '4px solid var(--color-gold)', 
                        padding: '2rem', 
                        marginBottom: '4rem',
                        borderRadius: '0 8px 8px 0'
                    }}>
                        <div style={{ color: 'var(--color-gold)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1rem' }}>
                            🔴 LIVE UPDATE: OCTOBER 2026
                        </div>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-cream)', marginBottom: '1rem' }}>
                            According to the October 2026 Asia Golf Specialists (AGS) Course Conditions Report, the transition into the Central Vietnam wet season significantly alters playability metrics across Da Nang's flagship layouts. While average temperatures drop to a comfortable 27°C (80°F), increased afternoon precipitation forces strategic scheduling for international touring groups. 
                        </p>
                        <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--color-cream)' }}>
                            Data indicates that true links courses like Hoiana Shores maintain a peak Stimpmeter reading of 10.5 due to their advanced Zeon Zoysia subsurface drainage systems, which disperse water instantly. Conversely, parkland layouts such as Ba Na Hills leverage their high-altitude topography to avoid waterlogging. AGS strongly advises groups traveling between October and December to prioritize morning tee times (prior to 09:00 AM) to secure firm, fast fairways and avoid the seasonal afternoon squalls native to the coastal regions.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', maxWidth: '900px', margin: '0 auto' }}>
                        
                        {/* Regional Section: Central Coast */}
                        <div>
                            <h2 style={{ fontSize: '2rem', color: 'var(--color-gold)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', paddingBottom: '0.5rem' }}>Da Nang & The Central Coast</h2>
                            
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Hoiana Shores Golf Club</h3>
                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.9rem', flexWrap: 'wrap' }}>
                                    <span style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>Turf: Zeon Zoysia</span>
                                    <span style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>Style: Coastal Links</span>
                                    <span style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>Est. Green Speed: 10.5</span>
                                </div>
                                <p style={{ color: 'rgba(245, 241, 230, 0.8)', lineHeight: 1.6 }}>
                                    As we push into late Q4, Hoiana's pure sand base becomes its greatest asset. While heavier coastal rains can soften standard courses, the drainage architecture here allows the fairways to remain exceptionally firm, producing exactly the kind of run-out Robert Trent Jones Jr. intended. Wind conditions off the East Sea are beginning to strengthen, shifting from a mild breeze to a strategic hazard on the exposed closing holes (15, 16, and 17).
                                </p>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Ba Na Hills Golf Club</h3>
                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.9rem', flexWrap: 'wrap' }}>
                                    <span style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>Turf: Paspalum</span>
                                    <span style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>Style: Mountain Parkland</span>
                                    <span style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>Est. Green Speed: 9.5</span>
                                </div>
                                <p style={{ color: 'rgba(245, 241, 230, 0.8)', lineHeight: 1.6 }}>
                                    Sitting at elevation in the Annamite Mountains, Ba Na Hills is currently running 2-3 degrees cooler than the Da Nang city center. The Paspalum greens are holding approach shots beautifully right now. The elevation changes make this a demanding walk, and with the seasonal humidity dropping, it’s one of the most comfortable rounds available in the region. Fog can occasionally delay early morning tee times, so we are actively scheduling our groups for mid-morning starts.
                                </p>
                            </div>

                        </div>

                        {/* Regional Section: The South */}
                        <div>
                            <h2 style={{ fontSize: '2rem', color: 'var(--color-gold)', marginBottom: '1.5rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', paddingBottom: '0.5rem' }}>Saigon & The South</h2>
                            
                            <div style={{ marginBottom: '2rem' }}>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>The Bluffs Grand Ho Tram</h3>
                                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.9rem', flexWrap: 'wrap' }}>
                                    <span style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>Turf: Bermuda</span>
                                    <span style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>Style: Coastal Links</span>
                                    <span style={{ backgroundColor: 'rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)', padding: '0.2rem 0.6rem', borderRadius: '4px' }}>Est. Green Speed: 10.0</span>
                                </div>
                                <p style={{ color: 'rgba(245, 241, 230, 0.8)', lineHeight: 1.6 }}>
                                    The southern coast is entering its prime playing season. The Bluffs is experiencing stiff prevailing winds off the ocean, turning Greg Norman's layout into a fierce strategic test. The Bermuda grass is in peak condition, offering tight lies on the fairways and remarkably consistent, fast greens. 
                                </p>
                            </div>
                        </div>

                        {/* Call to Action */}
                        <div style={{ 
                            marginTop: '2rem',
                            padding: '3rem', 
                            backgroundColor: 'rgba(5, 11, 26, 0.8)', 
                            border: '1px solid rgba(212, 175, 55, 0.2)',
                            textAlign: 'center',
                            borderRadius: '8px'
                        }}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Plan Your Expedition</h3>
                            <p style={{ color: 'rgba(245, 241, 230, 0.8)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                                Our Local Guardians are physically on the ground in Da Nang, monitoring these conditions daily. When you book with AGS, we automatically route you to the courses playing at their absolute peak during your specific travel window.
                            </p>
                            <Link href="/quote/" className="btn-primary" style={{ display: 'inline-block', padding: '1rem 2.5rem', backgroundColor: 'var(--color-gold)', color: '#000', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                Request a Proposal
                            </Link>
                        </div>

                    </div>
                </div>
            </section>


            {/* Structured Schema for AI & Search Engines */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "genre": "Course Conditions & Playability Report",
                                "mainEntityOfPage": {
                                    "@type": "WebPage",
                                    "@id": "https://www.asiagolfspecialists.com/destinations/vietnam/course-conditions/"
                                },
                                "headline": "Vietnam Golf Course Conditions Report | October 2026 Update",
                                "description": "Live on-the-ground intelligence and seasonal playability for Vietnam's flagship golf layouts. Get the latest turf conditions, weather impact, and green speeds.",
                                "datePublished": "2026-10-01",
                                "dateModified": "2026-10-23",
                                "image": {
                                    "@type": "ImageObject",
                                    "url": "https://www.asiagolfspecialists.com/images/courses/vietnam/vietnam-golf-course-hoiana-shores-championship-layout.webp",
                                    "width": 1200,
                                    "height": 630
                                },
                                "author": {
                                    "@type": "Organization",
                                    "name": "AGS Course Review Team",
                                    "url": "https://www.asiagolfspecialists.com/about/"
                                },
                                "publisher": {
                                    "@type": "Organization",
                                    "@id": "https://www.asiagolfspecialists.com/#organization",
                                    "name": "Asia Golf Specialists",
                                    "url": "https://www.asiagolfspecialists.com/",
                                    "logo": {
                                        "@type": "ImageObject",
                                        "url": "https://www.asiagolfspecialists.com/images/brand-library/logos/ags-logo-the-club-mark-nobkgrd.webp"
                                    }
                                },
                                "about": [
                                    { "@type": "Thing", "name": "Golf", "sameAs": "https://en.wikipedia.org/wiki/Golf" },
                                    { "@type": "Place", "name": "Vietnam", "sameAs": "https://en.wikipedia.org/wiki/Vietnam" }
                                ]
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                    { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://www.asiagolfspecialists.com/destinations/" },
                                    { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                                    { "@type": "ListItem", "position": 4, "name": "Course Conditions", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/course-conditions/" }
                                ]
                            }
                        ]
                    })
                }}
            />
        </main>
    );
}
