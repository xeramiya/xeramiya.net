import Link from "next/link";
import Header from "./header";
import { M_PLUS_1p, Zen_Antique } from "next/font/google";

import "../styles/globals.css";
import packageJson from "../../package.json";

const MPlus1p = M_PLUS_1p({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-mplus1p",
  display: "swap",
});

const ZenAntique = Zen_Antique({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-zen-antique",
  display: "swap",
});

export const metadata = {
  title: {
    default: "xeramiya.net",
    template: "%s - xeramiya.net",
  },
  description: "Xeramiyaのホームページ",
  url: "https://www.xeramiya.net",
  applicationName: "xeramiya.net",
  keywords: ["Xeramiya", "UEBIT"],
  category: "homepage",
  authors: [
    {
      name: "Xeramiya",
      url: "https://www.xeramiya.net",
    },
  ],
  creator: "Xeramiya",
  publisher: "UEBIT",
  generator: "Next.js",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    siteName: "xeramiya.net",
    locale: "ja_JP",
    type: "website",
  },
  icons: {
    icon: "/favicons/favicon.ico",
    shortcut: "/favicons/favicon.png",
    apple: "/favicons/favicon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicons/favicon.png",
    },
  },
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#F7F6F4" }, { color: "#16191B" }],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  twitter: {
    title: "xeramiya.net",
    description: "Xeramiyaのホームページ",
    siteId: "4716661339",
    creator: "@xeramiya",
    creatorId: "4716661339",
  },
  alternates: {},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={"overflow-y-scroll" + " " + `${"bg-[var(--background)]"} ${MPlus1p.variable} ${ZenAntique.variable}`}>
        <Header />
        <main className="mx-auto max-w-screen-lect px-4 pt-16 leading-8 text-char-main">{children}</main>
        <footer className="mx-auto w-full select-none pt-1 pb-2 text-right mt-24">
          <div className="inline-block rounded-l-md bg-error px-2 font-serif text-char-error">
            大規模改装作業中: 大部分へのアクセス不可
          </div>
          <div className="mx-2 text-char-note">
            <Link
              href="https://github.com/xeramiya/xeramiya.net"
              className="font-mono italic"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="">
                {packageJson.name} v{packageJson.version}
              </span>
            </Link>
          </div>
        </footer>
      </body>
    </html>
  );
}
