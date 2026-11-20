"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [toursDropdownOpen, setToursDropdownOpen] = useState(false);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    // Close menu on navigation
    useEffect(() => {
        setIsMenuOpen(false);
        setToursDropdownOpen(false);
    }, [pathname]);

    const isToursOrPackages = pathname?.startsWith('/tours') || pathname?.startsWith('/packages');

    return (
        <nav className="navbar">
            <div className="container nav-container" style={{ maxWidth: '100%', padding: '0 1rem' }}>
                <Link href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.1rem' }}>
                    <Image
                        src="/images/brand-library/logos/ags-logo-the-club-mark-nobkgrd-220.webp"
                        alt="AGS Logo"
                        width={110}
                        height={110}
                        style={{ filter: 'brightness(0) invert(1)', height: '110px', width: 'auto', objectFit: 'contain' }}
                        priority
                    />
                    <span className="logo-text">Asia Golf<br />Specialists</span>
                </Link>

                {/* Desktop Links */}
                <div className="nav-links">
                    <Link href="/" className={`nav-link ${pathname === '/' ? 'text-gold' : ''}`}>Home</Link>
                    <Link href="/destinations/" className={`nav-link ${pathname === '/destinations' || (pathname?.startsWith('/destinations') && pathname !== '/destinations') ? 'text-gold' : ''}`}>Destinations</Link>
                    <Link href="/courses/" className={`nav-link ${pathname?.startsWith('/courses') ? 'text-gold' : ''}`}>Courses</Link>
                    <Link href="/accommodations/" className={`nav-link ${pathname?.startsWith('/accommodations') ? 'text-gold' : ''}`}>Accommodations</Link>
                    
                    {/* Tours & Packages Dropdown */}
                    <div
                        className="nav-dropdown-wrapper"
                        onMouseEnter={() => setToursDropdownOpen(true)}
                        onMouseLeave={() => setToursDropdownOpen(false)}
                    >
                        <Link
                            href="/tours/"
                            className={`nav-link ${isToursOrPackages ? 'text-gold' : ''}`}
                            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                        >
                            <span>Tours</span>
                            <span style={{ fontSize: '0.55rem', opacity: 0.7, transform: toursDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s ease' }}>▼</span>
                        </Link>
                        <div className={`nav-dropdown-menu ${toursDropdownOpen ? 'open' : ''}`}>
                            <Link href="/tours/" className="nav-dropdown-item" onClick={() => setToursDropdownOpen(false)}>
                                <span className="nav-dropdown-title">Signature Tours</span>
                                <span className="nav-dropdown-desc">Hosted Flagship Luxury Odysseys</span>
                            </Link>
                            <div style={{ height: '1px', backgroundColor: 'rgba(212, 175, 55, 0.15)', margin: '0.35rem 0' }} />
                            <Link href="/packages/" className="nav-dropdown-item" onClick={() => setToursDropdownOpen(false)}>
                                <span className="nav-dropdown-title">Tailored Packages</span>
                                <span className="nav-dropdown-desc">Customizable Regional Blueprints</span>
                            </Link>
                        </div>
                    </div>

                    <Link href="/blog/" className={`nav-link ${pathname?.startsWith('/blog') ? 'text-gold' : ''}`}>Journal</Link>
                    <Link href="/about/" className={`nav-link ${pathname === '/about' ? 'text-gold' : ''}`}>About</Link>
                    <Link href="/quote/" className="btn-primary">Speak to a Specialist</Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Mobile Overlay */}
                <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
                    <Link href="/" className={`mobile-nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
                    <Link href="/destinations/" className={`mobile-nav-link ${pathname?.startsWith('/destinations') ? 'active' : ''}`}>Destinations</Link>
                    <Link href="/courses/" className={`mobile-nav-link ${pathname?.startsWith('/courses') ? 'active' : ''}`}>Courses</Link>
                    <Link href="/accommodations/" className={`mobile-nav-link ${pathname?.startsWith('/accommodations') ? 'active' : ''}`}>Accommodations</Link>
                    <Link href="/tours/" className={`mobile-nav-link ${pathname?.startsWith('/tours') ? 'active' : ''}`}>Signature Tours</Link>
                    <Link href="/packages/" className={`mobile-nav-link ${pathname?.startsWith('/packages') ? 'active' : ''}`}>Tailored Packages</Link>
                    <Link href="/blog/" className={`mobile-nav-link ${pathname?.startsWith('/blog') ? 'active' : ''}`}>Journal</Link>
                    <Link href="/about/" className={`mobile-nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
                    <Link href="/quote/" className="btn-solid-gold" style={{ marginTop: '2rem' }}>Speak to a Specialist</Link>
                </div>
            </div>
        </nav>
    );
}
