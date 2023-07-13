import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { getBlogMetas } from "lib/api";
import PiecePreview from "components/PiecePreview";
import { PieceMeta } from "lib/type";

const pieceType = "blog";

export const metadata: Metadata = {
  title: "航海雑記",
  description: "ブログ記事一覧",
};

export default async function Blog() {
  const blogMeta = await getBlogMetas();

  return (
    <div className="stand">
      <div className="mx-6 mt-12">
        <article>
          <h1>航海雑記</h1>
          <p className="note">ネ申言舌火暴言延</p>
        </article>
        <hr className="border-char-note" />
        <ul className="">
          <Suspense fallback={<div>データ取得中</div>}>
            {blogMeta.map((meta: PieceMeta) => {
              return (
                /* このkeyをコンポーネントに移設しよう！そうしよう！ */
                <div key={meta.frontMatter.title}>
                  <PiecePreview meta={meta} />
                </div>
              );
            })}
          </Suspense>
        </ul>
      </div>
    </div>
  );
}
