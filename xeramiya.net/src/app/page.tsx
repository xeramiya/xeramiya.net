"use client";

import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useRive } from "rive-react";

export default function Home() {
  const messageList = [
    "これからも変わらず変わり続ける...かも",
    "春はパン、てことで秋はあけぼの",
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

  const message = messageList[Math.floor(Math.random() * messageList.length)];

  const { rive, RiveComponent } = useRive({
    src: "./assets/logos/xeramiya-logomotion.riv",
    animations: "Loading",
    autoplay: true,
  });

  return (
    <div>
      <article>
        <div className="text-center invert dark:invert-0 mt-48">
          <div className="h-32">
            <RiveComponent className="" />
            <div className="font-serif text-char-glass">
              トップページは現在準備中だにょ
            </div>
          </div>
        </div>
        {/*
        <section>
          <h1 className="italic">
            <span className="inline-block">セラミヤ・ネットへ</span>
            <span className="inline-block">ようこそ</span>
          </h1>
          <p className="note" id="random-message" suppressHydrationWarning={true}>
            {message}
          </p>
        </section>
        */}
      </article>
    </div>
  );
}
