import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Layout from '../components/layout'
import { useState } from "react";

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
    "「例の〇〇」というよりも「件の〇〇」と言う方がかっこいいよね",
    "計算機の性能も馬力で表現して欲しい",
    "♪醤油の発注 多い 多い",
    "きつつきとともにとっととかたたたきしてきて"
  ];
  const [message, setMessage] = useState(messageList[Math.floor(Math.random() * messageList.length)]);

  return (
    <div>
      <Head>
        <title>UEBIT STRINGs</title>
        <meta name="description" content="DAWN PAGE" />
      </Head>

      <Layout>
        <article className="pt-2 pb-16 mx-1">
          <section className="pb-4">
            <h1 className="">
              ようこそ、
              <span className="italic">
                UEBIT STRINGs
              </span>
              へ
            </h1>
            <p className="text-gray font" id="random-message" suppressHydrationWarning={true}>
              {message}
            </p>
          </section>
          <section id="social" className="pt-4">
            <div className="">
              <h2 className="text-2xl">
                CONTENTs
              </h2>
            </div>
            <ul className="pl-2">
              <li className="">
                <Link href="/xeramiya" className="text-lg font-mono underline hover:text-cyberRed">
                  Xeramiya
                </Link>
                <p className="text-gray text-xs font-mono align-text-bottom">
                  これは誰。これは私。私は何。
                </p>
              </li>
              <li className="">
                <Link href="/weblog" className="text-lg font-mono underline hover:text-cyberRed">
                  WEBLOG
                </Link>
                <p className="text-gray text-xs font-mono align-text-bottom">
                  ブログってweblogの略らしいっすよ
                </p>
              </li>
              <li className="">
                <Link href="/app" className="text-lg font-mono underline hover:text-cyberRed">
                  APP
                </Link>
                <p className="text-gray text-xs font-mono align-text-bottom">
                  アップップとは読みませんよ
                </p>
              </li>
              <li className="">
                <Link href="/about" className="text-lg font-mono underline hover:text-cyberRed">
                  ABOUT
                </Link>
                <p className="text-gray text-xs font-mono align-text-bottom">
                  これ要る？
                </p>
              </li>
            </ul>
          </section>
        </article>
      </Layout>
    </div >
  )
}
