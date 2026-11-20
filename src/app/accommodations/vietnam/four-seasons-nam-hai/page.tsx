import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {

    title: { absolute: "Four Seasons Resort The Nam Hai | Hoi An Golf Villas" },
    description: "Experience ultimate luxury at Four Seasons Nam Hai Hoi An. 5-star golf, UNESCO sites, Vietnam/Thailand tours. Book with Asia Golf Specialists.",
    keywords: ["Four Seasons Nam Hai Hoi An", "luxury golf resort Central Vietnam", "Five-star accommodation Da Nang", "best beach resort Hoi An", "golf retreat vietnam"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/four-seasons-nam-hai/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Four Seasons Resort The Nam Hai | Hoi An Golf Villas" },
        description: "Experience ultimate luxury at Four Seasons Nam Hai Hoi An. 5-star golf, UNESCO sites, Vietnam/Thailand tours. Book with Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/four-seasons-nam-hai/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/four-seasons-nam-hai/vietnam-luxury-hotel-four-seasons-nam-hai-beach-pool-1.webp",
            width: 1200,
            height: 630,
            alt: "Four Seasons Resort The Nam Hai | Pure Luxury Golf Recovery Hoi An | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Four Seasons Resort The Nam Hai | Hoi An Golf Villas" },
        description: "Experience ultimate luxury at Four Seasons Nam Hai Hoi An. 5-star golf, UNESCO sites, Vietnam/Thailand tours. Book with Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/four-seasons-nam-hai/vietnam-luxury-hotel-four-seasons-nam-hai-beach-pool-1.webp"],
    },
};

const images = [
    { src: "/images/accommodations/vietnam/four-seasons-nam-hai/vietnam-luxury-hotel-four-seasons-nam-hai-beach-pool-1.webp", alt: "Four Seasons Resort The Nam Hai Beachfront Infinity Pool at Sunrise Hoi An Vietnam", caption: "Beachfront Infinity Pool at Sunrise" },
    { src: "/images/accommodations/vietnam/four-seasons-nam-hai/vietnam-luxury-hotel-four-seasons-nam-hai-villa-pool-2.webp", alt: "Four Seasons Resort The Nam Hai Private Villa Pool and Garden Hoi An Vietnam", caption: "Private Villa Pool and Garden" },
    { src: "/images/accommodations/vietnam/four-seasons-nam-hai/vietnam-luxury-hotel-four-seasons-nam-hai-beach-villa-3.webp", alt: "Four Seasons Resort The Nam Hai Zen-Inspired Beachfront Villa Interior Hoi An Vietnam", caption: "Zen-Inspired Beachfront Villa Interior" },
    { src: "/images/accommodations/vietnam/four-seasons-nam-hai/vietnam-luxury-hotel-four-seasons-nam-hai-suite-5.webp", alt: "Four Seasons Resort The Nam Hai Luxury Suite Interior Hoi An Vietnam", caption: "Luxury Suite Interior" },
    { src: "/images/accommodations/vietnam/four-seasons-nam-hai/four-seasons-resort-the-nam-hai-hoi-an-9.webp", alt: "Four Seasons Resort The Nam Hai Grounds and Landscaping Hoi An Vietnam", caption: "Resort grounds and tropical landscaping" },
];

