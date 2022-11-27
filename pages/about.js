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
        <meta name="description" content="About this site" />
      </Head>

      <Layout>
        <article className="pt-2 pb-16 mx-1">
          <section className="">
            <h1 className="">
              <span className="italic">
                UEBIT STRINGs
              </span>
              とは
            </h1>
            <p className="text-gray font-serif">
              &nbsp;
              本サービス(<ruby><rb>UEBIT STRINGs</rb><rt>ウエビット ストリングス</rt></ruby>)は「<ruby><rb>離散した個性の再構築</rb><rt>ニューロマンシー</rt></ruby>」を目標に<ruby><rb>UEBIT</rb><rt>ウエビット</rt></ruby>社が開発し、運営を行なっているウェブサービスである。
              <br />
              &nbsp;
              私たちが生きる情報化時代には多様な社会がウェブ上に存在し、プロトコルはそれぞれの社会によって異なる。
              生物学的には一人の人間であっても、情報的には複数のアカウントである。
              人間は社会によって自分を演じ分けることができるが、それは肉体と精神の乖離を齎す。
              また、任意の個人ついて知ろうとした場合、複数のアカウントを横断して情報を処理しなければならない。
              それはとても骨の折れる仕事であるため、一個人が所有する多数のアカウントを俯瞰して閲覧することができるメディアが必要とされている。
              <br />
              &nbsp;
              以上の要請に応えるべく開発されたのが本サービスである。
              <br />
              <br />
            </p>
            <p className="text-gray font-serif">
              というのはもちろん冗談で、ただの個人サイトです。<br />
              ヘッダーにいろいろ項目を追加したけど、内容がないよう。
            </p>
          </section>
        </article>
      </Layout>
    </div>
  )
}
