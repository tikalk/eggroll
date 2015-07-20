var gulp = require('gulp');
var livereload = require('gulp-livereload');
var runSequence = require('run-sequence');
var jsFiles = [
  '.tmp/**/*.js',
  '!.tmp/bundle**.js',
  '!.tmp/templates.**.js', 
  '!.tmp/vendors*.js'
];

function livereloadChange(event) {
  console.log('Running livereload for event: ' + JSON.stringify(event));
  setTimeout(function() {
    livereload.changed(event.path);
  }, 2000);
}

gulp.task('watch', function() {
  livereload.listen({ basePath: '.tmp' });
  
  gulp.watch([
      'src/client/**/*.js'
    // ], ['concat'])
    ], [])
    .on('change', livereloadChange);
  
  gulp.watch([
      'src/client/index.html'
    ], ['concat:vendors'])
    .on('change', livereloadChange);

  // gulp.watch([
  //     '.tmp/**/*.js'
  //   ], [])
  //   .on('change', livereloadChange);

  gulp.watch([
    'src/client/**/*.html',
    // 'src/client/index.html',
    '!src/client/assets/sprite-map.html'
    ], 
    ['html2js'])
    .on('change', livereloadChange);

  gulp.watch(['src/client/**/*.less', 'src/client/assets/images/**/*.png'], ['style'])
    .on('change', livereloadChange);
});

// gulp.task('watch:server-dev', function() {
//   gulp.watch([jsFiles, 'tests/**/*.js'], ['u-tests:server:dev']);
// });