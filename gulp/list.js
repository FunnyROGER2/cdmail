// ===============================================
// LIST
// ===============================================

const beautifyHtml = require("js-beautify").html;
const fs = require("fs");
const path = require("path");

module.exports = (isWatchBuild, isAmpierOriginal) => {
	const fileList = generateNestedFileList("src");
	const htmlContent = `
		<!DOCTYPE html>
		<html>
		<head>
			<title>E-mails${isWatchBuild ? " (build)" : ""}</title>
			<link
				rel="icon"
				type="image/png"
				href="favicons/list.png"
			>
			<style>
				body {
					font-family: Verdana, "Geneva CY", "DejaVu Sans", sans-serif;
					padding: 20px;
					line-height: 1.25em;
					background-color: ${isWatchBuild ? "lightgray" : "ghostwhite"};
				}
				body, p, h1, h2, h3, h4 {
					margin: 0;
					font-weight: 100;
				}
				code {
					border: 1px solid gray;
					background-color: lightgray;
					border-radius: 2px;
					padding: 0 4px;
				}
				.title {
					margin: 20px 0;
				}
				.title-list {
					display: inline;
					color: darkgray;
					font-size: inherit;
				}
				.list {
					list-style-type: disc;
					padding: 0 20px;
					list-style-position: inside;
				}
				.list .list {
					border-left: 1px dotted cadetblue;
					margin-left: 2px;
				}
				.list li {
					padding: 4px;
					color: cadetblue;
				}
				.link {
					color: darkcyan;
				}
				.link--secondary {
					color: cadetblue;
				}
				.warning {
					margin: 10px 0;
					padding: 12px;
					border: 1px solid darkgrey;
					background-color: whitesmoke;
					border-radius: 8px;
					font-size: 12px;
					line-height: 24px;
					width: clamp(400px, 800px, 60%);
				}
				.delimiter {
					color: cadetblue;
				}
			</style>
		</head>
		<body>
			<h1 class="title">E-mails${isWatchBuild ? " (build)" : ""}</h1>
			${
				!isWatchBuild
					? `<div class="warning"><p>
					Сборка запущена командой <code>npm run start</code> или <code>npm run start:ampierOriginal</code> и вотчер не пересобирает prod-файлы.
					Для их обновления используйте <code>npm run build</code> или <code>npm run build:watch</code>.
				</p></div>`
					: `<div class="warning"><p>
					Сборка запущена командой <code>npm run build:watch</code> и будет выполняться медленнее.
					Для более быстрой сборки используйте <code>npm run start</code> (в этом случае вотчер не будет пересобирать prod-файлы).
				</p></div>`
			}
			${
				isAmpierOriginal
					? `<div class="warning"><p>
				Сборка использует внешний оригинальный скрипт для работы с Ampier.</p>
				<p>
					Рекомендуется использовать только для ознакомления, так как результат работы уже непредсказуем.
				</p></div>`
					: ""
			}
			${fileList}
		</body>
		</html>
	`;
	const prettyHtml = beautifyHtml(htmlContent, {
		indent_char: "	",
	});

	fs.writeFileSync("index.html", prettyHtml, "utf-8");
	console.log("Сгенерирован список страниц");
};

function generateFileList(dir) {
	const files = fs.readdirSync(dir);
	let fileList = '<ul class="list">';
	files.forEach((file) => {
		const filePath = path.join(dir, file);
		const stats = fs.statSync(filePath);
		if (stats.isDirectory()) {
			fileList += `<li><h3 class="title-list">${file}</h3>${generateFileList(filePath)}</li>`;
		} else if (path.extname(file) === ".html") {
			fileList += `<li>
				<a class="link" href="${filePath.replace("src", "render")}" target="_blank">${file}</a>
				<span class="delimiter"> |</span>
				<a class="link link--secondary" href="${filePath.replace("src", "dist")}" target="_blank">prod.</a>
			</li>`;
		}
	});
	fileList += "</ul>";
	return fileList;
}

function generateNestedFileList(dir) {
	const fileList = generateFileList(dir);
	const nestedList = `${fileList}`;
	return nestedList;
}
