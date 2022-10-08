const path = require("path");
const NodemonPlugin = require('nodemon-webpack-plugin');
const webpack = require("webpack");

const {
    NODE_ENV = "production"
} = process.env;

module.exports = {
    entry: "./src/index.ts",
    mode: NODE_ENV,
    target: "node",
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "gsrp-be.js"
    },
    resolve: {
        extensions: [".ts", ".js", ".node"],
        modules: ['node_modules']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    "ts-loader"
                ]
            }
        ]
    },
    plugins: [
        new NodemonPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin()
    ],
    watch: NODE_ENV === 'development',
    stats: {
        errorDetails: true
    }
}