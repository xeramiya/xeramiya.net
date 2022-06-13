import { Html, Head, Main, NextScript, Script } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=optional" rel="stylesheet" />
      </Head>
      <body className="overflow-y-scroll bg-darkblue text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}