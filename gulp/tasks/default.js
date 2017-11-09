
var gulp = require('gulp');

//默认
//gulp.task('default',['watch','webserver']);

//开发
gulp.task('dev',['webserver']);

//发布
gulp.task('ops',['lessminops','jsminops','htmlincludeops','imagescopy','vendorcopy','webserverops']);