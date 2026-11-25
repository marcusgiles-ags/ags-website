import Link from 'next/link';
import Navbar from '@/components/Navbar';
import fs from 'fs';
import path from 'path';

// Helper: get all indexable SEO articles (exclude noindex lifestyle articles from crawl directory)
function getSeoArticles(): { title: string; url: string; category: string }[] {
  const dataDir = path.join(process.cwd(), 'src/data/seo-articles');
  if (!fs.existsSync(dataDir)) return [];
  return fs.readdirSync(dataDir)
    .filter(file => file.endsWith('.json'))
    .map(file => {
      try {
        const raw = fs.readFileSync(path.join(dataDir, file), 'utf-8');
        const article = JSON.parse(raw);
        if (article.noindex) return null;
        return { title: article.title, url: `/destinations/${article.category}/${article.slug}/`, category: article.category };
      } catch {
        return null;
      }
    })
    .filter((a): a is { title: string; url: string; category: string } => a !== null);
}

function getPackages(): { title: string; url: string }[] {
  const dataDir = path.join(process.cwd(), 'src/data/packages');
  if (!fs.existsSync(dataDir)) return [];
  return fs.readdirSync(dataDir)
    .filter(file => file.endsWith('.json'))
    .map(file => {
      try {
        const raw = fs.readFileSync(path.join(dataDir, file), 'utf-8');
        const pkg = JSON.parse(raw);
        const slug = pkg.slug || file.replace('.json', '');
        return { title: pkg.title || pkg.metaTitle || pkg.h1 || slug, url: `/packages/${slug}/` };
      } catch {
        return null;
      }
    })
    .filter((a): a is { title: string; url: string } => a !== null);
}

function getCourses(): { title: string; url: string }[] {
    const countries = ['vietnam', 'thailand', 'cambodia'];
    const courses = [];
    for (const country of countries) {
        const countryDir = path.join(process.cwd(), 'src/data/courses', country);
        if (!fs.existsSync(countryDir)) continue;
        const files = fs.readdirSync(countryDir).filter(f => f.endsWith('.json')).sort();
        for (const file of files) {
            const slug = file.replace(/\.json$/, '');
            let title = slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
            try {
                const parsed = JSON.parse(fs.readFileSync(path.join(countryDir, file), 'utf8'));
                if (parsed?.schema?.name) title = parsed.schema.name;
            } catch {
                // fallback
            }
            courses.push({ title, url: `/courses/${country}/${slug}/` });
        }
    }
    return courses;
}

function getAccommodations(): { title: string; url: string }[] {
    const countries = ['vietnam', 'thailand', 'cambodia'];
    const accommodations = [];
    for (const country of countries) {
        const countryDir = path.join(process.cwd(), 'src/app/accommodations', country);
        if (!fs.existsSync(countryDir)) continue;
        const slugs = fs.readdirSync(countryDir, { withFileTypes: true })
          .filter(d => d.isDirectory()).map(d => d.name);
        for (const slug of slugs) {
            const title = slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
            accommodations.push({ title, url: `/accommodations/${country}/${slug}/` });
        }
    }
    return accommodations;
}

function getBlogPosts(): { title: string; url: string }[] {
    const dataDir = path.join(process.cwd(), 'src/data/blog-posts');
    if (!fs.existsSync(dataDir)) return [];
    const today = new Date().toISOString().split('T')[0];
    return fs.readdirSync(dataDir)
      .filter(file => file.endsWith('.json'))
      .map(file => {
        try {
          const raw = fs.readFileSync(path.join(dataDir, file), 'utf-8');
          const post = JSON.parse(raw);
          if (post.status !== 'approved' || !post.publishDate || post.publishDate > today) return null;
          const slug = post.slug || file.replace('.json', '');
          return { title: post.title || slug, url: `/blog/${slug}/` };
        } catch {
          return null;
        }
      })
      .filter((a): a is { title: string; url: string } => a !== null);
}

function getTours(): { title: string; url: string }[] {
    const toursAppDir = path.join(process.cwd(), 'src/app/tours');
    if (!fs.existsSync(toursAppDir)) return [];
    const tourSlugs = fs.readdirSync(toursAppDir, { withFileTypes: true })
      .filter(d => d.isDirectory()).map(d => d.name);
    return tourSlugs.map(slug => {
        const title = slug.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
        return { title, url: `/tours/${slug}/` };
    });
}

