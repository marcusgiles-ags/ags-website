import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ─── Default: allow all crawlers ──────────────────────────────────────
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/static/media/', '/*.woff2$', '/pro-partnership/deck/', '/brand-guidelines/', '/trade-portal/', '/agent-portal/'],
      },
      // ─── Social Media Scrapers (explicit allow for link previews) ─────────
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
      },
      {
        userAgent: 'Facebot',
        allow: '/',
      },
      {
        userAgent: 'WhatsApp',
        allow: '/',
      },
      {
        userAgent: 'Twitterbot',
        allow: '/',
      },
      // ─── AI Search Engines (AEO / GEO Dominance) ─────────────────────────
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'OAI-SearchBot',   // OpenAI web search / ChatGPT search features
        allow: '/',
      },
      {
        userAgent: 'ChatGPT-User',    // ChatGPT real-time browsing
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
      {
        userAgent: 'PerplexityBot',
        allow: '/',
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
      },
      {
        userAgent: 'Claude-Web',
        allow: '/',
      },
      {
        userAgent: 'ClaudeBot',
        allow: '/',
      },
      {
        userAgent: 'cohere-ai',       // Cohere AI search
        allow: '/',
      },
      {
        userAgent: 'DuckAssistBot',   // DuckDuckGo AI answers
        allow: '/',
      },
      {
        userAgent: 'Omgilibot',
        allow: '/',
      },
      {
        userAgent: 'CCBot',
        allow: '/',
      },
      // ─── Block AI Training Scrapers (not search — no user benefit) ────────
      {
        userAgent: 'Amazonbot',
        disallow: '/',
      },
      {
        userAgent: 'Applebot-Extended',
        disallow: '/',
      },
      {
        userAgent: 'Bytespider',
        disallow: '/',
      },
      {
        userAgent: 'meta-externalagent',
        disallow: '/',
      },
    ],
    sitemap: [
      'https://www.asiagolfspecialists.com/sitemap.xml',
    ],
  };
}
