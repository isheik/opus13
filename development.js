import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";

const src = path.resolve(__dirname, "src");
const dist = path.resolve(__dirname, "dist");

export default {
    entry: src + "/index.js",

    output: {
        path: dist,
        filename: "bundle.js"
    },

    devServer: {
        contentBase: "./dist",
        hot: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },

    resolve: {
        extensions: ["*", ".js"]
    },

    node: {
        fs: "empty"
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: src + "/index.html",
            filename: "index.html"
        }),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};

