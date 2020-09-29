const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //Minify css and extract in separate folder
const webpackBundleAnalyzer = require("webpack-bundle-analyzer"); // report generator for our bundle

process.env.NODE_ENV = "production"; //importent for babel plugin to knows we running in development mode

module.exports = {
  mode: "production", //Node environment and disable some production feature
  target: "web", // we can use this as Node if we building app running on Node
  devtool: "source-map",
  entry: "./src/index",
  output: {
    //normally webpack put output in memory so ew need to define the output to a folder
    path: path.resolve(__dirname, "build"),
    publicPath: "/", //Specify this a root url when we use it in the browser
    filename: "bundle.js",
  },
  plugins: [
    new webpackBundleAnalyzer.BundleAnalyzerPlugin({ analyzerMode: "static" }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
      "process.env.API_URL": JSON.stringify("http://localhost:3001"),
    }),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/favicon.ico",
      minify: {
        //see https://github.com/kangax/html-minifier#options-quick-reference
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
  ],
  module: {
    rules: [
      {
        //This is for Js and Jsx
        test: /\.(js|jsx)$/, //Compile all the file has extension js and jsx
        exclude: /node_modules/, // Exclude all the file in the node_module
        use: ["babel-loader", "eslint-loader"], //Compile Jsx file using babel-loader. Its conver modern javascript to normal javascript so all the brwoders understands it.
      }, //ESLint anf its setting in the package.json file helps compiler to correctly throw the debug errors.
      {
        test: /(\.css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader:"css-loader",
            options:{
              sourceMap:true
            }
          },
          {
            loader: "postcss-loader",
            options:{
              plugins: () => [require("cssnano")],
              sourceMap: true
            }
          }
        ],
      },
    ],
  },
};

//Added Babel preset in package.json to tell babel to compile all Jsx like Spread,
// Class properties and dynamic imports and more to run in today's browser
//ESLint help us to easily identify any problem in react code.ESLint is popular to lint javascript
