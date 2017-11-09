
var gulp = require('gulp'),
    less = require('gulp-less'),
    concat=require('gulp-concat'),
    config = require('../config'),
    rename=require('gulp-rename'),
    livereload = require('gulp-livereload'),
    csso=require('gulp-csso');
var connect = require('gulp-connect');
var siteConfig = require('../../siteconfig');
var replace=require('gulp-replace');


var devSiteConfig=siteConfig.devSiteConfigs;
var opsSiteConfig=siteConfig.opsSiteConfigs;
var stylename="main.css";
var srcLessPath=config.srcless+"/main.less";

gulp.task('lessmin',['cleancss'],function(){
    return gulp.src(srcLessPath)
        .pipe(less())
        .pipe(concat(stylename))
        .pipe(replace(devSiteConfig.sitePath.oldString,devSiteConfig.sitePath.newString))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.distcss))
        .pipe(connect.reload());
});

gulp.task('lessminops',['cleancss'],function(){
    return gulp.src(srcLessPath)
        .pipe(less())
        .pipe(concat(stylename))
        .pipe(replace(opsSiteConfig.sitePath.oldString,opsSiteConfig.sitePath.newString))
        .pipe(csso())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.distcss))
});