

var gulp = require('gulp');
var config = require('../config');
var siteConfig = require('../../siteconfig');
var contentIncluder = require('gulp-content-includer');
var connect = require('gulp-connect');
var replace=require('gulp-replace');

var devSiteConfig=siteConfig.devSiteConfigs;
var opsSiteConfig=siteConfig.opsSiteConfigs;

var htmlPath=config.srchtml+"/*.html";
var distHtmlPath=config.disthtml;


//deepConcat: true 递归引用
gulp.task('htmlinclude',['cleanhtml'],function() {
    gulp.src(htmlPath)
        .pipe(contentIncluder({
            includerReg: /<!\-\-include\s+"([^"]+)"\-\->/g,
            deepConcat: true
        }))
        .pipe(replace(devSiteConfig.sitePath.oldString,devSiteConfig.sitePath.newString))
        .pipe(gulp.dest(distHtmlPath))
        .pipe(connect.reload());
});

gulp.task('htmlincludeops',['cleanhtml'],function() {
    gulp.src(htmlPath)
        .pipe(contentIncluder({
            includerReg: /<!\-\-include\s+"([^"]+)"\-\->/g,
            deepConcat: true
        }))
        .pipe(replace(opsSiteConfig.sitePath.oldString,opsSiteConfig.sitePath.newString))
        .pipe(gulp.dest(distHtmlPath))
        .pipe(connect.reload());
});