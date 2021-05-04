const { merge } = require("webpack-merge");
const webpackCommon = require("./webpack.common");
const ModuleFedorationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const pkg = require("../package.json");

module.exports = merge(webpackCommon, {
  mode: "development",
  devServer: {
    port: "3000",
    historyApiFallback: {
      index: "index.html",
    },
  },
  plugins: [
    new ModuleFedorationPlugin({
      name: "container",
      remotes: {
        marketing: "marketing@http://localhost:3001/remoteEntry.js",
      },

      shared: pkg.dependencies,
    }),
  ],
});
