import { getPieceData, mdAdapter } from "lib/api";
import DateFormatter from "components/DateFormatter";

const pieceType = "blog";

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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const pieceData = getPieceData(`piece/${pieceType}`, params.slug);

  return {
    title: pieceData.frontMatter.title,
    description: pieceData.frontMatter.synopsis,
  };
}

export default async function Piece({ params }: { params: { slug: string } }) {
  const pieceData = getPieceData(`piece/${pieceType}`, params.slug, true);
  const pieceContent = await mdAdapter(pieceData.content);

  return (
    <div className="stand">
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
        <hr className="mt-4 border-char-note mb-11" />
        <section className="piece max-w-[712px] ml-0">
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: pieceContent }}
          />
        </section>
      </article>
    </div>
  );
}
