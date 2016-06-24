var gulp = require('gulp'),
    server = require('gulp-webserver'),
    paths = require('./paths');

module.exports = () => {
  return gulp.src('./')
    .pipe(server({
      livereload: true,
      directoryListing: true,
      open: true,
      fallback: 'index.html'
    }))
}
