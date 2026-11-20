import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
    title: { absolute: "M Hotel Da Nang | Beachfront Luxury in Da Nang, Vietnam" },
    description: "M Hotel Da Nang – 5-star property directly across from My Khe Beach. Breathtaking ocean views, modern amenities, and close to top Central Coast golf courses.",
    keywords: ["M Hotel Da Nang", "Da Nang luxury hotel", "My Khe Beach hotel", "Central Vietnam golf hotel"],
    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/vietnam/m-hotel-danang/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "M Hotel Da Nang | Beachfront Luxury in Da Nang, Vietnam" },
        description: "M Hotel Da Nang – 5-star property directly across from My Khe Beach. Breathtaking ocean views, modern amenities, and close to top Central Coast golf courses.",
        url: "https://www.asiagolfspecialists.com/accommodations/vietnam/m-hotel-danang/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/vietnam/m-hotel-danang/m-hotel-danang-hero.webp",
            width: 1200,
            height: 630,
            alt: "M Hotel Da Nang | Beachfront Luxury in Da Nang, Vietnam – Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "M Hotel Da Nang | Beachfront Luxury in Da Nang, Vietnam" },
        description: "M Hotel Da Nang – 5-star property directly across from My Khe Beach. Breathtaking ocean views, modern amenities, and close to top Central Coast golf courses.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/vietnam/m-hotel-danang/m-hotel-danang-hero.webp"],
    },
};

const images = [
    { src: "/images/accommodations/vietnam/m-hotel-danang/m-hotel-danang-hero.webp", alt: "M Hotel Da Nang beachfront luxury My Khe Beach 2026", caption: "M Hotel Da Nang Frontage" },
    { src: "/images/accommodations/vietnam/m-hotel-danang/m-hotel-danang-beachfront.webp", alt: "M Hotel Da Nang ocean views My Khe Beach 2026", caption: "Panoramic Ocean Views" },
    { src: "/images/accommodations/vietnam/m-hotel-danang/m-hotel-danang-pool.webp", alt: "M Hotel Da Nang rooftop infinity pool Vietnam 2026", caption: "Rooftop Infinity Pool" },
    { src: "/images/accommodations/vietnam/m-hotel-danang/m-hotel-danang-lobby.webp", alt: "M Hotel Da Nang modern stylish lobby Vietnam 2026", caption: "Modern Styling & Lobby" },
    { src: "/images/accommodations/vietnam/m-hotel-danang/m-hotel-danang-bedroom-view.webp", alt: "M Hotel Da Nang luxury room with ocean view Vietnam 2026", caption: "Luxury Bedroom Suite" }
];

