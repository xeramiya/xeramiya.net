import type { Metadata } from "next";
import Link from "next/link";

import { getBlogMeta } from "lib/api";

export const metadata: Metadata = {
  title: "DEBUG",
  description: "デバッグ用ページ",
};

export default async function Blog() {
  return (
    <div className="stand">
      <div className="mx-6 mt-12">
        <article>
          <h1>デバッグしましょ</h1>
          <p className="note">そうしましょ</p>
        </article>
        <hr className="border-char-note" />
        <article></article>
      </div>
    </div>
  );
}

