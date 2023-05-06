import { getPieceData, mdAdapter, getBlogMeta } from "lib/api";
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
  const slug2: string = "the-usual-ones";
  const pieceData = await getPieceData(`piece/${pieceType}`, slug2);

  return {
    title: pieceData.frontMatter.title,
    description: pieceData.frontMatter.synopsis,
  };
}

export default async function Piece({ params }: { params: { slug: string } }) {
  //const slug2: string = "the-usual-ones";
  const pieceData = await getPieceData(
    `piece/${pieceType}`,
    params.slug,
    //slug2,
    true
  );
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

export const generateStaticParams = async () => {
  const blogMeta = getBlogMeta(`piece/${pieceType}`);
  return blogMeta.map((meta) => {
    if (meta) {
      console.log("meta.slug:", meta.slug);
      return meta.slug;
    }
  });
};
