import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export const GET = async (context: APIContext) => {
  const blog = await getCollection("blog");

  return rss({
    title: "xeramiya.net",
    description: "Xeramiya's Flagment Web Site",
    site: context.site ?? "",
    items: blog.map((piece) => ({
      title: piece.data.title,
      link: `/blog/${piece.slug}`,
      description: piece.data.synopsis,
      pubDate: piece.data.date.created,
    })),
    customData: `<language>ja-jp</language>`,
  });
};
