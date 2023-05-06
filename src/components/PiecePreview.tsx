import DateFormatter from "components/DateFormatter";
import Link from "next/link";

import { PieceMeta } from "lib/type";

const ModifiedDate = ({ date }: { date: string | undefined }) => {
  if (date) {
    return (
      <span className="text-sm">
        &nbsp;/&nbsp;
        <DateFormatter date={date} />
      </span>
    );
  } else {
    return null;
  }
};

export const PiecePreview = ({ meta }: { meta: PieceMeta }) => {
  return (
    <li className="mt-8 overflow-hidden border-l-2 border-char-main px-2 py-1 hover:border-char-link hover:bg-media">
      <Link href={`blog/piece/${"the-usual-ones"}`}>
      <h2 className="">{meta.frontMatter.title}</h2>
        <div className="text-char-note mt-3">
          <span className="text-base">
            <DateFormatter date={meta.frontMatter.date.created} />
          </span>
          <ModifiedDate date={meta.frontMatter.date.modified} />
        </div>
        <div className="">{meta.frontMatter.synopsis}</div>
      </Link>
    </li>
  );
};

export default PiecePreview;
