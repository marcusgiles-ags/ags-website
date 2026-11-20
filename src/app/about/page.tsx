import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "About Us | Bespoke Golf Travel Architects",
    description: "Meet Asia Golf Specialists: Australian-led luxury golf tour curators with on-the-ground concierges across Vietnam, Thailand, and Cambodia since day one.",
  keywords: ["About Asia Golf Specialists", "Luxury Golf Tours 2026", "Asia Golf Specialists", "Premium Golf Travel"]
,

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/about/",
    },
    openGraph: {
        type: "website",
        title: "About Us | Bespoke Golf Travel Architects",
        description: "Meet Asia Golf Specialists: Australian-led luxury golf tour curators with on-the-ground concierges across Vietnam, Thailand, and Cambodia since day one.",
        url: "https://www.asiagolfspecialists.com/about/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/brand-library/vietnam/central/ba-na-hills/vietnam-central-ba-na-hills-shot-04.webp",
            width: 1200,
            height: 630,
            alt: "Asia Golf Specialists team — Luxury Golf Tour Experts",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | Bespoke Golf Travel Architects",
        description: "Meet Asia Golf Specialists: Australian-led luxury golf tour curators with on-the-ground concierges across Vietnam, Thailand, and Cambodia since day one.",
        images: ["https://www.asiagolfspecialists.com/images/brand-library/vietnam/central/ba-na-hills/vietnam-central-ba-na-hills-shot-04.webp"],
    },
};

