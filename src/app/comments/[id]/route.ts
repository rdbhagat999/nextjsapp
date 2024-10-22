import { redirect } from "next/navigation";
import { comments } from "../data";

let comments_data = [...comments];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  const found = comments_data.find((item) => item.id === id);

  if (!found) {
    // return new Response(null, {
    //   headers: {
    //     "Content-type": "Application/json",
    //   },
    //   status: 404,
    // });

    return redirect("/comments");
  }

  return Response.json(found);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);
  const reqBody = await request.json();

  let found = comments_data.find((item) => item.id === id);

  if (!found) {
    return new Response(null, {
      headers: {
        "Content-type": "Application/json",
      },
      status: 404,
    });
  }

  if (found) {
    found = {
      ...found,
      text: reqBody.text,
    };
  }

  return Response.json(found);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = parseInt(params.id);

  const found = comments_data.find((item) => item.id === id);

  if (!found) {
    return Response.json(
      {},
      {
        status: 404,
      }
    );
  }

  comments_data = comments_data.filter((item) => item.id !== id);

  return Response.json(found);
}
