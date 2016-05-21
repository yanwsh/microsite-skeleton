/**
 * Created by yanwsh on 5/15/16.
 */
module.exports = {
    entry: {
        polyfills: './src/polyfills.ts',
        vendor: ['./src/vendor.ts'],
        app: './src/main.ts'
    },
    output: {
        path: __dirname + "/public/js",
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