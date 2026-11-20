import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import InlineFastInquiry from "@/components/InlineFastInquiry";
import GuideDownloadCTA from "@/components/GuideDownloadCTA";

export const metadata: Metadata = {
  title: { absolute: "Brad Johnson × AGS | Vietnam Golf Escapes" },
  description:
    "7-day Central Vietnam golf tours via Brad 'Johnno' Johnson. Play Hoiana Shores and Ba Na Hills, stay in private An Bang villas, all logistics sorted.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.asiagolfspecialists.com/johnno/",
  },
  openGraph: {
    type: "website",
    title: { absolute: "Brad Johnson × AGS | Vietnam Golf Escapes" },
    description:
      "7-day Central Vietnam golf tours via Brad 'Johnno' Johnson. Play Hoiana Shores and Ba Na Hills, stay in private An Bang villas, all logistics sorted.",
    url: "https://www.asiagolfspecialists.com/johnno/",
    siteName: "Asia Golf Specialists",
    images: [
      {
        url: "https://www.asiagolfspecialists.com/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp",
        width: 1200,
        height: 630,
        alt: "Hoiana Shores Golf Club — Brad Johnson × Asia Golf Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: "Brad Johnson × AGS | Vietnam Golf Escapes" },
    description:
      "7-day Central Vietnam golf tours via Brad 'Johnno' Johnson. Play Hoiana Shores and Ba Na Hills, stay in private An Bang villas, all logistics sorted.",
    images: [
      "https://www.asiagolfspecialists.com/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp",
    ],
  },
};

const HIGHLIGHTS = [
  {
    label: "Championship Greens",
    title: "4 Top-100 Layouts",
    desc: "Play Hoiana Shores (RTJ II), Ba Na Hills (Luke Donald), Laguna Lăng Cô (Nick Faldo), and Montgomerie Links.",
  },
  {
    label: "Private Headquarters",
    title: "Beachfront Villa HQ",
    desc: "Skip generic hotel lobbies. Base the crew in your own An Bang beachfront villa estate with private pool and beach gate.",
  },
  {
    label: "Zero Organising Pain",
    title: "Door-to-Fairway VIP",
    desc: "Private high-roof transfers, guaranteed morning tee sheets, dedicated 1:1 caddies, and curated Hoi An dinners.",
  },
  {
    label: "Australian Owned",
    title: "Local Expats on Deck",
    desc: "Marcus and our Australian team live permanently in Hoi An and Da Nang—handling every detail on the ground.",
  },
];

const SHOWCASE_CARDS = [
  {
    tag: "Robert Trent Jones Jr. · Links",
    title: "Hoiana Shores Golf Club",
    subtitle: "Oceanfront links dunes 10 minutes south of Hoi An.",
    href: "/courses/vietnam/hoiana-shores/",
    image: "/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp",
    alt: "Hoiana Shores Golf Club coastal dunes in Central Vietnam",
  },
  {
    tag: "Luke Donald · Mountain",
    title: "Ba Na Hills Golf Club",
    subtitle: "Dramatic mountain elevation changes in the foothills west of Da Nang.",
    href: "/courses/vietnam/ba-na-hills/",
    image: "/images/courses/vietnam/ba-na-hills/ba-na-hills-golf-club-vietnam-championship-5.webp",
    alt: "Ba Na Hills Golf Club mountain championship fairway",
  },
  {
    tag: "Sir Nick Faldo · Coastal & Jungle",
    title: "Laguna Golf Lăng Cô",
    subtitle: "Tropical amphitheatre fairways framed by mountains and the East Sea.",
    href: "/courses/vietnam/laguna-lang-co/",
    image: "/images/courses/vietnam/laguna-lang-co/laguna-golf-lang-co-jungle-tropical-3.webp",
    alt: "Laguna Golf Lang Co surrounded by jungle peaks and coastline",
  },
  {
    tag: "Private Estate · An Bang Beach",
    title: "Holiday Villa An Bang",
    subtitle: "Exclusive compound for 8–16 mates right on the sand.",
    href: "/accommodations/vietnam/an-bang-beach-villas/",
    image:
      "/images/accommodations/vietnam/an-bang-holiday-villa/vietnam-private-villa-an-bang-holiday-villa-beach-lifestyle-hero.webp",
    alt: "Holiday Villa An Bang beachfront private estate for golf groups",
  },
];

export default function JohnnoPartnerPage() {
  return (
    <div style={{ backgroundColor: "#020617", color: "#F8FAFC", minHeight: "100vh" }}>
      <Navbar />

      {/* ─── HERO ──────────────────────────────────────────────────────────── */}
      <header
        style={{
          position: "relative",
          minHeight: "86vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8rem 1.5rem 5rem",
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp"
          alt="Hoiana Shores Golf Club Central Vietnam — Brad Johnson × Asia Golf Specialists"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center 45%",
            zIndex: 0,
            filter: "brightness(0.55) contrast(1.06)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(2,6,23,0.55) 0%, rgba(2,6,23,0.82) 70%, #020617 100%)",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "960px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.45rem 1.15rem",
              borderRadius: "30px",
              background: "rgba(212, 175, 55, 0.14)",
              border: "1px solid rgba(212, 175, 55, 0.4)",
              color: "#D4AF37",
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              marginBottom: "1.75rem",
              backdropFilter: "blur(8px)",
            }}
          >
            Brad &ldquo;Johnno&rdquo; Johnson × Asia Golf Specialists
          </div>

          <h1
            style={{
              fontFamily: "var(--font-primary-serif)",
              fontSize: "clamp(2.6rem, 6vw, 4.8rem)",
              fontWeight: 700,
              lineHeight: 1.08,
              color: "#F8FAFC",
              marginBottom: "1.5rem",
            }}
          >
            The Mates&apos; Golf Trip,{" "}
            <span style={{ color: "#D4AF37", fontStyle: "italic" }}>Upgraded.</span>
          </h1>

          <p
            id="exec-summary"
            style={{
              fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
              color: "rgba(248, 250, 252, 0.88)",
              maxWidth: "720px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.7,
              fontWeight: 300,
            }}
          >
            Swap the winter rain for 7 days of championship fairways in Da Nang &amp; Hoi An.
            Private beachfront villas, 1:1 caddies, guaranteed morning tee sheets, and an
            Australian team on the ground handling every transfer.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              flexWrap: "wrap",
              marginBottom: "2rem",
            }}
          >
            <a
              href="#fast-inquiry"
              style={{
                background: "linear-gradient(135deg, #D4AF37 0%, #AA820A 100%)",
                color: "#020617",
                padding: "1rem 2.25rem",
                borderRadius: "4px",
                fontWeight: 700,
                fontSize: "0.88rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                textDecoration: "none",
                boxShadow: "0 10px 25px rgba(212, 175, 55, 0.35)",
              }}
            >
              Enquire With Code JOHNNO →
            </a>

            <Link
              href="/tours/vietnam-central-coast/"
              style={{
                background: "rgba(2, 6, 23, 0.65)",
                color: "#F8FAFC",
                border: "1px solid rgba(212, 175, 55, 0.45)",
                padding: "1rem 2rem",
                borderRadius: "4px",
                fontWeight: 600,
                fontSize: "0.88rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              View 7-Day Itinerary
            </Link>
          </div>

          <p
            style={{
              fontSize: "0.85rem",
              color: "rgba(212, 175, 55, 0.85)",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              margin: "0 auto",
            }}
          >
            Partner Code <strong style={{ color: "#F8FAFC" }}>JOHNNO</strong> pre-applied · Groups of 4 to 24+ golfers
          </p>
        </div>
      </header>

      {/* ─── WHY THIS TRIP WORKS ───────────────────────────────────────────── */}
      <section style={{ padding: "4rem 1.5rem" }}>
        <div className="container" style={{ maxWidth: "1150px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {HIGHLIGHTS.map((item) => (
              <div
                key={item.title}
                style={{
                  background: "rgba(10, 17, 40, 0.75)",
                  border: "1px solid rgba(212, 175, 55, 0.22)",
                  borderRadius: "10px",
                  padding: "2rem 1.5rem",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "0.72rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#D4AF37",
                    fontWeight: 700,
                    marginBottom: "0.65rem",
                  }}
                >
                  {item.label}
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-primary-serif)",
                    fontSize: "1.45rem",
                    color: "#F8FAFC",
                    marginBottom: "0.75rem",
                  }}
                >
                  {item.title}
                </h2>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.65, color: "rgba(248, 250, 252, 0.75)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CINEMATIC VIETNAM REEL ────────────────────────────────────────── */}
      <section style={{ padding: "3rem 1.5rem 5rem" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <span
            style={{
              display: "block",
              fontSize: "0.75rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#D4AF37",
              fontWeight: 700,
              marginBottom: "0.75rem",
            }}
          >
            65-Second Aerial Preview
          </span>
          <h2
            style={{
              fontFamily: "var(--font-primary-serif)",
              fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)",
              color: "#F8FAFC",
              marginBottom: "2rem",
            }}
          >
            Da Nang &amp; Hoi An: Golf Coast Reel
          </h2>

          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              border: "1px solid rgba(212, 175, 55, 0.35)",
              boxShadow: "0 25px 60px rgba(0, 0, 0, 0.75)",
              backgroundColor: "#050B1A",
            }}
          >
            <video
              controls
              muted
              playsInline
              preload="metadata"
              poster="/images/courses/vietnam/hoiana-shores/hoiana-heart-bunker.webp"
              style={{ width: "100%", display: "block", aspectRatio: "16 / 9", objectFit: "cover" }}
            >
              <source src="/videos/hero-montage.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* ─── COURSES & VILLA SHOWCASE ──────────────────────────────────────── */}
      <section style={{ padding: "2rem 1.5rem 4rem" }}>
        <div className="container" style={{ maxWidth: "1150px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span
              style={{
                display: "block",
                fontSize: "0.75rem",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#D4AF37",
                fontWeight: 700,
                marginBottom: "0.75rem",
              }}
            >
              The An Bang Invitational Lineup
            </span>
            <h2
              style={{
                fontFamily: "var(--font-primary-serif)",
                fontSize: "clamp(1.85rem, 3.5vw, 2.75rem)",
                color: "#F8FAFC",
              }}
            >
              Where You Play &amp; Where You Stay
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.75rem",
            }}
          >
            {SHOWCASE_CARDS.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "rgba(10, 17, 40, 0.7)",
                  border: "1px solid rgba(212, 175, 55, 0.25)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  textDecoration: "none",
                }}
              >
                <div style={{ position: "relative", height: "210px", width: "100%" }}>
                  <Image
                    src={card.image}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "1.5rem" }}>
                  <span
                    style={{
                      display: "block",
                      fontSize: "0.7rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#D4AF37",
                      fontWeight: 700,
                      marginBottom: "0.5rem",
                    }}
                  >
                    {card.tag}
                  </span>
                  <h3
                    style={{
                      fontFamily: "var(--font-primary-serif)",
                      fontSize: "1.3rem",
                      color: "#F8FAFC",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p style={{ fontSize: "0.9rem", color: "rgba(248, 250, 252, 0.72)", lineHeight: 1.55 }}>
                    {card.subtitle}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INLINE FAST INQUIRY (PRE-TAGGED JOHNNO) ───────────────────────── */}
      <section style={{ padding: "1rem 1.5rem 2rem" }}>
        <div className="container" style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <InlineFastInquiry
            packageTitle="The An Bang Invitational (Brad Johnson Referral)"
            destination="Vietnam (Da Nang & Hoi An)"
            defaultGroupProfile="8–12 Mates"
            defaultReferralCode="JOHNNO"
          />
        </div>
      </section>

      {/* ─── PORTFOLIO DOWNLOAD FALLBACK ───────────────────────────────────── */}
      <section style={{ padding: "1rem 1.5rem 5rem", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "750px", margin: "0 auto" }}>
          <p
            style={{
              color: "rgba(248, 250, 252, 0.7)",
              fontSize: "0.95rem",
              margin: "0 auto 0.5rem",
            }}
          >
            Just browsing options for the group chat? Download the full 2026 Portfolio below.
          </p>
          <GuideDownloadCTA />
        </div>
      </section>
    </div>
  );
}
