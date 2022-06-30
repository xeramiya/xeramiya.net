import Head from 'next/head'
import Link from 'next/link'
import packageJson from "../package.json"

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
        <meta name="og:site_name" content="UEBIT STRINGs" />
        <meta name="og:title" content="STr3292 | UEBIT STRINGs" />
        <meta name="og:image" content="https://i.gyazo.com/9f43b2ec371503a7fc2836d43249e1a5.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@STr3292" />
        <meta name="theme-color" content="#008899" />
      </Head>

      <header className="fixed w-full h-11 py-3 backdrop-blur-md bg-gray/20 hover:backdrop-blur-xl active:bg-ired">
        <div className="mx-auto max-w-screen-md">
          <h1 id="uebitLogo">
            <Link href="./">
              <a>
                <svg id="uebitLogoFace" width="100%" height="100%" viewBox="0 0 1967 492" version="1.1"
                  className="h-5 w-20 mx-4 fill-white hover:fill-ired active:fill-white">
                  <path id="U2" d="M590.792,8.703l-90.096,-0l-236.385,474.114l90.096,0l236.385,-474.114Z" />
                  <path id="U1"
                    d="M200.602,8.703l-164.819,330.574l88.999,143.54l117.017,0l40.2,-80.63l-117.114,0l-39.006,-62.91l164.819,-330.574l-90.096,-0Z" />
                  <path id="E1" d="M613.304,8.703l-40.201,80.63l277.582,-0l40.201,-80.63l-277.582,-0Z" />
                  <path id="E2" d="M520.234,195.372l-40.201,80.63l277.582,-0l40.201,-80.63l-277.582,-0Z" />
                  <path id="E3" d="M417.119,402.187l-40.2,80.63l277.582,0l40.2,-80.63l-277.582,0Z" />
                  <path id="B2"
                    d="M803.541,482.817l277.582,0l186.139,-373.338l-90.096,0l-145.939,292.708l-187.486,0l-40.2,80.63Z" />
                  <path id="B1"
                    d="M690.933,482.817l90.096,0l103.114,-206.815l187.486,-0l40.201,-80.63l-187.486,-0l52.869,-106.039l300.094,-0l40.2,-80.63l-390.189,-0l-236.385,474.114Z" />
                  <path id="I"
                    d="M1143.84,402.187l-40.2,80.63l133.726,0l196.184,-393.484l43.631,-0l40.201,-80.63l-133.727,-0l-196.184,393.484l-43.631,0Z" />
                  <path id="T"
                    d="M1540.11,8.703l-40.201,80.63l150.047,-0l-196.184,393.484l90.096,0l196.184,-393.484l150.047,-0l40.201,-80.63l-390.19,-0Z" />
                </svg>
              </a>
            </Link>
          </h1>
        </div>
      </header>
      <main className="mx-auto max-w-screen-md pt-11 text-base">{children}</main>
      <footer className="mx-auto max-w-screen-md text-right py-8">
        <p className="text-gray">
          <Link href="https://github.com/STr3292/UEBIT-STRINGs">
            <a>
              UEBIT STRINGs v{packageJson.version}
            </a>
          </Link>
        </p>
      </footer>
    </div>
  )
}
