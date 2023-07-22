import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { XeramiyaNetIcon } from "components/Icon";

export default function Home() {
  return (
    <div className="mx-auto max-w-screen-slate">
      <article>
        <div className="flex justify-center p-5 pt-16">
          <div className="container flex h-full min-h-[80vh] items-center justify-center rounded-xl bg-primary text-media">
            <div className="m-auto text-center">
              <XeramiyaNetIcon className="h-32 w-full fill-background" />
              <div className="text-xl">ようこそ、xeramiya.netへ</div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
