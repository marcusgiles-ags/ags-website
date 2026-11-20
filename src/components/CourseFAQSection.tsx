"use client";

import { useState } from "react";

export interface FAQ {
  q: string;
  a: string;
}

interface CourseFAQSectionProps {
  courseName: string;
  faqs: FAQ[];
}

export default function CourseFAQSection({
  courseName,
  faqs,
}: CourseFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      {/* Visible FAQ Accordion */}
      <section
        className="section"
        style={{ backgroundColor: "rgba(255,255,255,0.02)", paddingTop: "5rem", paddingBottom: "5rem" }}
        aria-labelledby={`faq-heading-${courseName.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            id={`faq-heading-${courseName.replace(/\s+/g, "-").toLowerCase()}`}
            style={{
              fontFamily: "var(--font-primary-serif)",
              fontSize: "clamp(2rem, 3vw, 2.5rem)",
              fontWeight: 700,
              marginBottom: "0.75rem",
              textAlign: "center",
            }}
          >
            Frequently Asked{" "}
            <span style={{ color: "#D4AF37" }}>Questions</span>
          </h2>
          <p
            style={{
              color: "rgba(248,250,252,0.6)",
              textAlign: "center",
              marginBottom: "0.5rem",
              fontSize: "1rem",
            }}
          >
            Everything you need to know about playing {courseName} with Asia Golf Specialists.
          </p>
          <p
            style={{
              color: "rgba(248,250,252,0.35)",
              textAlign: "center",
              marginBottom: "3rem",
              fontSize: "0.8rem",
              fontStyle: "italic",
            }}
            suppressHydrationWarning
          >
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </p>


          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid rgba(212, 175, 55, 0.2)",
                  borderRadius: "8px",
                  overflow: "hidden",
                  backgroundColor: "rgba(5, 11, 26, 0.6)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1.25rem 1.5rem",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: "#F8FAFC",
                    fontSize: "1rem",
                    fontWeight: 600,
                    textAlign: "left",
                    gap: "1rem",
                  }}
                  aria-expanded={openIndex === i}
                  id={`faq-btn-${i}`}
                  aria-controls={`faq-answer-${i}`}
                >
                  <span>{faq.q}</span>
                  <span
                    style={{
                      color: "#D4AF37",
                      fontSize: "1.25rem",
                      flexShrink: 0,
                      transition: "transform 0.25s ease",
                      transform: openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                      display: "inline-block",
                    }}
                  >
                    ‹
                  </span>
                </button>

                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  style={{
                    maxHeight: openIndex === i ? "400px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.3s ease",
                  }}
                >
                  <p
                    style={{
                      padding: "0 1.5rem 1.25rem",
                      color: "rgba(248,250,252,0.75)",
                      lineHeight: "1.7",
                      fontSize: "0.95rem",
                      margin: 0,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
