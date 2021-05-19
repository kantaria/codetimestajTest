const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const reload      = browserSync.reload;

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
