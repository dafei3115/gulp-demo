

var gulp = require('gulp');
var config = require('../config');
var connect = require('gulp-connect');

var imagespath=config.srcimages+'/**/*.*';

gulp.task('imagescopy',['cleanimages'],function() {
    gulp.src(imagespath)
        .pipe(gulp.dest(config.distimages))
        .pipe(connect.reload());
});