/** @type {import('next').NextConfig} */

import withImages from "next-images";

const nextConfig = withImages({
  reactStrictMode: false,
  swcMinify: true,
  images: {
    disableStaticImages: true,
  },
});

export default nextConfig;
