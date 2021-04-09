module.exports = {
  images: {
    domains: ['i.imgur.com', 'www.google.com', 'imgur.com'],
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    })

    return config
  },
  webpackDevMiddleware: config => config,
}
