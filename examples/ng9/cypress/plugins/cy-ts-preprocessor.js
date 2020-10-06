const wp = require('@cypress/webpack-preprocessor');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { addImageRedirect } = require('./add-image-redirect');

const webpackOptions = {
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      assets: path.resolve(__dirname, '/src/assets'),
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        // loaders: ['ts-loader', 'angular2-template-loader'],
        use: [{
          loader: 'ts-loader',
          options: {
            transpileOnly: true
          }
        }, {
          loader: 'angular2-template-loader'
        }],
        exclude: [/node_modules/],
      },
      {
        test: /\.(css)$/,
        loaders: ['to-string-loader', 'css-loader', 'sass-loader'],
        exclude: /\.async\.(css)$/
      },
      {
        test: /\.(html)$/,
        loader: 'html-loader',
        exclude: /\.async\.(css)$/
      },
      {
        test: /\.async\.(html|css)$/,
        loaders: ['file?name=[name].[hash].[ext]', 'extract']
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader?name=assets/[name].[hash].[ext]'
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: './src/assets/*', to: 'dist' },
      ],
    }),
  ]
}

addImageRedirect(webpackOptions)

const options = {
  webpackOptions
}

module.exports = wp(options)
