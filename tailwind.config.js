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
    extend: {
      screens: {
        slate: "1024px",
      },
      colors: {
        background: "var(--background)",
        primary: "var(--primary)",
        error: "var(--error)",
        glass: "var(--glass)",
        media: {
          DEFAULT: "var(--media-default)",
          invert: "var(--media-invert)",
        },
        char: {
          main: "var(--char-main)",
          note: "var(--char-note)",
          link: "var(--char-link)",
          error: "var(--char-error)",
          glass: "var(--char-glass)",
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
        YouTube: "#FF0000",
        Facebook: "#1877F2",
        Instagramm: "#9B6954",
        Steam: "#2A475E",
        SoundCloud: "#FF4400",
        Spotify: "#1DB954",
        GitHub: "#424242",
        Discord: "#5865F2",
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
        mono: [
          "SF Mono",
          "Menlo",
          "Roboto Mono",
          "monospace",
        ],
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
