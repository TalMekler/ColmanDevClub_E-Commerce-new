const path = require("path");

module.exports = {
  mode: " development",
  entry: {
    bundle: path.resolve(__dirname, "/scripts/main.js")
  },
  output: {
    path: path.resolve(__dirname, "assets"),
    filename: "[name].js",
  },
};
