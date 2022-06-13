/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: false, // 'media' or 'class',
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    options: {
      safelist: {
        standard: [/^bg-/, /^text-/],
      },
    },
  },
  content: [
  ],
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
      ired: "#BA160C"
    }
  },
  extend: {},
  plugins: [
    require('prettier-plugin-tailwindcss')
  ],
};
