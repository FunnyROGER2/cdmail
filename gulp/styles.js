// ===============================================
// STYLES
// ===============================================

const childProcess = require("child_process");

module.exports = () => {
	childProcess.execSync(`npm run scss:vars`);
	console.log(`SCSS-переменные сконвертированы`);
};
