"use client";

import { useState } from "react";
import Image from "next/image";
import type { TourSanctuary } from "@/types/tour";

interface TourSanctuaryGalleryProps {
  sanctuary: TourSanctuary;
}

export default function TourSanctuaryGallery({ sanctuary }: TourSanctuaryGalleryProps) {
  const [activeVillaCategory, setActiveVillaCategory] = useState<string>("all");
  const [activeVillaIndex, setActiveVillaIndex] = useState<number>(0);

  const filteredPhotos =
    activeVillaCategory === "all"
      ? sanctuary.photos || []
      : (sanctuary.photos || []).filter((p) => p.category === activeVillaCategory);

  const handlePrevVilla = (total: number) => {
    setActiveVillaIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNextVilla = (total: number) => {
    setActiveVillaIndex((prev) => (prev + 1) % total);
  };

  const handleSelectVillaCategory = (cat: string) => {
    setActiveVillaCategory(cat);
    setActiveVillaIndex(0);
  };

  const activePhoto = filteredPhotos[activeVillaIndex] || filteredPhotos[0] || sanctuary.photos?.[0];

  return (
    <div>
      {/* Category Filter Pills */}
      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
        <button
          type="button"
          onClick={() => handleSelectVillaCategory("all")}
          style={{
            padding: "0.35rem 0.85rem",
            borderRadius: "20px",
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.05em",
            cursor: "pointer",
            border: activeVillaCategory === "all" ? "1px solid #D4AF37" : "1px solid rgba(255, 255, 255, 0.12)",
            background: activeVillaCategory === "all" ? "#D4AF37" : "rgba(255, 255, 255, 0.03)",
            color: activeVillaCategory === "all" ? "#020617" : "rgba(248, 250, 252, 0.75)",
            transition: "all 0.2s ease",
          }}
        >
          All ({sanctuary.photos?.length || 0})
        </button>

        {sanctuary.categories?.map((cat) => (
          <button
            type="button"
            key={cat.id}
            onClick={() => handleSelectVillaCategory(cat.id)}
            style={{
              padding: "0.35rem 0.85rem",
              borderRadius: "20px",
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              cursor: "pointer",
              border: activeVillaCategory === cat.id ? "1px solid #D4AF37" : "1px solid rgba(255, 255, 255, 0.12)",
              background: activeVillaCategory === cat.id ? "#D4AF37" : "rgba(255, 255, 255, 0.03)",
              color: activeVillaCategory === cat.id ? "#020617" : "rgba(248, 250, 252, 0.75)",
              transition: "all 0.2s ease",
            }}
          >
            {cat.label} ({cat.count})
          </button>
        ))}
      </div>

      {/* Main Photo Box */}
      {activePhoto && (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "450px",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 20px 45px rgba(0, 0, 0, 0.6)",
            border: "1px solid rgba(212, 175, 55, 0.25)",
          }}
        >
          <Image
            key={activePhoto.url}
            src={activePhoto.url}
            alt={activePhoto.caption}
            fill
            sizes="(max-width: 1024px) 100vw, 650px"
            style={{
              objectFit: "cover",
              objectPosition: "50% 42%",
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "14px",
              right: "14px",
              zIndex: 15,
              background: "rgba(2, 6, 23, 0.85)",
              border: "1px solid rgba(212, 175, 55, 0.45)",
              borderRadius: "20px",
              padding: "0.25rem 0.65rem",
              fontSize: "0.72rem",
              fontWeight: 600,
              color: "#F8FAFC",
              backdropFilter: "blur(6px)",
            }}
          >
            {activeVillaIndex + 1} / {filteredPhotos.length}
          </div>

          {/* Arrows */}
          <button
            type="button"
            onClick={() => handlePrevVilla(filteredPhotos.length)}
            style={{
              position: "absolute",
              top: "50%",
              left: "14px",
              transform: "translateY(-50%)",
              zIndex: 15,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "rgba(2, 6, 23, 0.8)",
              border: "1px solid rgba(212, 175, 55, 0.5)",
              color: "#D4AF37",
              fontSize: "1.25rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Previous photo"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={() => handleNextVilla(filteredPhotos.length)}
            style={{
              position: "absolute",
              top: "50%",
              right: "14px",
              transform: "translateY(-50%)",
              zIndex: 15,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              background: "rgba(2, 6, 23, 0.8)",
              border: "1px solid rgba(212, 175, 55, 0.5)",
              color: "#D4AF37",
              fontSize: "1.25rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            aria-label="Next photo"
          >
            ›
          </button>

          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "2rem 1.25rem 0.85rem",
              background: "linear-gradient(to top, rgba(2, 6, 23, 0.95) 0%, transparent 100%)",
              zIndex: 10,
            }}
          >
            <p style={{ margin: 0, fontSize: "0.85rem", color: "#F8FAFC", fontWeight: 500 }}>
              {activePhoto.caption}
            </p>
          </div>
        </div>
      )}

      {/* Thumbnails Row */}
      <div
        style={{
          display: "flex",
          gap: "0.4rem",
          marginTop: "0.75rem",
          overflowX: "auto",
          paddingBottom: "0.5rem",
          minWidth: 0,
          maxWidth: "100%",
        }}
      >
        {filteredPhotos.map((photo, idx) => (
          <button
            type="button"
            key={idx}
            onClick={() => setActiveVillaIndex(idx)}
            style={{
              position: "relative",
              width: "60px",
              height: "45px",
              flexShrink: 0,
              borderRadius: "4px",
              overflow: "hidden",
              border: activeVillaIndex === idx ? "2px solid #D4AF37" : "1px solid rgba(255, 255, 255, 0.15)",
              opacity: activeVillaIndex === idx ? 1 : 0.6,
              cursor: "pointer",
              padding: 0,
            }}
          >
            <Image src={photo.url} alt={photo.caption} fill sizes="60px" style={{ objectFit: "cover" }} />
          </button>
        ))}
      </div>
    </div>
  );
}
