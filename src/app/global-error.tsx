"use client";

import Header from "@/components/Header";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <>
      <html lang="en">
        <body>
          <Header />
          <div className="mx-auto container mt-8">
            <h1 className="text-3xl">Global Error Handler</h1>
            <h2 className="text-xl">{error?.message}</h2>

            <button
              className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
              onClick={
                // Attempt to recover by trying to re-render the segment
                () => reset()
              }
            >
              Try again
            </button>
          </div>
        </body>
      </html>
    </>
  );
}
