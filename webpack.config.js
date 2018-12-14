const path = require("path");
const webpack = require("webpack");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInclueAssetsPlugin = require("html-webpack-include-assets-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

//配置多入口
const pages = [
  {
    name: "counter"
  },
  {
    name: "realWorld"
  }
];

const entry = pages.reduce((prevObj, { name }) => {
  return Object.assign({}, prevObj, {
    [name]: path.resolve(__dirname, `src/entry/${name}`)
  });
}, {});

const htmlWebpackPlugins = pages.map(({ name }) => {
  return new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "public", "index.html"),
    filename: path.resolve(__dirname, `dist/${name}.html`)
  });
});

const htmlWebpackInclueAssetsPlugins = pages.map(({ name }) => {
  return new HtmlWebpackInclueAssetsPlugin({
    assets: ["dll/vendors.dll.js"],
    files: `${name}.html`,
    append: false,
    hash: true
  });
}, {});

module.exports = {
  entry: entry,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].bundle.js",
    library: "[name]_[hash:8]"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.(t s|tsx)$/,
        loader: "ts-loader"
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist'],{
      root: path.resolve(__dirname),
      exclude: ['dll'],
      verbose: true,
      dry: false
    }),
    ...htmlWebpackPlugins,
    ...htmlWebpackInclueAssetsPlugins,
    new ProgressBarPlugin(),
    new webpack.DllReferencePlugin({
      context: path.resolve(__dirname, "dist/dll"),
      manifest: require("./dist/dll/vendors.manifest.json")
    }),
    new webpack.HotModuleReplacementPlugin()
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, "public", "index.html"),
    // }),
    // new HtmlWebpackInclueAssetsPlugin({
    //   assets: ["dll/vendors.dll.js"],
    //   files: ["index.html"],
    //   append: false,
    //   hash: true
    // })
  ],
  devServer: {
    // contentBase: path.join(__dirname, "dist"),
    // compress: true,
    port: 4399,
    open: "chrome",
    hot: true
  }
};
