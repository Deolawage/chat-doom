import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.js',

  output: {
    filename: 'main.js',
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],

  devServer: {
    static: './dist',
    port: 8080,
  },
};