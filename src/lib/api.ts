import { Buffer } from "buffer";
import grayMatter from "gray-matter";
import { PieceMeta, FrontMatter, Date } from "lib/type";
import { cache } from "react";

const dockUrl = "https://api.github.com/repos/xeramiya/doc-k/contents/";

const fetcher = (url: string) => {
  return fetch(url, {
    headers: { Authorization: `token ${process.env.GITHUB_REST_API}` },
  })
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

// 全てのMarkdown文書のSlugを取得
export const getPieceSlugs = async () => {
  type FetchData = {
    name: string;
    type: string;
  };

  const fetchDatas = await fetcher(`${dockUrl}blog/`);

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

  const fetchData: FetchData = await fetcher(`${dockUrl}blog/${pieceSlug}.md`);

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

// 全てのMarkdown文書データのSlugとFront Matterを取得し、文書を作成日順に並べ替え
export const getBlogMetas = async () => {
  const pieceSlugs = await getPieceSlugs();
  const rawBlogMetas = await Promise.all(
    pieceSlugs.map((pieceSlug: string) => {
      return getPieceData(pieceSlug);
    })
  );

  const blogMetas = rawBlogMetas.sort((a: PieceMeta, b: PieceMeta) => {
    if (a.frontMatter.date.created > b.frontMatter.date.created) {
      return -1;
    } else if (a.frontMatter.date.created < b.frontMatter.date.created) {
      return 1;
    }
    return 0;
  });

  return blogMetas;
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