export const metadata = {
  title: 'Complete Site Directory & Index',
  description: 'A complete index of all luxury golf tours, courses, accommodations, and destination guides across Vietnam, Thailand, and Cambodia.',
  alternates: { canonical: 'https://www.asiagolfspecialists.com/site-directory/' },
  openGraph: {
    type: 'website',
    title: 'Complete Site Directory & Index | Asia Golf Specialists',
    description: 'A complete index of all luxury golf tours, courses, accommodations, and destination guides across Vietnam, Thailand, and Cambodia.',
    url: 'https://www.asiagolfspecialists.com/site-directory/',
    siteName: 'Asia Golf Specialists',
    images: [{
      url: 'https://www.asiagolfspecialists.com/images/courses/vietnam/vietnam-golf-course-hoiana-shores-championship-layout.webp',
      width: 1200,
      height: 630,
      alt: 'Complete Site Directory | Asia Golf Specialists',
    }],
  },
};

export default function SiteDirectory() {
  const articles = getSeoArticles();
  const packages = getPackages();
  const courses = getCourses();
  const accommodations = getAccommodations();
  const blogPosts = getBlogPosts();
  const tours = getTours();

  const linkStyle = { color: 'var(--color-gold)', textDecoration: 'none', display: 'block', padding: '0.25rem 0', fontSize: '0.95rem' };
  const h2Style = { color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', textTransform: 'uppercase' as const, letterSpacing: '0.1em', borderBottom: '1px solid rgba(212,175,55,0.15)', paddingBottom: '0.5rem', marginBottom: '1rem', fontWeight: 600 };
  const h3Style = { color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', margin: '1rem 0 0.5rem', fontWeight: 600 };
  
  // Group articles by country
  const articlesByCountry = articles.reduce((acc, article) => {
      const country = article.category.charAt(0).toUpperCase() + article.category.slice(1);
      if (!acc[country]) acc[country] = [];
      acc[country].push(article);
      return acc;
  }, {} as Record<string, typeof articles>);

  return (
    <>
      <Navbar />
      <div className="section" style={{ paddingTop: '150px', paddingBottom: '100px', backgroundColor: '#020617', minHeight: '100vh', color: '#e0e0e0' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <h1 style={{ fontFamily: 'var(--font-primary-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', marginBottom: '2rem' }}>Site Directory</h1>
          
          <div itemProp="description" id="exec-summary" style={{ fontSize: '1.125rem', marginBottom: '4rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
            <p><strong>Executive Summary:</strong> The Asia Golf Specialists (AGS) Site Directory serves as a comprehensive index of our luxury golf offerings across Southeast Asia. This architecture provides complete access to our curated signature tours, exclusive golf course profiles, premium accommodation partners, and expert destination guides for Vietnam, Thailand, and Cambodia. Designed for seamless navigation, this directory ensures both our clientele and search engines can discover the full depth of our region-specific expertise and tailored golf itineraries.</p>
          </div>

          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "CollectionPage",
                "name": "Site Directory | Asia Golf Specialists",
                "description": "A complete index of all luxury golf tours, courses, accommodations, and destination guides across Vietnam, Thailand, and Cambodia.",
                "url": "https://www.asiagolfspecialists.com/site-directory/",
                "publisher": {
                  "@type": "Organization",
                  "name": "Asia Golf Specialists",
                  "url": "https://www.asiagolfspecialists.com/"
                }
              })
            }}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            
            {/* Core Pages */}
            <div>
              <h2 style={h2Style}>Core Experiences &amp; Regional Hubs</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><Link href="/" style={linkStyle}>Home</Link></li>
                <li><Link href="/destinations/" style={linkStyle}>Destinations</Link></li>
                <li><Link href="/destinations/vietnam/" style={linkStyle}>Vietnam Golf Hub</Link></li>
                <li><Link href="/destinations/vietnam/courses/" style={linkStyle}>Vietnam Golf Courses</Link></li>
                <li><Link href="/destinations/vietnam/accommodations/" style={linkStyle}>Vietnam Luxury Accommodations</Link></li>
                <li><Link href="/destinations/vietnam/course-conditions/" style={linkStyle}>Vietnam Course Maintenance Tracker</Link></li>
                <li><Link href="/destinations/thailand/" style={linkStyle}>Thailand Golf Hub</Link></li>
                <li><Link href="/destinations/thailand/courses/" style={linkStyle}>Thailand Golf Courses</Link></li>
                <li><Link href="/destinations/thailand/accommodations/" style={linkStyle}>Thailand Luxury Accommodations</Link></li>
                <li><Link href="/destinations/cambodia/" style={linkStyle}>Cambodia Golf Hub</Link></li>
                <li><Link href="/destinations/cambodia/courses/" style={linkStyle}>Cambodia Golf Courses</Link></li>
                <li><Link href="/destinations/cambodia/accommodations/" style={linkStyle}>Cambodia Luxury Accommodations</Link></li>
                <li><Link href="/courses/" style={linkStyle}>All Golf Courses</Link></li>
                <li><Link href="/accommodations/" style={linkStyle}>All Luxury Accommodations</Link></li>
                <li><Link href="/tours/" style={linkStyle}>Curated Tours</Link></li>
                <li><Link href="/events-tours/" style={linkStyle}>Events &amp; Invitationals</Link></li>
                <li><Link href="/packages/" style={linkStyle}>Itinerary Directory</Link></li>
                <li><Link href="/blog/" style={linkStyle}>Editorial Journal</Link></li>
                <li><Link href="/about/" style={linkStyle}>About Asia Golf Specialists</Link></li>
                <li><Link href="/quote/" style={linkStyle}>Request a Bespoke Quote</Link></li>
                <li><Link href="/download-guide/" style={linkStyle}>Download 2026 Golf Guide</Link></li>
              </ul>
            </div>

            {/* Tours */}
            <div>
              <h2 style={h2Style}>Signature Tours</h2>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {tours.map(t => (
                  <li key={t.url}><Link href={t.url} style={linkStyle}>{t.title}</Link></li>
                ))}
              </ul>
            </div>

            {/* Destination Guides */}
            <div>
              <h2 style={h2Style}>Destination Guides</h2>
              <div style={{ maxHeight: '400px', overflowY: 'auto', paddingRight: '10px' }}>
                {Object.entries(articlesByCountry).map(([country, items]) => (
                  <div key={country}>
                    <h3 style={h3Style}>{country} Guides</h3>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1rem' }}>
                      {items.map(a => (
                        <li key={a.url}><Link href={a.url} style={linkStyle}>{a.title}</Link></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Editorial Blog */}
            <div>
              <h2 style={h2Style}>Editorial Journal</h2>
              <ul style={{ listStyle: 'none', padding: 0, maxHeight: '400px', overflowY: 'auto' }}>
                {blogPosts.map(b => (
                  <li key={b.url}><Link href={b.url} style={linkStyle}>{b.title}</Link></li>
                ))}
              </ul>
            </div>

            {/* Courses */}
            <div>
              <h2 style={h2Style}>Course Profiles</h2>
              <ul style={{ listStyle: 'none', padding: 0, maxHeight: '400px', overflowY: 'auto' }}>
                {courses.map(c => (
                  <li key={c.url}><Link href={c.url} style={linkStyle}>{c.title}</Link></li>
                ))}
              </ul>
            </div>

            {/* Accommodations */}
            <div>
              <h2 style={h2Style}>Luxury Accommodations</h2>
              <ul style={{ listStyle: 'none', padding: 0, maxHeight: '400px', overflowY: 'auto' }}>
                {accommodations.map(acc => (
                  <li key={acc.url}><Link href={acc.url} style={linkStyle}>{acc.title}</Link></li>
                ))}
              </ul>
            </div>

            {/* Packages */}
            <div style={{ gridColumn: '1 / -1' }}>
              <h2 style={h2Style}>Bespoke Golf Packages ({packages.length} Itineraries)</h2>
              <ul style={{ listStyle: 'none', padding: 0, maxHeight: '450px', overflowY: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.25rem 1.5rem' }}>
                {packages.map(p => (
                  <li key={p.url}><Link href={p.url} style={linkStyle}>{p.title}</Link></li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
