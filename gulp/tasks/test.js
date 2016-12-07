'use strict';

let gulp = require('gulp');
let config = require('../config');
let Server = require('karma').Server;

gulp.task('test', (done) => {
    new Server({
        configFile: __dirname + '/../../karma.conf.js',
        singleRun: true
    } , done).start();
});

gulp.task('tdd', (done) => {
    new Server({
        configFile: __dirname + '/../../karma.conf.js',
    } , done).start();
});