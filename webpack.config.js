const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/javascript/index.js"
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js" 
    },
    plugins:  [
        new HtmlWebpackPlugin({
            title: "Libreria || Progetto Start2impact",
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(css|s[ac]ss)$/i,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    devServer: {
        static: path.resolve(__dirname, "dist"),
        open: true
    },
    mode: "production"
}
