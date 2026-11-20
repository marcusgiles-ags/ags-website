import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import MateshipShare from "@/components/MateshipShare";
import InlineFastInquiry from "@/components/InlineFastInquiry";
import ConciergeWhatsAppButton from "@/components/ConciergeWhatsAppButton";
import TourSubNav from "@/components/tours/TourSubNav";
import TourDaySplit from "@/components/tours/TourDaySplit";
import TourSanctuaryGallery from "@/components/tours/TourSanctuaryGallery";
import TourStickyMobileDock from "@/components/tours/TourStickyMobileDock";
import TourSchemaGraph from "@/components/tours/TourSchemaGraph";
import type { TourData } from "@/types/tour";

export default function NextGenTourTemplate({ data }: { data: TourData }) {
  const tourTitle = data.schema?.name || `${data.titlePrefix} ${data.titleHighlight}`;

  return (
    <div
      suppressHydrationWarning
      style={{ backgroundColor: "#020617", color: "#F8FAFC", minHeight: "100vh" }}
    >
      <Navbar />

      {/* Global CSS Enhancements */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .tour-day-split {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 2.5rem;
          align-items: stretch;
        }
        .tour-day-gallery-col {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          height: 100%;
        }
        .tour-day-main-image {
          position: relative;
          width: 100%;
          flex: 1;
          min-height: 480px;
          border-radius: 12px;
          overflow: hidden;
          background: #0b1329;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
        }
        .tour-day-thumb-row {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 0.5rem;
          width: 100%;
          flex-shrink: 0;
        }
        .tour-day-thumb-btn {
          position: relative;
          height: 68px;
          border-radius: 6px;
          overflow: hidden;
          cursor: pointer;
          background: #0b1329;
          padding: 0;
          transition: all 0.2s ease;
        }
        .tour-villa-split {
          display: grid;
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
          gap: 2.5rem;
          align-items: center;
        }
        .tour-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.25rem;
        }
        .tour-inclusions-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }
        .tour-sticky-dock {
          display: none;
        }
        @media (max-width: 1024px) {
          .tour-day-split {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .tour-day-main-image {
            min-height: 380px;
          }
          .tour-villa-split {
            grid-template-columns: 1fr;
          }
          .tour-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .tour-inclusions-grid {
            grid-template-columns: 1fr;
          }
          .tour-sticky-dock {
            display: flex;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(2, 6, 23, 0.95);
            border-top: 1px solid rgba(212, 175, 55, 0.4);
            padding: 0.75rem 1.25rem;
            z-index: 999;
            backdrop-filter: blur(12px);
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.6);
          }
        }
        @media (max-width: 640px) {
          .tour-day-main-image {
            min-height: 280px;
          }
          .tour-day-thumb-btn {
            height: 52px;
          }
          .tour-stats-grid {
            grid-template-columns: 1fr;
          }
        }
      `,
        }}
      />

      {/* ─── 1. HERO SECTION ────────────────────────────────────────────── */}
      <header
        style={{
          position: "relative",
          minHeight: "88vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "7rem 1.5rem 5rem",
          overflow: "hidden",
        }}
      >
        <Image
          src={data.heroImage}
          alt={data.titlePrefix + " " + data.titleHighlight + " — " + data.country}
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center 45%",
            zIndex: 0,
            filter: "brightness(0.65) saturate(1.1)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(2,6,23,0.55) 0%, rgba(2,6,23,0.82) 75%, #020617 100%)",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1100px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {/* Flagship Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1rem",
              borderRadius: "30px",
              background: "rgba(212, 175, 55, 0.12)",
              border: "1px solid rgba(212, 175, 55, 0.35)",
              color: "#D4AF37",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "1.75rem",
              backdropFilter: "blur(8px)",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
            }}
          >
            <span>{data.heroBadge}</span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-primary-serif)",
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              color: "#F8FAFC",
              marginBottom: "1.25rem",
              letterSpacing: "-0.01em",
              textShadow: "0 4px 30px rgba(0, 0, 0, 0.8)",
            }}
          >
            {data.titlePrefix}{" "}
            <span style={{ color: "#D4AF37", fontStyle: "italic" }}>{data.titleHighlight}</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1.05rem, 2vw, 1.35rem)",
              color: "rgba(248, 250, 252, 0.85)",
              maxWidth: "760px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.7,
              fontWeight: 300,
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.7)",
            }}
          >
            {data.subtitle}
          </p>

          {/* Hero CTAs */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1.25rem",
              flexWrap: "wrap",
              marginBottom: "3.5rem",
            }}
          >
            <a
              href="#itinerary"
              style={{
                background: "linear-gradient(135deg, #D4AF37 0%, #AA820A 100%)",
                color: "#020617",
                padding: "1rem 2.5rem",
                borderRadius: "4px",
                fontWeight: 700,
                fontSize: "0.88rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                textDecoration: "none",
                boxShadow: "0 10px 25px rgba(212, 175, 55, 0.35)",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              Explore Blueprint <span>↓</span>
            </a>

            <a
              href="/quote/"
              style={{
                background: "rgba(2, 6, 23, 0.65)",
                border: "1px solid rgba(212, 175, 55, 0.45)",
                color: "#D4AF37",
                padding: "1rem 2.25rem",
                borderRadius: "4px",
                fontWeight: 600,
                fontSize: "0.88rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                backdropFilter: "blur(6px)",
              }}
            >
              Request Custom Quote
            </a>
          </div>

          {/* High-Intent Key Metrics Strip */}
          <div
            className="tour-stats-grid"
            style={{
              maxWidth: "960px",
              margin: "0 auto",
              padding: "1.25rem",
              background: "rgba(5, 11, 26, 0.75)",
              border: "1px solid rgba(212, 175, 55, 0.25)",
              borderRadius: "12px",
              backdropFilter: "blur(12px)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.5)",
            }}
          >
            {data.quickStats.map((st, i) => (
              <div
                key={i}
                style={{
                  padding: "0.75rem",
                  borderRight: i < data.quickStats.length - 1 ? "1px solid rgba(255, 255, 255, 0.08)" : "none",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "1.25rem", marginBottom: "0.25rem" }}>{st.icon}</div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                    color: "rgba(248, 250, 252, 0.55)",
                    marginBottom: "0.2rem",
                  }}
                >
                  {st.label}
                </div>
                <div style={{ fontSize: "1.05rem", fontWeight: 700, color: "#F8FAFC" }}>
                  {st.value}
                </div>
                {st.sub && (
                  <div style={{ fontSize: "0.72rem", color: "#D4AF37", marginTop: "0.1rem" }}>
                    {st.sub}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ─── 2. CURATOR'S OVERVIEW ──────────────────────────────────────── */}
      <section
        style={{
          padding: "4.5rem 1.5rem 3rem",
          maxWidth: "1050px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            padding: "2.5rem 3rem",
            background: "linear-gradient(145deg, rgba(15, 23, 42, 0.6) 0%, rgba(5, 11, 26, 0.8) 100%)",
            border: "1px solid rgba(212, 175, 55, 0.25)",
            borderRadius: "16px",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-12px",
              left: "3rem",
              background: "#D4AF37",
              color: "#020617",
              padding: "0.25rem 0.85rem",
              borderRadius: "4px",
              fontSize: "0.7rem",
              fontWeight: 800,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
            }}
          >
            {data.curatorBrief.badge}
          </div>

          <h2
            style={{
              fontFamily: "var(--font-primary-serif)",
              fontSize: "clamp(1.75rem, 3vw, 2.35rem)",
              color: "#F8FAFC",
              marginBottom: "1.25rem",
              lineHeight: 1.25,
            }}
          >
            {data.curatorBrief.title}
          </h2>

          {data.curatorBrief.paragraphs.map((p, idx) => (
            <p
              key={idx}
              style={{
                fontSize: "1.05rem",
                lineHeight: 1.8,
                color: "rgba(248, 250, 252, 0.8)",
                marginBottom: "1.25rem",
                fontWeight: 300,
              }}
            >
              {p}
            </p>
          ))}

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1.5rem",
              marginTop: "2rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <div>
              <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#D4AF37", display: "block" }}>
                {data.curatorBrief.pacingLabel}
              </span>
              <span style={{ fontSize: "0.95rem", color: "#F8FAFC", fontWeight: 600 }}>
                {data.curatorBrief.pacingDesc}
              </span>
            </div>

            <div style={{ textAlign: "right", fontStyle: "italic", color: "rgba(248, 250, 252, 0.6)", fontSize: "0.88rem" }}>
              &ldquo;{data.curatorBrief.quote}&rdquo; — {data.curatorBrief.author}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. STICKY DAY-NAV ──────────────────────────────────────────── */}
      <TourSubNav chapters={data.chapters.map((c) => ({ day: c.day, id: c.id }))} />

      {/* ─── 4. THE DAILY BLUEPRINT ─────────────────────────────────────── */}
      <main id="itinerary" style={{ padding: "4rem 1.5rem" }}>
        {data.chapters.map((chapter) => (
          <section
            key={chapter.day}
            id={chapter.id}
            style={{
              maxWidth: "1150px",
              margin: "0 auto 4.5rem",
              padding: "2.5rem",
              borderRadius: "20px",
              background: "rgba(5, 11, 26, 0.85)",
              border: "1px solid rgba(212, 175, 55, 0.25)",
              boxShadow: "0 25px 55px rgba(0, 0, 0, 0.55)",
              scrollMarginTop: "140px",
            }}
          >
            {/* Day Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1rem",
                paddingBottom: "1.5rem",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                marginBottom: "2rem",
              }}
            >
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.4rem" }}>
                  <span
                    style={{
                      padding: "0.25rem 0.75rem",
                      borderRadius: "4px",
                      background: "rgba(212, 175, 55, 0.15)",
                      border: "1px solid rgba(212, 175, 55, 0.35)",
                      color: "#D4AF37",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                    }}
                  >
                    Day {chapter.day}
                  </span>
                  <span style={{ fontSize: "0.85rem", color: "rgba(248, 250, 252, 0.5)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {chapter.subtitle}
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: "var(--font-primary-serif)",
                    fontSize: "clamp(1.85rem, 3.5vw, 2.65rem)",
                    fontWeight: 700,
                    color: "#F8FAFC",
                    margin: 0,
                  }}
                >
                  {chapter.title}
                </h2>
              </div>

              {chapter.architect && (
                <div
                  style={{
                    textAlign: "right",
                    padding: "0.5rem 1rem",
                    borderRadius: "6px",
                    background: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <span style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#D4AF37", display: "block" }}>
                    Architect / Host
                  </span>
                  <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "#F8FAFC" }}>
                    {chapter.architect}
                  </span>
                </div>
              )}
            </div>

            {/* Day Content Split (Interactive Island) */}
            <TourDaySplit chapter={chapter} />
          </section>
        ))}
      </main>

      {/* ─── 5. SANCTUARY SHOWCASE ───────────────────────────────────────── */}
      {data.sanctuary && (
<section
        style={{
          padding: "5rem 1.5rem",
          background: "linear-gradient(180deg, #020617 0%, #050b1a 100%)",
          borderTop: "1px solid rgba(212, 175, 55, 0.2)",
          borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
        }}
      >
        <div style={{ maxWidth: "1150px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span style={{ fontSize: "0.78rem", textTransform: "uppercase", letterSpacing: "0.25em", color: "#D4AF37", fontWeight: 700, display: "block", marginBottom: "0.5rem" }}>
              Luxury Sanctuary
            </span>
            <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(2rem, 4vw, 3.25rem)", fontWeight: 700, color: "#F8FAFC", margin: "0 0 1rem 0" }}>
              {data.sanctuary?.name}
            </h2>
            <p style={{ maxWidth: "700px", margin: "0 auto", fontSize: "1.05rem", color: "rgba(248, 250, 252, 0.75)", lineHeight: 1.7, fontWeight: 300 }}>
              {data.sanctuary?.tagline}
            </p>
          </div>

          {/* Villa Split Showcase */}
          <div className="tour-villa-split" style={{ marginBottom: "3rem" }}>
            {/* Gallery Column */}
            <TourSanctuaryGallery sanctuary={data.sanctuary} />

            {/* Right: Property Details & Inclusions */}
            <div>
              <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#D4AF37", fontWeight: 700, display: "block", marginBottom: "0.5rem" }}>
                {data.sanctuary?.location}
              </span>

              <p style={{ fontSize: "1.05rem", lineHeight: 1.8, color: "rgba(248, 250, 252, 0.85)", marginBottom: "1.5rem", fontWeight: 300 }}>
                {data.sanctuary?.overview}
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1rem", marginBottom: "2rem" }}>
                {(data.sanctuary?.inclusions || []).map((inc, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "1rem",
                      borderRadius: "8px",
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                    }}
                  >
                    <div style={{ fontSize: "1.25rem", marginBottom: "0.25rem" }}>{inc.icon}</div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#F8FAFC", marginBottom: "0.2rem" }}>
                      {inc.title}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "rgba(248, 250, 252, 0.6)", lineHeight: 1.5 }}>
                      {inc.desc}
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href={data.sanctuary?.href || "#"}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.85rem 1.75rem",
                  borderRadius: "4px",
                  background: "rgba(212, 175, 55, 0.15)",
                  border: "1px solid rgba(212, 175, 55, 0.4)",
                  color: "#D4AF37",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                <span>View Full Property Showcase</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      )}


      {/* ─── 6. INCLUSIONS VS EXCLUSIONS ─────────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", maxWidth: "1050px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#D4AF37", fontWeight: 700, display: "block", marginBottom: "0.5rem" }}>
            Total Clarity
          </span>
          <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)", fontWeight: 700, color: "#F8FAFC", marginBottom: "0.75rem" }}>
            Tour Inclusions vs. Non-Inclusions
          </h2>
          <p style={{ fontSize: "0.9rem", color: "rgba(248, 250, 252, 0.65)", maxWidth: "680px", margin: "0 auto", lineHeight: 1.6 }}>
            Our transparent tour pricing strictly covers your 3 core tournament pillars: confirmed championship golf green fees (with carts &amp; caddies), luxury accommodation, and private door-to-door VIP fleet transfers. Flights, meals, caddie tips, and optional rest-day activities are not included in the base price.
          </p>
        </div>

        <div className="tour-inclusions-grid">
          {/* Included */}
          <div
            style={{
              padding: "2rem",
              borderRadius: "12px",
              background: "rgba(5, 11, 26, 0.75)",
              border: "1px solid rgba(212, 175, 55, 0.35)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
              <span style={{ color: "#D4AF37", fontSize: "1.25rem" }}>✓</span>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#F8FAFC", margin: 0 }}>
                What&apos;s Included in Tour Price
              </h3>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              {data.inclusions.included.map((item, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ color: "#D4AF37", marginTop: "2px" }}>✓</span>
                  <div>
                    <strong style={{ display: "block", fontSize: "0.92rem", color: "#F8FAFC", marginBottom: "0.15rem" }}>
                      {item.title}
                    </strong>
                    <span style={{ fontSize: "0.82rem", color: "rgba(248, 250, 252, 0.65)", lineHeight: 1.5 }}>
                      {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Excluded */}
          <div
            style={{
              padding: "2rem",
              borderRadius: "12px",
              background: "rgba(5, 11, 26, 0.4)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem" }}>
              <span style={{ color: "rgba(248, 250, 252, 0.4)", fontSize: "1.25rem" }}>✕</span>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "rgba(248, 250, 252, 0.8)", margin: 0 }}>
                What&apos;s Not Included (Non-Inclusions)
              </h3>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              {data.inclusions.excluded.map((item, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ color: "rgba(248, 250, 252, 0.4)", marginTop: "2px" }}>✕</span>
                  <div>
                    <strong style={{ display: "block", fontSize: "0.92rem", color: "rgba(248, 250, 252, 0.8)", marginBottom: "0.15rem" }}>
                      {item.title}
                    </strong>
                    <span style={{ fontSize: "0.82rem", color: "rgba(248, 250, 252, 0.55)", lineHeight: 1.5 }}>
                      {item.desc}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── 7. PRICING TRANSPARENCY & FAST CONCIERGE QUOTE ─────────────── */}
      <section
        style={{
          padding: "5rem 1.5rem",
          background: "linear-gradient(180deg, #050b1a 0%, #020617 100%)",
          borderTop: "1px solid rgba(212, 175, 55, 0.2)",
        }}
      >
        <div style={{ maxWidth: "850px", margin: "0 auto", textAlign: "center" }}>
          <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", color: "#D4AF37", fontWeight: 700, display: "block", marginBottom: "0.5rem" }}>
            Transparent Benchmark
          </span>
          <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700, color: "#F8FAFC", marginBottom: "1.5rem" }}>
            Pricing &amp; Seasonality Guide
          </h2>

          <div
            style={{
              padding: "2rem",
              borderRadius: "12px",
              background: "rgba(5, 11, 26, 0.9)",
              border: "1px solid rgba(212, 175, 55, 0.35)",
              boxShadow: "0 20px 45px rgba(0, 0, 0, 0.6)",
              marginBottom: "2.5rem",
            }}
          >
            <div style={{ fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "rgba(248, 250, 252, 0.6)", marginBottom: "0.5rem" }}>
              Standard Group Benchmark (4 to 8 Golfers)
            </div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "baseline", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <span style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: 800, color: "#D4AF37", fontFamily: "var(--font-primary-serif)" }}>
                From {data.pricing.guidePriceUSD} USD
              </span>
              <span style={{ fontSize: "1.15rem", color: "rgba(248, 250, 252, 0.7)" }}>
                ({data.pricing.guidePriceAUD})
              </span>
            </div>

            <p style={{ fontSize: "0.85rem", color: "rgba(248, 250, 252, 0.55)", margin: "0 0 1.25rem 0" }}>
              {data.pricing.perGolferLabel}
            </p>

            {/* Inclusions Scope Callout */}
            <div
              style={{
                display: "inline-flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                padding: "0.5rem 1.25rem",
                borderRadius: "30px",
                background: "rgba(212, 175, 55, 0.08)",
                border: "1px solid rgba(212, 175, 55, 0.35)",
                margin: "0 auto 1.25rem auto",
              }}
            >
              <span style={{ fontSize: "0.72rem", fontWeight: 800, color: "#D4AF37", letterSpacing: "0.08em" }}>
                PACKAGE SCOPE:
              </span>
              <span style={{ fontSize: "0.78rem", color: "#F8FAFC", fontWeight: 600 }}>
                ⛳ Golf Green Fees, Carts &amp; Caddies
              </span>
              <span style={{ color: "rgba(212, 175, 55, 0.5)" }}>•</span>
              <span style={{ fontSize: "0.78rem", color: "#F8FAFC", fontWeight: 600 }}>
                🏨 5-Star Hotel / Villa Stay
              </span>
              <span style={{ color: "rgba(212, 175, 55, 0.5)" }}>•</span>
              <span style={{ fontSize: "0.78rem", color: "#F8FAFC", fontWeight: 600 }}>
                🚐 Private VIP Fleet Transfers
              </span>
            </div>

            <p style={{ fontSize: "0.82rem", color: "rgba(248, 250, 252, 0.65)", maxWidth: "640px", margin: "0 auto 1.5rem auto", lineHeight: 1.5 }}>
              All dining recommendations, private yacht charters, cooking classes, and rest-day excursions are curated highlights available to book or organize on request.
            </p>

            {/* Seasonality Matrix */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "0.75rem",
                padding: "1rem",
                borderRadius: "8px",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                marginBottom: "1.5rem",
              }}
            >
              {data.pricing.seasonWindows.map((win, idx) => (
                <div key={idx} style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(248, 250, 252, 0.5)", display: "block" }}>
                    {win.season}
                  </span>
                  <strong style={{ fontSize: "0.88rem", color: "#F8FAFC", display: "block", margin: "0.2rem 0" }}>
                    {win.months}
                  </strong>
                  <span style={{ fontSize: "0.72rem", color: win.statusColor, fontWeight: 600 }}>
                    {win.status}
                  </span>
                </div>
              ))}
            </div>

            <p style={{ fontSize: "0.82rem", color: "rgba(248, 250, 252, 0.5)", fontStyle: "italic", margin: 0 }}>
              {data.pricing.customizationNote}
            </p>
          </div>

          {/* Crawl-Safe WhatsApp & Inline Fast Inquiry Form */}
          <div style={{ maxWidth: "680px", margin: "0 auto 3rem auto" }}>
            <ConciergeWhatsAppButton
              itemType="tour"
              itemTitle={tourTitle}
              destination={data.country}
            />
            <InlineFastInquiry
              packageTitle={data.titlePrefix + " " + data.titleHighlight}
              destination={data.country}
            />
          </div>

          {/* Mateship Share */}
          <div style={{ maxWidth: "580px", margin: "0 auto" }}>
            <MateshipShare
              tourName={data.titlePrefix + " " + data.titleHighlight}
              tourUrl={data.schema.canonicalUrl}
              destination={data.country}
            />
          </div>
        </div>
      </section>

      {/* ─── 8. FREQUENTLY ASKED QUESTIONS & GEO ACCORDIONS ─────────────── */}
      <section style={{ padding: "4rem 1.5rem", background: "#020617", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--font-primary-serif)",
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              color: "#D4AF37",
              marginBottom: "2rem",
              textAlign: "center",
              fontWeight: 700,
            }}
          >
            Tour Logistics &amp; FAQs
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {data.faqs.map((faq, idx) => (
              <details
                key={idx}
                style={{
                  padding: "1.25rem",
                  borderRadius: "10px",
                  background: "rgba(255, 255, 255, 0.02)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  cursor: "pointer",
                }}
              >
                <summary
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    fontSize: "0.95rem",
                    fontWeight: 600,
                    color: "#F8FAFC",
                    listStyle: "none",
                  }}
                >
                  <span>{faq.q}</span>
                  <span style={{ color: "#D4AF37", fontSize: "1.2rem" }}>+</span>
                </summary>
                <p style={{ marginTop: "0.75rem", fontSize: "0.85rem", color: "rgba(248, 250, 252, 0.7)", lineHeight: 1.7, fontWeight: 300, margin: "0.75rem 0 0 0" }}>
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. STICKY MOBILE CONCIERGE DOCK ────────────────────────────── */}
      <TourStickyMobileDock
        guidePriceUSD={data.pricing.guidePriceUSD}
        guidePriceAUD={data.pricing.guidePriceAUD}
        tourTitle={tourTitle}
      />

      {/* ─── 10. STRUCTURED SCHEMA GRAPH (GEO / RICH RESULTS) ───────────── */}
      <TourSchemaGraph data={data} />
    </div>
  );
}
