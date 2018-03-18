import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

const base = path.resolve(__dirname);
const src = path.resolve(__dirname, 'src');
const dist = path.resolve(__dirname, 'dist');

export default {
  // entry: `${src}/index.jsx`,
  // entry: [`${base}/main.js`, `${src}/index.jsx`],
  // entry: `${src}/main.js`,
  entry: {
    main: `${src}/main.js`,
    bundle: `${src}/index.jsx`,
  },

  output: {
    path: dist,
    // filename: 'bundle.js',
    filename: '[name].js',
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
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader'],
      // },
      {
        test: /\.scss/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              url: false,
              importLoaders: 2,
            },
          },
          {
            loader: 'sass-loader',
          },
        ],
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
    __dirname: false,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `${src}/index.html`,
      filename: 'index.html',
      chunks: ['bundle'],
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
};

