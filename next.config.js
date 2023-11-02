/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placehold.co', 'storage.googleapis.com', 'store.goodreads.lk'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.tulalyth.com',
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
}

nextConfig.webpack = (config, context) => {
  config.module.rules.push({
    test: /\.svg$/,
    use: '@svgr/webpack',
  })
  return config
}

module.exports = nextConfig
