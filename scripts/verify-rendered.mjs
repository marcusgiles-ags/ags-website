#!/usr/bin/env node
/**
 * AGS Real-Browser & JSON-LD Graph Verification Gate (Playwright + Chromium)
 *
 * Boots the compiled production Next.js server (`next start`), loads a
 * comprehensive sample of every page template in real headless Chromium
 * (mirroring Googlebot's Web Rendering Service hydration), and also parses
 * every built static HTML file in `.next/server/app` for JSON-LD graph hygiene.
 *
 * Hard-fails on:
 *  1. Any `<script type="application/ld+json">` inside `<head>` (WRS duplication risk)
 *  2. Duplicate identical JSON-LD script blocks in the live hydrated DOM
 *  3. Any `@id` entity with multiple `AggregateRating` objects or conflicting scalar properties
 *  4. Missing required Google Rich Results properties on `Review`, `GolfCourse`, `LodgingBusiness`, `TravelAgency`
 *  5. Tour-operator comparison blog posts falsely emitting `GolfCourse` Review schema
 *  6. Any HTTP status !== 200, missing/multiple `<h1>`, missing canonical (on indexable pages),
 *     console errors, uncaught page errors, or React hydration warnings in Chromium
 *  7. Decoded `<title>` or `<meta name="description">` length violations on indexable pages
 */
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const builtAppDir = path.join(rootDir, '.next/server/app');

const PORT = Number(process.env.VERIFY_PORT || 3099);
const BASE_URL = `http://127.0.0.1:${PORT}`;

const SAMPLE_ROUTES = [
  // Core & Entity pages
  { path: '/', label: 'Home' },
  { path: '/about/', label: 'About' },
  { path: '/quote/', label: 'Quote' },
  { path: '/quote/thank-you/', label: 'Quote Thank You (noindex)', expectNoindex: true },
  { path: '/site-directory/', label: 'Site Directory' },

  // Flagship Hubs
  { path: '/courses/', label: 'All Courses Hub' },
  { path: '/accommodations/', label: 'All Accommodations Hub' },
  { path: '/tours/', label: 'Signature Tours Hub' },
  { path: '/packages/', label: 'Packages Hub' },
  { path: '/blog/', label: 'Blog Hub' },
  { path: '/destinations/vietnam/', label: 'Vietnam Destination Hub' },
  { path: '/destinations/thailand/courses/', label: 'Thailand Courses Hub' },
  { path: '/destinations/cambodia/accommodations/', label: 'Cambodia Accommodations Hub' },
  { path: '/destinations/vietnam/course-conditions/', label: 'Vietnam Course Conditions' },

  // The exact URL flagged by GSC Review Snippets + another destination article
  { path: '/destinations/vietnam/true-cost-golf-vietnam-2026-da-nang-pricing-guide/', label: 'GSC Flagged Article (True Cost)' },
  { path: '/destinations/vietnam/planning-12-man-golf-trip-vietnam-logistics-caddies-costs-2026/', label: '12-Man Vietnam Guide' },

  // Blog posts (top organic guides, course reviews, and competitor comparison)
  { path: '/blog/best-time-to-golf-in-vietnam/', label: 'Blog Guide (Best Time VN)' },
  { path: '/blog/beginners-guide-golf-in-vietnam/', label: 'Blog Guide (Beginners VN)' },
  { path: '/blog/top-10-golf-courses-vietnam-2026/', label: 'Blog Guide (Top 10 VN)' },
  { path: '/blog/best-time-to-golf-in-thailand/', label: 'Blog Guide (Best Time TH)' },
  { path: '/blog/hoiana-shores-golf-club-review/', label: 'Blog Course Review (Hoiana)' },
  { path: '/blog/ba-na-hills-golf-club-review/', label: 'Blog Course Review (Ba Na Hills)' },
  { path: '/blog/the-bluffs-ho-tram-review/', label: 'Blog Course Review (The Bluffs)' },
  { path: '/blog/asia-golf-specialists-vs-golfasian/', label: 'Blog Competitor Comparison (Golfasian)', forbidGolfCourseReview: true },

  // Commercial Venues & Products (with CuratorScorecard / TouristTrip)
  { path: '/courses/vietnam/hoiana-shores/', label: 'Course Page (Hoiana Shores)' },
  { path: '/courses/thailand/black-mountain/', label: 'Course Page (Black Mountain)' },
  { path: '/accommodations/vietnam/an-bang-beach-villas/', label: 'Accommodation (An Bang Villas)' },
  { path: '/accommodations/vietnam/capella-hanoi/', label: 'Accommodation (Capella Hanoi)' },
  { path: '/tours/the-central-coast-classic/', label: 'Signature Tour (Central Coast Classic)' },
  { path: '/packages/da-nang-championship-links/', label: 'Package (Da Nang Championship Links)' },
];

