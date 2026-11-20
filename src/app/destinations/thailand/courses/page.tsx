import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";

export const metadata = {
 title: { absolute: "Premium Golf Courses in Thailand | Bangkok to Phuket" },
 description: "Thailand championship golf courses — Black Mountain, Blue Canyon, Thai Country Club, Nikanti, and more. Curated course profiles by Asia Golf Specialists.",

    alternates: {
        canonical: "https://www.asiagolfspecialists.com/destinations/thailand/courses/",
    },
    openGraph: {
        type: "website",
        title: { absolute: "Premium Golf Courses in Thailand | Bangkok to Phuket" },
        description: "Thailand championship golf courses — Black Mountain, Blue Canyon, Thai Country Club, Nikanti, and more. Curated course profiles by Asia Golf Specialists.",
        url: "https://www.asiagolfspecialists.com/destinations/thailand/courses/",
        siteName: "Asia Golf Specialists",
        images: [{
            url: "https://www.asiagolfspecialists.com/images/destinations/thailand/hero/thailand-travel-brochure-hero.webp",
            width: 1200,
            height: 630,
            alt: "Thailand championship golf courses",
        }],
    },
    twitter: {
        card: "summary_large_image",
        title: { absolute: "Premium Golf Courses in Thailand | Bangkok to Phuket" },
        description: "Thailand championship golf courses — Black Mountain, Blue Canyon, Thai Country Club, Nikanti, and more. Curated course profiles by Asia Golf Specialists.",
        images: ["https://www.asiagolfspecialists.com/images/destinations/thailand/hero/thailand-travel-brochure-hero.webp"],
    },
};

