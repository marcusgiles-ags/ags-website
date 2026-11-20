"use client";

import React from "react";

interface CourseWhatsAppButtonProps {
  courseName: string;
  countryName: string;
}

export default function CourseWhatsAppButton({
  courseName,
  countryName,
}: CourseWhatsAppButtonProps) {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi Marcus & AGS team, I'm interested in playing ${courseName} (${countryName}) as part of a golf trip. Could you share availability and options?`
    );
    if (typeof window !== "undefined") {
      const w = window as any;
      if (w.dataLayer) {
        w.dataLayer.push({
          event: "whatsapp_course_click",
          course_name: courseName,
          destination: countryName,
        });
      }
      if (typeof w.gtag === "function") {
        w.gtag("event", "whatsapp_concierge_click", {
          venue_type: "course",
          venue_name: courseName,
          destination: countryName,
        });
      }
      window.open(`https://wa.me/84935601099?text=${msg}`, "_blank", "noopener,noreferrer");
    }
  };

  return (
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
      <span>Chat on WhatsApp About {courseName}</span>
    </button>
  );
}
