<h4>Gulp and BrowserSync Configures</h4>
<p>For developing static website, when staic files, like js html file,  changed, we need to reresh page to check, <strong>BrowserSync</strong> can be a useful tool for us.</p>
<p>Here is a basic exmple code for integrated using gulp and browserSync</p>
<pre>
const gulp = require('gulp')
const scss = require('gulp-scss')
const notify = require('gulp-notify')
const browserSync = require('browser-sync').create()
const reload = browserSync.reload


const baseDir = './flex'

gulp.task('serve', () => {
  browserSync.init({
    server: {
      baseDir
    }
  })
})


gulp.task('scss', () => {
  return gulp.src(baseDir + '/scss/*.scss')
    .pipe(scss())
    .pipe(gulp.dest(baseDir + '/css'))
    .pipe(reload({stream: true}))
    .pipe(notify('scss compiled'))
})


gulp.task('default', ['serve'], () => {
  gulp.watch(baseDir + '/scss/*.scss', ['scss'])
  gulp.watch(baseDir + '/*.html').on('change', () => {
    console.log('change')
    reload()
  })
})
</pre>
<br><br>
<p><small>reference:</small> <a href="http://www.browsersync.cn/docs/gulp/">http://www.browsersync.cn/docs/gulp/</a></p>

