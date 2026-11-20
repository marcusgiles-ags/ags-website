import AccommodationConciergeBlock from "@/components/AccommodationConciergeBlock";
import VenueItineraries from "@/components/VenueItineraries";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import DestinationBackLink from "@/components/DestinationBackLink";
import CuratorScorecard from "@/components/CuratorScorecard";
import VenueVideoSection from "@/components/media/VenueVideoSection";

export const metadata = {
 title: { absolute: "Riva Surya Bangkok | Bangkok, Thailand" },
 description: "A boutique luxury hotel along the Chao Phraya River, offering a perfect base for exploring Bangkok and its premium golf courses.",
 keywords: ["Riva Surya Bangkok","Bangkok boutique hotel golf","Chao Phraya luxury accommodation","Thailand golf hotel"],

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/accommodations/thailand/riva-surya-bangkok/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Riva Surya Bangkok | Bangkok, Thailand" },
        description: "A boutique luxury hotel along the Chao Phraya River, offering a perfect base for exploring Bangkok and its premium golf courses.",
        url: "https://www.asiagolfspecialists.com/accommodations/thailand/riva-surya-bangkok/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/accommodations/thailand/riva-surya-bangkok/1.webp",
            width: 1200,
            height: 630,
            alt: "Riva Surya Bangkok | Bangkok, Thailand | Asia Golf Specialists — Asia Golf Specialists",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Riva Surya Bangkok | Bangkok, Thailand" },
        description: "A boutique luxury hotel along the Chao Phraya River, offering a perfect base for exploring Bangkok and its premium golf courses.",
        images: ["https://www.asiagolfspecialists.com/images/accommodations/thailand/riva-surya-bangkok/1.webp"],
    },
};

const images = [
 { src: "/images/accommodations/thailand/riva-surya-bangkok/1.webp", alt: "Riva Surya Bangkok - Riva Surya Bangkok Riverfront - Premium Southeast Asia Golf Tours", caption: "Riva Surya Bangkok Riva Surya Bangkok Riverfront" },
 { src: "/images/accommodations/thailand/riva-surya-bangkok/2.webp", alt: "Riva Surya Bangkok - Riva Surya Bangkok - Premium Southeast Asia Golf Tours", caption: "Riva Surya Bangkok Riva Surya Bangkok" },
 { src: "/images/accommodations/thailand/riva-surya-bangkok/3.webp", alt: "Riva Surya Bangkok - Riva Surya Bangkok Pool - Premium Southeast Asia Golf Tours", caption: "Riva Surya Bangkok Riva Surya Bangkok Pool" },
 { src: "/images/accommodations/thailand/riva-surya-bangkok/4.webp", alt: "Riva Surya Bangkok - Riva Surya Bangkok Pool - Premium Southeast Asia Golf Tours", caption: "Riva Surya Bangkok Riva Surya Bangkok Pool" },
 { src: "/images/accommodations/thailand/riva-surya-bangkok/5.webp", alt: "Riva Surya Bangkok - Riva Surya Deluxe Room - Premium Southeast Asia Golf Tours", caption: "Riva Surya Bangkok Riva Surya Deluxe Room" }
];

