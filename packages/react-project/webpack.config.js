const path = require("path");

module.exports = () => {
  return {
    entry: "./index.js",
    mode: "production",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "index.js",
      libraryTarget: "umd",
      library: "common",
      globalObject: "this",
      publicPath: "",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.png$/,
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
          },
        },
      ],
    },
    externals: {
      react: "react",
    },
  };
};
