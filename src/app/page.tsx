"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="grid items-center justify-items-center h-full p-4 gap-4">
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>

      <ol className="list-inside list-decimal text-sm text-center sm:text-left">
        <li className="mb-2">
          Get started by editing{" "}
          <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
            src/app/page.tsx
          </code>
          .
        </li>
        <li>Save and see your changes instantly.</li>
      </ol>

      <div className="flex flex-col justify-center items-center">
        <Button
          variant="outline"
          className="my-4 px-4 py-2 rounded bg-blue-500 text-white"
          onClick={() => {
            router.push("/products");
          }}
        >
          Redirect to Product List
        </Button>
        <button className="my-4 px-4 py-2 rounded bg-red-500 text-white">
          Button 4
        </button>
      </div>
    </div>
  );
}
