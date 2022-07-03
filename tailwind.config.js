/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: "media",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  options: {
    safelist: {
      standard: [/^bg-/, /^text-/],
    },
  },
  theme: {
    colors: {
      white: "#FFFFFF",
      gray: "#999999",
      darkblue: "#050D28",
      nand: {
        lighter: "#52B8CA",
        default: "#008899",
        dark: "#005B6B"
      },
      ired: "#BA160C",
      test: "#FF4F00",
    },
  },
  extend: {
    fontFamily: {
    }
  },
  plugins: [
    require('prettier-plugin-tailwindcss')
  ],
};