export default function AccommodationPage() {
    return (
        <main style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-tertiary)', minHeight: '100vh' }}>
            <Navbar />
            <header className="hero" style={{ minHeight: '85vh'}}>
                <div style={{ position: 'absolute', inset: 0, zIndex: 0, WebkitMaskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 65%, transparent 100%)' }}>
                    <Image 
                        src={images[0].src} 
                        alt="M Hotel Da Nang hero background" 
                        fill 
                        style={{ objectFit: 'cover' }} 
                        priority 
                    />
                    <div className="hero-overlay" style={{ position: 'absolute', inset: 0, zIndex: 2 }}></div>
                </div>
                <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                    <DestinationBackLink country="Vietnam" countryLink="/destinations/vietnam/accommodations/" />
                    <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Basecamp</div>
                    <h1 style={{ marginBottom: '1rem', fontSize: 'clamp(3rem, 6vw, 5.5rem)' }}>M Hotel<br /><span className="text-gold">Da Nang</span></h1>
                    <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }}>"Contemporary 5-star luxury overlooking the iconic My Khe Beach."</p>
                </div>
            </header>

            <section className="section" style={{ paddingTop: '4rem' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    <div className="article-content">
                        <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>Property <span className="text-gold">Specifications</span></h2>
                        <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
                            <tbody>
                                {[
                                    ['Rating', '5-Star Luxury'],
                                    ['Location', 'My Khe Beach, Da Nang'],
                                    ['Vibe', 'Modern, Beachfront, Sophisticated'],
                                    ['Rooms', 'Boutique Contemporary Suites'],
                                    ['Highlights', 'Dual Infinity Pools, High-tech Gym, Ocean Views']
                                ].map(([k, v], i) => (
                                    <tr key={i}>
                                        <th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)', color: 'var(--color-gold)' }}>{k}</th>
                                        <td style={{ padding: '1rem', borderBottom: '1px solid rgba(212,175,55,0.2)' }}>{v}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h2 style={{ marginBottom: '2rem', fontSize: 'clamp(2rem, 3vw, 2.75rem)' }}>The <span className="text-gold">Overview</span></h2>
                        <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
                            <p>M Hotel Da Nang represents the pinnacle of modern coastal luxury in Central Vietnam. Located directly across from the pristine white sands of My Khe Beach, this 5-star property is defined by its striking vertical greenery, contemporary architectural lines, and panoramic ocean vistas from nearly every suite.</p>
                            <p>For the discerning golfer, M Hotel provides an immaculate base of operations. The rooftop features dual infinity pools—one positioned for sunrise over the ocean and the other capturing the city sunset—alongside a world-class wellness spa and a high-tech fitness center. Dining options at the in-house restaurant, Du Du, include premium international and Vietnamese cuisine.</p>
                            <p>Its strategic location in Da Nang ensures fast, efficient access to the region's elite championship courses, including BRG Da Nang, Montgomerie Links, and Hoiana Shores, making it a highly requested basecamp for Asia Golf Specialists' private itineraries.</p>
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
                                <div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>
                                    {img.caption || `Image ${i + 1}`}
                                </div>
                            </div>
                        ))}
                    </div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/vietnam/m-hotel-danang/"
  />
  </div>
  </section>

            <section className="section">
                <div className="container text-center">
                    <h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from M Hotel Da Nang to the Central Coast golf circuit.</p>
                    <Link href="/quote/" className="btn-primary">Speak to a Specialist</Link>
                </div>
            </section>

            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                    {
                        "@type": "LodgingBusiness",
                        "name": "M Hotel Da Nang",
                        "starRating": { "@type": "Rating", "ratingValue": "5" },
                        "address": { 
                            "@type": "PostalAddress", 
                            "streetAddress": "27 Nguyen Phan Vinh",
                            "addressLocality": "Hoi An",
                            "addressRegion": "Da Nang",
                            "postalCode": "550000",
                            "addressCountry": "VN" 
                        },
                        "telephone": "+61 412 345 678",
                        "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                        "url": "https://www.asiagolfspecialists.com/accommodations/vietnam/m-hotel-danang/"
                    },
                    {
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com" },
                            { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://www.asiagolfspecialists.com/destinations/vietnam" },
                            { "@type": "ListItem", "position": 3, "name": "Vietnam Accommodations", "item": "https://www.asiagolfspecialists.com/destinations/vietnam/accommodations" },
                            { "@type": "ListItem", "position": 4, "name": "M Hotel Da Nang", "item": "https://www.asiagolfspecialists.com/accommodations/vietnam/m-hotel-danang" }
                        ]
                    }
                ]
            }) }} />

            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Fronting My Khe Beach along Vo Nguyen Giap Boulevard, M Hotel Da Nang brings sharp contemporary lines, high-floor ocean panoramas, and dual infinity pools to Da Nang&apos;s vibrant beachfront strip. Our site verifications confirm crisp soundproofing, fast lift banks, and smooth curbside loading — practical details that matter when fourballs are rolling out at 6:30 AM with full golf bags.</p>
                        <p style={{ marginBottom: '1rem' }}>Staying on Da Nang&apos;s My Khe corridor keeps morning drives short in every direction: Montgomerie Links and BRG Da Nang are 15 to 20 minutes south, Hoiana Shores is 35 minutes south, Ba Na Hills is 40 minutes inland, and Da Nang International Airport (DAD) is just 15 minutes west.</p>
                        <p>After 18 holes, golfers split their afternoon between the rooftop infinity pool overlooking the East Sea, the well-equipped gym and spa, and Da Nang&apos;s bustling beachfront seafood restaurants and Han River bars.</p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="M Hotel Da Nang"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/vietnam/m-hotel-danang/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/vietnam/m-hotel-danang/m-hotel-danang-hero.webp"
    addressLocality="Da Nang"
    addressCountry="VN"
    overallScore={4.6}
    maxScore={5.0}
    gradeBadge="Modern Coastal City Hotel • Da Nang"
    inspectionDate="Site-Verified by AGS On-Ground Team"
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.4,
            highlight: "Crisp modern city rooms"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.4,
            highlight: "Beachfront tower positioning"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.4,
            highlight: "Rooftop oceanview pool & fitness"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.3,
            highlight: "Hearty international morning buffet"
      }
]}
    verdict="A sleek, contemporary city-beach hotel offering dependable comfort, swift airport access, and prime positioning for both Da Nang golf courses and city nightlife."
  />


            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How far is M Hotel Da Nang from Da Nang's championship golf courses?","acceptedAnswer":{"@type":"Answer","text":"Montgomerie Links and BRG Da Nang Golf Resort are 15–20 minutes south, Hoiana Shores Golf Club is 35 minutes south, and Ba Na Hills Golf Club is approximately 40 minutes inland via private AGS vehicle."}},{"@type":"Question","name":"Why choose M Hotel Da Nang over staying further south in Hoi An?","acceptedAnswer":{"@type":"Answer","text":"M Hotel Da Nang puts you 15 minutes from Da Nang Airport, directly opposite My Khe Beach, and close to Da Nang's modern nightlife, seafood dining, and Han River skyline — cutting overall road time across multi-course Da Nang itineraries."}},{"@type":"Question","name":"Which room tiers at M Hotel Da Nang are recommended for golf groups?","acceptedAnswer":{"@type":"Answer","text":"Ocean Front Deluxe Twin rooms and Panorama Suites provide wide sea views, clean modern bathrooms, and comfortable storage space for golf luggage."}},{"@type":"Question","name":"Are there good dining and post-round drink options within walking distance?","acceptedAnswer":{"@type":"Answer","text":"Yes. Vo Nguyen Giap beachfront promenade is lined with renowned local seafood venues, craft breweries, casual beach bars, and international restaurants within a 5-minute walk."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "How far is M Hotel Da Nang from Da Nang's championship golf courses?",
    "a": "Montgomerie Links and BRG Da Nang Golf Resort are 15–20 minutes south, Hoiana Shores Golf Club is 35 minutes south, and Ba Na Hills Golf Club is approximately 40 minutes inland via private AGS vehicle."
  },
  {
    "q": "Why choose M Hotel Da Nang over staying further south in Hoi An?",
    "a": "M Hotel Da Nang puts you 15 minutes from Da Nang Airport, directly opposite My Khe Beach, and close to Da Nang's modern nightlife, seafood dining, and Han River skyline — cutting overall road time across multi-course Da Nang itineraries."
  },
  {
    "q": "Which room tiers at M Hotel Da Nang are recommended for golf groups?",
    "a": "Ocean Front Deluxe Twin rooms and Panorama Suites provide wide sea views, clean modern bathrooms, and comfortable storage space for golf luggage."
  },
  {
    "q": "Are there good dining and post-round drink options within walking distance?",
    "a": "Yes. Vo Nguyen Giap beachfront promenade is lined with renowned local seafood venues, craft breweries, casual beach bars, and international restaurants within a 5-minute walk."
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
        
            <AccommodationConciergeBlock hotelName="M Hotel Da Nang" location="Da Nang" countryName="Vietnam" />

            <VenueItineraries venueHref="/accommodations/vietnam/m-hotel-danang/" venueName="M Hotel Da Nang" venueType="accommodation" />

</main>
    );
}
