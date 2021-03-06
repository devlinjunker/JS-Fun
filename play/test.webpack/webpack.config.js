const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FlowWebpackPlugin = require('flow-webpack-plugin')

module.exports = {
  mode: 'development',
  // Each entry will be loaded into webpage via <script> tags
  entry: {
      app: "./src/app/app.js",
      other: "./src/other.js",
  },
  output: {
    filename: "[name].bundle.js",
    // Need to do this because path must be absolute
    path: path.resolve(__dirname, "public")
  },
  // Turn off for production (see https://webpack.js.org/guides/production)
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./public"
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules'],
    alias: {
      App: path.resolve(__dirname,'src/app'),
      Images: path.resolve(__dirname, "src/img")
    }
  },
  plugins: [
    new CleanWebpackPlugin(["public"]),

    new HtmlWebpackPlugin({
      template: "src/index.html",
      // Set the webpage title
      title:"Test with Webpack Plugin"
    }),

    // Run Flow on Webpack Compile
    new FlowWebpackPlugin({
      failOnError: false,
      failOnErrorWatch: false,
      reportingSeverity: 'error'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [{
          // Use Babel to get ES6 syntax
          loader: 'babel-loader'
        }, {
          loader: "eslint-loader"
        }]
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
