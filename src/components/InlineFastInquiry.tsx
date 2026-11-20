"use client";

import { useState, useEffect } from "react";
import { captureAttribution, getAttribution, buildTrackedSourceUrl } from "@/lib/attribution";

interface InlineFastInquiryProps {
  packageTitle?: string;
  destination?: string;
  defaultGroupProfile?: string;
  defaultReferralCode?: string;
}

export default function InlineFastInquiry({
  packageTitle = "Bespoke Golf Itinerary",
  destination = "Southeast Asia",
  defaultGroupProfile = "4 Golfers",
  defaultReferralCode = "",
}: InlineFastInquiryProps) {
  const [groupSize, setGroupSize] = useState<string>("4");
  const [travelMonth, setTravelMonth] = useState<string>("November 2026 (Peak Season)");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [referralCode, setReferralCode] = useState(defaultReferralCode);
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const attr = captureAttribution() || getAttribution();
    if (!defaultReferralCode && attr?.ref) {
      setReferralCode(attr.ref);
    }
  }, [defaultReferralCode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim()) {
      setErrorMsg("Please enter your name and email or phone number.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    const attr = getAttribution();
    const activeRef = (referralCode || attr?.ref || "").trim().toUpperCase();
    const currentUrl = typeof window !== "undefined" ? window.location.href : "";

    const isEmail = contact.includes("@");
    const payload = {
      name,
      email: isEmail ? contact : `${contact.replace(/[^0-9]/g, "")}@whatsapp-lead.ags`,
      phone: !isEmail ? contact : "",
      destination,
      groupSize,
      travelMonth,
      referralCode: activeRef || undefined,
      message: `Inquiry for package: "${packageTitle}". Group Size: ${groupSize}. Travel Month: ${travelMonth}. Notes: ${notes || "None"}`,
      privacy_consent: true,
      metadata: {
        lead_source: attr?.initial_referrer || (typeof window !== "undefined" ? document.referrer || "Direct" : "Direct"),
        landing_page: buildTrackedSourceUrl(currentUrl, attr, activeRef),
        first_landing_page: attr?.first_landing_page || currentUrl,
        device_type: typeof window !== "undefined" && /Mobile|Android|iPhone/i.test(navigator.userAgent) ? "Mobile" : "Desktop",
        package_title: packageTitle,
        utm_source: attr?.utm_source,
        utm_medium: attr?.utm_medium,
        utm_campaign: attr?.utm_campaign,
        utm_content: attr?.utm_content,
        ref: activeRef || undefined,
      },
    };

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSubmitted(true);
        if (typeof window !== "undefined") {
          const w = window as any;
          if (w.dataLayer) {
            w.dataLayer.push({
              event: "fast_inquiry_submit",
              package_title: packageTitle,
              destination,
              group_size: groupSize,
              referral_code: activeRef || undefined,
              utm_source: attr?.utm_source || undefined,
              utm_medium: attr?.utm_medium || undefined,
              utm_campaign: attr?.utm_campaign || undefined,
              utm_content: attr?.utm_content || undefined,
            });
          }
          if (typeof w.gtag === "function") {
            w.gtag("event", "generate_lead", {
              event_category: "FastInquiry",
              event_label: activeRef ? `${packageTitle} (${activeRef})` : packageTitle,
              destination,
              group_size: groupSize,
              utm_source: attr?.utm_source || undefined,
              utm_medium: attr?.utm_medium || undefined,
              utm_campaign: attr?.utm_campaign || undefined,
              value: 1,
            });
          }
        }
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Unable to submit inquiry. Please try again or email us directly.");
      }
    } catch {
      setErrorMsg("Connection error. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="fast-inquiry"
      style={{
        margin: "4rem 0",
        padding: "3rem 2rem",
        backgroundColor: "rgba(5, 11, 26, 0.85)",
        border: "1px solid rgba(212, 175, 55, 0.35)",
        borderRadius: "12px",
        boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "250px",
          height: "250px",
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "750px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <span
            style={{
              color: "#D4AF37",
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              fontWeight: 700,
              display: "block",
              marginBottom: "0.5rem",
            }}
          >
            Direct Expat Concierge Service
          </span>
          <h2
            style={{
              fontFamily: "var(--font-primary-serif)",
              fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
              color: "#F8FAFC",
              margin: "0 0 0.75rem 0",
              fontWeight: 700,
            }}
          >
            Request Private Availability &amp; Custom Proposal
          </h2>
          <p
            style={{
              color: "rgba(248, 250, 252, 0.7)",
              fontSize: "0.95rem",
              lineHeight: 1.6,
              margin: "0 auto",
            }}
          >
            Direct response from Marcus and the Australian concierge team in Da Nang within 24 hours.
            Every proposal is handcrafted to your group&apos;s exact dates, preferred courses, and villa requirements.
          </p>
        </div>

        {submitted ? (
          <div
            style={{
              padding: "2.5rem 2rem",
              backgroundColor: "rgba(212, 175, 55, 0.08)",
              border: "1px solid rgba(212, 175, 55, 0.5)",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                backgroundColor: "rgba(212, 175, 55, 0.2)",
                color: "#D4AF37",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 1rem",
                fontSize: "1.5rem",
              }}
            >
              ✓
            </div>
            <h3
              style={{
                color: "#D4AF37",
                fontSize: "1.5rem",
                fontFamily: "var(--font-primary-serif)",
                margin: "0 0 0.75rem 0",
              }}
            >
              Inquiry Received, {name.split(" ")[0]}!
            </h3>
            <p
              style={{
                color: "#F8FAFC",
                fontSize: "1rem",
                lineHeight: 1.6,
                maxWidth: "600px",
                margin: "0 auto 1.5rem",
              }}
            >
              Our on-the-ground team will review course tee sheet availability for <strong>{destination}</strong> and
              contact you directly at <strong>{contact}</strong> with a detailed itinerary draft and group pricing.
            </p>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.85rem",
                color: "rgba(248, 250, 252, 0.6)",
                borderTop: "1px solid rgba(212, 175, 55, 0.2)",
                paddingTop: "1rem",
              }}
            >
              Urgent request? Message our WhatsApp Concierge in the bottom right corner for instant response.
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "1.5rem" }}>
            {errorMsg && (
              <div
                style={{
                  padding: "0.75rem 1rem",
                  backgroundColor: "rgba(239, 68, 68, 0.1)",
                  border: "1px solid rgba(239, 68, 68, 0.4)",
                  color: "#FCA5A5",
                  borderRadius: "6px",
                  fontSize: "0.9rem",
                }}
              >
                {errorMsg}
              </div>
            )}

            {/* Group Size Selector */}
            <div>
              <label
                style={{
                  display: "block",
                  color: "#D4AF37",
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "0.5rem",
                  fontWeight: 600,
                }}
              >
                1. Group Size ({defaultGroupProfile} typical)
              </label>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.5rem" }}>
                {[
                  { id: "2", label: "2 Golfers" },
                  { id: "4", label: "4 Golfers" },
                  { id: "8", label: "8 Golfers" },
                  { id: "12+", label: "12+ Golfers" },
                ].map((tier) => (
                  <button
                    key={tier.id}
                    type="button"
                    onClick={() => setGroupSize(tier.id)}
                    style={{
                      padding: "0.6rem 0.5rem",
                      backgroundColor:
                        groupSize === tier.id ? "#D4AF37" : "rgba(255, 255, 255, 0.05)",
                      color: groupSize === tier.id ? "#020617" : "#F8FAFC",
                      border:
                        groupSize === tier.id
                          ? "1px solid #D4AF37"
                          : "1px solid rgba(255, 255, 255, 0.15)",
                      borderRadius: "6px",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  >
                    {tier.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Travel Timing & Destination */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label
                  style={{
                    display: "block",
                    color: "#D4AF37",
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.5rem",
                    fontWeight: 600,
                  }}
                >
                  2. Travel Window
                </label>
                <select
                  value={travelMonth}
                  onChange={(e) => setTravelMonth(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    backgroundColor: "rgba(2, 6, 23, 0.9)",
                    border: "1px solid rgba(212, 175, 55, 0.25)",
                    borderRadius: "6px",
                    color: "#F8FAFC",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                >
                  <option value="November 2026 (Peak Season)">November 2026 (Peak Season)</option>
                  <option value="December 2026 (Peak Season)">December 2026 (Peak Season)</option>
                  <option value="January 2027 (Peak Season)">January 2027 (Peak Season)</option>
                  <option value="February 2027 (Peak Season)">February 2027 (Peak Season)</option>
                  <option value="March 2027 (Spring Season)">March 2027 (Spring Season)</option>
                  <option value="April 2027 (Songkran / Easter)">April 2027 (Songkran / Easter)</option>
                  <option value="May - August 2027 (Summer 2027)">May - August 2027 (Summer 2027)</option>
                  <option value="September - December 2027 (Late 2027)">September - December 2027 (Late 2027)</option>
                  <option value="2028 Planning / Future Tour">2028 Planning / Future Tour</option>
                  <option value="Flexible / Dates Not Fixed">Flexible / Dates Not Fixed</option>
                </select>
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    color: "#D4AF37",
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.5rem",
                    fontWeight: 600,
                  }}
                >
                  Region Focus
                </label>
                <input
                  type="text"
                  readOnly
                  value={destination}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    borderRadius: "6px",
                    color: "rgba(248, 250, 252, 0.7)",
                    fontSize: "0.95rem",
                  }}
                />
              </div>
            </div>

            {/* Name & Contact */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              <div>
                <label
                  style={{
                    display: "block",
                    color: "#D4AF37",
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.5rem",
                    fontWeight: 600,
                  }}
                >
                  3. Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Dave Mitchell"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    backgroundColor: "rgba(2, 6, 23, 0.9)",
                    border: "1px solid rgba(212, 175, 55, 0.25)",
                    borderRadius: "6px",
                    color: "#F8FAFC",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    color: "#D4AF37",
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.5rem",
                    fontWeight: 600,
                  }}
                >
                  4. Email or WhatsApp *
                </label>
                <input
                  type="text"
                  required
                  placeholder="dave@gmail.com or +61 412..."
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    backgroundColor: "rgba(2, 6, 23, 0.9)",
                    border: "1px solid rgba(212, 175, 55, 0.25)",
                    borderRadius: "6px",
                    color: "#F8FAFC",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                />
              </div>
            </div>

            {/* Notes & Optional Referral Code (only shown when pre-tagged) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: referralCode ? "2fr 1fr" : "1fr",
                gap: "1rem",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    color: "rgba(248, 250, 252, 0.6)",
                    fontSize: "0.8rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.5rem",
                    fontWeight: 500,
                  }}
                >
                  Special Requests or Must-Play Courses (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Private beachfront villa preference, playing Hoiana Shores twice..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    backgroundColor: "rgba(2, 6, 23, 0.9)",
                    border: "1px solid rgba(255, 255, 255, 0.15)",
                    borderRadius: "6px",
                    color: "#F8FAFC",
                    fontSize: "0.9rem",
                    outline: "none",
                    resize: "vertical",
                  }}
                />
              </div>

              {referralCode ? (
                <div>
                  <label
                    style={{
                      display: "block",
                      color: "rgba(212, 175, 55, 0.85)",
                      fontSize: "0.8rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      marginBottom: "0.5rem",
                      fontWeight: 500,
                    }}
                  >
                    Referral Code
                  </label>
                  <input
                    type="text"
                    placeholder="Optional"
                    value={referralCode}
                    onChange={(e) => setReferralCode(e.target.value.toUpperCase())}
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      backgroundColor: "rgba(212, 175, 55, 0.08)",
                      border: "1px solid rgba(212, 175, 55, 0.6)",
                      borderRadius: "6px",
                      color: "#D4AF37",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      fontSize: "0.9rem",
                      outline: "none",
                    }}
                  />
                </div>
              ) : null}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: "100%",
                padding: "1rem 2rem",
                backgroundColor: "#D4AF37",
                color: "#020617",
                border: "none",
                borderRadius: "6px",
                fontSize: "1rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                cursor: isSubmitting ? "not-allowed" : "pointer",
                transition: "all 0.2s ease",
                opacity: isSubmitting ? 0.7 : 1,
                boxShadow: "0 4px 15px rgba(212, 175, 55, 0.3)",
              }}
            >
              {isSubmitting ? "Transmitting to Concierge..." : "Get Tailored Itinerary & Availability →"}
            </button>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "1.5rem",
                color: "rgba(248, 250, 252, 0.5)",
                fontSize: "0.8rem",
                textAlign: "center",
                flexWrap: "wrap",
              }}
            >
              <span>🔒 100% Privacy Guaranteed</span>
              <span>⚡ 24-Hour Guaranteed Response</span>
              <span>🇦🇺 Australian Expat Owned &amp; Operated</span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
