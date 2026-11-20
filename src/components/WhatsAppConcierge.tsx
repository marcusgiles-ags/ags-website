"use client";

import { useState } from "react";

export default function WhatsAppConcierge() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState("");
  const [isDismissed, setIsDismissed] = useState(false);

  // Direct WhatsApp contact link (configured via NEXT_PUBLIC_WHATSAPP_NUMBER or defaults to Marcus Giles +84 935 601 099)
  const defaultNumber = "84935601099";
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || defaultNumber;
  const cleanNumber = whatsappNumber.replace(/[^0-9]/g, "") || defaultNumber;

  const handleOpenWhatsApp = (messageText: string) => {
    const encoded = encodeURIComponent(messageText);
    const url = `https://wa.me/${cleanNumber}?text=${encoded}`;

    if (typeof window !== "undefined") {
      const w = window as any;
      if (w.dataLayer) {
        w.dataLayer.push({
          event: "whatsapp_concierge_click",
          message_topic: messageText.substring(0, 30),
        });
      }
      if (typeof w.gtag === "function") {
        w.gtag("event", "contact", {
          event_category: "WhatsAppConcierge",
          event_label: messageText.substring(0, 30),
        });
      }
    }

    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleCustomSend = (e: React.FormEvent) => {
    e.preventDefault();
    const textToSend = customMsg.trim() || "Hi AGS team, I'd like to ask a quick question about golf tours in Southeast Asia.";
    handleOpenWhatsApp(textToSend);
    setCustomMsg("");
  };

  if (isDismissed) {
    return (
      <button
        onClick={() => setIsDismissed(false)}
        aria-label="Open WhatsApp Concierge"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          backgroundColor: "#020617",
          border: "1px solid rgba(212, 175, 55, 0.4)",
          color: "#D4AF37",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 1000,
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.5)",
          fontSize: "1.2rem",
        }}
      >
        💬
      </button>
    );
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 1000,
        fontFamily: "var(--font-sans, sans-serif)",
      }}
    >
      {/* Expanded Modal Card */}
      {isOpen ? (
        <div
          style={{
            width: "360px",
            maxWidth: "calc(100vw - 32px)",
            backgroundColor: "#050B1A",
            border: "1px solid rgba(212, 175, 55, 0.4)",
            borderRadius: "14px",
            boxShadow: "0 25px 60px rgba(0, 0, 0, 0.8)",
            overflow: "hidden",
            marginBottom: "12px",
            animation: "fadeInUp 0.25s ease-out",
          }}
        >
          {/* Header */}
          <div
            style={{
              padding: "1.25rem 1.25rem 1rem",
              background: "linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(2, 6, 23, 0.95) 100%)",
              borderBottom: "1px solid rgba(212, 175, 55, 0.2)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "#22C55E",
                    boxShadow: "0 0 8px #22C55E",
                    display: "inline-block",
                  }}
                />
                <span style={{ fontSize: "0.75rem", color: "#22C55E", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  Expat Concierge Online
                </span>
              </div>
              <h3 style={{ margin: 0, color: "#F8FAFC", fontSize: "1.1rem", fontFamily: "var(--font-primary-serif)" }}>
                Asia Golf Specialists
              </h3>
              <span style={{ fontSize: "0.8rem", color: "rgba(248, 250, 252, 0.6)" }}>
                Da Nang &bull; Bangkok &bull; Siem Reap
              </span>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close Concierge"
              style={{
                background: "transparent",
                border: "none",
                color: "rgba(248, 250, 252, 0.6)",
                fontSize: "1.25rem",
                cursor: "pointer",
                padding: "0.25rem",
                lineHeight: 1,
              }}
            >
              &times;
            </button>
          </div>

          {/* Body */}
          <div style={{ padding: "1.25rem" }}>
            <p style={{ margin: "0 0 1rem 0", fontSize: "0.9rem", color: "rgba(248, 250, 252, 0.8)", lineHeight: 1.5 }}>
              G&apos;day! Speak directly with our Australian expat team on the ground. Tap an option below to start a WhatsApp chat:
            </p>

            {/* Quick Option Buttons */}
            <div style={{ display: "grid", gap: "0.5rem", marginBottom: "1rem" }}>
              <button
                type="button"
                onClick={() =>
                  handleOpenWhatsApp(
                    "Hi AGS, I'm planning a golf trip to Southeast Asia and would love to discuss a custom itinerary."
                  )
                }
                style={{
                  padding: "0.6rem 0.85rem",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(212, 175, 55, 0.25)",
                  borderRadius: "6px",
                  color: "#D4AF37",
                  fontSize: "0.85rem",
                  textAlign: "left",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>⛳ Custom Golf Itinerary Quote</span>
                <span style={{ opacity: 0.6 }}>&rarr;</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  handleOpenWhatsApp(
                    "Hi AGS, what are the best months and weather conditions for golf in Da Nang and Vietnam?"
                  )
                }
                style={{
                  padding: "0.6rem 0.85rem",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(212, 175, 55, 0.25)",
                  borderRadius: "6px",
                  color: "#D4AF37",
                  fontSize: "0.85rem",
                  textAlign: "left",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>📅 Weather &amp; Best Playing Months</span>
                <span style={{ opacity: 0.6 }}>&rarr;</span>
              </button>

              <button
                type="button"
                onClick={() =>
                  handleOpenWhatsApp(
                    "Hi AGS, I have a specific question about group villa packages and private transfers."
                  )
                }
                style={{
                  padding: "0.6rem 0.85rem",
                  backgroundColor: "rgba(255, 255, 255, 0.04)",
                  border: "1px solid rgba(212, 175, 55, 0.25)",
                  borderRadius: "6px",
                  color: "#D4AF37",
                  fontSize: "0.85rem",
                  textAlign: "left",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>🏡 Private Beachfront Villas</span>
                <span style={{ opacity: 0.6 }}>&rarr;</span>
              </button>
            </div>

            {/* Custom Input */}
            <form onSubmit={handleCustomSend} style={{ display: "flex", gap: "0.5rem" }}>
              <input
                type="text"
                placeholder="Or type a quick question..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                style={{
                  flexGrow: 1,
                  padding: "0.6rem 0.85rem",
                  backgroundColor: "rgba(2, 6, 23, 0.9)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  borderRadius: "6px",
                  color: "#F8FAFC",
                  fontSize: "0.85rem",
                  outline: "none",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "0.6rem 0.85rem",
                  backgroundColor: "#25D366",
                  color: "#FFFFFF",
                  border: "none",
                  borderRadius: "6px",
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  cursor: "pointer",
                }}
              >
                Chat
              </button>
            </form>
          </div>
        </div>
      ) : null}

      {/* Floating Trigger Pill */}
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.65rem",
            padding: "0.75rem 1.25rem",
            backgroundColor: "#050B1A",
            border: "1px solid #D4AF37",
            borderRadius: "50px",
            color: "#F8FAFC",
            fontSize: "0.875rem",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.6), 0 0 15px rgba(212, 175, 55, 0.2)",
            transition: "all 0.2s ease",
          }}
        >
          <div
            style={{
              width: "26px",
              height: "26px",
              borderRadius: "50%",
              backgroundColor: "#25D366",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.95rem",
              fontWeight: "bold",
            }}
          >
            💬
          </div>
          <span>Chat with Expat Concierge</span>
          <span
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#22C55E",
              boxShadow: "0 0 6px #22C55E",
            }}
          />
        </button>

        {/* Small dismiss button */}
        {!isOpen && (
          <button
            onClick={() => setIsDismissed(true)}
            aria-label="Dismiss Concierge Badge"
            style={{
              background: "rgba(2, 6, 23, 0.6)",
              border: "1px solid rgba(255, 255, 255, 0.15)",
              color: "rgba(248, 250, 252, 0.4)",
              borderRadius: "50%",
              width: "22px",
              height: "22px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.75rem",
              cursor: "pointer",
            }}
          >
            &times;
          </button>
        )}
      </div>
    </div>
  );
}
