import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  // console.log(request);
  if (request.nextUrl.pathname != "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }
}

// only here declare pages are redirect, in this case about and its all child pages
export const config = {
  matcher: "/about/:path*",
// if keep more then a pages
//   matcher: ["/about/:path*", "/studentlist/:path*"],
};
