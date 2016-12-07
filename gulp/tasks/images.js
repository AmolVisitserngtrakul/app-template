'use strict';

let gulp = require('gulp');
let config = require('../config');
let $ = require('gulp-load-plugins')();

gulp.task('images', ['clean:images'], () => {
    return gulp.src(config.images.src)
        .pipe(gulp.dest(config.images.dist));
});