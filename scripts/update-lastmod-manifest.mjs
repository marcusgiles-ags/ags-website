#!/usr/bin/env node
/**
 * update-lastmod-manifest.mjs
 *
 * Maintains src/data/lastmod-manifest.json — a content-hash ledger that gives
 * src/app/sitemap.ts TRUTHFUL <lastmod> dates.
 *
 * WHY: Vercel builds from a fresh upload, so fs.statSync().mtime === build time.
 * That stamped ~583 of 711 sitemap URLs with the build date on every deploy,
 * which teaches Google to ignore our lastmod signal entirely.
 *
 * HOW: For every content source file (page.tsx / data JSON) we store
 *   { hash, lastmod }. If the normalised content hash changes, lastmod becomes
 *   today's date. New files are seeded from their local mtime (meaningful on
 *   the authoring machine) the first time they are seen.
 *
 * Runs automatically as the first step of `npm run build`.
 * Commit/upload the updated manifest with every deploy.
 */
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const manifestPath = path.join(rootDir, 'src/data/lastmod-manifest.json');
const today = new Date().toISOString().split('T')[0];

const SOURCE_GLOBS = [
  // [directory, matcher] — every file that backs a sitemap URL
  ['src/app', (rel) => rel.endsWith('/page.tsx')],
  ['src/data/courses', (rel) => rel.endsWith('.json')],
  ['src/data/blog-posts', (rel) => rel.endsWith('.json')],
  ['src/data/seo-articles', (rel) => rel.endsWith('.json')],
  ['src/data/packages', (rel) => rel.endsWith('.json')],
];

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const hashOf = (file) =>
  crypto.createHash('sha1')
    .update(fs.readFileSync(file, 'utf-8').replace(/\r\n/g, '\n'))
    .digest('hex')
    .slice(0, 16);

const manifest = fs.existsSync(manifestPath)
  ? JSON.parse(fs.readFileSync(manifestPath, 'utf-8'))
  : {};

let added = 0, changed = 0, removed = 0;
const seen = new Set();

for (const [dir, match] of SOURCE_GLOBS) {
  for (const full of walk(path.join(rootDir, dir))) {
    const rel = path.relative(rootDir, full).replace(/\\/g, '/');
    if (!match(rel)) continue;
    seen.add(rel);
    const hash = hashOf(full);
    const prev = manifest[rel];
    if (!prev) {
      const mtime = fs.statSync(full).mtime.toISOString().split('T')[0];
      manifest[rel] = { hash, lastmod: mtime > today ? today : mtime };
      added++;
    } else if (prev.hash !== hash) {
      manifest[rel] = { hash, lastmod: today };
      changed++;
    }
  }
}

for (const rel of Object.keys(manifest)) {
  if (!seen.has(rel)) { delete manifest[rel]; removed++; }
}

const sorted = Object.fromEntries(Object.keys(manifest).sort().map((k) => [k, manifest[k]]));
fs.writeFileSync(manifestPath, JSON.stringify(sorted, null, 1) + '\n');
console.log(`[lastmod-manifest] ${Object.keys(sorted).length} sources | +${added} new, ~${changed} changed, -${removed} removed`);
