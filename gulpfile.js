'use strict';

var gulp = require('gulp');
var rimraf = require('rimraf')
var gutil = require('gulp-util');
var run = require('gulp-run')
var concat = require('gulp-concat')
var addsrc = require('gulp-add-src');

gulp.task('default', ['build', 'watch'])

gulp.task('watch', function() {
	gulp.watch('source/**/*', ['build']);
});

gulp.task('build', ['clean'], function(){
	gulp.src('source/module.js')
    .pipe(addsrc('source/**/*.js'))
		.pipe(concat("bundle.js"))
		.pipe(addsrc("source/**/*.html"))
    .pipe(addsrc("source/**/*.css"))
		.pipe(gulp.dest('public'))
	gulp.src('assets/**/*')
		.pipe(gulp.dest('public/assets'))
		.on('error', gutil.log)
})

gulp.task('clean', function(cb) {
	rimraf('public', cb);
})
gulp.task('bower', function(cb) {
	gulp.src('assets')
	.pipe(gulp.dest('public'))
})
