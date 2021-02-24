const path = require("path")

module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "react-native-svg": "react-native-svg-web-transform",
        },
      },
    ],
    ["react-native-web", { commonjs: true }],
  ],
}
