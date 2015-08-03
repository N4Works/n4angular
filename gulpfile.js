"use strict";

var gulp = require('gulp');
var uglify = require('gulp-uglify');
var coveralls = require('gulp-coveralls');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var karma = require('karma').server;

var _coverage = 'coverage/**/lcov.info';
var _scripts = 'src/**/*.js';
var _bowerScripts = 'bower_components/n4-*/dist/*.min.js';
var _styles = 'src/**/*.css';
var _bowerStyles = 'bower_components/n4-*/dist/*.min.css';
var _script = 'n4Angular.min.js';
var _style = 'n4Angular.min.css';
var _dist = 'dist';

gulp.task('build-css', function () {
  return gulp.src([
    _styles,
    _bowerStyles
  ])
    .pipe(concat(_style.toLowerCase()))
    .pipe(cssmin())
    .pipe(gulp.dest(_dist));
})

gulp.task('build', ['unit_test', 'build-css'], function () {
  return gulp.src([
    _bowerScripts,
    _scripts
  ])
    .pipe(concat(_script.toLowerCase()))
    .pipe(uglify())
    .pipe(gulp.dest(_dist));
})

gulp.task('unit_test', function (done) {
  var _opts = {
    configFile: __dirname + '/karma.conf.js',
    singleRun: true,
    browsers: ['PhantomJS']
  };

  karma.start(_opts, done);
})

gulp.task('coverage', ['unit_test'], function () {
  gulp
    .src(_coverage)
    .pipe(coveralls());
})
