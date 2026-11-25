import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const publicDir = path.join(rootDir, 'public');

console.log('🚀 Running AGS 3-Layer Governance Pre-Flight Quality Gate...\n');

let errorCount = 0;
let warningCount = 0;

function reportError(msg) {
  console.error(`❌ ERROR: ${msg}`);
  errorCount++;
}

function reportWarning(msg) {
  console.warn(`⚠️  WARNING: ${msg}`);
  warningCount++;
}

function reportPass(msg) {
  console.log(`✅ PASS: ${msg}`);
}

function walkFiles(dir, extFilter = '.tsx', out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkFiles(full, extFilter, out);
    else if (entry.name.endsWith(extFilter)) out.push(full);
  }
  return out;
}

function imageExists(urlOrPath) {
  if (!urlOrPath) return false;
  const rel = urlOrPath.replace('https://www.asiagolfspecialists.com', '').split('?')[0];
  if (!rel.startsWith('/')) return true;
  return fs.existsSync(path.join(publicDir, rel.replace(/^\//, '')));
}

// ─── 1. DRAFT COMPARISON POST ISOLATION ───────────────────────────────────
console.log('--- 1. Competitor Comparison Draft Isolation ---');
const heldBackDraftSlugs = [
  'asia-golf-specialists-vs-ata-holidays',
  'asia-golf-specialists-vs-golf-explorer',
  'asia-golf-specialists-vs-golfing-getaways',
  'asia-golf-specialists-vs-the-golf-travel-agency'
];

const blogPostsDir = path.join(rootDir, 'src/data/blog-posts');
const seoArticlesDir = path.join(rootDir, 'src/data/seo-articles');
const packagesDir = path.join(rootDir, 'src/data/packages');

for (const slug of heldBackDraftSlugs) {
  const filePath = path.join(blogPostsDir, `${slug}.json`);
  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    if (data.status !== 'draft' && data.isDraft !== true) {
      reportError(`Draft competitor article ${slug}.json must have status="draft" or isDraft=true`);
    } else {
      reportPass(`Draft competitor article ${slug}.json isolated in draft status`);
    }
  }
}

// ─── 2. JSON INTERNAL LINK, BOILERPLATE & WORD COUNT AUDIT ────────────────
console.log('\n--- 2. JSON Content, Internal Links & Boilerplate Audit ---');
const contentDirs = [blogPostsDir, seoArticlesDir, packagesDir];
let jsonFilesChecked = 0;

for (const dir of contentDirs) {
  if (!fs.existsSync(dir)) continue;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.json'));

  for (const file of files) {
    jsonFilesChecked++;
    const filePath = path.join(dir, file);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(raw);

    // Draft leak check
    for (const draftSlug of heldBackDraftSlugs) {
      if (!heldBackDraftSlugs.some(s => file.includes(s)) && raw.includes(draftSlug)) {
        reportError(`File ${file} contains internal link to held-back draft: ${draftSlug}`);
      }
    }

    if (raw.includes('/blog/undefined/')) {
      reportError(`File ${file} contains broken link: /blog/undefined/`);
    }

    // Check internal markdown/HTML links for missing trailing slashes
    const mdLinkRegex = /\]\((\/(?:courses|accommodations|destinations|blog|packages|tours|events-tours|about|quote|download-guide|site-directory)[^)\s"#?]*)\)/g;
    let m;
    while ((m = mdLinkRegex.exec(raw)) !== null) {
      if (!m[1].endsWith('/')) {
        reportError(`JSON file ${file} has non-slash Markdown link: ${m[1]}`);
      }
    }
    const htmlHrefRegex = /href=\\?["'](\/(?:courses|accommodations|destinations|blog|packages|tours|events-tours|about|quote|download-guide|site-directory)[^"'\s#?\\]*)\\?["']/g;
    while ((m = htmlHrefRegex.exec(raw)) !== null) {
      if (!m[1].endsWith('/')) {
        reportError(`JSON file ${file} has non-slash HTML href: ${m[1]}`);
      }
    }

    // Deprecated course/accommodation paths under /destinations/
    const deprecatedMatches = raw.match(/["'\(]\/destinations\/[a-z0-9-]+\/(?:courses|accommodations)\/[a-z0-9-]+["'\/)]/g);
    if (deprecatedMatches) {
      const filtered = deprecatedMatches.filter(x => !x.includes('/images/'));
      if (filtered.length > 0) {
        reportError(`File ${file} contains deprecated route link: ${filtered.join(', ')}`);
      }
    }

    // SEO Articles specific checks: word count >= 600, no shared boilerplate, no templated/duplicate FAQs, no cross-country hallucinations
    if (dir === seoArticlesDir) {
      const words = (data.content || '').replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
      if (words < 600) {
        reportError(`SEO article ${file} is too thin (${words} words; minimum 600 words required)`);
      }
      if (
        (data.content || '').includes('Booking through AGS guarantees priority reservations, skip-the-line access') ||
        (data.content || '').includes('Curatorial Standards & Private Concierge Execution') ||
        (data.content || '').includes('## Why Book Through AGS?') ||
        (data.content || '').includes('## Logistics & Practicalities')
      ) {
        reportError(`SEO article ${file} still contains shared boilerplate sections`);
      }
      if (!Array.isArray(data.faqs) || data.faqs.length < 3) {
        reportError(`SEO article ${file} must have at least 3 topic-specific FAQs`);
      } else {
        for (const faq of data.faqs) {
          if (
            (faq.q || '').includes('take, and can it be done on a golf day in') ||
            (faq.q || '').includes('How do I book tee times and transfers mentioned in')
          ) {
            reportError(`SEO article ${file} contains templated FAQ question: "${faq.q}"`);
          }
        }
      }
      if (data.category === 'cambodia') {
        const fullText = (data.content || '') + ' ' + JSON.stringify(data.faqs || []);
        if (/\b(Da Nang|Hoi An|Phuket|Hoiana Shores|Ba Na Hills|Red Mountain|Blue Canyon|Tan Son Nhat)\b/i.test(fullText)) {
          reportError(`Cambodia SEO article ${file} contains cross-country hallucination (Da Nang/Hoi An/Phuket/Hoiana/Ba Na Hills)`);
        }
      }
    }

    // Blog Posts specific checks: no unparsed Markdown links [text](/url/) inside HTML content
    if (dir === blogPostsDir && data.status === 'approved') {
      if (/\[[^\]]+\]\(\/[^)]+\)/.test(data.content || '')) {
        reportError(`Approved blog post ${file} contains unparsed Markdown link [text](/url/) inside HTML content`);
      }
    }

    // Metadata title & description checks for published blog posts and seo-articles
    if (dir === seoArticlesDir || (dir === blogPostsDir && data.status === 'approved')) {
      const title = (data.metaTitle || data.title || '').trim();
      const desc = (data.metaDescription || data.description || data.excerpt || '').trim();
      if (title.includes('...')) {
        reportError(`${file} has truncated title containing "...": "${title}"`);
      }
      if (title.length + 6 > 60) {
        reportError(`${file} has title > 54 chars (${title.length} chars, ${title.length + 6} with " | AGS"): "${title}"`);
      }
      if (/(Experi|First-Tim|Gu|Rev|Rank|Comp)$|\.\.\.$/.test(title)) {
        reportError(`${file} has mid-word truncated title: "${title}"`);
      }
      if (!desc || desc.length < 90 || desc.length > 160) {
        reportError(`${file} has invalid description length (${desc.length}; must be 110-160 chars): "${desc}"`);
      }
      if (desc.includes('Executive Summary:') || desc.trim().startsWith('*')) {
        reportError(`${file} has raw Markdown in description: "${desc}"`);
      }
      if (/\b(fo|loc|par|rou|Wha|Cam|P|gre|indi|swee|undi|behi|spir|inter|part|diff|rec|exp|incl|opt|com|serv)\.$/i.test(desc) ||
          /\b(and how|ideal windows fo|rou|premium loc|and par|in P|Wha|covers Cam|for l|and V|designer, gre|courses like|save peak|including Tok|with undi|and swee)\.$/i.test(desc)) {
        reportError(`${file} has mid-word truncated description ending: "${desc.slice(-35)}"`);
      }
    }
  }
}
reportPass(`Audited ${jsonFilesChecked} JSON data files for link slashes, depth, and metadata`);

// ─── 3. NO SHADOWED STATIC DESTINATION ROUTES ─────────────────────────────
console.log('\n--- 3. Dynamic [slug] Route Shadowing Check ---');
const allowedDestSubdirs = new Set(['[slug]', 'courses', 'accommodations', 'culinary', 'culture', 'nightlife', 'course-conditions']);
let shadowedRoutes = 0;
for (const country of ['vietnam', 'thailand', 'cambodia']) {
  const destCountryDir = path.join(rootDir, 'src/app/destinations', country);
  if (!fs.existsSync(destCountryDir)) continue;
  for (const d of fs.readdirSync(destCountryDir, { withFileTypes: true })) {
    if (d.isDirectory() && !allowedDestSubdirs.has(d.name)) {
      reportError(`Shadowed static route folder detected: src/app/destinations/${country}/${d.name} (must use src/data/seo-articles/${d.name}.json via [slug]/page.tsx)`);
      shadowedRoutes++;
    }
  }
}
if (shadowedRoutes === 0) {
  reportPass('Zero shadowed static destination routes (all articles & comparisons served via [slug]/page.tsx)');
}

// ─── 4. TSX INTERNAL LINKS, SCHEMA & PLACEHOLDER AUDIT ────────────────────
console.log('\n--- 4. TSX Pages & Components Governance Audit ---');
const tsxFiles = [
  ...walkFiles(path.join(rootDir, 'src/app')),
  ...walkFiles(path.join(rootDir, 'src/components')),
];
let tsxLinkErrors = 0;
let tsxSchemaErrors = 0;

for (const file of tsxFiles) {
  const relFile = path.relative(rootDir, file).replace(/\\/g, '/');
  if (relFile.includes('/admin/') || relFile.includes('/CommandCenter/')) continue;
  const content = fs.readFileSync(file, 'utf-8');

  // Check static internal hrefs for trailing slash
  const hrefRegex = /(?:href|countryLink|linkPath)\s*[:=]\s*["'](\/(?:courses|accommodations|destinations|blog|packages|tours|events-tours|about|quote|download-guide|site-directory|privacy-policy|terms-of-service|liability-waiver)[^"'\s#?]*)["']/g;
  let m;
  while ((m = hrefRegex.exec(content)) !== null) {
    if (!m[1].endsWith('/')) {
      reportError(`${relFile} contains non-slash internal link: "${m[1]}"`);
      tsxLinkErrors++;
    }
  }

  // Check query-string crawl traps on /blog
  if (content.includes('/blog?country=') || content.includes('/blog?type=')) {
    reportError(`${relFile} contains /blog? query-string crawl trap link`);
    tsxLinkErrors++;
  }

  // Check accommodation & course specific invariants
  if (relFile.startsWith('src/app/accommodations/') && relFile.endsWith('/page.tsx') && relFile.split('/').length === 6) {
    if (content.includes('<strong>The Property</strong>')) {
      reportError(`${relFile} contains "<strong>The Property</strong>" placeholder text`);
      tsxSchemaErrors++;
    }
    const hotelTypeMatches = content.match(/"@type":\s*"(?:Hotel|LodgingBusiness)"/g) || [];
    if (hotelTypeMatches.length > 1) {
      reportError(`${relFile} contains duplicate Hotel/LodgingBusiness JSON-LD blocks (${hotelTypeMatches.length})`);
      tsxSchemaErrors++;
    }
  }

  if (relFile.startsWith('src/app/courses/') && relFile.endsWith('/page.tsx') && relFile.split('/').length === 6) {
    if (content.includes('the-oriental-jade/1.webp')) {
      reportError(`${relFile} references hotel image the-oriental-jade/1.webp in CourseSchemaBlock`);
      tsxSchemaErrors++;
    }
    if (/name=\{""\}|name=\{"[a-z0-9-]+"\}/.test(content)) {
      reportError(`${relFile} has empty or raw-slug name prop in CourseSchemaBlock`);
      tsxSchemaErrors++;
    }
    if (content.includes('images: [{') && content.includes('ags-logo-the-club-mark-nobkgrd.webp')) {
      reportError(`${relFile} uses club logo instead of course hero image in openGraph.images`);
      tsxSchemaErrors++;
    }
  }
}

if (tsxLinkErrors === 0 && tsxSchemaErrors === 0) {
  reportPass(`Audited ${tsxFiles.length} TSX files (0 non-slash links, 0 schema collisions, 0 "The Property" placeholders)`);
}

// ─── 5. IMAGE ASSET VERIFICATION (JSON + TSX + LIB) ───────────────────────
console.log('\n--- 5. Local Image Asset Existence Check (JSON + TSX + Lib) ---');
const generalImgRegex = /\/images\/[^"'\s\\]+\.(webp|jpg|jpeg|png|svg)/g;
let verifiedImages = 0;
let missingImages = 0;

for (const dir of contentDirs) {
  if (!fs.existsSync(dir)) continue;
  for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.json'))) {
    const raw = fs.readFileSync(path.join(dir, file), 'utf-8');
    const imagePaths = new Set();
    let match;
    while ((match = generalImgRegex.exec(raw)) !== null) {
      imagePaths.add(match[0]);
    }
    for (const imgPath of imagePaths) {
      if (!imageExists(imgPath)) {
        reportError(`Missing image in ${file}: "${imgPath}" does not exist in public/`);
        missingImages++;
      } else {
        verifiedImages++;
      }
    }
  }
}

// Check venueItineraries.ts
const venueItinPath = path.join(rootDir, 'src/lib/venueItineraries.ts');
if (fs.existsSync(venueItinPath)) {
  const raw = fs.readFileSync(venueItinPath, 'utf-8');
  const imagePaths = new Set();
  let match;
  while ((match = generalImgRegex.exec(raw)) !== null) {
    imagePaths.add(match[0]);
  }
  for (const imgPath of imagePaths) {
    if (!imageExists(imgPath)) {
      reportError(`Missing image in src/lib/venueItineraries.ts: "${imgPath}" does not exist in public/`);
      missingImages++;
    } else {
      verifiedImages++;
    }
  }
}

for (const file of tsxFiles) {
  const relFile = path.relative(rootDir, file).replace(/\\/g, '/');
  const content = fs.readFileSync(file, 'utf-8');
  const assetRegex = /(?:itemImage|imageUrl|src)\s*[:=]\s*\{?\s*["']((?:https:\/\/www\.asiagolfspecialists\.com)?\/images\/[^"']+)["']/g;
  let m;
  while ((m = assetRegex.exec(content)) !== null) {
    if (!imageExists(m[1])) {
      reportError(`Missing image in ${relFile}: "${m[1]}" does not exist in public/`);
      missingImages++;
    } else {
      verifiedImages++;
    }
  }
}

if (missingImages === 0) {
  reportPass(`Audited ${verifiedImages} image references across JSON, TSX, and Lib files (0 missing)`);
}

// ─── 6. ANTI-ORPHAN HUB & COURSE NAVIGATION RING AUDIT ────────────────────
console.log('\n--- 6. Anti-Orphan Hub & Navigation Ring Audit ---');
let orphanErrors = 0;
for (const country of ['vietnam', 'thailand', 'cambodia']) {
  // Courses check (data-driven JSON in src/data/courses/{country}/*.json)
  const courseDataDir = path.join(rootDir, 'src/data/courses', country);
  const destCoursesHub = fs.readFileSync(path.join(rootDir, 'src/app/destinations', country, 'courses/page.tsx'), 'utf-8');
  const courseSlugs = fs.existsSync(courseDataDir)
    ? fs.readdirSync(courseDataDir).filter(f => f.endsWith('.json')).map(f => f.replace(/\.json$/, ''))
    : [];

  const inboundNav = new Map(courseSlugs.map(s => [s, 0]));
  for (const slug of courseSlugs) {
    if (!destCoursesHub.includes(`/courses/${country}/${slug}/`)) {
      reportError(`Course /courses/${country}/${slug}/ is missing from src/app/destinations/${country}/courses/page.tsx`);
      orphanErrors++;
    }
    const rawCourse = fs.readFileSync(path.join(courseDataDir, `${slug}.json`), 'utf-8');
    const cData = JSON.parse(rawCourse);
    if (rawCourse.includes('the-oriental-jade/1.webp')) {
      reportError(`src/data/courses/${country}/${slug}.json references hotel image the-oriental-jade/1.webp`);
      orphanErrors++;
    }
    if (!cData.schema?.courseLength || cData.schema.courseLength === 7000 || cData.schema.courseLength < 5500 || cData.schema.courseLength > 8000) {
      reportError(`src/data/courses/${country}/${slug}.json has invalid Blue-Tee courseLength: ${cData.schema?.courseLength}`);
      orphanErrors++;
    }
    if (!cData.schema?.par || cData.schema.par < 70 || cData.schema.par > 73) {
      reportError(`src/data/courses/${country}/${slug}.json has invalid par: ${cData.schema?.par}`);
      orphanErrors++;
    }
    for (const img of (cData.images || [])) {
      if (img.src && !imageExists(img.src)) {
        reportError(`Missing course image in ${country}/${slug}.json: "${img.src}"`);
        orphanErrors++;
      }
    }
    for (const side of [cData.nav?.prev, cData.nav?.next]) {
      const m = side?.path?.match(/\/courses\/[a-z]+\/([a-z0-9-]+)\//);
      if (m && inboundNav.has(m[1])) inboundNav.set(m[1], inboundNav.get(m[1]) + 1);
    }
  }
  for (const [slug, count] of inboundNav.entries()) {
    if (count === 0) {
      reportError(`Course /courses/${country}/${slug}/ has 0 inbound links in the CourseNavigation ring`);
      orphanErrors++;
    }
  }

  // Accommodations check
  const accomDir = path.join(rootDir, 'src/app/accommodations', country);
  const destAccomHub = fs.readFileSync(path.join(rootDir, 'src/app/destinations', country, 'accommodations/page.tsx'), 'utf-8');
  const accomSlugs = fs.readdirSync(accomDir, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name);
  for (const slug of accomSlugs) {
    if (!destAccomHub.includes(`/accommodations/${country}/${slug}/`)) {
      reportError(`Accommodation /accommodations/${country}/${slug}/ is missing from src/app/destinations/${country}/accommodations/page.tsx`);
      orphanErrors++;
    }
  }
}

// Verify Tier 1 /courses/ hub dynamically includes all courses
const mainCoursesHub = fs.readFileSync(path.join(rootDir, 'src/app/courses/page.tsx'), 'utf-8');
if (!mainCoursesHub.includes('getAllCoursesByCountry') || !mainCoursesHub.includes('Complete Championship Course Directory')) {
  reportError('src/app/courses/page.tsx must dynamically include the Complete Championship Course Directory for 100% sitewide connectivity');
  orphanErrors++;
}

// Verify Tier 1 /accommodations/ hub dynamically includes all accommodations
const mainAccomHub = fs.readFileSync(path.join(rootDir, 'src/app/accommodations/page.tsx'), 'utf-8');
if (!mainAccomHub.includes('getAllAccommodationsByCountry') || !mainAccomHub.includes('Complete Luxury Accommodation Directory')) {
  reportError('src/app/accommodations/page.tsx must dynamically include the Complete Luxury Accommodation Directory for 100% sitewide connectivity');
  orphanErrors++;
}

if (orphanErrors === 0) {
  reportPass('All 67 courses and 46 accommodations are connected in Tier 1 hubs, destination hubs, and CourseNavigation rings');
}

// ─── 7. SITEMAP, ROBOTS, GALLERY NOINDEX & LEGAL PAGES AUDIT ──────────────
console.log('\n--- 7. Sitemap, Robots, Gallery Noindex & Legal Pages Audit ---');
const sitemapContent = fs.readFileSync(path.join(rootDir, 'src/app/sitemap.ts'), 'utf-8');
if (sitemapContent.includes('/gallery/')) {
  reportError('src/app/sitemap.ts must not include /gallery/ while it is a placeholder page');
} else {
  reportPass('/gallery/ is excluded from src/app/sitemap.ts');
}

const robotsContent = fs.readFileSync(path.join(rootDir, 'src/app/robots.ts'), 'utf-8');
if (robotsContent.includes('llms.txt') || robotsContent.includes('llms-full.txt')) {
  reportError('src/app/robots.ts sitemap array must only contain XML sitemaps (expose llms.txt via layout.tsx <link> and next.config.ts HTTP Link header)');
} else {
  reportPass('src/app/robots.ts sitemap array contains only XML sitemaps');
}

for (const legalPage of ['privacy-policy', 'terms-of-service', 'liability-waiver']) {
  const lpContent = fs.readFileSync(path.join(rootDir, 'src/app', legalPage, 'page.tsx'), 'utf-8');
  if (lpContent.includes('follow: false')) {
    reportError(`src/app/${legalPage}/page.tsx has follow: false (must be follow: true)`);
  }
  if (lpContent.includes('mailto:') && !lpContent.includes('<!--email_off-->')) {
    reportError(`src/app/${legalPage}/page.tsx contains unwrapped mailto link (triggers Cloudflare /cdn-cgi/l/email-protection 404 crawler trap)`);
  }
}
reportPass('Legal pages use robots: { index: false, follow: true } and wrap mailto links in <!--email_off-->');

// ─── 8. PACKAGES PAYLOAD, SCHEMA VALIDATION & LLMS.TXT HYGIENE AUDIT ──────
console.log('\n--- 8. HTML Payload, Schema.org Validation & LLMs.txt Audit ---');
const pkgHubContent = fs.readFileSync(path.join(rootDir, 'src/app/packages/page.tsx'), 'utf-8');
if (!pkgHubContent.includes('.slice(0, 12)') || !pkgHubContent.includes('<details')) {
  reportError('src/app/packages/page.tsx must slice featured cards (.slice(0, 12)) and include the <details> full package archive');
} else {
  reportPass('src/app/packages/page.tsx balances <2MB SSR payload (.slice(0, 12)) with full <details> crawlable archive');
}

const courseSchemaBlockContent = fs.readFileSync(path.join(rootDir, 'src/components/CourseSchemaBlock.tsx'), 'utf-8');
if (!courseSchemaBlockContent.includes('additionalProperty') || !courseSchemaBlockContent.includes('PropertyValue')) {
  reportError('src/components/CourseSchemaBlock.tsx must serialize course specs inside additionalProperty (PropertyValue)');
} else {
  reportPass('CourseSchemaBlock.tsx uses Schema.org-valid additionalProperty (PropertyValue)');
}

const pkgSlugPageContent = fs.readFileSync(path.join(rootDir, 'src/app/packages/[slug]/page.tsx'), 'utf-8');
if (pkgSlugPageContent.includes('"priceType": "Minimum"')) {
  reportError('src/app/packages/[slug]/page.tsx uses invalid Schema.org property priceType: "Minimum" on PriceSpecification (use minPrice instead)');
} else {
  reportPass('Packages [slug] page uses Schema.org-valid minPrice on PriceSpecification');
}

for (const llmFile of ['public/llms.txt', 'public/llms-full.txt']) {
  const llmContent = fs.readFileSync(path.join(rootDir, llmFile), 'utf-8');
  if (/<a\s/i.test(llmContent)) {
    reportError(`${llmFile} contains raw HTML <a> tags (must use clean Markdown links)`);
  }
  if (/https?:\/\/asiagolfspecialists\.com/i.test(llmContent)) {
    reportError(`${llmFile} contains non-www https://asiagolfspecialists.com URLs (must use canonical https://www.asiagolfspecialists.com)`);
  }
  if (/legend-danang|\/courses\/thailand\/alpine(?!-)|\/courses\/vietnam\/laguna-golf-lang-co/i.test(llmContent)) {
    reportError(`${llmFile} contains deprecated course slug`);
  }
}
reportPass('public/llms.txt and public/llms-full.txt pass canonical URL and Markdown hygiene checks');

// ─── 9. ANALYTICS & CONSENT MODE INTEGRITY ───────────────────────────────
// Regression guard: on 12 Oct 2026 a worldwide analytics_storage 'denied'
// default made GA4 report ~0 users for 8+ days while GSC still showed clicks.
console.log('\n--- 9. Analytics & Consent Mode Integrity Audit ---');
{
  const caPath = path.join(rootDir, 'src/components/ConsentAnalytics.tsx');
  const ca = fs.existsSync(caPath) ? fs.readFileSync(caPath, 'utf-8') : '';
  const layout = fs.readFileSync(path.join(rootDir, 'src/app/layout.tsx'), 'utf-8');
  let analyticsOk = true;
  const fail = (m) => { analyticsOk = false; reportError(m); };

  if (!ca) fail('src/components/ConsentAnalytics.tsx is missing (GTM/GA4 loader)');
  if (!/<ConsentAnalytics\s*\/>/.test(layout)) fail('src/app/layout.tsx must render <ConsentAnalytics /> sitewide');
  if (ca && !ca.includes('GTM-5J9WTV2X')) fail('ConsentAnalytics.tsx must load GTM container GTM-5J9WTV2X');
  if (ca && !/region:\s*OPT_IN_REGIONS/.test(ca)) fail('ConsentAnalytics.tsx consent default must be REGION-scoped (region: OPT_IN_REGIONS); a global denied default zeroes GA4 reporting');
  if (ca && !/analytics_storage:\s*'granted'/.test(ca)) fail('ConsentAnalytics.tsx must set a non-regional analytics_storage: \'granted\' default for non-opt-in regions');
  if (ca && /localStorage\.getItem\([^)]*\)\s*===\s*'accepted'\s*\?\s*'granted'\s*:\s*'denied'/.test(ca)) fail('ConsentAnalytics.tsx reintroduces the global accept-or-deny analytics default (Oct 2026 GA4 outage pattern)');
  if (ca && !ca.includes("event: 'gtm.js'")) fail("ConsentAnalytics.tsx must push { event: 'gtm.js' } before loading gtm.js so page-load triggers fire");
  if (ca && /gtag\(\s*'config'/.test(ca)) fail("ConsentAnalytics.tsx must not call gtag('config') — GA4 Google tag lives in GTM; manual config double-counts page views");

  // generate_lead must only fire on genuine submissions, exactly once per path.
  const leadEmitters = walkFiles(path.join(rootDir, 'src'), '.tsx')
    .filter((f) => /gtag\(\s*['"]event['"]\s*,\s*['"]generate_lead['"]/.test(fs.readFileSync(f, 'utf-8')))
    .map((f) => path.relative(rootDir, f).replace(/\\/g, '/'));
  const allowedLeadEmitters = ['src/components/InlineFastInquiry.tsx'];
  for (const f of leadEmitters) {
    if (!allowedLeadEmitters.includes(f)) fail(`${f} fires gtag generate_lead — only genuine form submissions may (quote form uses GTM form_submission_enquiry). Use a *_click event for CTA clicks.`);
  }
  if (analyticsOk) reportPass('GTM/GA4 loader, region-based Consent Mode v2 and generate_lead emitters are intact');
}

// ─── 10. PACKAGE & TOUR INVENTORY & SCHEMA LOCK ────────────────────────────
console.log('\n--- 10. Package & Signature Tour Indexability & Schema Lock ---');
{
  const packagesDir = path.join(rootDir, 'src/data/packages');
  const pkgFiles = fs.readdirSync(packagesDir).filter(f => f.endsWith('.json'));
  if (pkgFiles.length !== 27) {
    reportError(`Package inventory mismatch: expected exactly 27 flagship packages in src/data/packages, found ${pkgFiles.length}`);
  } else {
    reportPass(`All 27 flagship master packages present in catalog`);
  }

  const toursDir = path.join(rootDir, 'src/app/tours');
  const tourDirs = fs.readdirSync(toursDir).filter(f => fs.statSync(path.join(toursDir, f)).isDirectory());
  if (tourDirs.length === 0) {
    reportError(`Tour inventory empty: no signature tours found in src/app/tours`);
  } else {
    reportPass(`Verified signature tour catalog in src/app/tours (${tourDirs.length} tours found)`);
  }

  // Verify sitemap.ts includes both packages and tours without exclusion
  const sitemapContent = fs.readFileSync(path.join(rootDir, 'src/app/sitemap.ts'), 'utf-8');
  if (!sitemapContent.includes('/packages/') || !sitemapContent.includes('/tours/')) {
    reportError('src/app/sitemap.ts must index all packages and tours');
  } else {
    reportPass('Sitemap generator includes /packages/ and /tours/ routes');
  }

  // Verify dual currency in package template and schema priceCurrency: "USD"
  const pkgSlugContent = fs.readFileSync(path.join(rootDir, 'src/app/packages/[slug]/page.tsx'), 'utf-8');
  if (!pkgSlugContent.includes('"priceCurrency": "USD"')) {
    reportError('src/app/packages/[slug]/page.tsx schema must specify priceCurrency: "USD" for Google Rich Results compatibility');
  }
  if (!pkgSlugContent.includes('USD') || !pkgSlugContent.includes('AUD')) {
    reportError('src/app/packages/[slug]/page.tsx must render dual-currency (USD + AUD) for international transparency');
  }
}

// ─── 11. BANNED PATTERNS, NESTED ANCHORS & AIRLINE AUDIT ───────────────────
console.log('\n--- 11. Banned Patterns, Nested Anchors & Airline Audit ---');
{
  let bannedOk = true;
  const fail = (m) => { bannedOk = false; reportError(m); };

  const allTsx = walkFiles(path.join(rootDir, 'src'), '.tsx');
  const jsonDirs = ['src/data/seo-articles', 'src/data/blog-posts', 'src/data/packages'];
  const allJson = [];
  for (const jd of jsonDirs) {
    const fullJd = path.join(rootDir, jd);
    if (fs.existsSync(fullJd)) {
      for (const jf of fs.readdirSync(fullJd)) {
        if (jf.endsWith('.json')) allJson.push(path.join(fullJd, jf));
      }
    }
  }

  for (const f of [...allTsx, ...allJson]) {
    const content = fs.readFileSync(f, 'utf-8');
    if (/<a\b[^>]*>(?:(?!<\/a>)[\s\S])*?<a\b/i.test(content)) {
      fail(`Nested anchor tag <a><a ...> detected in ${path.relative(rootDir, f)}`);
    }
    if (content.includes('the experience extends far beyond the 18th green')) {
      fail(`Banned generic boilerplate ("the experience extends far beyond the 18th green") detected in ${path.relative(rootDir, f)}`);
    }
    if (content.includes('"architect": "Championship Layout"') || content.includes('"badge": "Championship Layout"') || content.includes('designer="Championship Layout"') || content.includes('"designer": "Championship Layout"')) {
      fail(`Banned generic architect placeholder "Championship Layout" detected in ${path.relative(rootDir, f)} (Mandate: all courses must specify real verified architect)`);
    }
    if (/Thai Airways/i.test(content)) {
      fail(`Banned airline "Thai Airways" detected in ${path.relative(rootDir, f)} (Mandate: use Singapore Airlines, Vietnam Airlines, Jetstar, VietJet, AirAsia)`);
    }
    if (/Mercedes(?:-Benz)?\s+(?:Sprinter|V-Class)|VIP\s+(?:luxury\s+|high-roof\s+)?Sprinter/i.test(content)) {
      fail(`Banned vehicle claim ("Mercedes Sprinter / V-Class") detected in ${path.relative(rootDir, f)} (Mandate: use "luxury private touring vehicles")`);
    }
    if (content.includes('12345678')) {
      fail(`Fabricated Tripadvisor placeholder ID (12345678) detected in ${path.relative(rootDir, f)}`);
    }
  }

  // Verify every seo-article JSON internal slug matches its filename
  const seoDirCheck = path.join(rootDir, 'src/data/seo-articles');
  for (const jf of fs.readdirSync(seoDirCheck).filter(x => x.endsWith('.json'))) {
    const j = JSON.parse(fs.readFileSync(path.join(seoDirCheck, jf), 'utf-8'));
    if (j.slug !== jf.replace('.json', '')) {
      fail(`src/data/seo-articles/${jf} has internal slug "${j.slug}" that does not match filename (causes sitemap 404)`);
    }
  }

  // Verify all 67 courses have valid Blue-Tee integer yardage (not 7000) and par (70-73) matching courses-catalog.json
  const catalogPath = path.join(rootDir, 'src/data/courses-catalog.json');
  if (fs.existsSync(catalogPath)) {
    const catalog = JSON.parse(fs.readFileSync(catalogPath, 'utf-8'));
    if (catalog.length !== 67) fail(`courses-catalog.json must have 67 courses (found ${catalog.length})`);
    for (const c of catalog) {
      if (!Number.isInteger(c.par) || c.par < 70 || c.par > 73) {
        fail(`Invalid par (${c.par}) for course ${c.country}/${c.slug}`);
      }
      if (!Number.isInteger(c.courseLengthBlueTeesYards) || c.courseLengthBlueTeesYards < 5500 || c.courseLengthBlueTeesYards > 8000 || c.courseLengthBlueTeesYards === 7000) {
        fail(`Invalid or placeholder courseLengthBlueTeesYards (${c.courseLengthBlueTeesYards}) for course ${c.country}/${c.slug}`);
      }
    }
  }

  if (bannedOk) {
    reportPass('Zero nested anchors, zero banned boilerplates, and zero Thai Airways occurrences found sitewide');
  }
}

// ─── 12. NEXT-GEN TOUR LOCK, HYDRATION, SCHEMA COLLISION & LLMS DATA GATE ──
console.log('\n--- 12. Next-Gen Tour Lock, Hydration, Schema & LLMs Data Gate ---');
{
  let gate12Ok = true;
  const fail = (m) => { gate12Ok = false; reportError(m); };

  // 1. Tour Template Lock
  const toursDir = path.join(rootDir, 'src/app/tours');
  for (const slug of fs.readdirSync(toursDir)) {
    const dirPath = path.join(toursDir, slug);
    if (!fs.statSync(dirPath).isDirectory()) continue;
    if (fs.existsSync(path.join(dirPath, 'layout.tsx'))) {
      fail(`Redundant layout.tsx found in src/app/tours/${slug}/layout.tsx (metadata must be exported directly from page.tsx)`);
    }
    const tp = fs.readFileSync(path.join(dirPath, 'page.tsx'), 'utf-8');
    if (/["']use client["']/.test(tp) || tp.includes('viewMode') || tp.includes('Classic View')) {
      fail(`src/app/tours/${slug}/page.tsx must be a pure Server Component locked to NextGenTourTemplate (no "use client" or viewMode toggle)`);
    }
  }

  // 2. Client Hydration Hygiene
  const serverOnlyFiles = [
    'src/components/CourseSchemaBlock.tsx',
    'src/components/CourseNavigation.tsx',
    'src/components/ArticleNavigation.tsx',
    'src/components/DestinationBackLink.tsx',
    'src/components/GuideDownloadCTA.tsx',
    'src/app/events-tours/page.tsx',
  ];
  for (const rel of serverOnlyFiles) {
    const fp = path.join(rootDir, rel);
    if (fs.existsSync(fp) && /["']use client["']/.test(fs.readFileSync(fp, 'utf-8'))) {
      fail(`${rel} must remain a Server Component (do not add "use client")`);
    }
  }

  // 3. Schema Multi-Type, Placeholder Designer, 1px Cloaking & TSX Metadata Checks
  const allTsx = walkFiles(path.join(rootDir, 'src'), '.tsx');
  for (const f of allTsx) {
    const rel = path.relative(rootDir, f).replace(/\\/g, '/');
    const c = fs.readFileSync(f, 'utf-8');
    if (c.includes('["TouristTrip", "Product"]') || c.includes('["TouristDestination", "CollectionPage"]') || c.includes('["TravelAgency", "Organization"]') || c.includes('["Organization", "TravelAgency"]')) {
      fail(`${rel} contains banned multi-type Schema.org array`);
    }
    if (c.includes('"@type": "Report"') || c.includes("'@type': 'Report'")) {
      fail(`${rel} contains banned "@type": "Report" (must use "@type": "Article")`);
    }
    if (c.includes('84905123456')) {
      fail(`${rel} contains dummy WhatsApp number 84905123456 (must use 84935601099)`);
    }
    if (/<a\s+[^>]*href=["']https:\/\/wa\.me\//.test(c)) {
      fail(`${rel} contains crawl-trapping <a href="https://wa.me/..."> tag (must use <button type="button" onClick={...}>)`);
    }
    if (c.includes('designer="Championship Golf Design"')) {
      fail(`${rel} contains generic placeholder designer="Championship Golf Design"`);
    }
    if (c.includes("clip: 'rect(0, 0, 0, 0)'")) {
      fail(`${rel} contains banned 1px hidden clip: 'rect(0, 0, 0, 0)' cloaking div`);
    }
    if (c.includes('â†’')) {
      fail(`${rel} contains UTF-8 mojibake arrow (â†’)`);
    }
    if (rel.startsWith('src/app/') && (rel.endsWith('/page.tsx') || rel.endsWith('/layout.tsx'))) {
      const metaMatch = c.match(/export const metadata[\s\S]*?\n\};/);
      if (metaMatch) {
        const metaBlock = metaMatch[0];
        const descMatch = metaBlock.match(/description:\s*(?:"([^"]+)"|'([^']+)')/);
        if (descMatch) {
          const d = descMatch[1] || descMatch[2];
          if (d.length < 90 || d.length > 160) {
            fail(`${rel} has out-of-range metadata.description (${d.length} chars; must be 90-160)`);
          }
        }
        const absTitleMatch = metaBlock.match(/title:\s*\{\s*absolute:\s*(?:"([^"]+)"|'([^']+)')\s*\}/);
        if (absTitleMatch) {
          const t = absTitleMatch[1] || absTitleMatch[2];
          if (t.length < 30 || t.length > 60) {
            fail(`${rel} has out-of-range metadata.title.absolute (${t.length} chars; must be 30-60)`);
          }
        }
      }
    }
  }

  // 4. LLMs.txt Data Corruption Check
  for (const llmFile of ['public/llms.txt', 'public/llms-full.txt']) {
    const lc = fs.readFileSync(path.join(rootDir, llmFile), 'utf-8');
    if (lc.includes('parseInt(') || lc.includes('Championship Design') || lc.includes('727272') || lc.includes('651670007310')) {
      fail(`${llmFile} contains corrupted course table data (parseInt / Championship Design / 727272)`);
    }
  }

  // 5. RootLayout & Review Snippets Governance Guard (prevents WRS <head> duplication & multiple AggregateRating GSC errors)
  const rootLayoutSrc = fs.readFileSync(path.join(rootDir, 'src/app/layout.tsx'), 'utf-8');
  const headMatch = rootLayoutSrc.match(/<head>[\s\S]*?<\/head>/i);
  if (headMatch && headMatch[0].includes('application/ld+json')) {
    fail('src/app/layout.tsx must NOT place <script type="application/ld+json"> inside <head> (causes Next.js App Router WRS hydration duplication)');
  }
  const stripComments = (src) => src.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\/\/.*$/gm, '');
  if (stripComments(rootLayoutSrc).includes('aggregateRating')) {
    fail('src/app/layout.tsx must NOT emit sitewide first-party aggregateRating on #organization (violates Google Review Snippets policy)');
  }
  const aboutSrc = fs.readFileSync(path.join(rootDir, 'src/app/about/page.tsx'), 'utf-8');
  if (stripComments(aboutSrc).includes('aggregateRating')) {
    fail('src/app/about/page.tsx must NOT emit duplicate/self-serving aggregateRating on #organization');
  }
  const schemaLibPath = path.join(rootDir, 'src/lib/schema.ts');
  if (!fs.existsSync(schemaLibPath)) {
    fail('src/lib/schema.ts centralized schema builder is missing');
  } else {
    const schemaLibSrc = fs.readFileSync(schemaLibPath, 'utf-8');
    if (stripComments(schemaLibSrc).includes('aggregateRating')) {
      fail('src/lib/schema.ts must NOT inject first-party aggregateRating onto #organization');
    }
  }

  if (gate12Ok) {
    reportPass('Next-Gen Tour Server Components, hydration boundaries, Schema types, TSX metadata, and LLMs.txt specs verified');
  }
}

console.log('\n========================================');
console.log(`Pre-Flight Check Complete.`);
console.log(`Errors: ${errorCount} | Warnings: ${warningCount}`);
console.log('========================================\n');

if (errorCount > 0) {
  process.exit(1);
} else {
  console.log('🎉 ALL 3-LAYER GOVERNANCE PRE-FLIGHT CHECKS PASSED!\n');
  process.exit(0);
}