let failures = [];
let warnings = [];

function fail(scope, msg) {
  console.error(`❌ [${scope}] ${msg}`);
  failures.push(`[${scope}] ${msg}`);
}

function warn(scope, msg) {
  console.warn(`⚠️  [${scope}] ${msg}`);
  warnings.push(`[${scope}] ${msg}`);
}

function walkHtml(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walkHtml(full, out);
    else if (e.name.endsWith('.html')) out.push(full);
  }
  return out;
}

/**
 * Inspect an array of parsed JSON-LD script blocks from one page.
 * Validates:
 *  - No multiple AggregateRating nodes per entity @id
 *  - No conflicting scalar properties (`priceRange`, `image`, `logo.url`, `name`) for the same `@id`
 *  - Required LocalBusiness fields (`address`, `image`) on `TravelAgency`, `GolfCourse`, `LodgingBusiness`, `Hotel`
 *  - Required Review fields (`itemReviewed.name`, `reviewRating.ratingValue`, `author.name`)
 */
function validateJsonLdBlocks(scope, rawScripts, opts = {}) {
  const byId = new Map();
  const seenExact = new Set();
  let parsedBlocks = 0;

  for (let i = 0; i < rawScripts.length; i++) {
    const raw = (rawScripts[i] || '').trim();
    if (!raw) continue;

    if (seenExact.has(raw)) {
      fail(scope, `Duplicate identical JSON-LD script block detected in DOM (script #${i + 1})`);
    }
    seenExact.add(raw);

    let parsed;
    try {
      parsed = JSON.parse(raw);
      parsedBlocks++;
    } catch (err) {
      fail(scope, `Invalid JSON-LD syntax in script #${i + 1}: ${err.message}`);
      continue;
    }

    const visit = (node) => {
      if (!node || typeof node !== 'object') return;
      if (Array.isArray(node)) {
        node.forEach(visit);
        return;
      }

      const id = typeof node['@id'] === 'string' ? node['@id'] : null;
      const type = node['@type'];
      const types = Array.isArray(type) ? type : type ? [type] : [];

      if (id) {
        if (!byId.has(id)) byId.set(id, []);
        byId.get(id).push(node);
      }

      // Check LocalBusiness-family required fields when defined (not bare @id ref)
      const propKeys = Object.keys(node).filter((k) => k !== '@context' && k !== '@id');
      if (propKeys.length > 0) {
        if (types.some((t) => ['TravelAgency', 'GolfCourse', 'LodgingBusiness', 'Hotel'].includes(t))) {
          if (!node.name) fail(scope, `${types.join('/')} entity missing 'name'`);
          if (!node.address) fail(scope, `${types.join('/')} ("${node.name || id}") missing 'address'`);
          if (!node.image) fail(scope, `${types.join('/')} ("${node.name || id}") missing 'image'`);
        }
        if (types.includes('TravelAgency') && (node.aggregateRating || node.review)) {
          fail(scope, `TravelAgency ("${node.name || id}") must NOT emit first-party aggregateRating or review (Google Review Snippets policy)`);
        }
        if (types.includes('Review')) {
          if (!node.itemReviewed || !node.itemReviewed.name) {
            fail(scope, `Review schema missing itemReviewed.name`);
          }
          if (!node.reviewRating || !node.reviewRating.ratingValue) {
            fail(scope, `Review schema missing reviewRating.ratingValue`);
          }
          if (!node.author || !node.author.name) {
            fail(scope, `Review schema missing author.name`);
          }
          if (opts.forbidGolfCourseReview && node.itemReviewed?.['@type'] === 'GolfCourse') {
            fail(scope, `Competitor comparison page falsely emitted GolfCourse Review schema ("${node.itemReviewed.name}")`);
          }
        }
      }

      for (const [k, v] of Object.entries(node)) {
        if (k === '@context') continue;
        visit(v);
      }
    };

    visit(parsed);
  }

  // Graph-level merge checks per @id
  for (const [id, nodes] of byId.entries()) {
    const aggRatings = nodes.filter((n) => n.aggregateRating !== undefined);
    if (aggRatings.length > 1) {
      fail(scope, `Entity ${id} has ${aggRatings.length} aggregateRating objects (triggers GSC "Review has multiple aggregate ratings")`);
    }

    const checkConflict = (field, getter) => {
      const vals = new Set(nodes.map(getter).filter((v) => v !== undefined && v !== null && v !== ''));
      if (vals.size > 1) {
        fail(scope, `Entity ${id} has conflicting "${field}" values across page JSON-LD blocks: ${[...vals].join(' vs ')}`);
      }
    };

    checkConflict('name', (n) => n.name);
    checkConflict('priceRange', (n) => n.priceRange);
    checkConflict('image', (n) => (typeof n.image === 'string' ? n.image : n.image?.url));
    checkConflict('logo.url', (n) => (typeof n.logo === 'string' ? n.logo : n.logo?.url));
  }

  return parsedBlocks;
}

