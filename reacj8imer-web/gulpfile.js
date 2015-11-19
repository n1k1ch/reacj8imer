'use strict';

var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');


gulp.task("build-jsx", function(){
    return browserify({entries: 'src/app.jsx', extensions: ['.jsx'], debug: true})
        .transform('babelify', {presets: ['react']})
        .bundle()
        .pipe(source('bundle-jsx.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('build-js', function(){
    return browserify({entries: 'src/app.js', extensions: ['.js'], debug: true})
        .transform('babelify', {presets: ['es2015']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist'))
        ;
});


gulp.task("watch", function(){
    gulp.watch('src/*.jsx', ['build-jsx']);
    gulp.watch('src/*.js', ['build-js']);
});

gulp.task('default', ['watch']);