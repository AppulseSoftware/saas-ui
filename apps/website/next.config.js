const { withContentlayer } = require('next-contentlayer2')
const path = require('node:path')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const webpack = require('webpack')

let config = {
  optimizeFonts: true,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  experimental: {
    externalDir: true,
  },
  async redirects() {
    return [
      {
        source: '/docs/pro/project-structure',
        destination: '/docs/pro/nextjs-starterkit/project-structure',
        permanent: true,
      },
      {
        source: '/docs/pro/installation/overview',
        destination: '/docs/pro/nextjs-starterkit/installation',
        permanent: true,
      },
      {
        source: '/docs/pro/installation/clone-repository',
        destination:
          '/docs/pro/nextjs-starterkit/installation/clone-repository',
        permanent: true,
      },
      {
        source: '/docs/pro/installation/run-application',
        destination: '/docs/pro/nextjs-starterkit/installation/run-application',
        permanent: true,
      },
    ]
  },
  webpack: (config, { defaultLoaders }) => {
    const fileLoaderRule = config.module.rules.find((rule) => {
      return new RegExp(rule.test).test('.svg')
    })

    config.module.rules.push({
      test: /\.(png|jpe?g|gif|mp4|svg)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: '/_next',
            name: 'static/media/[name].[hash].[ext]',
          },
        },
      ],
    })

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        resourceQuery: { not: /url/ }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      }
    )

    config.resolve = {
      ...config.resolve,
    }

    config.module.rules.push({
      test: /node_modules\/@saas-ui(?:-pro)?\/.*\.tsx?/,
      use: [defaultLoaders.babel],
    })

    config.plugins = config.plugins.concat([
      new webpack.NormalModuleReplacementPlugin(
        /\@saas-ui(?:-pro)?\/([a-z0-9-\/]+)$/,
        (resource) => {
          if (
            !resource.request.match(/^@saas-ui\/(props-docs)$/) &&
            !resource.request.match('/src')
          ) {
            resource.request = resource.request + '/src'
          }
        }
      ),
    ])

    return config
  },
}

module.exports = withContentlayer(withBundleAnalyzer(config))