export default function ThailandCourses() {
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
 src="/images/destinations/thailand/courses/thailand-amata-spring-country-club-hero.webp"
 alt="Thailand Courses"
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
 Thailand's <span style={{ color: '#D4AF37', fontStyle: 'italic' }}>Championship Layouts</span>
 </h1>
 <p style={{ fontSize: '1.25rem', color: 'rgba(248, 250, 252, 0.7)', lineHeight: 1.6, margin: '0 auto', maxWidth: '800px' }} itemProp="description" id="exec-summary">
 Experience the ultimate blend of hospitality and high-performance golf. From the mountain-framed fairways of Chiang Mai to exclusive private clubs like Siam Country Club and Alpine.
 </p>
 </div>
 </header>

 {/* Table Section */}
 <section className="section" style={{ backgroundColor: '#020617', paddingTop: '6rem', paddingBottom: '0' }}>
 <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
 <div style={{ marginBottom: '3rem', textAlign: 'center' }}>
 <h2 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: 700, color: '#D4AF37', marginBottom: '1rem' }}>Thailand Golf Blueprint</h2>
 <p style={{ color: 'rgba(248, 250, 252, 0.7)', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>A strategic overview of Thailand's premium golfing regions.</p>
 </div>

 <div style={{ overflowX: 'auto', borderRadius: '8px', border: '1px solid rgba(212, 175, 55, 0.2)', backgroundColor: 'rgba(5, 11, 26, 0.5)' }}>
 <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
 <thead>
 <tr style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.2)', backgroundColor: 'rgba(212, 175, 55, 0.05)' }}>
 <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Region</th>
 <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Marquee Courses</th>
 <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Style</th>
 <th style={{ padding: '1.5rem', color: '#D4AF37', fontWeight: 600, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Ideal Season</th>
 </tr>
 </thead>
 <tbody>
 <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>Bangkok & Surrounds</strong></td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Alpine, Ballyshear, Nikanti</td>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Exclusive Private, Parkland, Links-style</td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Nov - Mar</td>
 </tr>
 <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>Hua Hin & Pattaya</strong></td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Black Mountain, Siam CC, Pineapple Valley</td>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Mountain, Championship Resort</td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Nov - Apr</td>
 </tr>
 <tr>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}><strong>Phuket & Chiang Mai</strong></td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Red Mountain, Blue Canyon, Chiang Mai Highlands</td>
 <td style={{ padding: '1.5rem', color: '#F8FAFC' }}>Dramatic Elevation, Coastal, Highland</td>
 <td style={{ padding: '1.5rem', color: 'rgba(248, 250, 252, 0.7)' }}>Nov - Apr (Phuket), Oct - Feb (Chiang Mai)</td>
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
                            Thailand Courses
                        </h2>
                        <p style={{ color: 'rgba(248,250,252,0.7)', fontSize: '1.05rem', maxWidth: '750px', margin: '0 auto', lineHeight: 1.7 }}>
                            With over 300 courses and three decades of international tournament pedigree, Thailand represents Southeast Asia's most mature golf destination. The Kingdom combines championship designs by Schmidt-Curley, Jack Nicklaus, and Pete Dye with world-renowned private caddie hospitality and pristine clubhouse standards.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>Hua Hin Royal Corridor</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                Black Mountain (#1 ranked in Thailand) and Pineapple Valley offering championship links-style terrain with Gulf of Thailand breezes.
                            </p>
                        </div>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>Phuket Tropical Enclaves</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                Red Mountain (dramatic former tin-mine elevation drops) and Blue Canyon (Asian Tour Canyon Course) in peak shape Nov–Apr.
                            </p>
                        </div>

                        <div style={{ backgroundColor: 'rgba(5, 11, 26, 0.8)', border: '1px solid rgba(212, 175, 55, 0.2)', borderRadius: '8px', padding: '1.75rem' }}>
                            <h3 style={{ color: '#D4AF37', fontSize: '1.15rem', marginBottom: '0.75rem', fontFamily: 'var(--font-primary-serif)' }}>Bangkok & Chiang Mai</h3>
                            <p style={{ color: 'rgba(248,250,252,0.8)', fontSize: '0.92rem', lineHeight: 1.6, margin: 0 }}>
                                Exclusive private clubs like Thai Country Club and Siam CC, plus highland cool-climate golf at Alpine Golf Club Chiang Mai.
                            </p>
                        </div>
                    </div>

                    <div style={{ backgroundColor: 'rgba(2, 6, 23, 0.9)', border: '1px solid rgba(212, 175, 55, 0.3)', borderRadius: '8px', padding: '2rem' }}>
                        <h4 style={{ color: '#D4AF37', fontSize: '1.2rem', marginBottom: '1.25rem', fontFamily: 'var(--font-primary-serif)' }}>At a Glance: Field Logistics &amp; Travel Standards</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', color: 'rgba(248,250,252,0.85)', fontSize: '0.95rem' }}>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Green Fee Benchmark</strong>
                                <span>THB 3,500–7,500 (~USD $100–$220) depending on season & private club exclusivity</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Caddie Gratuity Protocol</strong>
                                <span>THB 400–600 (~USD $12–$18) mandatory private female caddie gratuity</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>Tee Time Strategy</strong>
                                <span>Morning starts (06:30–08:30) essential for pace of play & midday heat management</span>
                            </div>

                            <div>
                                <strong style={{ color: '#F8FAFC', display: 'block', marginBottom: '0.25rem' }}>VIP Ground Logistics</strong>
                                <span>Luxury private touring vehicles with equipment bays bypassing Bangkok expressway bottlenecks</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


 <section className="section" style={{ backgroundColor: '#020617', paddingTop: '6rem', paddingBottom: '6rem' }}>
 <div className="container">
 <h2 className="text-center" style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.5rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '2rem' }}>Thailand Course Selection</h2>
 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '4rem' }}>
 {courses.map(course => {
 const isLinked = [
 'alpine-golf-club', 'alpine-chiang-mai', 'aquella', 'ballyshear',
 'bangkok-golf-club', 'black-mountain', 'blue-canyon', 'cascata',
 'chiang-mai-highlands', 'flora-ville', 'laem-chabang', 'laguna-phuket',
 'lake-view', 'mission-hills-kanchanaburi', 'mission-hills-phuket',
 'nikanti', 'pineapple-valley', 'red-mountain', 'siam-country-club',
 'mae-jo', 'thai-country-club', 'springfield-royal'
 ].includes(course.slug);
 const linkPath = `/courses/thailand/${course.slug}/`;

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
       "@id": "https://www.asiagolfspecialists.com/destinations/thailand/courses/",
       "name": "Premium Golf Courses in Thailand | Asia Golf Specialists",
       "url": "https://www.asiagolfspecialists.com/destinations/thailand/courses/",
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
       "name": "Thailand Championship Golf Courses",
       "itemListElement": courses.map((c, idx) => ({
         "@type": "ListItem",
         "position": idx + 1,
         "item": {
           "@type": "GolfCourse",
           "name": c.name,
           "description": c.desc,
           "url": `https://www.asiagolfspecialists.com/courses/thailand/${c.slug}/`,
           "image": `https://www.asiagolfspecialists.com${c.cardImage}`,
           "address": { "@type": "PostalAddress", "addressCountry": "TH" }
         }
       }))
     },
     {
       "@type": "BreadcrumbList",
       "itemListElement": [
         { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.asiagolfspecialists.com/" },
         { "@type": "ListItem", "position": 2, "name": "Destinations", "item": "https://www.asiagolfspecialists.com/destinations/" },
         { "@type": "ListItem", "position": 3, "name": "Thailand", "item": "https://www.asiagolfspecialists.com/destinations/thailand/" },
         { "@type": "ListItem", "position": 4, "name": "Courses", "item": "https://www.asiagolfspecialists.com/destinations/thailand/courses/" }
       ]
     }
   ]
 }) }} />
 </div>
 );
}

