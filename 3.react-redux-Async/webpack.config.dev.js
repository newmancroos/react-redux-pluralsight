const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

process.env.NODE_ENV = "development"; //importent for babel plugin to knows we running in development mode

module.exports = {
  mode: "development", //Node environment and disable some production feature
  target: "web", // we can use this as Node if we building app running on Node
  devtool: "cheap-module-source-map", //There are many tool for Dev tool but source-map is the one Chrome uses as dev tool for debug
  entry: "./src/index",
  output: {
    //normally webpack put output in memory so ew need to define the output to a folder
    path: path.resolve(__dirname, "build"),
    publicPath: "/", //Specify this a root url when we use it in the browser
    filename: "bundle.js"
  },
  devServer: {
    stats: "minimal", //minimize the information writes in the command line when compile and run
    overlay: true, //Tell overlay any error occure in the browser
    historyApiFallback: true, //help to router to handler history and deep links
    disableHostCheck: true,
    headers: { "Access-Control-Allow-Origin": "*" },
    https: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
      //   favicon: "scr/favicon.ico"
    })
  ],
  module: {
    rules: [
      {
        //This is for Js and Jsx
        test: /\.(js|jsx)$/, //Compile all the file has extension js and jsx
        exclude: /node_modules/, // Exclude all the file in the node_module
        use: ["babel-loader", "eslint-loader"] //Compile Jsx file using babel-loader. Its conver modern javascript to normal javascript so all the brwoders understands it.
      }, //ESLint anf its setting in the package.json file helps compiler to correctly throw the debug errors.
      {
        test: /(\.css)$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};

//Added Babel preset in package.json to tell babel to compile all Jsx like Spread,
// Class properties and dynamic imports and more to run in today's browser
//ESLint help us to easily identify any problem in react code.ESLint is popular to lint javascript
