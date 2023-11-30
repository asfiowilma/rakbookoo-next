/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'placehold.co' },
      { hostname: 'storage.googleapis.com' },
      { hostname: 'store.goodreads.lk' },
      {
        protocol: 'https',
        hostname: '**.tulalyth.com',
      },
    ],
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
