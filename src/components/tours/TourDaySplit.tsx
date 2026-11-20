"use client";

import { useState } from "react";
import Image from "next/image";
import venueMedia from "@/data/venue-media.json";
import type { TourChapter } from "@/types/tour";

interface TourDaySplitProps {
  chapter: TourChapter;
}

export default function TourDaySplit({ chapter }: TourDaySplitProps) {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [isVideoActive, setIsVideoActive] = useState(false);

  const media = chapter.courseHref
    ? (venueMedia as Record<string, any>)[chapter.courseHref]
    : null;
  const hasQualifyingVideo = Boolean(media && media.hasVideo && media.embedId);
  const totalImgs = chapter.images.length;
  const currentImg = chapter.images[currentImgIdx] || chapter.images[0];

  const handlePrev = () => {
    setCurrentImgIdx((prev) => (prev - 1 + totalImgs) % totalImgs);
  };

  const handleNext = () => {
    setCurrentImgIdx((prev) => (prev + 1) % totalImgs);
  };

  return (
    <div className="tour-day-split">
      {/* Left: Gallery Column */}
      <div className="tour-day-gallery-col">
        {/* Media Mode Switcher (if video exists) */}
        {hasQualifyingVideo && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0.4rem 0.6rem",
              borderRadius: "8px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(212, 175, 55, 0.25)",
              marginBottom: "0.25rem",
            }}
          >
            <div style={{ display: "flex", gap: "0.4rem" }}>
              <button
                type="button"
                onClick={() => setIsVideoActive(false)}
                style={{
                  padding: "0.35rem 0.75rem",
                  borderRadius: "4px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  border: "none",
                  transition: "all 0.2s ease",
                  background: !isVideoActive ? "#D4AF37" : "transparent",
                  color: !isVideoActive ? "#020617" : "rgba(248, 250, 252, 0.8)",
                }}
              >
                📷 Photos ({totalImgs})
              </button>

              <button
                type="button"
                onClick={() => setIsVideoActive(true)}
                style={{
                  padding: "0.35rem 0.75rem",
                  borderRadius: "4px",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  border: "none",
                  transition: "all 0.2s ease",
                  background: isVideoActive ? "#D4AF37" : "transparent",
                  color: isVideoActive ? "#020617" : "#D4AF37",
                }}
              >
                ▶ Watch 4K Flyover
              </button>
            </div>

            <span style={{ fontSize: "0.72rem", color: "#D4AF37", fontWeight: 600 }}>
              Official Asset · {media.channel}
            </span>
          </div>
        )}

        <div className="tour-day-main-image">
          {isVideoActive ? (
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100%",
                minHeight: "480px",
                background: "#020617",
              }}
            >
              <iframe
                src={
                  "https://www.youtube-nocookie.com/embed/" +
                  media.embedId +
                  "?autoplay=1&rel=0&modestbranding=1"
                }
                title={(chapter.courseName || chapter.title) + " Official Flyover"}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
              />
            </div>
          ) : (
            <>
              <Image
                key={currentImg.url}
                src={currentImg.url}
                alt={currentImg.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 650px"
                style={{ objectFit: "cover" }}
              />

              {/* Top Right Counter Pill */}
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
                  letterSpacing: "0.05em",
                }}
              >
                {currentImgIdx + 1} / {totalImgs}
              </div>

              {/* Arrows */}
              <button
                type="button"
                onClick={handlePrev}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "14px",
                  transform: "translateY(-50%)",
                  zIndex: 15,
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "rgba(2, 6, 23, 0.8)",
                  border: "1px solid rgba(212, 175, 55, 0.5)",
                  color: "#D4AF37",
                  fontSize: "1.25rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.6)",
                  backdropFilter: "blur(4px)",
                }}
                aria-label="Previous photo"
              >
                ‹
              </button>

              <button
                type="button"
                onClick={handleNext}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "14px",
                  transform: "translateY(-50%)",
                  zIndex: 15,
                  width: "42px",
                  height: "42px",
                  borderRadius: "50%",
                  background: "rgba(2, 6, 23, 0.8)",
                  border: "1px solid rgba(212, 175, 55, 0.5)",
                  color: "#D4AF37",
                  fontSize: "1.25rem",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.6)",
                  backdropFilter: "blur(4px)",
                }}
                aria-label="Next photo"
              >
                ›
              </button>

              {/* Caption Gradient */}
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
                  {currentImg.caption}
                </p>
              </div>
            </>
          )}
        </div>

        {/* Thumbnail Row */}
        <div className="tour-day-thumb-row">
          {chapter.images.slice(0, 5).map((img, idx) => (
            <button
              type="button"
              key={idx}
              onClick={() => {
                if (isVideoActive) setIsVideoActive(false);
                setCurrentImgIdx(idx);
              }}
              className="tour-day-thumb-btn"
              style={{
                border:
                  !isVideoActive && currentImgIdx === idx
                    ? "2px solid #D4AF37"
                    : "1px solid rgba(255, 255, 255, 0.15)",
                opacity: !isVideoActive && currentImgIdx === idx ? 1 : 0.65,
              }}
            >
              <Image
                src={img.url}
                alt={img.alt}
                fill
                sizes="120px"
                style={{ objectFit: "cover" }}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right: Copy & Logistics */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div>
          {/* Course Specs Strip */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "0.5rem",
              padding: "0.75rem",
              background: "rgba(255, 255, 255, 0.02)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "8px",
              marginBottom: "1.5rem",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "0.65rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#D4AF37",
                  display: "block",
                }}
              >
                Pacing
              </span>
              <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#F8FAFC" }}>
                {chapter.pacing}
              </span>
            </div>
            <div>
              <span
                style={{
                  fontSize: "0.65rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#D4AF37",
                  display: "block",
                }}
              >
                Transfer
              </span>
              <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#F8FAFC" }}>
                {chapter.transferTime}
              </span>
            </div>
            <div>
              <span
                style={{
                  fontSize: "0.65rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#D4AF37",
                  display: "block",
                }}
              >
                Yardage / Par
              </span>
              <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#F8FAFC" }}>
                {chapter.courseSpecs?.yardage
                  ? `${chapter.courseSpecs.yardage} yds (Par ${chapter.courseSpecs.par || 72})`
                  : "Villa Rest Day"}
              </span>
            </div>
            <div>
              <span
                style={{
                  fontSize: "0.65rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#D4AF37",
                  display: "block",
                }}
              >
                Layout
              </span>
              <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#F8FAFC" }}>
                {chapter.courseSpecs?.courseType || "Coastal Village"}
              </span>
            </div>
          </div>

          {/* Curator's Takeaway */}
          <div
            style={{
              padding: "1rem 1.25rem",
              borderRadius: "8px",
              background: "rgba(212, 175, 55, 0.08)",
              borderLeft: "3px solid #D4AF37",
              marginBottom: "1.5rem",
            }}
          >
            <span
              style={{
                fontSize: "0.72rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#D4AF37",
                fontWeight: 700,
                display: "block",
                marginBottom: "0.35rem",
              }}
            >
              Why This Works
            </span>
            <p
              style={{
                margin: 0,
                fontSize: "0.92rem",
                lineHeight: 1.6,
                color: "rgba(248, 250, 252, 0.85)",
              }}
            >
              {chapter.whyItWorks ||
                (Array.isArray(chapter.content)
                  ? chapter.content.join(" ")
                  : chapter.content)}
            </p>
          </div>

          {/* Bullets */}
          {chapter.bullets && chapter.bullets.length > 0 && (
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 1.5rem 0",
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {chapter.bullets.map((b, idx) => (
                <li
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    fontSize: "0.92rem",
                    lineHeight: 1.6,
                    color: "rgba(248, 250, 252, 0.8)",
                  }}
                >
                  <span style={{ color: "#D4AF37", marginTop: "2px" }}>✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Logistics Table */}
        <div
          style={{
            padding: "1rem",
            borderRadius: "8px",
            background: "rgba(0, 0, 0, 0.4)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <h3
            style={{
              fontSize: "0.75rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#D4AF37",
              fontWeight: 700,
              margin: "0 0 0.85rem 0",
            }}
          >
            Daily Logistics &amp; Inclusions
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {chapter.logistics.map((log, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.85rem",
                  borderBottom:
                    idx < chapter.logistics.length - 1
                      ? "1px solid rgba(255, 255, 255, 0.05)"
                      : "none",
                  paddingBottom: "0.4rem",
                }}
              >
                <span style={{ color: "rgba(248, 250, 252, 0.5)", fontWeight: 500 }}>
                  {log.label}
                </span>
                <span
                  style={{ color: "#F8FAFC", textAlign: "right" }}
                  dangerouslySetInnerHTML={{ __html: log.value }}
                />
              </div>
            ))}
          </div>

          {hasQualifyingVideo && (
            <button
              type="button"
              onClick={() => setIsVideoActive(true)}
              style={{
                width: "100%",
                marginTop: "0.85rem",
                padding: "0.6rem",
                borderRadius: "4px",
                border: "1px solid rgba(212, 175, 55, 0.35)",
                background: isVideoActive ? "#D4AF37" : "rgba(212, 175, 55, 0.12)",
                cursor: "pointer",
                color: isVideoActive ? "#020617" : "#D4AF37",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.5rem",
                transition: "all 0.2s ease",
              }}
            >
              <span>▶</span>
              <span>
                {isVideoActive
                  ? "Currently Viewing Aerial Flyover"
                  : `Watch ${chapter.courseName || chapter.title} Flyover`}
              </span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
