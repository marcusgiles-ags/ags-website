"use client";

import React from "react";

interface ConciergeWhatsAppButtonProps {
  itemType: "tour" | "package" | "article";
  itemTitle: string;
  destination: string;
  buttonLabel?: string;
}

export default function ConciergeWhatsAppButton({
  itemType,
  itemTitle,
  destination,
  buttonLabel,
}: ConciergeWhatsAppButtonProps) {
  const handleWhatsApp = () => {
    const label =
      itemType === "tour"
        ? "Signature Tour"
        : itemType === "package"
        ? "golf package"
        : "golf trip planning guide";
    const msg = encodeURIComponent(
      itemType === "article"
        ? `Hi Marcus & AGS team, I just read "${itemTitle}" (${destination}) and would like help planning a custom golf trip. Could we chat about options and pricing?`
        : `Hi Marcus & AGS team, I'm interested in the "${itemTitle}" ${label} (${destination}). Could you share availability, customization options, and pricing for our group?`
    );
    if (typeof window !== "undefined") {
      const w = window as unknown as {
        dataLayer?: Array<Record<string, unknown>>;
        gtag?: (...args: unknown[]) => void;
      };
      if (w.dataLayer) {
        w.dataLayer.push({
          event: "whatsapp_concierge_click",
          venue_type: itemType,
          venue_name: itemTitle,
          destination,
        });
      }
      if (typeof w.gtag === "function") {
        w.gtag("event", "whatsapp_concierge_click", {
          venue_type: itemType,
          venue_name: itemTitle,
          destination,
        });
      }
      window.open(`https://wa.me/84935601099?text=${msg}`, "_blank", "noopener,noreferrer");
    }
  };

  const defaultButtonText =
    itemType === "tour"
      ? "Chat on WhatsApp About This Tour"
      : itemType === "package"
      ? "Chat on WhatsApp About This Package"
      : "Ask Marcus on WhatsApp (24hr Concierge)";

  return (
    <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
      <button
        type="button"
        onClick={handleWhatsApp}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.6rem",
          padding: "0.85rem 1.5rem",
          backgroundColor: "#25D366",
          color: "#020617",
          border: "none",
          borderRadius: "6px",
          fontWeight: 700,
          fontSize: "0.9rem",
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          cursor: "pointer",
        }}
      >
        <span>{buttonLabel || defaultButtonText}</span>
      </button>
    </div>
  );
}
