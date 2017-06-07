const gulp = require('gulp');
const browserSync = require('browser-sync').create()


gulp.task('browser-sync', () => { 
     browserSync.init(["./dist/styles/*.css", "./dist/**/*.html", "./dist/**/*.js"], {
        server: {
            baseDir: "./dist"
        }
    })
})


gulp.task('server', ['browser-sync','styles','html','scripts' ], () => {  
    gulp.watch("./src/styles/*.styl", ['styles'])
    gulp.watch("./src/scripts/*.js", ['scripts'])
    gulp.watch("./src/**/*.pug", ['html'])
})