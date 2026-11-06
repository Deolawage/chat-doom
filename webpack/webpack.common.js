//webpack.common.js

import path from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const rootDir = path.resolve(import.meta.dirname, '..');

export default {
  context: rootDir,

  entry: './src/index.js',

  output: {
    filename: 'main.js',
    path: path.resolve(rootDir, 'dist'),
    clean: true,
    publicPath: './',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
