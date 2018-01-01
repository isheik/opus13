import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const src = path.resolve(__dirname, "src");
const dist = path.resolve(__dirname, "dist");

export default {
    entry: src + "/index.js",

    output: {
        path: dist,
        filename: "bundle.js"
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
                use: ['style-loader', 'css-loader']
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
        })
    ]
};

