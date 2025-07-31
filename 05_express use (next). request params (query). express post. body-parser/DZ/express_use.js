const express = require("express");
 
const app = express();

// выполнение промежуточных действий перед возвратом ответа с сервера
app.use(function(request, response, next){
     
    console.log("Middleware 1");
	
	// передать управление следующим обработчикам запроса
    next();
});

app.use(function(request, response, next){
     
    console.log("Middleware 2");
	
	// передать управление следующим обработчикам запроса
    next();
});

app.get("/", function(request, response){
    response.send("<h1>Main page</h1>")
});

app.get("/contact*", function(request, response){
     
	console.log("contact");
    response.send("<h1>Contacts</h1>");
});

app.get("/goo+gle", function(request, response){
     
    response.send("<h1>Google!</h1>");
});

app.get("/about(.html)?", function(request, response){
	
	let data = `method: ${request.method}<br>
	baseUrl: ${request.baseUrl}<br>
	url: ${request.url}<br>
	client ip: ${request.ip}<br>
	host name: ${request.hostname}<br>
	path: ${request.path}<br>
	params: ${request.params}<br>
	user-agent: ${request.get("user-agent")}`
	
    response.send("<h1>About</h1>" + data);
});

app.listen(80);