export default function AccommodationPage() {
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
<DestinationBackLink country="Thailand" countryLink="/destinations/thailand/accommodations/" />
 <div className="badge" style={{ display: 'inline-block', padding: '0.5rem 1rem', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>AGS Preferred Property — Thailand</div>
 <h1 style={{ marginBottom: '1rem' }}>Riva Surya Bangkok</h1>
 <p style={{ fontSize: '1.25rem', maxWidth: '700px', fontStyle: 'italic', color: '#ccc' }} itemProp="description" id="exec-summary">"A boutique luxury hotel along the Chao Phraya River, offering a perfect base for exploring Bangkok and its premium golf courses."</p>
 </div>
 </header>
 <section className="section">
 <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
 <div className="article-content">
 <h2 style={{ marginBottom: '2rem' }}>Property <span className="text-gold">Specifications</span></h2>
 <table style={{ width: '100%', borderCollapse: 'collapse', border: '1px solid rgba(212, 175, 55, 0.2)' }}>
 <tbody>
  <tr key="Category"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Category</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Riverside Boutique Hotel</td></tr>
  <tr key="Star Rating"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Star Rating</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>4.5 Star</td></tr>
  <tr key="Location"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Location</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Phra Arthit Road, Bangkok</td></tr>
  <tr key="Total Rooms"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Total Rooms</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>68 Rooms</td></tr>
  <tr key="Setting"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Setting</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Along the Chao Phraya River</td></tr>
  <tr key="Nearest Golf"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Nearest Golf</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Alpine Golf Club (60 min)</td></tr>
  <tr key="Key Amenity"><th style={{ textAlign: 'left', padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)', color: 'var(--color-gold)' }}>Key Amenity</th><td style={{ padding: '1rem', borderBottom: '1px solid rgba(212, 175, 55, 0.2)' }}>Riverside Pool, Babble & Rum Restaurant</td></tr>
 </tbody>
 </table>
 </div>
 <div>
 <h2 style={{ marginBottom: '2rem' }}>The <span className="text-gold">Experience</span></h2>
 <div style={{ color: '#ccc', lineHeight: '1.8', fontSize: '1.1rem' }}>
  <p>Riva Surya Bangkok offers a quintessential riverside experience along the majestic Chao Phraya River. The hotel seamlessly blends contemporary design with classic Thai elegance, creating a serene urban oasis amidst the bustling city. Its boutique nature ensures personalized service and a tranquil atmosphere after a day on the links.</p>
  <p>For golfers, the hotel's location is a strategic masterpiece. While situated in the historic heart of Bangkok, it provides easy access to the city's network of expressways, connecting you to premier courses like Alpine Golf Club and Thai Country Club. The juxtaposition of exploring ancient temples by day and playing world-class fairways by afternoon is effortless from this base.</p>
  <p>AGS highly recommends Riva Surya for groups who prefer an intimate, boutique setting over massive chain hotels. The riverside pool and the celebrated Babble & Rum restaurant offer perfect settings for recounting the day's best shots while watching the river traffic glide by.</p>
 </div>
 </div>
 </div>
 </section>
  <section className="section" style={{ backgroundColor: 'rgba(255,255,255,0.02)', paddingTop: '4.5rem', paddingBottom: '3.5rem' }}><div className="container"><h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Property <span className="text-gold">Gallery</span></h2><div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>{images.map((img, i) => (<div key={i} style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid rgba(212, 175, 55, 0.1)', display: 'block' }}><Image src={img.src} alt={img.alt} width={400} height={300} style={{ objectFit: 'cover', width: '100%', height: '150px' }} /><div style={{ padding: '0.75rem', fontSize: '0.8rem', color: 'var(--color-secondary)', textAlign: 'center', backgroundColor: 'var(--color-primary)' }}>{(img as any).caption || `Image ${i + 1}`}</div></div>))}</div>

  {/* Elegantly presented venue video box below the preview chain */}
  <VenueVideoSection
    pagePath="/accommodations/thailand/riva-surya-bangkok/"
  />
  </div>
  </section>
 <section className="section"><div className="container text-center"><h2 style={{ marginBottom: '1rem' }}>Book via <span className="text-gold">Asia Golf Specialists</span></h2><p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#ccc' }}>AGS coordinates all tee times and transfers from Riva Surya Bangkok to the golf circuit.</p><Link href="/quote/" className="btn-primary">Speak to a Specialist</Link></div></section>
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@graph": [
                        {
                            "@type": "LodgingBusiness",
                            "name": "Riva Surya Bangkok",
                            "starRating": { "@type": "Rating", "ratingValue": "4.5" },
                            "address": { "@type": "PostalAddress", "addressLocality": "Bangkok", "addressCountry": "TH" },
                            "image": `https://www.asiagolfspecialists.com${images[0].src}`,
                            "url": "https://www.asiagolfspecialists.com/accommodations/thailand/riva-surya-bangkok/",
                          "sameAs": ["https://www.rivasuryabangkok.com/","https://www.forbestravelguide.com/hotels/bangkok-thailand/riva-surya-bangkok"]
                        },
                        {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
                                { "@type": "ListItem", "position": 2, "name": "Accommodations", "item": "https://www.asiagolfspecialists.com/accommodations/" },
                                { "@type": "ListItem", "position": 3, "name": "Thailand", "item": "https://www.asiagolfspecialists.com/destinations/thailand/accommodations/" },
                                { "@type": "ListItem", "position": 4, "name": "Riva Surya Bangkok", "item": "https://www.asiagolfspecialists.com/accommodations/thailand/riva-surya-bangkok/" }
                            ]
                        }
                    ]
                }) }} />
  
            {/* GEO Executive Summary / AI Citation Block */}
            <section className="geo-summary" style={{ background: 'var(--color-primary)', padding: '4rem 2rem', borderBottom: '1px solid rgba(212, 175, 55, 0.1)' }}>
                <div className="container" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                    <h2 style={{ color: 'var(--color-gold)', fontSize: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>The Curator&apos;s Brief</h2>
                    <div style={{ color: 'rgba(245, 241, 230, 0.85)', fontSize: '1.1rem', lineHeight: 1.8, textAlign: 'left' }}>
                        <p style={{ marginBottom: '1rem' }}>Positioned directly on the banks of the Chao Phraya River along historic Phra Arthit Road, the 68-room Riva Surya Bangkok is a stylish boutique riverside alternative to Bangkok&apos;s sprawling glass towers — personally stayed at and vetted by Marcus. Its river-facing balcony rooms watch longtail boats and illuminated temple ferries glide past right below your terrace.</p>
                        <p style={{ marginBottom: '1rem' }}>For golfers who want authentic Old Bangkok atmosphere, Grand Palace proximity, and breezy riverfront evenings while playing the city&apos;s northern and western courses, AGS schedules prompt morning departures from Phra Arthit before peak traffic — reaching Nikanti Golf Club, Thai Country Club, Alpine Golf Club, or Riverdale in 50 to 70 minutes.</p>
                        <p>After a warm round on Bangkok&apos;s championship layouts, the riverfront swimming pool and Babble &amp; Rum&apos;s waterside terrace provide relaxed sunset drinks and modern Thai dining without the formality of a massive convention hotel.</p>
                    </div>
                </div>
            </section>

  {/* AGS Curatorial Evaluation & Verified Review */}
  <CuratorScorecard
    itemType="Hotel"
    itemName="Riva Surya Bangkok"
    itemUrl="https://www.asiagolfspecialists.com/accommodations/thailand/riva-surya-bangkok/"
    itemImage="https://www.asiagolfspecialists.com/images/accommodations/thailand/riva-surya-bangkok/1.webp"
    addressLocality="Bangkok"
    addressCountry="TH"
    overallScore={4.7}
    maxScore={5.0}
    gradeBadge="Chao Phraya Riverfront Boutique • Bangkok"
    inspectionDate="Personally Stayed & Inspected — Marcus Giles"
    leadCurator="Marcus Giles"
    leadCuratorTitle="Founder & Managing Director, Asia Golf Specialists"
    criteria={[
      {
            label: "Suite Comfort & Rest Quality",
            score: 9.6,
            highlight: "Riverfront balcony rooms with views"
      },
      {
            label: "Villa & Room Privacy",
            score: 9.6,
            highlight: "Boutique riverbank setting"
      },
      {
            label: "Post-Round Recovery & Wellness",
            score: 9.4,
            highlight: "Riverside pool & peaceful sun deck"
      },
      {
            label: "Breakfast & Dining Quality",
            score: 9.4,
            highlight: "Babble & Rum waterside dining & cocktails"
      }
]}
    verdict="A stylish riverfront retreat on the historic Chao Phraya River. Perfect for travelers seeking authentic Bangkok riverside charm and breezy sunset cocktails after city rounds."
  />



            {/* FAQ Section */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Why choose Riva Surya Bangkok over a Sukhumvit high-rise hotel for a Bangkok golf trip?","acceptedAnswer":{"@type":"Answer","text":"Riva Surya offers intimate 68-room riverside charm, direct Chao Phraya River ferry access right beside the hotel, walkable heritage lanes, and relaxed sunset drinks at Babble & Rum — ideal for couples and small groups who prefer character over corporate towers."}},{"@type":"Question","name":"What are realistic morning golf transfer times from Riva Surya Bangkok?","acceptedAnswer":{"@type":"Answer","text":"Allow 45–55 minutes to Riverdale Golf Club, 55–65 minutes to Alpine Golf Club or Nikanti Golf Club, and 60–70 minutes to Thai Country Club or Amata Spring with early AGS morning departures."}},{"@type":"Question","name":"Which room categories at Riva Surya Bangkok have river balconies?","acceptedAnswer":{"@type":"Answer","text":"Riva Rooms and Premium Riva Suites face the Chao Phraya River directly with private timber balconies; Urban Rooms face Phra Arthit Road and suit budget-conscious stays."}},{"@type":"Question","name":"Is Phra Arthit Road convenient for sightseeing and evening dining?","acceptedAnswer":{"@type":"Answer","text":"Yes. The Grand Palace, Wat Pho, Wat Arun (via river ferry), indie riverside cafes, and boutique cocktail bars sit within minutes of the front lobby, while Asiatique and ICONSIAM are a scenic boat ride south."}}]}) }} />
            <section style={{ backgroundColor: "rgba(212,175,55,0.04)", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "5rem 0" }}>
                <div className="container" style={{ maxWidth: "860px" }}>
                    <h2 style={{ fontFamily: "var(--font-primary-serif)", fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, marginBottom: "2.5rem", color: "#D4AF37", textAlign: "center" }}>
                        Frequently Asked Questions
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                        {([
  {
    "q": "Why choose Riva Surya Bangkok over a Sukhumvit high-rise hotel for a Bangkok golf trip?",
    "a": "Riva Surya offers intimate 68-room riverside charm, direct Chao Phraya River ferry access right beside the hotel, walkable heritage lanes, and relaxed sunset drinks at Babble & Rum — ideal for couples and small groups who prefer character over corporate towers."
  },
  {
    "q": "What are realistic morning golf transfer times from Riva Surya Bangkok?",
    "a": "Allow 45–55 minutes to Riverdale Golf Club, 55–65 minutes to Alpine Golf Club or Nikanti Golf Club, and 60–70 minutes to Thai Country Club or Amata Spring with early AGS morning departures."
  },
  {
    "q": "Which room categories at Riva Surya Bangkok have river balconies?",
    "a": "Riva Rooms and Premium Riva Suites face the Chao Phraya River directly with private timber balconies; Urban Rooms face Phra Arthit Road and suit budget-conscious stays."
  },
  {
    "q": "Is Phra Arthit Road convenient for sightseeing and evening dining?",
    "a": "Yes. The Grand Palace, Wat Pho, Wat Arun (via river ferry), indie riverside cafes, and boutique cocktail bars sit within minutes of the front lobby, while Asiatique and ICONSIAM are a scenic boat ride south."
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

            <AccommodationConciergeBlock hotelName="Riva Surya Bangkok" location="Bangkok" countryName="Thailand" />

            <VenueItineraries venueHref="/accommodations/thailand/riva-surya-bangkok/" venueName="Riva Surya Bangkok" venueType="accommodation" />

</main>
 );
}
