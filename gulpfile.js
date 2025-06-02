'use strict';

const gulp = require('gulp');
const clean = require('./gulp/clean');
const styles = require('./gulp/styles');
const dist = require('./gulp/dist');
const render = require('./gulp/render');
const images = require('./gulp/images');
const list = require('./gulp/list');
const watch = require('./gulp/watch');
const { bsInit } = require('./gulp/server');
const isAmpierOriginal = !!process.argv.find((arg) => arg.includes("--ampierOriginal"));
const isWatchBuild = !!process.argv.find((arg) => arg.includes("--watchBuild"));
const htmlList = isWatchBuild ? ["dist", "render"] : ["render"];

gulp.task('clean', (done) => {
	clean(isWatchBuild);
	done();
});

gulp.task('dist', (done) => {
	dist();
	done();
});

gulp.task('styles', (done) => {
	styles();
	done();
});

gulp.task('render', (done) => {
	render(isAmpierOriginal);
	done();
});

gulp.task('images', (done) => {
	images();
	done();
});

gulp.task('list', (done) => {
	list(isWatchBuild, isAmpierOriginal);
	done();
});

gulp.task('watch', (done) => {
	watch();
	done();
});

gulp.task('server', (done) => {
	bsInit();
	done();
});

gulp.task('html', gulp.series(...htmlList));

gulp.task('start', gulp.series('clean', 'styles', 'html', 'images', 'list', 'watch', 'server'));
gulp.task('build', gulp.series('clean', 'styles', 'dist', 'images'));
