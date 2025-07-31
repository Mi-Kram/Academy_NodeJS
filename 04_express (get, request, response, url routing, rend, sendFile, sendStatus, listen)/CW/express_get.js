const express = require("express");
const path = require("path");
 
const app = express();

app.get("/", function(request, response){
    response.send(`<html><head><link rel='stylesheet' href='css/style1.css'></head>
	<body><h1>Main page</h1>
	<img src='images/admin.gif' /><br><br>
	<a href='./tst.zip'>My file</a>
	</body></html>`)
});

app.get("/contact*", function(request, response){
     
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

app.get("/words*", function(request, response){
     
    response.sendFile(__dirname + "/all_words.txt");
});

// обработка запросов к поддерживаемым файлам
app.get("/*", function(request, response){
	let ext = path.extname(request.path).toLowerCase()
	
	if(ext === '.jpg' || ext === '.gif' || ext === '.png' || ext === '.css' || ext === '.txt')
	{
		console.log(__dirname + request.path)
		response.sendFile(__dirname + request.url);
	}
	else
		response.sendStatus(404)
});

/*app.get("/*", function (request, response) {
  response.sendStatus(404)
});*/

app.listen(80);