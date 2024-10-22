import Link from "next/link";

export default function F2Page() {
  return (
    <>
      <div className="mx-auto container mt-8">
        <h1 className="text-3xl">F2 page</h1>
        <div className="flex gap-2">
          <Link href="/f1/f3">F3 page</Link>
          <Link href="/about">About page</Link>
        </div>
      </div>
    </>
  );
}
