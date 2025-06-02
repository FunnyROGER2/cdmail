// ===============================================
// PROJECT PATHS
// ===============================================

module.exports = projectPath = {
	src: {
		html: "./src/**/*.html",
		dir: "./src/",
	},
	dist: {
		html: "./dist/**/*.html",
		dir: "./dist/",
	},
	render: {
		dir: "./render/",
	},
	templates: {
		dir: "./templates/",
		render: "./templates/render.html",
		all: "./templates/**/*.html",
	},
	styles: {
		all: "./styles/**/*.*",
		base: "./styles/base.scss",
		adaptive: "./styles/adaptive.scss",
		vars: "./styles/vars.scss",
	},
	list: "./index.html",
	img: {
		imgSrc: "./imgSrc/",
		imgDest: "./img/",
		img: "../../img/",
		prod: "https://cd.funnyroger.ru/assets/img/",
	},
	config: {
		all: "./config/*.js",
		mocks: "./config/mocks.js",
		vars: "./config/vars.js",
	},
};
