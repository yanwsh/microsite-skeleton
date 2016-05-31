var path = require("path");

module.exports = {
    entry: {
        vendor: ['./src/vendor.ts']
    },
    output: {
        path: path.join(__dirname, "public/js"),
        filename: "[name].bundle.js",
        library: "[name]"
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    module: {
        loaders: [
            {
                test: /\.ts/, loaders: ['ts-loader'], exclude: /node_modules/
            }
        ]
    }
};