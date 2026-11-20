import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
  title: { absolute: "An Bang Beach Golf Villas Hoi An | 3 & 6-BR Private Villas" },
  description:
    "Private 3 to 6-bedroom beachfront pool villas on An Bang Beach, Hoi An (Holiday, May, Ben, Flow House, Salt & Sea Easter Villas) — 15 min from Hoiana Shores.",
  keywords: [
    "An Bang Beach Golf Villas",
    "Hoi An private beachfront villa golf group",
    "Holiday Villa An Bang Beach",
    "May Villa An Bang Beach",
    "Ben Villa An Bang Beach",
    "Flow House An Bang Beach",
    "Salt Villa An Bang Beach",
    "Sea Easter Villa An Bang Beach",
  ],
  alternates: {
    canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/an-bang-beach-villas/",
  },
  openGraph: {
    type: "website",
    title: { absolute: "An Bang Beach Golf Villas Hoi An | 3 & 6-BR Private Villas" },
    description:
      "Private 3 to 6-bedroom beachfront pool villas on An Bang Beach, Hoi An (Holiday, May, Ben, Flow House, Salt & Sea Easter Villas) — 15 min from Hoiana Shores.",
    url: "https://www.asiagolfspecialists.com/accommodations/vietnam/an-bang-beach-villas/",
    siteName: "Asia Golf Specialists",
    images: [
      {
        url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/an-bang-holiday-villa/vietnam-private-villa-an-bang-holiday-villa-beach-lifestyle-hero.webp",
        width: 1200,
        height: 630,
        alt: "An Bang Beach Private Golf Villa Collection in Hoi An, Vietnam — Asia Golf Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: { absolute: "An Bang Beach Golf Villas Hoi An | 3 & 6-BR Private Villas" },
    description:
      "Private 3 to 6-bedroom beachfront pool villas on An Bang Beach, Hoi An (Holiday, May, Ben, Flow House, Salt & Sea Easter Villas) — 15 min from Hoiana Shores.",
    images: [
      "https://www.asiagolfspecialists.com/images/accommodations/vietnam/an-bang-holiday-villa/vietnam-private-villa-an-bang-holiday-villa-beach-lifestyle-hero.webp",
    ],
  },
};

const images = [
  {
    src: "/images/accommodations/vietnam/an-bang-holiday-villa/vietnam-private-villa-an-bang-holiday-villa-beach-lifestyle-hero.webp",
    alt: "Holiday Villa An Bang Beach 6-Bedroom Private Beachfront Pool Villa Hoi An Vietnam",
    caption: "Holiday Villa (6-Bedroom Absolute Beachfront)",
  },
  {
    src: "/images/accommodations/vietnam/an-bang-may-villa/vietnam-private-villa-an-bang-may-villa-bedroom-ocean-view-3.webp",
    alt: "May Villa An Bang Beach 6-Bedroom Oceanfront Suite Hoi An Vietnam",
    caption: "May Villa (6-Bedroom Direct Beach Access)",
  },
  {
    src: "/images/accommodations/vietnam/an-bang-ben-villa/vietnam-private-villa-an-bang-ben-villa-tropical-garden-pool-7.webp",
    alt: "Ben Villa An Bang Beach 3-Bedroom Eco-Luxury Garden Pool Villa Hoi An Vietnam",
    caption: "Ben Villa (3-Bedroom Tropical Garden & Pool)",
  },
  {
    src: "/images/accommodations/vietnam/an-bang-flow-house/vietnam-private-villa-an-bang-flow-house-garden-day-beds-hero.webp",
    alt: "Flow House An Bang Beach 3-Bedroom Coastal Living Villa Hoi An Vietnam",
    caption: "Flow House (3-Bedroom Ocean-View Balcony)",
  },
  {
    src: "/images/accommodations/vietnam/an-bang-salt-villa/vietnam-private-villa-an-bang-salt-villa-pool-hero.webp",
    alt: "Salt Villa An Bang Beach 3-Bedroom Beachfront Pool Villa Hoi An Vietnam",
    caption: "Salt Villa (3-Bedroom Panoramic Sea Views)",
  },
  {
    src: "/images/accommodations/vietnam/an-bang-sea-easter-villa/sea-easter-villa-hoi-an-pool.webp",
    alt: "Sea Easter Villa An Bang Beach 3-Bedroom Private Pool Courtyard Villa Hoi An Vietnam",
    caption: "Sea Easter Villa (3-Bedroom Courtyard Pool Sanctuary)",
  },
];

const villaResidences = [
  {
    id: "holiday-villa",
    name: "Holiday Villa",
    badge: "6 Bedrooms • Up to 12 Golfers",
    tagline: "The Flagship Group Compound on An Bang Sand",
    image: "/images/accommodations/vietnam/an-bang-holiday-villa/vietnam-private-villa-an-bang-holiday-villa-beach-lifestyle-hero.webp",
    alt: "Holiday Villa An Bang Beach 6-Bedroom Private Pool Villa Hoi An",
    highlights: ["6 En-Suite Bedrooms", "Absolute Beachfront Lawn", "Private Pool & Sauna", "In-Villa BBQ Chef"],
    summary:
      "Purpose-built for 8-to-12-player touring parties. Step straight from your private beachfront lawn onto An Bang's white sand, unwind after 18 holes in the private swimming pool and Finnish sauna, and host sunset seafood & steak BBQs prepared by your in-villa chef.",
  },
  {
    id: "may-villa",
    name: "May Villa",
    badge: "6 Bedrooms • Up to 12 Golfers",
    tagline: "Direct Garden-to-Sand Access & Panoramic Sea Views",
    image: "/images/accommodations/vietnam/an-bang-may-villa/vietnam-private-villa-an-bang-may-villa-bedroom-ocean-view-3.webp",
    alt: "May Villa An Bang Beach 6-Bedroom Oceanfront Villa Hoi An",
    highlights: ["6 En-Suite Bedrooms", "Private Beach Gate", "Oceanfront Terraces", "Combinable to 24 Guests"],
    summary:
      "Positioned right beside Holiday Villa — allowing 12-to-24-player squads to book both neighbouring estates side by side. Features sweeping East Sea views, a sun-drenched private pool, and an open-air dining pavilion for post-round drinks and daily skins tallies.",
  },
  {
    id: "ben-villa",
    name: "Ben Villa",
    badge: "3 Bedrooms • Fourball Sanctuary",
    tagline: "Reclaimed-Timber Eco-Luxury 20 Steps from the Surf",
    image: "/images/accommodations/vietnam/an-bang-ben-villa/vietnam-private-villa-an-bang-ben-villa-tropical-garden-pool-7.webp",
    alt: "Ben Villa An Bang Beach 3-Bedroom Tropical Garden Pool Villa Hoi An",
    highlights: ["3 En-Suite Bedrooms", "20 Steps to Beach", "Walled Tropical Pool", "Walk to Beach Bars"],
    summary:
      "Hand-crafted from reclaimed Vietnamese hardwoods inside a lush walled tropical garden just 20 steps from the sand. Three air-conditioned en-suite bedrooms surround a private swimming pool and open-plan lounge — steps from An Bang's celebrated beachfront dining strip.",
  },
  {
    id: "flow-house",
    name: "Flow House",
    badge: "3 Bedrooms • Fourball Sanctuary",
    tagline: "Sun-Drenched Coastal Architecture & Garden Day Beds",
    image: "/images/accommodations/vietnam/an-bang-flow-house/vietnam-private-villa-an-bang-flow-house-garden-day-beds-hero.webp",
    alt: "Flow House An Bang Beach 3-Bedroom Villa with Garden Day Beds Hoi An",
    highlights: ["3 En-Suite Bedrooms", "Ocean-View Balcony", "Garden Day Beds", "Daily Cooked Breakfast"],
    summary:
      "Light-filled contemporary coastal design featuring floor-to-ceiling glass, an upper-level ocean-view balcony, and shaded garden day beds. Your housekeeping team prepares cooked-to-order breakfast timed to your morning tee time before your touring vehicle loads at the gate.",
  },
  {
    id: "salt-villa",
    name: "Salt Villa",
    badge: "3 Bedrooms • Fourball Sanctuary",
    tagline: "Elevated Second-Floor Sea Terrace & Plunge Pool",
    image: "/images/accommodations/vietnam/an-bang-salt-villa/vietnam-private-villa-an-bang-salt-villa-pool-hero.webp",
    alt: "Salt Villa An Bang Beach 3-Bedroom Pool Villa Hoi An",
    highlights: ["3 En-Suite Bedrooms", "Panoramic Sea Terrace", "Private Plunge Pool", "15 Min to Hoiana Shores"],
    summary:
      "Uninterrupted ocean vistas from every angle. Salt Villa pairs a private courtyard pool with an expansive second-floor sea terrace that catches the afternoon East Sea breeze — an effortless basecamp for fourballs playing Hoiana Shores and Montgomerie Links.",
  },
  {
    id: "sea-easter-villa",
    name: "Sea Easter Villa",
    badge: "3 Bedrooms • Fourball Sanctuary",
    tagline: "Modern Courtyard Pool & Indoor-Outdoor Rain Showers",
    image: "/images/accommodations/vietnam/an-bang-sea-easter-villa/sea-easter-villa-hoi-an-pool.webp",
    alt: "Sea Easter Villa An Bang Beach 3-Bedroom Courtyard Pool Villa Hoi An",
    highlights: ["3 En-Suite Bedrooms", "Courtyard Swimming Pool", "Outdoor Rain Showers", "Master Ocean Balcony"],
    summary:
      "A sleek 130-square-meter modern beachfront sanctuary built around a tranquil private pool courtyard. Features indoor and outdoor tropical rain showers, a chef-ready kitchen and dining lounge, and a master suite balcony overlooking the waves.",
  },
];

export default function AnBangBeachVillas() {
  const faqs = [
    {
      q: "How do the An Bang Beach Villas work for 4-player, 8-player, and 12-player golf groups?",
      a: "Fourballs typically reserve one of our 3-bedroom residences (Ben Villa, Flow House, Salt Villa, or Sea Easter Villa) so every golfer gets a private en-suite bedroom or twin setup around a private pool. Groups of 8 to 12 golfers reserve a 6-bedroom beachfront compound (Holiday Villa or May Villa) — or combine two neighbouring villas along the same stretch of An Bang sand for squads up to 24 players.",
    },
    {
      q: "What are the exact transfer times from An Bang Beach Villas to Da Nang and Hoi An golf courses?",
      a: "Via private coastal road in your AGS luxury private touring vehicle: Montgomerie Links and BRG Da Nang Golf Resort (Norman & Nicklaus courses) are 15–20 minutes north; Hoiana Shores Golf Club is 15–20 minutes south across the Cua Dai Bridge; Vinpearl Golf Nam Hoi An is 28 minutes south; and Ba Na Hills Golf Club is 45 minutes inland. Da Nang International Airport (DAD) is 35 minutes door-to-door.",
    },
    {
      q: "Are daily breakfast, housekeeping, and private chef BBQs included?",
      a: "Yes. Every AGS villa stay on An Bang Beach includes daily prepared breakfast timed to your morning tee time, full daily housekeeping, secure golf bag storage by the front gate for zero-wait loading, and optional in-villa seafood & steak BBQ banquets prepared by a private chef.",
    },
  ];

  return (
    <main style={{ backgroundColor: "var(--color-primary)", color: "var(--color-tertiary)", minHeight: "100vh" }}>
      <Navbar />
      <header className="hero" style={{ minHeight: "85vh" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 0,
            WebkitMaskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, black 65%, transparent 100%)",
          }}
        >
          <Image src={images[0].src} alt={images[0].alt} fill priority style={{ objectFit: "cover" }} sizes="100vw" />
          <div className="hero-overlay" style={{ position: "absolute", inset: 0, zIndex: 2 }}></div>
        </div>
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <DestinationBackLink country="Vietnam" countryLink="/destinations/vietnam/accommodations/" />
          <div
            className="badge"
            style={{
              display: "inline-block",
              padding: "0.5rem 1rem",
              border: "1px solid var(--color-gold)",
              color: "var(--color-gold)",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}
          >
            AGS Private Villa Collection — Hoi An, Vietnam
          </div>
          <h1 style={{ marginBottom: "1rem" }}>
            An Bang Beach <br />
            <span className="text-gold">Private Golf Villas</span>
          </h1>
          <p style={{ fontSize: "1.25rem", maxWidth: "740px", fontStyle: "italic", color: "#ccc" }} itemProp="description" id="exec-summary">
            &ldquo;Six private 3-bedroom and 6-bedroom beachfront pool villas steps from An Bang sand — positioned midway between Hoiana Shores and Montgomerie Links.&rdquo;
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
          <div className="article-content">
            <h2 style={{ marginBottom: "2rem" }}>
              Collection <span className="text-gold">Specifications</span>
            </h2>
            <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid rgba(212, 175, 55, 0.2)" }}>
              <tbody>
                {[
                  ["Collection", "Holiday Villa (6BR), May Villa (6BR), Ben Villa (3BR), Flow House (3BR), Salt Villa (3BR), Sea Easter Villa (3BR)"],
                  ["Configurations", "3-Bedroom Fourball Villas & 6-Bedroom Group Compounds (Combinable up to 24 players)"],
                  ["Location", "An Bang Beach, Hoi An, Quang Nam, Vietnam (10 min to Hoi An Ancient Town)"],
                  ["Beach Access", "Direct beachfront & 20-step garden gate access to An Bang white sand"],
                  ["Golf Transfers", "Hoiana Shores (15 min), Montgomerie Links (18 min), BRG Da Nang (20 min), Ba Na Hills (45 min)"],
                  ["In-Villa Staff", "Daily breakfast chef/staff, housekeeping, concierge & optional evening seafood BBQ chef"],
                ].map(([k, v], i, arr) => (
                  <tr key={k}>
                    <th style={{ textAlign: "left", padding: "1rem", borderBottom: i < arr.length - 1 ? "1px solid rgba(212, 175, 55, 0.2)" : "none", color: "var(--color-gold)" }}>
                      {k}
                    </th>
                    <td style={{ padding: "1rem", borderBottom: i < arr.length - 1 ? "1px solid rgba(212, 175, 55, 0.2)" : "none" }}>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
            <h2 style={{ marginBottom: "2rem" }}>
              Why Golf Groups Choose <span className="text-gold">An Bang Beach</span>
            </h2>
            <div style={{ color: "#ccc", lineHeight: "1.8", fontSize: "1.1rem" }}>
              <p style={{ marginBottom: "1rem" }}>
                For travelling fourballs and 8-to-12-player golf groups, booking individual rooms in a large high-rise hotel splits the group across different floors and forces everyone through a formal lobby twice a day. Our curated portfolio of six private beachfront villas on An Bang Beach gives your group its own walled coastal sanctuary with a private pool, open-air lounge for daily skins tallies, and cold drinks waiting in your own fridge after the 18th hole.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                Geographically, An Bang Beach sits at the exact midpoint of Central Vietnam&apos;s championship golf corridor: 15 minutes north of Robert Trent Jones Jr.&apos;s <Link href="/courses/vietnam/hoiana-shores/" style={{ color: "var(--color-gold)", textDecoration: "underline" }}>Hoiana Shores Golf Club</Link>, 18 minutes south of <Link href="/courses/vietnam/montgomerie-links/" style={{ color: "var(--color-gold)", textDecoration: "underline" }}>Montgomerie Links</Link> and <Link href="/courses/vietnam/brg-da-nang-norman/" style={{ color: "var(--color-gold)", textDecoration: "underline" }}>BRG Da Nang Golf Resort</Link>, and 10 minutes from the lantern-lit restaurants and tailors of Hoi An Ancient Town.
              </p>
              <p>
                Your luxury private touring vehicle loads directly outside your villa gate each morning after an in-villa cooked breakfast, eliminating hotel lobby delays entirely.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Rich Visual Residence Cards with Photography */}
      <section id="residences" className="section" style={{ backgroundColor: "rgba(255,255,255,0.015)", paddingTop: "5rem", paddingBottom: "5rem" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span style={{ color: "#D4AF37", letterSpacing: "0.22em", fontSize: "0.8rem", textTransform: "uppercase", display: "block", marginBottom: "0.6rem", fontWeight: 600 }}>
              Choose Your Group&apos;s Basecamp
            </span>
            <h2 style={{ marginBottom: "0.75rem" }}>
              The Six <span className="text-gold">Beachfront Residences</span>
            </h2>
            <p style={{ color: "rgba(248, 250, 252, 0.7)", maxWidth: "680px", margin: "0 auto", fontSize: "1.02rem" }}>
              Reserve a single 3-bedroom sanctuary for a fourball, a 6-bedroom beachfront compound for 8–12 players, or combine neighbouring villas along the same stretch of sand.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "2.25rem" }}>
            {villaResidences.map((v) => (
              <div
                key={v.id}
                id={v.id}
                style={{
                  backgroundColor: "rgba(8, 17, 38, 0.92)",
                  border: "1px solid rgba(212, 175, 55, 0.25)",
                  borderRadius: "10px",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 16px 36px rgba(0, 0, 0, 0.45)",
                }}
              >
                <div>
                  <div style={{ position: "relative", width: "100%", height: "235px", overflow: "hidden" }}>
                    <Image
                      src={v.image}
                      alt={v.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 380px"
                      style={{ objectFit: "cover" }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(8,17,38,0.92) 0%, rgba(8,17,38,0.15) 55%, rgba(8,17,38,0.35) 100%)",
                      }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "1rem",
                        left: "1rem",
                        backgroundColor: "rgba(2, 6, 23, 0.85)",
                        border: "1px solid rgba(212, 175, 55, 0.6)",
                        color: "#D4AF37",
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        padding: "0.35rem 0.75rem",
                        borderRadius: "999px",
                      }}
                    >
                      {v.badge}
                    </span>
                    <div style={{ position: "absolute", bottom: "0.9rem", left: "1.5rem", right: "1.5rem" }}>
                      <h3 style={{ color: "#F8FAFC", fontSize: "1.45rem", marginBottom: "0.15rem", fontFamily: "var(--font-primary-serif)" }}>
                        {v.name} <span style={{ color: "#D4AF37", fontSize: "0.95rem", fontWeight: 400 }}>— An Bang Beach</span>
                      </h3>
                      <div style={{ color: "rgba(212, 175, 55, 0.9)", fontSize: "0.84rem", fontStyle: "italic" }}>{v.tagline}</div>
                    </div>
                  </div>

                  <div style={{ padding: "1.5rem 1.5rem 1.25rem" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginBottom: "1.1rem" }}>
                      {v.highlights.map((h) => (
                        <span
                          key={h}
                          style={{
                            fontSize: "0.72rem",
                            color: "rgba(248, 250, 252, 0.85)",
                            backgroundColor: "rgba(212, 175, 55, 0.1)",
                            border: "1px solid rgba(212, 175, 55, 0.22)",
                            padding: "0.22rem 0.6rem",
                            borderRadius: "4px",
                          }}
                        >
                          ✦ {h}
                        </span>
                      ))}
                    </div>
                    <p style={{ color: "rgba(248, 250, 252, 0.85)", fontSize: "0.95rem", lineHeight: 1.7, margin: 0 }}>{v.summary}</p>
                  </div>
                </div>

                <div style={{ padding: "1rem 1.5rem 1.5rem", borderTop: "1px solid rgba(212, 175, 55, 0.12)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.78rem", color: "rgba(248, 250, 252, 0.55)" }}>15 min to Hoiana Shores GC</span>
                  <Link href="/quote/" style={{ color: "#D4AF37", fontSize: "0.86rem", fontWeight: 600, textDecoration: "underline" }}>
                    Enquire About {v.name} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: "rgba(255,255,255,0.02)", paddingTop: "4.5rem", paddingBottom: "3.5rem" }}>
        <div className="container">
          <h2 style={{ marginBottom: "2rem", textAlign: "center" }}>
            Villa <span className="text-gold">Gallery</span>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
            {images.map((img, i) => (
              <div key={i} style={{ borderRadius: "var(--radius-md)", overflow: "hidden", border: "1px solid rgba(212, 175, 55, 0.1)", display: "block" }}>
                <Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: "cover", width: "100%", height: "160px" }} />
                <div style={{ padding: "0.75rem", fontSize: "0.8rem", color: "var(--color-secondary)", textAlign: "center", backgroundColor: "var(--color-primary)" }}>
                  {img.caption}
                </div>
              </div>
            ))}
          </div>
          <VenueVideoSection pagePath="/accommodations/vietnam/an-bang-ben-villa/" />
        </div>
      </section>

      <CuratorScorecard
        itemType="Resort"
        itemName="An Bang Beach Private Golf Villas"
        itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/an-bang-beach-villas/"
        itemImage={`https://www.asiagolfspecialists.com${images[0].src}`}
        addressLocality="Hoi An"
        addressCountry="VN"
        overallScore={4.8}
        maxScore={5.0}
        gradeBadge="Premier Private Group Basecamp • Central Coast"
        inspectionDate="Spring 2026 Inspection"
        criteria={[
          { label: "Group Camaraderie & Private Pool Living", score: 9.8, highlight: "3BR & 6BR beachfront compounds" },
          { label: "Proximity to Hoiana Shores & Montgomerie Links", score: 9.6, highlight: "15–20 min coastal transfers" },
          { label: "Walkability to An Bang Dining & Beach Bars", score: 9.7, highlight: "20 steps to the sand" },
          { label: "In-Villa Breakfast & Gate-Side Vehicle Loading", score: 9.5, highlight: "Zero hotel lobby delays" },
        ]}
        verdict="For fourballs and 8-to-12-player golf groups playing Da Nang and Hoi An, combining private beachfront pool villas on An Bang Beach beats splitting up across hotel corridors every single time."
      />

      {/* Property-Specific FAQ Section */}
      <section className="section" style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          <h2 style={{ marginBottom: "2rem", textAlign: "center" }}>
            Frequently Asked <span className="text-gold">Questions</span>
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {faqs.map((faq, idx) => (
              <div key={idx} style={{ backgroundColor: "rgba(8, 17, 38, 0.7)", border: "1px solid rgba(212, 175, 55, 0.18)", borderRadius: "8px", padding: "1.5rem" }}>
                <h3 style={{ color: "var(--color-gold)", fontSize: "1.1rem", marginBottom: "0.65rem" }}>{faq.q}</h3>
                <p style={{ color: "rgba(248, 250, 252, 0.85)", lineHeight: 1.7, fontSize: "0.98rem" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VenueItineraries venueHref="/accommodations/vietnam/an-bang-beach-villas/" venueName="An Bang Beach Private Golf Villas" venueType="accommodation" />

      <section className="section">
        <div className="container text-center">
          <h2 style={{ marginBottom: "1rem" }}>
            Reserve Your Villa via <span className="text-gold">Asia Golf Specialists</span>
          </h2>
          <p style={{ maxWidth: "600px", margin: "0 auto 2rem", color: "#ccc" }}>
            AGS coordinates villa allocations, guaranteed morning tee times, and luxury private touring vehicle transfers across the Da Nang &amp; Hoi An golf corridor.
          </p>
          <Link href="/quote/" className="btn-primary">
            Request a Custom Villa &amp; Golf Quote
          </Link>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "LodgingBusiness",
                "@id": "https://www.asiagolfspecialists.com/accommodations/vietnam/an-bang-beach-villas/#lodging",
                name: "An Bang Beach Private Golf Villas (Holiday, May, Ben, Flow House, Salt & Sea Easter Villas)",
                description:
                  "Collection of six private 3-bedroom and 6-bedroom beachfront pool villas on An Bang Beach, Hoi An, Vietnam — 15 minutes from Hoiana Shores Golf Club.",
                starRating: { "@type": "Rating", ratingValue: "4.5" },
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "An Bang Beach",
                  addressLocality: "Hoi An",
                  addressRegion: "Quang Nam",
                  addressCountry: "VN",
                },
                image: `https://www.asiagolfspecialists.com${images[0].src}`,
                url: "https://www.asiagolfspecialists.com/accommodations/vietnam/an-bang-beach-villas/",
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Home", item: "https://www.asiagolfspecialists.com/" },
                  { "@type": "ListItem", position: 2, name: "Accommodations", item: "https://www.asiagolfspecialists.com/accommodations/" },
                  { "@type": "ListItem", position: 3, name: "Vietnam", item: "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                  {
                    "@type": "ListItem",
                    position: 4,
                    name: "An Bang Beach Private Golf Villas",
                    item: "https://www.asiagolfspecialists.com/accommodations/vietnam/an-bang-beach-villas/",
                  },
                ],
              },
              {
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
            ],
          }),
        }}
      />
    </main>
  );
}
