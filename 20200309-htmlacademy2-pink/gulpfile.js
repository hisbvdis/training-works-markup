"use strict";

const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const svgmin = require("gulp-svgmin");
const sourcemaps = require("gulp-sourcemaps");
const svgstore = require("gulp-svgstore");
const clean = require("gulp-clean");
const csso = require("gulp-csso");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const htmlmin = require("gulp-htmlmin");
const autoprefixer = require("gulp-autoprefixer");



// ===================================
// SERVER
// ===================================

// Dev server
gulp.task("default", function() {
  browserSync.init({
    server: "src",
    host: "192.168.0.104",
    reloadDelay: 0,
    reloadDebounce: 100,
    notify: false,
  });

  gulp.watch("src/sass/**/*.scss", gulp.series("sass"));
  gulp.watch("src/*.html").on("change", browserSync.reload);
  gulp.watch("src/img/image-minification/in/*.svg").on("add", gulp.series("svg-min"));
  gulp.watch("src/img/image-minification/in/*.svg").on("add", gulp.series("image-min"));
  gulp.watch("src/img/svg-sprite/*.svg").on("all", gulp.series("svg-sprite", browserSync.reload));
  gulp.watch("src/js/**/*.js").on("change", browserSync.reload);
});

// Prod server
gulp.task("prod", function() {
  browserSync.init({
    server: "build",
    host: "192.168.0.104",
    reloadDelay: 0,
    reloadDebounce: 100,
    notify: false,
  });
});



// ===================================
// DEV TASKS
// ===================================

// Sass compilation
gulp.task("sass", function() {
  return gulp.src("src/sass/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
});

// SVG-min
gulp.task("svg-min", function() {
  return gulp.src("src/img/image-minification/in/*.svg")
    .pipe(svgmin())
    .pipe(gulp.dest("src/img/image-minification/out"));
});

// SVG-sprite generator
gulp.task("svg-sprite", function() {
  return gulp.src("src/img/svg-sprite/*.svg")
    .pipe(svgstore())
    .pipe(gulp.dest("src/img/"));
});

// Image min
gulp.task("img-min", function() {
  return gulp.src([
      "src/img/image-minification/in/*.jpg",
      "src/img/image-minification/in/*.jpeg",
      "src/img/image-minification/in/*.png",
      "src/img/image-minification/in/*.gif",
    ])
    .pipe(imagemin())
    .pipe(gulp.dest("src/img/image-minification/out"));
})



// ===================================
// BUILD TASKS
// ===================================

// Build step 1: Clean "build" folder
gulp.task("build-folder-clean", function() {
  return gulp.src("build/*")
    .pipe(clean());
});

// Build step 2: CSS min + autoprefixer + transfer
gulp.task("build-css-min", function() {
  return gulp.src("src/css/main.css")
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(csso())
    .pipe(gulp.dest("build/css/"));
});

// Build step 3: Fonts transfer
gulp.task("build-fonts.transfer", function() {
  return gulp.src("src/fonts/**/*.*")
    .pipe(gulp.dest("build/fonts/"));
});

// Build step 4: Image min + transfer
gulp.task("build-img-min", function() {
  return gulp.src("src/img/*.*")
    // .pipe(imagemin())
    .pipe(gulp.dest("build/img"));
});

// Build step 5: JS min + transfer
gulp.task("build-js-min", function() {
  return gulp.src("src/js/main.js")
    .pipe(uglify())
    .pipe(gulp.dest("build/js/"));
});

// Build step 6: HTML min + transfer
gulp.task("build-html-min", function() {
  return gulp.src("src/*.html")
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest("build/"));
});

// Build task
gulp.task("build", gulp.series("build-folder-clean", "build-css-min", "build-fonts.transfer", "build-img-min", "build-js-min", "build-html-min"));