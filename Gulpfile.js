/**
 * Created by yanwsh on 5/15/16.
 */
var gulp = require('gulp');
var fs   = require('fs');
var gutil = require("gulp-util");
var connect = require('gulp-connect-php');
var browserSync = require('browser-sync');
//var prerender = require('angular2-gulp-prerender');
var webpack = require('webpack');
var webpackConfig = require("./webpack.config.js");
var globalConfig = JSON.parse(fs.readFileSync('./.env'));
const ENV = process.env.NODE_ENV = process.env.ENV = globalConfig.env;

    gulp.task('browser-sync', function() {
    connect.server({base: 'public'}, function (){
        browserSync({
            files: ["src/**/*.twig"],
            proxy: '127.0.0.1:8000'
        });
    });
});



gulp.task('watch', ['webpack:build', 'browser-sync'], function () {
    gulp.watch(['./src/**/*.ts'], ['webpack:build']);
    gulp.watch(['./src/**/*.php', 'public/**/*.php']).on('change', function () {
        browserSync.reload();
    });
});

gulp.task('default', ['browser-sync']);

gulp.task('webpack:build', function(callback) {
    // modify some webpack config options
    var config = Object.create(webpackConfig);
    config.plugins = [
        new webpack.DefinePlugin({
            "process.env": {
                "ENV": JSON.stringify(ENV)
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Tether: "tether",
            "window.Tether": "tether"
        })
    ];
    if(globalConfig.env === "production"){
        config.output.filename = "[name].bundle.min.js";
        config.plugins.push(new webpack.optimize.DedupePlugin());
        config.plugins.push(new webpack.optimize.UglifyJsPlugin());
    }else{
        config.debug = true;
        config.devtool ="sourcemap";
    }

    // run webpack
    webpack(config, function(err, stats) {
        if(err) throw new gutil.PluginError("webpack:build", err);
        gutil.log("[webpack:build]", stats.toString({
            colors: true
        }));
        browserSync.reload();
        callback();
    });
});