
// получить количество параметров командной строки
console.log("param count: " + process.argv.length)

// перебрать все параметры командной строки
process.argv.forEach((current, index, arr) => { console.log(current)})

// 0 - параметр слово node
// 1 - название запущенного скрипта
// 2... - дальнейшие параметры
//console.log(process.argv[0])