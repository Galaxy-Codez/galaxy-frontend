/** @type {import('next').NextConfig} */
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],

  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false
      config.optimization.minimizer = [];
      config.optimization.minimizer.push(new CssMinimizerPlugin())
    }
    return config
  },
}

module.exports = nextConfig
