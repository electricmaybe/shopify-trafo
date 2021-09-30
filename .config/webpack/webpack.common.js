const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  stats: 'minimal',
  context: path.resolve(__dirname, '../..'),
  entry: path.resolve(__dirname, '../../src/_scripts/main.js'),
  output: {
    path: path.resolve(__dirname, '../../build/assets'),
    filename: 'index.js'
  },
  resolve: {
    extensions: ['*', '.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../../src/_scripts')
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
        include: path.resolve(__dirname, '../../src/_scripts'),
        use: 'webpack-import-glob-loader'
      }
    ]
  },
  context: path.resolve(__dirname, '../../src'),
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: 'snippets/**/*.liquid', // combines all snippet subfolders into /snippets
          to: '../../build/snippets/[name][ext]',
          noErrorOnMissing: true
        },
        {
          from: 'snippets/**/*.{scss,css,js}', // exports all styles and scripts into assets folder
          to: '../../build/assets/[name][ext]',
          noErrorOnMissing: true
        },
        {
          from: 'sections/**/*.liquid', // combines all snippet subfolders into /snippets
          to: '../../build/sections/[name][ext]',
          noErrorOnMissing: true
        },
        {
          from: 'sections/**/*.{scss,css,js}', // exports all styles and scripts into assets folder
          to: '../../build/assets/[name][ext]',
          noErrorOnMissing: true
        },
        {
          from: 'templates/**/*.{liquid,json}',  // combines all template subfolders into /templates
          to: '../../build/templates/[name][ext]',
          noErrorOnMissing: true
        },
        {
          from: 'templates/**/*.{scss,css,js}', // exports all styles and scripts into assets folder
          to: '../../build/assets/[name][ext]',
          noErrorOnMissing: true
        },
        {
          from: 'layout/**/*.{scss,css,js}', // exports all styles and scripts into assets folder
          to: '../../build/assets/[name][ext]',
          noErrorOnMissing: true
        },
        {
          from: 'layout/**/*.liquid',  // combines all layout subfolders into /layout
          to: '../../build/layout/[name][ext]',
          noErrorOnMissing: true
        },
        {
          from: 'config/',  // moves config folder as usual
          to: '../../build/config',
          noErrorOnMissing: true
        },
        {
          from: 'locales/',  // moves locales folder as usual
          to: '../../build/locales',
          noErrorOnMissing: true
        },
        {
          from: 'assets/**/*', // combines all assets subfolders into /assets
          to: '../../build/assets/[name][ext]',
          noErrorOnMissing: true,
          globOptions: {
            ignore: ['**/*.js', '**/*.scss', '**/*.sass', '**/*.css', ] // ignores preadded js and css files.
          }
        }
      ]
    })
  ]
}