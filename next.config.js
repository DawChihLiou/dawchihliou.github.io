const { withContentlayer } = require('next-contentlayer')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withContentlayer()(
  withBundleAnalyzer({
    // for deployment to github pages
    assetPrefix: '',

    // opt-in to SWC's JavaScript minification instead of Terser
    swcMinify: true,

    webpack: function (config, { isServer }) {
      config.module.rules.push({
        test: /\.md$/,
        use: 'raw-loader',
      })

      config.module.rules.push({
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      })

      // wasm support workaround
      // https://github.com/vercel/next.js/issues/25852
      if (isServer) {
        config.output.webassemblyModuleFilename =
          './../static/wasm/[modulehash].wasm'
      } else {
        config.output.webassemblyModuleFilename =
          'static/wasm/[modulehash].wasm'
      }

      // Since Webpack 5 doesn't enable WebAssembly by default, we should do it manually
      config.experiments = { asyncWebAssembly: true }

      return config
    },
  })
)
