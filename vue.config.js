const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
module.exports = {
    publicPath: "/",

    configureWebpack: config => {
        if (process.env.NODE_ENV === "production") {
            config.plugins.push(new UglifyJsPlugin());
        }
    },

    chainWebpack(config) {
        config.plugins.delete("preload-index");
        config.plugins.delete("prefetch-index");
    }
};
