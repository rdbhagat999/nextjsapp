import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const theme = request.cookies.get("theme");

  console.log("middleware", request.nextUrl.pathname);
  console.log("theme", theme);

  if (!theme) {
    response.cookies.set("theme", "dark");
    response.headers.set("x-theme", "dark");
  }

  return response;

  // if (request.nextUrl.pathname.startsWith("/test")) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  // return NextResponse.redirect(new URL("/", request.url));
}

// export const config = {
//   matcher: ["/test"],
// };
