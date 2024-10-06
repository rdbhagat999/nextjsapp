import { notFound } from "next/navigation";

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  if (params?.productId && parseInt(params?.productId) > 9) {
    return notFound();
  }

  return (
    <>
      <h1>Product page {params?.productId}</h1>
    </>
  );
}
