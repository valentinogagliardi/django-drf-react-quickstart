const path = require("path");

module.exports = {
  entry: ["./project/frontend/src/js/index.js"],
  output: {
    path: path.resolve(__dirname, "./project/frontend/static/frontend"),
    filename: "main.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
