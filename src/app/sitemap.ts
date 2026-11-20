import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';
import lastmodManifest from '@/data/lastmod-manifest.json';

const BASE_URL = 'https://www.asiagolfspecialists.com';

/*
 * <lastmod> POLICY (Oct 2026):
 * Dates come from src/data/lastmod-manifest.json — a content-hash ledger
 * maintained by scripts/update-lastmod-manifest.mjs (first step of
 * `npm run build`). NEVER use fs.statSync().mtime or new Date() here: on Vercel
 * every file's mtime is the build time, which stamped ~583 URLs with the build
 * date on every deploy and taught Google to ignore our lastmod.
 * Hub pages inherit the most recent lastmod of the content they list.
 */
const MANIFEST = lastmodManifest as Record<string, { hash: string; lastmod: string }>;
const FALLBACK_DATE = '2026-10-01';

function lastmodOf(relPath: string, fallback = FALLBACK_DATE): string {
  return MANIFEST[relPath]?.lastmod ?? fallback;
}

function latest(dates: string[], fallback = FALLBACK_DATE): string {
  return dates.length ? dates.reduce((a, b) => (a > b ? a : b)) : fallback;
}

function latestUnder(prefix: string): string {
  return latest(Object.entries(MANIFEST).filter(([k]) => k.startsWith(prefix)).map(([, v]) => v.lastmod));
}

// Helper: get all article data from the SEO articles data directory
function getSeoArticles(): { country: string; slug: string; file: string }[] {
  const dataDir = path.join(process.cwd(), 'src/data/seo-articles');
  if (!fs.existsSync(dataDir)) return [];
  return fs.readdirSync(dataDir)
    .filter(file => file.endsWith('.json'))
    .map(file => {
      try {
        const raw = fs.readFileSync(path.join(dataDir, file), 'utf-8');
        const article = JSON.parse(raw);
        if (article.noindex) return null;
        return { country: article.category, slug: article.slug, file };
      } catch {
        return null;
      }
    })
    .filter(Boolean) as { country: string; slug: string; file: string }[];
}

// Helper: get all blog post slugs from blog-posts data directory — only approved/published
function getBlogPosts(): { slug: string; publishDate: string }[] {
  const dataDir = path.join(process.cwd(), 'src/data/blog-posts');
  if (!fs.existsSync(dataDir)) return [];
  const today = new Date().toISOString().split('T')[0];

  return fs.readdirSync(dataDir)
    .filter(file => file.endsWith('.json'))
    .map(file => {
      try {
        const raw = fs.readFileSync(path.join(dataDir, file), 'utf-8');
        const post = JSON.parse(raw);
        if (post.status === 'approved' && post.publishDate <= today) {
          return { slug: file.replace('.json', ''), publishDate: post.publishDate };
        }
        return null;
      } catch {
        return null;
      }
    })
    .filter(Boolean) as { slug: string; publishDate: string }[];
}

// Helper: get all programmatic packages
function getPackages(): string[] {
  const dataDir = path.join(process.cwd(), 'src/data/packages');
  if (!fs.existsSync(dataDir)) return [];
  return fs.readdirSync(dataDir)
    .filter(file => file.endsWith('.json'))
    .map(file => file.replace('.json', ''));
}

