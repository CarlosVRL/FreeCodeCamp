var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    browserSync = require('browser-sync').create();

gulp.task('html', function() {
  console.log('reloading (not really)');
  return gulp.src('Responsive*/**/*.html')
            .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  var server = livereload();
  gulp.watch('**/*.html', ['html']);
});

gulp.task('serve-survey-form', ['watch'], function() {
    browserSync.init({
        server: './Responsive Web Design Certification/Responsive Web Design Projects/Survey Form'
    });
});

gulp.task('default', ['serve', 'watch']);
