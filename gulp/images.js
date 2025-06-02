// ===============================================
// IMAGES
// ===============================================

const gulp = require("gulp");
const minifyIMG = require("gulp-imagemin");
const pngquant = require("imagemin-pngquant");
const projectPath = require("./projectPath");

module.exports = () => {
	return gulp
		.src(`${projectPath.img.imgSrc}**/*`)
		.pipe(
			minifyIMG({
				verbose: true,
				use: [pngquant()],
			}),
		)
		.pipe(gulp.dest(projectPath.img.imgDest));
};
