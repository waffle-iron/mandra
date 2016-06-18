var notify = require('gulp-notify'),
    chalk = require('chalk')

module.exports = function(error) {
  notify.onError({
    title: 'PostCSS Error!',
    message: 'Check your terminal for more information.'
  })(error)

  console.log(chalk.cyan('Message: ') + chalk.red(error.message))

  this.emit('end')
}