export default function About() {
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
                    zIndex: 0
                }}>
                    <Image
                        src="/images/brand-library/vietnam/central/ba-na-hills/vietnam-central-ba-na-hills-shot-04.webp"
                        alt="The AGS Signature Standard"
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
                <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '800px', paddingTop: '25vh' }}>
                    <span style={{ color: '#D4AF37', letterSpacing: '0.25em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block', fontWeight: 600 }}>The AGS Identity</span>
                    <h1 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(3.5rem, 6vw, 5rem)', marginBottom: '1.5rem', color: '#F8FAFC', lineHeight: 1.1, fontWeight: 700 }}>
                        Authority on the <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Green</span>
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'rgba(248, 250, 252, 0.7)', lineHeight: 1.6, margin: '0 auto', maxWidth: '800px' }} itemProp="description" id="exec-summary">
                        We didn't just build a travel agency. We built the gold standard for luxury golf tours in Asia.
                    </p>
                </div>
            </header>

            {/* History & Values */}
            <section id="our-story" className="section" style={{ paddingTop: '8rem', paddingBottom: '8rem', backgroundColor: '#020617' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, marginBottom: '2.5rem', lineHeight: 1.2 }}>
                                Forged by <span style={{ color: '#D4AF37' }}>Aussie Golfers</span>, Refined by Local Experts.
                            </h2>
                            <div style={{ fontSize: '1.1rem', color: 'rgba(248, 250, 252, 0.8)', lineHeight: 1.8 }}>
                                <p style={{ marginBottom: '1.5rem' }}>
                                    Asia Golf Specialists was born out of frustration with mediocre winter loops and the headaches of organizing group travel. Founded by passionate discerning golfers who are also longtime residents of Vietnam, we combined our firsthand knowledge of elite expectations with deep, on-the-ground local expertise.
                                </p>
                                <p style={{ marginBottom: '1.5rem' }}>
                                    We believe a luxury golf tour isn't just about the grass you play on—it's about the seamless execution of the entire experience. We know what it takes to impress discerning golfers, because we demand the exact same level of excellence from our own trips.
                                </p>
                                <h3 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.75rem', color: '#D4AF37', marginTop: '3rem', marginBottom: '1.5rem', fontWeight: 700 }}>The AGS Standard</h3>
                                <p>
                                    We’ve personally vetted every course, tested every blade of grass on designer layouts, and slept in the 5-star suites we recommend. Your expectations are our baseline. We don't sell "packages"—we build exclusive, high-octane travel experiences that elevate mateship.
                                </p>
                            </div>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.2)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', position: 'relative', width: '100%', paddingBottom: '66.6%' }}>
                                <Image
                                    src="/images/homepage/ags-difference/salt-by-the-sea-hoi-an-an-bang-beach.webp"
                                    alt="AGS Luxury Coastline"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                            <div style={{ position: 'absolute', bottom: '-2rem', right: '-2rem', width: '200px', height: '200px', border: '2px solid #D4AF37', borderRadius: '4px', zIndex: -1, opacity: 0.3 }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founder & Managing Director Profile */}
            <section id="founder" className="section" style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#040918', borderTop: '1px solid rgba(212, 175, 55, 0.15)' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <span style={{ color: '#D4AF37', letterSpacing: '0.25em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1rem', display: 'block', fontWeight: 600 }}>Leadership &amp; Insider Access</span>
                    <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 700, marginBottom: '0.75rem', lineHeight: 1.2 }}>
                        Marcus Giles — <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Founder &amp; Managing Director</span>
                    </h2>
                    <p style={{ color: '#D4AF37', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.04em', marginBottom: '2rem' }}>
                        Australian Golf Industry Executive • Former Director of Sales &amp; Marketing, Ba Na Hills Golf Club • Former AGIF Executive
                    </p>
                    <div style={{ fontSize: '1.08rem', color: 'rgba(248, 250, 252, 0.85)', lineHeight: 1.85 }}>
                        <p style={{ marginBottom: '1.25rem' }}>
                            Before founding Asia Golf Specialists, Marcus Giles spent over two decades in senior commercial leadership across the Asia-Pacific region and inside the rope lines of Australian and Southeast Asian championship golf.
                        </p>
                        <p style={{ marginBottom: '1.25rem' }}>
                            In Australia, Marcus managed golf operations and marketing at <strong>13th Beach Golf Links</strong> on Victoria&apos;s Bellarine Peninsula — home of the Vic Open — where he saw firsthand what discerning club and international golfers expect from a championship layout and a well-run tournament week.
                        </p>
                        <p style={{ marginBottom: '1.25rem' }}>
                            Relocating to Vietnam in 2019, Marcus was appointed <strong>Director of Sales and Marketing at the IMG-managed Ba Na Hills Golf Club</strong> in Da Nang, working directly with international tour operators, club general managers, and VVIP visiting groups along Vietnam&apos;s Central Coast. He subsequently served in Ho Chi Minh City as <strong>Membership and Administration Manager for the Asian Golf Industry Federation (AGIF)</strong>, the regional umbrella body connecting Asia&apos;s premier championship clubs, course superintendents, and resort general managers across Vietnam, Thailand, Cambodia, and beyond.
                        </p>
                        <p style={{ marginBottom: '0' }}>
                            Based on the ground in Vietnam, Marcus founded Asia Golf Specialists to connect discerning travelling golfers from around the world with Southeast Asia&apos;s finest courses — replacing generic wholesale packages with insider tee-time access, vetted 5-star villas and resorts, and seamless private logistics built by someone who has actually run the clubs you are flying in to play.
                        </p>
                    </div>
                </div>
            </section>

            {/* Verified Google Client Reviews */}
            <section id="client-reviews" className="section" style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#020617', borderTop: '1px solid rgba(212, 175, 55, 0.12)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
                        <span style={{ color: '#D4AF37', letterSpacing: '0.25em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '0.75rem', display: 'block', fontWeight: 600 }}>Verified Google Reviews • 5.0 ★ Rating</span>
                        <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.25rem, 3.5vw, 3rem)', fontWeight: 700, marginBottom: '1rem' }}>
                            Trusted by Travelling <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Golf Groups</span>
                        </h2>
                        <a
                            href="https://share.google/R7EjdnCG1r726lVVz"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'rgba(248, 250, 252, 0.7)', fontSize: '0.95rem', textDecoration: 'underline' }}
                        >
                            View our verified 5.0 ★ profile on Google →
                        </a>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            {
                                author: "Nathan M.",
                                quote: "AAA Communication, Experience & Service! Marcus and his team delivered an outstanding and memorable six-day golfing experience.",
                            },
                            {
                                author: "Brad J.",
                                quote: "Awesome Trip. Golf courses were sensational and the whole trip was so well organised.",
                            },
                            {
                                author: "Cameron H.",
                                quote: "The team at Asia Golf Specialists arranged a remarkable experience, every part was so well organised. The golf courses were amazing, the city, the culture the energy was so great to be a part of.",
                            },
                        ].map((rev, i) => (
                            <div key={i} style={{ backgroundColor: 'rgba(8, 17, 38, 0.9)', border: '1px solid rgba(212, 175, 55, 0.25)', borderRadius: '8px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ color: '#D4AF37', fontSize: '1.1rem', letterSpacing: '0.1em', marginBottom: '1rem' }}>★★★★★</div>
                                    <p style={{ color: 'rgba(248, 250, 252, 0.9)', fontSize: '1rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                                        &ldquo;{rev.quote}&rdquo;
                                    </p>
                                </div>
                                <div style={{ borderTop: '1px solid rgba(212, 175, 55, 0.12)', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <strong style={{ color: '#F8FAFC', fontSize: '0.95rem' }}>{rev.author}</strong>
                                    <span style={{ color: 'rgba(212, 175, 55, 0.85)', fontSize: '0.8rem' }}>Verified Google Review</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tour Management Services */}
            <section id="tour-management" className="section" style={{ backgroundColor: 'rgba(5, 11, 26, 0.5)', borderTop: '1px solid rgba(212, 175, 55, 0.1)', borderBottom: '1px solid rgba(212, 175, 55, 0.1)', paddingTop: '8rem', paddingBottom: '8rem' }}>
                <div className="container text-center">
                    <span style={{ color: '#D4AF37', letterSpacing: '0.25em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block', fontWeight: 600 }}>Operational Excellence</span>
                    <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, marginBottom: '2.5rem' }}>
                        Flawless Execution. <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Zero Headaches.</span>
                    </h2>
                    <p style={{ maxWidth: '800px', margin: '0 auto 5rem', fontSize: '1.2rem', color: 'rgba(248, 250, 252, 0.7)', lineHeight: 1.7 }}>
                        Our Tour Management Service is your dedicated concierge from the moment you leave the tarmac to your final putt.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '4rem' }}>

                        <div className="ags-card" style={{ textAlign: 'left' }}>
                            <div className="ags-card-content" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
                                <div style={{ color: '#D4AF37', marginBottom: '2rem' }}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" /></svg>
                                </div>
                                <h3 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.75rem', color: '#D4AF37', marginBottom: '1.5rem', fontWeight: 700 }}>VIP Transfers</h3>
                                <p style={{ color: 'rgba(248, 250, 252, 0.6)', lineHeight: 1.7 }}>
                                    We handle luxury airport transfers directly to the resort or course. Private vehicles, cold towels, and seamless logistics. No waiting in taxi lines.
                                </p>
                            </div>
                        </div>

                        <div className="ags-card" style={{ textAlign: 'left' }}>
                            <div className="ags-card-content" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
                                <div style={{ color: '#D4AF37', marginBottom: '2rem' }}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" /><path d="M4 6v12c0 1.1.9 2 2 2h14v-4" /><path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" /></svg>
                                </div>
                                <h3 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.75rem', color: '#D4AF37', marginBottom: '1.5rem', fontWeight: 700 }}>Premium Gear</h3>
                                <p style={{ color: 'rgba(248, 250, 252, 0.6)', lineHeight: 1.7 }}>
                                    VIP club rentals and caddie coordination are sorted well before you touch down. We ensure the equipment matches the caliber of the course.
                                </p>
                            </div>
                        </div>

                        <div className="ags-card" style={{ textAlign: 'left' }}>
                            <div className="ags-card-content" style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
                                <div style={{ color: '#D4AF37', marginBottom: '2rem' }}>
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v3m0 14v3M5 12H2m20 0h-3M6.3 6.3l2.1 2.1m7.2 7.2l2.1 2.1M6.3 17.7l2.1-2.1m7.2-7.2l2.1-2.1" /></svg>
                                </div>
                                <h3 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.75rem', color: '#D4AF37', marginBottom: '1.5rem', fontWeight: 700 }}>Elite Dining</h3>
                                <p style={{ color: 'rgba(248, 250, 252, 0.6)', lineHeight: 1.7 }}>
                                    Exclusive dinner reservations and private chef experiences booked ensuring the night matches the round. Access to the hardest-to-book tables.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* The Horn of Plenty */}
            <section id="horn-of-plenty" className="section" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '6rem', alignItems: 'center' }}>
                        <div style={{ order: 2 }}>
                            <span style={{ color: '#D4AF37', letterSpacing: '0.25em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block', fontWeight: 600 }}>Our Signature Ritual</span>
                            <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 700, marginBottom: '2.5rem', lineHeight: 1.2 }}>
                                The <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Horn of Plenty</span>
                            </h2>
                            <div style={{ fontSize: '1.1rem', color: 'rgba(248, 250, 252, 0.8)', lineHeight: 1.8 }}>
                                <p style={{ marginBottom: '1.5rem' }}>
                                    A championship round deserves a championship finish. Exclusive to AGS clients, "The Horn of Plenty" is our signature post-round ritual, where the honor is won by the winner of any competition held on the trip.
                                </p>
                                <p style={{ marginBottom: '1.5rem' }}>
                                    Step off the 18th green directly into VIP treatment—curated local delicacies, premium cold beverages, and an ambiance that celebrates the day's victories alongside your mates. Horn Blowers go onto an ongoing honor roll published on the website.
                                </p>
                                <p>
                                    It's more than just a drink; it's the ultimate capstone to a perfect day on the course.
                                </p>
                            </div>
                        </div>
                        <div style={{ order: 1 }}>
                            <div style={{ position: 'relative' }}>
                                <div style={{
                                    borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.2)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                                    position: 'relative',
                                    width: '100%',
                                    paddingBottom: '62.5%' /* 16:10 Aspect Ratio */
                                }}>
                                    <Image
                                        src="/images/homepage/ags-difference/horn-of-plenty-winner.webp"
                                        alt="AGS Signature Horn of Plenty Ritual - Post-Round Winner Celebration for Premium Golf Tours Asia"
                                        className="grayscale hover:grayscale-0 transition-all duration-700"
                                        fill
                                        style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                <div style={{ position: 'absolute', top: '-2rem', left: '-2rem', width: '200px', height: '200px', border: '2px solid #D4AF37', borderRadius: '4px', zIndex: -1, opacity: 0.3 }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final Conversion Push */}
            <section className="section" style={{ backgroundColor: 'rgba(212, 175, 55, 0.05)', padding: '10rem 0', textAlign: 'center', borderTop: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container">
                    <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(3rem, 5vw, 4rem)', fontWeight: 700, marginBottom: '2rem' }}>Demand More From Your <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Next Trip.</span></h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 3rem', fontSize: '1.25rem', color: 'rgba(248, 250, 252, 0.7)' }}>Get a custom itinerary built for your group within 48 hours.</p>
                    <Link href="/quote/" className="btn-primary" style={{ fontSize: '1.2rem', padding: '1.2rem 3rem' }}>Speak to a Golf Specialist</Link>
                </div>
            </section>

            {/* Simple Footer */}
            <section aria-label="Brand Mark" style={{ padding: '6rem 0', backgroundColor: '#020617', borderTop: '1px solid rgba(212, 175, 55, 0.1)', textAlign: 'center' }}>
                <div className="container">
                    <div style={{ width: '100%', height: '60px', marginBottom: '2rem', display: 'flex', justifyContent: 'center' }}>
                        <img
                            src="/images/brand-library/logos/ags-clubmark-outline-white.webp"
                            alt="AGS Club Mark"
                            style={{ height: '100%', width: 'auto', objectFit: 'contain', opacity: 0.2 }}
                            loading="lazy"
                        />
                    </div>
                    <p style={{ color: 'rgba(248, 250, 252, 0.4)', letterSpacing: '0.1em', fontSize: '0.9rem' }}>
                        © {new Date().getFullYear()} Asia Golf Specialists. All Rights Reserved.
                    </p>
                </div>
            </section>

            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "name": "About Asia Golf Specialists",
                    "url": "https://www.asiagolfspecialists.com/about/",
                    "description": "Meet Asia Golf Specialists and Founder Marcus Giles — Australian-led luxury golf tour curators with on-the-ground concierges across Vietnam, Thailand, and Cambodia.",
                    "mainEntity": {
                        "@type": "TravelAgency",
                        "@id": "https://www.asiagolfspecialists.com/#organization",
                        "name": "Asia Golf Specialists",
                        "url": "https://www.asiagolfspecialists.com/",
                        "image": "https://www.asiagolfspecialists.com/images/brand-library/logos/ags-logo-transparent.webp",
                        "telephone": "+84 935 601 099",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "27 Nguyen Phan Vinh",
                            "addressLocality": "Hoi An",
                            "addressRegion": "Da Nang",
                            "postalCode": "550000",
                            "addressCountry": "VN"
                        },
                        "founder": {
                            "@type": "Person",
                            "@id": "https://www.asiagolfspecialists.com/#marcus-giles",
                            "name": "Marcus Giles",
                            "jobTitle": "Founder & Managing Director",
                            "url": "https://www.asiagolfspecialists.com/about/#founder",
                            "sameAs": [
                                "https://www.linkedin.com/in/marcus-giles-golf/"
                            ],
                            "alumniOf": [
                                { "@type": "Organization", "name": "13th Beach Golf Links" },
                                { "@type": "Organization", "name": "Ba Na Hills Golf Club" },
                                { "@type": "Organization", "name": "Asian Golf Industry Federation (AGIF)" }
                            ]
                        },
                        "sameAs": [
                            "https://www.linkedin.com/company/asia-golf-specialists/",
                            "https://www.linkedin.com/in/marcus-giles-golf/",
                            "https://www.instagram.com/asiagolfspecialists/",
                            "https://www.facebook.com/asiagolfspecialists/",
                            "https://maps.app.goo.gl/HxkuatKNmTkHpERJ8",
                            "https://share.google/R7EjdnCG1r726lVVz",
                            "https://www.google.com/search?kgmid=/g/11nj0hlmqy"
                        ],
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "5.0",
                            "bestRating": "5",
                            "worstRating": "1",
                            "ratingCount": "3",
                            "reviewCount": "3"
                        },
                        "review": [
                            {
                                "@type": "Review",
                                "author": { "@type": "Person", "name": "Nathan M." },
                                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                                "reviewBody": "AAA Communication, Experience & Service! Marcus and his team delivered an outstanding and memorable six-day golfing experience."
                            },
                            {
                                "@type": "Review",
                                "author": { "@type": "Person", "name": "Brad J." },
                                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                                "reviewBody": "Awesome Trip. Golf courses were sensational and the whole trip was so well organised."
                            },
                            {
                                "@type": "Review",
                                "author": { "@type": "Person", "name": "Cameron H." },
                                "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
                                "reviewBody": "The team at Asia Golf Specialists arranged a remarkable experience, every part was so well organised. The golf courses were amazing, the city, the culture the energy was so great to be a part of."
                            }
                        ]
                    }
                })
            }} />
</div>
    );
}

