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
        <title>Fake Login Page - UEBIT STRINGs</title>
        <meta name="description" content="About this page" />
      </Head>

      <Layout>
        <div className="fixed inset-0 m-auto text-white text-center h-min">
          <p className="font-extlabold text-3xl">
            そんなものはないよん
          </p>
          <p className="font-medium text-ls">
            あなたのアカウントを保護する技術力はありません
          </p>
          <Link href="./">
            <a className="text-nand-lighter underline">
              &gt;&gt; Home &lt;&lt;
            </a>
          </Link>
        </div>
      </Layout>
    </div>
  )
}
