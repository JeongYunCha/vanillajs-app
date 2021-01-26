const path = require("path");
// const appIndex = path.resolve(__dirname, "src", "index.tsx");
// const appBuild = path.resolve(__dirname, "build");

// module.exports = (webpackEnv) => {
//   const isEnvDevelopment = webpackEnv === "development";
//   const isEnvProduction = webpackEnv === "production";

//   return {
//     mode: webpackEnv,
//     entry: appIndex,
//     output: {
//       path: appBuild,
//       filename: isEnvProduction
//         ? "static/js/[name].[contenthash:8].js"
//         : isEnvDevelopment && "static/js/bundle.js",
//     },
//     module: {
//       rules: [
//         {
//           test: /\.(ts|tsx)$/,
//           exclude: /node_modules/,
//           use: [
//             {
//               loader: "ts-loader",
//               options: {
//                 transpileOnly: isEnvDevelopment ? true : false,
//               },
//             },
//           ],
//         },
//         {
//           loader: "file-loader",
//           exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
//           options: {
//             outputPath: "static/media",
//             name: "[name].[hash:8].[ext]",
//             esModule: false,
//           },
//         },
//       ],
//     },
//   };
// };

module.exports = {
  mode: "development",
  entry: ["./src/index.ts"],
  output: {
    filename: "bundle.js",
    path: __dirname + "/public",
  },
  devtool: "inline-source-map",
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, "public"),
    compress: true,
    watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ["ts-loader"],
        exclude: ["/node_modules"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "assets/",
          // esModule: false,
        },
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
};
