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
        <Suspense fallback={<div>データ取得中</div>}>
          <ul className="">
            {blogMeta.map((meta: PieceMeta) => {
              return (
                /* このkeyをコンポーネントに移設しよう！そうしよう！ */
                <li key={meta.frontMatter.title}>
                  <PiecePreview meta={meta} />
                </li>
              );
            })}
          </ul>
        </Suspense>
      </div>
    </div>
  );
}
