import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import GuideDownloadCTA from "@/components/GuideDownloadCTA";
import MateshipShare from "@/components/MateshipShare";

export const metadata: Metadata = {
    title: "Golf Events & Group Tours",
    description: "Bespoke golf events and group tours across Southeast Asia. Corporate golf tournaments, club trips, and charity events engineered by Asia Golf Specialists.",
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/events-tours/",
    },
    openGraph: {
        type: "website",
        title: "Golf Events & Group Tours",
        description: "Bespoke golf events and group tours across Southeast Asia. Corporate golf tournaments, club trips, and charity events engineered by Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/events-tours/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/homepage/hero-slider/vietnam-coastal-golf-course-hoiana-shores-aerial-beachside.webp",
            width: 1200,
            height: 630,
            alt: "Golf events and group tours — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Golf Events & Group Tours",
        description: "Bespoke golf events and group tours across Southeast Asia. Corporate golf tournaments, club trips, and charity events engineered by Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/homepage/hero-slider/vietnam-coastal-golf-course-hoiana-shores-aerial-beachside.webp"],
    },
};

export default function EventsTours() {
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
                    backgroundImage: 'url("/images/homepage/hero-slider/vietnam-coastal-golf-course-hoiana-shores-aerial-beachside.webp")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                    maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                    zIndex: 0
                }}>
                    <div className="hero-overlay" style={{ position: 'absolute', inset: 0 }}></div>
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '800px', paddingTop: '25vh' }}>
                    <span style={{ color: '#D4AF37', letterSpacing: '0.25em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block', fontWeight: 600 }}>The Journal Series</span>
                    <h1 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(3.5rem, 6vw, 5rem)', marginBottom: '1.5rem', color: '#F8FAFC', lineHeight: 1.1, fontWeight: 700 }}>
                        Signature Events & <br /><span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Exclusive Tours</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'rgba(248, 250, 252, 0.7)', lineHeight: 1.6, margin: '0 auto 2.5rem', maxWidth: '800px' }} itemProp="description" id="exec-summary">
                        Curated journeys for the serious golfer. From championship itineraries across the Vietnam coast to prestigious invitationals, discover the AGS standard of excellence.
                    </p>
                    <Link 
                        href="/gallery/"
                        style={{ 
                            display: 'inline-block', 
                            padding: '1.2rem 3.5rem', 
                            letterSpacing: '0.4em',
                            textTransform: 'uppercase',
                            fontFamily: 'var(--font-sans), sans-serif',
                            fontWeight: 700,
                            fontSize: '0.9rem',
                            color: '#D4AF37',
                            border: '1px solid rgba(212, 175, 55, 0.4)',
                            textDecoration: 'none',
                            transition: 'all 0.4s ease',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: 'none'
                        }}
                    >
                        Explore the Gallery
                    </Link>
                </div>
            </header>

            <section className="section" style={{ padding: '4rem 0 2rem' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                    <GuideDownloadCTA />
                </div>
            </section>

            {/* Table Section */}
            <section className="section" style={{ backgroundColor: '#020617', paddingTop: '6rem', paddingBottom: '0' }}>
                <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
                        <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 700, color: '#D4AF37', marginBottom: '1rem' }}>Signature Tour Blueprint</h2>
                        <p style={{ color: 'rgba(248, 250, 252, 0.7)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>A strategic overview of our marquee tour experiences across the regions.</p>
                    </div>

                    <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.2)', backgroundColor: 'rgba(5, 11, 26, 0.5)' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.2)', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
                                    <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Tour Experience</th>
                                    <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Duration</th>
                                    <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Region Focus</th>
                                    <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Highlight</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>The An Bang Invitational</strong></td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>7 Days / 6 Nights</td>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Da Nang, Hoi An</td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Hoi An Ancient Town, Beachfront Luxury</td>
                                </tr>
                                <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>The Royal Siam Circuit</strong></td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>7 Days / 6 Nights</td>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Bangkok, Hua Hin</td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Michelin Style Dining</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>The Angkor Odyssey</strong></td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>5 Days / 4 Nights</td>
                                    <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Siem Reap</td>
                                    <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Sunrise Private Temple Access</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* Tour Grid */}
            <section className="section" style={{ backgroundColor: '#020617', paddingTop: '6rem', paddingBottom: '6rem' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '4rem' }}>

                        {/* Featured Tour: Vietnam Central Coast */}
                        <Link href="/tours/vietnam-central-coast/" className="ags-card-link">
                            <div className="ags-card">
                                <div className="ags-card-image-container" style={{ height: '350px' }}>
                                    <Image
                                        src="/images/homepage/hero-slider/vietnam-coastal-golf-course-hoiana-shores-aerial-beachside.webp"
                                        alt="Vietnam Central Coast Tour"
                                        className="ags-card-image"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5, 11, 26, 1) 0%, transparent 70%)' }}></div>
                                    <span className="ags-card-badge" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>FEATURED TOUR</span>
                                </div>
                                <div className="ags-card-content">
                                    <div style={{ marginBottom: '1rem' }}>
                                        <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '2rem', color: '#D4AF37', margin: 0, fontWeight: 700, lineHeight: 1.2 }}>The An Bang Invitational</h2>
                                        <p style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(248, 250, 252, 0.6)', marginTop: '0.5rem' }}>Da Nang • Hoi An</p>
                                    </div>
                                    <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F8FAFC', opacity: 0.8, marginBottom: '1.5rem', fontWeight: 500 }}>Championship Itinerary</h3>
                                    <p style={{ fontSize: '1rem', color: 'rgba(248, 250, 252, 0.6)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                                        Beachfront Privacy, Strategic Golf & Coastal Heritage. A 7-day flagship sojourn featuring your group's private beachfront estate and the world-class links of the 'Golf Coast'.
                                    </p>
                                    <div className="ags-card-footer" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', fontWeight: 600 }}>
                                        <span>Explore Experience</span>
                                        <span className="ags-card-cta-arrow">→</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Featured Tour: The Royal Siam Circuit */}
                        <Link href="/tours/thailand-royal-siam/" className="ags-card-link">
                            <div className="ags-card">
                                <div className="ags-card-image-container" style={{ height: '350px' }}>
                                    <Image
                                        src="/images/tours/thailand/thailand-6d7n-the-standard-hua-hin-hero.webp"
                                        alt="Thailand Royal Siam Circuit"
                                        className="ags-card-image"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5, 11, 26, 1) 0%, transparent 70%)' }}></div>
                                    <span className="ags-card-badge" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>FEATURED TOUR</span>
                                </div>
                                <div className="ags-card-content">
                                    <div style={{ marginBottom: '1rem' }}>
                                        <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '2rem', color: '#D4AF37', margin: 0, fontWeight: 700, lineHeight: 1.2 }}>The Royal Siam Circuit</h2>
                                        <p style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(248, 250, 252, 0.6)', marginTop: '0.5rem' }}>Bangkok • Hua Hin</p>
                                    </div>
                                    <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F8FAFC', opacity: 0.8, marginBottom: '1.5rem', fontWeight: 500 }}>7 Day Flagship Sojourn</h3>
                                    <p style={{ fontSize: '1rem', color: 'rgba(248, 250, 252, 0.6)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                                        From Bangkok’s Neon Heights to the Greens of the Royals. Play the most prestigious courses in Thailand alongside Michelin style dining and beachfront luxury.
                                    </p>
                                    <div className="ags-card-footer" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', fontWeight: 600 }}>
                                        <span>Explore Experience</span>
                                        <span className="ags-card-cta-arrow">→</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Featured Tour: The Angkor Odyssey */}
                        <Link href="/tours/cambodia-angkor-odyssey/" className="ags-card-link">
                            <div className="ags-card">
                                <div className="ags-card-image-container" style={{ height: '350px' }}>
                                    <Image
                                        src="/images/tours/cambodia/cambodia-angkor-wat-sunrise-tour.webp"
                                        alt="Cambodia Angkor Odyssey"
                                        className="ags-card-image"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5, 11, 26, 1) 0%, transparent 70%)' }}></div>
                                    <span className="ags-card-badge" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}>FEATURED TOUR</span>
                                </div>
                                <div className="ags-card-content">
                                    <div style={{ marginBottom: '1rem' }}>
                                        <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '2rem', color: '#D4AF37', margin: 0, fontWeight: 700, lineHeight: 1.2 }}>The Angkor Odyssey</h2>
                                        <p style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(248, 250, 252, 0.6)', marginTop: '0.5rem' }}>Siem Reap • Angkor Wat</p>
                                    </div>
                                    <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F8FAFC', opacity: 0.8, marginBottom: '1.5rem', fontWeight: 500 }}>5 Day Cultural Sojourn</h3>
                                    <p style={{ fontSize: '1rem', color: 'rgba(248, 250, 252, 0.6)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                                        Colonial Grandeur, Faldo Mastery & The Angkor Odyssey. Enjoy private VIP temple access, stay at the historic Raffles Grand, and dine in World Top 50 restaurants.
                                    </p>
                                    <div className="ags-card-footer" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', fontWeight: 600 }}>
                                        <span>Explore Experience</span>
                                        <span className="ags-card-cta-arrow">→</span>
                                    </div>
                                </div>
                            </div>
                        </Link>

                        {/* Event Card: The Horn Blower's Invitational */}
                        <div className="ags-card-wrapper" style={{ opacity: 0.9 }}>
                            <div className="ags-card">
                                <div className="ags-card-image-container" style={{ height: '350px' }}>
                                    <Image
                                        src="/images/destinations/vietnam/hero/vietnam-north-rice-terraces-hero.webp"
                                        alt="Vietnam Central Coast"
                                        className="ags-card-image transition-transform duration-700 group-hover:scale-110"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        style={{ objectFit: 'cover' }}
                                    />
                                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5, 11, 26, 1) 0%, transparent 70%)' }}></div>
                                    <span className="ags-card-badge" style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: '#D4AF37', color: '#020617' }}>SIGNATURE INVITATIONAL</span>
                                </div>
                                <div className="ags-card-content">
                                    <div style={{ marginBottom: '1rem' }}>
                                        <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '2rem', color: '#D4AF37', margin: 0, fontWeight: 700, lineHeight: 1.2 }}>The Horn Blower's Invitational</h2>
                                        <p style={{ fontSize: '0.8rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(248, 250, 252, 0.6)', marginTop: '0.5rem' }}>TBC</p>
                                    </div>
                                    <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F8FAFC', opacity: 0.8, marginBottom: '1.5rem', fontWeight: 500 }}>Elite Tournament</h3>
                                    <p style={{ fontSize: '1rem', color: 'rgba(248, 250, 252, 0.6)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                                        The definitive AGS Invitational. A test of skill and nerve in a prestigious tournament setting. Details and registrations opening soon.
                                    </p>
                                    <div className="ags-card-footer" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgba(212, 175, 55, 0.4)', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', fontWeight: 600 }}>
                                        <span>Registrations Pending</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Mateship Share — below the cards */}
            <div className="container" style={{ paddingBottom: '3rem' }}>
                <MateshipShare
                    tourName="The An Bang Invitational"
                    tourUrl="https://www.asiagolfspecialists.com/tours/vietnam-central-coast/"
                    destination="Vietnam"
                    compact
                />
            </div>

            

            {/* Footer Branding */}

            <section className="section" style={{ paddingBottom: '8rem', backgroundColor: '#020617' }}>
                <div className="container text-center">
                    <div style={{ width: '100%', height: '80px', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                        <img
                            src="/images/brand-library/logos/ags-clubmark-outline-white.webp"
                            alt="AGS Club Mark"
                            style={{ height: '100%', width: 'auto', objectFit: 'contain', opacity: 0.2 }}
                            loading="lazy"
                        />
                    </div>
                    <p style={{ fontStyle: 'italic', opacity: 0.3, fontVariantCaps: 'small-caps', letterSpacing: '0.2em', color: '#F8FAFC' }}>
                        Precision • Purity • Prestige
                    </p>
                </div>
            </section>


            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "Exclusive Golf Events & Tours Asia 2026",
                    "description": "Secure your invitation to The Horn Blower's Invitational and explore our pre-configured luxury golf tour itineraries.",
                    "isPartOf": {
                        "@type": "WebSite",
                        "url": "https://www.asiagolfspecialists.com/"
                    }
                })
            }} />
        </div>
    );
}

