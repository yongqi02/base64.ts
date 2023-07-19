#!/usr/bin/env node
/**
 * 图片转 base64
 * @example $ node img2base64.js [file|dir]
 */
const fs = require('fs');
const path = require('path');
const mimeType = require('mime-types');

// 读取图片文件转换为 base64 编码，并打印到控制台
function parse(file) {
	let filePath = path.resolve(file); // 原始文件地址
	// let fileName = filePath.split('\\').slice(-1)[0].split('.'); // 提取文件名
	let fileMimeType = mimeType.lookup(filePath); // 获取文件的 memeType

	// 读取文件数据
	let data = fs.readFileSync(filePath);
	data = new Buffer(data).toString('base64');

	// 转换为 data:image/jpeg;base64,***** 格式的字符串
	let base64 = 'data:' + fileMimeType + ';base64,' + data;

	return base64;

	// // 创建输出目录
	// let outPath = path.resolve('./');
	// let outFileName = `${fileName.join('-')}.txt`;
	// let outFile = path.join(outPath, outFileName);
	// if (fs.existsSync(outPath)) {
	// 	saveData(base64, outFile, filePath, outFileName);
	// } else {
	// 	// mkdirp(outPath, () => {
	// 	// 	saveData(base64, outFile, filePath, outFileName);
	// 	// });
	// }
}

// // 写入到文件
// function saveData(data, file, filePath, outFileName) {
// 	fs.createWriteStream(file)
// 		.end(data, () => {
// 			// console.log(chalk.green(`Success! ${filePath}:\t${outFileName}`));
// 		});
// }

// // 遍历目录下的文件并逐个转换为 base64
// function dirEach(dir) {
// 	let pa = fs.readdirSync(dir);
//
// 	pa.forEach((item, index) => {
// 		let itemPath = path.resolve(dir + '/' + item);
// 		let stat = fs.statSync(itemPath);
// 		if (stat.isDirectory()) {
// 			dirEach(itemPath); // 递归
// 		} else {
// 			parse(itemPath); // 转换为 base64
// 		}
// 	});
// }

// // 获取输入的文件地址或目录地址
// let input = program.args[0];
// const MSG_ERROR_INPUT_EMPTY = 'File or filePath cann not be empty!';
// // const MSG_WARN_OPTION_EMPTY = 'No option';
// if (!input) return console.error(new Error(MSG_ERROR_INPUT_EMPTY));

// 读取文件
fs.stat('./assets/cat.jpg', (err, stats) => {
	// 如果是文件则直接解析
	if (stats.isFile()) console.log(parse('./assets/cat.jpg'));

	// 如果是目录则遍历目录下的图片文件并逐个进行解析
	// if (stats.isDirectory()) return dirEach(input);

	// 无对应操作
	// console.log(MSG_WARN_OPTION_EMPTY);
});