// ─── STEP 1: STATIC AUDIT OF ALL COMPILED `.next/server/app/**/*.html` ────
console.log('=== Step 1: Auditing ALL Compiled Built HTML Files (.next/server/app) ===');
if (!fs.existsSync(builtAppDir)) {
  console.error('❌ .next/server/app not found. Run `npm run build` before `npm run verify:rendered`.');
  process.exit(1);
}

const builtFiles = walkHtml(builtAppDir).filter((f) => {
  const rel = path.relative(builtAppDir, f).replace(/\\/g, '/');
  return !rel.startsWith('_');
});

let staticChecked = 0;
for (const file of builtFiles) {
  const rel = path.relative(builtAppDir, file).replace(/\\/g, '/');
  const html = fs.readFileSync(file, 'utf8');
  const headEnd = html.indexOf('</head>');
  const head = headEnd > -1 ? html.slice(0, headEnd) : '';

  const scripts = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
  for (const m of scripts) {
    if (headEnd > -1 && m.index < headEnd) {
      fail(`static:${rel}`, `<script type="application/ld+json"> found inside <head> (WRS hydration duplication risk)`);
    }
  }

  validateJsonLdBlocks(`static:${rel}`, scripts.map((m) => m[1]), {
    forbidGolfCourseReview: rel.startsWith('blog/asia-golf-specialists-vs-'),
  });
  staticChecked++;
}
console.log(`Checked ${staticChecked} compiled HTML files for <head> JSON-LD and graph conflicts.\n`);

// ─── STEP 2: REAL CHROMIUM HYDRATED DOM VERIFICATION ──────────────────────
console.log(`=== Step 2: Booting Production Server on ${BASE_URL} & Auditing Live Chromium DOM ===`);

