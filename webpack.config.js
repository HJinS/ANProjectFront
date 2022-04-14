const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const dotenv = require("dotenv");
dotenv.config();
const mode = process.env.NODE_ENV || "development"
module.exports = {
  entry: "./src/index.tsx", // 번들링 시작 위치
  mode : mode,
  output: {
    path: path.join(__dirname, 'dist/'),
    filename: "bundle.js",
    publicPath: '/'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'css'],
    fallback: {
      "os": require.resolve("os-browserify/browser"),
      "path": require.resolve("path-browserify"),
      "console": require.resolve('console-browserify'),
      "constants": require.resolve('constants-browserify'),
      "http": require.resolve('stream-http'),
      "https": require.resolve('https-browserify'),
      "process": require.resolve('process/browser'),
      "url": require.resolve('url'),
      "events": require.resolve('events'),
    }
  },
  module: {
    rules: [
      // we use babel-loader to load our jsx and tsx files
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options:  {
              transpileOnly: true,
            }
          }
        ]
      },
      // css-loader to bundle all the css files into one file and style-loader to add all the styles  inside the style tag of the document
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        exclude: /node_modules/,
        use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: './public/index.html',
    }),
    new BundleAnalyzerPlugin({
      "analyzerMode": "static"
    }),
    new webpack.DefinePlugin({
      'process.env.SERVER_IP': JSON.stringify(process.env.SERVER_IP),
    }),
    new webpack.EnvironmentPlugin([
      "SERVER_IP",
    ])
  ],
};