import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";
import { comments } from "./data";

let comments_data = [...comments];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const reqHeaders = new Headers(request.headers);
  const headersList = headers();

  const hasThemeCookie = request.cookies.has("theme");

  console.log("Authorization", reqHeaders.get("Authorization"));
  console.log("Authorization", headersList.get("Authorization"));
  console.log("hasThemeCookie", hasThemeCookie);
  console.log("themeCookie", cookies().get("theme"));

  cookies().set("x-name", "ramandeep", {
    httpOnly: true,
    secure: true,
    path: "/",
  });

  const q = searchParams.get("q");

  const data = q
    ? comments_data.filter((item) => item.text.includes(q))
    : comments_data;

  return Response.json(data, {
    headers: {
      "Set-Cookie": "theme=dark",
    },
  });
}

export async function POST(request: Request) {
  const reqBody = await request.json();

  const comment = {
    ...reqBody,
    id: comments.length + 1,
  };

  comments_data = [...comments, comment];

  return Response.json(comment, {
    headers: {
      "Content-type": "Application/json",
    },
    status: 201,
  });
}
