import { NextResponse, NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
    const accessToken = req.cookies.get('token')?.value;

    if (!accessToken) {
        // اگر توکن وجود ندارد و مسیر محافظت شده است، به صفحه لاگین هدایت شود
        if (req.nextUrl.pathname.startsWith('/admin-panel') || req.nextUrl.pathname.startsWith('/user-panel')) {
            return NextResponse.redirect(new URL('/login', req.url));
        }
        return NextResponse.next();
    } else {
        // بررسی نقش کاربر برای مسیرهای ادمین
        if (req.nextUrl.pathname.startsWith('/admin-panel')) {
            const user: any = await fetch(new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/me`, req.url), {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
            }).then(res => res.json());

            if (user.role !== "ADMIN") {
                return NextResponse.redirect(new URL('/login', req.url));
            }

        }
        return NextResponse.next();
    }


}

// مسیرهایی که middleware باید در آنها اعمال شود
export const config = {
    matcher: ['/:path*'], // مسیرهای محافظت‌شده
};
