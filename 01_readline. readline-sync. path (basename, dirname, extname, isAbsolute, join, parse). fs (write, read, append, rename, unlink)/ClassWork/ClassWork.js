const fs = require('fs');

// Task1
/*
try	{
	fs.writeFileSync('file1_result.txt', "");
	
	fs.readFile("file1.txt", "utf8", function(err, data) {
		if(err){
			console.error('ERROR - ' + err);
		}else{
			var arr = data.split('\n');
			for(var i = 0; i < arr.length; i++)
			{
				if(isNaN(arr[i])) continue;
				var num = +arr[i];
				if(num%2 != 0)
				{
					fs.appendFileSync('file1_result.txt', `${num}\n`);
				}			
			}
		}
	});
} catch(err){
	console.error(err);
}
*/


// Task2
/*
try	{
	fs.writeFileSync('file2_result.txt', "");
	
	fs.readFile("file2.txt", "utf8", function(err, data) {
		if(err){
			console.error('ERROR - ' + err);
		}else{
			var arr = data.split(' ');
			arr.sort((a,b) => a.length > b.length ? 1 : a.length < b.length ? -1 : 0);
			for(var i = 0; i < arr.length; i++)
			{
				fs.appendFileSync('file2_result.txt', `${arr[i]}\n`);
			}
		}
	});
} catch(err){
	console.error(err);
}
*/


// Task3
/*
try	{
	fs.writeFileSync('file3_result.txt', "");
	
	fs.readFile("file3.txt", "utf8", function(err, data) {
		if(err){
			console.error('ERROR - ' + err);
		}else{
			var arr = data.split(' ');
			var dic = new Map();

			for(var i = 0; i < arr.length; i++)
			{
				if(dic.has(arr[i])) dic.set(arr[i], +(dic.get(arr[i])) + 1);
				else dic.set(arr[i], 1);
			}
			
			dic = new Map([...dic.entries()].sort((a, b) => b[1] - a[1]));
			dic.forEach(function(value, key) {
				fs.appendFileSync('file3_result.txt', `${value}: ${key}\n`);
			})
		}
	});
} catch(err){
	console.error(err);
}
*/