function listSlugDirs(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true })
    .filter(d => d.isDirectory() && !d.name.startsWith('[')).map(d => d.name);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const countries = ['vietnam', 'thailand', 'cambodia'];

  const coursesLatest = latestUnder('src/data/courses/');
  const accomLatest = latestUnder('src/app/accommodations/');
  const toursLatest = latestUnder('src/app/tours/');
  const blogLatest = latestUnder('src/data/blog-posts/');
  const articlesLatest = latestUnder('src/data/seo-articles/');
  const packagesLatest = latestUnder('src/data/packages/');
  const destinationsLatest = latest([latestUnder('src/app/destinations/'), articlesLatest]);
  const siteLatest = latest([coursesLatest, accomLatest, toursLatest, blogLatest, articlesLatest, packagesLatest, lastmodOf('src/app/page.tsx')]);

  // ─── Tier 1: Primary Pages (hubs inherit their newest listed content) ────
  entries.push(
    { url: `${BASE_URL}/`, lastModified: siteLatest, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/destinations/`, lastModified: destinationsLatest, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/courses/`, lastModified: latest([coursesLatest, lastmodOf('src/app/courses/page.tsx')]), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/accommodations/`, lastModified: latest([accomLatest, lastmodOf('src/app/accommodations/page.tsx')]), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/tours/`, lastModified: toursLatest, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/events-tours/`, lastModified: lastmodOf('src/app/events-tours/page.tsx'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/packages/`, lastModified: latest([packagesLatest, lastmodOf('src/app/packages/page.tsx')]), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/blog/`, lastModified: latest([blogLatest, lastmodOf('src/app/blog/page.tsx')]), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/about/`, lastModified: lastmodOf('src/app/about/page.tsx'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/quote/`, lastModified: lastmodOf('src/app/quote/page.tsx'), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/download-guide/`, lastModified: lastmodOf('src/app/download-guide/page.tsx'), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/site-directory/`, lastModified: siteLatest, changeFrequency: 'weekly', priority: 0.7 },
  );

  // ─── Tier 2: Destination Hubs (golf & accommodation hubs only; non-golf lifestyle hubs are noindex) ─
  const subPages = ['courses', 'accommodations'];
  for (const country of countries) {
    entries.push({
      url: `${BASE_URL}/destinations/${country}/`,
      lastModified: latest([latestUnder(`src/app/destinations/${country}/`), latestUnder(`src/data/courses/${country}/`)]),
      changeFrequency: 'weekly',
      priority: 0.9,
    });
    for (const sub of subPages) {
      const subDir = path.join(process.cwd(), 'src/app/destinations', country, sub);
      if (fs.existsSync(subDir)) {
        const childPrefix = sub === 'courses' ? `src/data/courses/${country}/`
          : sub === 'accommodations' ? `src/app/accommodations/${country}/` : `src/app/destinations/${country}/${sub}/`;
        entries.push({
          url: `${BASE_URL}/destinations/${country}/${sub}/`,
          lastModified: latest([lastmodOf(`src/app/destinations/${country}/${sub}/page.tsx`), latestUnder(childPrefix)]),
          changeFrequency: 'weekly',
          priority: 0.8,
        });
      }
    }
  }

  // ─── Tier 3: SEO Article Deep-Dives ──────────────────────────────────────
  for (const article of getSeoArticles()) {
    // Strict country validation — only include articles with a known destination
    if (!countries.includes(article.country)) continue;
    entries.push({
      url: `${BASE_URL}/destinations/${article.country}/${article.slug}/`,
      lastModified: lastmodOf(`src/data/seo-articles/${article.file}`),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  // ─── Tier 4: Course Profile Pages ────────────────────────────────────────
  for (const country of countries) {
    const cDataDir = path.join(process.cwd(), 'src/data/courses', country);
    if (!fs.existsSync(cDataDir)) continue;
    for (const file of fs.readdirSync(cDataDir).filter(f => f.endsWith('.json')).sort()) {
      const slug = file.replace(/\.json$/, '');
      entries.push({
        url: `${BASE_URL}/courses/${country}/${slug}/`,
        lastModified: lastmodOf(`src/data/courses/${country}/${slug}.json`),
        changeFrequency: 'monthly',
        priority: 0.75,
      });
    }
  }

  // ─── Tier 5: Accommodation Profile Pages ─────────────────────────────────
  for (const country of countries) {
    for (const slug of listSlugDirs(path.join(process.cwd(), 'src/app/accommodations', country))) {
      entries.push({
        url: `${BASE_URL}/accommodations/${country}/${slug}/`,
        lastModified: lastmodOf(`src/app/accommodations/${country}/${slug}/page.tsx`),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    }
  }

  // ─── Tier 6: Tour Pages ──────────────────────────────────────────────────
  for (const slug of listSlugDirs(path.join(process.cwd(), 'src/app/tours'))) {
    entries.push({
      url: `${BASE_URL}/tours/${slug}/`,
      lastModified: lastmodOf(`src/app/tours/${slug}/page.tsx`),
      changeFrequency: 'monthly',
      priority: 0.75,
    });
  }

  // ─── Tier 7: Events-Tours Sub-Pages ──────────────────────────────────────
  for (const slug of listSlugDirs(path.join(process.cwd(), 'src/app/events-tours'))) {
    entries.push({
      url: `${BASE_URL}/events-tours/${slug}/`,
      lastModified: lastmodOf(`src/app/events-tours/${slug}/page.tsx`),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  }

  // ─── Tier 8: Blog Posts (newest of publish date and last content change) ─
  for (const post of getBlogPosts()) {
    entries.push({
      url: `${BASE_URL}/blog/${post.slug}/`,
      lastModified: latest([post.publishDate, lastmodOf(`src/data/blog-posts/${post.slug}.json`, post.publishDate)]),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  // ─── Tier 9: Programmatic Packages ───────────────────────────────────────
  for (const slug of getPackages()) {
    entries.push({
      url: `${BASE_URL}/packages/${slug}/`,
      lastModified: lastmodOf(`src/data/packages/${slug}.json`),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  }

  entries.push({
    url: `${BASE_URL}/destinations/vietnam/course-conditions/`,
    lastModified: lastmodOf('src/app/destinations/vietnam/course-conditions/page.tsx'),
    changeFrequency: 'monthly',
    priority: 0.8,
  });
  return entries;
}
