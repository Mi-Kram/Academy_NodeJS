
/*
// подключение модуля для ввода строк из потоков
const readline = require('readline');

// асинхронный способов ввода строк из консоли
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ввод одной строки с клавиатуры
//rl.question('What do you think of Node.js? ', (answer) => {
//  console.log(`Thank you for your valuable feedback: ${answer}`);
//  rl.close();
//});


// ввод 3 строк с клавиатуры
rl.question('Enter the first number: ', (number1) => {
    rl.question('Enter the second number: ', (number2) => {
        rl.question('Enter the second number: ', (number3) => {
			var result = parseInt(number1) + parseInt(number2) + parseInt(number3);
			console.log(`Sum = ${result}`);
			rl.close();
		});
    });
});*/


// консоль (cmd) запуск от Администратора
// npm install readline-sync

const readline = require('readline-sync');

var name = readline.question("What is your name? ");

var lastName = readline.question("What is your last name? ");

console.log(`Hi, ${name} ${lastName}, nice to meet you.`);
