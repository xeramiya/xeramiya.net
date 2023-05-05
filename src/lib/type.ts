//  ブログ用
export type PieceMeta = {
  slug: string;
  frontMatter: FrontMatter;
  content: string | undefined;
};

export type FrontMatter = {
  title: string;
  synopsis?: string;
  date: Date;
  tag?: string[];
};

export type Date = {
  created: string;
  modified?: string;
};
