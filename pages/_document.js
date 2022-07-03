import { Html, Head, Main, NextScript, Script } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <meta name="google-site-verification" content="DDFjOBGE920hefjLeF7CVGdNRIs5t9bnWSXtVvbk2QM" />
      </Head>
      <body className="overflow-y-scroll bg-darkblue text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}