import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    const isAdminPath = pathname.startsWith('/admin')
    const isLoggedIn = Boolean(request.cookies.get('token')?.value)
    const isAdmin = request.cookies.get('role')?.value === 'admin'

    if (isAdminPath && (!isLoggedIn || !isAdmin)) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/admin/:path*'],
}
