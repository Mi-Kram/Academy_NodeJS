var path = require("path");

// получить основное имя без полного пути
console.log('Base name: ' + path.basename('c:\\windows\\temp\\test.html'));

// получить основное имя без полного пути и расширения
console.log('Base name: ' + path.basename('c:\\windows\\temp\\test.html', '.html'));

// получить полный путь без имени
console.log('Dir name: ' + path.dirname('c:\\windows\\temp\\test.html'));

// получить расширение файла из полного пути
console.log('Ext name: ' + path.extname('c:\\windows\\temp\\test.html'));

// проверка на абсолютный путь
console.log(path.isAbsolute('C:\\windows\\..')) 		// true
console.log(path.isAbsolute('images\\image1.jpg'))    	// false
console.log(path.isAbsolute('.'))						// false

// собрать путь из частей
console.log("Path join: " + path.join('c:', 'windows'));
console.log("Path join: " + path.join('c:', 'windows', 'test.html'));

// полный разбор пути на части
var parseResult = path.parse('c:\\windows\\temp\\test.html')
console.log("Parse dir: " + parseResult.dir);
console.log("Parse base: " + parseResult.base);
console.log("Parse name: " + parseResult.name);
console.log("Parse ext: " + parseResult.ext);