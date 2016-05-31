/**
 * Created by yanwsh on 5/15/16.
 */
var async = require('async');
var gulp = require('gulp');
var fs   = require('fs');
var path = require('path');
var gutil = require("gulp-util");
var streamqueue = require('streamqueue');
var connect = require('gulp-connect-php');
var browserSync = require('browser-sync');
var stream = browserSync.stream;
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var inlineSvg = require('gulp-inline-svg');
var svgmin = require('gulp-svgmin');
var concat = require('gulp-concat');
//var prerender = require('angular2-gulp-prerender');
var webpack = require('webpack');
var webpackVendorConfig = require("./vendor.webpack.config.js");
var webpackAppConfig = require("./app.webpack.config.js");
var globalConfig = JSON.parse(fs.readFileSync('./.env'));
var runTimestamp = Math.round(Date.now()/1000);
const ENV = process.env.NODE_ENV = process.env.ENV = globalConfig.env;

gulp.task('browser-sync', function() {
    connect.server({base: 'public'}, function (){
        browserSync({
            files: ["src/**/*.twig"],
            proxy: '127.0.0.1:8000'
        });
    });
});

gulp.task('watch', ['Iconfont', 'webpack:build:vendor', 'webpack:build:app', 'css', 'browser-sync'], function () {
    //gulp.watch(['./src/**/*.ts'], ['webpack:build']);
    gulp.start('webpack:build:app:watch');
    gulp.watch('./src/**/*.scss', ['css']).on('change', function () {
        browserSync.reload();
    });
    gulp.watch('./assets/icons/**/*.svg', ['Iconfont']);
    gulp.watch(['./src/**/*.php', 'public/**/*.php']).on('change', function () {
        browserSync.reload();
    });
});

gulp.task('default', ['browser-sync']);

gulp.task('build', ['Iconfont', 'webpack:build:vendor', 'webpack:build:app', 'css']);

function webpackBuilder(config, taskname, callback){
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
        if(err) throw new gutil.PluginError(taskname, err);
        gutil.log(taskname, stats.toString({
            colors: true
        }));
        browserSync.reload();
        if(!config.watch){
            callback();
        }
    });
}

gulp.task('webpack:build:vendor', function(callback){
    var config = Object.create(webpackVendorConfig);
    config.plugins = [
        new webpack.DllPlugin({
            path: path.join(__dirname, "public/js", "[name]-manifest.json"),
            name: "[name]"
        })
    ];

    webpackBuilder(config, "webpack:build:vendor", callback);
});

function applicationWebpackBuild(isWatch, callback){
    // modify some webpack config options
    var config = Object.create(webpackAppConfig);
    config.plugins = [
        new webpack.DefinePlugin({
            "process.env": {
                "ENV": JSON.stringify(ENV)
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'polyfills']
        }),
        new webpack.DllReferencePlugin({
            context: path.join(__dirname, "."),
            manifest: require("./public/js/vendor-manifest.json")
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Tether: "tether",
            "window.Tether": "tether"
        })
    ];
    if(isWatch){
        config.watch = true;
    }
    webpackBuilder(config, "webpack:build:app", callback);
}

gulp.task('webpack:build:app', function(callback) {
    applicationWebpackBuild(false, callback);
});

gulp.task('webpack:build:app:watch', function(callback) {
    applicationWebpackBuild(true, callback);
});

gulp.task('css', function(){
   gulp.src("./src/main.scss")
       .pipe(sass({errLogToConsole: true}))
       .pipe(autoprefixer())
       .pipe(gulp.dest('./public/css'))
       .pipe(cleanCSS({
           keepSpecialComments: 1
       }))
       .pipe(rename({
            suffix: '.min'
        }))
       .pipe(gulp.dest('./public/css'))
       .pipe(stream());
});

gulp.task('Iconfont', function(done){
    var font_name = "skeleton-icon";
    var iconStream = gulp.src(['./assets/fonts/**/*.svg'])
        .pipe(svgmin())
        .pipe(iconfont({
            fontName: font_name, // required
            prependUnicode: true, // recommended option
            formats: ['ttf', 'eot', 'woff', 'woff2', 'svg'], // default, 'woff2' and 'svg' are available
            timestamp: runTimestamp, // recommended to get consistent builds when watching files
        }));

    async.parallel([
        function handleGlyphs (cb) {
            iconStream.on('glyphs', function(glyphs, options) {
                streamqueue({objectMode: true},
                    gulp.src('./assets/fonts.template.mustache')
                        .pipe(consolidate('lodash', {
                            glyphs: glyphs,
                            fontName: font_name,
                            fontPath: '/fonts/',
                            cssClass: 'skeleton-icon'
                        })),
                    gulp.src('./assets/icons/**/*.svg')
                        .pipe(svgmin())
                        .pipe(inlineSvg({
                            template: './assets/icons.template.mustache'
                        }))
                )
                .pipe(concat('microsite-icon.css'))
                .pipe(gulp.dest('public/css'))
                .pipe(cleanCSS({
                    keepSpecialComments: 1
                }))
                .pipe(rename({
                    suffix: '.min'
                }))
                .pipe(gulp.dest('./public/css'))
                .pipe(stream())
                .on('finish', cb);
            });
        },
        function handleFonts (cb) {
            iconStream
                .pipe(gulp.dest('public/fonts/'))
                .on('finish', cb);
        }
    ], function(){
        browserSync.reload();
        done();
    });
});