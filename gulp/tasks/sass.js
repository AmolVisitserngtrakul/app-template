'use strict';

let gulp = require('gulp');
let config = require('../config');
let $ = require('gulp-load-plugins')();

gulp.task('sass', () => {
    return gulp.src(`${config.css.src}/main.scss`)
        .pipe($.sourcemaps.init())
            .pipe($.sass().on('error', $.sass.logError))
            .on('error', $.notify.onError((error) => {
                gulp.emit('end');
                return error.toString()
            }))
            .pipe($.concat(config.css.output))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(config.css.dist));
});