import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import fs from "fs";
import path from "path";

export const metadata = {
    title: { absolute: "Luxury Golf Resorts & Villas | SE Asia" },
    description: "Curated luxury golf resorts, private pool villas, and 5-star stay & play estates across Vietnam, Thailand, and Cambodia by Asia Golf Specialists.",
    keywords: ["luxury golf accommodation Southeast Asia", "luxury golf resorts Southeast Asia", "stay and play golf villas Vietnam", "private villa Thailand golf", "Cambodia luxury hotel golf", "AGS preferred accommodation"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Luxury Golf Resorts & Villas | SE Asia" },
        description: "Curated luxury golf resorts, private pool villas, and 5-star stay & play estates across Vietnam, Thailand, and Cambodia by Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/accommodations/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/global-accommodation-directory-hero-four-seasons.webp",
            width: 1200,
            height: 630,
            alt: "AGS Luxury Accommodation Collection — Five-Star Resort Southeast Asia",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Luxury Golf Resorts & Villas | SE Asia" },
        description: "Curated luxury golf resorts, private pool villas, and 5-star stay & play estates across Vietnam, Thailand, and Cambodia by Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/global-accommodation-directory-hero-four-seasons.webp"],
    },
};

interface AccommodationData {
    title: string;
    img: string;
    desc: string;
    linkPath: string;
    subtitle?: string;
}

function AccommodationCard({ acc }: { acc: AccommodationData }) {
    return (
        <Link href={acc.linkPath} className="ags-card-link">
            <div className="ags-card">
                <div className="ags-card-image-container" style={{ height: '300px', position: 'relative' }}>
                    <Image
                        src={acc.img}
                        alt={acc.title}
                        className="ags-card-image"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5, 11, 26, 1) 0%, transparent 70%)' }}></div>
                </div>
                <div className="ags-card-content">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.75rem', color: '#D4AF37', margin: 0, fontWeight: 700, lineHeight: 1.3 }}>
                            {acc.title.includes(' — ') ? (
                                <>{acc.title.split(' — ')[0]}<br /><span style={{ fontSize: '1.25rem' }}>{acc.title.split(' — ')[1]}</span></>
                            ) : acc.title}
                        </h2>
                        <span className="ags-card-badge" style={{ marginTop: '0.5rem', height: 'fit-content' }}>AGS SELECTION</span>
                    </div>
                    <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F8FAFC', opacity: 0.8, marginBottom: '1.5rem', fontWeight: 500 }}>{acc.subtitle || 'Luxury Accommodation'}</h3>
                    <p style={{ fontSize: '1rem', color: 'rgba(248, 250, 252, 0.6)', lineHeight: 1.6, marginBottom: '2.5rem' }} itemProp="description">{acc.desc}</p>
                    <div className="ags-card-footer" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', fontWeight: 600 }}>
                        <span>Explore Recovery</span>
                        <span className="ags-card-cta-arrow">→</span>
                    </div>
                </div>
            </div>
        </Link>
    );
}

