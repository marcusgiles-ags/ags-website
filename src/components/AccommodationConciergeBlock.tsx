"use client";

import React from "react";
import InlineFastInquiry from "@/components/InlineFastInquiry";

interface AccommodationConciergeBlockProps {
  hotelName: string;
  location: string;
  countryName: string;
}

export default function AccommodationConciergeBlock({
  hotelName,
  location,
  countryName,
}: AccommodationConciergeBlockProps) {
  const destinationLabel = location ? `${location}, ${countryName}` : countryName;

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi Marcus & AGS team, I'm interested in staying at ${hotelName} (${destinationLabel}) as part of a golf trip. Could you share contracted rates, tee-time pairings, and availability?`
    );
    if (typeof window !== "undefined") {
      const w = window as unknown as {
        dataLayer?: Array<Record<string, unknown>>;
        gtag?: (...args: unknown[]) => void;
      };
      if (w.dataLayer) {
        w.dataLayer.push({
          event: "whatsapp_concierge_click",
          venue_type: "accommodation",
          venue_name: hotelName,
          destination: destinationLabel,
        });
      }
      if (typeof w.gtag === "function") {
        w.gtag("event", "whatsapp_concierge_click", {
          venue_type: "accommodation",
          venue_name: hotelName,
          destination: destinationLabel,
        });
      }
      window.open(`https://wa.me/84935601099?text=${msg}`, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section
      className="section"
      style={{
        backgroundColor: "rgba(212, 175, 55, 0.03)",
        borderTop: "1px solid rgba(212, 175, 55, 0.12)",
        borderBottom: "1px solid rgba(212, 175, 55, 0.12)",
        padding: "3.5rem 0",
      }}
    >
      <div className="container" style={{ maxWidth: "960px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "1.75rem" }}>
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
            <span>Chat on WhatsApp About {hotelName}</span>
          </button>
        </div>
        <InlineFastInquiry
          packageTitle={`Stay & Play at ${hotelName}`}
          destination={destinationLabel}
        />
      </div>
    </section>
  );
}
