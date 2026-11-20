import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Secret key for brand guidelines access
const BRAND_GUIDELINES_KEY = 'ags2026';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host');
  const pathname = url.pathname;

  // Redirect naked domain → canonical www (single-hop)
  // Note: Vercel's edge network handles HTTP→HTTPS automatically via 308.
  // This middleware only fires for the naked domain to add www.
  // For best results, also configure asiagolfspecialists.com → www in
  // the Vercel Dashboard > Project Settings > Domains.
  if (host === 'asiagolfspecialists.com') {
    url.protocol = 'https:';
    url.hostname = 'www.asiagolfspecialists.com';
    return NextResponse.redirect(url, 301);
  }

  // ── Brand Guidelines: token-gated access ──
  // Protects /brand-guidelines/ and all its assets (images, etc.)
  // Access requires ?key=ags2026 on the HTML page request.
  // Sub-resources (images, fonts) are allowed if the Referer matches.
  if (pathname.startsWith('/brand-guidelines')) {
    const key = url.searchParams.get('key');
    const referer = request.headers.get('referer') || '';
    const isSubResource = /\.(png|webp|jpg|jpeg|svg|css|js|woff2?|ttf|ico)$/i.test(pathname);

    // Allow sub-resources if the referer contains the correct key
    if (isSubResource && referer.includes(`key=${BRAND_GUIDELINES_KEY}`)) {
      const response = NextResponse.next();
      response.headers.set('X-Robots-Tag', 'noindex, nofollow');
      return response;
    }

    // Block if no valid key provided
    if (key !== BRAND_GUIDELINES_KEY) {
      return new NextResponse('403 — Access Denied', {
        status: 403,
        headers: {
          'Content-Type': 'text/plain',
          'X-Robots-Tag': 'noindex, nofollow',
        },
      });
    }

    // Valid key — allow access with noindex header
    const response = NextResponse.next();
    response.headers.set('X-Robots-Tag', 'noindex, nofollow');
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
