import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl
  const host = req.headers.get('host') || ''

  // 1. Protect the proposals portal page
  if (pathname.startsWith('/proposals/portal-')) {
    const basicAuth = req.headers.get('authorization')

    if (basicAuth) {
      const authValue = basicAuth.split(' ')[1]
      const [user, pwd] = atob(authValue).split(':')

      if (user === 'ags' && pwd === 'ags2026') {
        return NextResponse.next()
      }
    }

    return new NextResponse('Authentication required to view proposals dashboard.', {
      status: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Secure Area"',
      },
    })
  }

  // 2. Collapse non-www + uppercase + missing-trailing-slash into a single 1-hop 308 redirect
  const isBareProdDomain = host === 'asiagolfspecialists.com'
  const isFileOrInternal =
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/proposals/') ||
    /\.[a-zA-Z0-9]{2,5}$/.test(pathname)

  if (!isFileOrInternal) {
    const lowerPath = pathname.toLowerCase()
    const canonicalPath = lowerPath.endsWith('/') ? lowerPath : `${lowerPath}/`
    if (isBareProdDomain || canonicalPath !== pathname) {
      const targetOrigin = isBareProdDomain ? 'https://www.asiagolfspecialists.com' : req.nextUrl.origin
      const targetUrl = `${targetOrigin}${canonicalPath}${search}`
      return NextResponse.redirect(targetUrl, 308)
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|images/|favicon.ico|robots.txt|sitemap.xml|llms.txt|llms-full.txt).*)',
  ],
}
