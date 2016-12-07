'use strict';

let gulp = require('gulp');
let config = require('../config');

gulp.task('fonts', ['clean:fonts'],  () => {
    return gulp.src(config.fonts.src)
        .pipe(gulp.dest(config.fonts.dist));
});