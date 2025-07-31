var fs = require('fs');
var path = require('path');


// синхронная запись в текстовый файл
try 
{
	fs.writeFileSync('file.txt', "Hello\nworld!!!");
} catch(err) {
	console.error(err);
}

// синхронное чтение текстового файла
var contents = fs.readFileSync('file.txt', 'utf8');
console.log(contents);


// запись в текстовый файл
fs.writeFile("file1.txt", "Hello world!!!", function(err) {
    if(err) throw err;
	
	// дозапись в файл
	/*fs.appendFile('file.txt', '\nNew line', (err) => {
		if (err) {
			console.error(err)
			return
		}
	  
		// чтение текстового файла
		fs.readFile("file.txt", "utf8", function(err, data) {
			if(err){
				console.error('ERROR - ' + err);
			}else{
				console.log(data);
			}
		});
	})
    */
	
	// переименование файла
    /*fs.rename("file.txt", "new.txt", function(err){
        if(err) throw err;
        
		// удаление файла
        fs.unlink("new.txt", function(err){
            if(err) throw err;
        });
    })
	*/
	
	
	// копирование файла
	fs.copyFile('file.txt', 'file2.txt', (err) => {
	  if (err) throw err;
	});
	
	//fs.copyFileSync('file.txt', 'file2.txt')
    
});