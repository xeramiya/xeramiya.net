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
          <h1 className="text-xl font-bold">
            ようこそ、
            <span className="italic">
              UEBIT STRINGs
            </span>
            へ
          </h1>
          <p className="text-gray">
            武蔵野新首都圏憂愁<br />
            <span className="text-xs">ムサシノ・Nキャピタル・ブルース</span>
          </p>
          <section id="social" className="py-4 mt-2">
            <h1 className="text-xl font-bold">
              STr3292
            </h1>
            <p className="text-gray">
              あっちこっち
            </p>
            <ul className="mt-2 space-y-1 text-nand-lighter">
              <li>
                <Link href="https://twitter.com/STr3292">
                  <a className="underline">
                    Twitter
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/str3292u">
                  <a className="underline">
                    Instagram
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://steamcommunity.com/id/str3292">
                  <a className="underline">
                    Steam
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com/channel/UCKpHbYt5VuQZ6ePTgjVvhfQ">
                  <a className="underline">
                    YouTube
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://soundcloud.com/6esqihtayvem">
                  <a className="underline">
                    SoundCloud
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://scrapbox.io/uebit/">
                  <a className="underline">
                    UEBIT ARCHIVEs
                  </a>
                </Link>
                <span className="text-sm text-nand-dark">
                  (現在非公開)
                </span>
              </li>
            </ul>
          </section>
          <section></section>
        </article>
      </Layout>
    </div>
  )
}
