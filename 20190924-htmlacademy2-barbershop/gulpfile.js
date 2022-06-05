const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');
const csso = require('gulp-csso');
const del = require('del');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');

gulp.task('sass', function() {
  // Paths to source files
  // return gulp.src("src/sass/**/*.scss")
  return gulp.src("src/sass/style.scss")

    // Actions with source files
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError)) // Compile scss files
    .pipe(sourcemaps.write()) // Write sourcemap in destination css file
    .pipe(gulp.dest('src/css/')) // Destination directory
  // .pipe(browserSync.stream())
})

gulp.task('serve', function() {
  // Server start
  // browserSync.init({
  //   server: "./src",
  //   reloadDelay: 0,
  //   reloadDebounce: 500
  // })

  // Track file changes and start task 'sass'
  gulp.watch('src/sass/**/*.scss', gulp.series('sass'));
  // Server reload on html change
  // gulp.watch('src/*.html').on('change', browserSync.reload);
});

gulp.task('build-clean', function() {
  return del('build/**/*');
});

gulp.task('build-css-min', function() {
  return gulp.src('src/css/style.css')
    .pipe(csso())
    .pipe(gulp.dest('build/css/'));
});

gulp.task('build-fonts-transfer', function() {
  return (gulp.src('src/fonts/**/*'))
    .pipe(gulp.dest('build/fonts'))
});

gulp.task('build-img-min', function() {
  return (gulp.src('src/img/**/*'))
    .pipe(imagemin())
    .pipe(gulp.dest('build/img'))
})

gulp.task('build-js-min', function() {
  return (gulp.src('src/js/script.js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/js'))
})

gulp.task('build-html-min', function() {
  return (gulp.src('src/*.html'))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('build'))
})

gulp.task('default', gulp.series('serve'));
gulp.task('build', gulp.series('build-clean','build-css-min','build-fonts-transfer','build-img-min','build-js-min','build-html-min'));
