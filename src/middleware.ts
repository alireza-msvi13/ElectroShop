import { NextResponse , NextRequest } from 'next/server';

export async function middleware(req:NextRequest) {
    const accessToken = req.cookies.get('token')?.value;

    if (!accessToken) {
        // اگر توکن وجود ندارد و مسیر محافظت شده است، به صفحه لاگین هدایت شود
        if (req.nextUrl.pathname.startsWith('/admin-panel') || req.nextUrl.pathname.startsWith('/user-panel')) {
            return NextResponse.redirect(new URL('/login', req.url));
        }
        return NextResponse.next();
    } else {
        // ارسال درخواست به API Route برای اعتبارسنجی توکن و مدیریت رفرش توکن
        // const response = await fetch(new URL('/api/auth/refresh', req.url), {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ token: accessToken }),
        // });

        // const data = await response.json();

        // if (!data.valid) {
        //     // اگر توکن معتبر نیست و مسیر محافظت شده است، به صفحه لاگین هدایت شود
        //     if (req.nextUrl.pathname.startsWith('/admin-panel') || req.nextUrl.pathname.startsWith('/user-panel')) {
        //         return NextResponse.redirect(new URL('/login', req.url));
        //     }
        //     return NextResponse.next();
        // }

        // // بررسی نقش کاربر برای مسیرهای ادمین
        // if (req.nextUrl.pathname.startsWith('/admin-panel') && data.user.role !== 'ADMIN') {
        //     return NextResponse.redirect(new URL('/login', req.url));
        // }

        // // اگر توکن جدیدی تولید شده باشد، آن را در کوکی ذخیره کنید
        // if (data.newAccessToken) {
        //     const res = NextResponse.next();
        //     const expiresAt = new Date(data.exp * 1000)
        //     res.cookies.set('token', data.newAccessToken, { httpOnly: true, sameSite: "lax", secure: true, path: '/', expires: expiresAt });
        //     return res;
        // }
        return NextResponse.next();
    }


}

// مسیرهایی که middleware باید در آنها اعمال شود
export const config = {
    matcher: ['/:path*'], // مسیرهای محافظت‌شده
};
