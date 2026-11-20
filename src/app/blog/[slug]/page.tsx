import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import fs from "fs";
import path from "path";

import ArticleCTA from "@/components/ArticleCTA";
import { getTurnkeyRecommendations } from "@/lib/turnkeyRecommendations";

// Re-check for newly approved/scheduled posts every hour without a manual redeploy
export const revalidate = 3600;

type FAQ = { q: string; a: string };
type RelatedPost = { slug: string; title: string; heroImage?: string };

type BlogPost = {
  slug: string;
  title: string;
  description: string;
  heroImage?: string;
  heroImageAlt?: string; // Optional custom alt text; falls back to keyword-rich constructed string
  publishDate: string;
  status?: string; // "draft" | "approved" — unpublished posts are invisible
  category: string;
  country: string[];
  keywords: string[];
  content: string; // HTML string
  faqs: FAQ[];
  relatedPosts: RelatedPost[];
  ctaText?: string;
  wordCount?: number;
};

function getAllSlugs(): string[] {
  try {
    const dataDir = path.join(process.cwd(), "src/data/blog-posts");
    if (!fs.existsSync(dataDir)) return [];
    return fs
      .readdirSync(dataDir)
      .filter((f) => f.endsWith(".json"))
      .map((f) => f.replace(".json", ""));
  } catch (err) {
    console.error("Error in getAllSlugs:", err);
    return [];
  }
}

function getPost(slug: string, isPreview: boolean = false): BlogPost | null {
  try {
    const filePath = path.join(process.cwd(), "src/data/blog-posts", `${slug}.json`);
    if (!fs.existsSync(filePath)) return null;
    
    const rawContent = fs.readFileSync(filePath, "utf-8");
    const post = JSON.parse(rawContent) as BlogPost;
    
    // If preview mode is on, bypass status and date checks
    if (isPreview) return post;

    // Gate: draft posts return null (404) for standard visitors
    const today = new Date().toISOString().split("T")[0];
    if (post.status !== "approved" || !post.publishDate || post.publishDate > today) {
      return null;
    }
    return post;
  } catch (err) {
    console.error(`Error loading post ${slug}:`, err);
    return null;
  }
}

export async function generateStaticParams() {
  // Only pre-build approved, published posts — draft slugs must NOT generate
  // static 404 shells that Google can discover and log as "Not found" errors.
  const today = new Date().toISOString().split("T")[0];
  return getAllSlugs()
    .filter((slug) => {
      const post = getPost(slug, false);
      return post !== null && post.status === 'approved' && post.publishDate <= today;
    })
    .map((slug) => ({ slug }));
}


