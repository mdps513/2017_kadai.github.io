var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var browser = require("browser-sync");
 
gulp.task("server", function() {
    browser({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task("sass", function() {
    gulp.src("common/sass/*scss")
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest("./common/css"));
});

gulp.task("default",['server'], function() {
    gulp.watch(["common/js/*.js","!js/min/**/*.js"],["js"]);
    gulp.watch("common/sass/*.scss",["sass"]);
});