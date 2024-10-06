import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { productId: string };
};

// export const generateMetadata = ({ params }: Props): Metadata => {
//   return {
//     title: `Product ${params?.productId}`,
//     description: `Product ${params?.productId} deescription`,
//   }
// };

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  // make fetch request
  const productId = await new Promise((resolve) =>
    setTimeout(() => {
      resolve("Product " + params?.productId);
    }, 100)
  );
  return {
    title: `${productId}`,
    description: `${productId} deescription`,
  };
};

export default function ProductDetails({ params }: Props) {
  if (params?.productId && parseInt(params?.productId) > 9) {
    return notFound();
  }

  return (
    <>
      <h1>Product page {params?.productId}</h1>
    </>
  );
}
