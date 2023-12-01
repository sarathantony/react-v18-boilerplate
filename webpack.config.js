const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    // Entry point that indicates where
    // should the webpack starts bundling
    entry: "./src/index.js",
    mode: "development",
    module: {
        rules: [
        {
            test: /\.(js|jsx)$/, // checks for .js or .jsx files
            exclude: /node_modules/,
            loader: "babel-loader",
            options: { presets: ["@babel/env"] },
        },
        {
            test: /\.css$/, //checks for .css files
            use: ["style-loader", "css-loader"],
        },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ],

    // Options for resolving module requests
    // extensions that are used
    // resolve: { extensions: [".*", ".js", ".jsx"] },

    // Output point is where webpack should
    // output the bundles and assets
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "bundle.js",
    },
}
