import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export const metadata = {
 title: { absolute: "Premium Golf Courses in Cambodia | Kingdom of Wonder" },
 description: "Experience Cambodia's championship golf: Angkor Golf Resort, Phokeethra, and Vattanac. Curated by Asia Golf Specialists.",

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/destinations/cambodia/courses/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Premium Golf Courses in Cambodia | Kingdom of Wonder" },
        description: "Experience Cambodia's championship golf: Angkor Golf Resort, Phokeethra, and Vattanac. Curated by Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/destinations/cambodia/courses/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/destinations/cambodia/hero/cambodia-angkor-wat-majestic-hero.webp",
            width: 1200,
            height: 630,
            alt: "Cambodia championship golf courses — Angkor Golf Resort",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Premium Golf Courses in Cambodia | Kingdom of Wonder" },
        description: "Experience Cambodia's championship golf: Angkor Golf Resort, Phokeethra, and Vattanac. Curated by Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/destinations/cambodia/hero/cambodia-angkor-wat-majestic-hero.webp"],
    },
};

export default function CambodiaCourses() {
 return (
 <div style={{ backgroundColor: '#020617', minHeight: '100vh', color: '#F8FAFC' }}>
 <Navbar />

 <header className="hero" style={{
 minHeight: '75vh',
 display: 'flex',
 flexDirection: 'column',
 justifyContent: 'center',
 position: 'relative'
 }}>
 <div style={{
 position: 'absolute',
 inset: 0,
 zIndex: 0
 }}>
 <Image
 src="/images/destinations/cambodia/courses/cambodia-vattanac-golf-resort-hero.webp"
 alt="Cambodia Courses"
 fill
 priority
 style={{
 objectFit: 'cover',
 WebkitMaskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)',
 maskImage: 'linear-gradient(to bottom, black 30%, transparent 100%)'
 }}
 sizes="100vw"
 />
 <div className="hero-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #020617 -10%, transparent 50%)' }}></div>
 </div>
 <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', maxWidth: '800px', paddingTop: '15vh' }}>
 <span style={{ color: '#D4AF37', letterSpacing: '0.25em', fontSize: '0.85rem', textTransform: 'uppercase', marginBottom: '1.5rem', display: 'block', fontWeight: 600 }}>The AGS Collection</span>
 <h1 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(3.5rem, 6vw, 5rem)', marginBottom: '1.5rem', color: '#F8FAFC', lineHeight: 1.1, fontWeight: 700 }}>
 Cambodia's <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Championship Layouts</span>
 </h1>
 <p style={{ fontSize: '1.25rem', color: 'rgba(248, 250, 252, 0.7)', lineHeight: 1.6, margin: '0 auto', maxWidth: '800px' }} itemProp="description" id="exec-summary">
 Experience the rising star of Southeast Asian golf. From Sir Nick Faldo's monumental designs to exclusive private-member layouts.
 </p>
 </div>
 </header>

 {/* Table Section */}
 <section className="section" style={{ backgroundColor: '#020617', paddingTop: '6rem', paddingBottom: '0' }}>
 <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
 <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
 <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 700, color: '#D4AF37', marginBottom: '1rem' }}>Cambodia Golf Blueprint</h2>
 <p style={{ color: 'rgba(248, 250, 252, 0.7)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>A strategic overview of the premium golfing landscape across the Kingdom.</p>
 </div>

 <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.2)', backgroundColor: 'rgba(5, 11, 26, 0.5)' }}>
 <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
 <thead>
 <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.2)', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
 <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Region</th>
 <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Primary Course</th>
 <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Designer</th>
 <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>The AGS Advantage</th>
 </tr>
 </thead>
 <tbody>
 <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>Phnom Penh</strong></td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Vattanac Golf Resort (East & West)</td>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Sir Nick Faldo</td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Priority tee times on private West layout</td>
 </tr>
 <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>Siem Reap</strong></td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Angkor Golf Resort</td>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Sir Nick Faldo</td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Helicopter transfers from Angkor Wat</td>
 </tr>
 <tr>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>Siem Reap</strong></td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Phokeethra Country Club</td>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>VWee Golf</td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>VIP resort-to-course connectivity</td>
 </tr>
 </tbody>
 </table>
 </div>
 </div>
 </section>

            {/* GEO Executive Summary & Field Intelligence Blueprint */}
            <section style={{ padding: '4rem 2rem', backgroundColor: 'rgba(212,175,55,0.04)', borderTop: '1px solid rgba(212,175,55,0.15)', borderBottom: '1px solid rgba(212,175,55,0.15)' }}>
                <div className="container" style={{ maxWidth: '960px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        <span style={{ color: '#D4AF37', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 600 }}>Local Guardian Intelligence</span>
                        <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', color: '#F8FAFC', margin: '0.5rem 0 1rem' }}>
                            Cambodia Courses
                        </h2>
                        <p style={{ color: 'rgba(248,250,252,0.7)', fontSize: '1.05rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.7 }}>
                            Cambodia offers a world-class cultural golf pairing, positioning Sir Nick Faldo and Greg Norman championship designs alongside the ancient temple complexes of Angkor. Uncrowded fairways, immaculate Paspalum turf, and attentive caddies make Cambodia an essential 3 to 4-day leg on multi-destination Indochina tours.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>Siem Reap Faldo Corridor</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                Angkor Golf Resort (Sir Nick Faldo's strategic masterpiece) and Phokeethra Country Club just 15 minutes from luxury Siem Reap retreats.
                            </p>
                        </div>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>Phnom Penh Metro Circuit</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                Vattanac Golf Resort (East & West courses designed by Faldo) and Garden City showcasing championship stadium golf with palatial clubhouses.
                            </p>
                        </div>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>Indochina Flight Links</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                Daily 1-hour direct flights connect Siem Reap to Da Nang and Bangkok, creating frictionless dual-nation golf itineraries.
                            </p>
                        </div>
                    </div>

                    <div style={{ backgroundColor: 'rgba(2, 6, 23, 0.9)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '8px', padding: '2rem' }}>
                        <h4 style={{ color: '#D4AF37', fontSize: '1.2rem', marginBottom: '1.25rem', fontFamily: 'var(--font-primary-serif)' }}>At a Glance: Field Logistics &amp; Travel Standards</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', color: 'rgba(248,250,252,0.85)', fontSize: '0.95rem' }}>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Green Fee Benchmark</strong>
                                <span>USD $110–$180 (includes mandatory caddie & shared golf cart)</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Caddie Gratuity Protocol</strong>
                                <span>USD $15–$20 per round paid directly to caddie in US Dollars</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Prime Playing Window</strong>
                                <span>November through March (dry season, comfortable mornings 22–28°C)</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Currency Convenience</strong>
                                <span>US Dollars widely accepted everywhere; private airport & temple logistics arranged by AGS</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


 <section className="section" style={{ backgroundColor: '#020617', paddingTop: '6rem', paddingBottom: '6rem' }}>
 <div className="container">
 <h2 className="text-center" style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.5rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '2rem' }}>Cambodia Course Selection</h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '4rem' }}>
 {courses.map(course => {
 const isLinked = [
 'angkor-golf-resort', 'chhun-on-golf-resort',
 'garden-city', 'phokeethra', 'vattanac',
 'siem-reap-booyoung', 'grand-phnom-penh', 'royal-phnom-penh', 'vattanac-east', 'vattanac-west',
 ].includes(course.newSlug);
 const linkPath = `/courses/cambodia/${course.newSlug}/`;

 const cardContent = (
 <div className="ags-card">
 <div className="ags-card-image-container" style={{ height: '300px' }}>
 <Image
 src={course.cardImage}
 alt={course.name}
 className="ags-card-image"
 fill
 sizes="(max-width: 768px) 100vw, 33vw"
 style={{ objectFit: 'cover' }}
 />
 <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(5, 11, 26, 1) 0%, transparent 70%)' }}></div>
 </div>
 <div className="ags-card-content">
 <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
 <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: '1.75rem', color: '#D4AF37', margin: 0, fontWeight: 700, lineHeight: 1.3 }}>{course.name}</h2>
 </div>
 <h3 style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#F8FAFC', opacity: 0.8, marginBottom: '1.5rem', fontWeight: 500 }}>Championship Course</h3>
 <p style={{ fontSize: '1rem', color: 'rgba(248, 250, 252, 0.6)', lineHeight: 1.6, marginBottom: '2.5rem' }}>{course.desc}</p>
 <div className="ags-card-footer" style={{ borderTop: '1px solid rgba(212, 175, 55, 0.2)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#D4AF37', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.85rem', fontWeight: 600 }}>
 {linkPath ? (
 <><span>Explore Course</span><span className="ags-card-cta-arrow">→</span></>
 ) : (
 <span>AGS Selection</span>
 )}
 </div>
 </div>
 </div>
 );

 return linkPath ? (
 <Link key={course.name} href={linkPath} className="ags-card-link">
 {cardContent}
 </Link>
 ) : (
 <div key={course.name} className="ags-card-wrapper" style={{ opacity: 0.9 }}>
 {cardContent}
 </div>
 );
 })}
 </div>
 </div>
 </section>
 
 <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
   "@context": "https://schema.org",
   "@graph": [
     {
       "@type": "CollectionPage",
       "@id": "https://www.asiagolfspecialists.com/destinations/cambodia/courses/",
       "name": "Premium Golf Courses in Cambodia | Asia Golf Specialists",
       "url": "https://www.asiagolfspecialists.com/destinations/cambodia/courses/",
       "publisher": {
         "@type": "TravelAgency",
         "@id": "https://www.asiagolfspecialists.com/#organization",
         "name": "Asia Golf Specialists",
         "url": "https://www.asiagolfspecialists.com/",
         "image": "https://www.asiagolfspecialists.com/images/brand-library/logos/ags-logo-the-club-mark-nobkgrd.webp",
         "priceRange": "$$$$",
         "address": {
           "@type": "PostalAddress",
           "streetAddress": "27 Nguyen Phan Vinh",
           "addressLocality": "Hoi An",
           "addressRegion": "Da Nang",
           "postalCode": "550000",
           "addressCountry": "VN"
         }
       }
     },
     {
       "@type": "ItemList",
       "name": "Cambodia Championship Golf Courses",
       "itemListElement": courses.map((c, idx) => ({
         "@type": "ListItem",
         "position": idx + 1,
         "item": {
           "@type": "GolfCourse",
           "name": c.name,
           "description": c.desc,
           "url": `https://www.asiagolfspecialists.com/courses/cambodia/${c.newSlug}/`,
           "image": `https://www.asiagolfspecialists.com${c.cardImage}`,
           "address": { "@type": "PostalAddress", "addressCountry": "KH" }
         }
       }))
     },
     {
       "@type": "BreadcrumbList",
       "itemListElement": [
         { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
         { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://www.asiagolfspecialists.com/destinations/" },
         { "@type": "ListItem", "position": 3, "name": "Cambodia", "item": "https://www.asiagolfspecialists.com/destinations/cambodia/" },
         { "@type": "ListItem", "position": 4, "name": "Courses", "item": "https://www.asiagolfspecialists.com/destinations/cambodia/courses/" }
       ]
     }
   ]
 }) }} />
 </div>
 );
}

