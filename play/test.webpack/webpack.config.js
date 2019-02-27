const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FlowWebpackPlugin = require('flow-webpack-plugin')

module.exports = {
  mode: 'development',
  // Each entry will be loaded into webpage via <script> tags
  entry:{
      app:"./src/app.js",
      other:"./src/other.js",
  },
  output:{
    filename: "[name].bundle.js",
    // Need to do this because path must be absolute
    path: path.resolve(__dirname, "public")
  },
  // Turn off for production (see https://webpack.js.org/guides/production)
  devtool:"inline-source-map",
  devServer:{
    contentBase: "./public"
  },
  plugins:[
    new FlowWebpackPlugin(),
    new CleanWebpackPlugin(["public"]),
    new HtmlWebpackPlugin({
      template: "src/index.html",
      // Set the webpage title
      title:"Test with Webpack Plugin"
    })
  ],
  module: {
    rules: [
      // Use Babel to get ES6 syntax
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // requires @babel/core and @babel/preset-env from npm
          options: {
            presets: ['@babel/preset-env', '@babel/flow']
          }
        }
      },

      // Load css files imported
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },

      // Load images imported
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ['file-loader']
      }
    ]
  }
}
