const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require('gulp-sass');
const imagemin = require("gulp-imagemin");
const svgstore = require("gulp-svgstore");
const sourcemaps = require("gulp-sourcemaps");
const csso = require('gulp-csso');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const clean = require('gulp-clean');


// ===================================
// SERVER
// ===================================

// Dev server
gulp.task("default", function() {
  browserSync.init({
    server: "src/",
    host: "192.168.0.104",
    reloadDelay: 0,
    reloadDebounce: 100,
    notify: false,
  });

  gulp.watch("src/sass/**/*.scss", gulp.series("sass"));
  gulp.watch("src/*.html").on("change", browserSync.reload);
  gulp.watch("src/js/**/*.js").on("change", browserSync.reload);
  gulp.watch("src/img/img-inbox/*.svg").on("add", gulp.series("svg-min"));
  gulp.watch("src/img/img-inbox/*.{jpg,jpeg,png,gif}").on("add", gulp.series("img-min"));
  gulp.watch("src/img/svg-sprite/*.svg").on("all", gulp.series("svg-sprite"));
});

// Prod server
gulp.task("prod", function() {
  browserSync.init({
    server: "build/",
    host: "192.168.0.104",
    reloadDelay: 0,
    reloadDebounce: 100,
    notify: false,
  });

  gulp.watch("build/*.html").on("change", browserSync.reload);
  gulp.watch("build/js/**/*.js").on("change", browserSync.reload);
});



// ===================================
// DEV TASKS
// ===================================
// Sass compilation
gulp.task("sass", function() {
  return gulp.src("src/sass/**/*scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

// Image min
gulp.task("img-min", function() {
  return gulp.src([
      "src/img/img-inbox/*.jpg",
      "src/img/img-inbox/*.jpeg",
      "src/img/img-inbox/*.png",
      "src/img/img-inbox/*.gif",
    ])
    .pipe(imagemin())
    .pipe(gulp.dest("src/img/"));
})

// SVG min
gulp.task("svg-min", function() {
  return gulp.src("src/img/img-inbox/*.svg")
    .pipe(imagemin())
    .pipe(gulp.dest("src/img/svg-sprite/"));
})

// SVG sprite generator
gulp.task("svg-sprite", function() {
  return gulp.src("src/img/svg-sprite/*.svg")
    .pipe(svgstore())
    .pipe(gulp.dest("src/img/"));
})



// ===================================
// BUILD TASKS
// ===================================
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