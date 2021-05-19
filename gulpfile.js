const
const
const gulp = require('gulp'),
	minifyCSS = require('gulp-minify-css'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	prefix = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	reload      = browserSync.reload;
// Save a reference to the `reload` method

// Watch scss AND html files, doing different things with each.
gulp.task('serve', function () {

	// Serve files from the root of this project
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});

	gulp.watch("*.html").on("change", reload);
});

// Minifies JS
gulp.task('js', function(){
	return gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'))
});
// CSS concat & minify
gulp.task('styles', function(){
	return gulp.src('css/**/*.css')
		.pipe(prefix('last 2 versions'))
		.pipe(concat('main.css'))
		.pipe(minifyCSS())
		.pipe(gulp.dest('dist/css'))
});

gulp.task('default', function() {
	gulp.run('styles')
	gulp.run('js')
});
