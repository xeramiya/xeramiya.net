import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <link rel="icon" href="./favicons/favicon.ico" />
        <link rel="icon" href="./favicons/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="./favicons/apple-favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="STr3292" />
        <meta name="keywords" content="STr3292,UEBIT" />
        <meta name="og:url" content="uebit.tk" />
        <meta name="og:type" content="website" />
        <meta name="og:site_name" content="UEBIT STRING" />
        <meta name="og:title" content="STr3292 | UEBIT STRING" />
        <meta name="og:image" content="https://i.gyazo.com/9f43b2ec371503a7fc2836d43249e1a5.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@STr3292" />
        <meta name="theme-color" content="#008899" />
      </Head>
      <main>
        {children}
      </main>
    </div>
  )
}
