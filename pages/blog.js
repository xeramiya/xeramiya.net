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
        <title>About UEBIT STRINGs</title>
        <meta name="description" content="About this page" />
      </Head>

      <Layout>
        <article className="pt-2 pb-16 mx-1">
          <section className="py-4">
            <h1 className="text-xl font-bold">
              <ruby>
                <rb>武蔵野新首都圏憂愁</rb>
                <rt>ムサシノ ニューキャピタル ブルース</rt>
              </ruby>
            </h1>
            <p className="text-gray">
              港の空の色は、空きチャンネルに合わせたTVの色だった。
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </p>
          </section>
        </article>
      </Layout>
    </div>
  )
}