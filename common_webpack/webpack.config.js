const path = require('path');
 const {CleanWebpackPlugin} = require('clean-webpack-plugin')
 const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
     context: path.resolve(__dirname, "src"),
    mode: "development",
    entry:{
        main: "./index.js",
        analytics: "./analytics.js",
    } ,
    devServer: {
        port: 3000
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist"),
    },
    plugins:[
        new HTMLWebpackPlugin({template: './index.html'}),
        new CleanWebpackPlugin()
    ],
    module:{
         rules: [
             {
                 test: /\.css$/,
                 use: ["style-loader", "css-loader"]
             },
             {
                 test: /\.(jpg|jpeg|png)/,
                 dependency: { not: ['url'] },
                 use: "file-loader"
             },
         ]
    }
}