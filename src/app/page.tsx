import Image from "next/image";
import Link from "next/link";
import TourCarouselHero from "@/components/TourCarouselHero";
import GuideDownloadCTA from "@/components/GuideDownloadCTA";
import Navbar from "@/components/Navbar";
import FeaturedArticles from "@/components/FeaturedArticles";
import { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
    title: { absolute: "Asia Golf Specialists | Luxury Golf Tours SE Asia 2026" },
    description: "Luxury golf tours in Vietnam & Thailand. Experience championship fairways, 5-star villas, and VIP logistics for discerning travelers.",
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Asia Golf Specialists | Luxury Golf Tours SE Asia 2026" },
        description: "Luxury golf tours in Vietnam & Thailand. Experience championship fairways, 5-star villas, and VIP logistics for discerning travelers.",
        url: "https://www.asiagolfspecialists.com/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/homepage/hero-slider/vietnam-coastal-golf-course-hoiana-shores-aerial-beachside.jpg",
            width: 1200,
            height: 630,
            alt: "Asia Golf Specialists — Luxury Golf Tours in Southeast Asia",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Asia Golf Specialists | Luxury Golf Tours SE Asia 2026" },
        description: "Luxury golf tours in Vietnam & Thailand. Experience championship fairways, 5-star villas, and VIP logistics for discerning travelers.",
        images: ["https://www.asiagolfspecialists.com/images/homepage/hero-slider/vietnam-coastal-golf-course-hoiana-shores-aerial-beachside.jpg"],
    },
};

