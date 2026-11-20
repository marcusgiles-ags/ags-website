import Link from 'next/link';

type ArticleNavProps = {
    prev: { title: string, path: string } | null;
    next: { title: string, path: string } | null;
};

export default function ArticleNavigation({ prev, next }: ArticleNavProps) {
    if (!prev && !next) return null;
    const ensureSlash = (p: string) => (p.endsWith('/') ? p : `${p}/`);

    return (
        <>
            {prev && (
                <Link
                    href={ensureSlash(prev.path)}
                    className="country-nav-arrow country-nav-prev"
                    aria-label={`Go to previous article: ${prev.title}`}
                    title={prev.title}
                >
                    <div className="arrow-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                    </div>
                    <span className="country-label" style={{ textTransform: 'capitalize' }}>Previous Article</span>
                </Link>
            )}

            {next && (
                <Link
                    href={ensureSlash(next.path)}
                    className="country-nav-arrow country-nav-next"
                    aria-label={`Go to next article: ${next.title}`}
                    title={next.title}
                >
                    <span className="country-label" style={{ textTransform: 'capitalize' }}>Next Article</span>
                    <div className="arrow-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                </Link>
            )}
        </>
    );
}
