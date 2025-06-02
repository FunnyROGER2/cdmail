// ===============================================
// CLEAN
// ===============================================

const projectPath = require("./projectPath");
const { rimrafSync } = require("rimraf");

module.exports = (isWatchBuild) => {
	const htmlList = isWatchBuild ? [projectPath.dist.dir, projectPath.render.dir] : [projectPath.render.dir];
	return rimrafSync([projectPath.styles.vars, ...htmlList, projectPath.img.imgDest, projectPath.list]);
};
