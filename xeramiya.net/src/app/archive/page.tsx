import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "アーカイブ",
  description: "アーカイブの一覧",
};

export default function archive() {
  return (
    <div>
      <article>
        <section>
          <h1>作ったものをまとめたにょ</h1>
          <div className="text-char-note">まとめてくれてありがとう</div>
        </section>
        <section id="Application List">
          <ul>
          <li className="mt-8 overflow-hidden border-l-2 py-1 px-2 border-nand">
              <h2 className="hidden">Nelax2Dream</h2>
              <Link href="/archive/C0Un+er" className="font-mono text-2xl hover:text-char-link hover:underline">
                C0Un+er
              </Link>
              <div className="text-sm text-char-note">カゾエ・テアゲル</div>
              <p>数えるのってだるいよねー。数える手間を省くだけで、筋トレだって楽になる(自社調べ)。</p>
            </li>
            <li className="mt-8 overflow-hidden border-l-2 py-1 px-2 border-nand">
              <h2 className="hidden">Nelax2Dream</h2>
              <Link href="/archive/Nelax2Dream" className="font-mono text-2xl hover:text-char-link hover:underline">
                Nelax2Dream
              </Link>
              <div className="text-sm text-char-note">n回聞けばスルメ曲</div>
              <p>音源をループするためだけのサイト。一曲しか登録されていないらしい。</p>
            </li>
            <li className="mt-8 overflow-hidden border-l-2 py-1 px-2 border-nand">
              <h2 className="hidden">BUCKWHEAT</h2>
              <Link
                href="https://buckwheat.glitch.me/"
                className="font-mono text-2xl hover:text-char-link hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                BUCKWHEAT
              </Link>
              <div className="text-sm text-char-note">ミリ秒時計</div>
              <p>ちょっとお洒落なミリ秒時計。JavaScriptの習作らしい。</p>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
