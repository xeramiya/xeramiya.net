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
            <p className="text-gray font">
              <p className="font-serif">
                <ruby>
                  <rb>UEBIT STRINGs</rb>
                  <rt>ウエビット ストリングス</rt>
                </ruby>
                とは「
                <ruby>
                  <rb>離散した個性の再構成と可視化</rb>
                  <rt>ニューロマンシー</rt>
                </ruby>
                」を目標に、
                <ruby>
                  <rb>UEBIT</rb>
                  <rt>ウエビット</rt>
                </ruby>
                社がインタネット上で運営していたサーヴィスである。
                現在同社が運営する
                <span className="bg-gray">
                  まだ思いついていないから見ないで
                </span>
                の前身である。
                <br />
                情報化時代における個人の個性は、各人が利用するSNS (Social Networking Service)単位で区切られている。
                それらのサーヴィスを横断して、情報を分析するのは骨の折れる仕事である。
                そこで、開発されたのがこの
                <ruby>
                  <rb>UEBIT STRINGs</rb>
                  <rt>ウエビット ストリングス</rt>
                </ruby>
                だ。
                <br />
                <br />
              </p>
              というのはもちろんウソで、ただの個人サイトです。<br />
              ヘッダーにいろいろ項目を追加したけど、内容がないよう。
            </p>
          </section>
        </article>
      </Layout>
    </div>
  )
}
