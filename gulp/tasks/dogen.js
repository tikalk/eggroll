var gulp = require('gulp');
var dogen = require('gulp-dogen');

dogen.config({
	templatesPath: 'gulp/templates',
	gulp: gulp
});

// This will create gulp tasks as:
// gulp dogen --endpoint the-name-to-be-scaffolded
dogen.task('endpoint', 'src/server/api/');
dogen.task('cjsmodule', 'src/client/app/');