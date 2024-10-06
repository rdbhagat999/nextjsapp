import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    // default: "Products",
    absolute: "Product List",
  },
};

export default function ProductList() {
  return (
    <>
      <h1>ProductList page</h1>
      <ol>
        <li>
          <Link href={{ pathname: "/products/1", query: { name: "product" } }}>
            Product 1
          </Link>
        </li>
        <li>
          <Link href="/products/2">Product 2</Link>
        </li>
        <li>
          <Link href="/products/3" replace>
            Product 3 link with replace attribute
          </Link>
        </li>
      </ol>
    </>
  );
}
