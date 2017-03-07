const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const port = 3026
module.exports = {
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    `webpack-dev-server/client?http://localhost:${port}`,
    // bundle the client for webpack-dev-server and connect to the provided endpoint

    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading only- means to only hot reload for
    // successful updates
    './src/index.jsx'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: __dirname + '/node_modules'
    }
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    stats: 'errors-only',
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/',
    compress: true,
    port: port,
    overlay: {
      errors: true,
      warnings: true
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({title: 'Webpack Demo', template: './src/index.html'}),
    new webpack.HotModuleReplacementPlugin(),
    // enable HMR globally
    new webpack.NamedModulesPlugin(),
    // prints more readable module names in the browser console on HMR updates
  ]
}