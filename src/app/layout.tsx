import Header from "components/Header";
import Footer from "components/Footer";
import type { Metadata, Viewport } from "next";
import { M_PLUS_2, Zen_Antique } from "next/font/google";
import "styles/global.css";

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

// Doc: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export const metadata: Metadata = {
  title: "Xeramiya.net",
  description: "Xeramiyaのとてもすごいホームページ",
  generator: "Next.js",
  applicationName: "xeramiya.net",
  referrer: "origin-when-cross-origin",
  keywords: ["Xeramiya", "UEBIT"],
  authors: [
    {
      name: "Xeramiya",
      url: "https://www.xeramiya.net",
    },
  ],
  creator: "Xeramiya",
  publisher: "UEBIT",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://xeramiya.net/"),
  openGraph: {
    siteName: "xeramiya.net",
    locale: "ja_JP",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon/favicon.svg",
    shortcut: "/favicon/favicon.svg",
    apple: "/favicon/apple-icon.png",
  },
  twitter: {
    description: "Xeramiyaのホームページ",
    siteId: "4716661339",
    creator: "@xeramiya",
    creatorId: "4716661339",
  },
  assets: ["https://www.xeramiya.net/assets"],
  category: "homepage",
};

export const viewport: Viewport = {
  themeColor: "#DAD8D3",
  colorScheme: "light",
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
