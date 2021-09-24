const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
    clean: true,
    publicPath: '/',
  },

  devServer: {
    compress: true,
    port: 8080,
    historyApiFallback: true,
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
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { 
            loader: "css-loader", 
            options: {
              url: true,
            }
          },
        ]
      },
      {
        test: /\.(svg|png|jpg|jpeg)$/,
        use: 'file-loader'
      }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({'React': 'react'}),
    new MiniCssExtractPlugin(),
    new HtmlWebpackPlugin({
      title: "Frontent HW2",
      template: "/public/index.html"
    })
  ],
};