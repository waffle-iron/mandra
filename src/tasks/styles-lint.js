var gulp = require('gulp'),
    paths =  require('./paths'),
    argv = require('yargs'),
    postcss =  require('gulp-postcss'),
    stylelint =  require('stylelint'),
    reporter =  require('postcss-reporter');

module.exports = () => {
  let processors = [
    stylelint(),
    reporter({
      throwError: argv.ci,
      clearMessages: true
    })
  ];

  return gulp.src([paths.src.css.glob])
    .pipe(postcss(processors));
}
