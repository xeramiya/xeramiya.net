import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { XeramiyaNetIcon } from "components/Icon";
import "styles/home.css";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="mx-auto max-w-screen-slate">
        <article>
          <section>
            <div className="ultra-wide flex justify-center p-5 pt-16">
              <div className="slate:w-screen-slate container relative h-[80vh] min-h-[20rem] w-full overflow-hidden rounded-xl fill-char-main text-char-main slate:min-w-[61.8%]">
                <div className="absolute h-full w-full rounded-xl bg-media-invert opacity-10"></div>
                <div className="hyper-stitch-1 absolute h-full w-full rounded-xl border-media-invert"></div>
                <div className="hyper-stitch-2 absolute h-full w-full rounded-xl border-media-invert"></div>
                <div className="hyper-stitch-3 absolute h-full w-full rounded-xl border-media-invert"></div>
                <div className="absolute h-full w-full rounded-xl backdrop-blur-xl"></div>
                <XeramiyaNetIcon className="container absolute left-1/2 top-1/2 h-40 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 right-0 px-4 py-6 font-serif text-3xl">
                  <span className="inline-block">ようこそ、</span>
                  <span className="inline-block">xeramiya.netへ</span>
                </div>
                <div className="hyper-rainbow absolute h-full w-full rounded-xl"></div>
              </div>
            </div>
          </section>
          <section className="mx-4">
            <ul>
              <li className="my-1 py-1">
                <Link href="/about" className="hover:underline">
                  <h2 className="">About</h2>
                </Link>
                <div className="text-char-note">わたくせについて</div>
              </li>
              <li className="my-1 py-1">
                <Link href="/blog" className="hover:underline">
                  <h2 className="">Blog</h2>
                </Link>
                <div className="text-char-note">人の気配がないブログ</div>
              </li>
              <li className="my-1 py-1">
                <Link href="/archive" className="hover:underline">
                  <h2 className="">Archive</h2>
                </Link>
                <div className="text-char-note">作ったもの色々ごった煮広場</div>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  );
}
