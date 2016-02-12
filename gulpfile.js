var gulp = require('gulp'),
	concat = require('gulp-concat');

var paths = {
  swagger: ['./api/paths/*.yaml', './api/definitions/*.yaml']
};

gulp.task('swagger', function(done) {
	gulp.src(['./api/swagger/_header.yaml', './api/paths/*.yaml', './api/swagger/_definitions.yaml', './api/definitions/*.yaml'])
		.pipe(concat('swagger.yaml'))
		.pipe(gulp.dest('./api/swagger/'))
		.on('end', done);
	gulp.watch(paths.swagger, ['swagger']);
});

gulp.task('default', ['swagger'], function() {

});