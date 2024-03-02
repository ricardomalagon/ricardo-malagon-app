/** @type {import('next').NextConfig} */

const withImages = require("next-images");
// import withImages from "next-images";

// module.exports = withImages({
//   trailingSlash: true,
//   output: "export",
//   reactStrictMode: false,
//   swcMinify: true,
//   images: {
//     disableStaticImages: true,
//   },
// });

// import withImages from "next-images";

// const nextConfig = withImages({
//   output: "export",
//   trailingSlash: true,
//   distDir: "dist",
// });

// export default nextConfig;

const nextConfig = withImages({
  output: "export",
  reactStrictMode: false,
  swcMinify: true,
  images: {
    disableStaticImages: true,
  },
});

module.exports = nextConfig;
