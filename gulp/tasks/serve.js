'use strict';

let gulp = require('gulp');
let config = require('../config');
let browserSync = require('browser-sync').create();

gulp.task('serve', ['build'], () => {
    browserSync.init({
        server: {
            baseDir: config.app.dir
        },
        open: false,
        port: 8080,
        ghostMode: false
    });

    gulp.watch(`${config.css.src}/**/*.scss`, ['sass']);
    gulp.watch(`${config.app.src}/**/*.ts`, ['build:dev']);
    gulp.watch(`${config.app.src}/**/*.html`, ['build:dev']);

    gulp.watch(`${config.css.dist}/**/*.css`, () => {
        gulp.src(`${config.css.dist}/**/*.css`)
            .pipe(browserSync.stream());
    });

    gulp.watch(`${config.app.dist}/**/*.js`, () => {
        gulp.src(`${config.app.dist}/**/*.js`)
            .pipe(browserSync.stream());
    });
});