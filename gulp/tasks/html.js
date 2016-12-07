'use strict';

let gulp = require('gulp');
let config = require('../config');
let $ = require('gulp-load-plugins')();

gulp.task('html', () => {
    gulp.src(`${config.app.src}/**/*.html`)
        .pipe($.sourcemaps.init({ loadMaps: true }))
            .pipe($.angularTemplatecache('templates.js', {
                standalone: true
            }))
        .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest(config.app.build));
});