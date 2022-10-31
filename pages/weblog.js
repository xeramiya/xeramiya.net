import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Layout from '../components/layout'

export default function About() {
  return (
    <div>
      <Head>
        <title>Weblog - UEBIT STRINGs</title>
        <meta name="description" content="About this page" />
      </Head>

      <Layout>
        <article className="pt-2 pb-16 mx-1 font-serif">
          <h1 className="">
            ネオンダイヴァ
          </h1>
          <section className="py-4">
            <ul>
              <li>
                <h2 className="">
                  <span className="">
                    第一章:&nbsp;
                  </span>
                  <ruby>
                    <rb>武蔵野新首都圏憂愁</rb>
                    <rt>ムサシノ ニューキャピタル ブルース</rt>
                  </ruby>
                </h2>
                <p className="text-gray">
                  エッジを踏み越えるんだ。
                  <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                </p>
              </li>
            </ul>
          </section>
        </article>
      </Layout>
    </div>
  )
}