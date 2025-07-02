const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (env, argv) => {
  const isProd = argv.mode === "production";

  return {
    mode: isProd ? "production" : "development",
    entry: "./src/index.js",
    output: {
      filename: "main.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
    devtool: isProd ? false : "eval-source-map",
    devServer: {
      static: "./dist",
      watchFiles: ["./src/template.html"],
      open: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/template.html",
      }),
      ...(isProd ? [new MiniCssExtractPlugin({ filename: "main.css" })] : []),
    ],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            isProd ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
  };
};
