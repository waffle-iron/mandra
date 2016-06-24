var gulp = require('gulp'),
    paths = require('./src/tasks/paths'),
    styleLint = require('./src/tasks/styles-lint'),
    styleBuild = require('./src/tasks/styles-build'),
    server = require('./src/tasks/server')


gulp.task('lint:css', styleLint)

gulp.task('build:css', styleBuild)
gulp.task('server', server)

gulp.task('watch', () => {
  gulp.watch([paths.src.css.glob], ['build:css', 'lint:css'])
})

gulp.task('buildCSS', ['build:css', 'lint:css'])

gulp.task('default', ['buildCSS', 'watch', 'server'])