const courses: { name: string; newSlug: string; cardImage: string; desc: string }[] = [
 { name: "Angkor Golf Resort", newSlug: "angkor-golf-resort", cardImage: "/images/courses/cambodia/angkor-golf-resort/angkor-golf-resort-siem-reap-cambodia-1.webp", desc: "Sir Nick Faldo design and widely considered the best course in Cambodia, just minutes from Angkor Wat." },
 { name: "Chhun On Golf Resort", newSlug: "chhun-on-golf-resort", cardImage: "/images/courses/cambodia/chhun-on-golf-resort/chhun-on-golf-resort-lakes-water-hole-2-hero.webp", desc: "A spectacular 36-hole complex offering contrasting Lakes and Palm course experiences." },
 { name: "Garden City Golf Club", newSlug: "garden-city", cardImage: "/images/courses/cambodia/garden-city/garden-city-golf-club-phnom-penh-cambodia-1.webp", desc: "Managed by IMG, known for its wide-open feel, undulating greens, and a professional-level challenge." },
 { name: "Phokeethra Country Club", newSlug: "phokeethra", cardImage: "/images/courses/cambodia/phokeethra/phokeethra-country-club-siem-reap-cambodia-1.webp", desc: "A former host of the Asian Tour's Cambodian Open in Siem Reap offering forced water carries." },
 { name: "Siem Reap Booyoung Country Club", newSlug: "siem-reap-booyoung", cardImage: "/images/courses/cambodia/siem-reap-booyoung/siem-reap-booyoung-country-club-cambodia-1.webp", desc: "Features generous fairways and floral landscaping for excellent scoring and a relaxing round." },
 { name: "Grand Phnom Penh Golf Club", newSlug: "grand-phnom-penh", cardImage: "/images/courses/cambodia/grand-phnom-penh/grand-phnom-penh-golf-club-cambodia-1.webp", desc: "Private Nicklaus Design course offering rare exclusivity and signature 'Golden Bear' strategic bunkering." },
 { name: "Royal Phnom Penh Golf Club", newSlug: "royal-phnom-penh", cardImage: "/images/courses/cambodia/royal-phnom-penh/royal-phnom-penh-golf-club-cambodia-1.webp", desc: "Set amongst traditional rice paddies and coconut palms offering a peaceful, rural atmosphere near the airport." },
 { name: "Vattanac Golf Resort", newSlug: "vattanac", cardImage: "/images/courses/cambodia/vattanac/vattanac-1.webp", desc: "An awe-inspiring 36-hole Faldo resort integrating scale models of ancient Khmer temples into the layout." },
 { name: "Vattanac Golf Resort (East Course)", newSlug: "vattanac-east", cardImage: "/images/courses/cambodia/vattanac-east/vattanac-golf-resort-east-course-cambodia-1.webp", desc: "Sir Nick Faldo championship public layout featuring scale models of Pre-Angkorean structures." },
 { name: "Vattanac Golf Resort (West Course)", newSlug: "vattanac-west", cardImage: "/images/courses/cambodia/vattanac-west/vattanac-golf-resort-west-course-cambodia-1.webp", desc: "Exclusive private-members Faldo layout offering fast, firm paspalum surfaces and technical precision." },
];
