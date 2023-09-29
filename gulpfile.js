const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass')) // sass->css
const minifyCSS = require('gulp-minify-css') //压缩css

gulp.task('sass', async function() {
    return gulp.src('components/css/*.scss')
    .pipe(sass())//sass -> css
    .pipe(minifyCSS()) //css压缩
    .pipe(gulp.dest('dist/css'))//打包目录
})