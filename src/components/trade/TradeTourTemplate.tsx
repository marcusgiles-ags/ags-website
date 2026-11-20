"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import type { TradeTourData, TradeImageMedia } from "@/data/trade/trade-tours";

interface TradeTourTemplateProps {
  data: TradeTourData;
}

export default function TradeTourTemplate({ data }: TradeTourTemplateProps) {
  // ─── Mode: Fixed B2B Wholesale Tariff ───────────────────────────────────────
  const viewMode = "wholesale" as const;

  // ─── Calculator State ───────────────────────────────────────────────────────
  const [twinGolfers, setTwinGolfers] = useState<number>(4);
  const [singleGolfers, setSingleGolfers] = useState<number>(0);
  const [marginPercent, setMarginPercent] = useState<number>(15);
  const [customMarginDollar, setCustomMarginDollar] = useState<number>(0);
  const [marginType, setMarginType] = useState<"percent" | "fixed">("percent");
  const [includeUpgrade, setIncludeUpgrade] = useState<boolean>(false);

  // ─── Media Kit Filter & Copy State ──────────────────────────────────────────
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [copiedSnippetIndex, setCopiedSnippetIndex] = useState<number | null>(null);
  const [allAssetsCopied, setAllAssetsCopied] = useState<boolean>(false);
  const [activeLightboxImg, setActiveLightboxImg] = useState<TradeImageMedia | null>(null);

  // ─── B2B Booking / Hold Form State ──────────────────────────────────────────
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    agencyName: "",
    agentName: "",
    agentEmail: "",
    agentPhone: "",
    preferredDates: "",
    estimatedPax: "4",
    notes: "",
  });

  // ─── Dynamic Pricing Calculations ───────────────────────────────────────────
  const pricing = useMemo(() => {
    const upgradeDiff =
      data.upgradeOption && includeUpgrade ? data.upgradeOption.priceDiffAUD : 0;
    const nettTwin = data.nettPriceAUD + upgradeDiff;
    const nettSingleSupp = data.singleSupplementAUD;

    // Markup per person
    const markupPerPerson =
      marginType === "percent"
        ? Math.round(nettTwin * (marginPercent / 100))
        : customMarginDollar;

    const retailTwin = nettTwin + markupPerPerson;
    const retailSingle = nettTwin + nettSingleSupp + markupPerPerson;

    // Total Calculations
    const totalNettCost =
      twinGolfers * nettTwin + singleGolfers * (nettTwin + nettSingleSupp);
    const totalClientQuote =
      twinGolfers * retailTwin + singleGolfers * retailSingle;
    const totalAgencyProfit = totalClientQuote - totalNettCost;
    const totalGolfers = twinGolfers + singleGolfers;

    return {
      nettTwin,
      nettSingleSupp,
      markupPerPerson,
      retailTwin,
      retailSingle,
      totalNettCost,
      totalClientQuote,
      totalAgencyProfit,
      totalGolfers,
      upgradeDiff,
    };
  }, [
    data.nettPriceAUD,
    data.singleSupplementAUD,
    data.upgradeOption,
    includeUpgrade,
    twinGolfers,
    singleGolfers,
    marginPercent,
    customMarginDollar,
    marginType,
  ]);

  // ─── Copy Handlers ──────────────────────────────────────────────────────────
  const handleCopyUrl = (url: string) => {
    const fullUrl = `https://www.asiagolfspecialists.com${url}`;
    navigator.clipboard.writeText(fullUrl);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2500);
  };

  const handleCopySnippet = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedSnippetIndex(index);
    setTimeout(() => setCopiedSnippetIndex(null), 2500);
  };

  const handleCopyAllAssets = () => {
    const lines = [
      `# High-Resolution Media Assets — ${data.titlePrefix} ${data.titleHighlight}`,
      `Tour Base: ${data.resortName} (${data.location})`,
      `Licensed for registered travel advisors and tour operators.\n`,
      ...data.mediaAssets.map(
        (m, idx) =>
          `${idx + 1}. [${m.title}] (${m.resolution})\nDirect URL: https://www.asiagolfspecialists.com${m.url}\nCaption: ${m.caption}\n`
      ),
    ].join("\n");
    navigator.clipboard.writeText(lines);
    setAllAssetsCopied(true);
    setTimeout(() => setAllAssetsCopied(false), 3000);
  };

  // Filtered Media
  const filteredAssets = useMemo(() => {
    if (selectedCategory === "all") return data.mediaAssets;
    return data.mediaAssets.filter((a) => a.category === selectedCategory);
  }, [data.mediaAssets, selectedCategory]);

  return (
    <div
      style={{
        backgroundColor: "#030712",
        color: "#F8FAFC",
        minHeight: "100vh",
        fontFamily: "var(--font-primary, system-ui, -apple-system, sans-serif)",
      }}
    >
      {/* ─── 1. TOP CONFIDENTIAL BANNER ───────────────────────────────────────── */}
      <aside
        aria-label="Trade Portal Controls"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor: "rgba(10, 15, 30, 0.96)",
          borderBottom: "1px solid rgba(212, 175, 55, 0.35)",
          backdropFilter: "blur(12px)",
          padding: "0.6rem 1.25rem",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1rem",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
          <div
            style={{
              padding: "0.25rem 0.65rem",
              borderRadius: "4px",
              backgroundColor: "rgba(220, 38, 38, 0.2)",
              border: "1px solid rgba(239, 68, 68, 0.5)",
              color: "#FCA5A5",
              fontSize: "0.72rem",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <span>🔒 CONFIDENTIAL B2B TARIFF</span>
          </div>

          <span
            style={{
              fontSize: "0.78rem",
              color: "rgba(248, 250, 252, 0.7)",
              fontWeight: 500,
            }}
          >
            Licensed Travel Trade &amp; Wholesale Only • Proprietary Nett Rates
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <span style={{ fontSize: "0.75rem", color: "#D4AF37", fontWeight: 600 }}>
            Direct Concierge: Marcus Giles
          </span>
          <span style={{ fontSize: "0.75rem", color: "rgba(255, 255, 255, 0.4)" }}>
            •
          </span>
          <a
            href="tel:+84935601099"
            style={{ fontSize: "0.75rem", color: "#F8FAFC", textDecoration: "none", fontWeight: 500 }}
          >
            +84 935 601 099
          </a>
        </div>
      </aside>

      {/* ─── 2. TRADE NAVIGATION BAR ──────────────────────────────────────────── */}
      <nav
        aria-label="Trade Portal Navigation"
        style={{
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          backgroundColor: "rgba(5, 11, 26, 0.85)",
          padding: "0.85rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Link
              href="/trade-portal/"
              style={{
                color: "#F8FAFC",
                textDecoration: "none",
                fontSize: "1.1rem",
                fontWeight: 800,
                letterSpacing: "0.08em",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span style={{ color: "#D4AF37" }}>AGS</span>
              <span style={{ fontSize: "0.85rem", color: "rgba(248, 250, 252, 0.6)", fontWeight: 400 }}>|</span>
              <span style={{ fontSize: "0.82rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                Travel Trade Portal
              </span>
            </Link>
          </div>

          <div
            style={{
              display: "flex",
              gap: "1.25rem",
              alignItems: "center",
              fontSize: "0.82rem",
              fontWeight: 600,
            }}
          >
            <a href="#pricing-overview" style={{ color: "#D4AF37", textDecoration: "none" }}>
              💰 Pricing &amp; Inclusions
            </a>
            <a href="#itinerary" style={{ color: "#E2E8F0", textDecoration: "none" }}>
              🗓️ 7-Day Itinerary
            </a>
            <a href="#course-profiles" style={{ color: "#E2E8F0", textDecoration: "none" }}>
              ⛳ Course &amp; Hotel Guides
            </a>
            {viewMode === "wholesale" && (
              <a href="#calculator" style={{ color: "#E2E8F0", textDecoration: "none" }}>
                📊 Margin Calculator
              </a>
            )}
            <a href="#media-kit" style={{ color: "#E2E8F0", textDecoration: "none" }}>
              🖼️ High-Res Media Kit
            </a>
            <a
              href="#book-hold"
              style={{
                backgroundColor: "#D4AF37",
                color: "#030712",
                padding: "0.45rem 1rem",
                borderRadius: "4px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              ⚡ Hold Group Dates
            </a>
          </div>
        </div>
      </nav>

      {/* ─── 3. HERO SECTION ─────────────────────────────────────────────────── */}
      <header
        style={{
          position: "relative",
          minHeight: "68vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "4.5rem 1.5rem 3.5rem",
          overflow: "hidden",
        }}
      >
        <Image
          src={data.heroImage}
          alt={data.titlePrefix + " " + data.titleHighlight}
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center 45%",
            zIndex: 0,
            filter: "brightness(0.6) saturate(1.1)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(3,7,18,0.55) 0%, rgba(3,7,18,0.85) 75%, #030712 100%)",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "1150px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.4rem 1.25rem",
              borderRadius: "30px",
              background: "rgba(212, 175, 55, 0.15)",
              border: "1px solid rgba(212, 175, 55, 0.4)",
              color: "#D4AF37",
              fontSize: "0.8rem",
              fontWeight: 800,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
              backdropFilter: "blur(8px)",
            }}
          >
            <span>{viewMode === "wholesale" ? data.heroBadge : "🇻🇳 Signature Luxury Golf Tour • Central Vietnam"}</span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-primary-serif, Georgia, serif)",
              fontSize: "clamp(2.4rem, 5vw, 4.8rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              color: "#F8FAFC",
              marginBottom: "1.25rem",
              textShadow: "0 4px 30px rgba(0, 0, 0, 0.8)",
            }}
          >
            {data.titlePrefix}{" "}
            <span style={{ color: "#D4AF37", fontStyle: "italic" }}>
              {data.titleHighlight}
            </span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1.05rem, 1.8vw, 1.28rem)",
              color: "rgba(248, 250, 252, 0.9)",
              maxWidth: "840px",
              margin: "0 auto 2rem",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            {data.executiveSummary}
          </p>

          {/* Quick Stats Strip */}
          <div
            style={{
              display: "inline-flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "center",
              alignItems: "center",
              padding: "0.75rem 1.5rem",
              borderRadius: "30px",
              backgroundColor: "rgba(10, 16, 32, 0.85)",
              border: "1px solid rgba(212, 175, 55, 0.3)",
              backdropFilter: "blur(8px)",
              fontSize: "0.85rem",
            }}
          >
            <span style={{ color: "#F8FAFC" }}>🏨 <strong>{data.resortName}</strong></span>
            <span style={{ color: "rgba(212, 175, 55, 0.5)" }}>•</span>
            <span style={{ color: "#F8FAFC" }}>⛳ <strong>{data.roundsCount} Rounds (72 Holes)</strong></span>
            <span style={{ color: "rgba(212, 175, 55, 0.5)" }}>•</span>
            <span style={{ color: "#F8FAFC" }}>🚐 <strong>Private VIP Transfers</strong></span>
            <span style={{ color: "rgba(212, 175, 55, 0.5)" }}>•</span>
            <span style={{ color: "#D4AF37", fontWeight: 700 }}>
              {viewMode === "wholesale"
                ? `NETT: $${data.nettPriceAUD.toLocaleString()} AUD`
                : `Retail Quote: $${pricing.retailTwin.toLocaleString()} AUD`}
            </span>
          </div>
        </div>
      </header>

      {/* ─── 4. WHOLESALE PRICING & INCLUSIONS (MOVED TO TOP PER USER INSTRUCTION) ─── */}
      <section
        id="pricing-overview"
        style={{
          padding: "3.5rem 1.5rem 2.5rem",
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
            💰 Pricing &amp; Scope
          </span>
          <h2
            style={{
              fontFamily: "var(--font-primary-serif, Georgia, serif)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)",
              fontWeight: 800,
              color: "#F8FAFC",
              margin: "0 0 0.5rem 0",
            }}
          >
            {viewMode === "wholesale" ? "Wholesale Tariff & Inclusions" : "Tour Investment & Inclusions"}
          </h2>
          <p style={{ fontSize: "0.92rem", color: "rgba(248, 250, 252, 0.7)", margin: 0 }}>
            {data.duration} • 4 Championship Rounds • Unpack Once at {data.resortName}
          </p>
        </div>

        {/* Pricing Primary Strip */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.25rem",
            marginBottom: "2.5rem",
          }}
        >
          {/* Card 1: Core Rate */}
          <div
            style={{
              padding: "1.75rem",
              borderRadius: "12px",
              background: "linear-gradient(145deg, rgba(15, 23, 42, 0.9) 0%, rgba(5, 11, 26, 0.95) 100%)",
              border: "1px solid rgba(212, 175, 55, 0.4)",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#94A3B8",
                marginBottom: "0.4rem",
              }}
            >
              {viewMode === "wholesale" ? "Wholesale NETT Price" : "Client Retail Quote"}
            </div>
            <div
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.6rem)",
                fontWeight: 800,
                color: "#D4AF37",
                fontFamily: "var(--font-primary-serif, Georgia, serif)",
                marginBottom: "0.25rem",
              }}
            >
              ${(viewMode === "wholesale" ? data.nettPriceAUD : pricing.retailTwin).toLocaleString()}{" "}
              <span style={{ fontSize: "0.95rem", fontWeight: 600 }}>AUD</span>
            </div>
            <div style={{ fontSize: "0.82rem", color: "rgba(248, 250, 252, 0.8)", fontWeight: 500 }}>
              Per golfer, twin/double share
            </div>
            {data.upgradeOption && (
              <div
                style={{
                  marginTop: "0.65rem",
                  display: "inline-block",
                  padding: "0.25rem 0.65rem",
                  borderRadius: "4px",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  backgroundColor: "rgba(212, 175, 55, 0.12)",
                  border: "1px solid rgba(212, 175, 55, 0.35)",
                  color: "#D4AF37",
                }}
              >
                Optional {data.upgradeOption.courseName} swap: +${data.upgradeOption.priceDiffAUD} AUD ({data.upgradeOption.seasonNote})
              </div>
            )}
          </div>

          {/* Card 2: Single Supplement */}
          <div
            style={{
              padding: "1.75rem",
              borderRadius: "12px",
              background: "linear-gradient(145deg, rgba(15, 23, 42, 0.9) 0%, rgba(5, 11, 26, 0.95) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#94A3B8",
                marginBottom: "0.4rem",
              }}
            >
              Single Supplement
            </div>
            <div
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.3rem)",
                fontWeight: 800,
                color: "#F8FAFC",
                fontFamily: "var(--font-primary-serif, Georgia, serif)",
                marginBottom: "0.25rem",
              }}
            >
              +${data.singleSupplementAUD.toLocaleString()}{" "}
              <span style={{ fontSize: "0.9rem", fontWeight: 600 }}>AUD</span>
            </div>
            <div style={{ fontSize: "0.82rem", color: "rgba(248, 250, 252, 0.8)", fontWeight: 500 }}>
              Sole occupancy private room / villa
            </div>
            <div style={{ fontSize: "0.74rem", color: "rgba(248, 250, 252, 0.55)", marginTop: "0.5rem" }}>
              Entire 6 nights private occupancy
            </div>
          </div>

          {/* Card 3: Golf Specs & Concierge */}
          <div
            style={{
              padding: "1.75rem",
              borderRadius: "12px",
              background: "linear-gradient(145deg, rgba(15, 23, 42, 0.9) 0%, rgba(5, 11, 26, 0.95) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              boxShadow: "0 15px 35px rgba(0, 0, 0, 0.5)",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#94A3B8",
                marginBottom: "0.4rem",
              }}
            >
              Championship Rota &amp; Fleet
            </div>
            <div
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.3rem)",
                fontWeight: 800,
                color: "#F8FAFC",
                fontFamily: "var(--font-primary-serif, Georgia, serif)",
                marginBottom: "0.25rem",
              }}
            >
              {data.roundsCount} Rounds
            </div>
            <div style={{ fontSize: "0.82rem", color: "#D4AF37", fontWeight: 600 }}>
              1:1 Caddies + Carts Included
            </div>
            <div style={{ fontSize: "0.74rem", color: "rgba(248, 250, 252, 0.55)", marginTop: "0.5rem" }}>
              Private VIP vehicles for all course transfers
            </div>
          </div>
        </div>

        {/* Inclusions vs Exclusions Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "2rem",
          }}
        >
          {/* Inclusions Box */}
          <div
            style={{
              padding: "2rem",
              borderRadius: "12px",
              backgroundColor: "rgba(15, 23, 42, 0.65)",
              border: "1px solid rgba(34, 197, 94, 0.3)",
            }}
          >
            <h3
              style={{
                fontSize: "1.15rem",
                fontWeight: 700,
                color: "#4ADE80",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                margin: "0 0 1.25rem 0",
              }}
            >
              <span>✓</span>
              <span>Included in Package</span>
            </h3>

            {data.includedInNett.map((group, gIdx) => (
              <div key={gIdx} style={{ marginBottom: "1.25rem" }}>
                <div
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#D4AF37",
                    marginBottom: "0.4rem",
                  }}
                >
                  {group.category}
                </div>
                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.4rem",
                  }}
                >
                  {group.items.map((it, itIdx) => (
                    <li
                      key={itIdx}
                      style={{
                        fontSize: "0.85rem",
                        color: "rgba(248, 250, 252, 0.82)",
                        lineHeight: 1.5,
                      }}
                    >
                      • {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Exclusions Box */}
          <div
            style={{
              padding: "2rem",
              borderRadius: "12px",
              backgroundColor: "rgba(15, 23, 42, 0.65)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#94A3B8",
                  margin: "0 0 1.25rem 0",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span>✕</span>
                <span>Excluded (Client / Agency Responsibility)</span>
              </h3>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.6rem",
                  fontSize: "0.85rem",
                  color: "rgba(248, 250, 252, 0.72)",
                  lineHeight: 1.5,
                }}
              >
                {data.excludedFromNett.map((ex, eIdx) => (
                  <li key={eIdx}>✕ {ex}</li>
                ))}
              </ul>
            </div>

            <div
              style={{
                marginTop: "1.5rem",
                padding: "1rem",
                borderRadius: "8px",
                backgroundColor: "rgba(212, 175, 55, 0.08)",
                border: "1px solid rgba(212, 175, 55, 0.25)",
                fontSize: "0.8rem",
                color: "#D4AF37",
                lineHeight: 1.5,
              }}
            >
              💡 <strong>Travel Trade Notice:</strong> All course transfers are in private VIP executive vehicles with dedicated drivers. No shared bus shuttles.
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. DAILY ITINERARY (MOVED TO TOP DIRECTLY AFTER PRICING) ─────────── */}
      <section
        id="itinerary"
        style={{
          padding: "3.5rem 1.5rem 4rem",
          maxWidth: "1150px",
          margin: "0 auto",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
            🗓️ Day-by-Day Master Itinerary
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
            7-Day Detailed Tour Blueprint
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "rgba(248, 250, 252, 0.7)",
              maxWidth: "680px",
              margin: "0.5rem auto 0 auto",
            }}
          >
            Championship rounds, estimated private transfer times, and recovery schedules.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {data.itinerary.map((chapter) => (
            <div
              key={chapter.day}
              style={{
                borderRadius: "16px",
                background: "linear-gradient(145deg, rgba(15, 23, 42, 0.7) 0%, rgba(5, 11, 26, 0.85) 100%)",
                border: "1px solid rgba(212, 175, 55, 0.2)",
                padding: "2rem",
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.4)",
              }}
            >
              {/* Day Header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "1rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      backgroundColor: "rgba(212, 175, 55, 0.15)",
                      color: "#D4AF37",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "4px",
                      fontSize: "0.74rem",
                      fontWeight: 800,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "0.4rem",
                    }}
                  >
                    <span>Day {chapter.day} • {chapter.pacing}</span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-primary-serif, Georgia, serif)",
                      fontSize: "clamp(1.35rem, 2.5vw, 1.85rem)",
                      fontWeight: 700,
                      color: "#F8FAFC",
                      margin: "0 0 0.25rem 0",
                    }}
                  >
                    {chapter.title}
                  </h3>
                  <div style={{ fontSize: "0.9rem", color: "#D4AF37", fontWeight: 600 }}>
                    {chapter.subtitle}
                  </div>
                </div>

                {chapter.courseName && (
                  <div
                    style={{
                      padding: "0.6rem 1rem",
                      borderRadius: "8px",
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                      border: "1px solid rgba(212, 175, 55, 0.3)",
                      textAlign: "right",
                    }}
                  >
                    <div style={{ fontSize: "0.7rem", color: "rgba(248, 250, 252, 0.55)", textTransform: "uppercase" }}>
                      Course Architect
                    </div>
                    <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#F8FAFC" }}>
                      {chapter.architect}
                    </div>
                    {chapter.yardage && (
                      <div style={{ fontSize: "0.75rem", color: "#D4AF37" }}>
                        {chapter.yardage} • {chapter.par}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Transfer Expectation Callout */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.5rem 0.85rem",
                  borderRadius: "6px",
                  backgroundColor: "rgba(212, 175, 55, 0.1)",
                  border: "1px solid rgba(212, 175, 55, 0.3)",
                  marginBottom: "1rem",
                  fontSize: "0.82rem",
                  color: "#D4AF37",
                }}
              >
                <span>⏱️</span>
                <span>
                  <strong>Estimated Private Transfer:</strong> {chapter.transferTime}
                </span>
              </div>

              {/* Day Overview */}
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.75,
                  color: "#F8FAFC",
                  fontWeight: 400,
                  marginBottom: "1.25rem",
                }}
              >
                {chapter.overview}
              </p>

              {/* Day Bullets */}
              <ul
                style={{
                  margin: "0 0 1.5rem 0",
                  paddingLeft: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  fontSize: "0.92rem",
                  color: "rgba(248, 250, 252, 0.82)",
                  lineHeight: 1.65,
                }}
              >
                {chapter.bullets.map((b, bIdx) => (
                  <li key={bIdx}>{b}</li>
                ))}
              </ul>

              {/* Logistics Strip */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1.25rem",
                  padding: "0.85rem 1.25rem",
                  borderRadius: "8px",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  marginBottom: "1.5rem",
                  fontSize: "0.82rem",
                }}
              >
                {chapter.logistics.map((l, lIdx) => (
                  <div key={lIdx}>
                    <span style={{ color: "#94A3B8", marginRight: "0.35rem" }}>{l.label}:</span>
                    <strong style={{ color: "#F8FAFC" }}>{l.value}</strong>
                  </div>
                ))}
              </div>

              {/* Optional Course Swap Callout */}
              {chapter.upgradeOption && (
                <div
                  style={{
                    padding: "1.1rem 1.35rem",
                    borderRadius: "10px",
                    background:
                      "linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(15, 23, 42, 0.7) 100%)",
                    border: "1px solid rgba(212, 175, 55, 0.4)",
                    marginBottom: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 800,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          padding: "0.22rem 0.55rem",
                          borderRadius: "4px",
                          backgroundColor: "#D4AF37",
                          color: "#0A1020",
                        }}
                      >
                        Optional Course Swap
                      </span>
                      <strong style={{ color: "#F8FAFC", fontSize: "0.98rem" }}>
                        {chapter.upgradeOption.courseName}
                      </strong>
                      <span style={{ fontSize: "0.82rem", color: "#94A3B8" }}>
                        ({chapter.upgradeOption.architect})
                      </span>
                    </div>
                    <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#D4AF37" }}>
                      +${chapter.upgradeOption.priceDiffAUD} AUD{" "}
                      <span style={{ fontSize: "0.78rem", fontWeight: 400, color: "rgba(248, 250, 252, 0.7)" }}>
                        nett/golfer ({chapter.upgradeOption.seasonNote})
                      </span>
                    </div>
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "0.88rem",
                      color: "rgba(248, 250, 252, 0.85)",
                      lineHeight: 1.55,
                    }}
                  >
                    {chapter.upgradeOption.description} You can toggle this upgrade dynamically in the Quote Calculator below.
                  </p>
                </div>
              )}

              {/* Chapter Images Strip (Full Aspect Ratio — Zero Cropping) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    chapter.images.length === 1
                      ? "1fr"
                      : "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "1.25rem",
                  maxWidth: chapter.images.length === 1 ? "680px" : "100%",
                  margin: chapter.images.length === 1 ? "0 auto" : "0",
                }}
              >
                {chapter.images.map((img, iIdx) => (
                  <div
                    key={iIdx}
                    style={{
                      position: "relative",
                      borderRadius: "10px",
                      overflow: "hidden",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      backgroundColor: "#0B1329",
                      boxShadow: "0 10px 25px rgba(0,0,0,0.4)",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        aspectRatio: "16 / 10",
                      }}
                    >
                      <Image
                        src={img.url}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        padding: "0.75rem 1rem",
                        backgroundColor: "rgba(10, 16, 32, 0.95)",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.75rem",
                          color: "rgba(248, 250, 252, 0.9)",
                          fontWeight: 500,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {img.title}
                      </span>
                      <div style={{ display: "flex", gap: "0.4rem" }}>
                        <button
                          onClick={() => handleCopyUrl(img.url)}
                          title="Copy high-res image link"
                          style={{
                            background: copiedUrl === img.url ? "#22C55E" : "rgba(212, 175, 55, 0.15)",
                            border: copiedUrl === img.url ? "1px solid #22C55E" : "1px solid rgba(212, 175, 55, 0.35)",
                            color: copiedUrl === img.url ? "#030712" : "#D4AF37",
                            padding: "0.25rem 0.55rem",
                            borderRadius: "4px",
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            cursor: "pointer",
                          }}
                        >
                          {copiedUrl === img.url ? "✓ Copied" : "📋 Copy Link"}
                        </button>
                        <button
                          onClick={() => setActiveLightboxImg(img)}
                          title="View uncropped full-size image"
                          style={{
                            background: "rgba(255, 255, 255, 0.08)",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                            color: "#F8FAFC",
                            padding: "0.25rem 0.55rem",
                            borderRadius: "4px",
                            fontSize: "0.7rem",
                            cursor: "pointer",
                          }}
                        >
                          🔍 View
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 6. EXTENDED PROPOSAL DESCRIPTIONS (COURSES & SANCTUARY) ─────────── */}
      <section
        id="course-profiles"
        style={{
          padding: "4rem 1.5rem",
          maxWidth: "1150px",
          margin: "0 auto",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
            ⛳ Proposal-Grade Detailed Guides
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
            Extended Venue &amp; Course Guides
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "rgba(248, 250, 252, 0.7)",
              maxWidth: "700px",
              margin: "0.5rem auto 0 auto",
            }}
          >
            The comprehensive architectural descriptions, course character breakdowns, and transfer expectations as prepared for official client proposals.
          </p>
        </div>

        {/* Accommodation Deep Dive */}
        <div
          style={{
            marginBottom: "3.5rem",
            padding: "2.5rem",
            borderRadius: "16px",
            background: "linear-gradient(145deg, rgba(15, 23, 42, 0.85) 0%, rgba(5, 11, 26, 0.95) 100%)",
            border: "1px solid rgba(212, 175, 55, 0.4)",
            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
              gap: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "0.72rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "#D4AF37",
                  fontWeight: 800,
                  display: "block",
                  marginBottom: "0.25rem",
                }}
              >
                Tour Sanctuary Accommodation
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-primary-serif, Georgia, serif)",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 800,
                  color: "#F8FAFC",
                  margin: "0 0 0.35rem 0",
                }}
              >
                {data.accommodationProfile.name}
              </h3>
              <div style={{ color: "#D4AF37", fontSize: "0.85rem", fontWeight: 600 }}>
                {data.accommodationProfile.starRating} • {data.accommodationProfile.category}
              </div>
            </div>

            <div
              style={{
                padding: "0.6rem 1rem",
                borderRadius: "8px",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                textAlign: "right",
              }}
            >
              <div style={{ fontSize: "0.7rem", color: "#94A3B8", textTransform: "uppercase" }}>Airport Transit</div>
              <div style={{ fontSize: "0.9rem", color: "#F8FAFC", fontWeight: 700 }}>
                {data.accommodationProfile.transferTimeFromAirport}
              </div>
            </div>
          </div>

          {/* Accommodation Hero Image */}
          {data.accommodationProfile.heroImage && (
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "360px",
                borderRadius: "12px",
                overflow: "hidden",
                marginBottom: "2rem",
                border: "1px solid rgba(212, 175, 55, 0.35)",
                backgroundColor: "#0B1329",
              }}
            >
              <Image
                src={data.accommodationProfile.heroImage}
                alt={data.accommodationProfile.name}
                fill
                sizes="(max-width: 1200px) 100vw, 1100px"
                style={{ objectFit: "cover" }}
              />
              <button
                type="button"
                onClick={() =>
                  setActiveLightboxImg({
                    url: data.accommodationProfile.heroImage,
                    title: data.accommodationProfile.name,
                    category: "resort",
                    caption: `${data.accommodationProfile.name} — ${data.accommodationProfile.setting}`,
                    alt: data.accommodationProfile.name,
                    resolution: "2400 x 1400",
                    aspectRatio: "16:9",
                  })
                }
                style={{
                  position: "absolute",
                  bottom: "16px",
                  right: "16px",
                  background: "rgba(0, 0, 0, 0.75)",
                  color: "#D4AF37",
                  border: "1px solid rgba(212, 175, 55, 0.4)",
                  borderRadius: "6px",
                  padding: "0.4rem 0.85rem",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  backdropFilter: "blur(6px)",
                }}
              >
                🔍 Expand Full-Res Image
              </button>
            </div>
          )}

          {/* Accommodation Paragraphs */}
          <div style={{ marginBottom: "1.75rem" }}>
            {data.accommodationProfile.paragraphs.map((p, idx) => (
              <p
                key={idx}
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.8,
                  color: "rgba(248, 250, 252, 0.85)",
                  marginBottom: "1rem",
                }}
              >
                {p}
              </p>
            ))}
          </div>

          {/* Key Features */}
          <div
            style={{
              padding: "1.25rem",
              borderRadius: "10px",
              backgroundColor: "rgba(0, 0, 0, 0.35)",
              border: "1px solid rgba(212, 175, 55, 0.25)",
            }}
          >
            <div
              style={{
                fontSize: "0.78rem",
                fontWeight: 800,
                color: "#D4AF37",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              Key Property Inclusions for Your Group:
            </div>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "0.5rem",
                fontSize: "0.85rem",
                color: "rgba(248, 250, 252, 0.8)",
              }}
            >
              {data.accommodationProfile.keyFeatures.map((feat, fIdx) => (
                <li key={fIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.45rem" }}>
                  <span style={{ color: "#D4AF37" }}>✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Golf Course Extended Deep Dives */}
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          {data.courseProfiles.map((course, cIdx) => (
            <div
              key={cIdx}
              style={{
                padding: "2.5rem",
                borderRadius: "16px",
                background: "linear-gradient(145deg, rgba(15, 23, 42, 0.75) 0%, rgba(5, 11, 26, 0.9) 100%)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 15px 40px rgba(0, 0, 0, 0.4)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  flexWrap: "wrap",
                  gap: "1.25rem",
                  marginBottom: "1.25rem",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 800,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#D4AF37",
                      marginBottom: "0.25rem",
                    }}
                  >
                    Championship Round • {course.designer}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-primary-serif, Georgia, serif)",
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      fontWeight: 800,
                      color: "#F8FAFC",
                      margin: "0 0 0.35rem 0",
                    }}
                  >
                    {course.name}
                  </h3>
                  <div style={{ fontSize: "0.85rem", color: "#94A3B8" }}>
                    {course.tagline}
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    padding: "0.6rem 1rem",
                    borderRadius: "8px",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    fontSize: "0.8rem",
                  }}
                >
                  <div>
                    <span style={{ color: "#94A3B8", display: "block" }}>Par / Length</span>
                    <strong style={{ color: "#F8FAFC" }}>{course.par} • {course.yardage}</strong>
                  </div>
                  <div style={{ borderLeft: "1px solid rgba(255,255,255,0.1)", paddingLeft: "1rem" }}>
                    <span style={{ color: "#94A3B8", display: "block" }}>Opened</span>
                    <strong style={{ color: "#D4AF37" }}>{course.established}</strong>
                  </div>
                </div>
              </div>

              {/* Course Hero Image Banner */}
              {course.heroImage && (
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "320px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    marginBottom: "1.75rem",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    backgroundColor: "#0B1329",
                  }}
                >
                  <Image
                    src={course.heroImage}
                    alt={course.name}
                    fill
                    sizes="(max-width: 1200px) 100vw, 1100px"
                    style={{ objectFit: "cover" }}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setActiveLightboxImg({
                        url: course.heroImage,
                        title: course.name,
                        category: "golf",
                        caption: `${course.name} — ${course.designer} (${course.par}, ${course.yardage})`,
                        alt: course.name,
                        resolution: "2400 x 1350",
                        aspectRatio: "16:9",
                      })
                    }
                    style={{
                      position: "absolute",
                      bottom: "14px",
                      right: "14px",
                      background: "rgba(0, 0, 0, 0.75)",
                      color: "#D4AF37",
                      border: "1px solid rgba(212, 175, 55, 0.4)",
                      borderRadius: "6px",
                      padding: "0.4rem 0.85rem",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      backdropFilter: "blur(6px)",
                    }}
                  >
                    🔍 Expand Full-Res Image
                  </button>
                </div>
              )}

              {/* Transfer Expectation Callout */}
              <div
                style={{
                  padding: "0.85rem 1.25rem",
                  borderRadius: "8px",
                  backgroundColor: "rgba(212, 175, 55, 0.08)",
                  borderLeft: "4px solid #D4AF37",
                  marginBottom: "1.5rem",
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                }}
              >
                <div style={{ fontWeight: 800, color: "#D4AF37", marginBottom: "0.2rem" }}>
                  ⏱️ Transfer &amp; Transit Expectation:
                </div>
                <div style={{ color: "rgba(248, 250, 252, 0.85)" }}>
                  {course.transferExpectation}
                </div>
              </div>

              {/* Course Paragraphs */}
              {course.paragraphs.map((cp, cpIdx) => (
                <p
                  key={cpIdx}
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    color: "rgba(248, 250, 252, 0.82)",
                    marginBottom: "1rem",
                  }}
                >
                  {cp}
                </p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ─── 5. CURATED HALF-DAY TOURS & EXPERIENCES ────────────────────────── */}
      {data.optionalExcursions && data.optionalExcursions.length > 0 && (
        <section
          id="excursions"
          style={{
            padding: "4rem 1.5rem",
            maxWidth: "1150px",
            margin: "0 auto",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
              🧭 Optional Half-Day Excursions &amp; Activities
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
              Curated Regional Experiences &amp; Partner Activities
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "rgba(248, 250, 252, 0.7)",
                maxWidth: "720px",
                margin: "0.5rem auto 0 auto",
                lineHeight: 1.6,
              }}
            >
              Proven half-day tours and cultural excursions from our bespoke client proposals—ideal for non-golfing travel companions or golf groups seeking afternoon adventures.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {data.optionalExcursions.map((exc, eIdx) => (
              <div
                key={eIdx}
                style={{
                  borderRadius: "16px",
                  background: "linear-gradient(145deg, rgba(15, 23, 42, 0.75) 0%, rgba(5, 11, 26, 0.9) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 15px 40px rgba(0, 0, 0, 0.4)",
                }}
              >
                {/* Excursion Image */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "230px",
                    backgroundColor: "#0B1329",
                  }}
                >
                  <Image
                    src={exc.image}
                    alt={exc.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "12px",
                      left: "12px",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "4px",
                      backgroundColor: "rgba(0, 0, 0, 0.75)",
                      backdropFilter: "blur(6px)",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "#D4AF37",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    ⏱️ {exc.duration}
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveLightboxImg({
                        url: exc.image,
                        title: exc.title,
                        category: "lifestyle",
                        caption: `${exc.title} — ${exc.tagline}`,
                        alt: exc.title,
                        resolution: "2400 x 1400",
                        aspectRatio: "16:9",
                      })
                    }
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      right: "10px",
                      background: "rgba(0, 0, 0, 0.75)",
                      color: "#F8FAFC",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "4px",
                      padding: "0.25rem 0.55rem",
                      fontSize: "0.68rem",
                      cursor: "pointer",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    🔍 View
                  </button>
                </div>

                {/* Excursion Content */}
                <div
                  style={{
                    padding: "1.75rem",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 800,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#94A3B8",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {exc.type}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-primary-serif, Georgia, serif)",
                        fontSize: "1.35rem",
                        fontWeight: 700,
                        color: "#F8FAFC",
                        margin: "0 0 0.35rem 0",
                      }}
                    >
                      {exc.title}
                    </h3>
                    <div style={{ fontSize: "0.82rem", color: "#D4AF37", fontWeight: 600, marginBottom: "0.85rem" }}>
                      {exc.tagline}
                    </div>
                    <p
                      style={{
                        fontSize: "0.88rem",
                        lineHeight: 1.65,
                        color: "rgba(248, 250, 252, 0.78)",
                        marginBottom: "1.25rem",
                      }}
                    >
                      {exc.overview}
                    </p>

                    {/* Features list */}
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: "0 0 1.25rem 0",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.4rem",
                        fontSize: "0.82rem",
                        color: "rgba(248, 250, 252, 0.7)",
                      }}
                    >
                      {exc.features.map((f, fIdx) => (
                        <li key={fIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.45rem" }}>
                          <span style={{ color: "#D4AF37" }}>•</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exc.pricingNote && (
                    <div
                      style={{
                        padding: "0.6rem 0.85rem",
                        borderRadius: "6px",
                        backgroundColor: "rgba(212, 175, 55, 0.08)",
                        border: "1px solid rgba(212, 175, 55, 0.25)",
                        fontSize: "0.78rem",
                        color: "#D4AF37",
                        fontWeight: 600,
                      }}
                    >
                      💡 {exc.pricingNote}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─── 6. RECOMMENDED DINING & GASTRONOMY ─────────────────────────────── */}
      {data.recommendedDining && data.recommendedDining.length > 0 && (
        <section
          id="dining"
          style={{
            padding: "4rem 1.5rem",
            maxWidth: "1150px",
            margin: "0 auto",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
              🍽️ The 19th Hole Redefined
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
              Recommended Dining &amp; Gastronomy
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "rgba(248, 250, 252, 0.7)",
                maxWidth: "720px",
                margin: "0.5rem auto 0 auto",
                lineHeight: 1.6,
              }}
            >
              Curated evening venues from our client proposals—handpicked for golf groups wanting prime steaks, beachside seafood, and authentic UNESCO heritage atmosphere.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {data.recommendedDining.map((rest, rIdx) => (
              <div
                key={rIdx}
                style={{
                  borderRadius: "16px",
                  background: "linear-gradient(145deg, rgba(15, 23, 42, 0.75) 0%, rgba(5, 11, 26, 0.9) 100%)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: "0 15px 40px rgba(0, 0, 0, 0.4)",
                }}
              >
                {/* Dining Image */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "210px",
                    backgroundColor: "#0B1329",
                  }}
                >
                  <Image
                    src={rest.image}
                    alt={rest.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "10px",
                      padding: "0.25rem 0.65rem",
                      borderRadius: "4px",
                      backgroundColor: "rgba(0, 0, 0, 0.75)",
                      backdropFilter: "blur(6px)",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      color: "#D4AF37",
                    }}
                  >
                    📍 {rest.location}
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveLightboxImg({
                        url: rest.image,
                        title: rest.name,
                        category: "lifestyle",
                        caption: `${rest.name} — ${rest.cuisine}`,
                        alt: rest.name,
                        resolution: "2400 x 1400",
                        aspectRatio: "16:9",
                      })
                    }
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      right: "10px",
                      background: "rgba(0, 0, 0, 0.75)",
                      color: "#F8FAFC",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      borderRadius: "4px",
                      padding: "0.25rem 0.55rem",
                      fontSize: "0.68rem",
                      cursor: "pointer",
                      backdropFilter: "blur(4px)",
                    }}
                  >
                    🔍 View
                  </button>
                </div>

                {/* Dining Content */}
                <div
                  style={{
                    padding: "1.5rem",
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
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "#F8FAFC",
                        margin: "0 0 0.25rem 0",
                      }}
                    >
                      {rest.name}
                    </h3>
                    <div
                      style={{
                        fontSize: "0.78rem",
                        color: "#D4AF37",
                        fontWeight: 600,
                        marginBottom: "0.25rem",
                      }}
                    >
                      {rest.cuisine}
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "#94A3B8",
                        marginBottom: "0.85rem",
                      }}
                    >
                      {rest.vibe}
                    </div>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        lineHeight: 1.6,
                        color: "rgba(248, 250, 252, 0.78)",
                        marginBottom: "1rem",
                      }}
                    >
                      {rest.overview}
                    </p>

                    {/* Highlights */}
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.35rem",
                        fontSize: "0.78rem",
                        color: "rgba(248, 250, 252, 0.7)",
                      }}
                    >
                      {rest.highlights.map((h, hIdx) => (
                        <li key={hIdx} style={{ display: "flex", alignItems: "flex-start", gap: "0.4rem" }}>
                          <span style={{ color: "#D4AF37" }}>✓</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─── 7. DYNAMIC B2B MARGIN & QUOTE CALCULATOR (Agency View Only) ───────── */}
      {viewMode === "wholesale" && (
        <section
          id="calculator"
          style={{
            padding: "4rem 1.5rem",
            maxWidth: "1150px",
            margin: "0 auto",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div
            style={{
              padding: "2.5rem",
              borderRadius: "16px",
              background: "linear-gradient(145deg, rgba(15, 23, 42, 0.85) 0%, rgba(5, 11, 26, 0.95) 100%)",
              border: "1px solid rgba(212, 175, 55, 0.4)",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.7)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: "1rem",
                marginBottom: "2rem",
                borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                paddingBottom: "1.5rem",
              }}
            >
              <div>
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
                  📊 Agency Commercial Tools
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-primary-serif, Georgia, serif)",
                    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                    fontWeight: 800,
                    color: "#F8FAFC",
                    margin: 0,
                  }}
                >
                  B2B Wholesale Margin &amp; Client Quote Calculator
                </h2>
                <p
                  style={{
                    fontSize: "0.9rem",
                    color: "rgba(248, 250, 252, 0.7)",
                    margin: "0.4rem 0 0 0",
                  }}
                >
                  Adjust your party size and desired agency markup to instantly calculate your wholesale cost, retail sell price, and gross profit.
                </p>
              </div>
            </div>

            {/* Optional Course Swap Toggle */}
            {data.upgradeOption && (
              <div
                style={{
                  padding: "1.25rem 1.5rem",
                  marginBottom: "2rem",
                  borderRadius: "12px",
                  background: includeUpgrade
                    ? "linear-gradient(135deg, rgba(212, 175, 55, 0.18) 0%, rgba(15, 23, 42, 0.85) 100%)"
                    : "linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(15, 23, 42, 0.4) 100%)",
                  border: includeUpgrade
                    ? "1px solid rgba(212, 175, 55, 0.5)"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "1.25rem",
                  boxShadow: includeUpgrade
                    ? "0 10px 30px rgba(212, 175, 55, 0.15)"
                    : "none",
                  transition: "all 0.25s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "1rem",
                    flex: 1,
                    minWidth: "260px",
                  }}
                >
                  <input
                    type="checkbox"
                    id="quote-upgrade-toggle"
                    checked={includeUpgrade}
                    onChange={(e) => setIncludeUpgrade(e.target.checked)}
                    style={{
                      width: "20px",
                      height: "20px",
                      accentColor: "#D4AF37",
                      cursor: "pointer",
                      marginTop: "3px",
                    }}
                  />
                  <label htmlFor="quote-upgrade-toggle" style={{ cursor: "pointer" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 800,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          padding: "0.2rem 0.5rem",
                          borderRadius: "4px",
                          backgroundColor: includeUpgrade ? "#D4AF37" : "rgba(255, 255, 255, 0.1)",
                          color: includeUpgrade ? "#0A1020" : "#F8FAFC",
                        }}
                      >
                        {includeUpgrade ? "Upgrade Active" : "Optional Upgrade"}
                      </span>
                      <strong style={{ color: "#F8FAFC", fontSize: "1rem" }}>
                        Include {data.upgradeOption.title} (+${data.upgradeOption.priceDiffAUD} AUD nett/pax)
                      </strong>
                    </div>
                    <p
                      style={{
                        margin: "0.35rem 0 0 0",
                        fontSize: "0.84rem",
                        color: "rgba(248, 250, 252, 0.75)",
                        lineHeight: 1.45,
                      }}
                    >
                      {data.upgradeOption.description} ({data.upgradeOption.seasonNote}). Applies to all players in calculation.
                    </p>
                  </label>
                </div>
                <button
                  type="button"
                  onClick={() => setIncludeUpgrade(!includeUpgrade)}
                  style={{
                    padding: "0.5rem 1.1rem",
                    borderRadius: "6px",
                    backgroundColor: includeUpgrade ? "#D4AF37" : "rgba(255, 255, 255, 0.08)",
                    color: includeUpgrade ? "#0A1020" : "#F8FAFC",
                    border: includeUpgrade ? "none" : "1px solid rgba(255, 255, 255, 0.2)",
                    fontWeight: 700,
                    fontSize: "0.82rem",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  {includeUpgrade ? "✓ Hoiana Shores Included" : "+ Add Hoiana Shores Swap"}
                </button>
              </div>
            )}

            {/* Inputs Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "2rem",
                marginBottom: "2.5rem",
              }}
            >
              {/* Twin Share Players */}
              <div
                style={{
                  padding: "1.5rem",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <label
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#F8FAFC",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  Twin-Share Golfers:{" "}
                  <strong style={{ color: "#D4AF37", fontSize: "1.1rem" }}>{twinGolfers} Players</strong>
                </label>
                <input
                  type="range"
                  min="0"
                  max="24"
                  step="2"
                  value={twinGolfers}
                  onChange={(e) => setTwinGolfers(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "#D4AF37", marginBottom: "0.75rem" }}
                />
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {[2, 4, 8, 12, 16].map((num) => (
                    <button
                      key={num}
                      onClick={() => setTwinGolfers(num)}
                      style={{
                        background: twinGolfers === num ? "rgba(212, 175, 55, 0.3)" : "rgba(255, 255, 255, 0.05)",
                        border: twinGolfers === num ? "1px solid #D4AF37" : "1px solid rgba(255, 255, 255, 0.1)",
                        color: twinGolfers === num ? "#D4AF37" : "#CBD5E1",
                        padding: "0.25rem 0.65rem",
                        borderRadius: "4px",
                        fontSize: "0.75rem",
                        cursor: "pointer",
                      }}
                    >
                      {num} Pax
                    </button>
                  ))}
                </div>
              </div>

              {/* Single Room Golfers */}
              <div
                style={{
                  padding: "1.5rem",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <label
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "#F8FAFC",
                    display: "block",
                    marginBottom: "0.5rem",
                  }}
                >
                  Single Room Golfers:{" "}
                  <strong style={{ color: "#F8FAFC", fontSize: "1.1rem" }}>{singleGolfers} Players</strong>
                </label>
                <input
                  type="range"
                  min="0"
                  max="12"
                  step="1"
                  value={singleGolfers}
                  onChange={(e) => setSingleGolfers(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "#D4AF37", marginBottom: "0.75rem" }}
                />
                <div style={{ fontSize: "0.75rem", color: "rgba(248, 250, 252, 0.6)" }}>
                  Single Supp: +${data.singleSupplementAUD.toLocaleString()} AUD
                </div>
              </div>

              {/* Agency Margin Selector */}
              <div
                style={{
                  padding: "1.5rem",
                  borderRadius: "10px",
                  backgroundColor: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(212, 175, 55, 0.25)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  <label style={{ fontSize: "0.85rem", fontWeight: 700, color: "#F8FAFC" }}>
                    Agency Target Margin:
                  </label>
                  <div style={{ display: "flex", gap: "0.25rem" }}>
                    <button
                      onClick={() => setMarginType("percent")}
                      style={{
                        background: marginType === "percent" ? "#D4AF37" : "transparent",
                        color: marginType === "percent" ? "#030712" : "#94A3B8",
                        border: "1px solid rgba(212, 175, 55, 0.3)",
                        padding: "0.2rem 0.5rem",
                        borderRadius: "3px",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      %
                    </button>
                    <button
                      onClick={() => setMarginType("fixed")}
                      style={{
                        background: marginType === "fixed" ? "#D4AF37" : "transparent",
                        color: marginType === "fixed" ? "#030712" : "#94A3B8",
                        border: "1px solid rgba(212, 175, 55, 0.3)",
                        padding: "0.2rem 0.5rem",
                        borderRadius: "3px",
                        fontSize: "0.7rem",
                        fontWeight: 700,
                        cursor: "pointer",
                      }}
                    >
                      $ AUD
                    </button>
                  </div>
                </div>

                {marginType === "percent" ? (
                  <>
                    <input
                      type="range"
                      min="5"
                      max="35"
                      step="1"
                      value={marginPercent}
                      onChange={(e) => setMarginPercent(Number(e.target.value))}
                      style={{ width: "100%", accentColor: "#D4AF37", marginBottom: "0.75rem" }}
                    />
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                      {[10, 15, 20, 25].map((pct) => (
                        <button
                          key={pct}
                          onClick={() => setMarginPercent(pct)}
                          style={{
                            background: marginPercent === pct ? "rgba(212, 175, 55, 0.3)" : "rgba(255, 255, 255, 0.05)",
                            border: marginPercent === pct ? "1px solid #D4AF37" : "1px solid rgba(255, 255, 255, 0.1)",
                            color: marginPercent === pct ? "#D4AF37" : "#CBD5E1",
                            padding: "0.25rem 0.65rem",
                            borderRadius: "4px",
                            fontSize: "0.75rem",
                            cursor: "pointer",
                          }}
                        >
                          {pct}% Margin
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <>
                    <input
                      type="number"
                      min="0"
                      step="50"
                      value={customMarginDollar}
                      onChange={(e) => setCustomMarginDollar(Number(e.target.value))}
                      placeholder="e.g. 500"
                      style={{
                        width: "100%",
                        backgroundColor: "rgba(0,0,0,0.4)",
                        border: "1px solid rgba(212, 175, 55, 0.4)",
                        borderRadius: "6px",
                        padding: "0.5rem",
                        color: "#F8FAFC",
                        fontSize: "0.95rem",
                        marginBottom: "0.5rem",
                      }}
                    />
                    <div style={{ fontSize: "0.75rem", color: "rgba(248, 250, 252, 0.6)" }}>
                      Fixed margin added per player
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Results Cards Strip */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {/* Card 1: Wholesale Nett Total */}
              <div
                style={{
                  padding: "1.25rem",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#94A3B8" }}>
                  Agency Wholesale Nett Cost
                </div>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#F8FAFC", margin: "0.25rem 0" }}>
                  ${pricing.totalNettCost.toLocaleString()}{" "}
                  <span style={{ fontSize: "0.85rem", fontWeight: 400 }}>AUD</span>
                </div>
                <div style={{ fontSize: "0.75rem", color: "rgba(248, 250, 252, 0.6)" }}>
                  Payable to Asia Golf Specialists
                </div>
              </div>

              {/* Card 2: Client Sell Price (Twin) */}
              <div
                style={{
                  padding: "1.25rem",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#94A3B8" }}>
                  Client Retail Quote (Twin Share)
                </div>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#D4AF37", margin: "0.25rem 0" }}>
                  ${pricing.retailTwin.toLocaleString()}{" "}
                  <span style={{ fontSize: "0.85rem", fontWeight: 400 }}>AUD / pax</span>
                </div>
                <div style={{ fontSize: "0.75rem", color: "rgba(248, 250, 252, 0.6)" }}>
                  Includes +${pricing.markupPerPerson.toLocaleString()} AUD agency margin
                  {includeUpgrade && data.upgradeOption && (
                    <span style={{ color: "#D4AF37", display: "block", marginTop: "0.2rem" }}>
                      + ${data.upgradeOption.priceDiffAUD} AUD {data.upgradeOption.courseName} swap
                    </span>
                  )}
                </div>
              </div>

              {/* Card 3: Total Client Invoice */}
              <div
                style={{
                  padding: "1.25rem",
                  borderRadius: "8px",
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#94A3B8" }}>
                  Total Client Invoice
                </div>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#F8FAFC", margin: "0.25rem 0" }}>
                  ${pricing.totalClientQuote.toLocaleString()}{" "}
                  <span style={{ fontSize: "0.85rem", fontWeight: 400 }}>AUD</span>
                </div>
                <div style={{ fontSize: "0.75rem", color: "rgba(248, 250, 252, 0.6)" }}>
                  For {pricing.totalGolfers} total golfers
                </div>
              </div>

              {/* Card 4: Agency Gross Profit */}
              <div
                style={{
                  padding: "1.25rem",
                  borderRadius: "8px",
                  background: "linear-gradient(145deg, rgba(34, 197, 94, 0.15) 0%, rgba(20, 83, 45, 0.25) 100%)",
                  border: "1px solid rgba(34, 197, 94, 0.4)",
                }}
              >
                <div style={{ fontSize: "0.72rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#86EFAC" }}>
                  Agency Gross Commission
                </div>
                <div style={{ fontSize: "1.75rem", fontWeight: 800, color: "#4ADE80", margin: "0.25rem 0" }}>
                  +${pricing.totalAgencyProfit.toLocaleString()}{" "}
                  <span style={{ fontSize: "0.85rem", fontWeight: 400 }}>AUD</span>
                </div>
                <div style={{ fontSize: "0.75rem", color: "#86EFAC" }}>
                  Retained by your agency
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── 8. HIGH-RESOLUTION MARKETING ASSET HUB (Core Requirement) ────────── */}
      <section
        id="media-kit"
        style={{
          padding: "4rem 1.5rem",
          maxWidth: "1200px",
          margin: "0 auto",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "2.5rem",
          }}
        >
          <div>
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
              📸 High-Resolution Media Kit &amp; Image Bank
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
              Approved Commercial Assets for Your Marketing Collateral
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "rgba(248, 250, 252, 0.75)",
                maxWidth: "750px",
                margin: "0.5rem 0 0 0",
              }}
            >
              Every image below is high-resolution, uncompressed WebP, and fully cleared for registered travel agents and tour operators to develop client proposals, email campaigns, brochures, and web listings.
            </p>
          </div>

          <button
            onClick={handleCopyAllAssets}
            style={{
              background: allAssetsCopied ? "#22C55E" : "rgba(212, 175, 55, 0.15)",
              border: "1px solid rgba(212, 175, 55, 0.4)",
              color: allAssetsCopied ? "#030712" : "#D4AF37",
              borderRadius: "6px",
              padding: "0.7rem 1.25rem",
              fontSize: "0.82rem",
              fontWeight: 700,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "all 0.2s ease",
            }}
          >
            <span>{allAssetsCopied ? "✓" : "📦"}</span>
            <span>{allAssetsCopied ? "All Asset Links Copied!" : "Batch Copy All Asset Links"}</span>
          </button>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          {[
            { id: "all", label: "All Assets" },
            { id: "resort", label: "Resort & Suites" },
            { id: "golf", label: "Championship Courses" },
            { id: "lifestyle", label: "Dining & Culture" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              style={{
                background:
                  selectedCategory === cat.id
                    ? "#D4AF37"
                    : "rgba(255, 255, 255, 0.05)",
                color: selectedCategory === cat.id ? "#030712" : "#CBD5E1",
                border:
                  selectedCategory === cat.id
                    ? "1px solid #D4AF37"
                    : "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "30px",
                padding: "0.45rem 1.15rem",
                fontSize: "0.8rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {cat.label} ({cat.id === "all" ? data.mediaAssets.length : data.mediaAssets.filter((a) => a.category === cat.id).length})
            </button>
          ))}
        </div>

        {/* Media Asset Cards Grid (Uncropped & Fully Viewable) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.75rem",
          }}
        >
          {filteredAssets.map((asset, index) => (
            <div
              key={index}
              style={{
                borderRadius: "12px",
                backgroundColor: "rgba(15, 23, 42, 0.7)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.2s ease, border-color 0.2s ease",
              }}
            >
              {/* Image Preview with Hover Action */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  aspectRatio: "16 / 10",
                  backgroundColor: "#0B1329",
                }}
              >
                <Image
                  src={asset.url}
                  alt={asset.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "4px",
                    backgroundColor: "rgba(0, 0, 0, 0.75)",
                    backdropFilter: "blur(4px)",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    color: "#D4AF37",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}
                >
                  {asset.resolution}
                </div>
              </div>

              {/* Content Block */}
              <div
                style={{
                  padding: "1.25rem",
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "#F8FAFC",
                      margin: "0 0 0.4rem 0",
                    }}
                  >
                    {asset.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8rem",
                      color: "rgba(248, 250, 252, 0.7)",
                      lineHeight: 1.5,
                      margin: "0 0 1.25rem 0",
                    }}
                  >
                    {asset.caption}
                  </p>
                </div>

                {/* Actions */}
                <div
                  style={{
                    display: "flex",
                    gap: "0.5rem",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  }}
                >
                  <button
                    onClick={() => handleCopyUrl(asset.url)}
                    style={{
                      flex: 1,
                      background: copiedUrl === asset.url ? "#22C55E" : "rgba(212, 175, 55, 0.12)",
                      border: copiedUrl === asset.url ? "1px solid #22C55E" : "1px solid rgba(212, 175, 55, 0.35)",
                      color: copiedUrl === asset.url ? "#030712" : "#D4AF37",
                      padding: "0.5rem 0.75rem",
                      borderRadius: "6px",
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.35rem",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <span>{copiedUrl === asset.url ? "✓" : "📋"}</span>
                    <span>{copiedUrl === asset.url ? "Copied!" : "Copy High-Res URL"}</span>
                  </button>

                  <a
                    href={asset.url}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      background: "rgba(255, 255, 255, 0.08)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      color: "#F8FAFC",
                      padding: "0.5rem 0.85rem",
                      borderRadius: "6px",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.35rem",
                    }}
                  >
                    <span>📥</span> Open Full Size
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 9. AGENT SALES TOOLKIT (PROPOSALS, NO 30-SEC PITCH) ─────────────── */}
      {viewMode === "wholesale" && (
        <section
          id="sales-toolkit"
          style={{
            padding: "4rem 1.5rem",
            maxWidth: "1150px",
            margin: "0 auto",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div style={{ marginBottom: "2.5rem" }}>
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
              ✍️ Proposal-Ready Marketing Copy
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
              Client-Facing Proposal Snippets &amp; Selling Points
            </h2>
            <p
              style={{
                fontSize: "0.95rem",
                color: "rgba(248, 250, 252, 0.75)",
                maxWidth: "750px",
                margin: "0.5rem 0 0 0",
              }}
            >
              Copy and paste these professionally crafted client blurbs directly into your agency software, email proposals, or customized client PDFs.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
            {data.salesToolkit.map((snippet, idx) => (
              <div
                key={idx}
                style={{
                  padding: "1.75rem",
                  borderRadius: "12px",
                  background: "rgba(15, 23, 42, 0.65)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "1rem",
                    marginBottom: "1rem",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "1.15rem",
                        fontWeight: 700,
                        color: "#D4AF37",
                        margin: "0 0 0.25rem 0",
                      }}
                    >
                      {snippet.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        color: "rgba(248, 250, 252, 0.6)",
                        margin: 0,
                      }}
                    >
                      {snippet.description}
                    </p>
                  </div>

                  <button
                    onClick={() => handleCopySnippet(snippet.content, idx)}
                    style={{
                      background: copiedSnippetIndex === idx ? "#22C55E" : "rgba(212, 175, 55, 0.15)",
                      border: copiedSnippetIndex === idx ? "1px solid #22C55E" : "1px solid rgba(212, 175, 55, 0.4)",
                      color: copiedSnippetIndex === idx ? "#030712" : "#D4AF37",
                      borderRadius: "6px",
                      padding: "0.45rem 1rem",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                      transition: "all 0.2s ease",
                    }}
                  >
                    <span>{copiedSnippetIndex === idx ? "✓" : "📋"}</span>
                    <span>{copiedSnippetIndex === idx ? "Copied to Clipboard!" : "Copy Snippet"}</span>
                  </button>
                </div>

                <div
                  style={{
                    padding: "1.25rem",
                    borderRadius: "8px",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    border: "1px solid rgba(255, 255, 255, 0.05)",
                    fontFamily: "monospace",
                    fontSize: "0.85rem",
                    lineHeight: 1.7,
                    color: "rgba(248, 250, 252, 0.85)",
                    whiteSpace: "pre-wrap",
                    maxHeight: "260px",
                    overflowY: "auto",
                  }}
                >
                  {snippet.content}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─── 10. B2B FAST BOOKING / HOLD REQUEST FORM ────────────────────────── */}
      <section
        id="book-hold"
        style={{
          padding: "4.5rem 1.5rem 6rem",
          maxWidth: "850px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            padding: "2.75rem",
            borderRadius: "16px",
            background: "linear-gradient(145deg, rgba(15, 23, 42, 0.95) 0%, rgba(5, 11, 26, 0.98) 100%)",
            border: "1px solid rgba(212, 175, 55, 0.45)",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.7)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 800,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#D4AF37",
                display: "block",
                marginBottom: "0.4rem",
              }}
            >
              Priority B2B Desk
            </span>
            <h2
              style={{
                fontFamily: "var(--font-primary-serif, Georgia, serif)",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                fontWeight: 800,
                color: "#F8FAFC",
                margin: "0 0 0.5rem 0",
              }}
            >
              Hold Wholesale Group Dates
            </h2>
            <p style={{ fontSize: "0.9rem", color: "rgba(248, 250, 252, 0.7)", margin: 0 }}>
              Submit your preferred dates to hold prime morning tee times and rooms for 7 days with zero obligation.
            </p>
          </div>

          {formSubmitted ? (
            <div
              style={{
                padding: "2.5rem",
                borderRadius: "12px",
                backgroundColor: "rgba(34, 197, 94, 0.15)",
                border: "1px solid #22C55E",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>✅</div>
              <h3 style={{ fontSize: "1.35rem", color: "#4ADE80", marginBottom: "0.5rem" }}>
                Wholesale Hold Request Received
              </h3>
              <p style={{ fontSize: "0.9rem", color: "#F8FAFC", maxWidth: "540px", margin: "0 auto 1.5rem auto", lineHeight: 1.6 }}>
                Thank you, <strong>{formData.agentName || "Partner"}</strong>. Our dedicated B2B Trade Director has reserved a provisional block for <strong>{formData.agencyName || "your agency"}</strong>. We will email your provisional confirmation voucher and invoice within 4 business hours.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "#D4AF37",
                  padding: "0.5rem 1.25rem",
                  borderRadius: "4px",
                  fontSize: "0.8rem",
                  cursor: "pointer",
                }}
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setFormSubmitted(true);
              }}
              style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem", color: "#CBD5E1" }}>
                    Agency / Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Flight Centre / Luxury Escapes"
                    value={formData.agencyName}
                    onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "6px",
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      color: "#F8FAFC",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem", color: "#CBD5E1" }}>
                    Travel Advisor Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={formData.agentName}
                    onChange={(e) => setFormData({ ...formData, agentName: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "6px",
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      color: "#F8FAFC",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem", color: "#CBD5E1" }}>
                    Advisor Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="advisor@agency.com.au"
                    value={formData.agentEmail}
                    onChange={(e) => setFormData({ ...formData, agentEmail: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "6px",
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      color: "#F8FAFC",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem", color: "#CBD5E1" }}>
                    Direct Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+61 4..."
                    value={formData.agentPhone}
                    onChange={(e) => setFormData({ ...formData, agentPhone: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "6px",
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      color: "#F8FAFC",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1.4fr 0.6fr", gap: "1.25rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem", color: "#CBD5E1" }}>
                    Preferred Travel Window / Month *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. October 2026 or Specific Dates"
                    value={formData.preferredDates}
                    onChange={(e) => setFormData({ ...formData, preferredDates: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "6px",
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      color: "#F8FAFC",
                      fontSize: "0.9rem",
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem", color: "#CBD5E1" }}>
                    Total Golfers
                  </label>
                  <select
                    value={formData.estimatedPax}
                    onChange={(e) => setFormData({ ...formData, estimatedPax: e.target.value })}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      borderRadius: "6px",
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                      border: "1px solid rgba(255, 255, 255, 0.15)",
                      color: "#F8FAFC",
                      fontSize: "0.9rem",
                    }}
                  >
                    <option value="2">2 Golfers</option>
                    <option value="4">4 Golfers (1 Four-Ball)</option>
                    <option value="8">8 Golfers (2 Four-Balls)</option>
                    <option value="12">12 Golfers (3 Four-Balls)</option>
                    <option value="16">16+ Golfers (Corporate)</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.4rem", color: "#CBD5E1" }}>
                  Special Requests / Single Rooms / Non-Golfing Partners
                </label>
                <textarea
                  rows={3}
                  placeholder="Tell us about room configurations (e.g., 2 singles, 2 twins), custom course preferences, or extra nights..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    borderRadius: "6px",
                    backgroundColor: "rgba(0, 0, 0, 0.4)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    color: "#F8FAFC",
                    fontSize: "0.9rem",
                    resize: "vertical",
                  }}
                />
              </div>

              <button
                type="submit"
                style={{
                  background: "linear-gradient(135deg, #D4AF37 0%, #AA820A 100%)",
                  color: "#030712",
                  padding: "1rem",
                  borderRadius: "6px",
                  border: "none",
                  fontWeight: 800,
                  fontSize: "0.95rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  boxShadow: "0 10px 25px rgba(212, 175, 55, 0.35)",
                  marginTop: "0.5rem",
                  transition: "transform 0.15s ease",
                }}
              >
                Request 7-Day Wholesale Hold Voucher
              </button>
            </form>
          )}

          {/* Direct WhatsApp Concierge Strip */}
          <div
            style={{
              marginTop: "2rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "1rem",
              fontSize: "0.82rem",
              color: "rgba(248, 250, 252, 0.7)",
            }}
          >
            <div>
              <span>Need instant availability or custom dates?</span>
              <div style={{ color: "#D4AF37", fontWeight: 700 }}>
                Marcus Giles • General Manager Central Vietnam
              </div>
            </div>

            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
              <button
                type="button"
                onClick={() => {
                  const msg = encodeURIComponent(
                    `Hi Marcus, I am an advisor inquiring about wholesale group dates for ${data.titlePrefix} ${data.titleHighlight}.`
                  );
                  window.open(`https://wa.me/84935601099?text=${msg}`, "_blank", "noopener,noreferrer");
                }}
                style={{
                  background: "#22C55E",
                  color: "#030712",
                  padding: "0.45rem 0.95rem",
                  borderRadius: "4px",
                  border: "none",
                  fontWeight: 700,
                  fontSize: "0.82rem",
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                }}
              >
                <span>💬</span> Trade WhatsApp
              </button>
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.08)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "4px",
                  padding: "0.45rem 0.85rem",
                  fontSize: "0.82rem",
                }}
                dangerouslySetInnerHTML={{
                  __html: `<!--email_off--><a href="mailto:marcus.giles@asiagolfspecialists.com" style="color: #F8FAFC; text-decoration: none; font-weight: 600;">✉️ marcus.giles@asiagolfspecialists.com</a><!--/email_off-->`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── 11. B2B CONFIDENTIAL FOOTER NOTE ─────────────────────────────── */}
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
          <p
            style={{ margin: "0 0 1rem 0", lineHeight: 1.6 }}
            dangerouslySetInnerHTML={{
              __html: `This document and its nett pricing are proprietary to Asia Golf Specialists. For direct inquiries, contact Marcus Giles at <!--email_off--><a href="mailto:marcus.giles@asiagolfspecialists.com" style="color: #D4AF37; text-decoration: underline;">marcus.giles@asiagolfspecialists.com</a><!--/email_off-->.`,
            }}
          />
          <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <Link href="/trade-portal/" style={{ color: "#CBD5E1", textDecoration: "none" }}>
              ← Return to Wholesale Master Tariff
            </Link>
            <Link href="/trade-portal/tours/the-central-coast-classic-7k9p4m/" style={{ color: "#CBD5E1", textDecoration: "none" }}>
              Central Coast Classic (Namia)
            </Link>
            <Link href="/trade-portal/tours/hoi-an-championship-week-8x2b5q/" style={{ color: "#CBD5E1", textDecoration: "none" }}>
              Hoi An Championship Week (Palm Gardens)
            </Link>
          </div>
        </div>
      </div>

      {/* ─── 12. FULL UN-CROPPED LIGHTBOX MODAL ───────────────────────────────── */}
      {activeLightboxImg && (
        <div
          onClick={() => setActiveLightboxImg(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.92)",
            zIndex: 9999,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "2rem",
            cursor: "zoom-out",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "92vw",
              maxHeight: "85vh",
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "default",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "calc(100% - 60px)",
              }}
            >
              <Image
                src={activeLightboxImg.url}
                alt={activeLightboxImg.alt}
                fill
                sizes="100vw"
                style={{
                  objectFit: "contain",
                }}
              />
            </div>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                maxWidth: "800px",
                color: "#F8FAFC",
              }}
            >
              <div>
                <strong style={{ color: "#D4AF37", fontSize: "0.95rem" }}>
                  {activeLightboxImg.title}
                </strong>
                <span style={{ fontSize: "0.8rem", color: "#94A3B8", marginLeft: "0.5rem" }}>
                  ({activeLightboxImg.resolution})
                </span>
              </div>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <button
                  onClick={() => handleCopyUrl(activeLightboxImg.url)}
                  style={{
                    background: "#D4AF37",
                    color: "#030712",
                    border: "none",
                    padding: "0.35rem 0.85rem",
                    borderRadius: "4px",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  📋 Copy High-Res URL
                </button>
                <button
                  onClick={() => setActiveLightboxImg(null)}
                  style={{
                    background: "rgba(255, 255, 255, 0.15)",
                    color: "#F8FAFC",
                    border: "none",
                    padding: "0.35rem 0.85rem",
                    borderRadius: "4px",
                    fontSize: "0.78rem",
                    cursor: "pointer",
                  }}
                >
                  ✕ Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
