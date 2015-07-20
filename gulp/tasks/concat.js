// TODOS:
// add browserify
// add ng-annotate

var gulp = require('gulp');
var concat = require('gulp-concat-sourcemap');
var del = require('del');
var inject = require('gulp-inject');
var rename = require('gulp-rename');
var useref = require('gulp-useref');
var replace = require('gulp-replace');
var git = require('git-rev');

var destDirectory = '.tmp/';
var concatFileName = 'bundle';

gulp.task('concat:js', [], function(){
  return gulp.src([
      '!./src/client/app/**/*spec*.js',
      '!./src/client/common/**/*spec*.js',
      './src/client/app/**/*.mdl.js',
      './src/client/common/**/*.mdl.js',
      './src/client/app/**/*.js',
      './src/client/common/**/*.js',
      './src/client/app/*.js',
      './src/client/app.js',
    ])
    .pipe(concat(concatFileName + '.js', {sourcesContent :true, prefix : 0}))
    .pipe(gulp.dest(destDirectory));  
});

gulp.task('concat:vendors', function () {
    var assets = useref.assets();
    return gulp.src('./src/client/index.html')
        .pipe(assets)
        .pipe(gulp.dest('.tmp/'));
});

module.exports = gulp.task('concat', [ 'concat:vendors', 'concat:js' ], function(){
    del(destDirectory + concatFileName + '*js-**');
    return gulp.src('src/client/index.html')
      // .pipe(inject(bundleFiles, {relative: true}))
      .pipe(gulp.dest('src/client'));
});
