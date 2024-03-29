import { NextResponse, type NextRequest } from 'next/server'
import { session } from './constants/token';
import { routes } from './constants/routes';

export function middleware(request: NextRequest) {
    // let token: string | undefined;
    // const pathName: string = request.nextUrl.pathname;
    // // check for token in session cookie
    // if (request.cookies.has(session.token)) {
    //     token = request.cookies.get(session.token)?.value;
    // } else if (request.headers.get("Authorization")?.startsWith("Bearer ")) {
    //     token = request.headers.get("Authorization")?.substring(7);
    // }

    // // checks for protected path when token is not available
    // if (!token && ( pathName === "/" ||
    //     pathName.startsWith("/admin") 
    // )) {
        
    //     return NextResponse.redirect(new URL('/auth/login', request.url))
    // }

    
    // // checks for signup path when token is available
    // if (token && ( pathName === "/" ||
    // pathName.startsWith("/auth") 
    // )) {
        
    //     return NextResponse.redirect(new URL(routes.admin.dashboard, request.url))
    // }
}

export const config = {
    matcher: [
        "/",
        "/auth",
        "/auth/login",
        "/admin/:path*",
    ]
}