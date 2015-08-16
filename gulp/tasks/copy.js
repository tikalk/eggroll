var gulp = require('gulp');
var files = [
		'node_modules/material-design-lite/material.min.css',
		'node_modules/material-design-lite/material.min.js',
		// 'node_modules/vue/dist/vue.min.js',
		// 'bower_components/octokat/dist/octokat.js'
	];
gulp.task('copy', function () {
	return gulp.src(files)
	.pipe(gulp.dest('.tmp'))
})

gulp.task('copy:dist', function () {
	return gulp.src([
		'dist/**/*'
	])
	.pipe(gulp.dest('./'));
})
function copyFonts(src, dest){
	return gulp.src(src)
		.pipe(gulp.dest(dest));
}