import type { Metadata } from "next";

export const metadata: Metadata = {};

export default async function Debug() {
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  const loremJp =
    "おや、変なものが鳴りました。カムパネルラが手をのばしていましたが、もうのどがつまったように青年にたずねましたので、カムパネルラもさびしそうに言いました。カムパネルラはきのどくそうに、だまっていたちにくれてやらなかったろう。女の子は、いきなり両手を顔にあててしまいました。これは三次空間の方から、あの聞きなれた三〇六番の声が、二人の手首の、水にひたったとこが、少しおずおずしながら、二人の影は、ちょうどおまえたちのように、ぎゃあぎゃあ叫びながら、いっぱいに舞いおりて来ましたので、ジョバンニは思わずカムパネルラとわらいました。そうすると、向こうの坊ちゃんがた。鶴、どうしてもこの方たちのお母さんは一昨年没くなられました。つまりその星はみな、乳のなかにめぐってあらわれるようになったので、こんどはぼくの影法師はコンパスだ。ジョバンニはもういろいろなことで胸がいっぱいで、なんにもかなしいことないのです。汽車が小さな小屋の前をはなれて、早くお母さんに牛乳を持って行ったよ。右手の低い丘の上に、眼の前がさあっと明るくなってきました。";

  return (
    <div>
      <section>
        <h1>いつものやつを、いつもの量で</h1>
        <div className="text-char-note">良い子は入っちゃダメだよん</div>
      </section>
      <section className="flex justify-between">
        <div className="max-w-2xl bg-primary">
          <h2>h2要素だにょ</h2>
          <p>{loremJp}</p>
          <h3>h3要素だにょ</h3>
          <p>{lorem}</p>
          <p>{loremJp}</p>
          <h2>h2要素だにょ</h2>
          <h3>h3要素だにょ</h3>
          <h4>h4要素だにょ</h4>
          <h5>h5要素だにょ</h5>
          <p>{lorem}</p>
          <p>{loremJp}</p>
        </div>
        <aside className="max-w-xs bg-primary">あぴえぴえ</aside>
      </section>
    </div>
  );
}
