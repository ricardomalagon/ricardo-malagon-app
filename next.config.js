/** @type {import('next').NextConfig} */

const withImages = require("next-images");

const nextConfig = withImages({
  output: "export",
  reactStrictMode: false,
  swcMinify: true,
  images: {
    disableStaticImages: true,
  },
});

module.exports = nextConfig;
