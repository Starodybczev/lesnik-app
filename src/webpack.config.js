const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: ["core-js/stable", "regenerator-runtime/runtime", "./src/index.jsx"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js"
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new HTMLWebpackPlugin({template: "./src/index.html"}),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|svg)/,
                use: ['file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: {
                    loader:"babel-loader",
                    options: {
                        presets:["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: {
                    loader:"babel-loader",
                    options: {
                        presets:["@babel/preset-react", "@babel/preset-env"]
                    }
                }
            }

        ]
    }
}
