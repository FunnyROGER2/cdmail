// ===============================================
// HELPERS
// ===============================================

const fs = require("fs");
const { pathToFileURL } = require("url");

module.exports = helpers = {
	scssImporter: {
		canonicalize(url) {
			return new URL(`${url}.scss`, pathToFileURL("./styles/"));
		},
		load(url) {
			return {
				contents: fs.readFileSync(url, "utf8", (err, data) => {
					if (err) {
						console.error(err);
						return;
					}
					return data;
				}),
				syntax: "scss",
			};
		},
	},
};
