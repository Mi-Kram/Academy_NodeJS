var fs = require('fs');

/*
// создание потока для чтения (highWaterMark - максимальный размер буфера для чтения, 64K default)
var stream = fs.ReadStream("all_words.txt", { highWaterMark: 300 * 1024 });

// изменение кодировки
stream.setEncoding('UTF8');
 
// поток готов к чтению
stream.on('readable', function() {
	
	// считать очередную порцию данных из файла и вернуть текущий кусок в data
    var data = stream.read();
	
	// если чтение удалось
    if (data){
        console.log(`chunk size: ${data.length}, bytes read: ${stream.bytesRead}`);
		//console.log(data);
    }
    else {
        console.log('data is null')
    }
});

// файл открыт
stream.on('open', function() {
    console.log("open file");
});

// поток готов для чтения
stream.on('ready', function() {
    console.log("stream is ready");
});

// поток достиг конца файла
stream.on('end', function() {
    console.log("end of file");
});

// возникла ошибка
stream.on('error', function(err) {
    if (err.code == 'ENOENT') {
        console.log("file not found");
    } else {
        console.error(err);
    }
});
*/

// соединение 2 потоков при помощи pipe для автоматической передачи информации

/*var readableStream = fs.createReadStream('all_words.txt');
var writeableStream = fs.createWriteStream('all_words2.txt');
readableStream.pipe(writeableStream);
console.log('End of the Process');
*/

// соединение консольного ввода с консольным выводом
//process.stdin.pipe(process.stdout);


// импортировать один объект Transform из модуля stream
//const { Transform } = require('stream');
const Transform = require('stream').Transform;

// создание нового трансформирующего потока за счёт изменения метода transform
const upperCaseStream = new Transform({
	
	// chunk - текущая порция данных
	// encoding - кодировка информации
	// callback - ссылка на функцию, которую нужно запустить по окончании трансформации
	transform(chunk, encoding, callback) {
		
		// перевод всех букв в верхний регистр и поместить результат в выходной поток
		this.push(chunk.toString().toUpperCase());
		
		// удаление всех гласных букв
		//this.push(chunk.toString().replace(/[aeioyu]/ig, ''));
		
		callback();	// дать сигнал для чтения следующей порции данных
	  }
});

// трансформация клавиатурного ввода
//process.stdin.pipe(upperCaseStream).pipe(process.stdout);

// трансформация файла
var readableStream = fs.createReadStream('all_words.txt');
var writeableStream = fs.createWriteStream('all_words2.txt');

readableStream.pipe(upperCaseStream).pipe(writeableStream);