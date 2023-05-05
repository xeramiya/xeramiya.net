"use client"; // Errorはクライアントサイド！

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen">
      <div className="h-[100%] bg-error">
        <h1 className="pt-32 text-center text-char-error">
          <span>エラー: </span>
          <span>助けてください</span>
        </h1>
      </div>
    </div>
  );
}
