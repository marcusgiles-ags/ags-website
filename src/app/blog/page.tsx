import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import fs from "fs";
import path from "path";

// Re-check for newly approved/scheduled posts every hour — enables automatic publishing
export const revalidate = 3600;

export const metadata = {
  title: { absolute: "SE Asia Golf Guides, Course Reviews & 2026 Costs | AGS" },
  description:
    "Unfiltered Vietnam, Thailand & Cambodia golf course reviews, 2026 green-fee & caddie cost guides, and seasonal weather matrices by Founder Marcus Giles.",
  alternates: {
    canonical: "https://www.asiagolfspecialists.com/blog/",
  },
  openGraph: {
        
    title: { absolute: "SE Asia Golf Guides, Course Reviews & 2026 Costs | AGS" },
    description:
      "Unfiltered Vietnam, Thailand & Cambodia golf course reviews, 2026 green-fee & caddie cost guides, and seasonal weather matrices by Founder Marcus Giles.",
    url: "https://www.asiagolfspecialists.com/blog/",
    siteName: "Asia Golf Specialists",
    type: "website",
    images: [
      {
        url: "https://www.asiagolfspecialists.com/images/homepage/hero-slider/vietnam-coastal-golf-course-hoiana-shores-aerial-beachside.webp",
        width: 1200,
        height: 630,
        alt: "Asia Golf Specialists Journal — Championship Golf Travel in Southeast Asia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: "SE Asia Golf Guides, Course Reviews & 2026 Costs | AGS" },
    description: "Unfiltered Vietnam, Thailand & Cambodia golf course reviews, 2026 green-fee & caddie cost guides, and seasonal weather matrices by Founder Marcus Giles.",
    images: ["https://www.asiagolfspecialists.com/images/homepage/hero-slider/vietnam-coastal-golf-course-hoiana-shores-aerial-beachside.webp"],
  },
};

type Article = {
  slug: string;
  title: string;
  description?: string;
  heroImage?: string;
  category?: string;
  subCategory?: string;
  country?: string;
  dateAdded?: string;
  noindex?: boolean;
};

function getAllArticles(): Array<Article & { country: string; articleType: string }> {
  const dataDir = path.join(process.cwd(), "src/data/seo-articles");
  if (!fs.existsSync(dataDir)) return [];

  return fs
    .readdirSync(dataDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => {
      const raw = fs.readFileSync(path.join(dataDir, f), "utf-8");
      const article = JSON.parse(raw) as Article;
      if (article.noindex) return null;
      const desc =
        article.description ||
        ((article as any).content
          ? (article as any).content
              .replace(/[\s\S]*?Executive Summary:\*\*/, "")
              .replace(/[\[\]\*\#\>\`]/g, "")
              .replace(/\n/g, " ")
              .trim()
              .substring(0, 160) + "..."
          : "");
      const cat = article.category || "";
      const country = cat.startsWith("vietnam")
        ? "Vietnam"
        : cat.startsWith("thailand")
        ? "Thailand"
        : cat.startsWith("cambodia")
        ? "Cambodia"
        : "Vietnam";
      return {
        slug: article.slug,
        title: article.title,
        description: desc,
        heroImage: article.heroImage,
        dateAdded: article.dateAdded,
        country,
        articleType: "Golf & Lifestyle",
      };
    })
    .filter(Boolean) as Array<Article & { country: string; articleType: string }>;
}

function getBlogPosts(): Array<{
  slug: string;
  title: string;
  description: string;
  heroImage?: string;
  heroImageAlt?: string;
  country: string[];
  articleType: string;
  publishDate: string;
}> {
  const dataDir = path.join(process.cwd(), "src/data/blog-posts");
  if (!fs.existsSync(dataDir)) return [];
  const today = new Date().toISOString().split("T")[0];
  return fs
    .readdirSync(dataDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => {
      try {
        const raw = fs.readFileSync(path.join(dataDir, f), "utf-8");
        const post = JSON.parse(raw);
        if (post.status !== "approved") return null;
        if (!post.publishDate || post.publishDate > today) return null;
        return {
          slug: post.slug || f.replace(".json", ""),
          title: post.title,
          description: post.description,
          heroImage: post.heroImage,
          heroImageAlt: post.heroImageAlt,
          country: post.country || ["Vietnam"],
          articleType: post.articleType || "Golf & Lifestyle",
          publishDate: post.publishDate,
        };
      } catch {
        return null;
      }
    })
    .filter(Boolean) as Array<{
      slug: string;
      title: string;
      description: string;
      heroImage?: string;
      heroImageAlt?: string;
      country: string[];
      articleType: string;
      publishDate: string;
    }>;
}

export default function BlogHub() {
  const seoArticles = getAllArticles();
  const blogPosts = getBlogPosts();

  const ONE_MONTH_MS = 30 * 24 * 60 * 60 * 1000;
  const now = Date.now();
  const isDateWithinLastMonth = (dateStr?: string) => {
    if (!dateStr) return false;
    const dateValue = new Date(dateStr).getTime();
    return (now - dateValue) <= ONE_MONTH_MS;
  };

  const blogSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Blog",
        name: "Asia Golf Specialists Journal",
        description:
          "Expert guides, course reviews, and luxury itineraries for golf travel in Vietnam, Thailand, and Cambodia.",
        url: "https://www.asiagolfspecialists.com/blog/",
        inLanguage: "en",
        publisher: {
          "@type": "Organization",
          name: "Asia Golf Specialists",
          url: "https://www.asiagolfspecialists.com",
          logo: {
            "@type": "ImageObject",
            url: "https://www.asiagolfspecialists.com/images/brand-library/logos/ags-logo-the-club-mark-nobkgrd.webp"
          }
        },
      },
      {
        "@type": "ItemList",
        name: "Asia Golf Specialists Journal — All Articles",
        numberOfItems: seoArticles.length + blogPosts.length,
        itemListElement: [
          ...blogPosts.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `https://www.asiagolfspecialists.com/blog/${p.slug}/`,
          })),
          ...seoArticles.map((a, i) => ({
            "@type": "ListItem",
            position: blogPosts.length + i + 1,
            url: `https://www.asiagolfspecialists.com/destinations/${a.country.toLowerCase()}/${a.slug}/`,
          })),
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.asiagolfspecialists.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Journal",
            item: "https://www.asiagolfspecialists.com/blog/",
          },
        ],
      },
    ],
  };

  const countryFilters = ["All", "Vietnam", "Thailand", "Cambodia"];
  const typeFilters = ["All", "Golf & Lifestyle", "Culinary", "Culture", "Nightlife"];

  // Combine new blog posts + seo articles for the grid, sorted by date
  const allItems = [
    ...blogPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      description: p.description,
      heroImage: p.heroImage,
      country: Array.isArray(p.country) ? p.country[0] : p.country,
      articleType: p.articleType,
      href: `/blog/${p.slug}/`,
      isNew: isDateWithinLastMonth(p.publishDate),
      date: p.publishDate,
    })),
    ...seoArticles.map((a) => ({
      slug: a.slug,
      title: a.title,
      description: a.description || "",
      heroImage: a.heroImage,
      country: a.country,
      articleType: a.articleType,
      href: `/destinations/${a.country.toLowerCase()}/${a.slug}/`,
      isNew: isDateWithinLastMonth(a.dateAdded),
      date: a.dateAdded || "2020-01-01T00:00:00.000Z",
    })),
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const newGuides = allItems.slice(0, 3);
  const archiveGuides = allItems.slice(3);

  return (
    <main style={{ backgroundColor: "#020617", minHeight: "100vh", color: "#F8FAFC" }}>
      <Navbar />

      {/* Hero */}
      {/* Hero */}
      <header className="hero" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, zIndex: 0, WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)' }}>
              <Image 
                  src="/images/destinations/vietnam/hero/vietnam-japanese-bridge-night-shopping-hero.webp" 
                  alt="Asia Golf Specialists Journal" 
                  fill 
                  sizes="100vw" 
                  style={{ objectFit: 'cover' }} 
                  priority 
              />
              <div className="hero-overlay" style={{ position: 'absolute', inset: 0 }}></div>
          </div>
          <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '850px', paddingTop: 'calc(120px + 5vh)', paddingBottom: '4rem' }}>
              <span style={{ color: '#D4AF37', letterSpacing: '0.25em', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 600, display: 'block', marginBottom: '1.5rem' }}>
                  Asia Golf Specialists
              </span>
              <h1 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 700, lineHeight: 1.1, marginBottom: '1.5rem' }}>
                  The <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Journal</span>
              </h1>
              
              {/* GEO AI Citation Block (Integrated directly into the Hero like Tours Page) */}
              <div className="geo-summary" style={{ fontSize: '1.1rem', color: 'rgba(248, 250, 252, 0.9)', lineHeight: 1.8, margin: '0 auto', maxWidth: '850px', textAlign: 'left', marginTop: '3rem' }} itemProp="description" id="exec-summary">
                  <h2 style={{ color: '#D4AF37', fontSize: '1.2rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem', fontFamily: 'var(--font-primary-serif)', textAlign: 'center' }}>
                      The Curator's Brief
                  </h2>
                  <p style={{ marginBottom: '1.5rem' }}>
                      The <strong>Asia Golf Specialists Journal</strong> is the definitive editorial hub for <strong>luxury golf travel in Southeast Asia</strong>. We publish expert course reviews, destination guides, itinerary planning frameworks, and insider knowledge tailored for discerning international golfers visiting <strong>Vietnam</strong>, <strong>Thailand</strong>, and <strong>Cambodia</strong>.
                  </p>
                  <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', color: 'rgba(248, 250, 252, 0.8)' }}>
                      <li><span style={{ color: '#D4AF37' }}>&bull;</span> <strong>Championship Course Reviews:</strong> Unfiltered, technical breakdowns of elite layouts like <strong>Hoiana Shores</strong> and <strong>Black Mountain</strong>.</li>
                      <li><span style={{ color: '#D4AF37' }}>&bull;</span> <strong>Luxury Recovery Guides:</strong> Curated selections of five-star accommodations, private beachfront villas, and wellness resorts perfectly positioned near the fairways.</li>
                      <li><span style={{ color: '#D4AF37' }}>&bull;</span> <strong>VIP Travel Logistics:</strong> Deep dives into optimizing regional flights, bespoke caddie cultures, and ground transportation for seamless travel.</li>
                  </ul>
                  <p style={{ textAlign: 'center' }}>
                      Authored exclusively by our on-the-ground <strong>Local Guardians</strong>, every article is designed to cut through generic tourism advice and provide the actionable, high-fidelity intelligence required to execute flawless, ultra-premium golf tours.
                  </p>
              </div>
          </div>
      </header>


      {/* Filter Bar — client-side via data attributes + CSS :has() / JS-free approach */}
      <section style={{ backgroundColor: "#020617", padding: "0 0 2rem" }}>
        <div
          className="container"
          style={{
            borderBottom: "1px solid rgba(212,175,55,0.15)",
            paddingBottom: "1.5rem",
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {countryFilters.map((f) => (
            <a
              key={f}
              href={f === "All" ? "/blog/" : `/destinations/${f.toLowerCase()}/`}
              style={{
                padding: "0.4rem 1.2rem",
                borderRadius: "999px",
                border: "1px solid rgba(212,175,55,0.3)",
                color: "#D4AF37",
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 500,
                transition: "all 0.2s",
              }}
            >
              {f}
            </a>
          ))}
          <span style={{ color: "rgba(248,250,252,0.2)", alignSelf: "center" }}>|</span>
          {typeFilters.map((f) => (
            <a
              key={f}
              href="/blog/#editorial-archive"
              style={{
                padding: "0.4rem 1.2rem",
                borderRadius: "999px",
                border: "1px solid rgba(248,250,252,0.15)",
                color: "rgba(248,250,252,0.6)",
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                fontWeight: 500,
              }}
            >
              {f}
            </a>
          ))}
        </div>
      </section>

      {/* Article Grid */}
      <section style={{ padding: "4rem 0 10rem" }}>
        <div className="container">
          {newGuides.length > 0 && (
            <>
              <div style={{ marginBottom: "3rem" }}>
                <span
                  style={{
                    color: "#D4AF37",
                    fontSize: "0.75rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                  }}
                >
                  Featured Guides
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-primary-serif)",
                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                    fontWeight: 700,
                    marginTop: "0.5rem",
                  }}
                >
                  New From The Journal
                </h2>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
                  gap: "3rem",
                  marginBottom: "6rem",
                }}
              >
                {newGuides.map((item) => (
                  <ArticleCard
                    key={item.href}
                    href={item.href}
                    title={item.title}
                    description={item.description}
                    heroImage={item.heroImage}
                    country={item.country}
                    articleType={item.articleType}
                    isNew={item.isNew}
                  />
                ))}
              </div>
            </>
          )}

          <div id="editorial-archive" style={{ marginBottom: "3rem" }}>
            <span
              style={{
                color: "#D4AF37",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Deep Dives &amp; Insider Knowledge
            </span>
            <h2
              style={{
                fontFamily: "var(--font-primary-serif)",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 700,
                marginTop: "0.5rem",
              }}
            >
              The Editorial Archive
            </h2>
            <p style={{ color: "rgba(248,250,252,0.5)", fontSize: "0.95rem", marginTop: "0.5rem" }}>
              Exclusive perspectives from our Local Guardians across Vietnam, Thailand &amp; Cambodia.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "3rem",
            }}
          >
            {archiveGuides.map((item) => (
              <ArticleCard
                key={item.href}
                href={item.href}
                title={item.title}
                description={item.description}
                heroImage={item.heroImage}
                country={item.country}
                articleType={item.articleType}
                isNew={item.isNew}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="cta-section"
        style={{ borderTop: "1px solid rgba(212,175,55,0.15)", paddingBottom: "8rem" }}
      >
        <div className="container">
          <h2>Ready to Plan Your Fairway Journey?</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 2rem" }}>
            Our guides are just the beginning. Asia Golf Specialists engineers your entire experience
            — from first tee to final sunset.
          </p>
          <Link href="/quote/" className="btn-primary">
            Request a Custom Quote
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
    </main>
  );
}

function ArticleCard({
  href,
  title,
  description,
  heroImage,
  country,
  articleType,
  isNew = false,
}: {
  href: string;
  title: string;
  description: string;
  heroImage?: string;
  country: string;
  articleType: string;
  isNew?: boolean;
}) {
  const countryColor: Record<string, string> = {
    Vietnam: "#4ade80",
    Thailand: "#60a5fa",
    Cambodia: "#fb923c",
  };
  const tagColor = countryColor[country] || "#D4AF37";

  return (
    <Link href={href} className="ags-card-link" style={{ textDecoration: "none" }}>
      <div
        className="ags-card"
      >
        <div className="ags-card-image-container" style={{ height: "240px" }}>
          {heroImage ? (
            <Image
              src={heroImage}
              alt={title}
              className="ags-card-image"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{ objectFit: "cover" }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                height: "100%",
                background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "#D4AF37", fontSize: "2rem", opacity: 0.3 }}>⛳</span>
            </div>
          )}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(2,6,23,0.95) 0%, transparent 60%)",
            }}
          />
          <div style={{ position: "absolute", top: "1rem", left: "1rem", display: "flex", gap: "0.5rem" }}>
            <span
              style={{
                background: `${tagColor}22`,
                border: `1px solid ${tagColor}55`,
                color: tagColor,
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.2rem 0.6rem",
                borderRadius: "999px",
                fontWeight: 600,
              }}
            >
              {country}
            </span>
            {isNew && (
              <span
                style={{
                  background: "rgba(212,175,55,0.15)",
                  border: "1px solid rgba(212,175,55,0.4)",
                  color: "#D4AF37",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "0.2rem 0.6rem",
                  borderRadius: "999px",
                  fontWeight: 600,
                }}
              >
                New
              </span>
            )}
          </div>
        </div>

        <div className="ags-card-content">
          <p
            style={{
              fontSize: "0.72rem",
              color: "rgba(248,250,252,0.4)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
              fontWeight: 500,
            }}
          >
            {articleType}
          </p>
          <h3
            style={{
              fontFamily: "var(--font-primary-serif)",
              fontSize: "1.3rem",
              color: "#D4AF37",
              marginBottom: "0.75rem",
              fontWeight: 700,
              lineHeight: 1.35,
            }}
          >
            {title}
          </h3>
          {description && (
            <p
              style={{
                fontSize: "0.9rem",
                color: "rgba(248,250,252,0.55)",
                lineHeight: 1.65,
                marginBottom: "1.5rem",
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {description}
            </p>
          )}
          <div
            className="ags-card-footer"
            style={{
              borderTop: "1px solid rgba(212,175,55,0.15)",
              paddingTop: "1rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              color: "#D4AF37",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              fontSize: "0.75rem",
              fontWeight: 600,
            }}
          >
            <span>Read Article</span>
            <span className="ags-card-cta-arrow">→</span>
          </div>
        </div>
      </div>
    </Link>
  );
}


