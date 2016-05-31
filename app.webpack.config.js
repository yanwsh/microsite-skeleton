/**
 * Created by yanwsh on 5/15/16.
 */
var path = require("path");

module.exports = {
    entry: {
        polyfills: ['./src/polyfills.ts', 'jquery', 'tether', './bower_components/bootstrap/dist/js/bootstrap'],
        app: './src/main.ts'
    },
    output: {
        path: path.join(__dirname, "public/js"),
        filename: "[name].bundle.js"
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