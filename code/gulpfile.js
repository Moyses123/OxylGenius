var gulp = require('gulp'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    autoprefixer = require('gulp-autoprefixer'),
    rename = require('gulp-rename'),
    uglify = require('gulp-babel-minify');


gulp.task('css', function () {
    return gulp.src('css/**/*.css')
        .pipe(minifyCSS())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(concat('app.min.css'))
        .pipe(gulp.dest(''));
});

gulp.task('js', function () {
    gulp.src('js/**/*.js')
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest(''));
});

gulp.task('watch', function() {
  gulp.watch('js/**/*.js', ['js']), 
  gulp.watch('css/**/*.css', ['css']);
});

gulp.task('default', ['watch']);