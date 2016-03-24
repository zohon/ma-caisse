var gulp = require('gulp');
var watch = require('gulp-watch');
var vulcanize = require('gulp-vulcanize');


gulp.task('vulcanize', function() {
	watch(['elements/*', 'elements/**/*'], function () {

		var ladate=new Date()
		var dateText = ladate.getHours()+":"+ladate.getMinutes()+":"+ladate.getSeconds()

		console.log('['+dateText+']', 'Change in file');
		
		gulp.src('elements/elements.html')
		.pipe(vulcanize({
			stripComments: true,
			inlineScripts:true,
			inlineCss:true
		}))
		.pipe(gulp.dest('build/'))
    });
});

gulp.task('default', ['vulcanize']);