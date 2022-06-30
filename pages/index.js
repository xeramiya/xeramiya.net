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
        <title>STr3292 | UEBIT STRINGs</title>
        <meta name="description" content="DAWN PAGE" />
      </Head>

      <Layout>
        <article className="pt-4 pb-8">
          <section className="">
            <h1 className="text-xl font-bold">
              ようこそ、
              <span className="italic">
                UEBIT STRINGs
              </span>
              へ
            </h1>
            <p className="text-gray font">
              これからも変わらず変わり続ける
            </p>
          </section>
          <section id="social" className="py-4">
            <h1 className="text-xl font-bold">
              STr3292
            </h1>
            <p className="text-gray">
              あっちこっち
            </p>
            <ul className="mt-2 space-y-1 text-nand-lighter">
              <li>
                <Link href="https://twitter.com/STr3292">
                  <a className="underline active:bg-nand-default active:text-white">
                    Twitter
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/str3292u">
                  <a className="underline active:bg-nand-default active:text-white">
                    Instagram
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://steamcommunity.com/id/str3292">
                  <a className="underline active:bg-nand-default active:text-white">
                    Steam
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/channel/UCKpHbYt5VuQZ6ePTgjVvhfQ">
                  <a className="underline active:bg-nand-default active:text-white">
                    YouTube
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://soundcloud.com/6esqihtayvem">
                  <a className="underline active:bg-nand-default active:text-white">
                    SoundCloud
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://scrapbox.io/uebit/">
                  <a className="underline active:bg-nand-default active:text-white">
                    UEBIT ARCHIVEs
                  </a>
                </Link>
                <span className="text-sm text-nand-dark">
                  (現在非公開)
                </span>
              </li>
            </ul>
          </section>
          <section className="py-4">
            <h1 className="text-xl font-bold">
              <ruby>
                <rb>武蔵野新首都圏憂愁</rb>
                <rt>ムサシノ ニューキャピタル ブルース</rt>
              </ruby>
            </h1>
            <p className="text-gray font">
              港の空の色は、空きチャンネルに合わせたTVの色だった。
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </p>
          </section>
        </article>
      </Layout>
    </div>
  )
}
