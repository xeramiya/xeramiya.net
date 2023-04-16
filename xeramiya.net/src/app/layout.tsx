import Link from "next/link";
import { M_PLUS_1p, Zen_Antique } from "next/font/google";

import Header from "../components/Header";
import Footer from "../components/Footer";
import "styles/globals.css";

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
    icon: "/favicon/favicon.ico",
    shortcut: "/favicon/favicon.png",
    apple: "/favicon/favicon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon/favicon.png",
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
    <html lang="ja" className="h-full scroll-smooth">
      <body
        className={
          "h-full overflow-y-scroll font-sans" +
          " " +
          `${"bg-[var(--background)]"} ${MPlus1p.variable} ${ZenAntique.variable}`
        }
      >
        <Header />
        <main className="mx-auto max-w-screen-lect pt-11 text-char-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
