// ===============================================
// WATCH
// ===============================================

const gulp = require("gulp");
const projectPath = require("./projectPath");
const { bsReload } = require("./server");

module.exports = () => {
	gulp.watch(
		[
			projectPath.styles.all,
			`!${projectPath.styles.vars}`,
			projectPath.src.html,
			projectPath.templates.all,
			projectPath.config.all,
		],
		gulp.series("styles", "html", "list", "reload"),
	);
	gulp.watch([projectPath.img.imgSrc], gulp.series("clean", "styles", "html", "images", "reload"));
};

gulp.task("reload", (done) => {
	bsReload();
	done();
});