function getAllAccommodationsByCountry() {
    const countries = ['vietnam', 'thailand', 'cambodia'] as const;
    const accomByCountry: Record<string, { title: string; url: string; slug: string }[]> = {
        vietnam: [],
        thailand: [],
        cambodia: []
    };

    for (const country of countries) {
        const countryDir = path.join(process.cwd(), 'src/app/accommodations', country);
        if (!fs.existsSync(countryDir)) continue;
        const slugs = fs.readdirSync(countryDir, { withFileTypes: true })
            .filter(d => d.isDirectory() && !d.name.startsWith('[')).map(d => d.name);
        
        for (const slug of slugs) {
            const pageFile = path.join(countryDir, slug, 'page.tsx');
            let title = slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
            if (fs.existsSync(pageFile)) {
                const content = fs.readFileSync(pageFile, 'utf8');
                const metaMatch = content.match(/title:\s*\{\s*absolute:\s*(?:"([^"]+)"|'([^']+)')/);
                if (metaMatch) {
                    title = (metaMatch[1] || metaMatch[2]).split('|')[0].trim();
                }
            }
            accomByCountry[country].push({ title, url: `/accommodations/${country}/${slug}/`, slug });
        }
        accomByCountry[country].sort((a, b) => a.title.localeCompare(b.title));
    }
    return accomByCountry;
}

export default function GlobalAccommodations() {
    const allAccom = getAllAccommodationsByCountry();
    const totalAccomCount = allAccom.vietnam.length + allAccom.thailand.length + allAccom.cambodia.length;

    return (
        <div style={{ backgroundColor: '#020617', minHeight: '100vh', color: '#F8FAFC' }}>
            <Navbar />

            <header className="hero" style={{
                minHeight: '75vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <Image
                    src="/images/accommodations/global-accommodation-directory-hero-four-seasons.webp"
                    alt="AGS Global Accommodation Collection"
                    fill
                    priority
                    style={{
                        objectFit: 'cover',
                        WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                        maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                    }}
                />
                <div className="hero-overlay" style={{ position: 'absolute', inset: 0, zIndex: 1 }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '800px', paddingTop: '25vh' }}>
                    <span style={{ color: '#D4AF37', letterSpacing: '0.25em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block', fontWeight: 600 }}>The AGS Collection</span>
                    <h1 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(3.5rem, 6vw, 5rem)', marginBottom: '1.5rem', color: '#F8FAFC', lineHeight: 1.1, fontWeight: 700 }}>
                        Elite Recovery &amp; <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Sanctuaries</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'rgba(248, 250, 252, 0.7)', lineHeight: 1.6, margin: '0 auto', maxWidth: '800px' }}>
                        Where you sleep is just as important as where you play. Discover our curated collection of 5-star recovery environments across Southeast Asia.
                    </p>
                </div>
            </header>

            {/* Table Section - Stay & Play Blueprint */}
            <section className="section" style={{ backgroundColor: '#020617', paddingTop: '6rem', paddingBottom: '0' }}>
                <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                        <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 700, color: '#D4AF37', marginBottom: '1rem' }}>Southeast Asia Stay &amp; Play Accommodation Blueprint</h2>
                        <p style={{ color: 'rgba(248, 250, 252, 0.7)', fontSize: '1.1rem', maxWidth: '750px', margin: '0 auto' }}>A strategic guide to selecting your luxury recovery base, private pool villa, and stay-and-play estate across our marquee championship corridors.</p>
                    </div>

                    <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.2)', backgroundColor: 'rgba(5, 11, 26, 0.5)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '950px' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.2)', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
                                    <th style={{ padding: '1.25rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', width: '22%' }}>Country / Courses</th>
                                    <th style={{ padding: '1.25rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', width: '25%' }}>Key Corridors &amp; Marquee Properties</th>
                                    <th style={{ padding: '1.25rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', width: '20%' }}>Championship Courses</th>
                                    <th style={{ padding: '1.25rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', width: '18%' }}>Approx Transit Times</th>
                                    <th style={{ padding: '1.25rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', width: '15%' }}>Recovery &amp; Group Feature</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                                    <td style={{ padding: '1.25rem', verticalAlign: 'top' }}>
                                        <Link href="/destinations/vietnam/courses/" style={{ color: '#D4AF37', textDecoration: 'none', fontWeight: 700, fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                            Vietnam Courses <span style={{ fontSize: '1rem' }}>&rarr;</span>
                                        </Link>
                                        <span style={{ fontSize: '0.75rem', color: 'rgba(248, 250, 252, 0.55)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.35rem', display: 'block' }}>
                                            35 Courses • 32 Properties
                                        </span>
                                    </td>
                                    <td style={{ padding: '1.25rem', verticalAlign: 'top', color: '#F8FAFC', lineHeight: 1.6, fontSize: '0.92rem' }}>
                                        <div style={{ marginBottom: '0.4rem' }}>
                                            <strong style={{ color: '#D4AF37' }}>Central Coast:</strong> <Link href="/accommodations/vietnam/four-seasons-nam-hai/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>Four Seasons Nam Hai</Link>, <Link href="/accommodations/vietnam/namia-river-retreat-hoi-an/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>Namia River Retreat</Link>, <Link href="/accommodations/vietnam/an-bang-beach-villas/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>An Bang Private Villas</Link>
                                        </div>
                                        <div style={{ marginBottom: '0.4rem' }}>
                                            <strong style={{ color: '#D4AF37' }}>Ho Tram Coast:</strong> <Link href="/accommodations/vietnam/bluffs-grand-ho-tram/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>The Grand Ho Tram</Link>
                                        </div>
                                        <div>
                                            <strong style={{ color: '#D4AF37' }}>Hanoi &amp; North:</strong> <Link href="/accommodations/vietnam/capella-hanoi/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>Capella Hanoi</Link>, <Link href="/accommodations/vietnam/sofitel-metropole-hanoi/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>Sofitel Metropole</Link>
                                        </div>
                                    </td>
                                    <td style={{ padding: '1.25rem', verticalAlign: 'top', color: 'rgba(248, 250, 252, 0.85)', lineHeight: 1.6, fontSize: '0.92rem' }}>
                                        <Link href="/courses/vietnam/hoiana-shores/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>Hoiana Shores</Link>, <Link href="/courses/vietnam/the-bluffs-ho-tram/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>The Bluffs Ho Tram</Link>, <Link href="/courses/vietnam/ba-na-hills/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>Ba Na Hills</Link>, <Link href="/courses/vietnam/legend-hill/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>Legend Hill</Link>
                                    </td>
                                    <td style={{ padding: '1.25rem', verticalAlign: 'top', lineHeight: 1.6, fontSize: '0.88rem' }}>
                                        <div style={{ marginBottom: '0.35rem' }}><strong style={{ color: '#D4AF37' }}>Ho Tram:</strong> 0 mins <span style={{ opacity: 0.7 }}>(On-site buggy)</span></div>
                                        <div style={{ marginBottom: '0.35rem' }}><strong style={{ color: '#D4AF37' }}>Central Coast:</strong> 10–25 mins <span style={{ opacity: 0.65 }}>(Outliers 50–70m)</span></div>
                                        <div><strong style={{ color: '#D4AF37' }}>Hanoi Metro:</strong> 45–65 mins</div>
                                    </td>
                                    <td style={{ padding: '1.25rem', verticalAlign: 'top', color: 'rgba(248, 250, 252, 0.75)', lineHeight: 1.6, fontSize: '0.88rem' }}>
                                        Multi-bedroom beachfront private pool villas, on-course buggy links access, private in-villa chef dining, and dedicated caddie pick-ups.
                                    </td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                                    <td style={{ padding: '1.25rem', verticalAlign: 'top' }}>
                                        <Link href="/destinations/thailand/courses/" style={{ color: '#D4AF37', textDecoration: 'none', fontWeight: 700, fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                            Thailand Courses <span style={{ fontSize: '1rem' }}>&rarr;</span>
                                        </Link>
                                        <span style={{ fontSize: '0.75rem', color: 'rgba(248, 250, 252, 0.55)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.35rem', display: 'block' }}>
                                            22 Courses • 10 Properties
                                        </span>
                                    </td>
                                    <td style={{ padding: '1.25rem', verticalAlign: 'top', color: '#F8FAFC', lineHeight: 1.6, fontSize: '0.92rem' }}>
                                        <div style={{ marginBottom: '0.4rem' }}>
                                            <strong style={{ color: '#D4AF37' }}>Hua Hin:</strong> <Link href="/accommodations/thailand/chiva-som/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>Chiva-Som</Link>, <Link href="/accommodations/thailand/the-standard-hua-hin/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>The Standard</Link>, <Link href="/accommodations/thailand/v-villas-hua-hin/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>V Villas Hua Hin</Link>
                                        </div>
                                        <div style={{ marginBottom: '0.4rem' }}>
                                            <strong style={{ color: '#D4AF37' }}>Phuket:</strong> <Link href="/accommodations/thailand/amanpuri/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>Amanpuri</Link>, <Link href="/accommodations/thailand/banyan-tree-phuket/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>Banyan Tree Phuket</Link>
                                        </div>
                                        <div>
                                            <strong style={{ color: '#D4AF37' }}>Bangkok &amp; North:</strong> <Link href="/accommodations/thailand/sindhorn-kempinski/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>Sindhorn Kempinski</Link>, <Link href="/accommodations/thailand/four-seasons-chiang-mai/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>Four Seasons Chiang Mai</Link>
                                        </div>
                                    </td>
                                    <td style={{ padding: '1.25rem', verticalAlign: 'top', color: 'rgba(248, 250, 252, 0.85)', lineHeight: 1.6, fontSize: '0.92rem' }}>
                                        <Link href="/courses/thailand/black-mountain/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>Black Mountain</Link>, <Link href="/courses/thailand/blue-canyon/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>Blue Canyon</Link>, <Link href="/courses/thailand/alpine-golf-club/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>Alpine Golf Club</Link>, <Link href="/courses/thailand/siam-country-club/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>Siam Country Club</Link>
                                    </td>
                                    <td style={{ padding: '1.25rem', verticalAlign: 'top', lineHeight: 1.6, fontSize: '0.88rem' }}>
                                        <div style={{ marginBottom: '0.35rem' }}><strong style={{ color: '#D4AF37' }}>Hua Hin / Phuket:</strong> 15–25 mins</div>
                                        <div style={{ marginBottom: '0.35rem' }}><strong style={{ color: '#D4AF37' }}>Chiang Mai:</strong> 25–40 mins</div>
                                        <div><strong style={{ color: '#D4AF37' }}>Bangkok Metro:</strong> 45–75 mins</div>
                                    </td>
                                    <td style={{ padding: '1.25rem', verticalAlign: 'top', color: 'rgba(248, 250, 252, 0.75)', lineHeight: 1.6, fontSize: '0.88rem' }}>
                                        World-renowned athletic recovery retreats, private ocean headland compounds, personalized post-round physiotherapy, and luxury private touring vehicle transfers.
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '1.25rem', verticalAlign: 'top' }}>
                                        <Link href="/destinations/cambodia/courses/" style={{ color: '#D4AF37', textDecoration: 'none', fontWeight: 700, fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                            Cambodia Courses <span style={{ fontSize: '1rem' }}>&rarr;</span>
                                        </Link>
                                        <span style={{ fontSize: '0.75rem', color: 'rgba(248, 250, 252, 0.55)', textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: '0.35rem', display: 'block' }}>
                                            10 Courses • 8 Properties
                                        </span>
                                    </td>
                                    <td style={{ padding: '1.25rem', verticalAlign: 'top', color: '#F8FAFC', lineHeight: 1.6, fontSize: '0.92rem' }}>
                                        <div style={{ marginBottom: '0.4rem' }}>
                                            <strong style={{ color: '#D4AF37' }}>Siem Reap:</strong> <Link href="/accommodations/cambodia/raffles-grand-dangkor/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>Raffles Grand d&apos;Angkor</Link>, <Link href="/accommodations/cambodia/amansara/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>Amansara</Link>, <Link href="/accommodations/cambodia/jaya-house-river-park/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>Jaya House</Link>
                                        </div>
                                        <div>
                                            <strong style={{ color: '#D4AF37' }}>Phnom Penh:</strong> <Link href="/accommodations/cambodia/rosewood-phnom-penh/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>Rosewood Phnom Penh</Link>
                                        </div>
                                    </td>
                                    <td style={{ padding: '1.25rem', verticalAlign: 'top', color: 'rgba(248, 250, 252, 0.85)', lineHeight: 1.6, fontSize: '0.92rem' }}>
                                        <Link href="/courses/cambodia/angkor-golf-resort/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>Angkor Golf Resort</Link>, <Link href="/courses/cambodia/vattanac-east/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>Vattanac Golf Resort</Link>, <Link href="/courses/cambodia/phokeethra/" style={{ color: '#F8FAFC', textDecoration: 'underline' }}>Phokeethra Country Club</Link>
                                    </td>
                                    <td style={{ padding: '1.25rem', verticalAlign: 'top', lineHeight: 1.6, fontSize: '0.88rem' }}>
                                        <div style={{ marginBottom: '0.35rem' }}><strong style={{ color: '#D4AF37' }}>Siem Reap:</strong> 15–20 mins</div>
                                        <div><strong style={{ color: '#D4AF37' }}>Phnom Penh:</strong> 35–50 mins</div>
                                    </td>
                                    <td style={{ padding: '1.25rem', verticalAlign: 'top', color: 'rgba(248, 250, 252, 0.75)', lineHeight: 1.6, fontSize: '0.88rem' }}>
                                        French-colonial heritage butler suites, iconic 19th-hole Elephant Bar, holistic lotus therapies, and private Angkor Wat sunrise/sunset transits.
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: '#020617', paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className="container">

                    {/* Vietnam Accommodations */}
                    <div style={{ marginBottom: '6rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '1rem' }}>
                            <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, margin: 0, color: '#F8FAFC' }}>Vietnam</h2>
                            <Link href="/destinations/vietnam/accommodations/" className="text-gold" style={{ textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', paddingBottom: '0.5rem' }}>View All &rarr;</Link>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '4rem' }}>
                            {vietnamAccommodations.map((acc, index) => (
                                <AccommodationCard acc={acc} key={index} />
                            ))}
                        </div>
                    </div>

                    {/* Thailand Accommodations */}
                    <div style={{ marginBottom: '6rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '1rem' }}>
                            <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, margin: 0, color: '#F8FAFC' }}>Thailand</h2>
                            <Link href="/destinations/thailand/accommodations/" className="text-gold" style={{ textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', paddingBottom: '0.5rem' }}>View All &rarr;</Link>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '4rem' }}>
                            {thailandAccommodations.map((acc, index) => (
                                <AccommodationCard acc={acc} key={index} />
                            ))}
                        </div>
                    </div>

                    {/* Cambodia Accommodations */}
                    <div style={{ marginBottom: '4rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '2.5rem', borderBottom: '1px solid rgba(212, 175, 55, 0.3)', paddingBottom: '1rem' }}>
                            <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, margin: 0, color: '#F8FAFC' }}>Cambodia</h2>
                            <Link href="/destinations/cambodia/accommodations/" className="text-gold" style={{ textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', paddingBottom: '0.5rem' }}>View All &rarr;</Link>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '4rem' }}>
                            {cambodiaAccommodations.map((acc, index) => (
                                <AccommodationCard acc={acc} key={index} />
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* Complete Luxury Accommodation Directory (Links 100% of properties for link equity & discovery) */}
            <section className="section" style={{ backgroundColor: '#050b1a', paddingTop: '5rem', paddingBottom: '6rem', borderTop: '1px solid rgba(212, 175, 55, 0.2)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <span style={{ color: '#D4AF37', letterSpacing: '0.2em', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 600 }}>Curated Sanctuaries</span>
                        <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', fontWeight: 700, margin: '0.5rem 0', color: '#F8FAFC' }}>
                            Complete Luxury Accommodation Directory
                        </h2>
                        <p style={{ color: 'rgba(248, 250, 252, 0.7)', maxWidth: '700px', margin: '0 auto', fontSize: '1rem', lineHeight: 1.6 }}>
                            Direct links to all {totalAccomCount} five-star luxury resorts, private pool villas, and boutique heritage estates vetted by Asia Golf Specialists for athletic recovery.
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
                                        {allAccom[country].length} Properties
                                    </span>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                                    {allAccom[country].map(a => (
                                        <li key={a.slug}>
                                            <Link
                                                href={a.url}
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
                                                <span>{a.title}</span>
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
                            "@id": "https://www.asiagolfspecialists.com/accommodations/",
                            "name": "Luxury Golf Accommodation — Asia Golf Specialists",
                            "description": "50 handpicked 5-star resorts, private villas, and luxury hotels across Vietnam, Thailand, and Cambodia, selected by Asia Golf Specialists for golf proximity and recovery quality.",
                            "url": "https://www.asiagolfspecialists.com/accommodations/",
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
                            "name": "AGS Preferred Accommodation Collection",
                            "url": "https://www.asiagolfspecialists.com/accommodations/",
                            "numberOfItems": vietnamAccommodations.length + thailandAccommodations.length + cambodiaAccommodations.length,
                            "description": "Luxury accommodations across Vietnam, Thailand, and Cambodia curated by Asia Golf Specialists.",
                            "itemListElement": [
                                ...vietnamAccommodations.map((a, i) => ({ "@type": "ListItem", "position": i + 1, "item": { "@type": "LodgingBusiness", "name": a.title, "description": a.desc, "url": `https://www.asiagolfspecialists.com${a.linkPath}`, "image": `https://www.asiagolfspecialists.com${a.img}`, "address": { "@type": "PostalAddress", "addressCountry": "VN" } } })),
                                ...thailandAccommodations.map((a, i) => ({ "@type": "ListItem", "position": vietnamAccommodations.length + i + 1, "item": { "@type": "LodgingBusiness", "name": a.title, "description": a.desc, "url": `https://www.asiagolfspecialists.com${a.linkPath}`, "image": `https://www.asiagolfspecialists.com${a.img}`, "address": { "@type": "PostalAddress", "addressCountry": "TH" } } })),
                                ...cambodiaAccommodations.map((a, i) => ({ "@type": "ListItem", "position": vietnamAccommodations.length + thailandAccommodations.length + i + 1, "item": { "@type": "LodgingBusiness", "name": a.title, "description": a.desc, "url": `https://www.asiagolfspecialists.com${a.linkPath}`, "image": `https://www.asiagolfspecialists.com${a.img}`, "address": { "@type": "PostalAddress", "addressCountry": "KH" } } }))
                            ]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" }
                            ]
                        }
                    ]
                })
            }} />
        </div>
    );
}

const vietnamAccommodations: AccommodationData[] = [
    { title: "Four Seasons Resort The Nam Hai", img: "/images/accommodations/vietnam/four-seasons-nam-hai/vietnam-luxury-hotel-four-seasons-resort-the-nam-hai-5-star-recovery.webp", subtitle: "Beachfront Resort", desc: "The gold standard of luxury in Central Vietnam. Perfectly situated between Hoiana Shores and Montgomerie Links, offering Forbes Five-Star service.", linkPath: "/accommodations/vietnam/four-seasons-nam-hai/" },
    { title: "Namia River Retreat", img: "/images/accommodations/vietnam/namia-river-retreat-hoi-an/vietnam-luxury-hotel-namia-river-retreat-hoi-an-hero.webp", subtitle: "Riverside Boutique Retreat", desc: "A secluded boutique wellness retreat on the Thu Bon River, offering exclusive pool villas and deep recovery for golfers in Central Vietnam.", linkPath: "/accommodations/vietnam/namia-river-retreat-hoi-an/" },
    { title: "The Bluffs Grand Ho Tram", img: "/images/accommodations/vietnam/bluffs-grand-ho-tram/vietnam-luxury-hotel-bluffs-grand-ho-tram-resort-hotel-1.webp", subtitle: "Beachfront Golf Resort", desc: "The pinnacle of Stay and Play. A sprawling resort directly overlooking a Top 100 World Ranked golf course on the South China Sea.", linkPath: "/accommodations/vietnam/bluffs-grand-ho-tram/" },
    { title: "InterContinental Danang Sun Peninsula Resort", img: "/images/accommodations/vietnam/intercontinental-danang/vietnam-luxury-hotel-intercontinental-danang-sun-peninsula-resort-5-star-recovery.webp", subtitle: "Peninsula Resort", desc: "A Bill Bensley masterclass perched on a private cove of Son Tra Peninsula — the most dramatically located resort on Vietnam's golf coast.", linkPath: "/accommodations/vietnam/intercontinental-danang/" },
    { title: "Sofitel Legend Metropole Hanoi", img: "/images/accommodations/vietnam/sofitel-metropole-hanoi/sofitel-legend-metropole-hanoi-hero.webp", subtitle: "Luxury Heritage Hotel", desc: "Hanoi's most storied luxury address, blending French colonial grandeur with timeless elegance, serving as the ultimate basecamp for Northern Vietnam golf tours.", linkPath: "/accommodations/vietnam/sofitel-metropole-hanoi/" },
    { title: "Holiday Villa — An Bang Beach", img: "/images/accommodations/vietnam/an-bang-holiday-villa/vietnam-private-villa-an-bang-holiday-villa-beach-lifestyle-hero.webp", subtitle: "Private Group Villa", desc: "The definitive group property on An Bang Beach. 6 bedrooms, private pool, sauna, and an expansive beachfront garden — purpose-built for larger golf touring parties.", linkPath: "/accommodations/vietnam/an-bang-beach-villas/" },
];

const thailandAccommodations: AccommodationData[] = [
    { title: "Banyan Tree Phuket", img: "/images/accommodations/thailand/banyan-tree-phuket/thailand-luxury-hotel-banyan-tree-phuket-pool-villa-6.webp", subtitle: "Private Pool Villas", desc: "The spiritual home of the Golf Villa concept. DoublePool Villas with a 24-hour dedicated Villa Host who coordinates all tee times and transfers.", linkPath: "/accommodations/thailand/banyan-tree-phuket/" },
    { title: "Amanpuri", img: "/images/accommodations/thailand/amanpuri/thailand-luxury-hotel-amanpuri-phuket-private-pool-pavilion-1.webp", subtitle: "Peninsula Resort", desc: "The original Aman resort in Phuket. Perched on a private peninsula over the Andaman Sea — the most exclusive sanctuary for the world's elite.", linkPath: "/accommodations/thailand/amanpuri/" },
    { title: "Chiva-Som International Health Resort", img: "/images/accommodations/thailand/chiva-som/thailand-luxury-hotel-chiva-som-hua-hin-beachfront-1.webp", subtitle: "Wellness Resort", desc: "The world's most awarded wellness retreat in Hua Hin — the scientifically designed antidote to an intensive golf schedule.", linkPath: "/accommodations/thailand/chiva-som/" },
    { title: "The Standard, Hua Hin", img: "/images/accommodations/thailand/the-standard-hua-hin/1.webp", subtitle: "Beachfront Design Resort", desc: "A vibrant, stylish beachfront resort in Hua Hin, blending mid-century modern design with lush sub-tropical grounds and effortless access to Pineapple Valley and Black Mountain.", linkPath: "/accommodations/thailand/the-standard-hua-hin/" },
    { title: "Sindhorn Kempinski Hotel Bangkok", img: "/images/accommodations/thailand/sindhorn-kempinski/thailand-luxury-hotel-sindhorn-kempinski-bangkok-garden-suites-3.webp", subtitle: "Luxury City Accommodation", desc: "Bangkok's Green Corridor sanctuary offering massive suites for city golfers who demand absolute peace between rounds.", linkPath: "/accommodations/thailand/sindhorn-kempinski/" },
    { title: "Four Seasons Resort Chiang Mai", img: "/images/accommodations/thailand/four-seasons-chiang-mai/thailand-luxury-hotel-four-seasons-chiang-mai-rice-paddies-1.webp", subtitle: "Highland Resort", desc: "Set amidst working terraced rice paddies in Northern Thailand — the ultimate highland golf retreat.", linkPath: "/accommodations/thailand/four-seasons-chiang-mai/" },
];

const cambodiaAccommodations: AccommodationData[] = [
    { title: "Amansara", img: "/images/accommodations/cambodia/amansara/cambodia-luxury-hotel-amansara-siem-reap-pool-courtyard-4.webp", subtitle: "Heritage Retreat", desc: "Formerly King Sihanouk's guest house — 24 suites of pure Angkor exclusivity with custom remorks and private temple access.", linkPath: "/accommodations/cambodia/amansara/" },
    { title: "Jaya House River Park", img: "/images/accommodations/cambodia/jaya-house-river-park/1.webp", subtitle: "Boutique River Sanctuary", desc: "An exceptionally peaceful boutique hotel along the Siem Reap River, offering bespoke Khmer hospitality, silver swimming pools, and a serene launchpad for Angkor Golf Resort.", linkPath: "/accommodations/cambodia/jaya-house-river-park/" },
    { title: "Zannier Hotels Phum Baitang", img: "/images/accommodations/cambodia/zannier-phum-baitang/cambodia-luxury-hotel-zannier-phum-baitang-stilted-villa-1.webp", subtitle: "Countryside Retreat", desc: "A luxury Green Village of private stilted villas set in eight acres of Siem Reap rice paddies — authentic Khmer meets ultra-luxury.", linkPath: "/accommodations/cambodia/zannier-phum-baitang/" },
    { title: "Phokeethra Country Club Resort", img: "/images/accommodations/cambodia/phokeethra-country-club/cambodia-luxury-hotel-phokeethra-country-club-colonial-facade-1.webp", subtitle: "Golf Resort", desc: "Cambodia's finest stay-and-play: a colonial 5-star resort directly linked to the prestigious Phokeethra Country Club.", linkPath: "/accommodations/cambodia/phokeethra-country-club/" },
    { title: "Rosewood Phnom Penh", img: "/images/accommodations/cambodia/rosewood-phnom-penh/cambodia-luxury-hotel-rosewood-phnom-penh-rooftop-bar-1.webp", subtitle: "Luxury City Accommodation", desc: "The absolute peak of Vattanac Capital Tower — commanding 360° Mekong River panoramas from the most contemporary address in Phnom Penh.", linkPath: "/accommodations/cambodia/rosewood-phnom-penh/" },
    { title: "Raffles Grand Hotel d'Angkor", img: "/images/accommodations/cambodia/raffles-grand-dangkor/cambodia-luxury-hotel-raffles-grand-hotel-dangkor-heritage-pool-3.webp", subtitle: "Heritage City Accommodation", desc: "Built in 1932, this legendary colonial address is Siem Reap's most storied hotel — historical weight and classic luxury combined.", linkPath: "/accommodations/cambodia/raffles-grand-dangkor/" },
];
