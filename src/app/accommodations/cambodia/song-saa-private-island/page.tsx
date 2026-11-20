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
                    <div style={{ color: 'rgba(245, 241, 230, 0.8)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>
                            <strong>Song Saa Private Island</strong> operates as a premier <strong>5 Star (Independent Luxury)</strong> ultra-luxury private island resort positioned in Koh Rong Archipelago, Cambodia. Featuring an architectural inventory of 24 overwater, jungle & ocean-view villas, the property is vetted by Asia Golf Specialists (AGS) for its suite comfort & rest quality (Reclaimed timber overwater villas) and direct arterial access to Angkor Golf Resort & Phokeethra Country Club.
                        </p>
                        <p style={{ marginBottom: '1rem' }}>
                            From a golf-logistics perspective, Song Saa Private Island minimizes daily transit friction across the Koh Rong Archipelago corridor while elevating off-course recovery through overwater spa, marine conservation, infinity pool and post-round recovery & wellness (Open-air ocean breeze spa pods). Every AGS itinerary anchored at Song Saa Private Island includes dedicated VIP executive transfers, cold-towel arrival staging, and direct bag-drop coordination between the concierge desk and your caddie master.
                        </p>
                        <p>
                            Our curatorial inspection also highlights Song Saa Private Island&apos;s breakfast & dining quality (Vista overwater fine dining & sunset bar), ensuring touring groups departing for dawn tee times receive tailored pre-round nutrition and seamless late-afternoon hospitality upon returning from the 18th green.
                        </p>
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
    inspectionDate="Spring 2026 Inspection"
    leadCurator="AGS Accommodations Review Team"
    leadCuratorTitle="Asia Golf Specialists"
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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How close is Song Saa Private Island to the nearest championship golf courses in Koh Rong Archipelago?","acceptedAnswer":{"@type":"Answer","text":"Song Saa Private Island is positioned in Koh Rong Archipelago, Cambodia, offering direct private transfer access to Angkor Golf Resort & Phokeethra Country Club. Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."}},{"@type":"Question","name":"What room or villa configurations work best for golf groups at Song Saa Private Island?","acceptedAnswer":{"@type":"Answer","text":"Song Saa Private Island features Luxury Suites & Private Pool Villas within a Ultra-Luxury Private Island Resort setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."}},{"@type":"Question","name":"What post-round recovery and dining amenities does Song Saa Private Island offer?","acceptedAnswer":{"@type":"Answer","text":"Guests at Song Saa Private Island enjoy Overwater Spa, Marine Conservation, Infinity Pool, alongside post-round recovery & wellness (Open-air ocean breeze spa pods) and breakfast & dining quality (Vista overwater fine dining & sunset bar)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."}},{"@type":"Question","name":"Can Asia Golf Specialists secure preferred group rates and upgrades at Song Saa Private Island?","acceptedAnswer":{"@type":"Answer","text":"Yes. As a preferred luxury golf tour operator in Cambodia, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Song Saa Private Island as part of a complete stay-and-play golf package."}}]}) }} />
                        
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {[
          {
                    "q": "How close is Song Saa Private Island to the nearest championship golf courses in Koh Rong Archipelago?",
                    "a": "Song Saa Private Island is positioned in Koh Rong Archipelago, Cambodia, offering direct private transfer access to Angkor Golf Resort & Phokeethra Country Club. Asia Golf Specialists coordinates door-to-tee VIP executive transport for every round on your itinerary."
          },
          {
                    "q": "What room or villa configurations work best for golf groups at Song Saa Private Island?",
                    "a": "Song Saa Private Island features Luxury Suites & Private Pool Villas within a Ultra-Luxury Private Island Resort setting. Our travel designers configure twin-share suites, single-occupancy sanctuaries, or multi-bedroom private pool villas depending on your group size and privacy preferences."
          },
          {
                    "q": "What post-round recovery and dining amenities does Song Saa Private Island offer?",
                    "a": "Guests at Song Saa Private Island enjoy Overwater Spa, Marine Conservation, Infinity Pool, alongside post-round recovery & wellness (Open-air ocean breeze spa pods) and breakfast & dining quality (Vista overwater fine dining & sunset bar)—ideal for post-round hydrotherapy, leaderboard debriefs, and early-morning tee time departures."
          },
          {
                    "q": "Can Asia Golf Specialists secure preferred group rates and upgrades at Song Saa Private Island?",
                    "a": "Yes. As a preferred luxury golf tour operator in Cambodia, AGS secures contracted touring rates, priority room allocations, and VIP welcome amenities at Song Saa Private Island as part of a complete stay-and-play golf package."
          }
].map((faq, i) => (
                            <details key={i} style={{ borderBottom: "1px solid rgba(212,175,55,0.12)", padding: "1.5rem 0" }}>
                                <summary style={{ fontSize: "1.05rem", fontWeight: 600, cursor: "pointer", color: "#F8FAFC", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                                    <span>{faq.q}</span>
                                    <span style={{ color: "#D4AF37", fontSize: "1.2rem", flexShrink: 0 }}>+</span>
                                </summary>
                                <p style={{ marginTop: "1rem", color: "rgba(248,250,252,0.65)", lineHeight: 1.75, fontSize: "1rem" }}>{faq.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <VenueItineraries venueHref="/accommodations/cambodia/song-saa-private-island/" venueName="Song Saa Private Island" venueType="accommodation" />

</main>
 );
}
