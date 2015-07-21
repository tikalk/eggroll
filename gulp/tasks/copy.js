var gulp = require('gulp');
var bootstrapFonts = 'bower_components/bootstrap/fonts/**/*.*';

gulp.task('copy:dist', function () {
    return copyFonts(bootstrapFonts, 'src/client/fonts/bootstrap');
});

gulp.task('copy:dev', function () {
    return copyFonts(bootstrapFonts, '.tmp/fonts/bootstrap');
});

gulp.task('copy', function () {
	return gulp.src([
		'node_modules/material-design-lite/material.min.css',
		'node_modules/material-design-lite/material.min.js',
		'node_modules/vue/dist/vue.min.js'
	])
	.pipe(gulp.dest('.tmp'))
})
function copyFonts(src, dest){
	return gulp.src(src)
		.pipe(gulp.dest(dest));
}