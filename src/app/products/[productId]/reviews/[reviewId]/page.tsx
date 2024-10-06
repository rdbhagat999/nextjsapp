export default function ReviewDetails({
  params,
}: {
  params: { reviewId: string };
}) {
  return (
    <>
      <h1>Review page {params?.reviewId}</h1>
    </>
  );
}
