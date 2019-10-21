const path = require("path");

module.exports = {
  mode: 'development',
  entry: {
      swagger: "./docs/swagger/src/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    // Need to do this because path must be absolute
    path: path.resolve(__dirname, "docs/swagger/")
  },
  // Turn off for production (see https://webpack.js.org/guides/production)
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./docs"
  },
  resolve: {
    extensions: ['.js'],
    modules: ['node_modules'],
    alias: {
      'swagger-css': path.resolve(__dirname, 'node_modules/swagger-ui/dist/swagger-ui.css')
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: [{
          // Use Babel to get ES6 syntax
          loader: 'babel-loader'
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
