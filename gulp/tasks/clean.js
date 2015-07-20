var gulp = require('gulp');
var del = require('del');

gulp.task('clean:src', function(cb) {
  return del([
      '.tmp/bundle.js',
      '.tmp/bundle.js.map',
      '.tmp/app.css',
      '.tmp/app.css.map',
      '.tmp/vendors.js'
    ], cb);
});

gulp.task('clean:bower', function(cb) {
  return del([
    'src/client/bower_components'
    ], cb);
});

gulp.task('clean:dist', function(cb) {
  return gulp.src([
    'dest'
    ], cb);
});

gulp.task('clean:all', ['clean:src', 'clean:bower', 'clean:dist']);
gulp.task('clean', ['clean:src', 'clean:dist']);