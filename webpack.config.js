const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: {
    index: path.resolve(__dirname, 'src/app/index.js'),
    // index: path.resolve(__dirname, 'src/app/linktree.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].bundle.js',
    clean: true,
    assetModuleFilename: 'src/assets/[name][ext]',
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
      },
      {
        test: /.s?css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      }),
    ],
    minimize: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'void(0) || 𝔻𝕌𝔸𝕃𝕀𝕋𝕐 :: ₴ØØ₦',
      filename: 'index.html',
      template: 'src/index.html',
    }),
    // new HtmlWebpackPlugin({
    //   title: 'void(0) || 𝐋𝐈𝐍𝐊𝐓𝐑𝐄𝐄',
    //   filename: 'linktree.html',
    //   template: 'src/linktree.html',
    // }),
    new MiniCssExtractPlugin(),
  ],
};
