import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import Image from 'next/image';
import ArticleNavigation from '@/components/ArticleNavigation';
import ArticleCTA from '@/components/ArticleCTA';
import CourseComparison from '@/components/CourseComparison';
import InlineFastInquiry from '@/components/InlineFastInquiry';
import ConciergeWhatsAppButton from '@/components/ConciergeWhatsAppButton';
import Navbar from "@/components/Navbar";
import { getTurnkeyRecommendations } from '@/lib/turnkeyRecommendations';
import lastmodManifest from '@/data/lastmod-manifest.json';

export type DestinationCountry = 'vietnam' | 'thailand' | 'cambodia';

const COUNTRY_WIKI: Record<DestinationCountry, { name: string; sameAs: string }> = {
    vietnam: { name: 'Vietnam', sameAs: 'https://en.wikipedia.org/wiki/Vietnam' },
    thailand: { name: 'Thailand', sameAs: 'https://en.wikipedia.org/wiki/Thailand' },
    cambodia: { name: 'Cambodia', sameAs: 'https://en.wikipedia.org/wiki/Cambodia' },
};

export function getDestinationArticles(country: DestinationCountry) {
    const dataDir = path.join(process.cwd(), 'src/data/seo-articles');
    if (!fs.existsSync(dataDir)) return [];

    return fs.readdirSync(dataDir)
        .filter(file => file.endsWith('.json'))
        .map(file => {
            const raw = fs.readFileSync(path.join(dataDir, file), 'utf-8');
            return JSON.parse(raw);
        })
        .filter(article => article.category === country || article.category === 'general');
}

