//variaveis
const gulp = require('gulp')
const pug = require('gulp-pug')



gulp.task('pug',() => {
    return gulp.src('./src/**/*.pug')
        .pipe(pug({
            pretty:true
        }))
        .pipe(gulp.dest('./dist'))
        
})


gulp.task('html', ['pug'])