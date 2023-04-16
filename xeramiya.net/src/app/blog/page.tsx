import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";

import PostList from "components/PostList";

export const metadata: Metadata = {
  title: "ブログ",
  description: "ブログの一覧",
};

export default function archive() {
  return (
    <div>
      <article>
        <h1>ブログ一覧だにょ</h1>
        <p>Welcome!</p>
        <div>
          <Suspense fallback={<p className="mt-4">ブログデータを読込中...</p>}>
            準備中
          </Suspense>
        </div>
      </article>
      <article className="stele"></article>
    </div>
  );
}
