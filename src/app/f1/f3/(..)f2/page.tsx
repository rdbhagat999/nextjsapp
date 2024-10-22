import Link from "next/link";

export default function F2InterceptPage() {
  return (
    <>
      <div className="mx-auto container mt-8">
        <h1 className="text-3xl">F2 Intercept inside F3 page</h1>
        <div className="flex gap-2">
          <Link href="/f1/f2">F2 page</Link>
        </div>
      </div>
    </>
  );
}
