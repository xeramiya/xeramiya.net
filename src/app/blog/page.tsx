import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { getBlogMeta } from "lib/api";
import PiecePreview from "components/PiecePreview";

const pieceType = "blog";

export const metadata: Metadata = {
  title: "航海雑記",
  description: "ブログ記事一覧",
};

export default async function Blog() {
  const blogMeta = await getBlogMeta(`src/piece/${pieceType}`);

  return (
    <div className="stand">
      <div className="mx-6 mt-12">
        <article>
          <h1>航海雑記</h1>
          <p className="note">ネ申言舌</p>
        </article>
        <hr className="border-char-note" />
        <ul className="">
          <Suspense fallback={<div>データ取得中</div>}>
            {blogMeta.map((meta) => {
              if (meta) {
                return (
                  <div key={meta.frontMatter.title}>
                    <PiecePreview meta={meta} />
                  </div>
                );
              }
            })}
          </Suspense>
        </ul>
      </div>
    </div>
  );
}
