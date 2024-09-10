import { NextRequest, NextResponse } from 'next/server';
import { appFetch } from './utils/fetch';
import { API_ROUTES } from './utils/api-routes';

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api/|_next/|_static/|_vercel|icons|favicon|[\\w-]+\\.\\w+).*)',
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;

  // Get hostname of request (e.g. demo.vercel.pub, demo.localhost:3000)
  const hostname = req.headers
    .get('host')!
    .replace('.localhost:8084', `.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`);

  // rewrites for single domains

  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
  const path = url?.pathname || '';
  let hostData = hostname;

  if (
    req.headers.get('host') === 'localhost:8084' ||
    req.headers.get('host') === 'www.vintagetoons.com'
  ) {
    return NextResponse.rewrite(new URL(`/`, req.url));
  }
  if (!hostname.includes('vintagetoons.com') && hostData.startsWith('www.')) {
    hostData = hostData.replace('www.', '');
    const schoolDomainHostName: any = await appFetch(
      `${API_ROUTES.getMainDomainHostName}/${hostData}`
    );
    return NextResponse.rewrite(
      new URL(
        `/${schoolDomainHostName?.templateId}/${schoolDomainHostName?.domain}.vintagetoons.com${path}`,
        req.url
      )
    );
  }

  // const requestedDomain = req.headers.get('host')!.replace('.localhost:8084', '');

  const requestedDomain = req.headers
    .get('host')!
    .replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, '');
  const schoolDomain: any = await appFetch(
    `${API_ROUTES.getSingleSchoolDomain}/${requestedDomain}`
  );

  // rewrites for admin pages
  if (hostname === `admin.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`) {
    return NextResponse.rewrite(new URL(`/admin${path === '/' ? '' : path}`, req.url));
  }

  // for latter use
  // rewrite root application to `/home` folder
  // if (hostname === 'localhost:8084' || hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN) {
  //   return NextResponse.rewrite(new URL(`/home${path}`, req.url));
  // }

  // rewrite everything else to `/[domain]/[path] dynamic route
  // return NextResponse.rewrite(new URL(`/alliance/myself.vintagetoons.com/`, req.url));
  return NextResponse.rewrite(new URL(`/${schoolDomain?.templateId}/${hostname}${path}`, req.url));
}