export default function FourSeasonsNamHai() {
    return (
        <main style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-tertiary)', minHeight: '100vh' }}>
            <Navbar />

            <header className="hero" style={{ minHeight: '85vh' }}>
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
<DestinationBackLink country="Vietnam" countryLink="/destinations/vietnam/accommodations/" />
                    <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Platinum Preferred — A Hoi An Masterpiece</div>
                    <h1 style={{ marginBottom: '1rem' }}>Four Seasons <br /><span className="text-gold">The Nam Hai</span></h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"Zen-inspired beachfront elegance where ancient culture meets modern recovery."</p>
                </div>
            </header>

            <section className="section">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    <div className="article-content">
                        <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
                        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                            <tbody>
                                {[
                                    ["Category", "Ultra-Luxury All-Villa Beachfront Resort"],
                                    ["Star Rating", "5 Star Ultra-Deluxe"],
                                    ["Location", "Hoi An corridor, Central Vietnam"],
                                    ["Villa Configuration", "Pool Villas & Residence Villas"],
                                    ["Unique Factor", "Portal to 3 UNESCO World Heritage Sites"],
                                    ["Nearest Golf", "Montgomerie Links & BRG Da Nang (5-10 mins)"],
                                    ["Key Amenity", "Three-tiered Infinity Pool, Signature Cooking Academy"],
                                    ["Global Recognition", (
                                        <span key="rec">
                                            <a href="https://www.forbestravelguide.com/hotels/vietnam-vietnam/four-seasons-resort-the-nam-hai-hoi-an" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Forbes 5-Star</a>
                                            {' • '}
                                            <a href="https://guide.michelin.com/us/en" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Michelin Guide Selected</a>
                                            {' • '}
                                            <a href="https://www.virtuoso.com/travel/luxury-hotels" target="_blank" rel="noopener noreferrer" style={{ color: '#D4AF37', textDecoration: 'underline', textUnderlineOffset: '3px' }}>Virtuoso Preferred</a>
                                        </span>
                                    )],
                                ].map(([k, v], i, arr) => (
                                    <tr key={k as string}>
                                        <th style={{ textAlign: 'left', padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none', color: 'var(--color-gold)' }}>{k as string}</th>
                                        <td style={{ padding: '1rem', borderBottom: i < arr.length - 1 ? '1px solid rgba(212, 175, 55, 0.2)' : 'none' }}>{v}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
                        <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <p>Four Seasons Resort The Nam Hai is a masterclass in architectural elegance and cultural depth. Located on one of the Forbes-rated best beaches in the world, the resort provides a serene 'zen' sanctuary that acts as the perfect counterbalance to the strategic rigors of the Central Coast's championship golf courses.</p>
                            <p>The resort’s three iconic swimming pools descend in tiered levels towards the East Sea, flanked by lush tropical gardens and private villas designed with 'Feng Shui' principles. For golfers, the location is unbeatable, offering high-fidelity proximity to the region's premier links courses while remaining a portal to the ancient world of Hoi An.</p>
                            <p>Beyond the fairway, the resort’s Gastronomy Academy and award-winning 'Heart of the Earth' Spa offer technical levels of restoration and cultural immersion that are unmatched in Southeast Asia.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                        {images.map((img, i) => (
                            <div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}>
                                <Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} />
                                <div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption}</div>
                            </div>
                        ))}
                    </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/vietnam/four-seasons-nam-hai/"
  />
  </div>
  </section>

            <section className="section"><div className="container text-center">
                <h2 style={{ marginBottom: '1rem' }}>Experience <span className="text-gold">The Nam Hai</span></h2>
                <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS provides dedicated luxury concierge services and elite golf bookings for all Four Seasons guests.</p>
                <Link href="/quote/" className="btn-primary">Book Your Nam Hai Experience</Link>
            </div></section>

            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Four Seasons Resort The Nam Hai",
                            "description": "Zen-inspired luxury beachfront villa resort in Hoi An, Central Vietnam. Portal to three UNESCO World Heritage sites.",
                            "starRating": { "@type": "Rating", "ratingValue": "5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Hoi An", "addressCountry": "VN" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/four-seasons-nam-hai/",
                            "award": [
                                "Forbes Travel Guide Five-Star Award",
                                "Michelin Guide Selected Hotel",
                                "Virtuoso Preferred Property"
                            ],
                            "memberOf": [
                                { "@type": "ProgramMembership", "programName": "Virtuoso Luxury Travel Network" },
                                { "@type": "Organization", "name": "Four Seasons Hotels and Resorts" }
                            ],
                          "sameAs": ["https://www.fourseasons.com/thenamhai/","https://www.forbestravelguide.com/hotels/vietnam-vietnam/four-seasons-resort-the-nam-hai-hoi-an","https://guide.michelin.com/us/en","https://www.cntraveler.com/hotels/vietnam/hoi-an/four-seasons-resort-the-nam-hai"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Vietnam", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Four Seasons The Nam Hai", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/four-seasons-nam-hai/" }
                            ]
                        }
                    ]
                })
            }} />

            
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Spread along one kilometre of quiet Ha My Beach between Da Nang and Hoi An, Four Seasons Resort The Nam Hai is Central Vietnam&apos;s ultimate ultra-luxury all-villa retreat — and a property Marcus has personally stayed at and benchmarks every coastal resort against. Every guest stays in a standalone Feng Shui-inspired one-bedroom villa or a multi-bedroom beachfront pool residence with dedicated Villa Attendant service.</p>
                        <p style={{ marginBottom: '1rem' }}>Its position on the coastal strip puts golfers in the fastest lane to Central Vietnam&apos;s headline courses: Montgomerie Links and BRG Da Nang (Norman &amp; Nicklaus) sit just 5 to 10 minutes north, Hoiana Shores Golf Club is 20 minutes south, and Ba Na Hills is roughly 45 minutes inland. Your AGS driver meets your Villa Attendant directly at the main arrival pavilion so golf clubs transition seamlessly.</p>
                        <p>Between rounds, three tiered infinity pools step straight down toward the East Sea, while the Heart of the Earth Spa (floating pavilions over a lotus lagoon), Cooking Academy, and La Sen beachfront dining deliver unmatched downtime for both avid players and non-golfing partners.</p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Four Seasons Resort The Nam Hai"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/four-seasons-nam-hai/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/four-seasons-nam-hai/vietnam-luxury-hotel-four-seasons-nam-hai-beach-pool-1.webp"
    addressLocality="Hoi An"
    addressCountry="VN"
    overallScore={4.9}
    maxScore={5.0}
    gradeBadge="Forbes 5-Star • Michelin Selected • Central Coast"
    inspectionDate="Personally Stayed & Inspected — Marcus Giles"
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
    criteria={[
      { label: "Suite Comfort & Rest Quality", score: 9.9, highlight: "Feng Shui pool villas, acoustic privacy" },
      { label: "Villa & Beachfront Privacy", score: 9.9, highlight: "Direct private Ha My Beach frontage" },
      { label: "Post-Round Recovery & Wellness", score: 9.8, highlight: "Three-tiered infinity pools & spa" },
      { label: "Breakfast & Dining Quality", score: 9.7, highlight: "Gourmet pre-round dining & Cooking Academy" },
    ]}
    verdict="The quintessential luxury golf basecamp in Central Vietnam. Just minutes from Montgomerie Links and BRG Da Nang, The Nam Hai pairs palatial beachfront pool villas with world-class post-round wellness. The three-tiered infinity pool descending to the East Sea is the ultimate setting for post-round debriefs."
  />


            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Which golf courses are closest to Four Seasons Resort The Nam Hai?","acceptedAnswer":{"@type":"Answer","text":"Montgomerie Links and BRG Da Nang Golf Resort are both 5–10 minutes north along the coastal boulevard, Hoiana Shores Golf Club is 20 minutes south, and Ba Na Hills Golf Club is approximately 45 minutes inland."}},{"@type":"Question","name":"Are the multi-bedroom Pool Villas at The Nam Hai suitable for travelling golf groups?","acceptedAnswer":{"@type":"Answer","text":"Yes. The Nam Hai's 3-, 4-, and 5-bedroom Beachfront Pool Villas feature private heated pools, full living/dining pavilions, and dedicated butler service — making them the pinnacle private estate option for executive foursomes or 8-player squads."}},{"@type":"Question","name":"How far is Four Seasons The Nam Hai from Hoi An Ancient Town and Da Nang Airport?","acceptedAnswer":{"@type":"Answer","text":"Hoi An Ancient Town is 15 minutes south via resort shuttle or private vehicle, and Da Nang International Airport (DAD) is 30 minutes north."}},{"@type":"Question","name":"What makes The Nam Hai stand out for couples where only one partner plays golf?","acceptedAnswer":{"@type":"Answer","text":"Non-golfing partners enjoy private Ha My beach frontage, three oceanfront pools, singing-bowl sound healing at Heart of the Earth Spa, Vietnamese culinary classes, and complimentary shuttles into Hoi An's lantern quarter."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "Which golf courses are closest to Four Seasons Resort The Nam Hai?",
    "a": "Montgomerie Links and BRG Da Nang Golf Resort are both 5–10 minutes north along the coastal boulevard, Hoiana Shores Golf Club is 20 minutes south, and Ba Na Hills Golf Club is approximately 45 minutes inland."
  },
  {
    "q": "Are the multi-bedroom Pool Villas at The Nam Hai suitable for travelling golf groups?",
    "a": "Yes. The Nam Hai's 3-, 4-, and 5-bedroom Beachfront Pool Villas feature private heated pools, full living/dining pavilions, and dedicated butler service — making them the pinnacle private estate option for executive foursomes or 8-player squads."
  },
  {
    "q": "How far is Four Seasons The Nam Hai from Hoi An Ancient Town and Da Nang Airport?",
    "a": "Hoi An Ancient Town is 15 minutes south via resort shuttle or private vehicle, and Da Nang International Airport (DAD) is 30 minutes north."
  },
  {
    "q": "What makes The Nam Hai stand out for couples where only one partner plays golf?",
    "a": "Non-golfing partners enjoy private Ha My beach frontage, three oceanfront pools, singing-bowl sound healing at Heart of the Earth Spa, Vietnamese culinary classes, and complimentary shuttles into Hoi An's lantern quarter."
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

            <AccommodationConciergeBlock hotelName="Four Seasons Resort The Nam Hai" location="Hoi An" countryName="Vietnam" />

            <VenueItineraries venueHref="/accommodations/vietnam/four-seasons-nam-hai/" venueName="Four Seasons Resort The Nam Hai" venueType="accommodation" />

</main>
    );
}
