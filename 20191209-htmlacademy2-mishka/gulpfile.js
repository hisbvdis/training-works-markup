const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const csso = require('gulp-csso');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const clean = require('gulp-clean');

// SVG min
gulp.task('svg-min', function() {
  return gulp.src('src/img/svg-inbox/*.svg')
    .pipe(svgmin())
    .pipe(gulp.dest('src/img/svg-sprite'))
})


// SVG sprite create
gulp.task('svgstore', function() {
  return gulp.src('src/img/svg-sprite/*.svg')
    .pipe(svgstore())
    .pipe(gulp.dest('src/img/'))
})


// Sass compilation
gulp.task('sass', function() {
  return gulp.src('src/scss/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      linefeed: 'crlf',
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/css/'))
    .pipe(browserSync.stream());
})

// JS-concatenation
gulp.task('js-concat', function() {
  return gulp.src('')
})

// Dev server
gulp.task('dev', function() {
  browserSync.init({
    server: 'src/',
    host: "192.168.0.104",
    reloadDelay: 0,
    reloadDebounce: 100,
    notify: false,
  });

  gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
  // gulp.watch('src/img/svg-inbox').on('add', gulp.series('svg-min', 'svgstore'));
  gulp.watch('src/img/svg-inbox').on('add', gulp.series('svg-min'));
  gulp.watch('src/img/svg-sprite').on('all', gulp.series('svgstore'));
  gulp.watch('src/js/*.js').on('change', browserSync.reload)
  gulp.watch('src/*.html').on('change', browserSync.reload)
});


// ==================================
// BUILD TASKS
// ==================================

// Build step 1: Clean "build" folder
gulp.task('build-clean', function() {
  return gulp.src('build/*')
    .pipe(clean());
});

// Build step 2: CSS min
gulp.task('build-css-min', function() {
  return gulp.src('src/css/main.css')
    .pipe(csso())
    .pipe(gulp.dest('build/css/'));
});

// Build step 3: Fonts transfer
gulp.task('build-fonts-transfer', function() {
  return gulp.src('src/fonts/**/*.*')
    .pipe(gulp.dest('build/fonts'));
});

// Build step 4: Image min + transfer
gulp.task('build-img-min', function() {
  return gulp.src('src/img/*.*')
    // .pipe(imagemin())
    .pipe(gulp.dest('build/img/'))
})

// Build step 5: JS min
gulp.task('build-js-min', function() {
  return gulp.src('src/js/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'))
})

// Build step 6: HTML min
gulp.task('build-html-min', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('build/'))
})

// Build task
gulp.task('build', gulp.series('build-clean', 'build-css-min', 'build-fonts-transfer', 'build-img-min', 'build-js-min', 'build-html-min'));



// ==================================
// PROD SERVER
// ==================================
gulp.task('prod', function() {
  browserSync.init({
    server: 'build/',
    host: "192.168.0.104",
    reloadDelay: 0,
    reloadDebounce: 100,
    notify: false,
  });
});