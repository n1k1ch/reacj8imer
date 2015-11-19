'use strict';

var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');


gulp.task("build-js", function(){
    return browserify({entries: 'src/app.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'));
});