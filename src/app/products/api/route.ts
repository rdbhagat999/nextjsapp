import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const ip = request.ip;
  console.log(ip);

  return Response.json([]);
}
