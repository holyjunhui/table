const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    pages: {
        index: {
            entry: "src/main.js",
            template: "public/index.html",
            filename: "index.html"
        }
    },
    configureWebpack: config => {
        if (process.env.NODE_ENV === "production") {
            config.plugins.push(new UglifyJsPlugin());
        }
    },

    chainWebpack(config) {
        config.plugins.delete("preload-index");
        config.plugins.delete("prefetch-index");
    },

    devServer: {
        open: "true",
        proxy: {
            "/v1": {
                target: "http://10.145.79.28:8080/api", // 这里后台的地址
                ws: false,
                changOrigin: true, // 允许跨域
                pathRewrite: {
                    "^/v1": "" // 请求的时候使用这个api就可以
                }
            }
        }
    }
};