const courses: { name: string; slug: string; desc: string; cardImage: string }[] = [
 { name: "Alpine Golf & Sports Club", slug: "alpine-golf-club", cardImage: "/images/courses/thailand/alpine-golf-club/alpine-golf-sports-club-bangkok-thailand-1.webp", desc: "Famed host of Tiger Woods' Johnnie Walker Classic victory, offering hilly terrain in Bangkok." },
 { name: "Alpine Golf Resort Chiang Mai", slug: "alpine-chiang-mai", cardImage: "/images/courses/thailand/alpine-chiang-mai/alpine-golf-resort-chiang-mai-thailand-1.webp", desc: "A Ron Garl masterpiece set in a stunning valley surrounded by northern mountains." },
 { name: "Aquella Golf Resort and Country Club", slug: "aquella", cardImage: "/images/courses/thailand/aquella/aquella-golf-resort-phuket-thailand-1.webp", desc: "Modern coastal gem near Phuket featuring platinum paspalum turf and Andaman Sea vistas." },
 { name: "Ballyshear Golf Links", slug: "ballyshear", cardImage: "/images/courses/thailand/ballyshear/ballyshear-golf-links-bangkok-thailand-1.webp", desc: "A true connoisseur's course near Bangkok, recreating the lost 'Lido' design by C.B. Macdonald." },
 { name: "Bangkok Golf Club", slug: "bangkok-golf-club", cardImage: "/images/courses/thailand/bangkok-golf-club/bangkok-golf-club-thailand-1.webp", desc: "Popular city course offering professional night golf and strategic water hazards." },
 { name: "Black Mountain Golf Club", slug: "black-mountain", cardImage: "/images/courses/thailand/black-mountain/black-mountain-golf-club-hua-hin-thailand-1.webp", desc: "Consistently ranked as one of Asia's best, carved into a Hua Hin granite mountain." },
 { name: "Blue Canyon Country Club", slug: "blue-canyon", cardImage: "/images/courses/thailand/blue-canyon/blue-canyon-country-club-phuket-thailand-1.webp", desc: "A legendary Phuket course famous for dramatic finishes over water-filled canyons." },
 { name: "Cascata Golf Club", slug: "cascata", cardImage: "/images/courses/thailand/cascata/cascata-golf-club-bangkok-thailand-1.webp", desc: "Fun and creative 36-hole facility near Bangkok with massive greens and imaginative bunkers." },
 { name: "Chiang Mai Highlands", slug: "chiang-mai-highlands", cardImage: "/images/courses/thailand/chiang-mai-highlands/chiang-mai-highlands-golf-country-club-thailand-1.webp", desc: "A Lee Schmidt design weaving through rolling hills with spectacular views from every tee." },
 { name: "Flora Ville Golf & Country Club", slug: "flora-ville", cardImage: "/images/courses/thailand/flora-ville/flora-ville-golf-country-club-bangkok-thailand-1.webp", desc: "Classic parkland experience near Bangkok, focusing on lush greenery and floral aesthetics." },
 { name: "Laem Chabang International", slug: "laem-chabang", cardImage: "/images/courses/thailand/laem-chabang/laem-chabang-international-pattaya-thailand-1.webp", desc: "A Jack Nicklaus 27-hole design widely considered the best in the Pattaya region." },
 { name: "Laguna Golf Phuket", slug: "laguna-phuket", cardImage: "/images/courses/thailand/laguna-phuket/laguna-golf-phuket-thailand-1.webp", desc: "Scenic resort layout within Laguna Phuket, playing through coconut groves and lagoons." },
 { name: "Lake View Resort & Golf Club", slug: "lake-view", cardImage: "/images/courses/thailand/lake-view/lake-view-resort-golf-club-hua-hin-thailand-1.webp", desc: "Hua Hin staple offering 36 holes across Mountain, Lake, Desert, and Links styles." },
 { name: "Mission Hills Kanchanaburi", slug: "mission-hills-kanchanaburi", cardImage: "/images/courses/thailand/mission-hills-kanchanaburi/mission-hills-kanchanaburi-golf-club-thailand-1.webp", desc: "Historic River Kwai Nicklaus design famous for double-fairways and mountain scenery." },
 { name: "Mission Hills Phuket", slug: "mission-hills-phuket", cardImage: "/images/courses/thailand/mission-hills-phuket/mission-hills-golf-phuket-thailand-1.webp", desc: "Phuket's only oceanfront course, a Nicklaus design with spectacular Andaman views." },
 { name: "Nikanti Golf Club", slug: "nikanti", cardImage: "/images/courses/thailand/nikanti/nikanti-golf-club-bangkok-thailand-1.webp", desc: "Pioneer of all-inclusive luxury offering three loops of six holes and seamless service." },
 { name: "Pineapple Valley Golf Club", slug: "pineapple-valley", cardImage: "/images/courses/thailand/pineapple-valley/pineapple-valley-golf-club-hua-hin-thailand-1.webp", desc: "World-class Hua Hin facility winding through former pineapple plantations." },
 { name: "Red Mountain Golf Club", slug: "red-mountain", cardImage: "/images/courses/thailand/red-mountain/red-mountain-golf-club-phuket-thailand-1.webp", desc: "The most dramatic course in Asia, carved through a former tin mine filled with canyons." },
 { name: "Siam Country Club (Old Course)", slug: "siam-country-club", cardImage: "/images/courses/thailand/siam-country-club/siam-country-club-old-course-pattaya-thailand-1.webp", desc: "The historical heart of Thai golf and permanent home of the LPGA Thailand." },
 { name: "Mae Jo Golf Club", slug: "mae-jo", cardImage: "/images/courses/thailand/mae-jo/mae-jo-1.webp", desc: "A tranquil test of golf set amidst rolling fruit orchards with stunning views of Doi Suthep." },
 { name: "Thai Country Club", slug: "thai-country-club", cardImage: "/images/courses/thailand/thai-country-club/thai-country-club-1.webp", desc: "A luxurious neo-classic design in Bangkok offering a genuine PGA Tour-level experience." },
 { name: "Springfield Royal Country Club", slug: "springfield-royal", cardImage: "/images/courses/thailand/springfield-royal/springfield-royal-1.webp", desc: "A classic 27-hole Jack Nicklaus design featuring strategic bunkering and mature woodlands." },
];
