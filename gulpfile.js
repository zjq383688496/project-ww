const gulp        = require('gulp')
const connect     = require('gulp-connect')
const nodemon     = require('gulp-nodemon')
const browserSync = require('browser-sync').create()

gulp.task('nodemon', function(cb) {
	var called = false
	return nodemon({
		script: 'app.js',
		env: {
			NODE_ENV: 'localhost'
		},
		ext: '*'
	})
	.on('start', function onStart() {
		if (!called) cb()
		called = true
	})
	.on('restart', function onRestart() {
		setTimeout(function reload() {
			browserSync.reload({ stream: false })
		}, 1000)
	})
})

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init({
		proxy: {
			target: 'http://localhost:3000',
			ws: true
		},
		files: ['src/**/*.*'],
		browser: 'default',
		port: 4000
	})
})

gulp.task('default', ['browser-sync'])
