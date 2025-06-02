// ===============================================
// RENDER
// ===============================================

const gulp = require("gulp");
const fs = require("fs");
const path = require("path");
const replace = require("gulp-replace");
const rename = require("gulp-rename");
const gulpif = require("gulp-if");
const glob = require("glob");
const projectPath = require("./projectPath");
const sass = require("sass");
const { scssImporter } = require("./helpers");
const { regexMocks, regexVars, regexTemplates } = require("./regex");

module.exports = (isAmpierOriginal) => {
	glob.sync(`${projectPath.src.html}`).forEach((srcHTML) => {
		const relativePath = path.relative(projectPath.src.dir, srcHTML);
		const destPath = path.join(projectPath.render.dir, relativePath);
		const destDir = path.dirname(destPath);
		delete require.cache[require.resolve(`.${projectPath.config.mocks}`)];
		delete require.cache[require.resolve(`.${projectPath.config.vars}`)];
		const mocks = require(`.${projectPath.config.mocks}`);
		const vars = require(`.${projectPath.config.vars}`);
		const localJS = `<script src="../../../main.js"></script>`;
		const localCSS = `<link type="text/css" rel="stylesheet" href="../../../main.css">`;
		const originalAmpier = `<script type="text/javascript">var s=document.createElement("script"),l=document.createElement("link"),d=new Date;s.setAttribute("src","https://amp4email.ru/tjml/app.js?ver="+d.getTime()),l.setAttribute("type","text/css"),l.setAttribute("rel","stylesheet"),l.setAttribute("href","https://amp4email.ru/tjml/app.css?ver="+d.getTime()),document.head.appendChild(l),document.body.appendChild(s);</script>`;

		const body = fs.readFileSync(srcHTML, "utf8", (err, data) => {
			if (err) {
				console.error(err);
				return;
			}
			return data;
		});

		const base = sass.compileString(
			fs.readFileSync(projectPath.styles.base, "utf8", (err, data) => {
				if (err) {
					console.error(err);
					return;
				}
				return data;
			}),
			{
				importer: scssImporter,
			},
		).css;

		const adaptive = sass.compileString(
			fs.readFileSync(projectPath.styles.adaptive, "utf8", (err, data) => {
				if (err) {
					console.error(err);
					return;
				}
				return data;
			}),
			{
				importer: scssImporter,
			},
		).css;

		gulp
			.src([projectPath.templates.render])
			.pipe(replace("{{ title }}", path.basename(srcHTML, ".html")))
			.pipe(replace("{{ body }}", body))
			.pipe(
				replace(regexTemplates, (match, key) => {
					return (
						fs.readFileSync(`${projectPath.templates.dir}${key}.html`, "utf8", (err, data) => {
							if (err) {
								console.error(err);
								return;
							}
							return data;
						}) || match
					);
				})
			)
			.pipe(replace("{{ base }}", base))
			.pipe(gulpif(!isAmpierOriginal, replace("{{ localJS }}", localJS), replace("{{ localJS }}", "")))
			.pipe(gulpif(!isAmpierOriginal, replace("{{ localCSS }}", localCSS), replace("{{ localCSS }}", "")))
			.pipe(gulpif(isAmpierOriginal, replace("{{ originalAmpier }}", originalAmpier), replace("{{ originalAmpier }}", "")))
			.pipe(replace("{{ adaptive }}", adaptive))
			.pipe(replace("{{ imgPath }}", projectPath.img.img))
			.pipe(
				replace(regexMocks, (match, key) => {
					return mocks?.dev[key] || match;
				}),
			)
			.pipe(
				replace(regexVars, (match, key) => {
					return vars[key] || match;
				}),
			)
			.pipe(rename(path.basename(srcHTML)))
			.pipe(gulp.dest(destDir));
		console.log(`Файл ${path.basename(srcHTML)} сохранен в папку render`);
	});
};
