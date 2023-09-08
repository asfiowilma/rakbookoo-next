/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placehold.co', 'storage.googleapis.com'],
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
