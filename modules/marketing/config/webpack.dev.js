const { merge } = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackCommon = require("./webpack.common");
const ModuleFedorationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const pkg = require("../package.json");

module.exports = merge(webpackCommon, {
  mode: "development",
  devServer: {
    port: "3001",
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFedorationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      shared: pkg.dependencies,
    }),
  ],
});
