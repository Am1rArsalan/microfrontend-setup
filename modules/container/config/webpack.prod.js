const { merge } = require("webpack-merge");
const webpackCommon = require("./webpack.common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const pkg = require("../package.json");
const domain = process.env.PRODUCTION_DOMAIN;

module.exports = merge(webpackCommon, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "container",
      remotes: {
        marketing: `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: pkg.dependencies,
    }),
  ],
});
