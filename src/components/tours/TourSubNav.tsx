"use client";

import { useState } from "react";

interface TourSubNavProps {
  chapters: { day: number; id: string }[];
}

export default function TourSubNav({ chapters }: TourSubNavProps) {
  const [activeDay, setActiveDay] = useState(1);

  return (
    <nav
      style={{
        position: "sticky",
        top: "70px",
        zIndex: 40,
        background: "rgba(2, 6, 23, 0.95)",
        borderBottom: "1px solid rgba(212, 175, 55, 0.25)",
        backdropFilter: "blur(12px)",
        padding: "0.75rem 0",
      }}
    >
      <div
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "0.5rem",
          overflowX: "auto",
        }}
      >
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {chapters.map((chapter) => (
            <a
              key={chapter.day}
              href={`#${chapter.id}`}
              onClick={() => setActiveDay(chapter.day)}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "all 0.2s ease",
                background: activeDay === chapter.day ? "#D4AF37" : "rgba(255, 255, 255, 0.04)",
                color: activeDay === chapter.day ? "#020617" : "rgba(248, 250, 252, 0.75)",
                border: activeDay === chapter.day ? "1px solid #D4AF37" : "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              Day {chapter.day}
            </a>
          ))}
        </div>

        <a
          href="/quote/"
          style={{
            padding: "0.45rem 1rem",
            borderRadius: "4px",
            background: "rgba(212, 175, 55, 0.15)",
            border: "1px solid rgba(212, 175, 55, 0.35)",
            color: "#D4AF37",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Customize
        </a>
      </div>
    </nav>
  );
}
