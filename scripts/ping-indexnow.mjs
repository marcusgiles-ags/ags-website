/**
 * Post-deploy IndexNow ping script for Asia Golf Specialists.
 * Submits all canonical URLs from https://www.asiagolfspecialists.com/sitemap.xml
 * to Bing, Yandex, Seznam & Naver via the shared IndexNow endpoint, feeding
 * ChatGPT Search, Copilot, and Perplexity immediately after every deployment.
 *
 * Usage:
 *   node --use-system-ca scripts/ping-indexnow.mjs
 */

const HOST = 'www.asiagolfspecialists.com';
const KEY = 'ags2026indexnow8f9a2b4c6d1e';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

async function main() {
  console.log(`[IndexNow] Fetching live sitemap: ${SITEMAP_URL}`);
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch sitemap (${res.status})`);
  }
  const xml = await res.text();
  const urls = [...xml.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)].map((m) => m[1]);
  if (urls.length === 0) {
    throw new Error('No <loc> URLs found in sitemap.xml');
  }
  console.log(`[IndexNow] Found ${urls.length} canonical URLs. Submitting to api.indexnow.org...`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  const ping = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });

  const body = await ping.text();
  if (ping.ok || ping.status === 202) {
    console.log(`[IndexNow] SUCCESS (HTTP ${ping.status}) — ${urls.length} URLs submitted.`);
  } else {
    console.error(`[IndexNow] FAILED (HTTP ${ping.status}): ${body}`);
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('[IndexNow] Error:', err);
  process.exit(1);
});
