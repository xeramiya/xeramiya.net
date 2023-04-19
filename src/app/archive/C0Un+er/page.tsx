"use client";

import { useState } from "react";

export default function archive() {
  const [count, setCount] = useState(0);

  return (
    <div className="select-none" onMouseDown={() => setCount((cnt) => cnt + 1)}>
      <div className="fixed w-full h-5/6 flex justify-center items-center font-mono text-[9em]">
        {count}
      </div>
    </div>
  );
}
