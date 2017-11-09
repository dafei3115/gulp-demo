

var fs = require('fs');
var merge = require('merge-stream');
var path = require('path');
var gulp = require('gulp'),
    concat=require('gulp-concat'),
    config = require('../config'),
    rename=require('gulp-rename'),
    uglify=require('gulp-uglify');
var connect = require('gulp-connect');

var srcJSPath = config.srcjs;
var distJSPath =config.distjs;

//遍历文件夹
function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(function(file) {
            return fs.statSync(path.join(dir, file)).isDirectory();
        });
}

gulp.task('jsmin',['cleanjs'],function() {
    var folders = getFolders(srcJSPath);

    var tasks = folders.map(function(folder) {
        // 拼接成 foldername.js
        // 写入输出
        // 压缩
        // 重命名为 folder.min.js
        // 再一次写入输出
        return gulp.src([srcJSPath+'/common/*.js',path.join(srcJSPath, folder, '/*.js')])
            .pipe(concat(folder + '.js'))
            .pipe(gulp.dest(srcJSPath))
            .pipe(rename(folder + '.min.js'))
            .pipe(gulp.dest(distJSPath))
            .pipe(connect.reload());
    });

    return merge(tasks);
});

gulp.task('jsminops',['cleanjs'],function() {
    var folders = getFolders(srcJSPath);

    var tasks = folders.map(function(folder) {
        // 拼接成 foldername.js
        // 写入输出
        // 压缩
        // 重命名为 folder.min.js
        // 再一次写入输出
        return gulp.src([srcJSPath+'/common/*.js',path.join(srcJSPath, folder, '/*.js')])
            .pipe(concat(folder + '.js'))
            .pipe(gulp.dest(srcJSPath))
            .pipe(uglify())
            .pipe(rename(folder + '.min.js'))
            .pipe(gulp.dest(distJSPath));
    });

    return merge(tasks);
});