"use client";

import { useState } from "react";

export default function ProductTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const [input, setInput] = useState("default text");

  return (
    <>
      <div className="mx-auto container mt-8">
        <h1>Products Template</h1>
        <div className="mb-20">
          <input
            className="border px-2 py-1 rounded bg-gray-50 text-base"
            value={input}
            onChange={(e) => setInput(e?.target?.value)}
          />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
