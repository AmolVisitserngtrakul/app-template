'use strict';

let gulp = require('gulp');
let config = require('../config');
let del = require('del');

gulp.task('clean:build', (done) => del(config.app.build, done));

gulp.task('clean:fonts', (done) => del(config.fonts.dist, done));

gulp.task('clean:images', (done) => del(config.images.dist, done));

gulp.task('clean:json', (done) => del(config.json.dist, done));