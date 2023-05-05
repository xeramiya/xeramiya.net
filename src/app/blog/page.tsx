import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";

import { getBlogMeta } from "lib/api";
import PiecePreview from "components/PiecePreview";

const pieceType = "blog";

// DEBUG
import { getPieceData, mdAdapter } from "lib/api";
import DateFormatter from "components/DateFormatter";
const ModifiedDate = ({ date }: { date: string | undefined }) => {
  if (date) {
    return (
      <span className="text-sm">
        &nbsp;/ 最終更新
        <DateFormatter date={date} />
      </span>
    );
  } else {
    return null;
  }
};

export const metadata: Metadata = {
  title: "航海雑記",
  description: "ブログ記事一覧",
};

export default async function Blog() {
  const blogMeta = await getBlogMeta(`piece/${pieceType}`);

  // DEBUG
  const pieceData = getPieceData(`piece/${pieceType}`, "the-usual-ones", true);
  const pieceContent = await mdAdapter(pieceData.content);

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
      <article className="mx-6 mt-12">
        <section>
          <div className="mt-3 text-char-note">
            <span className="text-base">
              <DateFormatter date={pieceData.frontMatter.date.created} />
            </span>
            <ModifiedDate date={pieceData.frontMatter.date.modified} />
          </div>
          <h1 className="mt-2">{pieceData.frontMatter.title}</h1>
          <div className="mt-9">{pieceData.frontMatter.synopsis}</div>
        </section>
        <hr className="mb-11 mt-4 border-char-note" />
        <section className="piece ml-0 max-w-[712px]">
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: pieceContent }}
          />
        </section>
      </article>
    </div>
  );
}
