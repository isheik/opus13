import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

export default {
  entry: `${src}/index.jsx`,

  output: {
    path: dist,
    filename: 'bundle.js',
  },

  devServer: {
    contentBase: './dist',
    hot: true,
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  externals: {
    // electron: "require('electron')",
    // child_process: "require('child_process')",
    // fs: "require('fs')",
    // path: "require('path')"
  },

  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  // target: 'electron-main',
  target: 'electron',
  // target: 'electron-renderer',
  node: {
    // fs: 'empty',
    // net: 'empty',
    // tls: 'empty',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${src}/index.html`,
      filename: 'index.html',
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

