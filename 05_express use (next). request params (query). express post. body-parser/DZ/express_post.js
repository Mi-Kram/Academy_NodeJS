// npm install body-parser

const express = require("express")
const bodyParser = require("body-parser")
  
const app = express()
  
// создаем парсер для данных application/x-www-form-urlencoded
const parser = bodyParser.urlencoded({extended: false});
 
app.get("/register", function (request, response) {
    response.sendFile(__dirname + "/register.html");
});

app.post("/register", parser, function (request, response) {
    if(!request.body) 
		return response.sendStatus(400);
	
    console.log(request.body);
    response.send(`Name: ${request.body.name}, Age: ${request.body.age}`);
});
  
app.get("/", function(request, response){
    response.send("Main page!!!");
});

app.get("/calc", function(request, response){
	let resp = `<html><body><h1>Calculator</h1>
	<p>
	<form action='http://localhost/calc' method='post'>
		<input name='number1' type='text' value=''/><br/>
		<input name='number2' type='text' value=''/><br>
		<input readonly type='text' value=''/><br>
		
		<br>
		<input type='submit' value='submit'/>
	</form></p></body></html>`
	
    response.send(resp);
});

app.post("/calc", parser,  function(request, response){
	
	let num1 = ''
	let num2 = ''
	let result = ''
	
	if (typeof request.body.number1 !== 'undefined' && typeof request.body.number2 !== 'undefined') {
		num1 = request.body.number1
		num2 = request.body.number2
		result = parseInt(num1) + parseInt(num2)
	}
	
	let resp = `<html><body><h1>Calculator</h1>
	<p>
	<form action='http://localhost/calc' method='post'>
		<input name='number1' type='text' value='${num1}'/><br/>
		<input name='number2' type='text' value='${num2}'/><br>
		<input readonly type='text' value='${result}'/><br>
		
		<br>
		<input type='submit' value='submit'/>
	</form></p></body></html>`
	
    response.send(resp);
});
  
app.listen(80);