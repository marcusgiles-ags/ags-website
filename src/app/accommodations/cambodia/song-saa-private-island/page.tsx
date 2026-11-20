import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Song Saa Private Island | Cambodia" },
 description: "Experience barefoot luxury at Song Saa Private Island, Cambodia. Overwater villas, golf access near Sihanoukville. Book with Asia Golf Specialists.",
 keywords: ["Song Saa Private Island", "luxury overwater villa Cambodia", "Koh Rong archipelago resort", "private island Cambodia golf", "Song Saa luxury resort"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/cambodia/song-saa-private-island/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Song Saa Private Island | Cambodia" },
        description: "Experience barefoot luxury at Song Saa Private Island, Cambodia. Overwater villas, golf access near Sihanoukville. Book with Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/accommodations/cambodia/song-saa-private-island/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/cambodia/song-saa-private-island/cambodia-luxury-hotel-song-saa-private-island-overwater-villa-1.webp",
            width: 1200,
            height: 630,
            alt: "Song Saa Private Island | Luxury Overwater Villas Cambodia | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Song Saa Private Island | Cambodia" },
        description: "Experience barefoot luxury at Song Saa Private Island, Cambodia. Overwater villas, golf access near Sihanoukville. Book with Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/cambodia/song-saa-private-island/cambodia-luxury-hotel-song-saa-private-island-overwater-villa-1.webp"],
    },
};

const images = [
 { src: "/images/accommodations/cambodia/song-saa-private-island/cambodia-luxury-hotel-song-saa-private-island-overwater-villa-1.webp", alt: "Song Saa Private Island Overwater Villa Cambodia - Premium Southeast Asia Golf Tours 2026", caption: "Overwater villa, Koh Rong Archipelago" },
 { src: "/images/accommodations/cambodia/song-saa-private-island/cambodia-luxury-hotel-song-saa-private-island-koh-rong-2.webp", alt: "Song Saa Private Island Koh Rong Archipelago - Premium Southeast Asia Golf Tours 2026", caption: "Private island aerial view" },
 { src: "/images/accommodations/cambodia/song-saa-private-island/cambodia-luxury-hotel-song-saa-private-island-jungle-villa-3.webp", alt: "Song Saa Private Island Jungle Villa Sanctuary - Premium Southeast Asia Golf Tours 2026", caption: "Jungle villa with plunge pool" },
 { src: "/images/accommodations/cambodia/song-saa-private-island/cambodia-luxury-hotel-song-saa-private-island-reef-4.webp", alt: "Song Saa Private Island Coral Reef Conservation - Premium Southeast Asia Golf Tours 2026", caption: "Coral reef marine conservation area" },
 { src: "/images/accommodations/cambodia/song-saa-private-island/cambodia-luxury-hotel-song-saa-private-island-aerial-5.webp", alt: "Song Saa Private Island Aerial View Cambodia - Premium Southeast Asia Golf Tours 2026", caption: "Aerial view, Koh Rong Archipelago" },
];

