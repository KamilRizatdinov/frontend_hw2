const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: '/src/index.tsx',

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: path.resolve(__dirname, '.cache/babel-loader'),
          }
        }
      }
    ]
  },

  plugins: [new HtmlWebpackPlugin({
    title: "Frontent homework#2",
    template: "/public/index.html"
  })],
};