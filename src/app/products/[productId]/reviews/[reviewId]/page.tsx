import { notFound } from "next/navigation";

export default function ReviewDetails({
  params,
}: {
  params: { reviewId: string };
}) {
  if (params?.reviewId && parseInt(params?.reviewId) > 9) {
    return notFound();
  }

  return (
    <>
      <h1>Review page {params?.reviewId}</h1>
    </>
  );
}
