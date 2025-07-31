const fs = require('fs');


// Task1
/*
const rs = fs.ReadStream("Task1Text.txt", { encoding: 'utf8', highWaterMark: 1024*1024 });
const ws = fs.WriteStream("Task1Text_result.txt", { 'flags': 'w', encoding: 'utf8', highWaterMark: 1024*1024 });

rs.on('readable', function() {
	// считать очередную порцию данных из файла и вернуть текущий кусок в data
    var data = rs.read();
	
	var result = '';
	// если чтение удалось
    if (data){
        var sentences = data.split('.');

		sentences.forEach(x => {
			var words = x.split(' ').filter(x => x.length > 0);
			var numbers = words.filter(x => !isNaN(x));
			if(numbers.length > 0){
				result += x + '.';
			}
		});

		ws.write(result);
		//console.log(result);
    }
});

rs.on('error', function(err) {
    if (err.code == 'ENOENT') {
        console.log("file not found");
    } else {
        console.error(err);
    }
});

ws.on('error', function(err) {
    if (err.code == 'ENOENT') {
        console.log("file not found");
    } else {
        console.error(err);
    }
});
*/


// Task 2
/*
var rs = fs.ReadStream("Task2Text.txt", { encoding: 'utf8', highWaterMark: 1024*1024 });
var ws = fs.WriteStream("Task2Text_result.txt", { 'flags': 'w', encoding: 'utf8', highWaterMark: 1024*1024 });

rs.on('readable', function() {
	// считать очередную порцию данных из файла и вернуть текущий кусок в data
    var data = rs.read();
	
	var result = '';
	// если чтение удалось
    if (data){
		var num1 = '';
		var num2 = '';
		var operator = '';
		var isFirstNum = false;
		var digs = ['0','1','2','3','4','5','6','7','8','9'];
		var ops = ['+','-','*','/']

		data.split('').forEach(ch => {
			if(ch.length > 0){
				if(digs.includes(ch)) {
					if(!isFirstNum) num1 += ch;
					else num2 += ch;
				}
				else if(ops.includes(ch)){
					if(!isFirstNum)
					{
						isFirstNum = true;
						operator = ch;
					}
				}
				else{
					if(isFirstNum){
						result += Calc(+num1, +num2, operator) + ch;

						num1 = '';
						num2 = '';
						operator = '';
						isFirstNum = false;
					}
					else{
						result += ch;
					}
				}
			}
		});

		ws.write(result);
    }
});

rs.on('error', function(err) {
    if (err.code == 'ENOENT') {
        console.log("file not found");
    } else {
        console.error(err);
    }
});

function Calc(num1, num2, op){
	switch(op){
		case '+':
			return num1 + num2;
		case '-':
			return num1 - num2;
		case '*':
			return num1 * num2;
		case '/':
			return num1 / num2;
		default:
			return '[error]';
	}
}
*/

/*
var _num1 = '10';
var _num2 = '2';

console.log(+_num1 + +_num2);
console.log(+_num1 - +_num2);
console.log(+_num1 * +_num2);
console.log(+_num1 / +_num2);
*/
