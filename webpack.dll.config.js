const path = require("path");
const webpack = require("webpack");

const vendors = ["react", "react-dom"];

const config = {
  entry: {
    vendors
  },
  output: {
    path: path.resolve(__dirname, "dist/dll"),
    filename: "[name].dll.js",
    library: "[name]_[hash:8]"
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, "dist/dll", "[name].manifest.json"),
      name: "[name]_[hash:8]"
    })
  ]
};

module.exports = config;
