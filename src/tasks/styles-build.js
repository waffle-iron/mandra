var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    rename = require('gulp-rename'),
    paths = require('./paths'),
    processors = require('./postcss-processors'),
    errorHandler = require('./postcss-error-handler')

module.exports = () => {

  return gulp.src(paths.src.css.main)
    .pipe(postcss(processors))
    .on('error', errorHandler)
    .pipe(rename('mandra.min.css'))
    .pipe(gulp.dest(paths.src.css.dest))
    // .pipe(gulp.dest(paths.docs.css.dest));
};
