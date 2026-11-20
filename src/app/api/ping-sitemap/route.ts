import { NextResponse } from 'next/server';

// This route is called automatically by a Vercel deploy hook (or cron)
// to ping Google Search Console's sitemap ping URL after each deploy.
// It requires no API keys — Google's ping endpoint is public.

export async function GET() {
  const sitemapUrl = encodeURIComponent('https://www.asiagolfspecialists.com/sitemap.xml');
  const pingUrl = `https://www.google.com/ping?sitemap=${sitemapUrl}`;

  try {
    const res = await fetch(pingUrl, { method: 'GET' });
    if (res.ok) {
      return NextResponse.json({
        success: true,
        message: 'Sitemap pinged to Google Search Console successfully.',
        sitemapUrl: decodeURIComponent(sitemapUrl),
        timestamp: new Date().toISOString(),
      });
    } else {
      return NextResponse.json(
        { success: false, message: `Google ping returned status ${res.status}` },
        { status: 500 }
      );
    }
  } catch (err) {
    return NextResponse.json(
      { success: false, message: String(err) },
      { status: 500 }
    );
  }
}
