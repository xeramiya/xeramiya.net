import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "アーカイブ",
  description: "アーカイブの一覧",
};

export default function Archive() {
  return (
    <div className="stand">
      <article className="mx-6 mt-12">
        <section>
          <h1>制作物倉庫</h1>
          <div className="text-char-note">ハウスダストに御用心</div>
        </section>
        <hr className="border-char-note" />
        <section id="Application List">
          <ul>
            <li className="mt-8 overflow-hidden border-l-2 border-char-main px-2 py-1 hover:border-char-link hover:bg-media">
              <Link href="/archive/C0Un+er" className="">
                <h2 className="font-mono">C0Un+er</h2>
                <div className="text-char-note">カゾエ・テアゲル</div>
                <div className="">
                  数えるのってだるいよねー。数える手間を省くだけで、筋トレだって楽になる(自社調べ)。
                </div>
              </Link>
            </li>
            <li className="mt-8 overflow-hidden border-l-2 border-char-main px-2 py-1 hover:border-char-link hover:bg-media">
              <Link href="/archive/Nelax2Dream" className="">
                <h2 className="font-mono">Nelax2Dream</h2>
                <div className="text-sm text-char-note">n回聞けばスルメ曲</div>
                <div>
                  音源をループするためだけのサイト。一曲しか登録されていないらしい。
                </div>
              </Link>
            </li>
            <li className="mt-8 overflow-hidden border-l-2 border-char-main px-2 py-1 hover:border-char-link hover:bg-media">
              <Link
                href="https://buckwheat.glitch.me/"
                className=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2 className="font-mono">BUCKWHEAT</h2>
                <div className="text-sm text-char-note">ミリ秒時計</div>
                <div>ちょっとお洒落なミリ秒時計。JavaScriptの習作らしい。</div>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
