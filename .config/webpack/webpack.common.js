const path = require('path')

module.exports = {
  stats: 'minimal',
  context: path.resolve(__dirname, '../..'),
  entry: path.resolve(__dirname, '../../_scripts/main.js'),
  output: {
    path: path.resolve(__dirname, '../../assets'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['*', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../../_scripts')
    },
    fallback: {
      'path': require.resolve("path-browserify"),
      'fs': false
    },
    symlinks: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../../_scripts'),
        use: 'webpack-import-glob-loader'
      }
    ]
  },
}