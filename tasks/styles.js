//variaveis
const gulp = require('gulp')
const stylus = require('gulp-stylus')
const sourcemaps = require('gulp-sourcemaps')



gulp.task('stylus', function () {
  return gulp.src('./src/styles/app.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/styles/'));
})

gulp.task('styles', ['stylus'])