export async function generateMetadata({ params }: { 
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const post = getPost(slug, false);
  if (!post) return {};
  return {
    title: `${post.title}`,
    description: post.description,
    keywords: post.keywords?.join(", "),
    alternates: {
      canonical: `https://www.asiagolfspecialists.com/blog/${slug}/`,
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url: `https://www.asiagolfspecialists.com/blog/${slug}/`,
      siteName: "Asia Golf Specialists",
      images: post.heroImage
        ? [
            {
              url: post.heroImage.startsWith("http")
                ? post.heroImage
                : `https://www.asiagolfspecialists.com${post.heroImage}`,
              width: 1200,
              height: 630,
              alt: `${post.title} — Asia Golf Specialists`,
            },
          ]
        : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.heroImage
        ? [post.heroImage.startsWith("http") ? post.heroImage : `https://www.asiagolfspecialists.com${post.heroImage}`]
        : [],
    },
  };
}

export default async function BlogPost({ 
  params
}: { 
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  
  const post = getPost(slug, false);
  if (!post) notFound();

  // Robust guarding for draft data
  const wordCount = post.wordCount || (post.content ? post.content.replace(/<[^>]+>/g, "").split(/\s+/).length : 0);
  const readingTime = Math.ceil(wordCount / 200) || 1;
  const publishDateFormatted = post.publishDate 
    ? new Date(post.publishDate).toLocaleDateString("en-AU", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Spring 2026";
  
  const categories = post.category || "Journal";
  const countries = Array.isArray(post.country) ? post.country : [];
  const faqs = Array.isArray(post.faqs) ? post.faqs : [];
  const relatedPosts = Array.isArray(post.relatedPosts) ? post.relatedPosts : [];
  const content = post.content || "<p>Content coming soon...</p>";

  const countryColor: Record<string, string> = {
    Vietnam: "#4ade80",
    Thailand: "#60a5fa",
    Cambodia: "#fb923c",
  };

  const absHeroImage = post.heroImage
    ? post.heroImage.startsWith("http")
      ? post.heroImage
      : `https://www.asiagolfspecialists.com${post.heroImage}`
    : "https://www.asiagolfspecialists.com/images/og-default.jpg";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title || "Elite Golf News",
    description: post.description || "",
    url: `https://www.asiagolfspecialists.com/blog/${slug}/`,
    datePublished: post.publishDate || new Date().toISOString(),
    dateModified: post.publishDate || new Date().toISOString(),
    image: absHeroImage,
    author: {
      "@type": "Person",
      "@id": "https://www.asiagolfspecialists.com/#marcus-giles",
      name: "Marcus Giles",
      jobTitle: "Founder & Managing Director",
      url: "https://www.asiagolfspecialists.com/about/#founder",
      sameAs: ["https://www.linkedin.com/in/marcus-giles-golf/"],
    },
    publisher: {
      "@type": "TravelAgency",
      "@id": "https://www.asiagolfspecialists.com/#organization",
      name: "Asia Golf Specialists",
      url: "https://www.asiagolfspecialists.com/",
      image: "https://www.asiagolfspecialists.com/images/brand-library/logos/ags-logo-the-club-mark-nobkgrd.webp",
      address: {
        "@type": "PostalAddress",
        streetAddress: "27 Nguyen Phan Vinh",
        addressLocality: "Hoi An",
        addressRegion: "Da Nang",
        postalCode: "550000",
        addressCountry: "VN",
      },
      logo: {
        "@type": "ImageObject",
        url: "https://www.asiagolfspecialists.com/images/brand-library/logos/ags-logo-the-club-mark-nobkgrd.webp",
        width: 512,
        height: 512,
      },
    },
    about: [
      { "@type": "Thing", name: "Golf", sameAs: "https://en.wikipedia.org/wiki/Golf" },
      { "@type": "Thing", name: "Golf Tourism", sameAs: "https://en.wikipedia.org/wiki/Golf_tourism" },
      { "@type": "Thing", name: "Southeast Asia", sameAs: "https://en.wikipedia.org/wiki/Southeast_Asia" },
      { "@type": "Thing", name: "Golf Tour Operator", sameAs: "https://en.wikipedia.org/wiki/Tour_operator" },
      {
        "@type": "TravelAgency",
        "@id": "https://www.asiagolfspecialists.com/#organization",
        name: "Asia Golf Specialists",
        url: "https://www.asiagolfspecialists.com/",
        image: "https://www.asiagolfspecialists.com/images/brand-library/logos/ags-logo-the-club-mark-nobkgrd.webp",
        priceRange: "$$$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "27 Nguyen Phan Vinh",
          addressLocality: "Hoi An",
          addressRegion: "Da Nang",
          postalCode: "550000",
          addressCountry: "VN",
        },
      },
    ],
    keywords: Array.isArray(post.keywords) ? post.keywords.join(", ") : "",
    inLanguage: "en",
  };

  const faqSchema =
    post.faqs?.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
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
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://www.asiagolfspecialists.com/blog/${slug}/`,
      },
    ],
  };

  const reviewCountryCode = countries.includes("Thailand")
    ? "TH"
    : countries.includes("Cambodia")
    ? "KH"
    : "VN";

  const isReview = post.title.toLowerCase().includes("review");
  const reviewSchema = isReview ? {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": post.title.toLowerCase().includes("hotel") || post.title.toLowerCase().includes("resort") || post.title.toLowerCase().includes("villa") ? "Hotel" : "GolfCourse",
      "name": post.title.replace(/ review$/i, "").replace(/review of /i, "").trim(),
      "image": absHeroImage,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": reviewCountryCode
      }
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "5",
      "bestRating": "5"
    },
    "author": {
      "@type": "Person",
      "@id": "https://www.asiagolfspecialists.com/#marcus-giles",
      "name": "Marcus Giles",
      "url": "https://www.asiagolfspecialists.com/about/#founder"
    }
  } : null;

  const primaryCountryKey = countries.includes("Thailand")
    ? "thailand"
    : countries.includes("Cambodia")
    ? "cambodia"
    : "vietnam";
  const { signatureTour, flagshipPackage } = getTurnkeyRecommendations(
    primaryCountryKey,
    slug,
    post.title
  );
  const directCourseLink =
    slug === "hoiana-shores-golf-club-review"
      ? { name: "Hoiana Shores Golf Club Profile & Tee Times", href: "/courses/vietnam/hoiana-shores/" }
      : slug === "ba-na-hills-golf-club-review"
      ? { name: "Ba Na Hills Golf Club Profile & Night Golf Tee Times", href: "/courses/vietnam/ba-na-hills/" }
      : slug === "the-bluffs-ho-tram-review"
      ? { name: "The Bluffs Grand Ho Tram Course Profile & Tee Times", href: "/courses/vietnam/the-bluffs-ho-tram/" }
      : null;

  return (
    <main style={{ backgroundColor: "#020617", minHeight: "100vh", color: "#F8FAFC" }}>
      <Navbar />

      {/* Hero */}
      <header
        style={{
          position: "relative",
          height: "60vh",
          minHeight: "420px",
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        {post.heroImage ? (
          <Image
            src={post.heroImage}
            alt={
              post.heroImageAlt ||
              `${post.title} — Asia Golf Specialists luxury golf travel guide`
            }
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center 30%" }}
          />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
            }}
          />
        )}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(2,6,23,1) 0%, rgba(2,6,23,0.6) 40%, rgba(2,6,23,0.2) 100%)",
          }}
        />
        <div
          className="container"
          style={{ position: "relative", zIndex: 1, maxWidth: "860px", paddingBottom: "4rem" }}
        >
          {/* Breadcrumb */}
          <nav style={{ marginBottom: "1.5rem", fontSize: "0.78rem", color: "rgba(248,250,252,0.45)" }}>
            <Link href="/" style={{ color: "rgba(248,250,252,0.45)", textDecoration: "none" }}>
              Home
            </Link>
            {" › "}
            <Link href="/blog/" style={{ color: "rgba(248,250,252,0.45)", textDecoration: "none" }}>
              Journal
            </Link>
            {" › "}
            <span style={{ color: "#D4AF37" }}>{post.title}</span>
          </nav>

          {/* Country tags */}
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            {countries.map((c) => (
              <span
                key={c}
                style={{
                  background: `${countryColor[c] || "#D4AF37"}22`,
                  border: `1px solid ${countryColor[c] || "#D4AF37"}55`,
                  color: countryColor[c] || "#D4AF37",
                  fontSize: "0.65rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "0.2rem 0.7rem",
                  borderRadius: "999px",
                  fontWeight: 600,
                }}
              >
                {c}
              </span>
            ))}
            <span
              style={{
                color: "rgba(248,250,252,0.4)",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.2rem 0",
                alignSelf: "center",
              }}
            >
              {categories}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-primary-serif)",
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#F8FAFC",
              marginBottom: "1.5rem",
              maxWidth: "720px",
            }}
          >
            {post.title}
          </h1>

          {/* Meta */}
          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              fontSize: "0.78rem",
              color: "rgba(248,250,252,0.65)",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            <span>
              By{" "}
              <Link href="/about/#founder" style={{ color: "#D4AF37", textDecoration: "underline", fontWeight: 600 }}>
                Marcus Giles
              </Link>{" "}
              (Founder, AGS • Ex-Director of Sales &amp; Marketing, Ba Na Hills GC)
            </span>
            <span>·</span>
            <span>{publishDateFormatted}</span>
            <span>·</span>
            <span>{readingTime} min read</span>
          </div>
        </div>
      </header>

      {/* Above-the-Fold Commercial Conversion Strip */}
      <section
        aria-label="Turnkey Golf Tour & Tee-Time Options"
        style={{
          backgroundColor: "#040918",
          borderBottom: "1px solid rgba(212,175,55,0.2)",
          padding: "1.75rem 1rem",
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: "860px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1.25rem",
            backgroundColor: "rgba(212,175,55,0.06)",
            border: "1px solid rgba(212,175,55,0.28)",
            borderRadius: "8px",
            padding: "1.25rem 1.5rem",
          }}
        >
          <div style={{ flex: "1 1 420px" }}>
            <div style={{ color: "#D4AF37", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.35rem" }}>
              Planning a 2026 / 2027 Luxury Golf Tour in Southeast Asia?
            </div>
            <div style={{ fontSize: "0.95rem", color: "#F8FAFC", lineHeight: 1.55 }}>
              Compare our{" "}
              <Link href={signatureTour.url} style={{ color: "#D4AF37", fontWeight: 600, textDecoration: "underline" }}>
                {signatureTour.title} ({signatureTour.duration})
              </Link>{" "}
              or{" "}
              <Link href={flagshipPackage.url} style={{ color: "#D4AF37", fontWeight: 600, textDecoration: "underline" }}>
                {flagshipPackage.title}
              </Link>
              {directCourseLink && (
                <>
                  {" "}or view{" "}
                  <Link href={directCourseLink.href} style={{ color: "#D4AF37", fontWeight: 600, textDecoration: "underline" }}>
                    {directCourseLink.name}
                  </Link>
                </>
              )}
              .
            </div>
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link
              href="/quote/"
              className="btn-primary"
              style={{ padding: "0.7rem 1.35rem", fontSize: "0.82rem", whiteSpace: "nowrap" }}
            >
              Get Custom Quote (48hr)
            </Link>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr min(860px, 100%) 1fr",
          padding: "5rem 1rem",
        }}
      >
        <article
          style={{ gridColumn: 2 }}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      {/* FAQ Section */}
      {post.faqs?.length > 0 && (
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
              {post.faqs.map((faq, i) => (
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

      {/* Internal Link Authority Matrix: Flagship Tours, Marquee Courses & Aussie Planning Guides */}
      <section
        aria-label="Signature Tours, Championship Courses & Australian Planning Guides"
        style={{
          backgroundColor: "#040918",
          borderTop: "1px solid rgba(212,175,55,0.14)",
          borderBottom: "1px solid rgba(212,175,55,0.14)",
          padding: "4.5rem 1rem",
        }}
      >
        <div className="container" style={{ maxWidth: "960px" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span style={{ color: "#D4AF37", fontSize: "0.72rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, display: "block", marginBottom: "0.5rem" }}>
              Plan &amp; Compare
            </span>
            <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.6rem, 2.8vw, 2.2rem)", fontWeight: 700, color: "#F8FAFC" }}>
              Signature Tours, Marquee Courses &amp; <span style={{ color: "#D4AF37", fontStyle: "italic" }}>Essential Planning Guides</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: "1.75rem" }}>
            <div style={{ backgroundColor: "rgba(2, 6, 23, 0.85)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "8px", padding: "1.5rem" }}>
              <h3 style={{ color: "#D4AF37", fontSize: "0.95rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>
                Flagship Signature Tours
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.9rem" }}>
                <li><Link href="/tours/the-central-coast-classic/" style={{ color: "#F8FAFC", textDecoration: "underline" }}>The Central Coast Classic (Da Nang &amp; Hoi An)</Link></li>
                <li><Link href="/tours/the-emperors-fairways/" style={{ color: "#F8FAFC", textDecoration: "underline" }}>The Emperor&apos;s Fairways (Hanoi, Ha Long &amp; Hue)</Link></li>
                <li><Link href="/tours/the-indochina-golden-age/" style={{ color: "#F8FAFC", textDecoration: "underline" }}>The Indochina Golden Age (Vietnam &amp; Cambodia)</Link></li>
                <li><Link href="/tours/the-khmer-temple-trail/" style={{ color: "#F8FAFC", textDecoration: "underline" }}>The Khmer Temple Trail (Siem Reap &amp; Phnom Penh)</Link></li>
                <li><Link href="/tours/thailand-royal-siam/" style={{ color: "#F8FAFC", textDecoration: "underline" }}>Thailand Royal Siam (Bangkok, Pattaya &amp; Hua Hin)</Link></li>
              </ul>
            </div>

            <div style={{ backgroundColor: "rgba(2, 6, 23, 0.85)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "8px", padding: "1.5rem" }}>
              <h3 style={{ color: "#D4AF37", fontSize: "0.95rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>
                Marquee Courses &amp; Stays
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.9rem" }}>
                <li><Link href="/courses/vietnam/hoiana-shores/" style={{ color: "#F8FAFC", textDecoration: "underline" }}>Hoiana Shores Golf Club (Par 71 • 6,554 yds)</Link></li>
                <li><Link href="/courses/vietnam/ba-na-hills/" style={{ color: "#F8FAFC", textDecoration: "underline" }}>Ba Na Hills Golf Club (Floodlit Night Golf)</Link></li>
                <li><Link href="/courses/vietnam/kn-golf-links/" style={{ color: "#F8FAFC", textDecoration: "underline" }}>KN Golf Links Cam Ranh (Par 72 • 6,345 yds)</Link></li>
                <li><Link href="/courses/thailand/siam-country-club/" style={{ color: "#F8FAFC", textDecoration: "underline" }}>Siam Country Club Old Course (Pattaya)</Link></li>
                <li><Link href="/courses/thailand/black-mountain/" style={{ color: "#F8FAFC", textDecoration: "underline" }}>Black Mountain Golf Club (Hua Hin)</Link></li>
                <li><Link href="/courses/thailand/nikanti/" style={{ color: "#F8FAFC", textDecoration: "underline" }}>Nikanti Golf Club Bangkok (Par 72 • 6,273 yds)</Link></li>
                <li><Link href="/accommodations/vietnam/an-bang-beach-villas/" style={{ color: "#F8FAFC", textDecoration: "underline" }}>An Bang Beach Private Golf Villas (3BR &amp; 6BR)</Link></li>
              </ul>
            </div>

            <div style={{ backgroundColor: "rgba(2, 6, 23, 0.85)", border: "1px solid rgba(212,175,55,0.2)", borderRadius: "8px", padding: "1.5rem" }}>
              <h3 style={{ color: "#D4AF37", fontSize: "0.95rem", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "1rem" }}>
                Essential Tour Planning Guides
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.65rem", fontSize: "0.9rem" }}>
                <li><Link href="/blog/golf-holidays-from-australia/" style={{ color: "#F8FAFC", textDecoration: "underline" }}>Golf Holidays from Australia: Flights &amp; Bag Rules</Link></li>
                <li><Link href="/blog/7-day-vietnam-golf-itinerary/" style={{ color: "#F8FAFC", textDecoration: "underline" }}>7-Day Vietnam Central Coast Golf Itinerary</Link></li>
                <li><Link href="/blog/10-day-vietnam-thailand-golf-itinerary/" style={{ color: "#F8FAFC", textDecoration: "underline" }}>10-Day Vietnam &amp; Thailand Golf Itinerary</Link></li>
                <li><Link href="/blog/couples-golf-holiday-southeast-asia/" style={{ color: "#F8FAFC", textDecoration: "underline" }}>Luxury Couples Golf &amp; Spa Holidays in SE Asia</Link></li>
                <li><Link href="/destinations/vietnam/true-cost-golf-vietnam-2026-da-nang-pricing-guide/" style={{ color: "#F8FAFC", textDecoration: "underline" }}>True Cost of a Vietnam Golf Trip (2026 AUD Guide)</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Block — Rendered via client component to handle GTM tracking */}
      <section
        style={{
          padding: "6rem 0",
          background: "radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.08) 0%, rgba(2,6,23,0) 70%)",
        }}
      >
        <div className="container" style={{ textAlign: "center", maxWidth: "640px" }}>
          <span
            style={{
              color: "#D4AF37",
              fontSize: "0.72rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 600,
              display: "block",
              marginBottom: "1.5rem",
            }}
          >
            Asia Golf Specialists
          </span>
          
          <ArticleCTA 
            ctaText={post.ctaText || "Design Your Bespoke Golf Journey"}
            ctaButton="Request a Custom Quote"
            slug={post.slug}
            title={post.title}
            category={categories}
            country={countries.join(", ")}
          />

          <p
            style={{
              color: "rgba(248,250,252,0.6)",
              marginTop: "2.5rem",
              lineHeight: 1.7,
              fontSize: "1.05rem",
            }}
          >
            Our specialists engineer every detail — tee times, villas, transfers, and cultural
            experiences — built exclusively around you.
          </p>
        </div>
      </section>

      {/* Related Posts */}
      {post.relatedPosts?.length > 0 && (
        <section
          style={{
            backgroundColor: "#020617",
            padding: "0 0 8rem",
            borderTop: "1px solid rgba(212,175,55,0.1)",
          }}
        >
          <div className="container" style={{ paddingTop: "4rem" }}>
            <h2
              style={{
                fontFamily: "var(--font-primary-serif)",
                fontSize: "clamp(1.6rem, 2.5vw, 2rem)",
                fontWeight: 700,
                marginBottom: "2.5rem",
                color: "#F8FAFC",
              }}
            >
              Continue Reading
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "2rem",
              }}
            >
              {post.relatedPosts.map((related, index) => {
                let targetHref = `/blog/${related.slug}/`;
                const blogPath = path.join(process.cwd(), "src/data/blog-posts", `${related.slug}.json`);
                if (fs.existsSync(blogPath)) {
                  try {
                    const bData = JSON.parse(fs.readFileSync(blogPath, "utf-8"));
                    if (bData.status === "draft") return null;
                  } catch {}
                } else {
                  const seoPath = path.join(process.cwd(), "src/data/seo-articles", `${related.slug}.json`);
                  if (fs.existsSync(seoPath)) {
                    try {
                      const seoData = JSON.parse(fs.readFileSync(seoPath, "utf-8"));
                      const country = (seoData.category || "vietnam").toLowerCase();
                      targetHref = `/destinations/${country}/${related.slug}/`;
                    } catch {}
                  } else {
                    return null;
                  }
                }
                return (
                <Link
                  key={`${related.slug}-${index}`}
                  href={targetHref}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    style={{
                      border: "1px solid rgba(212,175,55,0.15)",
                      borderRadius: "4px",
                      overflow: "hidden",
                      transition: "border-color 0.2s",
                    }}
                  >
                    {related.heroImage && (
                      <div style={{ position: "relative", height: "160px" }}>
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
                        }}
                      >
                        {related.title}
                      </p>
                      <p
                        style={{
                          fontSize: "0.75rem",
                          color: "#D4AF37",
                          marginTop: "0.75rem",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                        }}
                      >
                        Read →
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {reviewSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </main>
  );
}
