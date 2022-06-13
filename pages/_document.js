import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ja">
      <Head />
      <body className="overflow-y-scroll bg-darkblue text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}