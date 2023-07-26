import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { XeramiyaNetIcon } from "components/Icon";
import "styles/home.css";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-slate">
      <article>
        <div className="flex justify-center p-5 pt-16">
          <div className="container relative h-[80vh] min-h-[20rem] rounded-xl fill-char-main text-char-mai overflow-hidden">
            <div className="hyperstitch1 absolute h-full w-full rounded-xl border-media-invert"></div>
            <div className="hyperstitch2 absolute h-full w-full rounded-xl border-media-invert"></div>
            <div className="hyperstitch3 absolute h-full w-full rounded-xl border-media-invert"></div>
            <div className="hypershell absolute h-full w-full rounded-xl backdrop-blur-md"></div>
            <XeramiyaNetIcon className="container absolute left-1/2 top-1/2 h-48 -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 px-4 py-6 font-serif text-3xl">
              <span className="inline-block">ようこそ、</span>
              <span className="inline-block">xeramiya.netへ</span>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
