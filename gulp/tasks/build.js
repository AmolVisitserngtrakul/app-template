'use strict';

let gulp = require('gulp');
let config = require('../config');
let $ = require('gulp-load-plugins')();
let gutil = require('gulp-util');
var argv = require('yargs').argv;
var runSequence = require('run-sequence');
var replace = require('gulp-replace');

gulp.task('build', ['clean:build', 'sass', 'fonts', 'images', 'json'], (done) => {
    done = done || function (argument) {};
    runSequence('replaceIndexEnv', 'build:index', done);
});

gulp.task('build:index', ['browserify', 'html'], () => {
    return gulp.src(`${config.app.build}/**/*.js`)
        .pipe($.sourcemaps.init({ loadMaps: true }))
        .pipe($.concat('index.js'))
        .pipe($.if(config.production, $.uglify().on('error', gutil.log)))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(config.app.dist));
});

gulp.task('replaceIndexEnv', () => {
    return gulp.src(config.envUrlReplacePath.index.src)
        .pipe(replace(config.envUrlReplacePath.index.keyword, config.jsPath))
        .pipe(gulp.dest(config.app.dir));
});