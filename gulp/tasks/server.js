var gulp = require('gulp');
var webserver = require('gulp-webserver');
 
gulp.task('webserver', function() {
  gulp.src([
    'src/client',
    '.tmp'
    ])
    .pipe(webserver({
      livereload: true,
      // directoryListing: true,
      // open: true,
      port: 8001
    }));
});