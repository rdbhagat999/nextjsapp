import Link from "next/link";

export default function AboutInterceptorPage() {
  return (
    <>
      <div className="mx-auto container mt-8">
        <h1 className="text-3xl">About Interceptor page</h1>
        <div className="flex gap-2">
          <Link href="/f1">F1 page</Link>
          <Link href="/f1/f2">F2 page</Link>
          <Link href="/f1/f3">F3 page</Link>
        </div>
      </div>
    </>
  );
}
