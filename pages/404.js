import Head from 'next/head'
import Link from 'next/link'
import Error from '../components/error'

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>ERR: 404 NOT FOUND</title>
        <meta name="description" content="404 Not Found" />
      </Head>
      <div className="fixed inset-0 m-auto text-white text-center w-min h-min">
        <p className="font-extlabold text-9xl">
          404
        </p>
        <p className="font-medium text-2xl">
          PAGE NOT FOUND
        </p>
        <Link href="./" className="text-cyberBlue underline">
          &gt;&gt; Wake Up &lt;&lt;
        </Link>
      </div>
    </div>
  )
}