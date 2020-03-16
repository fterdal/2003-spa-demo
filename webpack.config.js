module.exports = {
  mode: "development",
  entry: "./client/main.js",
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  }
}
