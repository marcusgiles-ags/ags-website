import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import fs from "fs";
import path from "path";

export const metadata = {
    title: { absolute: "67 Best Golf Courses in Vietnam, Thailand & Cambodia | AGS" },
    description: "Compare all 67 championship golf courses in Vietnam, Thailand & Cambodia — verified pars, architects, green-fee bands, and priority tee times for Aussie groups.",
    keywords: ["championship golf courses Southeast Asia", "golf courses Vietnam Da Nang", "golf courses Thailand Bangkok Hua Hin", "golf courses Cambodia Siem Reap", "luxury golf Asia"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/courses/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "67 Best Golf Courses in Vietnam, Thailand & Cambodia | AGS" },
        description: "Compare all 67 championship golf courses in Vietnam, Thailand & Cambodia — verified pars, architects, green-fee bands, and priority tee times for Aussie groups.",
        url: "https://www.asiagolfspecialists.com/courses/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/courses/vietnam-courses-lagunalang-09aerialfwsunrise.webp",
            width: 1200,
            height: 630,
            alt: "Laguna Golf Lang Co — Championship Course, Central Vietnam",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "67 Best Golf Courses in Vietnam, Thailand & Cambodia | AGS" },
        description: "Compare all 67 championship golf courses in Vietnam, Thailand & Cambodia — verified pars, architects, green-fee bands, and priority tee times for Aussie groups.",
        images: ["https://www.asiagolfspecialists.com/images/courses/vietnam-courses-lagunalang-09aerialfwsunrise.webp"],
    },
};

function getAllCoursesByCountry() {
    const countries = ['vietnam', 'thailand', 'cambodia'] as const;
    const coursesByCountry: Record<string, { title: string; url: string; slug: string }[]> = {
        vietnam: [],
        thailand: [],
        cambodia: []
    };

    for (const country of countries) {
        const countryDir = path.join(process.cwd(), 'src/data/courses', country);
        if (!fs.existsSync(countryDir)) continue;
        const files = fs.readdirSync(countryDir).filter(f => f.endsWith('.json'));

        for (const file of files) {
            const slug = file.replace(/\.json$/, '');
            let title = slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
            try {
                const parsed = JSON.parse(fs.readFileSync(path.join(countryDir, file), 'utf8'));
                if (parsed?.schema?.name) title = parsed.schema.name;
            } catch {
                // fallback to slug-derived title
            }
            coursesByCountry[country].push({ title, url: `/courses/${country}/${slug}/`, slug });
        }
        coursesByCountry[country].sort((a, b) => a.title.localeCompare(b.title));
    }
    return coursesByCountry;
}

