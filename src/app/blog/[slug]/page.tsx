import { getPieceData, mdAdapter } from "lib/api";
import DateFormatter from "components/DateFormatter";

const pieceType = "blog";

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
  return <div className="stand">よう！</div>;
}
