const path = require("path")

module.exports = {
  source: "src",
  output: "lib",
  targets: [
    [
      "commonjs",
      {
        configFile: path.resolve(__dirname, "./babel.config.web"),
      },
    ],
    "module",
    "typescript",
  ],
}
