 var gulp = require('gulp');
 var LiveServer = require('gulp-live-server');
 var browserSync = require('browser-sync');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var importCss = require('gulp-import-css');
var browserifycss = require('browserify-css');

gulp.task('default', function () {
  gulp.src('app/components/styles.css')
    .pipe(importCss())
    .pipe(gulp.dest('./.tmp'));
});

 gulp.task('live-server', function() {
   var server = new LiveServer('server/main.js');
   server.start();
 })

gulp.task('bundle', function() {
  return browserify({
      entries:'app/main.jsx',
      debug:true,
  })
  .transform(reactify)
  .transform(browserifycss)
  .bundle()
  .pipe(source('app.js'))
  // .pipe(source('styles.css'))
  .pipe(gulp.dest('./.tmp'));
})

 gulp.task('serve', ['default', 'bundle', 'live-server'], function() {
   browserSync.init(null, {
     proxy:"http://localhost:3333",
     port: 9004
   })
 })
