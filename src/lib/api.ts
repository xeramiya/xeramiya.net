import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";

import { PieceMeta, FrontMatter, Date } from "lib/type";

import { cache } from "react";

// ドキュメントデータへのパス取得
export function getPath(dir: string) {
  return path.join(process.cwd(), dir);
}

// 全てのMarkdown文書のSlugを取得
export function getPieceSlug(pieceDir: string) {
  return fs
    .readdirSync(getPath(pieceDir), { withFileTypes: true })
    .flatMap((dirent) => {
      if (dirent.isFile() && dirent.name.endsWith(".md")) {
        return dirent.name.slice(0, -3);
      }
    });
}

// getStaticDataの補助、PieceMetaにcontentを追加するか判断
export function addContent(content: string, withContent?: boolean) {
  if (withContent) {
    return content;
  }
  return undefined;
}

// SlugからMarkdown文書内のFlont Matterを取得、場合によってはコンテンツも取得
export const getPieceData = (
  pieceDir: string,
  pieceSlug: string,
  withContent?: boolean
) => {
  const fileContent = fs.readFileSync(
    path.join(getPath(pieceDir), `${pieceSlug}.md`),
    "utf-8"
  );
  console.log(
    "DADADADADADADADA:",
    path.join(getPath(pieceDir), `${pieceSlug}.md`)
  );

  console.log("fileContent:", fileContent);
  console.log("pieceSlug:", pieceSlug);
  console.log("pieceDir:", pieceDir);

  const { data, content } = grayMatter(fileContent);

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
export function getBlogMeta(pieceDir: string) {
  const pieceSlug = getPieceSlug(pieceDir);
  const blogMeta = pieceSlug.map((pieceSlug) => {
    if (pieceSlug) {
      return getPieceData(pieceDir, pieceSlug);
    }
  });

  // TODO: 並べ替え処理

  return blogMeta;
}

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
  return "OF COURSE I STILL LOVE YOU";
}

// テスト用
export const getTestData = cache(async (pieceSlug: string) => {
  const fileContent = fs.readFileSync(
    path.join(getPath("src/piece/blog"), `${pieceSlug}.md`),
    "utf-8"
  );

  const date: Date = {
    created: "2015.10.21",
    modified: "2077.10.21",
  };
  const frontMatter: FrontMatter = {
    title: fileContent,
    synopsis: "ですよ",
    date: date,
    tag: undefined,
  };
  const piece: PieceMeta = {
    slug: "the-usual-ones",
    frontMatter: frontMatter,
    //content: addContent(content, withContent),
  };

  return piece;
});
