const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devtool: 'source-maps',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 3025
  },
  plugins: [
    new HtmlWebpackPlugin({title: 'Webpack Demo'})
  ]

}