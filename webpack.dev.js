const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => {
  return merge(common(env, argv), {
    mode: 'development',
    devtool: 'inline-source-map',
    watch: true,
    devServer: {
      hot: true,
      host: "localhost",
      liveReload: true,
      open: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
      })
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: [
                ["@babel/preset-env", {
                  "targets": "> 0.25%, not dead"
                }],
              ],
              plugins: [
                ["@babel/plugin-proposal-class-properties", { loose: false }],
              ],
            },
          },
        },
      ]
    }
  })
};