async function waitForServer(url, timeoutMs = 20000) {
  const deadline = Date.now() + timeoutMs;
  while (Date.now() < deadline) {
    try {
      const r = await fetch(url);
      if (r.status < 500) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error(`Timed out waiting for Next.js server at ${url}`);
}

const nextBin = path.join(rootDir, 'node_modules/next/dist/bin/next');
const serverProc = spawn(process.execPath, [nextBin, 'start', '-p', String(PORT), '-H', '127.0.0.1'], {
  cwd: rootDir,
  stdio: ['ignore', 'pipe', 'pipe'],
  env: { ...process.env, NODE_ENV: 'production' },
});

let serverStderr = '';
serverProc.stderr.on('data', (chunk) => { serverStderr += chunk.toString(); });

let browser;
try {
  await waitForServer(`${BASE_URL}/`);
  browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Linux; Android 6.0.1; Nexus 5X Build/MMB29P) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    viewport: { width: 412, height: 915 },
  });

  for (const route of SAMPLE_ROUTES) {
    const page = await context.newPage();
    const consoleErrors = [];
    const pageErrors = [];

    // Block external calls and heavy hero mp4 streaming so Chromium hydration verification settles cleanly
    await page.route('**/*', (reqRoute) => {
      const url = reqRoute.request().url();
      if (url.endsWith('.mp4') || url.endsWith('.webm')) {
        reqRoute.abort();
      } else if (url.startsWith(BASE_URL) || url.startsWith('data:') || url.startsWith('blob:')) {
        reqRoute.continue();
      } else {
        reqRoute.abort();
      }
    });

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        const text = msg.text();
        if (!text.includes('ERR_FAILED') && !text.includes('net::ERR_')) {
          consoleErrors.push(text);
        }
      }
    });
    page.on('pageerror', (err) => pageErrors.push(err.message));

    const targetUrl = `${BASE_URL}${route.path}`;
    const res = await page.goto(targetUrl, { waitUntil: 'load', timeout: 30000 });
    // Let React hydration & effects settle
    await page.waitForTimeout(600);

    const status = res?.status() ?? 0;
    if (status !== 200) {
      fail(route.label, `HTTP status ${status} for ${route.path}`);
    }

    const dom = await page.evaluate(() => {
      const headJsonLd = document.head.querySelectorAll('script[type="application/ld+json"]').length;
      const allJsonLd = Array.from(document.querySelectorAll('script[type="application/ld+json"]')).map((el) => el.textContent || '');
      const h1Count = document.querySelectorAll('h1').length;
      const title = (document.title || '').trim();
      const desc = (document.querySelector('meta[name="description"]')?.getAttribute('content') || '').trim();
      const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href') || '';
      const robots = Array.from(document.querySelectorAll('meta[name="robots"]')).map((m) => m.getAttribute('content') || '').join(',');
      const brokenImgs = Array.from(document.querySelectorAll('img'))
        .filter((img) => img.complete && img.naturalWidth === 0 && (img.getAttribute('src') || '').startsWith('/'))
        .map((img) => img.getAttribute('src'));
      return { headJsonLd, allJsonLd, h1Count, title, desc, canonical, robots, brokenImgs };
    });

    if (dom.headJsonLd > 0) {
      fail(route.label, `${dom.headJsonLd} JSON-LD script(s) rendered inside <head> after hydration`);
    }
    if (dom.h1Count !== 1) {
      fail(route.label, `Expected exactly 1 <h1>, found ${dom.h1Count}`);
    }

    const isNoindex = /noindex/i.test(dom.robots);
    if (route.expectNoindex && !isNoindex) {
      fail(route.label, `Expected meta robots noindex, got "${dom.robots || 'none'}"`);
    }
    if (!route.expectNoindex && isNoindex) {
      fail(route.label, `Unexpected noindex on indexable route: "${dom.robots}"`);
    }

    if (!isNoindex) {
      if (!dom.canonical || !dom.canonical.startsWith('https://www.asiagolfspecialists.com/') || !dom.canonical.endsWith('/')) {
        fail(route.label, `Invalid or missing canonical: "${dom.canonical}"`);
      }
      if (dom.title.length < 25 || dom.title.length > 62) {
        fail(route.label, `Rendered title length ${dom.title.length} out of range (25–62): "${dom.title}"`);
      }
      if (dom.desc.length < 90 || dom.desc.length > 165) {
        fail(route.label, `Rendered meta description length ${dom.desc.length} out of range (90–165): "${dom.desc}"`);
      }
    }

    if (dom.brokenImgs.length > 0) {
      fail(route.label, `Broken local images in Chromium: ${dom.brokenImgs.join(', ')}`);
    }
    if (consoleErrors.length > 0) {
      fail(route.label, `Console errors in Chromium: ${consoleErrors.join(' | ')}`);
    }
    if (pageErrors.length > 0) {
      fail(route.label, `Uncaught page errors in Chromium: ${pageErrors.join(' | ')}`);
    }

    const blockCount = validateJsonLdBlocks(`dom:${route.label}`, dom.allJsonLd, {
      forbidGolfCourseReview: Boolean(route.forbidGolfCourseReview),
    });

    // Verify canonical #organization exists exactly once in live DOM
    const orgBlocks = dom.allJsonLd.filter((s) => s.includes('"@type":"TravelAgency"') && s.includes('"#organization"'));
    if (orgBlocks.length > 1) {
      fail(route.label, `Multiple TravelAgency #organization JSON-LD blocks in hydrated DOM (${orgBlocks.length})`);
    }

    console.log(`  ✅ ${route.label.padEnd(42)} | HTTP ${status} | JSON-LD: ${blockCount} | <head>LD: ${dom.headJsonLd} | title:${dom.title.length}c | desc:${dom.desc.length}c`);
    await page.close();
  }
} finally {
  if (browser) await browser.close();
  serverProc.kill('SIGTERM');
}

console.log('\n========================================');
console.log(`Real-Browser Verification Complete.`);
console.log(`Static HTML Audited: ${staticChecked} | Live Chromium Routes: ${SAMPLE_ROUTES.length}`);
console.log(`Failures: ${failures.length} | Warnings: ${warnings.length}`);
console.log('========================================\n');

if (failures.length > 0) {
  if (serverStderr.trim()) {
    console.error('Server stderr preview:', serverStderr.slice(0, 600));
  }
  process.exit(1);
}
console.log('🎉 ALL STATIC GRAPH & REAL-BROWSER CHROMIUM CHECKS PASSED!\n');
