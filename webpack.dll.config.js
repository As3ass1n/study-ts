const path = require("path");
const webpack = require("webpack");

const vendors = [
  "react",
  "react-dom",
  "redux",
  "react-redux",
  "react-router-dom"
];

const config = {
  entry: {
    vendors
  },
  output: {
    path: path.resolve(__dirname, "dist/dll"),
    filename: "[name].dll.js",
    library: "vendors_lib"
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.resolve(__dirname, "dist/dll", "[name].manifest.json"),
      name: "vendors_lib"
    })
  ]
};

module.exports = config;
