"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <div
        className="select-none"
        onMouseDown={() => setCount((cnt) => cnt + 1)}
      >
        <div className="flex h-screen w-screen items-center justify-center font-mono text-[9em]">
          {count}
        </div>
      </div>
    </div>
  );
}
