
var gulp = require('gulp');
var config = require('../config');

var asset = {
    js: config.srcjs+'/**/*.js',
    less: config.srcless+'/**/*.less',
    css: config.srcless+'/**/*.css',
    html:config.srchtml+'/**/*.html',
    image:config.srcimages+'/**/*.*',
    image:config.srcvendor+'/**/*.*',
};

gulp.task('watch',['lessmin','jsmin','htmlinclude','imagescopy','vendorcopy'],function() {
    gulp.watch(asset.html, ['htmlinclude']);
    gulp.watch(asset.js, ['jsmin']);
    gulp.watch(asset.less, ['lessmin']);
    gulp.watch(asset.css, ['lessmin']);
    gulp.watch(asset.image, ['imagescopy']);
    gulp.watch(asset.image, ['vendorcopy']);
});