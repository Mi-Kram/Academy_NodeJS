var fs = require('fs');
var path = require('path');

// перебор файлов и папок
/*
const testFolder = '.';

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    console.log(file);
  });
});
*/

/*
// поиск подпапок в папке
var dirs = fs.readdirSync('c:\\windows', { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
	
console.log(dirs)
*/

/*
// получить список текстовых файлов
fs.readdir('.', function(err, files) {

	var targetFiles = files.filter(function(file) {
		return path.extname(file).toLowerCase() === '.txt'
	})
	
	console.log(targetFiles)
})
*/

// рекурсивный поиск файлов

// npm install recursive-readdir


var recursive = require("recursive-readdir");

/*
recursive('c:\\temp', function (err, files) {
	if (!err)
		console.log(files);
});
*/

/*
// true - проигнорировать вхождение
function ignoreFunc(file, stats) {
	//console.log(file)
	return stats.isDirectory() && path.basename(file) == "Ivanov_Homework_6"
}

recursive("c:\\temp\\", ["Strategy", ignoreFunc], function (err, files) {
  console.log(files);
})
*/

// создание папки

/*
const dir = './/folder1'
try {
  if (!fs.existsSync(dir)){
    fs.mkdirSync(dir)
  }
} catch (err) {
  console.error(err)
}
*/


// удаление папки с подпапками

// npm install fs-extra

const efs = require('fs-extra')

const folder = './/folder1'
efs.remove(folder, err => {
	if (err)
		console.error(err)
})
