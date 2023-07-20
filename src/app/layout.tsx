import Header from "components/Header";
import Footer from "components/Footer";
import { M_PLUS_2, Zen_Antique } from "next/font/google";
import "styles/globals.css";

const MPlus2 = M_PLUS_2({
  subsets: ["latin"],
  variable: "--font-mplus2",
  display: "swap",
});

const ZenAntique = Zen_Antique({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-zenantique",
  display: "swap",
});

export const metadata = {
  title: "xeramiya.net",
  description: "Xeramiyaのホームページ",
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
    icon: "/favicon/favicon.svg",
    shortcut: "/favicon/icon.png",
    apple: "/favicon/icon.png",
    other: {
      rel: "apple-touch-icon-precomposed",
      url: "/favicon/icon.png",
    },
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F6F4" },
    { color: "#16191B" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ja"
      className={`h-full scroll-smooth font-sans ${MPlus2.variable} ${ZenAntique.variable}`}
    >
      <body className="h-full overflow-y-scroll bg-background">
        <Header />
        <main className="text-char-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
