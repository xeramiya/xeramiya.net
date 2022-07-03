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
        <article className="pt-4 pb-8">
          <section className="">
            <h1 className="text-xl font-bold">
              作ってきたものを集めたにょ
            </h1>
            <p className="text-gray font">
              集めてきてくれてありがとう<br />
              集めてきてくれてありがとう<br />
              帰れ
            </p>
          </section>
          <section id="social" className="py-4">
            <h1 className="text-lg font-bold">
              BUCKWHEAT
            </h1>
            <Link href="https://buckwheat.glitch.me/">
              <a className="underline text-nand-lighter active:bg-nand-default active:text-white">
                起動！
              </a>
            </Link>
            <p className="text-gray">
              時計、かっこいいよ
            </p>
          </section>
        </article>
      </Layout>
    </div>
  )
}
