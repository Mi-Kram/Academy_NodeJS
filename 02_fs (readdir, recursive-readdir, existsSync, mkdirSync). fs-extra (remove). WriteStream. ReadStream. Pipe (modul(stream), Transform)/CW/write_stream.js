var fs = require('fs')

// создание потока для записи
var wstream = fs.WriteStream('output.txt', { 'flags': 'w', encoding: 'utf8', writableHighWaterMark: 256 });

// поток записал содержимое буфера в файл и готов для дальнейшей работы ?????
wstream.on('drain', function () {
  console.log('stream is ready...');
});

// все данные перенесены в файл
wstream.on('finish', function () {
  console.log('file has been written');
});

// поток был закрыт
wstream.on('close', function () {
  console.log('file has been closed');
});

// возникла ошибка записи
wstream.on('error', function(err) {
	console.error(err);
});

// построчная запись в файл
wstream.write('Hello world!\n');
wstream.write('Another line\n');

// закрытие потока
wstream.end();