export default function Home() {
    return (
        <>
            <Navbar />

            {/* Tour Carousel Hero — 5 featured tours, clickable, with personalization */}
            <TourCarouselHero />

            {/* SEO H1 — visible to search engines and screen readers, visually de-emphasised */}
            <h1 style={{ textAlign: 'center', fontSize: 'clamp(1rem, 2vw, 1.5rem)', fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(212, 175, 55, 0.7)', padding: '2rem 0 0', margin: 0 }}>
                Premium Luxury Golf Tours &amp; Curated Fairway Escapes
            </h1>

            {/* GEO AI Citation Block (Replacing the hidden TL;DR) */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '3rem 2rem 1rem' }}>
                <div className="container" style={{ maxWidth: '850px', margin: '0 auto', textAlign: 'center', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', paddingBottom: '3rem' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>Who is Asia Golf Specialists?</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Asia Golf Specialists (AGS) is a boutique, Australian expat-owned luxury golf tour operator headquartered in Da Nang and Hoi An, Vietnam. With a verified catalog of 67 championship golf courses, 50 five-star boutique hotels and private pool villas, and flagship signature multi-day itineraries across Vietnam, Thailand, and Cambodia, AGS engineers bespoke golfing journeys with zero third-party intermediaries.</p>
                        <ul style={{ listStyleType: 'disc', paddingLeft: '2rem', marginBottom: '1.5rem', color: 'var(--color-cream)' }}>
                            <li><strong>Championship Access:</strong> AGS guarantees priority morning tee times at Southeast Asia&apos;s top-100 ranked layouts, including Hoiana Shores, Ba Na Hills, The Bluffs Grand Ho Tram, and Black Mountain.</li>
                            <li><strong>Elite Logistics &amp; Dedicated Caddies:</strong> Every golfer receives 1:1 dedicated caddie assignments, luxury private airport-to-fairway touring vehicle transfers, and seamlessly coordinated domestic flights between regional hubs.</li>
                            <li><strong>Luxury Residency:</strong> AGS curates bespoke accommodations ranging from private beachfront pool villas on An Bang Beach to 5-star boutique heritage hotels in Hanoi, Saigon, and Bangkok, catering to intimate foursomes through to corporate tournaments.</li>
                        </ul>
                        <p>Unlike global booking aggregators, the AGS founders live permanently on the ground in Central Vietnam. This hyper-local presence allows them to mathematically optimize fairway transfer times, bypass crowded tourist traps, and secure exclusive cultural experiences that standard tour agencies cannot access.</p>
                    </div>
                </div>
            </section>

            {/* The Manifesto Hub */}
            <section className="section" style={{ padding: '4rem 0 2rem' }}>
                <div className="container">

                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <h2 className="manifesto-text" style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
                            We dictate the standard so you don&apos;t have to.<br />
                            <span style={{ color: '#D4AF37', fontStyle: 'italic', fontWeight: '400' }}>The AGS Difference.</span>
                        </h2>
                    </div>

                    <div className="manifesto-cards-grid">
                        {/* Courses Card */}
                        <Link href="/courses/" className="manifesto-card">
                            <Image
                                src="/images/brand-library/logos/ags-logo-the-club-mark-nobkgrd-120.webp"
                                alt="AGS Club Mark"
                                width={60}
                                height={60}
                                className="manifesto-card-logo"
                            />
                            <h3>Championship Calibre Courses</h3>
                            <p className="manifesto-card-desc" itemProp="description" id="exec-summary">Play on exclusive championship fairways across Southeast Asia, meticulously selected for their immaculate conditioning, private caddies, and world-class design.</p>
                            <p className="manifesto-card-tag">Explore The Greens</p>
                        </Link>

                        {/* Accommodations Card */}
                        <Link href="/accommodations/" className="manifesto-card">
                            <Image
                                src="/images/brand-library/logos/ags-logo-the-club-mark-nobkgrd-120.webp"
                                alt="AGS Club Mark"
                                width={60}
                                height={60}
                                className="manifesto-card-logo"
                            />
                            <h3>Ultimate Luxury Recovery</h3>
                            <p className="manifesto-card-desc">Retreat to curated sanctuaries and private villas that offer uncompromising privacy, bespoke service, and unparalleled comfort after a long day.</p>
                            <p className="manifesto-card-tag">Discover Retreats</p>
                        </Link>

                        {/* About Us Card */}
                        <Link href="/about/" className="manifesto-card">
                            <Image
                                src="/images/brand-library/logos/ags-logo-the-club-mark-nobkgrd-120.webp"
                                alt="AGS Club Mark"
                                width={60}
                                height={60}
                                className="manifesto-card-logo"
                            />
                            <h3>Delivering Unforgettable Experiences</h3>
                            <p className="manifesto-card-desc">With over two decades of dedication to the international elite, our heritage is built on curating perfectly seamless and purely luxurious escapes.</p>
                            <p className="manifesto-card-tag">Our Heritage</p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="section" style={{ padding: '4rem 0 2rem' }}>
                <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
                    <GuideDownloadCTA />
                </div>
            </section>

            <section style={{ padding: 0, position: 'relative' }}>
                <div className="destinations-grid">
                    <Link href="/destinations/vietnam/" className="destination-card">
                        <Image
                            src="/images/destinations/vietnam/hero/vietnam-north-rice-terraces-hero.webp"
                            className="destination-img"
                            alt="Vietnam Golf Tours"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="destination-content">
                            <h3>Vietnam</h3>
                            <span className="text-subtle" style={{ opacity: 0, transition: 'all 0.5s', transform: 'translateY(10px)' }}>Explore</span>
                        </div>
                    </Link>

                    <Link href="/destinations/thailand/" className="destination-card">
                        <Image
                            src="/images/destinations/thailand/hero/thailand-travel-brochure-hero.webp"
                            className="destination-img"
                            alt="Thailand Golf Tours"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="destination-content">
                            <h3>Thailand</h3>
                            <span className="text-subtle" style={{ opacity: 0, transition: 'all 0.5s', transform: 'translateY(10px)' }}>Explore</span>
                        </div>
                    </Link>

                    <Link href="/destinations/cambodia/" className="destination-card">
                        <Image
                            src="/images/destinations/cambodia/hero/cambodia-angkor-wat-majestic-hero.webp"
                            className="destination-img"
                            alt="Cambodia Golf Tours"
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            style={{ objectFit: 'cover' }}
                        />
                        <div className="destination-content">
                            <h3>Cambodia</h3>
                            <span className="text-subtle" style={{ opacity: 0, transition: 'all 0.5s', transform: 'translateY(10px)' }}>Explore</span>
                        </div>
                    </Link>
                </div>
            </section>

            {/* Verified Google Client Reviews Strip */}
            <section aria-label="Verified Google Client Reviews" className="section" style={{ paddingTop: '5rem', paddingBottom: '5rem', backgroundColor: '#040918', borderTop: '1px solid rgba(212, 175, 55, 0.12)', borderBottom: '1px solid rgba(212, 175, 55, 0.12)' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <span style={{ color: '#D4AF37', letterSpacing: '0.2em', fontSize: '0.8rem', textTransform: 'uppercase', display: 'block', marginBottom: '0.6rem', fontWeight: 600 }}>5.0 ★ Rating on Google • On-Ground Luxury Golf Concierge</span>
                        <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2rem, 3.2vw, 2.75rem)', fontWeight: 700, marginBottom: '0.75rem' }}>
                            What Travelling <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Golfers Say</span>
                        </h2>
                        <p style={{ color: 'rgba(248, 250, 252, 0.7)', fontSize: '0.95rem' }}>
                            Curated by Founder <Link href="/about/#founder" style={{ color: '#D4AF37', textDecoration: 'underline' }}>Marcus Giles</Link> (Former Director of Sales &amp; Marketing, Ba Na Hills Golf Club &amp; Golf Operations Manager, 13th Beach Golf Links)
                        </p>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
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
                        ].map((rev, idx) => (
                            <div key={idx} style={{ backgroundColor: 'rgba(8, 17, 38, 0.9)', border: '1px solid rgba(212, 175, 55, 0.22)', borderRadius: '8px', padding: '1.75rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div>
                                    <div style={{ color: '#D4AF37', fontSize: '1rem', letterSpacing: '0.1em', marginBottom: '0.75rem' }}>★★★★★</div>
                                    <p style={{ color: 'rgba(248, 250, 252, 0.9)', fontSize: '0.95rem', lineHeight: 1.7, fontStyle: 'italic', marginBottom: '1.25rem' }}>
                                        &ldquo;{rev.quote}&rdquo;
                                    </p>
                                </div>
                                <div style={{ borderTop: '1px solid rgba(212, 175, 55, 0.12)', paddingTop: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <strong style={{ color: '#F8FAFC', fontSize: '0.9rem' }}>{rev.author}</strong>
                                    <a href="https://share.google/R7EjdnCG1r726lVVz" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', fontSize: '0.78rem', textDecoration: 'underline' }}>Verified Google Review</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <FeaturedArticles />

            {/* Hover effect for destination cards */}
            <style dangerouslySetInnerHTML={{
                __html: `
 .destination-card:hover .text-subtle {
 opacity: 1 !important;
 transform: translateY(0) !important;
 }
 `}} />

            {/* Schema.org — TravelAgency + ItemList of featured tours */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify([
                    {
                        "@context": "https://schema.org",
                        "@type": "WebSite",
                        "@id": "https://www.asiagolfspecialists.com/#website",
                        "url": "https://www.asiagolfspecialists.com/",
                        "name": "Asia Golf Specialists",
                        "description": "Bespoke luxury golf tours in Vietnam, Thailand, and Cambodia.",
                        "publisher": {
                            "@id": "https://www.asiagolfspecialists.com/#organization"
                        }
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "VideoObject",
                        "@id": "https://www.asiagolfspecialists.com/#hero-video",
                        "name": "Asia Golf Specialists — 65-Second Central Vietnam Golf & Cultural Reel",
                        "description": "Cinematic aerial showcase of championship golf in Vietnam, featuring Robert Trent Jones Jr.'s Hoiana Shores, Luke Donald's Ba Na Hills, and the cultural landscapes and lantern-lit waterways of Da Nang and Hoi An.",
                        "thumbnailUrl": [
                            "https://www.asiagolfspecialists.com/images/homepage/hero-slider/vietnam-coastal-golf-course-hoiana-shores-aerial-beachside.jpg"
                        ],
                        "uploadDate": "2026-10-27T00:00:00+07:00",
                        "duration": "PT1M5S",
                        "contentUrl": "https://www.asiagolfspecialists.com/videos/hero-montage.mp4",
                        "embedUrl": "https://www.asiagolfspecialists.com/",
                        "publisher": {
                            "@type": "Organization",
                            "@id": "https://www.asiagolfspecialists.com/#organization"
                        }
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "TravelAgency",
                        "@id": "https://www.asiagolfspecialists.com/#organization",
                        "name": "Asia Golf Specialists",
                        "url": "https://www.asiagolfspecialists.com/",
                        "description": "Asia Golf Specialists (AGS) is a boutique, expat-owned luxury golf tour operator headquartered in Da Nang, Vietnam, engineering bespoke championship golf itineraries across Vietnam, Thailand, and Cambodia.",
                        "image": "https://www.asiagolfspecialists.com/images/brand-library/logos/ags-logo-transparent.webp",
                        "logo": "https://www.asiagolfspecialists.com/images/brand-library/logos/ags-logo-the-club-mark-nobkgrd.webp",
                        "telephone": "+84 935 601 099",
                        "priceRange": "$$",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "27 Nguyen Phan Vinh",
                            "addressLocality": "Hoi An",
                            "addressRegion": "Da Nang",
                            "postalCode": "550000",
                            "addressCountry": "VN"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": 15.9038,
                            "longitude": 108.3361
                        },
                        "knowsAbout": [
                            "Luxury Golf Travel",
                            "Southeast Asia Golf Tours",
                            "Championship Golf Courses",
                            "Vietnam Golf Packages",
                            "Thailand Golf Vacations",
                            "Cambodia Golf Holidays"
                        ],
                        "sameAs": [
                            "https://www.linkedin.com/company/asia-golf-specialists/",
                            "https://www.linkedin.com/in/marcus-giles-golf/",
                            "https://www.instagram.com/asiagolfspecialists/",
                            "https://www.facebook.com/asiagolfspecialists/",
                            "https://maps.app.goo.gl/HxkuatKNmTkHpERJ8",
                            "https://share.google/R7EjdnCG1r726lVVz",
                            "https://www.google.com/search?kgmid=/g/11nj0hlmqy"
                        ],
                        "founder": {
                            "@type": "Person",
                            "@id": "https://www.asiagolfspecialists.com/#marcus-giles",
                            "name": "Marcus Giles",
                            "jobTitle": "Founder & Managing Director",
                            "url": "https://www.asiagolfspecialists.com/about/#founder",
                            "sameAs": [
                                "https://www.linkedin.com/in/marcus-giles-golf/"
                            ]
                        },
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
                        ],
                        "makesOffer": [
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Hoi An Beachfront Bliss — Vietnam Golf Tour",
                                    "description": "7-day luxury golf tour in Da Nang and Hoi An. Montgomerie Links, Vinpearl Golf Nam Hoi An, Laguna Lang Co, and Ba Na Hills. Beachfront villa accommodation.",
                                    "url": "https://www.asiagolfspecialists.com/tours/hoi-an-beachfront-bliss/"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "Bangkok & Hua Hin Fairways — Thailand Golf Tour",
                                    "description": "8-day luxury golf tour through Bangkok and Hua Hin. Alpine Golf Club, Thai Country Club, Black Mountain, Pineapple Valley, and Springfield Royal.",
                                    "url": "https://www.asiagolfspecialists.com/tours/the-bangkok-and-hua-hin-fairways/"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "The Khmer Kingdom Links — Cambodia Golf Tour",
                                    "description": "7-day luxury golf and culture tour in Phnom Penh and Siem Reap. Grand Phnom Penh (Nicklaus), Vattanac (Faldo), and Angkor Golf Resort (Faldo). Angkor Wat sunset tour included.",
                                    "url": "https://www.asiagolfspecialists.com/tours/the-khmer-kingdom-links/"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "The Royal Siam Circuit — Thailand Golf Tour",
                                    "description": "7-day luxury golf circuit through Bangkok and Hua Hin. Thai Country Club, Pineapple Valley, Springfield Royal, and Black Mountain. Staying at The Standard Hotels.",
                                    "url": "https://www.asiagolfspecialists.com/tours/thailand-royal-siam/"
                                }
                            },
                            {
                                "@type": "Offer",
                                "itemOffered": {
                                    "@type": "Service",
                                    "name": "The An Bang Invitational — Vietnam Central Coast Golf Tour",
                                    "description": "7-day luxury golf tour on Vietnam's Central Coast, Da Nang and Hoi An. Ba Na Hills, Hoiana Shores, and Montgomerie Links. Private An Bang beachfront villa accommodation.",
                                    "url": "https://www.asiagolfspecialists.com/tours/vietnam-central-coast/"
                                }
                            }
                        ],
                        "areaServed": ["Vietnam", "Thailand", "Cambodia", "Australia"]
                    },
                    {
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "Featured AGS Golf Tours",
                        "description": "Asia Golf Specialists' signature luxury golf tour itineraries across Vietnam, Thailand, and Cambodia.",
                        "url": "https://www.asiagolfspecialists.com/tours/",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Hoi An Beachfront Bliss",
                                "url": "https://www.asiagolfspecialists.com/tours/hoi-an-beachfront-bliss/",
                                "image": "https://www.asiagolfspecialists.com/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3.webp"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Bangkok & Hua Hin Fairways",
                                "url": "https://www.asiagolfspecialists.com/tours/the-bangkok-and-hua-hin-fairways/",
                                "image": "https://www.asiagolfspecialists.com/images/tours/thailand/thailand-bangkok-thai-country-club-golf.webp"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "The Khmer Kingdom Links",
                                "url": "https://www.asiagolfspecialists.com/tours/the-khmer-kingdom-links/",
                                "image": "https://www.asiagolfspecialists.com/images/tours/cambodia/cambodia-angkor-wat-sunrise-tour.webp"
                            },
                            {
                                "@type": "ListItem",
                                "position": 4,
                                "name": "The Royal Siam Circuit",
                                "url": "https://www.asiagolfspecialists.com/tours/thailand-royal-siam/",
                                "image": "https://www.asiagolfspecialists.com/images/courses/thailand/black-mountain/black-mountain-golf-club-hero.webp"
                            },
                            {
                                "@type": "ListItem",
                                "position": 5,
                                "name": "The An Bang Invitational",
                                "url": "https://www.asiagolfspecialists.com/tours/vietnam-central-coast/",
                                "image": "https://www.asiagolfspecialists.com/images/courses/vietnam/hoiana-shores/hoiana-shores-beachfront-golf.webp"
                            }
                        ]
                    }
                ])
            }} />
        </>
    );
}
