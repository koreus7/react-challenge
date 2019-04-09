const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    //entry: "./index.js",
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/, 
        loaders: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  resolve: {
    modules: [
      'node_modules'
    ]
  }
};