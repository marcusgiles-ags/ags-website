"use client";

import React from "react";

interface ConciergeWhatsAppButtonProps {
  itemType: "tour" | "package";
  itemTitle: string;
  destination: string;
}

export default function ConciergeWhatsAppButton({
  itemType,
  itemTitle,
  destination,
}: ConciergeWhatsAppButtonProps) {
  const handleWhatsApp = () => {
    const label = itemType === "tour" ? "Signature Tour" : "golf package";
    const msg = encodeURIComponent(
      `Hi Marcus & AGS team, I'm interested in the "${itemTitle}" ${label} (${destination}). Could you share availability, customization options, and pricing for our group?`
    );
    if (typeof window !== "undefined") {
      const w = window as unknown as { dataLayer?: Array<Record<string, unknown>> };
      if (w.dataLayer) {
        w.dataLayer.push({
          event: itemType === "tour" ? "whatsapp_tour_click" : "whatsapp_package_click",
          item_title: itemTitle,
          destination,
        });
      }
      window.open(`https://wa.me/84935601099?text=${msg}`, "_blank", "noopener,noreferrer");
    }
  };

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
        <span>Chat on WhatsApp About This {itemType === "tour" ? "Tour" : "Package"}</span>
      </button>
    </div>
  );
}
