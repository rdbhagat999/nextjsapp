import Link from "next/link";

export default function F1Page() {
  return (
    <>
      <div className="mx-auto container mt-8">
        <h1 className="text-3xl">F1 page</h1>
        <div className="flex gap-2">
          <Link href="/f1/f2">F2 page</Link>
          <Link href="/f1/f3">F3 page</Link>
        </div>
      </div>
    </>
  );
}
