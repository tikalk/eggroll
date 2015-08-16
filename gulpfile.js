var gulp = require('gulp');

gulp.task('default', ['serve']);

require('./gulp/tasks/server');
require('./gulp/tasks/copy');
require('./gulp/tasks/browserify');
require('./gulp/tasks/distribution');
