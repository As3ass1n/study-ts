const path = require("path");
const webpack = require("webpack");
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInclueAssetsPlugin = require("html-webpack-include-assets-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const { getIfUtils, removeEmpty } = require("webpack-config-utils");

//配置多入口
const pages = [
  {
    name: "counter"
  },
  // {
  //   name: "realWorld"
  // },
  {
    name: "todo"
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
    filename: path.resolve(__dirname, `dist/${name}.html`),
    chunks: ["dll/vendors.dll.js", name], // 指定引入的js文件
    templateParameters: {
      vendor: "dll/vendors.dll.js"
    }
  });
});

// const htmlWebpackInclueAssetsPlugins = pages.map(({ name }) => {
//   return new HtmlWebpackInclueAssetsPlugin({
//     assets: ["dll/vendors.dll.js"],
//     files: `${name}.html`,
//     append: false,
//     hash: true
//   });
// });

module.exports = env => {
  console.log(env);
  const { ifWatch, ifNotWatch } = getIfUtils(env, ["watch", "prod"]);
  console.log(ifNotWatch("production", "development"));
  return {
    mode: ifNotWatch("production", "development"),
    entry,
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
          test: /\.(ts|tsx)$/,
          loader: "ts-loader"
        },
        {
          test: /\.less$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader"
            },
            {
              loader: "less-loader"
            }
          ]
        },
        { enforce: "pre", test: /\.js|tsx?$/, loader: "source-map-loader" }
      ]
    },
    plugins: removeEmpty([
      ifNotWatch(
        new CleanWebpackPlugin(["dist"], {
          root: path.resolve(__dirname),
          exclude: ["dll"],
          verbose: true,
          dry: false
        })
      ),
      ...htmlWebpackPlugins,
      // ...htmlWebpackInclueAssetsPlugins,
      new ProgressBarPlugin(),
      new webpack.DllReferencePlugin({
        manifest: require(path.resolve(
          __dirname,
          "./dist/dll/vendors.manifest.json"
        ))
      }),
      new webpack.HotModuleReplacementPlugin()
    ]),
    devServer: {
      contentBase: path.resolve(__dirname, "dist"),
      // compress: true,
      port: 4399,
      open: "chrome",
      hot: true
    }
  };
};
