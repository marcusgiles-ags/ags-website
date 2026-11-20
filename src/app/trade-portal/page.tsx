import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CENTRAL_COAST_CLASSIC_TRADE,
  HOI_AN_CHAMPIONSHIP_WEEK_TRADE,
} from "@/data/trade/trade-tours";

export const metadata: Metadata = {
  title: { absolute: "Travel Trade & Wholesale Portal | AGS" },
  description:
    "Confidential wholesale travel trade portal and nett rate tariffs for licensed travel advisors. Access non-indexable tour sheets and marketing assets.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "none",
      "max-snippet": -1,
    },
  },
};

export default function TradePortalIndexPage() {
  const tours = [
    {
      data: CENTRAL_COAST_CLASSIC_TRADE,
      route: "/trade-portal/tours/the-central-coast-classic-7k9p4m/",
      tag: "Flagship Golf & Wellness Circuit",
      accentColor: "#D4AF37",
    },
    {
      data: HOI_AN_CHAMPIONSHIP_WEEK_TRADE,
      route: "/trade-portal/tours/hoi-an-championship-week-8x2b5q/",
      tag: "Championship Value & 5-Star Beachfront",
      accentColor: "#38BDF8",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#030712",
        color: "#F8FAFC",
        minHeight: "100vh",
        fontFamily: "var(--font-primary, system-ui, -apple-system, sans-serif)",
      }}
    >
      {/* ─── Confidential Warning Top Bar ───────────────────────────────────── */}
      <aside
        aria-label="Trade Portal Security"
        style={{
          backgroundColor: "rgba(10, 15, 30, 0.96)",
          borderBottom: "1px solid rgba(212, 175, 55, 0.35)",
          padding: "0.6rem 1.25rem",
          textAlign: "center",
          fontSize: "0.75rem",
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#D4AF37",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        🔒 CONFIDENTIAL WHOLESALE PORTAL • LICENSED TRAVEL TRADE &amp; INDUSTRY PARTNERS ONLY • NOT FOR PUBLIC DISTRIBUTION
      </aside>

      {/* ─── Hero Header ────────────────────────────────────────────────────── */}
      <header
        style={{
          position: "relative",
          padding: "5rem 1.5rem 4rem",
          maxWidth: "1150px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "0.35rem 1rem",
            borderRadius: "30px",
            backgroundColor: "rgba(212, 175, 55, 0.12)",
            border: "1px solid rgba(212, 175, 55, 0.35)",
            color: "#D4AF37",
            fontSize: "0.78rem",
            fontWeight: 800,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "1.25rem",
          }}
        >
          Asia Golf Specialists • Travel Trade Desk
        </div>

        <h1
          style={{
            fontFamily: "var(--font-primary-serif, Georgia, serif)",
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            fontWeight: 800,
            color: "#F8FAFC",
            lineHeight: 1.15,
            marginBottom: "1.25rem",
          }}
        >
          Wholesale Tour Tariffs &amp;{" "}
          <span style={{ color: "#D4AF37", fontStyle: "italic" }}>
            Marketing Media Kits
          </span>
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 1.8vw, 1.25rem)",
            color: "rgba(248, 250, 252, 0.8)",
            maxWidth: "780px",
            margin: "0 auto 3rem",
            lineHeight: 1.7,
            fontWeight: 300,
          }}
        >
          Dedicated rate sheets, full-resolution commercial image assets, ready-to-use client sales pitch blurbs, and dynamic margin calculators for registered travel advisors and tour operators.
        </p>

        {/* Trade Value Props */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.25rem",
            textAlign: "left",
          }}
        >
          {[
            {
              icon: "💰",
              title: "Transparent Nett Rates",
              desc: "No hidden fees. Add your own agency markup with our live client margin calculator.",
            },
            {
              icon: "🖼️",
              title: "High-Res Media Hub",
              desc: "Direct access to full-resolution course, villa, and lifestyle photography for client flyers.",
            },
            {
              icon: "⚡",
              title: "7-Day No-Risk Hold",
              desc: "Hold prime morning tee times and villas for 7 days while presenting quotes to your group.",
            },
            {
              icon: "🛡️",
              title: "Local Guardian Expat Desk",
              desc: "On-the-ground support in Da Nang & Hoi An coordinating 1:1 caddies, VIP transit, and scoring.",
            },
          ].map((vp, idx) => (
            <div
              key={idx}
              style={{
                padding: "1.5rem",
                borderRadius: "12px",
                backgroundColor: "rgba(15, 23, 42, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
              }}
            >
              <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}>{vp.icon}</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "#F8FAFC", margin: "0 0 0.35rem 0" }}>
                {vp.title}
              </h3>
              <p style={{ fontSize: "0.82rem", color: "rgba(248, 250, 252, 0.65)", margin: 0, lineHeight: 1.5 }}>
                {vp.desc}
              </p>
            </div>
          ))}
        </div>
      </header>

      {/* ─── Tour Cards Grid ─────────────────────────────────────────────────── */}
      <section
        style={{
          padding: "2rem 1.5rem 5rem",
          maxWidth: "1150px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 800,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#D4AF37",
              display: "block",
              marginBottom: "0.35rem",
            }}
          >
            Available Wholesale Itineraries
          </span>
          <h2
            style={{
              fontFamily: "var(--font-primary-serif, Georgia, serif)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              color: "#F8FAFC",
              margin: 0,
            }}
          >
            Select a Tour to Access Nett Rates &amp; Assets
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: "2.5rem",
          }}
        >
          {tours.map((t, idx) => (
            <div
              key={idx}
              style={{
                borderRadius: "16px",
                backgroundColor: "rgba(15, 23, 42, 0.8)",
                border: "1px solid rgba(212, 175, 55, 0.3)",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s ease, border-color 0.2s ease",
              }}
            >
              {/* Tour Image */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "260px",
                  backgroundColor: "#0B1329",
                }}
              >
                <Image
                  src={t.data.heroImage}
                  alt={t.data.titlePrefix + " " + t.data.titleHighlight}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "4px",
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                    backdropFilter: "blur(6px)",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: t.accentColor,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {t.tag}
                </div>
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: "2rem",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-primary-serif, Georgia, serif)",
                      fontSize: "1.65rem",
                      fontWeight: 800,
                      color: "#F8FAFC",
                      margin: "0 0 0.35rem 0",
                    }}
                  >
                    {t.data.titlePrefix} {t.data.titleHighlight}
                  </h3>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      color: "#D4AF37",
                      fontWeight: 600,
                      marginBottom: "1rem",
                    }}
                  >
                    🏨 Base: {t.data.resortName} • {t.data.duration}
                  </div>

                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "rgba(248, 250, 252, 0.75)",
                      lineHeight: 1.6,
                      marginBottom: "1.5rem",
                    }}
                  >
                    {t.data.executiveSummary}
                  </p>

                  {/* Pricing Box */}
                  <div
                    style={{
                      padding: "1.25rem",
                      borderRadius: "10px",
                      backgroundColor: "rgba(0, 0, 0, 0.45)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      marginBottom: "1.5rem",
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "0.75rem",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          fontSize: "0.68rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          color: "#94A3B8",
                        }}
                      >
                        Wholesale NETT
                      </div>
                      <div
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: 800,
                          color: "#D4AF37",
                          fontFamily: "var(--font-primary-serif, Georgia, serif)",
                        }}
                      >
                        ${t.data.nettPriceAUD.toLocaleString()}{" "}
                        <span style={{ fontSize: "0.75rem", fontWeight: 400 }}>AUD</span>
                      </div>
                      <div style={{ fontSize: "0.72rem", color: "rgba(248, 250, 252, 0.6)" }}>
                        Per golfer, twin-share
                      </div>
                    </div>

                    <div>
                      <div
                        style={{
                          fontSize: "0.68rem",
                          textTransform: "uppercase",
                          letterSpacing: "0.1em",
                          color: "#94A3B8",
                        }}
                      >
                        Single Supp
                      </div>
                      <div
                        style={{
                          fontSize: "1.35rem",
                          fontWeight: 800,
                          color: "#F8FAFC",
                        }}
                      >
                        +${t.data.singleSupplementAUD.toLocaleString()}{" "}
                        <span style={{ fontSize: "0.75rem", fontWeight: 400 }}>AUD</span>
                      </div>
                      <div style={{ fontSize: "0.72rem", color: "rgba(248, 250, 252, 0.6)" }}>
                        Private room/villa
                      </div>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul
                    style={{
                      listStyle: "none",
                      padding: 0,
                      margin: "0 0 1.5rem 0",
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.45rem",
                      fontSize: "0.82rem",
                      color: "rgba(248, 250, 252, 0.8)",
                    }}
                  >
                    <li style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                      <span style={{ color: "#D4AF37" }}>✓</span> 4 Championship Rounds (1:1 Caddies + Carts)
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                      <span style={{ color: "#D4AF37" }}>✓</span> 6 Nights at {t.data.resortName}
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                      <span style={{ color: "#D4AF37" }}>✓</span> Private VIP Executive Vehicle Fleet
                    </li>
                    <li style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                      <span style={{ color: "#D4AF37" }}>✓</span> Full Commercial High-Res Media Bank Included
                    </li>
                  </ul>
                </div>

                {/* Open Button */}
                <Link
                  href={t.route}
                  style={{
                    display: "block",
                    textAlign: "center",
                    backgroundColor: "#D4AF37",
                    color: "#030712",
                    padding: "0.9rem",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: 800,
                    fontSize: "0.88rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    boxShadow: "0 8px 20px rgba(212, 175, 55, 0.3)",
                    transition: "transform 0.15s ease",
                  }}
                >
                  Open Wholesale Rate Sheet &amp; Media Kit →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Confidential Trade Footer ───────────────────────────────────────── */}
      <div
        style={{
          borderTop: "1px solid rgba(212, 175, 55, 0.3)",
          backgroundColor: "#020617",
          padding: "2.5rem 1.5rem",
          textAlign: "center",
          fontSize: "0.8rem",
          color: "rgba(248, 250, 252, 0.5)",
        }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ margin: "0 0 0.5rem 0", color: "#D4AF37", fontWeight: 600, letterSpacing: "0.08em" }}>
            🔒 CONFIDENTIAL WHOLESALE TARIFF — FOR LICENSED TRAVEL TRADE &amp; TOUR OPERATORS ONLY
          </p>
          <p style={{ margin: "0 0 1rem 0", lineHeight: 1.6 }}>
            This document and its nett pricing are proprietary to Asia Golf Specialists Pty Ltd. It must not be publicly published, indexed by web search engines, or distributed directly to consumer retail clients without applied agency margin.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <Link href="/trade-portal/tours/the-central-coast-classic-7k9p4m/" style={{ color: "#CBD5E1", textDecoration: "none" }}>
              Central Coast Classic (Namia)
            </Link>
            <Link href="/trade-portal/tours/hoi-an-championship-week-8x2b5q/" style={{ color: "#CBD5E1", textDecoration: "none" }}>
              Hoi An Championship Week (Palm Gardens)
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
