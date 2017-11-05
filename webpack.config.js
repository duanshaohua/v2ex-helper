const webpack = require('webpack')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const path = require('path')

module.exports = {
  // devtool: 'inline-source-map',
  entry: {
    // content-scripts
    'content-scripts/zoom/zoom.js': './app/content-scripts/zoom/zoom.js',
    'content-scripts/checkReply/insertCheckBtn.js': './app/content-scripts/checkReply/insertCheckBtn.js',
    'content-scripts/checkReply/jump.js': './app/content-scripts/checkReply/jump.js',
    'content-scripts/uploadImg/uploadImg.js': './app/content-scripts/uploadImg/uploadImg.js',
    'content-scripts/signin/signin.js': './app/content-scripts/signin/signin.js',
    'content-scripts/checkConversation/checkConversation.js': './app/content-scripts/checkConversation/checkConversation.js',

    // background-scripts
    'background-scripts/background.js': './app/background-scripts/background.js',
    
    // popup
    'popup/popup.js': './app/popup/popup.js',

    // option
    'option/option.js': './app/option/option.js',
  },
  output: {
    filename: './extension/[name]'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
    }),
    new UglifyJSPlugin(),
    new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('./manifest.json'),
    }),
  ]
};