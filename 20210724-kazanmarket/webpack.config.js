const path = require("path");

module.exports = {
  entry: "./src/js/script.js",
  output: {
    path: path.resolve(__dirname, "./build/js"),
    filename: "script.js",
  },
  mode: "development",
  devtool: "source-map",
  experiments: {
    topLevelAwait: true,
  },
};