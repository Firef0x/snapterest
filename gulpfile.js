var gulp=require('gulp');
var browserify=require("browserify");
var browserSync=require("browser-sync").create();
var babelify=require("babelify");
var vinylSource=require("vinyl-source-stream");
var buffer=require("vinyl-buffer");
var uglify=require('gulp-uglify');

var source = {
	script: ["source/**/*.js", "source/**/*.jsx"]
};
var dest = {
	script: "./build/"
};

gulp.task("browserify", function () {
	return browserify('./source/app.js')
		   .transform('babelify')
		   .bundle()
		   .pipe(vinylSource('snapterest.js'))
		   .pipe(buffer())
//		   .pipe(uglify())
		   .pipe(gulp.dest(dest.script));
});

gulp.task("script-watch", ["browserify"], function() {
	browserSync.reload();
});

gulp.task("serve", ["browserify"], function() {
	browserSync.init({
		ghostMode: false,
		server: "./build",
        port: 3002
	});
	gulp.watch(source.script, ["script-watch"]);
	gulp.watch(["./*.html"], function() {
		browserSync.reload();
	});
});

gulp.task("default", ["serve"]);
