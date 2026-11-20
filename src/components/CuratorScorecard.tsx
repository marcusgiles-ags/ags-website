import React from "react";

export interface CuratorCriterion {
  label: string;
  score: number;
  maxScore?: number;
  highlight?: string;
}

export interface CuratorScorecardProps {
  itemType: "GolfCourse" | "Hotel" | "Resort";
  itemName: string;
  itemUrl: string;
  officialUrl?: string;
  sameAs?: string[];
  itemImage?: string;
  addressLocality: string;
  addressCountry: string;
  overallScore: number;
  maxScore?: number;
  gradeBadge?: string;
  inspectionDate?: string;
  leadCurator?: string;
  leadCuratorTitle?: string;
  criteria: CuratorCriterion[];
  verdict: string;
}

export default function CuratorScorecard({
  itemType,
  itemName,
  itemUrl,
  officialUrl,
  sameAs,
  itemImage,
  addressLocality,
  addressCountry,
  overallScore = 4.8,
  maxScore = 5.0,
  gradeBadge = "Championship Grade • Asia Top 100",
  inspectionDate = "Spring 2026",
  leadCurator = "Marcus Giles",
  leadCuratorTitle = "Founder & Managing Director, Asia Golf Specialists",
  criteria = [],
  verdict,
}: CuratorScorecardProps) {
  const curatorName =
    !leadCurator || /AGS .*Team/i.test(leadCurator)
      ? "Marcus Giles"
      : leadCurator;
  const canonicalItemUrl = itemUrl.endsWith("/") ? itemUrl : `${itemUrl}/`;
  const canonicalItemImage = itemImage
    ? itemImage.startsWith("http")
      ? itemImage
      : `https://www.asiagolfspecialists.com${itemImage}`
    : undefined;

  // External official venue URL (prioritizes officialUrl or first external sameAs domain)
  // If itemUrl is on asiagolfspecialists.com, we do NOT assign it to itemReviewed.url
  // to prevent Google's automated "Self-Serving Review" penalty on LocalBusiness/GolfCourse/Hotel entities.
  const externalVenueUrl = officialUrl || (sameAs && sameAs.length > 0 && !sameAs[0].includes("asiagolfspecialists.com") ? sameAs[0] : undefined);

  // Construct JSON-LD Review schema to match the visible evaluation
  const reviewSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": itemType === "Hotel" || itemType === "Resort" ? "Hotel" : "GolfCourse",
      name: itemName,
      ...(externalVenueUrl ? { url: externalVenueUrl } : {}),
      ...(sameAs && sameAs.length > 0 ? { sameAs: sameAs } : {}),
      ...(canonicalItemImage ? { image: canonicalItemImage } : {}),
      address: {
        "@type": "PostalAddress",
        addressLocality: addressLocality,
        addressCountry: addressCountry,
      },
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: overallScore.toFixed(1),
      bestRating: maxScore.toString(),
      worstRating: "1",
    },
    author: {
      "@type": "Person",
      "@id": "https://www.asiagolfspecialists.com/#marcus-giles",
      name: curatorName,
      jobTitle: "Founder & Managing Director",
      url: "https://www.asiagolfspecialists.com/about/#founder",
      sameAs: ["https://www.linkedin.com/in/marcus-giles-golf/"],
    },
    publisher: {
      "@type": "TravelAgency",
      "@id": "https://www.asiagolfspecialists.com/#organization",
      name: "Asia Golf Specialists",
      url: "https://www.asiagolfspecialists.com/",
      image: "https://www.asiagolfspecialists.com/images/brand-library/logos/ags-logo-transparent.webp",
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
        url: "https://www.asiagolfspecialists.com/images/brand-library/logos/ags-logo-the-club-mark-nobkgrd-220.webp",
      },
    },
    reviewBody: verdict,
  };

  return (
    <section
      aria-label="AGS Curatorial Evaluation"
      style={{
        margin: "3rem auto",
        maxWidth: "960px",
        padding: "0 1.5rem",
      }}
    >
      {/* Inject matching structured JSON-LD data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />

      <div
        style={{
          background: "linear-gradient(180deg, rgba(8, 17, 38, 0.95) 0%, rgba(4, 9, 20, 0.98) 100%)",
          border: "1px solid rgba(212, 175, 55, 0.25)",
          borderRadius: "8px",
          padding: "2.5rem 2rem",
          boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle decorative watermark badge in top-right */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-15px",
            right: "-15px",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        {/* Header Metadata Ribbon */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
            paddingBottom: "1.25rem",
            borderBottom: "1px solid rgba(212, 175, 55, 0.12)",
            marginBottom: "2rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "#D4AF37", fontSize: "0.75rem" }}>✦</span>
            <span
              style={{
                fontFamily: "var(--font-sans, sans-serif)",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#D4AF37",
                fontWeight: 600,
              }}
            >
              AGS Curatorial Evaluation
            </span>
          </div>

          <div
            style={{
              fontFamily: "var(--font-sans, sans-serif)",
              fontSize: "0.75rem",
              color: "rgba(245, 241, 230, 0.5)",
              letterSpacing: "0.05em",
            }}
          >
            Verification: <span style={{ color: "rgba(245, 241, 230, 0.85)" }}>{inspectionDate}</span>
            <span style={{ margin: "0 0.5rem", opacity: 0.3 }}>•</span>
            Evaluation By: <a href="/about/#founder" style={{ color: "rgba(245, 241, 230, 0.9)", textDecoration: "underline" }}>{curatorName} (Founder, AGS)</a>
          </div>
        </div>

        {/* Core Rating Showcase */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "2.5rem",
            alignItems: "center",
            marginBottom: "2.25rem",
          }}
        >
          {/* Left: Overall Score & Stars */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.75rem",
              paddingRight: "1rem",
              borderRight: "1px solid rgba(212, 175, 55, 0.12)",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-serif, Georgia, serif)",
                  fontSize: "clamp(2.75rem, 5vw, 3.5rem)",
                  fontWeight: 700,
                  color: "#D4AF37",
                  lineHeight: 1,
                  display: "flex",
                  alignItems: "baseline",
                  gap: "0.25rem",
                }}
              >
                <span>{overallScore.toFixed(1)}</span>
                <span
                  style={{
                    fontSize: "1.1rem",
                    color: "rgba(245, 241, 230, 0.4)",
                    fontWeight: 400,
                  }}
                >
                  / {maxScore.toFixed(1)}
                </span>
              </div>

              {/* Refined Gold Star Array */}
              <div
                style={{
                  color: "#D4AF37",
                  fontSize: "1.05rem",
                  letterSpacing: "0.25rem",
                  marginTop: "0.5rem",
                }}
                aria-label={`Rating: ${overallScore} out of 5 stars`}
              >
                ★★★★★
              </div>

              <div
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(245, 241, 230, 0.6)",
                  marginTop: "0.5rem",
                }}
              >
                {gradeBadge}
              </div>
            </div>
          </div>

          {/* Right: Technical Criteria Breakdown */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.85rem",
            }}
          >
            {criteria.map((item, idx) => {
              const max = item.maxScore || 10;
              const percent = Math.min(100, Math.max(0, (item.score / max) * 100));
              return (
                <div key={idx} style={{ fontSize: "0.85rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      marginBottom: "0.3rem",
                    }}
                  >
                    <span
                      style={{
                        color: "rgba(245, 241, 230, 0.9)",
                        fontWeight: 500,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {item.label}
                    </span>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "0.4rem" }}>
                      {item.highlight && (
                        <span
                          style={{
                            fontSize: "0.7rem",
                            color: "rgba(212, 175, 55, 0.7)",
                            fontStyle: "italic",
                          }}
                        >
                          {item.highlight}
                        </span>
                      )}
                      <span
                        style={{
                          color: "#D4AF37",
                          fontFamily: "var(--font-serif, serif)",
                          fontWeight: 600,
                        }}
                      >
                        {item.score.toFixed(1)}
                      </span>
                    </div>
                  </div>

                  {/* Refined hairline progress bar */}
                  <div
                    style={{
                      height: "2px",
                      background: "rgba(212, 175, 55, 0.15)",
                      borderRadius: "1px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width: `${percent}%`,
                        background: "linear-gradient(90deg, rgba(212, 175, 55, 0.6) 0%, #D4AF37 100%)",
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Editorial Verdict Quote */}
        <div
          style={{
            borderTop: "1px solid rgba(212, 175, 55, 0.12)",
            paddingTop: "1.5rem",
            position: "relative",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-serif, Georgia, serif)",
              fontSize: "1.05rem",
              lineHeight: 1.8,
              color: "rgba(245, 241, 230, 0.88)",
              fontStyle: "italic",
              marginBottom: "1rem",
            }}
          >
            &ldquo;{verdict}&rdquo;
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "0.5rem",
              fontSize: "0.75rem",
              color: "rgba(245, 241, 230, 0.5)",
              letterSpacing: "0.03em",
            }}
          >
            <div>
              Curator Verdict: <a href="/about/#founder" style={{ color: "rgba(245, 241, 230, 0.9)", fontWeight: 600, textDecoration: "underline" }}>{curatorName} — Founder &amp; Managing Director ({leadCuratorTitle})</a>
            </div>
            <div style={{ color: "rgba(212, 175, 55, 0.8)", letterSpacing: "0.05em" }}>
              Verified by Asia Golf Specialists
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
