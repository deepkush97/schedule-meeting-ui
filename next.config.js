/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  trailingSlash: false,
  reactStrictMode: true,
  basePath: process.env.NEXT_PUBLIC_SITE_PREFIX,
  assetPrefix: process.env.NEXT_PUBLIC_SITE_PREFIX,
};

module.exports = nextConfig;
