'use strict';

let gulp = require('gulp');
let config = require('../config');
let $ = require('gulp-load-plugins')();

gulp.task('typescript', () => {
    let project = $.typescript.createProject(`${config.app.src}/tsconfig.json`);

    return project.src()
                .pipe($.typescript(project)).js
                .pipe(gulp.dest('build/js'));
});