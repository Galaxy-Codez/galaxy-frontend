/** @type {import('next').NextConfig} */
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")

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
      config.optimization.minimizer = []
      config.optimization.minimizer.push(new OptimizeCSSAssetsPlugin({}))
    }
    return config
  },
}

module.exports = nextConfig
