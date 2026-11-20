import Link from "next/link";
import Image from "next/image";
import fs from "fs";
import path from "path";

// ─── Data fetching ─────────────────────────────────────────────────────────

type ArticleData = {
  slug: string;
  title: string;
  description: string;
  heroImage?: string;
  country: string;
  articleType: string;
  href: string;
  date: string;
};

function getAllSeoArticles(): ArticleData[] {
  const dataDir = path.join(process.cwd(), "src/data/seo-articles");
  if (!fs.existsSync(dataDir)) return [];

  return fs
    .readdirSync(dataDir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => {
      try {
        const raw = fs.readFileSync(path.join(dataDir, f), "utf-8");
        const article = JSON.parse(raw);
        
        const cat = article.category || "";
        const country = cat.startsWith("vietnam")
          ? "Vietnam"
          : cat.startsWith("thailand")
          ? "Thailand"
          : cat.startsWith("cambodia")
          ? "Cambodia"
          : "Vietnam";
          
        const sub = (article.subCategory || f).toLowerCase();
        const articleType = sub.includes("culinary")
          ? "Culinary"
          : sub.includes("nightlife")
          ? "Nightlife"
          : sub.includes("culture")
          ? "Culture"
          : "Golf & Lifestyle";

        return {
          slug: article.slug,
          title: article.title,
          description: article.description || "",
          heroImage: article.heroImage,
          country,
          articleType,
          href: `/destinations/${country.toLowerCase()}/${article.slug}/`,
          date: article.dateAdded || "2020-01-01T00:00:00.000Z",
        };
      } catch {
        return null;
      }
    })
    .filter(Boolean) as ArticleData[];
}

function getBlogPosts(): ArticleData[] {
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
          slug: post.slug,
          title: post.title,
          description: post.description || "",
          heroImage: post.heroImage,
          country: Array.isArray(post.country) ? post.country[0] : post.country,
          articleType: post.articleType || "Golf & Lifestyle",
          href: `/blog/${post.slug}/`,
          date: post.publishDate,
        };
      } catch {
        return null;
      }
    })
    .filter(Boolean) as ArticleData[];
}

// ─── Component ─────────────────────────────────────────────────────────────

export default function FeaturedArticles() {
  const allArticles = [...getBlogPosts(), ...getAllSeoArticles()];
  
  // Filter for articles that have a hero image for best visual presentation
  const eligibleArticles = allArticles.filter(a => a.heroImage);
  
  // Deterministic destination-balanced selection (1 Vietnam, 1 Thailand, 1 Cambodia)
  const vnLatest = eligibleArticles
    .filter(a => a.country === "Vietnam")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
  const thLatest = eligibleArticles
    .filter(a => a.country === "Thailand")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];
  const camLatest = eligibleArticles
    .filter(a => a.country === "Cambodia")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

  const destinationFeatured = [vnLatest, thLatest, camLatest].filter(Boolean);
  const featured = destinationFeatured.length >= 3
    ? destinationFeatured
    : [...eligibleArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);
  
  if (featured.length === 0) return null;

  // Schema.org BlogPosting List for AI Search (GEO)
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Featured Articles from The AGS Journal",
    "description": "Expert golf travel guides, course reviews, and luxury itineraries in Southeast Asia.",
    "itemListElement": featured.map((article, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "BlogPosting",
        "headline": article.title,
        "description": article.description,
        "image": `https://www.asiagolfspecialists.com${article.heroImage}`,
        "url": `https://www.asiagolfspecialists.com${article.href}`,
        "datePublished": article.date,
        "author": {
          "@type": "Organization",
          "name": "Asia Golf Specialists"
        }
      }
    }))
  };

  return (
    <section className="section" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ marginBottom: "3rem", textAlign: "center" }}>
          <span
            style={{
              color: "#D4AF37",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 600,
            }}
          >
            Insights & Guides
          </span>
          <h2
            style={{
              fontFamily: "var(--font-primary-serif)",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 700,
              marginTop: "0.5rem",
            }}
          >
            The AGS Journal
          </h2>
          <p style={{ color: "rgba(248,250,252,0.6)", fontSize: "1.1rem", maxWidth: "600px", margin: "1rem auto 0" }}>
            Explore our latest course reviews, destination guides, and insider knowledge for luxury golf travel in Southeast Asia.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '3rem' }}>
          {featured.map((item) => {
            const flagMap: Record<string, string> = {
              Vietnam: "🇻🇳",
              Thailand: "🇹🇭",
              Cambodia: "🇰🇭",
            };
            const flag = flagMap[item.country] || "⛳";

            return (
              <Link key={item.href} href={item.href} className="ags-card-link" style={{ textDecoration: "none" }}>
                <div className="ags-card">
                  <div className="ags-card-image-container" style={{ height: "280px" }}>
                    {item.heroImage ? (
                      <Image
                        src={item.heroImage}
                        alt={item.title}
                        className="ags-card-image"
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                    ) : null}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(5,11,26,1) 0%, transparent 60%)",
                      }}
                    />
                  </div>

                  <div className="ags-card-content">
                    <div style={{ marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D4AF37', fontWeight: 600 }}>
                        {flag} {item.country}
                      </span>
                    </div>
                    
                    <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.75rem', color: '#D4AF37', margin: '0 0 0.5rem', fontWeight: 700, lineHeight: 1.2 }}>
                      {item.title}
                    </h2>
                    
                    <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F8FAFC', opacity: 0.6, marginBottom: '1rem', fontWeight: 400 }}>
                      {item.articleType}
                    </h3>

                    {item.description && (
                      <p
                        style={{
                          fontSize: "1rem",
                          color: "rgba(248,250,252,0.65)",
                          lineHeight: 1.6,
                          marginBottom: "2rem",
                        }}
                      >
                        {item.description}
                      </p>
                    )}

                    <div
                      style={{
                        borderTop: "1px solid rgba(212,175,55,0.2)",
                        paddingTop: "1.5rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        color: "#D4AF37",
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        fontSize: "0.8rem",
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
          })}
        </div>
        
        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <Link href="/blog/" className="btn-primary" style={{ background: "transparent", border: "1px solid #D4AF37", color: "#D4AF37" }}>
            View All Articles
          </Link>
        </div>
      </div>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
