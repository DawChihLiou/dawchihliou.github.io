const { withContentlayer } = require('next-contentlayer')

module.exports = withContentlayer()({
  // for deployment to github pages
  assetPrefix: '',

  // opt-in to SWC's JavaScript minification instead of Terser
  swcMinify: true,

  webpack: function (config, options) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })

    return config
  },
})
