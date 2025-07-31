const express = require("express");
 
const app = express();

app.get("/", function(request, response){
     
    response.send(`<html><body><h1>Main page</h1>
	<p><a href='http://localhost/contact'>Contact</a></p>
	<p><a href='http://localhost/about/?id=hello'>About</a></p><p>
	
	<form action='http://localhost/about' method='get'>
		<input name='id' type='text' value='1'/><br/>
		<input name='name' type='text' value='alex'/><br>
		<select size="5" multiple name="select1" style="width: 200px; background: #DDFFDD">
				<option disabled value="10">Donetsk</option>
				<option value="20">Odessa</option>
				<option value="30">Moskow</option>
				<option value="40">Kiev</option>
				<option value="50" selected>Rostov</option>
		</select><br>
		<input type="radio" name="gr1" id="r1" value="10"><label for="r1">Donetsk</label><br>
		<input type="radio" name="gr1" value="20">Moskow<br>
		<input type="radio" name="gr1" value="30">Rostov<br>
		<input type="radio" name="gr1" value="40">Kiev<br>
		<input type="radio" name="gr1" value="50">Odessa<br>
		<br>
		<input type='submit' value='submit'/>
	</form>
	</p></body></html>`);
});

app.get("/contact", function(request, response){
    response.send("<h1>Contacts</h1>");
});

app.use("/about", function(request, response){
    
	//if (typeof request.query.name === 'undefined') {
		// variable is undefined
	//}
	
    let id = request.query.id;
    let userName = request.query.name;
	let sel = request.query.select1;
	let radio1 = request.query.gr1;
	
	let resp = `<h1>About company</h1>
	<p>id=${id}</p>
	<p>name=${userName}</p>
	<p>select=${sel}</p>
	<p>radio=${radio1}</p>`
	
    response.send(resp);
});

app.get("/calc", function(request, response){
	
	let num1 = ''
	let num2 = ''
	let result = ''
	
	if (typeof request.query.number1 !== 'undefined' && typeof request.query.number2 !== 'undefined') {
		num1 = request.query.number1
		num2 = request.query.number2
		result = parseInt(num1) + parseInt(num2)
	}
	
	let resp = `<html><body><h1>Calculator</h1>
	<p>
	<form action='http://localhost/calc' method='get'>
		<input name='number1' type='text' value='${num1}'/><br/>
		<input name='number2' type='text' value='${num2}'/><br>
		<input readonly type='text' value='${result}'/><br>
		
		<br>
		<input type='submit' value='submit'/>
	</form></p></body></html>`
	
    response.send(resp);
});

app.listen(80);