export default function SongSaaPrivateIsland() {
 return (
 <main style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-tertiary)', minHeight: '100vh' }}>
 <Navbar />
 <header className="hero" style={{ minHeight: '85vh'}}>
 <div style={{ position: 'absolute', inset: 0, zIndex: 0, WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)' }}>
<Image 
        src={images[0].src} 
        alt={images[0].alt} 
        fill 
        priority 
        style={{ objectFit: 'cover' }} 
        sizes="100vw"
    />
 <div className="hero-overlay" style={{ position: 'absolute', inset: 0, zIndex: 2 }}></div>
 </div>
 <div className="container" style={{ position: 'relative', zIndex: 10 }}>
<DestinationBackLink country="Cambodia" countryLink="/destinations/cambodia/accommodations/" />
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Preferred Property — Cambodia</div>
 <h1 style={{ marginBottom: '1rem' }}>Song Saa <br /><span className="text-gold">Private Island</span></h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"The absolute benchmark for luxury decompression — private overwater sanctuaries in the untouched Koh Rong Archipelago."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
 {[
 ["Category", "Ultra-Luxury Private Island Resort"],
 ["Star Rating", "5 Star (Independent Luxury)"],
 ["Location", "Koh Rong Archipelago, Cambodia"],
 ["Total Villas", "24 Overwater, Jungle & Ocean-View Villas"],
 ["Access", "Private Speedboat or Helicopter from Sihanoukville/Phnom Penh"],
 ["Setting", "Twin private islands (Song Saa), marine reserve"],
 ["Key Amenity", "Overwater Spa, Marine Conservation, Infinity Pool"],
 ].map(([k, v], i, arr) => (<tr key={k}><th style={{ textAlign: 'left', padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none', color: 'var(--color-gold)' }}>{k}</th><td style={{ padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none' }}>{v}</td></tr>))}
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
 <p>Song Saa Private Island is the ultimate conclusion to a high-intensity Cambodian golf itinerary. Spanning two pristine islands in the Koh Rong Archipelago, the resort was founded on a philosophy of "luxury that treads lightly," combining world-class overwater villa architecture with deep-rooted marine and communal conservation programmes.</p>
 <p>For AGS clients who have spent a week navigating the technical demands of Vattanac Golf Resort and Angkor Golf Resort, Song Saa provides the essential physical and mental reset. The overwater villas — built from reclaimed timber and featuring private infinity pools that merge with the Gulf of Thailand — offer a level of seclusion that is impossible to find on the mainland.</p>
 <p>Reached by private helicopter from Phnom Penh or a dedicated speedboat from Sihanoukville, the transition to the island is part of the experience. Between rounds of diving the house reef and enjoying the overwater spa, the only "score" that matters here is the level of absolute relaxation achieved. For the premium golf traveller, Song Saa is the non-negotiable finish line.</p>
 </div>
 </div>
 </div>
 </section>
 <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/cambodia/song-saa-private-island/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all Song Saa helicopter transfers and post-golf island escapes.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Song Saa Private Island",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Koh Rong Archipelago", "addressCountry": "KH" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/cambodia/song-saa-private-island/",
                          "sameAs": ["https://www.songsaa.com/","https://www.forbestravelguide.com/hotels/koh-rong-cambodia/song-saa-private-island","https://www.cntraveler.com/hotels/cambodia/koh-rong/song-saa-private-island"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Cambodia", "item": "https://www.asiagolfspecialists.com/destinations/cambodia/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Song Saa Private Island", "item": "https://www.asiagolfspecialists.com/accommodations/cambodia/song-saa-private-island/" }
                            ]
                        }
                    ]
                }) }} />
 
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Spanning two untouched twin islands connected by a wooden footbridge in Cambodia&apos;s Koh Rong Marine Reserve, the 24-villa Song Saa Private Island is our curated barefoot-luxury extension for golfers finishing a Phnom Penh and Siem Reap championship tour. Handcrafted from reclaimed local timber and driftwood, its Overwater, Ocean-View, and Jungle Pool Villas offer absolute castaway privacy.</p>
                        <p style={{ marginBottom: '1rem' }}>Rather than a daily golf basecamp, Song Saa serves as the ultimate 3-to-4-night post-golf decompression finale: after playing Vattanac, Chhun On, and Angkor Golf Resort, AGS arranges your domestic flight to Sihanoukville (KOS) — or private helicopter charter from Phnom Penh — followed by a 45-minute luxury speedboat ride straight onto Song Saa&apos;s jetty.</p>
                        <p>Stays operate on an all-inclusive luxury rhythm covering gourmet island dining at overwater Vista Restaurant, house wines and cocktails, guided reef snorkelling and kayaking in the protected marine sanctuary, and open-air rainforest spa rituals.</p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Song Saa Private Island"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/cambodia/song-saa-private-island/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/cambodia/song-saa-private-island/cambodia-luxury-hotel-song-saa-private-island-overwater-villa-1.webp"
    addressLocality="Koh Rong Archipelago"
    addressCountry="KH"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="Untouched Private Island Luxury • Koh Rong"
    inspectionDate="Curated AGS Partner — Vetted via Client Feedback"
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.9,
            highlight: "Reclaimed timber overwater villas"
      },
      {
            label: "Villa & Beachfront Privacy",
            score: 9.9,
            highlight: "Entire private archipelago seclusion"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.8,
            highlight: "Open-air ocean breeze spa pods"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.8,
            highlight: "Vista overwater fine dining & sunset bar"
      }
]}
    verdict="A private-island tropical paradise in the Koh Rong Archipelago. Overwater villas made from reclaimed local timbers, bio-reserve marine waters, and the ultimate post-golf luxury decompression."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Are there golf courses on Song Saa Private Island, or is it a post-golf beach extension?","acceptedAnswer":{"@type":"Answer","text":"Song Saa is a dedicated private-island marine sanctuary with no golf course on-island — AGS designs it as a 3-to-4-night barefoot luxury recovery finale immediately after your championship golf rounds in Siem Reap and Phnom Penh."}},{"@type":"Question","name":"How do travellers reach Song Saa Private Island after playing golf in Phnom Penh or Siem Reap?","acceptedAnswer":{"@type":"Answer","text":"Fly 50 minutes from Siem Reap to Sihanoukville (KOS) or drive 2.5–3 hours down the new Phnom Penh–Sihanoukville Expressway, then board Song Saa's private 45-minute speedboat transfer (private helicopter charters directly to the island are also available)."}},{"@type":"Question","name":"Is Song Saa Private Island all-inclusive?","acceptedAnswer":{"@type":"Answer","text":"Yes. Song Saa's signature island rates include all a-la-carte meals across Vista and Driftwood Bar, unlimited house wines, spirits, and beers, daily replenished minibar, snorkelling/kayaking gear, and island conservation excursions."}},{"@type":"Question","name":"Which villa category is best for couples or fourballs decompressing after golf?","acceptedAnswer":{"@type":"Answer","text":"One-Bedroom Overwater Pool Villas deliver iconic turquoise lagoon steps for couples, while the Two-Bedroom Royal Overwater Villa gives four golfers or two couples a private sea-front deck and pool."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "Are there golf courses on Song Saa Private Island, or is it a post-golf beach extension?",
    "a": "Song Saa is a dedicated private-island marine sanctuary with no golf course on-island — AGS designs it as a 3-to-4-night barefoot luxury recovery finale immediately after your championship golf rounds in Siem Reap and Phnom Penh."
  },
  {
    "q": "How do travellers reach Song Saa Private Island after playing golf in Phnom Penh or Siem Reap?",
    "a": "Fly 50 minutes from Siem Reap to Sihanoukville (KOS) or drive 2.5–3 hours down the new Phnom Penh–Sihanoukville Expressway, then board Song Saa's private 45-minute speedboat transfer (private helicopter charters directly to the island are also available)."
  },
  {
    "q": "Is Song Saa Private Island all-inclusive?",
    "a": "Yes. Song Saa's signature island rates include all a-la-carte meals across Vista and Driftwood Bar, unlimited house wines, spirits, and beers, daily replenished minibar, snorkelling/kayaking gear, and island conservation excursions."
  },
  {
    "q": "Which villa category is best for couples or fourballs decompressing after golf?",
    "a": "One-Bedroom Overwater Pool Villas deliver iconic turquoise lagoon steps for couples, while the Two-Bedroom Royal Overwater Villa gives four golfers or two couples a private sea-front deck and pool."
  }
]).map((faq, i) => (
                            <details key={i} style={{ borderBottom: "1px solid rgba(212,175,55,0.12)", padding: "1.5rem 0" }}>
                                <summary style={{ fontSize: "1.05rem", fontWeight: 600, cursor: "pointer", color: "#F8FAFC", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                                    <span>{faq.q}</span>
                                    <span style={{ color: "#D4AF37", fontSize: "1.2rem", flexShrink: 0 }}>+</span>
                                </summary>
                                <p style={{ marginTop: "1rem", color: "rgba(248,250,252,0.72)", lineHeight: 1.75, fontSize: "1rem" }}>{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <AccommodationConciergeBlock hotelName="Song Saa Private Island" location="Koh Rong Archipelago" countryName="Cambodia" />

            <VenueItineraries venueHref="/accommodations/cambodia/song-saa-private-island/" venueName="Song Saa Private Island" venueType="accommodation" />

</main>
 );
}
