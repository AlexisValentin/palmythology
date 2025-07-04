/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'a.storyblok.com' }],
  },
  webpack: (config, { webpack }) => {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    config.externals['node:fs'] = 'commonjs node:fs'
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
    }
    config.plugins.push(
      new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
        resource.request = resource.request.replace(/^node:/, '')
      }),
    )

    return config
  },
  env: {
    STORYBLOK_TOKEN: process.env.STORYBLOK_TOKEN,
    STORYBLOK_BASE_URL: process.env.STORYBLOK_BASE_URL,
  },
  redirects: () => {
    return [
      {
        source: '/cards/egyptian/hator',
        destination: '/cards/egyptian/hathor',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
