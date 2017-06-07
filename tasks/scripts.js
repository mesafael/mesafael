//variaveis
const gulp = require('gulp')
const babel = require('gulp-babel')


 
gulp.task('babel', () => {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('./dist/scripts/'));
});


gulp.task('scripts', ['babel'])
