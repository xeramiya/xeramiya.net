"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { useEffect, useState } from "react";

export default function Home() {
  const messageList = [
    "これからも変わらず変わり続ける...かも",
    "春はパン、てことで秋はあけぼの",
    "「もちもち」も「モチモチ」も「MOCHIMOCHI」も、もちもち感が伝わってくるけど、「餅々」だと餅がいくつか並んでいる様子しか想像できない",
    "信じられないかもしれませんが、ここは日本です。",
    "日光に紅葉を見に行っこうよう",
    "「ここすき」",
    "たまには法律を守ろう",
    "鳥居の象形文字をお金の単位にしている国民だと外国人から見られている可能性はある",
    "「例の〇〇」というよりも「件の〇〇」と言う方がかっこいい",
    "計算機の性能も馬力で表現して欲しい",
    "♪醤油の発注 多い 多い",
    "きつつきとともにとっととかたたたきしてきて",
  ];

  let [message, setMessage] = useState<string>("");

  useEffect(() => {
    setMessage(messageList[Math.floor(Math.random() * messageList.length)]);
  }, []);

  return (
    <div>
      <Head>
        <title>Xeramiya</title>
        <meta name="description" content="DAWN PAGE" />
      </Head>
      <article>
        <section>
          <h1 className="italic">ようこそ、xeramiya.netへ</h1>
          <p className="font text-gray" id="random-message" suppressHydrationWarning={true}>
            {message}
          </p>
        </section>
        <section id="social" className="pt-4">
          <div className="">
            <h2 className="text-2xl">CONTENTs</h2>
          </div>
          <ul className="pl-2">
            <li className="">
              <Link href="/xeramiya" className="font-mono text-lg underline hover:text-[color:var(--char-link)]">
                Xeramiya
              </Link>
              <p className="align-text-bottom font-mono text-xs text-gray">これは誰。これは私。私は何。</p>
            </li>
            <li className="">
              <Link href="/weblog" className="font-mono text-lg underline hover:text-cyberRed">
                WEBLOG
              </Link>
              <p className="align-text-bottom font-mono text-xs text-gray">ブログってweblogの略らしいっすよ</p>
            </li>
            <li className="">
              <Link href="/app" className="font-mono text-lg underline hover:text-cyberRed">
                APP
              </Link>
              <p className="align-text-bottom font-mono text-xs text-gray">アップップとは読みませんよ</p>
            </li>
            <li className="">
              <Link href="/about" className="font-mono text-lg underline hover:text-cyberRed">
                ABOUT
              </Link>
              <p className="align-text-bottom font-mono text-xs text-gray">これ要る？</p>
            </li>
          </ul>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </article>
    </div>
  );
}