export default function Courses() {
    const allCourses = getAllCoursesByCountry();
    const totalCourseCount = allCourses.vietnam.length + allCourses.thailand.length + allCourses.cambodia.length;

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
                    backgroundImage: 'url("/images/courses/vietnam-courses-lagunalang-09aerialfwsunrise.webp")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
                    zIndex: 0
                }}>
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '800px', paddingTop: '25vh' }}>
                    <span style={{ color: '#D4AF37', letterSpacing: '0.25em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block', fontWeight: 600 }}>The AGS Collection</span>
                    <h1 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(3.5rem, 6vw, 5rem)', marginBottom: '1.5rem', color: '#F8FAFC', lineHeight: 1.1, fontWeight: 700 }}>
                        The <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Course Directory</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'rgba(248, 250, 252, 0.7)', lineHeight: 1.6, margin: '0 auto', maxWidth: '800px' }} itemProp="description" id="exec-summary">
                        Explore highlights from our championship portfolio across Southeast Asia. While we partner with dozens more tracks, these are the layouts engineered for your ultimate golf escape.
                    </p>
                </div>
            </header>

            {/* Table Section */}
            <section className="section" style={{ backgroundColor: '#020617', paddingTop: '6rem', paddingBottom: '0' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                        <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 700, color: '#D4AF37', marginBottom: '1rem' }}>Southeast Asia Golf Blueprint</h2>
                        <p style={{ color: 'rgba(248, 250, 252, 0.7)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>A strategic overview of our premium golfing destinations.</p>
                    </div>

                    <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.2)', backgroundColor: 'rgba(5, 11, 26, 0.5)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.2)', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
                                    <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Destination</th>
                                    <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Marquee Regions</th>
                                    <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Style</th>
                                    <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Ideal Season</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>
                                        <Link href="/destinations/vietnam/courses/" style={{ color: '#F8FAFC', textDecoration: 'none' }} className="hover-gold">
                                            <strong>Vietnam</strong>
                                        </Link>
                                    </td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Da Nang, Ho Tram, Hanoi</td>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Coastal Links, Dunes, Parkland</td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Feb - Sep (Central)</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>
                                        <Link href="/destinations/thailand/courses/" style={{ color: '#F8FAFC', textDecoration: 'none' }} className="hover-gold">
                                            <strong>Thailand</strong>
                                        </Link>
                                    </td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Bangkok, Hua Hin, Phuket, Chiang Mai</td>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Tropical Resort, Mountain, Parkland</td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Nov - Apr</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>
                                        <Link href="/destinations/cambodia/courses/" style={{ color: '#F8FAFC', textDecoration: 'none' }} className="hover-gold">
                                            <strong>Cambodia</strong>
                                        </Link>
                                    </td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Siem Reap, Phnom Penh</td>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Cultural Resort, Championship Parkland</td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Nov - Mar</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Essential Regional Intelligence & Seasonality Guides */}
                    <div style={{ marginTop: '3rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        <Link href="/blog/best-time-to-golf-in-vietnam/" style={{ textDecoration: 'none' }} className="hover-gold">
                            <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.6)', border: '1px solid rgba(212, 175, 55, 0.25)', borderRadius: '8px', padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <span style={{ color: '#D4AF37', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>Vietnam Climate Intel</span>
                                    <h3 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.25rem', color: '#F8FAFC', margin: '0.5rem 0' }}>Best Time to Golf in Vietnam</h3>
                                    <p style={{ color: 'rgba(248, 250, 252, 0.65)', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>Month-by-month regional weather breakdown across Da Nang, Ho Tram, and Hanoi.</p>
                                </div>
                                <span style={{ color: '#D4AF37', fontSize: '0.85rem', fontWeight: 600, marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>Read Guide &rarr;</span>
                            </div>
                        </Link>
                        <Link href="/blog/best-time-to-golf-in-thailand/" style={{ textDecoration: 'none' }} className="hover-gold">
                            <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.6)', border: '1px solid rgba(212, 175, 55, 0.25)', borderRadius: '8px', padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <span style={{ color: '#D4AF37', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>Thailand Climate Intel</span>
                                    <h3 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.25rem', color: '#F8FAFC', margin: '0.5rem 0' }}>Best Time to Golf in Thailand</h3>
                                    <p style={{ color: 'rgba(248, 250, 252, 0.65)', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>Optimal seasonal windows and playing conditions across Phuket, Hua Hin, and Bangkok.</p>
                                </div>
                                <span style={{ color: '#D4AF37', fontSize: '0.85rem', fontWeight: 600, marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>Read Guide &rarr;</span>
                            </div>
                        </Link>
                        <Link href="/blog/caddie-culture-southeast-asia/" style={{ textDecoration: 'none' }} className="hover-gold">
                            <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.6)', border: '1px solid rgba(212, 175, 55, 0.25)', borderRadius: '8px', padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <span style={{ color: '#D4AF37', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 600 }}>Course Etiquette & Protocol</span>
                                    <h3 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.25rem', color: '#F8FAFC', margin: '0.5rem 0' }}>Southeast Asia Caddie Culture</h3>
                                    <p style={{ color: 'rgba(248, 250, 252, 0.65)', fontSize: '0.9rem', lineHeight: 1.5, margin: 0 }}>Everything you need to know about tipping etiquette, green-reading, and course communication.</p>
                                </div>
                                <span style={{ color: '#D4AF37', fontSize: '0.85rem', fontWeight: 600, marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>Read Guide &rarr;</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: '#020617', paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className="container">

                    {/* Vietnam Courses */}
                    <div style={{ marginBottom: '6rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '1rem' }}>
                            <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, margin: 0, color: '#F8FAFC' }}>Vietnam</h2>
                            <Link href="/destinations/vietnam/courses/" className="text-gold" style={{ textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', paddingBottom: '0.5rem' }}>View All Courses &rarr;</Link>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '4rem' }}>
                            {vietnamCourses.map(course => (
                                <CourseCard key={course.slug} course={course} country="vietnam" />
                            ))}
                        </div>
                    </div>

                    {/* Thailand Courses */}
                    <div style={{ marginBottom: '6rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '1rem' }}>
                            <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, margin: 0, color: '#F8FAFC' }}>Thailand</h2>
                            <Link href="/destinations/thailand/courses/" className="text-gold" style={{ textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', paddingBottom: '0.5rem' }}>View All Courses &rarr;</Link>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '4rem' }}>
                            {thailandCourses.map(course => (
                                <CourseCard key={course.slug} course={course} country="thailand" />
                            ))}
                        </div>
                    </div>

                    {/* Cambodia Courses */}
                    <div style={{ marginBottom: '4rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '1rem' }}>
                            <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, margin: 0, color: '#F8FAFC' }}>Cambodia</h2>
                            <Link href="/destinations/cambodia/courses/" className="text-gold" style={{ textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', paddingBottom: '0.5rem' }}>View All Courses &rarr;</Link>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '4rem' }}>
                            {cambodiaCourses.map(course => (
                                <CourseCard key={course.slug} course={course} country="cambodia" />
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* Complete Championship Course Directory (Links 100% of courses for link equity & discovery) */}
            <section className="section" style={{ backgroundColor: '#050b1a', paddingTop: '5rem', paddingBottom: '6rem', borderTop: '1px solid rgba(212, 175, 55, 0.2)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <span style={{ color: '#D4AF37', letterSpacing: '0.2em', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 600 }}>Comprehensive Portfolio</span>
                        <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 700, margin: '0.5rem 0', color: '#F8FAFC' }}>
                            Complete Championship Course Directory
                        </h2>
                        <p style={{ color: 'rgba(248, 250, 252, 0.7)', maxWidth: '700px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.6 }}>
                            Direct links to all {totalCourseCount} championship layouts across Vietnam, Thailand, and Cambodia curated by Asia Golf Specialists with VIP secured tee times.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                        {(['vietnam', 'thailand', 'cambodia'] as const).map(country => (
                            <div key={country} style={{ backgroundColor: 'rgba(2, 6, 23, 0.6)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(212, 175, 55, 0.25)', paddingBottom: '0.75rem' }}>
                                    <h3 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.5rem', color: '#D4AF37', margin: 0, textTransform: 'capitalize' }}>
                                        {country}
                                    </h3>
                                    <span style={{ fontSize: '0.8rem', color: 'rgba(248, 250, 252, 0.6)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                        {allCourses[country].length} Courses
                                    </span>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                                    {allCourses[country].map(c => (
                                        <li key={c.slug}>
                                            <Link
                                                href={c.url}
                                                style={{
                                                    color: 'rgba(248, 250, 252, 0.85)',
                                                    textDecoration: 'none',
                                                    fontSize: '0.92rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'space-between',
                                                    padding: '0.35rem 0',
                                                    borderBottom: '1px dotted rgba(255, 255, 255, 0.08)',
                                                    transition: 'color 0.2s ease'
                                                }}
                                                className="hover:text-gold"
                                            >
                                                <span>{c.title}</span>
                                                <span style={{ color: '#D4AF37', fontSize: '0.8rem', marginLeft: '0.5rem' }}>&rarr;</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "CollectionPage",
                            "@id": "https://www.asiagolfspecialists.com/courses/",
                            "name": "Championship Golf Course Directory — Asia Golf Specialists",
                            "description": "Curated directory of 67 championship golf courses across Vietnam, Thailand, and Cambodia, including designs by Greg Norman, Nick Faldo, and Robert Trent Jones Jr.",
                            "url": "https://www.asiagolfspecialists.com/courses/",
                            "dateModified": "2026-05-01",
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
                            "name": "AGS Championship Golf Courses",
                            "url": "https://www.asiagolfspecialists.com/courses/",
                            "numberOfItems": vietnamCourses.length + thailandCourses.length + cambodiaCourses.length,
                            "description": "Championship golf courses across Vietnam, Thailand, and Cambodia curated by Asia Golf Specialists.",
                            "itemListElement": [
                                ...vietnamCourses.map((c, i) => ({ "@type": "ListItem", "position": i + 1, "item": { "@type": "GolfCourse", "name": c.name, "description": c.desc, "url": `https://www.asiagolfspecialists.com${c.linkPath}`, "image": `https://www.asiagolfspecialists.com${c.image}`, "address": { "@type": "PostalAddress", "addressCountry": "VN" } } })),
                                ...thailandCourses.map((c, i) => ({ "@type": "ListItem", "position": vietnamCourses.length + i + 1, "item": { "@type": "GolfCourse", "name": c.name, "description": c.desc, "url": `https://www.asiagolfspecialists.com${c.linkPath}`, "image": `https://www.asiagolfspecialists.com${c.image}`, "address": { "@type": "PostalAddress", "addressCountry": "TH" } } })),
                                ...cambodiaCourses.map((c, i) => ({ "@type": "ListItem", "position": vietnamCourses.length + thailandCourses.length + i + 1, "item": { "@type": "GolfCourse", "name": c.name, "description": c.desc, "url": `https://www.asiagolfspecialists.com${c.linkPath}`, "image": `https://www.asiagolfspecialists.com${c.image}`, "address": { "@type": "PostalAddress", "addressCountry": "KH" } } }))
                            ]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Courses", "item": "https://www.asiagolfspecialists.com/courses/" }
                            ]
                        }
                    ]
                })
            }} />
        </div>
    );
}

function CourseCard({ course, country }: { course: any, country: string }) {
    const linkPath: string | null = course.linkPath ?? null;

    const cardContent = (
        <div className="ags-card">
            <div className="ags-card-image-container" style={{ height: '300px' }}>
                <Image
                    src={course.image}
                    alt={course.name}
                    className="ags-card-image"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5, 11, 26, 1) 0%, transparent 70%)' }}></div>
            </div>
            <div className="ags-card-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                    <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.75rem', color: '#D4AF37', margin: 0, fontWeight: 700, lineHeight: 1.3 }}>{course.name}</h2>
                    {!linkPath && <span className="ags-card-badge" style={{ marginTop: '0.5rem', height: 'fit-content' }}>SELECTION</span>}
                </div>
                <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F8FAFC', opacity: 0.8, marginBottom: '1.5rem', fontWeight: 500 }}>Championship Course</h3>
                <p style={{ fontSize: '1rem', color: 'rgba(248, 250, 252, 0.6)', lineHeight: 1.6, marginBottom: '2.5rem' }}>{course.desc}</p>
                <div className="ags-card-footer" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', fontWeight: 600 }}>
                    {linkPath ? (
                        <>
                            <span>Explore Course</span>
                            <span className="ags-card-cta-arrow">→</span>
                        </>
                    ) : (
                        <span>Request Details</span>
                    )}
                </div>
            </div>
        </div>
    );

    return linkPath ? (
        <Link key={course.slug} href={linkPath} className="ags-card-link">
            {cardContent}
        </Link>
    ) : (
        <div key={course.slug} className="ags-card-wrapper" style={{ opacity: 0.9 }}>
            {cardContent}
        </div>
    );
}

// ── 9-course teasers per destination ────────────────────────────────────────
const vietnamCourses = [
    { name: "Ba Na Hills Golf Club", slug: "ba-na-hills", linkPath: "/courses/vietnam/ba-na-hills/", desc: "A spectacular Luke Donald design set in the foothills of Da Nang, featuring full LED night golf.", image: "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-da-nang-vietnam-1.webp" },
    { name: "BRG Da Nang Golf Resort (Norman Course)", slug: "brg-da-nang-norman", linkPath: "/courses/vietnam/brg-da-nang-norman/", desc: "A Greg Norman classic links-style course offering a true coastal challenge.", image: "/images/courses/vietnam/brg-da-nang-norman/brg-da-nang-golf-resort-coastal-dunes-3.webp" },
    { name: "BRG Da Nang Golf Resort (Nicklaus Course)", slug: "brg-da-nang-nicklaus", linkPath: "/courses/vietnam/brg-da-nang-nicklaus/", desc: "Asia's first authentic bulkhead course, inspired by Florida's classic layouts.", image: "/images/courses/vietnam/brg-da-nang-nicklaus/brg-da-nang-golf-resort-nicklaus-water-feature-3.webp" },
    { name: "Hoiana Shores Golf Club", slug: "hoiana-shores", linkPath: "/courses/vietnam/hoiana-shores/", desc: "Robert Trent Jones Jr.'s stunning links masterpiece, weaving through coastal dunes.", image: "/images/courses/vietnam/hoiana-shores/hoiana-shores-golf-club-coastal-vietnam-1.webp" },
    { name: "Laguna Golf Lang Co", slug: "laguna-lang-co", linkPath: "/courses/vietnam/laguna-lang-co/", desc: "Sir Nick Faldo's signature design, traversing rice paddies, jungles, and beaches.", image: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3.webp" },
    { name: "Montgomerie Links Vietnam", slug: "montgomerie-links", linkPath: "/courses/vietnam/montgomerie-links/", desc: "Classic links anchor by Colin Montgomerie with a home-away-from-home atmosphere.", image: "/images/courses/vietnam/montgomerie-links/montgomerie-links-vietnam-da-nang-1-hero.webp" },
    { name: "The Bluffs Grand Ho Tram", slug: "the-bluffs-ho-tram", linkPath: "/courses/vietnam/the-bluffs-ho-tram/", desc: "Greg Norman's Top 100 World-ranked beast, set on massive coastal dunes south of Saigon.", image: "/images/courses/vietnam/the-bluffs-ho-tram/the-bluffs-ho-tram-strip-vietnam-1.webp" },
    { name: "KN Golf Links Cam Ranh", slug: "kn-golf-links", linkPath: "/courses/vietnam/kn-golf-links/", desc: "Greg Norman signature featuring massive dunes and a Scottish-style links experience on the South China Sea.", image: "/images/courses/vietnam/kn-golf-links/kn-golf-links-cam-ranh-championship-5.webp" },
    { name: "FLC Ha Long Bay Golf Club", slug: "flc-ha-long-bay", linkPath: "/courses/vietnam/flc-ha-long-bay/", desc: "Overlooking the UNESCO World Heritage site, offering breathtaking views of limestone karsts.", image: "/images/courses/vietnam/flc-ha-long-bay/flc-ha-long-bay-golf-club-vietnam-1.webp" },
];

const thailandCourses = [
    { name: "Alpine Golf & Sports Club", slug: "alpine-golf-club", linkPath: "/courses/thailand/alpine-golf-club/", desc: "Famed host of Tiger Woods' Johnnie Walker Classic victory, offering hilly terrain in Bangkok.", image: "/images/courses/thailand/alpine-golf-club/alpine-golf-sports-club-bangkok-thailand-1.webp" },
    { name: "Ballyshear Golf Links", slug: "ballyshear", linkPath: "/courses/thailand/ballyshear/", desc: "A true connoisseur's course near Bangkok, recreating the lost 'Lido' design by C.B. Macdonald.", image: "/images/courses/thailand/ballyshear/ballyshear-golf-links-bangkok-thailand-1.webp" },
    { name: "Black Mountain Golf Club", slug: "black-mountain", linkPath: "/courses/thailand/black-mountain/", desc: "Consistently ranked as one of Asia's best, carved into a Hua Hin granite mountain.", image: "/images/courses/thailand/black-mountain/black-mountain-golf-club-hua-hin-thailand-1.webp" },
    { name: "Blue Canyon Country Club", slug: "blue-canyon", linkPath: "/courses/thailand/blue-canyon/", desc: "A legendary Phuket course famous for dramatic finishes over water-filled canyons.", image: "/images/courses/thailand/blue-canyon/blue-canyon-country-club-phuket-thailand-1.webp" },
    { name: "Chiang Mai Highlands", slug: "chiang-mai-highlands", linkPath: "/courses/thailand/chiang-mai-highlands/", desc: "A Lee Schmidt design weaving through rolling hills with spectacular views from every tee.", image: "/images/courses/thailand/chiang-mai-highlands/chiang-mai-highlands-golf-country-club-thailand-1.webp" },
    { name: "Laem Chabang International", slug: "laem-chabang", linkPath: "/courses/thailand/laem-chabang/", desc: "A Jack Nicklaus 27-hole design widely considered the best in the Pattaya region.", image: "/images/courses/thailand/laem-chabang/laem-chabang-international-pattaya-thailand-1.webp" },
    { name: "Mission Hills Phuket", slug: "mission-hills-phuket", linkPath: "/courses/thailand/mission-hills-phuket/", desc: "Phuket's only oceanfront course, a Nicklaus design with spectacular Andaman views.", image: "/images/courses/thailand/mission-hills-phuket/mission-hills-golf-phuket-thailand-1.webp" },
    { name: "Red Mountain Golf Club", slug: "red-mountain", linkPath: "/courses/thailand/red-mountain/", desc: "The most dramatic course in Asia, carved through a former tin mine filled with canyons.", image: "/images/courses/thailand/thailand-courses-red-mountain-hole-18.webp" },
    { name: "Siam Country Club (Old Course)", slug: "siam-country-club", linkPath: "/courses/thailand/siam-country-club/", desc: "The historical heart of Thai golf and permanent home of the LPGA Thailand.", image: "/images/courses/thailand/siam-country-club/siam-country-club-old-course-pattaya-thailand-1.webp" },
];

const cambodiaCourses = [
    { name: "Angkor Golf Resort", slug: "angkor-golf-resort", linkPath: "/courses/cambodia/angkor-golf-resort/", desc: "Sir Nick Faldo design and widely considered the best course in Cambodia, just minutes from Angkor Wat.", image: "/images/courses/cambodia/angkor-golf-resort/angkor-golf-resort-siem-reap-cambodia-1.webp" },
    { name: "Chhun On Golf Resort (Lakes Course)", slug: "chhun-on-lakes", linkPath: "/courses/cambodia/chhun-on-golf-resort/", desc: "A Brian Curley masterpiece utilizing water on almost every hole for a visually stunning round.", image: "/images/courses/cambodia/chhun-on-lakes/chhun-on-golf-resort-lakes-course-cambodia-1.webp" },
    { name: "Chhun On Golf Resort (Palm Course)", slug: "chhun-on-palm", linkPath: "/courses/cambodia/chhun-on-golf-resort/", desc: "A traditional parkland feel, framed by hundreds of indigenous palm trees requiring strategic off-tee positioning.", image: "/images/courses/cambodia/chhun-on-palm/chhun-on-golf-resort-palm-course-cambodia-1.webp" },
    { name: "Garden City Golf Club", slug: "garden-city", linkPath: "/courses/cambodia/garden-city/", desc: "Managed by IMG, known for its wide-open feel, undulating greens, and a professional-level challenge.", image: "/images/courses/cambodia/garden-city/garden-city-golf-club-phnom-penh-cambodia-1.webp" },
    { name: "Phokeethra Country Club", slug: "phokeethra", linkPath: "/courses/cambodia/phokeethra/", desc: "A former host of the Asian Tour's Cambodian Open in Siem Reap offering forced water carries.", image: "/images/courses/cambodia/phokeethra/phokeethra-country-club-siem-reap-cambodia-1.webp" },
    { name: "Vattanac Golf Resort (East Course)", slug: "vattanac-east", linkPath: "/courses/cambodia/vattanac-east/", desc: "Sir Nick Faldo triumph featuring scale models of Pre-Angkorean structures on an epic public layout.", image: "/images/courses/cambodia/vattanac-east/vattanac-golf-resort-east-course-cambodia-1.webp" },
    { name: "Vattanac Golf Resort (West Course)", slug: "vattanac-west", linkPath: "/courses/cambodia/vattanac-west/", desc: "Exclusive private-members layout providing an intimate, technically challenging fast and firm surface.", image: "/images/courses/cambodia/vattanac-west/vattanac-golf-resort-west-course-cambodia-1.webp" },
    { name: "Siem Reap Booyoung Country Club", slug: "siem-reap-booyoung", linkPath: "/courses/cambodia/siem-reap-booyoung/", desc: "Features generous fairways and floral landscaping for excellent scoring and a relaxing round.", image: "/images/courses/cambodia/siem-reap-booyoung/siem-reap-booyoung-country-club-cambodia-1.webp" },
    { name: "Grand Phnom Penh Golf Club", slug: "grand-phnom-penh", linkPath: "/courses/cambodia/grand-phnom-penh/", desc: "Private Nicklaus Design course offering rare exclusivity and signature 'Golden Bear' strategic bunkering.", image: "/images/courses/cambodia/grand-phnom-penh/grand-phnom-penh-golf-club-cambodia-1.webp" },
];
