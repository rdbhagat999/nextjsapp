import { NextRequest } from "next/server";
import { comments } from "./data";

let comments_data = [...comments];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const q = searchParams.get("q");

  const data = q
    ? comments_data.filter((item) => item.text.includes(q))
    : comments_data;

  return Response.json(data);
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
