// ===============================================
// DIST
// ===============================================

const path = require("path");
const childProcess = require("child_process");
const glob = require("glob");
const projectPath = require("./projectPath");

module.exports = () => {
	glob.sync(`${projectPath.src.html}`).forEach((srcHTML) => {
		const relativePath = path.relative(projectPath.src.dir, srcHTML);
		const destPath = path.join(projectPath.dist.dir, relativePath);
		childProcess.execSync(`node main.js ${destPath}`);
		console.log(`Файл ${path.basename(srcHTML)} сохранен в папку dist`);
	});
};
