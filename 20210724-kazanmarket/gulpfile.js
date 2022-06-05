// =================================================================
// COMMANDS
// =================================================================
// - gulp: Run dev server
// - gulp prod: Run prod server
// - gulp build: Build prod server



// =================================================================
// PACKAGES
// =================================================================
// service
const gulp = require("gulp");
const browsersync = require("browser-sync").create();
const devip = require("dev-ip");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");

// Code Optimisation
const csso = require("gulp-csso");
const htmlmin = require("gulp-htmlmin");
const autoprefixer = require("gulp-autoprefixer");

// Images
const svgmin = require("gulp-svgmin");
const svgstore = require("gulp-svgstore");

// Files
const rename = require("gulp-rename");
const clean = require("gulp-clean");
const run = require("gulp-run");


// ===================================
// SERVER
// ===================================
// Dev server
gulp.task("default", function() {
  browsersync.init({
    server: "src",
    host: devip(),
    reloadDelay: 0,
    reloadDebounce: 100,
    notify: false,
  });

  gulp.watch("src/sass/**/*.scss", gulp.series("sass"));
  gulp.watch("src/*.html").on("change", browsersync.reload);
  gulp.watch("src/js/**/*.js").on("change", browsersync.reload);
  gulp.watch("src/img/svg-1-inbox/*.svg").on("add", gulp.series("svgmin"));
  gulp.watch("src/img/svg-3-sprite/").on("all", gulp.series("svg-sprite"));
})

// Prod server
gulp.task("prod", function() {
  browsersync.init({
    server: "src",
    host: devip(), // From "dev-ip" extension
    reloadDelay: 0,
    reloadDebounce: 100,
    notify: false,
  });
});



// ===================================
// DEV TASKS
// ===================================
// SASS compilation
gulp.task("sass", function() {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("src/css"))
    .pipe(browsersync.stream());
});

// SVG minification
gulp.task("svgmin", function() {
  return gulp
    .src("src/img/svg-1-inbox/*.svg")
      .pipe(svgmin({
        plugins: [{ name: 'removeViewBox', active: false }]
      }))
    .pipe( gulp.dest("src/img/svg-2-minified") );
});

// SVG sprite-generator
gulp.task("svg-sprite", function() {
  return gulp
    .src("src/img/svg-3-sprite/*.svg")
    .pipe(svgstore())
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("src/img/"));
});

// =================================================================
// TASKS BUILD
// =================================================================
// Build step 1: Clean "build" folder
gulp.task("build-folder-clean", function() {
  return gulp.src("build/*")
    .pipe(clean());
});

// Build step 2: CSS min + autoprefixer + transfer
gulp.task("build-css-min", function() {
  return gulp.src("src/css/style.css")
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(csso())
    .pipe(gulp.dest("build/css/"));
});

// Build step 3: Fonts transfer
gulp.task("build-fonts-transfer", function() {
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
  return run('npm run build').exec()
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
gulp.task("build", gulp.series("build-folder-clean", "build-css-min", "build-fonts-transfer", "build-img-min", "build-js-min", "build-html-min"));