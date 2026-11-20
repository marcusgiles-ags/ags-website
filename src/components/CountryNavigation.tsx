'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const COUNTRIES = ['vietnam', 'thailand', 'cambodia'];

export default function CountryNavigation() {
    const pathname = usePathname();

    // Do not show on the main hub page or pages outside destinations
    if (!pathname || pathname === '/destinations') {
        return null;
    }

    // Determine if this is an article page
    const parts = pathname.split('/').filter(Boolean); // e.g. ['destinations', 'vietnam', 'slug']
    const isArticlePage = parts.length === 3 && !['accommodations', 'courses', 'culinary', 'culture', 'nightlife'].includes(parts[2]);
    if (isArticlePage) return null;

    // Find if the current path contains one of our countries
    const currentCountryIndex = COUNTRIES.findIndex(c => pathname.includes(`/destinations/${c}`));

    if (currentCountryIndex === -1) {
        return null;
    }

    const currentCountry = COUNTRIES[currentCountryIndex];

    // Calculate prev and next indices
    const prevIndex = (currentCountryIndex - 1 + COUNTRIES.length) % COUNTRIES.length;
    const nextIndex = (currentCountryIndex + 1) % COUNTRIES.length;

    const prevCountry = COUNTRIES[prevIndex];
    const nextCountry = COUNTRIES[nextIndex];

    // Preserve the context (e.g., /courses/, /accommodations/, or nothing if it's the hub)
    const getContextPath = (targetCountry: string) => {
        const replaced = pathname.replace(`/destinations/${currentCountry}`, `/destinations/${targetCountry}`);
        return replaced.endsWith('/') ? replaced : `${replaced}/`;
    };

    const prevPath = getContextPath(prevCountry);
    const nextPath = getContextPath(nextCountry);

    return (
        <>
            <Link
                href={prevPath}
                className="country-nav-arrow country-nav-prev"
                aria-label={`Go to ${prevCountry}`}
            >
                <div className="arrow-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                </div>
                <span className="country-label" style={{ textTransform: 'capitalize' }}>{prevCountry}</span>
            </Link>

            <Link
                href={nextPath}
                className="country-nav-arrow country-nav-next"
                aria-label={`Go to ${nextCountry}`}
            >
                <span className="country-label" style={{ textTransform: 'capitalize' }}>{nextCountry}</span>
                <div className="arrow-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
            </Link>


        </>
    );
}
