/** @type {import('tailwindcss').Config} */

module.exports = {
  mode: "jit",
  darkMode: "media",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  options: {
    safelist: {
      standard: [/^bg-/, /^text-/],
    },
  },
  theme: {
    screens: {
      slate: "1024px",
    },
    fontFamily: {
      sans: [
        "var(--font-mplus2)",
        "Helvetica Neue",
        "Arial",
        "Hiragino Kaku Gothic ProN",
        "Hiragino Sans",
        "Meiryo",
        "sans-serif",
      ],
      serif: ["var(--font-zenantique)", "serif"],
      mono: ["SF Mono", "Menlo", "Roboto Mono", "monospace"],
    },
    extend: {
      colors: {
        background: { DEFAULT: "#DAD8D3", secondary: "#B8B7B3" },
        primary: "#008899",
        error: "#ba160c",
        glass: "#00000000",
        media: {
          DEFAULT: "#f7f6f4",
          invert: "#16191b",
        },
        char: {
          main: "#4A585A",
          note: "#869192",
          link: "#f33968",
          error: "#ffffff",
          glass: "#434343",
        },

        white: "#FFFFFF",
        zWhite: "#F9F7DC",
        gray: "#B9B9B9",
        darkblue: "#050D28",
        nand: {
          light: "#52B8CA",
          DEFAULT: "#008899",
          dark: "#005B6B",
        },
        ReD: "#950008",
        iRed: "#BA160C",
        cyberYellow: "#F3E600",
        cyberBlue: "#04DAF6",
        cyberRed: "#FF003C",

        Twitter: "#1B9DF0",
        Bluesky: "#0560ff",
        YouTube: "#FF0000",
        Facebook: "#1877F2",
        Instagramm: "#9B6954",
        Steam: "#2A475E",
        SoundCloud: "#FF4400",
        Spotify: "#1DB954",
        GitHub: "#424242",
        Discord: "#5865F2",
      },
      animation: {},
      keyframes: {},
    },
  },
  extend: {
    fontFamily: {},
  },
  plugins: [],
};
