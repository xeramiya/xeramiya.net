import Link from "next/link";
import packageJson from "../../package.json";
import "../styles/globals.css";
import Header from "./header";

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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E9E6E1" },
    { color: "#16191B" },
  ],
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
    <html lang="ja">
      <body className="bg-[color:var(--background)]">
        <Header />
        <main className="-full mx-auto max-w-screen-md pt-11 text-[color:var(--char-main)]">{children}</main>
        <footer className="mx-auto mt-8 w-full select-none pt-1 pb-2 text-right">
          <div className="inline-block bg-[color:var(--error)] text-[color:var(--on-error)] px-2">
            大規模改装中: 各機能へのアクセス不可
          </div>
          <p className="mx-2 text-[color:var(--char-note)]">
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
          </p>
        </footer>
      </body>
    </html>
  );
}
