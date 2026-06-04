import {
  NextRequest,
  NextResponse,
} from "next/server";

import {
  verifyToken,
} from "@/lib/jwt";

export async function middleware(
  request: NextRequest
) {
  const pathname =
    request.nextUrl.pathname;

  const publicRoutes = [
    "/admin/login",
    "/admin/verify-otp",
  ];

  const isPublicRoute =
    publicRoutes.some(
      (route) =>
        pathname.startsWith(
          route
        )
    );

  if (isPublicRoute) {
    return NextResponse.next();
  }

  const token =
    request.cookies.get(
      "admin_token"
    )?.value;

  if (!token) {
    return NextResponse.redirect(
      new URL(
        "/admin/login",
        request.url
      )
    );
  }

  const payload =
    await verifyToken(token);

  if (!payload) {
    return NextResponse.redirect(
      new URL(
        "/admin/login",
        request.url
      )
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin/:path*",
  ],
};