/* eslint-disable unused-imports/no-unused-imports */
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import type { Configuration } from "webpack";
//@ts-expect import needed for "devServer" key showing type error
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import webpackDevServer from "webpack-dev-server";

const webpackConfig: Configuration = {
  mode: "development",
  entry: path.resolve("/src/index.tsx"),
  output: {
    path: path.resolve("dist"),
    publicPath: path.resolve("dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              ["@babel/preset-react", { runtime: "automatic" }],
              "@babel/preset-typescript",
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devServer: {
    static: path.resolve("dist"),
    compress: true,
    port: 3000,
    liveReload: true,
  },
};

export default webpackConfig;
