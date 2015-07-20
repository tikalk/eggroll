var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer')
var source = require('vinyl-source-stream');
var debowerify = require('debowerify');
var ngAnnotate = require('browserify-ngannotate');

// var browserifyShim = require('browserify-shim');
var options = {
  entries: [
    'src/client/app/index.js'
  ],
  debug: true,
  transform: [
    // debowerify,
    ngAnnotate
  ]
};
var bundler = {};

module.exports = gulp.task('browserify', function () {
  bundler = browserify(options);
  return rebundle(bundler);
});

module.exports = gulp.task('browserify:dev', function () {
  bundler = browserify(options);
  var watcher = watchify(bundler);
  watcher.on('update', rebundle);
  return rebundle(watcher);
  
});

function rebundle () {
  return bundler.bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('.tmp'));
};
