const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
  return {
    mode: env.mode,
    output: {
      filename: "bundle.js",
    },
    plugins: [
      new HtmlWebpackPlugin(),
      new webpack.ProgressPlugin((percentage, message) => {
        console.log(`${(percentage * 100).toFixed()}% ${message}`);
      }),
    ],
  };
};
