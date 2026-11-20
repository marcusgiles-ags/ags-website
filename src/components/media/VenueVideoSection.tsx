"use client";

import React, { useState } from "react";
import Image from "next/image";
import venueMedia from "@/data/venue-media.json";

interface VenueVideoSectionProps {
  pagePath: string;           // e.g. "/courses/vietnam/hoiana-shores/" or "/accommodations/vietnam/new-world-hoiana/"
  fallbackThumbnail?: string; // Optional custom thumbnail URL from local images
  className?: string;
}

export default function VenueVideoSection({
  pagePath,
  fallbackThumbnail,
}: VenueVideoSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const media = (venueMedia as Record<string, any>)[pagePath];

  // Enforce "Use Nothing" Policy: Render zero markup if no qualifying video exists
  if (!media || !media.hasVideo || !media.embedId) {
    return null;
  }

  const isLocalImage = fallbackThumbnail && fallbackThumbnail.startsWith("/");
  const defaultThumbnail = `https://i.ytimg.com/vi/${media.embedId}/hqdefault.jpg`;
  const imageSource = fallbackThumbnail || defaultThumbnail;
  const absoluteThumbnail = isLocalImage
    ? `https://www.asiagolfspecialists.com${fallbackThumbnail}`
    : defaultThumbnail;

  const videoTitle =
    media.videoTitle ||
    `${media.facilityName} Official ${media.category === "Course" ? "Championship Drone Flyover" : "Resort Vision"}`;

  const videoDescription =
    media.category === "Course"
      ? `Official 4K uncut aerial drone flyover of ${media.facilityName} in ${media.country}. Vetted by Asia Golf Specialists for championship course architecture, turf conditioning, and luxury touring logistics.`
      : `Official luxury resort walkthrough and sanctuary vision of ${media.facilityName} in ${media.country}. Vetted by Asia Golf Specialists for suite comfort, private wellness recovery, and luxury golf logistics.`;

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: videoTitle,
    description: videoDescription,
    thumbnailUrl: [absoluteThumbnail],
    uploadDate: "2024-01-01T08:00:00+07:00",
    embedUrl: `https://www.youtube.com/embed/${media.embedId}`,
    contentUrl: `https://www.youtube.com/watch?v=${media.embedId}`,
    publisher: {
      "@type": "Organization",
      name: "Asia Golf Specialists",
      url: "https://www.asiagolfspecialists.com/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.asiagolfspecialists.com/images/brand-library/logos/ags-logo-the-club-mark-nobkgrd.webp",
        width: 512,
        height: 512,
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <div
        style={{
          marginTop: "2.25rem",
          marginBottom: "0.5rem",
          width: "100%",
          maxWidth: "960px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
      {/* Elegantly Presented Video Box below preview chain */}
      <div
        style={{
          background: "linear-gradient(180deg, rgba(15, 23, 42, 0.85) 0%, rgba(2, 6, 23, 0.98) 100%)",
          border: "1px solid rgba(212, 175, 55, 0.35)",
          borderRadius: "14px",
          overflow: "hidden",
          boxShadow: "0 20px 45px rgba(0, 0, 0, 0.75)",
        }}
      >
        {/* Box Header Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.75rem",
            padding: "0.85rem 1.25rem",
            borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
            background: "rgba(2, 6, 23, 0.75)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ fontSize: "0.95rem" }}>🎬</span>
            <span
              style={{
                color: "#D4AF37",
                fontSize: "0.78rem",
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              {media.category === "Course"
                ? "Official Championship Course Drone Flyover"
                : "Official Resort & Sanctuary Vision"}
            </span>
          </div>

          <div style={{ fontSize: "0.75rem", color: "rgba(248, 250, 252, 0.65)" }}>
            Producer: <strong style={{ color: "#D4AF37", fontWeight: 600 }}>{media.channel}</strong> · {media.quality}
          </div>
        </div>

        {/* 16:9 Video Player Viewport */}
        <div
          style={{
            position: "relative",
            width: "100%",
            paddingBottom: "56.25%", // Exact 16:9 aspect ratio standard
            background: "#000",
            overflow: "hidden",
          }}
        >
          {!isPlaying ? (
            <div
              onClick={() => setIsPlaying(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setIsPlaying(true);
                }
              }}
              style={{
                position: "absolute",
                inset: 0,
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label={`Play ${media.videoTitle || media.facilityName} official promotional video`}
            >
              {/* Poster Thumbnail */}
              {isLocalImage ? (
                <Image
                  src={fallbackThumbnail!}
                  alt={media.videoTitle || media.facilityName}
                  fill
                  sizes="(max-width: 1024px) 100vw, 960px"
                  style={{
                    objectFit: "cover",
                    filter: "brightness(0.72)",
                    transition: "transform 0.6s ease",
                  }}
                />
              ) : (
                <img
                  src={imageSource}
                  alt={media.videoTitle || media.facilityName}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "brightness(0.72)",
                  }}
                  loading="lazy"
                />
              )}

              {/* Scrim Overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(2, 6, 23, 0.85) 0%, rgba(2, 6, 23, 0.15) 50%, rgba(2, 6, 23, 0.45) 100%)",
                }}
              />

              {/* Gold Circular Play Button */}
              <div
                style={{
                  position: "relative",
                  zIndex: 10,
                  width: "68px",
                  height: "68px",
                  borderRadius: "50%",
                  background: "#D4AF37",
                  color: "#020617",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 10px 30px rgba(212, 175, 55, 0.55)",
                  transition: "transform 0.25s ease",
                }}
              >
                <svg
                  style={{ width: "28px", height: "28px", fill: "currentColor", marginLeft: "3px" }}
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>

              {/* Bottom Info Pill */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "16px",
                  right: "16px",
                  zIndex: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  pointerEvents: "none",
                }}
              >
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "rgba(2, 6, 23, 0.85)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(212, 175, 55, 0.3)",
                    borderRadius: "20px",
                    padding: "6px 14px",
                    color: "#F8FAFC",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                  }}
                >
                  <span>▶</span> Watch Official {media.quality || "1080p"} Flyover
                </span>

                <span
                  style={{
                    display: "inline-block",
                    background: "rgba(2, 6, 23, 0.75)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "20px",
                    padding: "6px 12px",
                    color: "rgba(248, 250, 252, 0.7)",
                    fontSize: "0.75rem",
                  }}
                >
                  100% Uncut Venue Vision
                </span>
              </div>
            </div>
          ) : (
            <iframe
              src={`https://www.youtube.com/embed/${media.embedId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title={media.videoTitle || media.facilityName}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          )}
        </div>
      </div>
      {/* Descriptive Curatorial Descriptor Below Player */}
      <p
        style={{
          fontSize: "0.82rem",
          color: "rgba(248, 250, 252, 0.65)",
          lineHeight: 1.6,
          marginTop: "0.85rem",
          marginBottom: "0.25rem",
          textAlign: "center",
          fontStyle: "italic",
        }}
      >
        {media.category === "Course"
          ? `Official uncut aerial drone flyover and hole-by-hole routing for ${media.facilityName} (${media.quality || "4K UHD"}). Vetted by Asia Golf Specialists for course architecture, turf roll, and championship group logistics.`
          : `Official sanctuary vision and facility walkthrough for ${media.facilityName} (${media.quality || "4K UHD"}). Vetted by Asia Golf Specialists for suite comfort, private wellness recovery, and golf logistics.`}
      </p>
    </div>
    </>
  );
}
