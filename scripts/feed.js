import fs from 'fs';
import { Feed } from 'feed';

// variables
const BASE = meta.siteinfo.main.address;
const meta = readYaml("meta.yaml");

function genFeed() {
  const author = {
    name: "STr3292",
    email: "",
    link: BASE,
  };

  const date = new Date();
  
  // default feed
  const feed = new Feed({
    title: meta.siteinfo.main.title,
    description: meta.siteinfo.main.description,
    id: BASE,
    link: BASE,
    language: "ja",
    image: `${BASE}/public/favicons/favicon.png`,
    favicon: `${BASE}/public/favicons/favicon.ico`,
    copyright: `©︎ ${date.getFullYear()}, ${author.name}`,
    updated: date,
    feedLinks: {
      rss2: `${BASE}/rss/feed.xml`,
      json: `${BASE}/rss/feed.json`,
      atom: `${BASE}/rss/atom.xml`,
    },
    author: author,    
  });



  
  

  
  

  // ローカルファイルや API 経由などでファイルのデータを取得する関数を書く
  const posts = getPosts(...);

  // feed で定義した情報から各記事での変更点を宣言
  posts.forEach((post) => {
    // post のプロパティ情報は使用しているオブジェクトの形式に合わせる
    const url = `${BASE}/${post.id}`;
    feed.addItem({
      title: post.title,
      description: post.description,
      id: url,
      link: url,
      content: marked(post.content), // marked で markdown => html
      date: new Date(post.date),
    });
  });

  // フィード情報を public/rss 配下にディレクトリを作って保存
  fs.mkdirSync('./public/rss', { recursive: true });
  fs.writeFileSync('./public/rss/feed.xml', feed.rss2());
  fs.writeFileSync('./public/rss/atom.xml', feed.atom1());
  fs.writeFileSync('./public/rss/feed.json', feed.json1());
}

export default genFeed;