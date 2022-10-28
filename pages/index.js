import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Layout from '../components/layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>STr3292 - UEBIT STRINGs</title>
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
            <p className="text-gray font">
              これからも変わらず変わり続ける...かも
            </p>
          </section>
          <section id="social" className="pt-4">
            <div className="">
              <h2 className="text-2xl">
                CONTENTs
              </h2>
            </div>
            <ul>
              <li className="pl-2">
                <Link href="/STr3292">
                  <a className="text-lg font-mono underline hover:text-iRed">
                    STr3292
                  </a>
                </Link>
                <p className="text-gray text-xs font-mono align-text-bottom">
                  私がメインコンテンツに!?
                </p>
              </li>
              <li className="pl-2">
                <Link href="/weblog">
                  <a className="text-lg font-mono underline hover:text-iRed">
                    WEBLOG
                  </a>
                </Link>
                <p className="text-gray text-xs font-mono align-text-bottom">
                  当然のように何も書かれていない
                </p>
              </li>
              <li className="pl-2">
                <Link href="/app">
                  <a className="text-lg font-mono underline hover:text-iRed">
                    APP
                  </a>
                </Link>
                <p className="text-gray text-xs font-mono align-text-bottom">
                  アップップとは読みません
                </p>
              </li>
              <li className="pl-2">
                <Link href="/about">
                  <a className="text-lg font-mono underline hover:text-iRed">
                    ABOUT
                  </a>
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
