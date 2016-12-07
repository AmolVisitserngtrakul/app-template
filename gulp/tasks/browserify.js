'use strict';

let gulp = require('gulp');
let config = require('../config');
let $ = require('gulp-load-plugins')();
let browserify = require('browserify');
let source = require('vinyl-source-stream');
let tsify = require('tsify');
let ngAnnotate = require('browserify-ngannotate');

gulp.task('browserify', () => {
    let bundler =  browserify({
                        insertGlobals : true,
                        debug: true,
                        extensions: ['.ts']
                    })
                    .plugin(tsify, { typescript: require('typescript') })
                    .transform(ngAnnotate, {add: true, remove: true, singleQuotes: true})
                    .add(`${config.app.src}/${config.app.main}`);

    return bundler.bundle()
                .on('error', $.notify.onError((error) => {
                    gulp.emit('end');
                    return error.toString();
                }))
                .pipe(source(config.app.bundle))
                .pipe(gulp.dest(config.app.build));
});