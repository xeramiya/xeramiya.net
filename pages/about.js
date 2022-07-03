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
        <article className="pt-4 pb-8">
          <section className="">
            <h1 className="text-xl font-bold">
              <span className="italic">
                UEBIT STRINGs
              </span>
              とは
            </h1>
            <p className="text-gray font">
              STr3292のためだけの、ただの個人サイト。<br />
              最初はJavaScriptでSVGアニメーションをさせるためだけのサイトだった。<br />
              構成がつまらなすぎるのは...なんでやろなぁ。<br />
              ヘッダーにいろいろ項目を追加したが、内容がないよう。
            </p>
          </section>
        </article>
      </Layout>
    </div>
  )
}
