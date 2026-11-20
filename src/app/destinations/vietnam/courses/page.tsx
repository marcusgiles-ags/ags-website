import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: { absolute: "Premium Golf Courses in Vietnam | Find Your Fairway" },
    description: "Vietnam championship golf courses -- Hoiana Shores, Ba Na Hills, Montgomerie Links, BRG Da Nang, and more. Curated course profiles by Asia Golf Specialists.",

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Premium Golf Courses in Vietnam | Find Your Fairway" },
        description: "Vietnam championship golf courses -- Hoiana Shores, Ba Na Hills, Montgomerie Links, BRG Da Nang, and more. Curated course profiles by Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/destinations/vietnam/courses/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam/vietnam-golf-course-hoiana-shores-championship-layout.webp",
            width: 1200,
            height: 630,
            alt: "Vietnam championship golf courses -- Hoiana Shores and beyond",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Premium Golf Courses in Vietnam | Find Your Fairway" },
        description: "Vietnam championship golf courses -- Hoiana Shores, Ba Na Hills, Montgomerie Links, BRG Da Nang, and more. Curated course profiles by Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam/vietnam-golf-course-hoiana-shores-championship-layout.webp"],
    },
};

export default function VietnamCourses() {
    return (
        <div style={{ backgroundColor: '#020617', minHeight: '100vh', color: '#F8FAFC' }}>
            <Navbar />

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
                        src="/images/destinations/vietnam/courses/vietnam-golf-course-hero-v2.webp"
                        alt="Vietnam Courses"
                        fill
                        priority
                        style={{ 
                            objectFit: 'cover',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
                            maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)'
                        }}
                        sizes="100vw"
                    />
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '800px', paddingTop: '15vh' }}>
                    <span style={{ color: '#D4AF37', letterSpacing: '0.25em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block', fontWeight: 600 }}>The AGS Collection</span>
                    <h1 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(3.5rem, 6vw, 5rem)', marginBottom: '1.5rem', color: '#F8FAFC', lineHeight: 1.1, fontWeight: 700 }}>
                        Vietnam's <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Championship Layouts</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'rgba(248, 250, 252, 0.7)', lineHeight: 1.6, margin: '0 auto', maxWidth: '800px' }} itemProp="description" id="exec-summary">
                        Explore our curated selection of championship layouts below.
                    </p>
    <div style={{ marginTop: '2rem', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <Link href="/destinations/vietnam/course-conditions/" className="btn-secondary" style={{ display: 'inline-block', padding: '0.75rem 2rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.9rem', backgroundColor: 'rgba(5,11,26,0.8)' }}>
            View Live Course Conditions Report (Oct 2026)
        </Link>
    </div>
                </div>
            </header>

            {/* Table Section */}
            <section className="section" style={{ backgroundColor: '#020617', paddingTop: '6rem', paddingBottom: '0' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                        <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 700, color: '#D4AF37', marginBottom: '1rem' }}>Vietnam Golf Blueprint</h2>
                        <p style={{ color: 'rgba(248, 250, 252, 0.7)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>A strategic overview of Vietnam's premium golfing regions.</p>
                    </div>

                    <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.2)', backgroundColor: 'rgba(5, 11, 26, 0.5)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.2)', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
                                    <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Region</th>
                                    <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Marquee Courses</th>
                                    <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Style</th>
                                    <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Ideal Season</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>Central Coast (Da Nang)</strong></td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Hoiana Shores, BRG Da Nang, Laguna Lang Co</td>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Coastal Links, Parkland</td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Feb - Aug</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>South (HCM / Ho Tram)</strong></td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>The Bluffs, Tan Son Nhat, Royal Long An</td>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Dunes, Urban Resort</td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Nov - Apr</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>North (Hanoi / Ha Long)</strong></td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>FLC Ha Long, Sky Lake, Heron Lake</td>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Mountain, Lake, Karst</td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Oct - Apr</td>
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
                            Vietnam Courses
                        </h2>
                        <p style={{ color: 'rgba(248,250,252,0.7)', fontSize: '1.05rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.7 }}>
                            Vietnam features 35 championship golf courses across three climatic corridors. From Robert Trent Jones Jr.'s authentic coastal links at Hoiana Shores to Luke Donald's 18-hole floodlit mountain layout at Ba Na Hills and Greg Norman's World Top 100 clifftop masterpiece at The Bluffs Grand Ho Tram, each region presents a distinct agronomic and architectural challenge.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>Central Coast Corridor</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                Hoiana Shores (links), Ba Na Hills (mountain night golf), Montgomerie Links, and Laguna Lang Co within a 60-minute radius of Hoi An villas.
                            </p>
                        </div>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>Southern Dunes & Metro</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                The Bluffs Grand Ho Tram (50m coastal dunes) paired with premier Ho Chi Minh City parkland courses and luxury transfers.
                            </p>
                        </div>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>Northern Karst & Lake</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                FLC Ha Long Bay (cliffside UNESCO views) and BRG King's Island (island greens) best played October through April.
                            </p>
                        </div>
                    </div>

                    <div style={{ backgroundColor: 'rgba(2, 6, 23, 0.9)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '8px', padding: '2rem' }}>
                        <h4 style={{ color: '#D4AF37', fontSize: '1.2rem', marginBottom: '1.25rem', fontFamily: 'var(--font-primary-serif)' }}>At a Glance: Field Logistics &amp; Travel Standards</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', color: 'rgba(248,250,252,0.85)', fontSize: '0.95rem' }}>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Green Fee Benchmark</strong>
                                <span>USD $120–$250 (includes mandatory private caddie & shared cart)</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Caddie Gratuity Protocol</strong>
                                <span>USD $15–$20 (350k–500k VND) per round paid directly to caddie</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Turf Specifications</strong>
                                <span>Zeon Zoysia (coastal links), SeaIsle Paspalum (mountain & dunes)</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Night Golf Availability</strong>
                                <span>Ba Na Hills (Da Nang — 18 floodlit holes playable until 10:00pm)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="section" style={{ backgroundColor: '#020617', paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <h2 className="text-center" style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.5rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '0.75rem' }}>Vietnam Course <span style={{ color: '#D4AF37' }}>Selection</span></h2>
                    <p className="text-center" style={{ color: 'rgba(248,250,252,0.6)', marginBottom: '3rem', fontSize: '1.05rem' }}>35 championship layouts across Central, South &amp; North Vietnam</p>
                    {['Central Coast', 'South', 'North'].map((region, idx) => {
                        let regionCourses = courses;
                        if (region === 'Central Coast') regionCourses = courses.slice(0, 10);
                        if (region === 'South') regionCourses = courses.slice(10, 21);
                        if (region === 'North') regionCourses = courses.slice(21);

                        return (
                            <div key={region} style={{ marginBottom: idx === 2 ? '0' : '5rem' }}>
                                <h3 style={{ 
                                    fontFamily: 'var(--font-primary-serif)', 
                                    fontSize: '2rem', 
                                    fontWeight: 700, 
                                    color: '#D4AF37', 
                                    marginBottom: '2rem',
                                    borderBottom: '1px solid rgba(212, 175, 55, 0.2)',
                                    paddingBottom: '1rem' 
                                }}>
                                    {region} Region
                                </h3>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '4rem' }}>
                                    {regionCourses.map(course => {
                                        const isLinked = [
                                            'ba-na-hills', 'brg-da-nang-nicklaus', 'brg-da-nang-norman', 'dragon-golf-links',
                                            'golden-sands', 'hoiana-shores', 'kn-golf-links', 'laguna-lang-co', 'montgomerie-links',
                                            'vinpearl-nam-hoi-an', 'long-thanh', 'royal-long-an', 'taekwang-jeongsan', 'tan-son-nhat',
                                            'the-bluffs-ho-tram', 'eschuri-vung-bau', 'chi-linh-golf', 'flc-ha-long-bay', 'heron-lake',
                                            'sapa-grand', 'silk-path-dong-trieu', 'sky-lake', 'thanh-lanh-valley', 'vgcc', 'kings-island', 'legend-hill',
                                            'sea-links-golf-club', 'pga-ocean-course', 'west-lakes-golf-club', 'nara-binh-tien', 'phoenix-golf-resort',
                                            'van-tri-golf-club', 'twin-doves', 'sky-lake-lake', 'sky-lake-sky'
                                          ].includes(course.slug);
                                        const linkPath = `/courses/vietnam/${course.slug}/`;
                                        
                                        const cardContent = (
                                            <div className="ags-card">
                                                <div className="ags-card-image-container" style={{ height: '300px' }}>
                                                    <Image
                                                        src={course.cardImage}
                                                        alt={course.name}
                                                        className="ags-card-image"
                                                        fill
                                                        sizes="(max-width: 768px) 100vw, 33vw"
                                                        style={{ objectFit: 'cover' }}
                                                    />
                                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5, 11, 26, 1) 0%, transparent 70%)' }}></div>
                                                </div>
                                                <div className="ags-card-content">
                                                    <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.75rem', color: '#D4AF37', margin: '0 0 1rem', fontWeight: 700, lineHeight: 1.3 }}>{course.name}</h2>
                                                    <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F8FAFC', opacity: 0.8, marginBottom: '1.5rem', fontWeight: 500 }}>Championship Course</h3>
                                                    <p style={{ fontSize: '1rem', color: 'rgba(248, 250, 252, 0.6)', lineHeight: 1.6, marginBottom: '2.5rem' }}>{course.desc}</p>
                                                    <div className="ags-card-footer" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', fontWeight: 600 }}>
                                                        {isLinked ? (
                                                            <><span>Explore Course</span><span className="ags-card-cta-arrow">- </span></>
                                                        ) : (
                                                            <span>AGS Selection</span>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );

                                        return isLinked ? (
                                            <Link key={course.slug} href={linkPath} className="ags-card-link">
                                                {cardContent}
                                            </Link>
                                        ) : (
                                            <div key={course.slug} className="ags-card-wrapper" style={{ opacity: 0.9 }}>
                                                {cardContent}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "CollectionPage",
                        "@id": "https://www.asiagolfspecialists.com/destinations/vietnam/courses/",
                        "name": "Premium Golf Courses in Vietnam | Asia Golf Specialists",
                        "url": "https://www.asiagolfspecialists.com/destinations/vietnam/courses/",
                        "publisher": {
                            "@type": "TravelAgency",
                            "@id": "https://www.asiagolfspecialists.com/#organization",
                            "name": "Asia Golf Specialists",
                            "url": "https://www.asiagolfspecialists.com/",
                            "image": "https://www.asiagolfspecialists.com/images/brand-library/logos/ags-logo-the-club-mark-nobkgrd.webp",
                            "priceRange": "$$$$",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "27 Nguyen Phan Vinh",
                                "addressLocality": "Hoi An",
                                "addressRegion": "Da Nang",
                                "postalCode": "550000",
                                "addressCountry": "VN"
                            }
                        }
                    },
                    {
                        "@type": "ItemList",
                        "name": "Vietnam Championship Golf Courses",
                        "itemListElement": courses.map((c, idx) => ({
                            "@type": "ListItem",
                            "position": idx + 1,
                            "item": {
                                "@type": "GolfCourse",
                                "name": c.name,
                                "description": c.desc,
                                "url": `https://www.asiagolfspecialists.com/courses/vietnam/${c.slug}/`,
                                "image": `https://www.asiagolfspecialists.com${c.cardImage}`,
                                "address": { "@type": "PostalAddress", "addressCountry": "VN" }
                            }
                        }))
                    },
                    {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                            { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://www.asiagolfspecialists.com/destinations/" },
                            { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/" },
                            { "@type": "ListItem", "position": 4, "name": "Courses", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/courses/" }
                        ]
                    }
                ]
            }) }} />
        </div>
    );
}

const courses: { name: string; slug: string; desc: string; cardImage: string }[] = [
    // ---- Central Vietnam --------------------------------------------------------------------------------------------------------------
    { name: "Ba Na Hills Golf Club", slug: "ba-na-hills", cardImage: "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-da-nang-vietnam-1.webp", desc: "Designed by Luke Donald and managed by IMG, known for spectacular night golf amidst lush Da Nang hills." },
    { name: "BRG Da Nang Golf Resort (Nicklaus Course)", slug: "brg-da-nang-nicklaus", cardImage: "/images/courses/vietnam/brg-da-nang-nicklaus/brg-da-nang-golf-resort-nicklaus-water-feature-3.webp", desc: "Asia's first true bulkhead-style course with modern, American-style layouts." },
    { name: "BRG Da Nang Golf Resort (Norman Course)", slug: "brg-da-nang-norman", cardImage: "/images/courses/vietnam/brg-da-nang-norman/brg-da-nang-golf-resort-coastal-dunes-3.webp", desc: "Classic links utilizing natural rugged sand dunes and undulating greens." },
    { name: "Golden Sands Golf Resort", slug: "golden-sands", cardImage: "/images/courses/vietnam/golden-sands/golden-sands-golf-resort-bunkers-4.webp", desc: "Premier coastal course emphasizing the links philosophy with firm surfaces and ocean breezes." },
    { name: "Hoiana Shores Golf Club", slug: "hoiana-shores", cardImage: "/images/courses/vietnam/hoiana-shores/hoiana-shores-golf-club-coastal-vietnam-1.webp", desc: "Vietnam's first true links course by Robert Trent Jones Jr. directly on the East Sea." },
    { name: "KN Golf Links Cam Ranh", slug: "kn-golf-links", cardImage: "/images/courses/vietnam/kn-golf-links/kn-golf-links-cam-ranh-championship-5.webp", desc: "Greg Norman signature featuring massive dunes and Scottish-style links experience." },
    { name: "Laguna Golf Lang Co", slug: "laguna-lang-co", cardImage: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3.webp", desc: "Sir Nick Faldo's favourite design weaving through paddies, jungle, and beach." },
    { name: "Montgomerie Links Vietnam", slug: "montgomerie-links", cardImage: "/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-da-nang-1-hero.webp", desc: "Classic links anchor by Colin Montgomerie with a home-away-from-home atmosphere." },
    { name: "Vinpearl Golf Nam Hoi An", slug: "vinpearl-nam-hoi-an", cardImage: "/images/courses/vietnam/vinpearl-nam-hoi-an/vinpearl-golf-nam-hoi-an-dunes-fairway-2.webp", desc: "Resort course amidst rolling dunes with wide fairways and old-growth trees." },
    { name: "Nara Binh Tien Golf Club", slug: "nara-binh-tien", cardImage: "/images/courses/vietnam/nara-binh-tien/nara-binh-tien-beachfront-golf-hero.webp", desc: "An awe-inspiring coastal mountain layout combining natural beauty with championship golf." },
    // ---- South Vietnam ------------------------------------------------------------------------------------------------------------------
    { name: "Long Thanh Golf Resort", slug: "long-thanh", cardImage: "/images/courses/vietnam/long-thanh/long-thanh-golf-resort-vietnam-saigon-1.webp", desc: "Ron Fream's rolling terrain masterpiece with massive water hazards just outside Saigon." },
    { name: "Royal Long An Golf & Country Club", slug: "royal-long-an", cardImage: "/images/courses/vietnam/royal-long-an/royal-long-an-golf-country-club-vietnam-1.webp", desc: "Sustainability-focused Sir Nick Faldo design near Ho Chi Minh City." },
    { name: "Taekwang Jeongsan Country Club", slug: "taekwang-jeongsan", cardImage: "/images/courses/vietnam/taekwang-jeongsan/taekwang-jeongsan-country-club-vietnam-1.webp", desc: "A Ron Fream design uniquely accessible by private speedboat down the Saigon River." },
    { name: "Tan Son Nhat Golf Course", slug: "tan-son-nhat", cardImage: "/images/courses/vietnam/tan-son-nhat/tan-son-nhat-golf-course-vietnam-1.webp", desc: "A Nelson & Haworth 36-hole complex in the heart of Ho Chi Minh City, five minutes from the CBD." },
    { name: "Twin Doves Golf Club", slug: "twin-doves", cardImage: "/images/courses/vietnam/twin-doves/twin-doves-clubhouse-practice-green.webp", desc: "A tranquil 27-hole private estate - strategic design meets natural elegance just outside Ho Chi Minh City." },
    { name: "The Bluffs Grand Ho Tram", slug: "the-bluffs-ho-tram", cardImage: "/images/courses/vietnam/the-bluffs-ho-tram/the-bluffs-ho-tram-strip-vietnam-1.webp", desc: "Ranked Top 100 globally, a massive coastal sand dune masterpiece by Greg Norman." },
    { name: "Eschuri Vung Bau Golf Resort", slug: "eschuri-vung-bau", cardImage: "/images/courses/vietnam/eschuri-vung-bau/eschuri-vung-bau-golf-championship-hole-5.webp", desc: "Phu Quoc Island coastal masterpiece with raw, tropical beauty and ocean-front play." },
    { name: "Vietnam Golf & Country Club", slug: "vgcc", cardImage: "/images/courses/vietnam/vgcc/vgcc-1.webp", desc: "An oasis of tranquility just outside Ho Chi Minh City featuring 36 holes of classic parkland golf." },
    { name: "Sea Links Golf Club", slug: "sea-links-golf-club", cardImage: "/images/courses/vietnam/sea-links-golf-club/sea-links-golf-hero.webp", desc: "The most challenging links course in South Vietnam. A true test of golf with unmatched ocean views." },
    { name: "PGA Ocean Course NovaWorld", slug: "pga-ocean-course", cardImage: "/images/courses/vietnam/pga-ocean-course/pga-ocean-course-phan-thiet-herojpg.webp", desc: "Vietnam's first PGA-branded course. A Greg Norman masterpiece offering championship golf." },
    { name: "West Lakes Golf & Villas", slug: "west-lakes-golf-club", cardImage: "/images/courses/vietnam/west-lakes-golf-club/west-lakes-golf-long-an.webp", desc: "A premier Thomson Perrett design offering a tranquil and challenging escape." },
    // ---- North Vietnam ------------------------------------------------------------------------------------------------------------------
    { name: "Dragon Golf Links", slug: "dragon-golf-links", cardImage: "/images/courses/vietnam/dragon-golf-links/dragon-golf-links-championship-layout-3.webp", desc: "A sea-encroaching links-style course near Hai Phong offering a true coastal challenge." },
    { name: "Chi Linh Golf", slug: "chi-linh-golf", cardImage: "/images/courses/vietnam/chi-linh-golf/chi-linh-golf-resort-vietnam-1.webp", desc: "Northern Vietnam's most challenging course, set in a dramatic pine-forested valley." },
    { name: "FLC Ha Long Bay Golf Club", slug: "flc-ha-long-bay", cardImage: "/images/courses/vietnam/flc-ha-long-bay/flc-ha-long-bay-golf-club-vietnam-1.webp", desc: "Overlooking the UNESCO site, offering breathtaking views of limestone karsts." },
    { name: "Heron Lake Golf Course", slug: "heron-lake", cardImage: "/images/courses/vietnam/heron-lake/heron-lake-golf-course-vietnam-1.webp", desc: "A serene resort layout blending beautifully with natural wetlands north of Hanoi." },
    { name: "Sapa Grand Golf Course", slug: "sapa-grand", cardImage: "/images/courses/vietnam/sapa-grand/sapa-grand-golf-course-championship-5.webp", desc: "High-altitude marvel with dramatic elevation changes and mist-filled mountain valleys." },
    { name: "Silk Path Dong Trieu Golf", slug: "silk-path-dong-trieu", cardImage: "/images/courses/vietnam/silk-path-dong-trieu/silk-path-dong-trieu-golf-fairway-4.webp", desc: "Expansive 27-hole facility blending parkland and hill-style golf." },
    { name: "Sky Lake Resort & Golf Club", slug: "sky-lake", cardImage: "/images/courses/vietnam/sky-lake/sky-lake-lake-course-vietnam-1.webp", desc: "A massive 36-hole complex featuring dramatic topography and sweeping panoramic views." },
    { name: "Sky Lake Golf Club (Lake Course)", slug: "sky-lake-lake", cardImage: "/images/courses/vietnam/sky-lake-lake/sky-lake-lake-course-vietnam-1.webp", desc: "Public-access championship layout framed by dramatic limestone karsts and Van Son Lake." },
    { name: "Sky Lake Golf Club (Sky Course)", slug: "sky-lake-sky", cardImage: "/images/courses/vietnam/sky-lake-sky/sky-lake-sky-course-vietnam-1.webp", desc: "Ahn Moon Hwan mountain parkland layout featuring the iconic 'Dien Bien Phu' 15th hole." },
    { name: "Thanh Lanh Valley Golf & Resort", slug: "thanh-lanh-valley", cardImage: "/images/courses/vietnam/thanh-lanh-valley/thanh-lanh-valley-golf-resort-fairway-3.webp", desc: "Serene 'Swiss Alps' feel with a massive lake, towering mountains, and cool breezes." },
    { name: "King's Island Golf Resort", slug: "kings-island", cardImage: "/images/courses/vietnam/kings-island/kings-island-1.webp", desc: "A serene 54-hole island sanctuary accessed by speedboat, just an hour from Hanoi." },
    { name: "BRG Legend Hill Golf Resort", slug: "legend-hill", cardImage: "/images/courses/vietnam/legend-hill/legend-hill-1.webp", desc: "Vietnam's first Nicklaus Design course, famous for its innovative twin green concept." },
    { name: "Phoenix Golf Resort", slug: "phoenix-golf-resort", cardImage: "/images/courses/vietnam/phoenix-golf-resort/phoenix-golf-resort-hero.webp", desc: "A surreal 54-hole golf complex set amidst dramatic karst mountains. Truly a 'Halong Bay on Land'." },
    { name: "Van Tri Golf Club", slug: "van-tri-golf-club", cardImage: "/images/courses/vietnam/van-tri-golf-club/van-tri-golf-club-water.webp", desc: "Hanoi's most exclusive private golf estate. Designed by Peter Rousseau, offering an elite championship layout." }
];