export async function generateDestinationArticleMetadata(country: DestinationCountry, params: Promise<{ slug: string }>) {
    const { slug } = await params;
    const dataDir = path.join(process.cwd(), 'src/data/seo-articles');
    const filePath = path.join(dataDir, `${slug}.json`);

    if (!fs.existsSync(filePath)) {
        return { title: 'Not Found' };
    }

    const raw = fs.readFileSync(filePath, 'utf-8');
    const article = JSON.parse(raw);

    if (article.category !== country) {
        return { title: 'Not Found' };
    }

    const rawText = article.description || article.content.replace(/^>\s*\*\*Executive Summary:\*\*\s*/i, '').replace(/[\[\]\*\#\>\`]/g, '').replace(/\n/g, ' ').trim();
    const description = rawText.length > 158 ? rawText.substring(0, 155).trim() + '...' : rawText;
    const absHeroImage = article.heroImage ? (article.heroImage.startsWith('http') ? article.heroImage : `https://www.asiagolfspecialists.com${article.heroImage}`) : undefined;

    return {
        title: `${article.title}`,
        description,
        ...(article.noindex ? { robots: { index: false, follow: true } } : {}),
        keywords: `${article.title.toLowerCase().split(' ').join(', ')}, golf, ${article.category}, asia golf specialists, luxury travel`,
        alternates: {
            canonical: `https://www.asiagolfspecialists.com/destinations/${country}/${slug}/`,
        },
        openGraph: {
            type: 'website',
            title: article.title,
            description,
            url: `https://www.asiagolfspecialists.com/destinations/${country}/${slug}/`,
            images: absHeroImage ? [{ url: absHeroImage }] : [],
        },
        twitter: {
            card: "summary_large_image",
            title: article.title,
            description,
            images: absHeroImage ? [absHeroImage] : [],
        },
    };
}

export function generateDestinationArticleStaticParams(country: DestinationCountry) {
    const articles = getDestinationArticles(country);
    return articles.map(article => ({ slug: article.slug }));
}

export default async function DestinationArticleTemplate({
    country,
    params,
}: {
    country: DestinationCountry;
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const dataDir = path.join(process.cwd(), 'src/data/seo-articles');
    const filePath = path.join(dataDir, `${slug}.json`);

    if (!fs.existsSync(filePath)) {
        notFound();
    }

    const raw = fs.readFileSync(filePath, 'utf-8');
    const article = JSON.parse(raw);

    if (article.category !== country) {
        notFound();
    }

    const plainTextDescription = article.description || article.content.replace(/^>\s*\*\*Executive Summary:\*\*\s*/i, '').replace(/[\[\]\*\#\>\`]/g, '').replace(/\n/g, ' ').trim().substring(0, 155) + '...';
    const currentCountry = article.category !== 'general' ? article.category : 'destination';

    const articles = getDestinationArticles(country)
        .filter(a => a.subcategory === article.subcategory && a.category !== 'general')
        .sort((a, b) => a.slug.localeCompare(b.slug));

    const currentIndex = articles.findIndex(a => a.slug === slug);
    const prevArticle = currentIndex > 0 ? { title: articles[currentIndex - 1].title, path: `/destinations/${article.category}/${articles[currentIndex - 1].slug}/` } : null;
    const nextArticle = currentIndex !== -1 && currentIndex < articles.length - 1 ? { title: articles[currentIndex + 1].title, path: `/destinations/${article.category}/${articles[currentIndex + 1].slug}/` } : null;
    const hubPath = article.subcategory === 'accommodations' ? 'accommodations' : 'courses';
    const wikiPlace = COUNTRY_WIKI[country];
    const { signatureTour, flagshipPackage } = getTurnkeyRecommendations(country, slug, article.title);

    return (
        <>
            <Navbar />

            <article className="section" style={{ paddingTop: '200px', minHeight: '80vh' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>

                    <div style={{ marginBottom: '2rem' }}>
                        <Link href={`/destinations/${currentCountry}/${hubPath}/`} className="text-gold" style={{ textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ fontSize: '1.2rem', lineHeight: '1' }}>&larr;</span> BACK TO {currentCountry}
                        </Link>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', alignItems: 'center' }}>
                            <span style={{ backgroundColor: 'rgba(235, 211, 159, 0.1)', color: 'var(--color-secondary)', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase' }}>Expert Review</span>
                            <span style={{ fontSize: '0.85rem', color: '#888' }}>{new Date(article.dateAdded).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                        </div>
                    </div>

                    <h1 style={{ marginBottom: '2rem', fontSize: 'clamp(2.25rem, 5vw, 3rem)' }}>{article.title}</h1>

                    {article.heroImage && (
                        <div style={{ width: '100%', height: '400px', position: 'relative', marginBottom: '3rem', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}>
                            <Image src={article.heroImage} alt={article.title} fill sizes="(max-width: 768px) 100vw, 1200px" style={{ objectFit: 'cover' }} priority />
                        </div>
                    )}

                    {/* Professional GEO Markdown Reader utilizing ReactMarkdown */}
                    <div className="geo-article-content" style={{ lineHeight: '1.8', fontSize: '1.125rem', color: '#e0e0e0', marginTop: '2rem' }}>
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                p({ children }) {
                                    return <p style={{ marginBottom: '1.5rem' }}>{children}</p>;
                                },
                                h2({ children }) {
                                    return <h2 style={{ color: 'var(--color-gold)', marginTop: '2.5rem', marginBottom: '1.25rem', fontSize: '1.35rem', fontWeight: 600 }}>{children}</h2>;
                                },
                                h3({ children }) {
                                    return <h3 style={{ color: '#fff', marginTop: '2rem', marginBottom: '1rem', fontSize: '1.15rem', fontWeight: 600 }}>{children}</h3>;
                                },
                                table({ children }) {
                                    return (
                                        <div style={{ overflowX: 'auto', marginBottom: '2.5rem', marginTop: '1.5rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>{children}</table>
                                        </div>
                                    );
                                },
                                th({ children }) {
                                    return <th style={{ padding: '1rem', backgroundColor: 'rgba(235, 211, 159, 0.1)', color: 'var(--color-gold)', borderBottom: '1px solid rgba(255,255,255,0.1)', fontWeight: '600' }}>{children}</th>;
                                },
                                td({ children }) {
                                    return <td style={{ padding: '1rem', borderBottom: '1px solid rgba(255,255,255,0.05)', verticalAlign: 'top' }}>{children}</td>;
                                },
                                blockquote({ children }) {
                                    return (
                                        <div style={{ background: 'rgba(212,175,55,0.05)', borderLeft: '4px solid #D4AF37', padding: '1.5rem', marginBottom: '2rem', borderRadius: '4px' }}>
                                            {children}
                                        </div>
                                    );
                                },
                                a({ href, children }) {
                                    return <a href={href} style={{ color: '#D4AF37', textDecoration: 'underline', fontWeight: 'bold' }}>{children}</a>;
                                },
                                img({ src, alt }) {
                                    return (
                                        <div style={{ display: 'block', width: '100%', height: '420px', position: 'relative', margin: '2.5rem 0', borderRadius: '8px', overflow: 'hidden' }}>
                                            <Image
                                                src={(src as string) || ''}
                                                alt={alt || ''}
                                                fill
                                                sizes="(max-width: 768px) 100vw, 800px"
                                                style={{ objectFit: 'cover' }}
                                                loading="lazy"
                                            />
                                        </div>
                                    );
                                }
                            }}
                        >
                            {article.content}
                        </ReactMarkdown>
                        {article.courseComparison?.courseA && article.courseComparison?.courseB && (
                            <CourseComparison
                                courseA={article.courseComparison.courseA}
                                courseB={article.courseComparison.courseB}
                            />
                        )}
                    </div>
                </div>
            </article>

            {/* The Conversion Bridge: Featured Turnkey Itineraries */}
            <section
                style={{
                    backgroundColor: "#020617",
                    borderTop: "1px solid rgba(212,175,55,0.15)",
                    borderBottom: "1px solid rgba(212,175,55,0.15)",
                    padding: "5rem 0",
                }}
            >
                <div className="container" style={{ maxWidth: "860px" }}>
                    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
                        <div style={{ color: "#D4AF37", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em", fontWeight: 600, marginBottom: "0.5rem" }}>
                            Turnkey Golf Expeditions
                        </div>
                        <h2
                            style={{
                                fontFamily: "var(--font-primary-serif)",
                                fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
                                color: "#F8FAFC",
                                margin: "0 0 1rem 0",
                            }}
                        >
                            Experience This Destination in Luxury
                        </h2>
                        <p style={{ color: "rgba(248, 250, 252, 0.75)", fontSize: "1.05rem", maxWidth: "680px", margin: "0 auto", lineHeight: 1.6 }}>
                            Whether seeking our all-inclusive hosted signature expeditions or a custom modular group blueprint, explore our premier turnkey itineraries below.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
                        {/* Primary: Signature Tour */}
                        <div
                            style={{
                                backgroundColor: "rgba(212,175,55,0.04)",
                                border: "2px solid #D4AF37",
                                borderRadius: "8px",
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.4)"
                            }}
                        >
                            <div style={{ position: "relative", height: "200px" }}>
                                <Image
                                    src={signatureTour.heroImage}
                                    alt={signatureTour.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                                <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", backgroundColor: "#D4AF37", color: "#050B1A", padding: "0.25rem 0.75rem", fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", borderRadius: "3px" }}>
                                    Signature Tour
                                </div>
                            </div>
                            <div style={{ padding: "1.75rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                <div style={{ color: "#D4AF37", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem", fontWeight: 600 }}>
                                    {signatureTour.duration} &bull; Hosted Luxury
                                </div>
                                <h3 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "1.4rem", color: "#F8FAFC", margin: "0 0 0.75rem 0", lineHeight: 1.3 }}>
                                    {signatureTour.title}
                                </h3>
                                <p style={{ color: "rgba(248,250,252,0.75)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
                                    {signatureTour.highlight}
                                </p>
                                <div style={{ marginTop: "auto", paddingTop: "1rem" }}>
                                    <Link
                                        href={signatureTour.url}
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            backgroundColor: "#D4AF37",
                                            color: "#050B1A",
                                            padding: "0.75rem 1.5rem",
                                            borderRadius: "4px",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.08em",
                                            fontWeight: 700,
                                            fontSize: "0.82rem",
                                            textDecoration: "none",
                                            width: "100%",
                                            justifyContent: "center"
                                        }}
                                    >
                                        Explore Signature Tour &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Secondary: Flagship Package */}
                        <div
                            style={{
                                backgroundColor: "rgba(255,255,255,0.02)",
                                border: "1px solid rgba(212,175,55,0.25)",
                                borderRadius: "8px",
                                overflow: "hidden",
                                display: "flex",
                                flexDirection: "column"
                            }}
                        >
                            <div style={{ position: "relative", height: "200px" }}>
                                <Image
                                    src={flagshipPackage.heroImage}
                                    alt={flagshipPackage.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                />
                                <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", backgroundColor: "rgba(2,6,23,0.85)", color: "#D4AF37", border: "1px solid rgba(212,175,55,0.4)", padding: "0.25rem 0.75rem", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", borderRadius: "3px" }}>
                                    Customizable Package
                                </div>
                            </div>
                            <div style={{ padding: "1.75rem", flexGrow: 1, display: "flex", flexDirection: "column" }}>
                                <div style={{ color: "#D4AF37", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem", fontWeight: 600 }}>
                                    {flagshipPackage.duration}
                                </div>
                                <h3 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "1.4rem", color: "#F8FAFC", margin: "0 0 0.75rem 0", lineHeight: 1.3 }}>
                                    {flagshipPackage.title}
                                </h3>
                                <p style={{ color: "rgba(248,250,252,0.75)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                                    {flagshipPackage.highlight}
                                </p>
                                {flagshipPackage.guidePrice && (
                                    <div style={{ color: "#D4AF37", fontSize: "0.9rem", fontWeight: 600, marginBottom: "1rem" }}>
                                        {flagshipPackage.guidePrice}
                                    </div>
                                )}
                                <div style={{ marginTop: "auto", paddingTop: "1rem" }}>
                                    <Link
                                        href={flagshipPackage.url}
                                        style={{
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            backgroundColor: "transparent",
                                            border: "1px solid #D4AF37",
                                            color: "#D4AF37",
                                            padding: "0.75rem 1.5rem",
                                            borderRadius: "4px",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.08em",
                                            fontWeight: 600,
                                            fontSize: "0.82rem",
                                            textDecoration: "none",
                                            width: "100%",
                                            justifyContent: "center"
                                        }}
                                    >
                                        Configure Itinerary &rarr;
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inline Fast Inquiry & Direct WhatsApp Concierge Capture */}
            <section
                aria-label="Direct Concierge Enquiry"
                style={{
                    backgroundColor: "#040918",
                    borderBottom: "1px solid rgba(212,175,55,0.14)",
                    padding: "4rem 1rem 2rem",
                }}
            >
                <div className="container" style={{ maxWidth: "860px", margin: "0 auto" }}>
                    <ConciergeWhatsAppButton
                        itemType="article"
                        itemTitle={article.title}
                        destination={wikiPlace.name}
                    />
                    <InlineFastInquiry
                        packageTitle={article.title}
                        destination={wikiPlace.name}
                    />
                </div>
            </section>

            {/* FAQ Section */}
            {article.faqs?.length > 0 && (
                <section
                    style={{
                        backgroundColor: "rgba(212,175,55,0.04)",
                        borderTop: "1px solid rgba(212,175,55,0.1)",
                        borderBottom: "1px solid rgba(212,175,55,0.1)",
                        padding: "5rem 0",
                    }}
                >
                    <div className="container" style={{ maxWidth: "860px" }}>
                        <h2
                            style={{
                                fontFamily: "var(--font-primary-serif)",
                                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                                fontWeight: 700,
                                marginBottom: "2.5rem",
                                color: "#D4AF37",
                            }}
                        >
                            Frequently Asked Questions
                        </h2>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                            {article.faqs.map((faq: { q: string; a: string }, i: number) => (
                                <details
                                    key={i}
                                    style={{
                                        borderBottom: "1px solid rgba(212,175,55,0.12)",
                                        padding: "1.5rem 0",
                                    }}
                                >
                                    <summary
                                        style={{
                                            fontSize: "1.05rem",
                                            fontWeight: 600,
                                            cursor: "pointer",
                                            color: "#F8FAFC",
                                            listStyle: "none",
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            gap: "1rem",
                                        }}
                                    >
                                        <span>{faq.q}</span>
                                        <span style={{ color: "#D4AF37", fontSize: "1.2rem", flexShrink: 0 }}>+</span>
                                    </summary>
                                    <p
                                        style={{
                                            marginTop: "1rem",
                                            color: "rgba(248,250,252,0.65)",
                                            lineHeight: 1.75,
                                            fontSize: "1rem",
                                        }}
                                    >
                                        {faq.a}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Structured Schema for Answer Engines */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Article",
                                "mainEntityOfPage": {
                                    "@type": "WebPage",
                                    "@id": `https://www.asiagolfspecialists.com/destinations/${article.category}/${article.slug}/`
                                },
                                "headline": article.title,
                                "description": plainTextDescription,
                                "datePublished": article.dateAdded,
                                "dateModified": (lastmodManifest as Record<string, { lastmod: string }>)[`src/data/seo-articles/${article.slug}.json`]?.lastmod || article.dateAdded,
                                "image": article.heroImage ? {
                                    "@type": "ImageObject",
                                    "url": article.heroImage.startsWith('http') ? article.heroImage : `https://www.asiagolfspecialists.com${article.heroImage}`,
                                    "width": 1200,
                                    "height": 630
                                } : undefined,
                                "author": {
                                      "@type": "Person",
                                      "@id": "https://www.asiagolfspecialists.com/#marcus-giles",
                                      "name": "Marcus Giles",
                                      "jobTitle": "Founder & Managing Director",
                                      "url": "https://www.asiagolfspecialists.com/about/#founder",
                                      "sameAs": ["https://www.linkedin.com/in/marcus-giles-golf/"]
                                  },
                                "publisher": {
                                    "@type": "TravelAgency",
                                    "@id": "https://www.asiagolfspecialists.com/#organization",
                                    "name": "Asia Golf Specialists",
                                    "url": "https://www.asiagolfspecialists.com/",
                                    "image": "https://www.asiagolfspecialists.com/images/brand-library/logos/ags-logo-the-club-mark-nobkgrd.webp",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "streetAddress": "27 Nguyen Phan Vinh",
                                        "addressLocality": "Hoi An",
                                        "addressRegion": "Da Nang",
                                        "postalCode": "550000",
                                        "addressCountry": "VN"
                                    },
                                    "logo": {
                                        "@type": "ImageObject",
                                        "url": "https://www.asiagolfspecialists.com/images/brand-library/logos/ags-logo-the-club-mark-nobkgrd.webp"
                                    }
                                },
                                  "about": [
                                      { "@type": "Thing", "name": "Golf", "sameAs": "https://en.wikipedia.org/wiki/Golf" },
                                      { "@type": "Thing", "name": "Golf Tourism", "sameAs": "https://en.wikipedia.org/wiki/Golf_tourism" },
                                      { "@type": "Place", "name": wikiPlace.name, "sameAs": wikiPlace.sameAs },
                                      { "@type": "Thing", "name": "Golf Tour Operator", "sameAs": "https://en.wikipedia.org/wiki/Tour_operator" },
                                      {
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
                                  ]
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                    { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://www.asiagolfspecialists.com/destinations/" },
                                    { "@type": "ListItem", "position": 3, "name": article.category.charAt(0).toUpperCase() + article.category.slice(1), "item": `https://www.asiagolfspecialists.com/destinations/${article.category}/` },
                                    { "@type": "ListItem", "position": 4, "name": article.title, "item": `https://www.asiagolfspecialists.com/destinations/${article.category}/${article.slug}/` }
                                ]
                            },
                            ...(article.faqs?.length > 0 ? [{
                                "@type": "FAQPage",
                                "mainEntity": article.faqs.map((f: any) => ({
                                    "@type": "Question",
                                    "name": f.q,
                                    "acceptedAnswer": { "@type": "Answer", "text": f.a }
                                }))
                            }] : [])
                        ]
                    })
                }}
            />


            {/* CTA Block — GTM tracked via ArticleCTA client component */}
            <ArticleCTA
                ctaText={article.ctaText}
                ctaButton={article.ctaButton}
                slug={article.slug}
                title={article.title}
                category={article.category}
            />

            <ArticleNavigation prev={prevArticle} next={nextArticle} />

            {/* Related Posts — Phase 3 Content Engine Integration */}
            {article.relatedPosts?.length > 0 && (
                <section
                    style={{
                        backgroundColor: "#020617",
                        padding: "0 0 8rem",
                        borderTop: "1px solid rgba(212, 175, 55, 0.1)",
                    }}
                >
                    <div className="container" style={{ maxWidth: "860px", paddingTop: "4rem" }}>
                        <h2
                            style={{
                                fontFamily: "var(--font-primary-serif)",
                                fontSize: "clamp(1.6rem, 2.5vw, 2rem)",
                                fontWeight: 700,
                                marginBottom: "2.5rem",
                                color: "#F8FAFC",
                            }}
                        >
                            Deeper Dives & Related Guides
                        </h2>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                                gap: "2rem",
                            }}
                        >
                            {article.relatedPosts.map((related: any) => {
                                const blogFile = path.join(process.cwd(), 'src/data/blog-posts', `${related.slug}.json`);
                                const seoFile = path.join(process.cwd(), 'src/data/seo-articles', `${related.slug}.json`);
                                let href = `/destinations/${article.category}/${related.slug}/`;
                                if (fs.existsSync(blogFile)) {
                                    try {
                                        const bData = JSON.parse(fs.readFileSync(blogFile, 'utf-8'));
                                        if (bData.status === 'draft') return null;
                                    } catch {}
                                    href = `/blog/${related.slug}/`;
                                } else if (fs.existsSync(seoFile)) {
                                    try {
                                        const sData = JSON.parse(fs.readFileSync(seoFile, 'utf-8'));
                                        const cat = (sData.category && sData.category !== 'general') ? sData.category : article.category;
                                        href = `/destinations/${cat}/${related.slug}/`;
                                    } catch {}
                                } else {
                                    return null;
                                }

                                return (
                                    <Link
                                        key={related.slug}
                                        href={href}
                                        style={{ textDecoration: "none" }}
                                    >
                                        <div
                                            style={{
                                                border: "1px solid rgba(212, 175, 55, 0.15)",
                                                borderRadius: "4px",
                                                overflow: "hidden",
                                                transition: "all 0.3s ease",
                                                height: "100%",
                                                backgroundColor: "rgba(255,255,255,0.02)"
                                            }}
                                            className="related-post-card"
                                        >
                                            {related.heroImage && (
                                                <div style={{ position: "relative", height: "150px" }}>
                                                    <Image
                                                        src={related.heroImage}
                                                        alt={related.title}
                                                        fill
                                                        style={{ objectFit: "cover" }}
                                                    />
                                                </div>
                                            )}
                                            <div style={{ padding: "1.25rem" }}>
                                                <p
                                                    style={{
                                                        fontFamily: "var(--font-primary-serif)",
                                                        fontSize: "1rem",
                                                        fontWeight: 700,
                                                        color: "#D4AF37",
                                                        lineHeight: 1.35,
                                                        marginBottom: "0.75rem"
                                                    }}
                                                >
                                                    {related.title}
                                                </p>
                                                <p
                                                    style={{
                                                        fontSize: "0.72rem",
                                                        color: "rgba(212, 175, 55, 0.6)",
                                                        letterSpacing: "0.1em",
                                                        textTransform: "uppercase",
                                                        fontWeight: 600
                                                    }}
                                                >
                                                    Explore Guide &rarr;
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
