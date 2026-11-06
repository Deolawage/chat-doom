// Webpack dev. js


import path from 'node:path';
import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
  mode: 'development',

  devtool: 'eval-source-map',

  devServer: {
    static: {
      directory: path.resolve(import.meta.dirname, '..', 'dist'),
    },
    watchFiles: ['./src/template.html'],
    open: true,
    hot: true,
  },
});
