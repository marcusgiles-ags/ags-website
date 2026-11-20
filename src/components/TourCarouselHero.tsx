'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

// ─── Tour slide data ─────────────────────────────────────────────────────────

interface TourSlide {
    name: string;
    badge: string;
    tagline: string;
    href: string;
    image: string;
    mobileImage?: string;
    imageAlt: string;
    duration: string;
    country: 'vietnam' | 'thailand' | 'cambodia';
    videoEmbedId: string;
    videoTitle: string;
    videoChannel: string;
}

const TOUR_SLIDES: TourSlide[] = [
    {
        name: 'Hoi An Beachfront Bliss',
        badge: '🇻🇳 Vietnam',
        tagline: '7 Days · Da Nang & Hoi An · Montgomerie Links, Vinpearl, Laguna Lăng Cô & Ba Na Hills',
        href: '/tours/hoi-an-beachfront-bliss/',
        image: '/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3.webp',
        mobileImage: '/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3-mobile.webp',
        imageAlt: 'Laguna Golf Lang Co championship course and tropical mountains on the Hoi An Beachfront Bliss Vietnam golf tour',
        duration: '7 Days',
        country: 'vietnam',
        videoEmbedId: 'Q9PUIDkvqgQ',
        videoTitle: 'Laguna Lăng Cô Official Opening Reel (Sir Nick Faldo)',
        videoChannel: 'Faldo Enterprises / Laguna Golf Lăng Cô'
    },
    {
        name: 'Bangkok & Hua Hin Fairways',
        badge: '🇹🇭 Thailand',
        tagline: '8 Days · Bangkok & Gulf Coast · Alpine, Thai Country Club, Black Mountain, Pineapple Valley & Springfield Royal',
        href: '/tours/the-bangkok-and-hua-hin-fairways/',
        image: '/images/tours/thailand/thailand-bangkok-thai-country-club-golf.webp',
        mobileImage: '/images/tours/thailand/thailand-bangkok-thai-country-club-golf-mobile.webp',
        imageAlt: 'Thai Country Club championship layout in Bangkok on the Bangkok and Hua Hin Fairways luxury golf tour in Thailand',
        duration: '8 Days',
        country: 'thailand',
        videoEmbedId: 'XgEOQIOu4Fw',
        videoTitle: 'Black Mountain Championship Course Flyover (Hole #1)',
        videoChannel: 'Black Mountain Golf Club & Resort'
    },
    {
        name: 'The Khmer Kingdom Links',
        badge: '🇰🇭 Cambodia',
        tagline: '7 Days · Phnom Penh & Siem Reap · Grand Phnom Penh (Nicklaus), Vattanac (Faldo) & Angkor Golf Resort (Faldo) — Angkor Wat Sunset Included',
        href: '/tours/the-khmer-kingdom-links/',
        image: '/images/tours/cambodia/cambodia-angkor-wat-sunrise-tour.webp',
        mobileImage: '/images/tours/cambodia/cambodia-angkor-wat-sunrise-tour-mobile.webp',
        imageAlt: 'Angkor Wat temple reflection at sunrise on the Khmer Kingdom Links luxury golf and culture tour in Cambodia',
        duration: '7 Days',
        country: 'cambodia',
        videoEmbedId: 'pEsj_ayDX1M',
        videoTitle: 'VISIT CAMBODIA! VISIT VATTANAC GOLF RESORT!',
        videoChannel: 'Vattanac Golf Resort'
    },
    {
        name: 'The Royal Siam Circuit',
        badge: '🇹🇭 Thailand',
        tagline: '7 Days · Bangkok & Hua Hin · Thai Country Club, Pineapple Valley, Springfield Royal & Black Mountain — The Standard Hotels',
        href: '/tours/thailand-royal-siam/',
        image: '/images/courses/thailand/black-mountain/black-mountain-golf-club-hero.webp',
        mobileImage: '/images/courses/thailand/black-mountain/black-mountain-golf-club-hero-mobile.webp',
        imageAlt: 'Black Mountain Golf Club championship fairways and granite peaks on the Royal Siam Circuit golf tour in Hua Hin',
        duration: '7 Days',
        country: 'thailand',
        videoEmbedId: 'XgEOQIOu4Fw',
        videoTitle: 'Black Mountain Championship Course Flyover',
        videoChannel: 'Black Mountain Golf Club & Resort'
    },
    {
        name: 'The An Bang Invitational',
        badge: '🇻🇳 Vietnam · Central Coast',
        tagline: "7 Days · Vietnam's Central Coast · An Bang Beach Villa, Ba Na Hills, Hoiana Shores & Montgomerie Links — Da Nang & Hội An",
        href: '/tours/vietnam-central-coast/',
        image: '/images/courses/vietnam/hoiana-shores/hoiana-shores-beachfront-golf.webp',
        mobileImage: '/images/courses/vietnam/hoiana-shores/hoiana-shores-beachfront-golf-mobile.webp',
        imageAlt: 'Hoiana Shores Golf Club beachfront links along the East Sea on the An Bang Invitational Vietnam Central Coast tour',
        duration: '7 Days',
        country: 'vietnam',
        videoEmbedId: 'jU5OSxR3OjQ',
        videoTitle: 'Hoiana Shores Golf Club - Video Background',
        videoChannel: 'Hoiana Resort & Golf'
    },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function TourCarouselHero() {
    const [active, setActive] = useState<number>(0);

    const total = TOUR_SLIDES.length;

    // Auto-advance carousel
    useEffect(() => {
        const timer = setInterval(() => {
            setActive(prev => (prev + 1) % total);
        }, 9000);
        return () => clearInterval(timer);
    }, [total]);

    const goTo = useCallback((idx: number) => {
        setActive(idx);
    }, []);

    return (
        <header
            className="hero"
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 0,
                backgroundColor: '#020617',
            }}
            aria-label="Featured Golf Tours"
        >
            {/* ─── AMBIENT CINEMATIC VIDEO BACKGROUND (65s MASTER MONTAGE) ─── */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 1, overflow: 'hidden', pointerEvents: 'none' }}>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    aria-label="Asia Golf Specialists — 65-second cinematic aerial journey across championship golf courses and cultural landscapes in Central Vietnam"
                    poster="/images/homepage/hero-slider/vietnam-coastal-golf-course-hoiana-shores-aerial-beachside.jpg"
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transform: 'translate(-50%, -50%)',
                        filter: 'brightness(0.85) contrast(1.08)',
                    }}
                >
                    <source src="/videos/hero-montage.mp4" type="video/mp4" />
                </video>
                {/* Balanced luxury scrim (allows video through while keeping text 100% readable) */}
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(to bottom, rgba(2, 6, 23, 0.35) 0%, rgba(2, 6, 23, 0.65) 65%, #020617 100%)',
                        zIndex: 2,
                    }}
                />
            </div>

            {/* ─── FOREGROUND TOUR CONTENT ─────────────────────────────────── */}
            <div className="container" style={{ position: 'relative', zIndex: 10, width: '100%' }}>
                {TOUR_SLIDES.map((slide, i) => (
                    <div
                        key={slide.href}
                        className="tour-carousel-slide"
                        aria-hidden={i !== active}
                        style={{
                            position: 'absolute',
                            inset: 0,
                            opacity: i === active ? 1 : 0,
                            pointerEvents: i === active ? 'auto' : 'none',
                            transition: 'opacity 1.1s cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                    >
                        <div className="tour-carousel-meta">
                            <span className="tour-carousel-badge">{slide.badge}</span>
                            <span className="tour-carousel-duration">{slide.duration}</span>
                        </div>
                        <h2 className="tour-carousel-title">{slide.name}</h2>
                        <p className="tour-carousel-tagline">{slide.tagline}</p>
                        
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginTop: '1.75rem' }}>
                            <Link href={slide.href} className="tour-carousel-cta" aria-label={`Explore ${slide.name}`}>
                                Explore This Tour →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* Carousel Dots */}
            <nav className="tour-carousel-dots" aria-label="Tour carousel navigation">
                {TOUR_SLIDES.map((slide, i) => (
                    <button
                        key={slide.href}
                        className={`tour-carousel-dot${i === active ? ' active' : ''}`}
                        onClick={() => goTo(i)}
                        aria-label={`View ${slide.name}`}
                        aria-current={i === active ? 'true' : undefined}
                    />
                ))}
            </nav>

            <div className="tour-carousel-counter" aria-live="polite" aria-atomic="true">
                <span>{active + 1}</span>
                <span style={{ opacity: 0.4, margin: '0 4px' }}>/</span>
                <span style={{ opacity: 0.4 }}>{total}</span>
            </div>
        </header>
    );
}
