var gulp = require('gulp');

gulp.task('dist', [], function(){ 
	return gulp.src([
      'src/client/**/*',
      '.tmp/**/*'
      ])
      .pipe(gulp.dest('dist'));
});