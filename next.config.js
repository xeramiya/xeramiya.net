/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: true,
    appDir: true,
  },
  output: "export",
};

module.exports = nextConfig;
