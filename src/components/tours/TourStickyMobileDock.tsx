"use client";

interface TourStickyMobileDockProps {
  guidePriceUSD: string;
  guidePriceAUD: string;
  tourTitle: string;
}

export default function TourStickyMobileDock({
  guidePriceUSD,
  guidePriceAUD,
  tourTitle,
}: TourStickyMobileDockProps) {
  return (
    <div className="tour-sticky-dock">
      <div>
        <span
          style={{
            fontSize: "0.65rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: "rgba(248, 250, 252, 0.5)",
            display: "block",
          }}
        >
          From
        </span>
        <span style={{ fontSize: "0.95rem", fontWeight: 700, color: "#D4AF37" }}>
          {guidePriceUSD} USD
        </span>
        <span
          style={{
            fontSize: "0.7rem",
            color: "rgba(248, 250, 252, 0.6)",
            marginLeft: "0.25rem",
          }}
        >
          ({guidePriceAUD})
        </span>
        <span
          style={{
            fontSize: "0.62rem",
            color: "rgba(248, 250, 252, 0.45)",
            display: "block",
          }}
        >
          Golf • Stay • Transfers
        </span>
      </div>

      <div style={{ display: "flex", gap: "0.5rem" }}>
        <button
          type="button"
          onClick={() =>
            window.open(
              `https://wa.me/84935601099?text=${encodeURIComponent(
                `Hi AGS Concierge, I'm viewing the ${tourTitle} itinerary and would like to enquire.`
              )}`,
              "_blank",
              "noopener,noreferrer"
            )
          }
          aria-label="WhatsApp Concierge"
          style={{
            padding: "0.5rem 0.85rem",
            borderRadius: "4px",
            background: "#25D366",
            color: "#FFFFFF",
            fontSize: "0.75rem",
            fontWeight: 700,
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
            border: "none",
            cursor: "pointer",
          }}
        >
          <span>💬</span> WhatsApp
        </button>

        <a
          href="/quote/"
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "4px",
            background: "linear-gradient(135deg, #D4AF37 0%, #AA820A 100%)",
            color: "#020617",
            fontSize: "0.75rem",
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            textDecoration: "none",
          }}
        >
          Customize Tour
        </a>
      </div>
    </div>
  );
}
