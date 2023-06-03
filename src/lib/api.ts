import fs from "fs";
import path from "path";
import { Buffer } from "buffer";
import grayMatter from "gray-matter";
import { PieceMeta, FrontMatter, Date } from "lib/type";
import { cache } from "react";

const dockUrl = "https://api.github.com/repos/xeramiya/doc-k/contents/";

// ブログ用文書データへのパス取得
// なぜかENOENTエラー発生、原因不明 ʕ•̫͡•ʕ•̫͡•ʔ•̫͡•ʔ•̫͡•ʕ•̫͡•ʔ•̫͡•ʕ•̫͡•ʕ•̫͡•ʔ•̫͡•ʔ•̫͡•ʕ•̫͡•ʔ•̫͡•ʔ
// >> [slug]から呼び出すとvar/task/~というパスが返される
// >> 通常は/vercel/path0~
/* 
export function getPath(dir: string) {
  return path.join(process.cwd(), dir);
}
*/

// ブログ用文書データへのパス取得(↑の代用)
const blogDir = path.join(process.cwd(), "piece/blog");

// 全てのMarkdown文書のSlugを取得
export const getPieceSlugs = async () => {
  type FetchData = {
    name: string;
    type: string;
  };

  const fetchDatas = await fetch(`${dockUrl}blog/`, {
    headers: { Authorization: `token ${process.env.GITHUB_REST_API}` },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });

  return fetchDatas.map((data: FetchData) => {
    if (data.type == "file" && data.name.endsWith(".md")) {
      const slug: string = data.name.slice(0, -3);
      return slug;
    }
  });
};

// getStaticDataの補助、PieceMetaにcontentを追加するか判断
export function addContent(content: string, withContent?: boolean) {
  if (withContent) {
    return content;
  }
  return undefined;
}

// SlugからMarkdown文書内のFlont Matterを取得、場合によってはコンテンツも取得
export const getPieceData = async (
  pieceSlug: string,
  withContent?: boolean
) => {
  type FetchData = {
    content: string;
  };

  const fetchData: FetchData = await fetch(`${dockUrl}blog/${pieceSlug}.md`, {
    headers: { Authorization: `token ${process.env.GITHUB_REST_API}` },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });

  const fetchContent = fetchData.content;

  const fileDatas = Buffer.from(fetchContent, "base64").toString("utf-8");

  const { data, content } = grayMatter(fileDatas);

  const date: Date = {
    created: data.date.created,
    modified: data.date.modified,
  };
  const frontMatter: FrontMatter = {
    title: data.title,
    synopsis: data.synopsis,
    date: date,
    tag: data.tag,
  };
  const piece: PieceMeta = {
    slug: pieceSlug,
    frontMatter: frontMatter,
    content: addContent(content, withContent),
  };

  return piece;
};

// 全てのMarkdown文書データのSlugとFront Matterを取得
export const getBlogMeta = async () => {
  const pieceSlugs = await getPieceSlugs();
  const blogMeta = await Promise.all(
    pieceSlugs.map((pieceSlug: string) => {
      if (pieceSlug) {
        return getPieceData(pieceSlug);
      }
    })
  );
  /**
   * TODO: 並べ替え処理
   */
  return blogMeta;
};

import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";
import remarkRuby from "remark-ruby";
import remarkGemoji from "remark-gemoji";

// Markdown文書をHTMLに変換するなど
export async function mdAdapter(markdown: string | undefined) {
  if (markdown) {
    const result = await remark()
      .use(remarkHtml)
      .use(remarkGfm)
      .use(remarkRuby)
      .use(remarkGemoji)
      .process(markdown);
    return result.toString();
  }

  return "OF COURSE I STILL LOVE YOU"; // エラー
}
