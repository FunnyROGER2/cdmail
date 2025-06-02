// ===============================================
// SERVER
// ===============================================

const browserSync = require("browser-sync").create();

const bsInit = () => {
	return browserSync.init({
		server: {
			baseDir: "./",
		},
		tunnel: true,
	});
};

const bsReload = () => {
	return browserSync.reload();
};

module.exports = {
	bsInit,
	bsReload,
};
