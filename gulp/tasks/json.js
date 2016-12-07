'use strict';

let gulp = require('gulp');
let config = require('../config');

gulp.task('json', ['clean:json'],  () => {
    return gulp.src(config.json.src)
        .pipe(gulp.dest(config.json.dist));
});