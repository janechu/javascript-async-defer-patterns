const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        index: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    ],
    devServer: {
        open: true,
        port: 9000,
    },
    mode: "production",
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendors: {
                    filename: "[name].bundle.js",
                    // Note the usage of `[\\/]` as a path separator for cross-platform compatibility.
                    test: /[\\/]node_modules[\\/]/,
                    name(module, chunks, cacheGroupKey) {
                        return cacheGroupKey;
                    },
                },
            },
        }
    }
}