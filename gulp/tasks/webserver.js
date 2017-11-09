
var gulp = require('gulp'),
    connect = require('gulp-connect'),
    config=require('../config');

var rootDirectory = config.dist;

gulp.task('webserver',['watch'],function() {
    connect.server({
        root:rootDirectory,
        port:4002,
        debug:true,
        livereload:true
    });
});

gulp.task('webserverops',function() {
    connect.server({
        root:rootDirectory,
        port:4002,
        debug:true,
        livereload:true
    });
});