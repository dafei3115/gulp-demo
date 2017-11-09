

var gulp = require('gulp');
var clean = require('gulp-clean');
var config = require('../config');

//清理所有
gulp.task("cleanall", function(){
    return gulp.src(config.dist)
        .pipe(clean());
})

//清理css
gulp.task("cleancss", function(){
    return gulp.src(config.distcss)
        .pipe(clean());
})

//清理js
gulp.task("cleanjs", function(){
    return gulp.src(config.distjs)
        .pipe(clean());
})


//清理html
gulp.task("cleanhtml", function(){
    return gulp.src(config.disthtml)
        .pipe(clean());
})

//清理images
gulp.task("cleanimages", function(){
    return gulp.src(config.distimages)
        .pipe(clean());
})

//清理vendor
gulp.task("cleanvendor", function(){
    return gulp.src(config.distvendor)
        .pipe(clean());
})
