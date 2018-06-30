var gulp= require('gulp');
var sass= require('gulp-sass');

gulp.task("sass",function(){
  return gulp.src('src/scss/style.scss')
  .pipe(sass())
  .pipe(gulp.dest('dist/css'))
});

gulp.task("watch",function(){
  return gulp.watch('src/scss/**/*.scss', ['sass']);

});
gulp.task('default', ["sass","watch"])
