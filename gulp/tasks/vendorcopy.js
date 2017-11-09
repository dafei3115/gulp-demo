

var gulp = require('gulp');
var config = require('../config');
var connect = require('gulp-connect');

var vendorpath=config.srcvendor+'/**/*.*';

gulp.task('vendorcopy',['cleanvendor'],function() {
    gulp.src(vendorpath)
        .pipe(gulp.dest(config.distvendor))
        .pipe(connect.reload());
});