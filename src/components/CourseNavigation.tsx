import Link from 'next/link';

type CourseNavProps = {
    prev: { title: string, path: string } | null;
    next: { title: string, path: string } | null;
    country: string;
    countryLink: string;
};

export default function CourseNavigation({ prev, next, country, countryLink }: CourseNavProps) {
    const ensureSlash = (p: string) => (p.endsWith('/') ? p : `${p}/`);
    return (
        <div style={{ position: 'relative', zIndex: 50 }}>
            {prev && (
                <Link
                    href={ensureSlash(prev.path)}
                    className="country-nav-arrow country-nav-prev"
                    aria-label={`Go to previous course: ${prev.title}`}
                    title={prev.title}
                >
                    <div className="arrow-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </div>
                    <span className="country-label" style={{ textTransform: 'capitalize' }}>Previous Course</span>
                </Link>
            )}

            {/* Back to Hub Link - center bottom before footer */}
            <div style={{ textAlign: 'center', padding: '4rem 0 0 0' }}>
                <Link href={ensureSlash(countryLink)} className="btn-ghost-gold" style={{ fontSize: '0.9rem' }}>
                    Back to {country} Courses
                </Link>
            </div>

            {next && (
                <Link
                    href={ensureSlash(next.path)}
                    className="country-nav-arrow country-nav-next"
                    aria-label={`Go to next course: ${next.title}`}
                    title={next.title}
                >
                    <span className="country-label" style={{ textTransform: 'capitalize' }}>Next Course</span>
                    <div className="arrow-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                </Link>
            )}
        </div>
    );
}
