// npm install express-fileupload

const express = require("express")
const fileUpload = require('express-fileupload');
  
const app = express()

// начальные настройки
app.use(fileUpload());

app.post('/upload', function(req, res) {
	
	// если файлы не были переданы
	if (!req.files) {
		return res.status(400).send('No files were uploaded.');
	}

	console.log(req.files.file1.length);
	if(!Array.isArray(req.files.file1))
	{
		// перемещение файла из временной папки
		req.files.file1.mv(__dirname + '/images/' + req.files.file1.name, function(err) {
			if (err)
			return res.status(500).send(err);

			res.send('File uploaded!');
		});
	}
	else
		for(let i = 0; i < req.files.file1.length; i++){
			req.files.file1[i].mv('./images/'+req.files.file1[i].name, function (err)
			{
				if(err) {
					res.send(err);
				}
			})
		}

	res.send('File uploaded!');
});

app.get("/", function(request, response){
    response.send(`
	<html>
	  <body>
		<form
		  action='http://localhost/upload' 
		  method='post' 
		  encType="multipart/form-data">
			<input type="file" name="file1" multiple /><br>
			<input type='submit' value='Upload!' />
		</form>     
	  </body>
	</html>`)
});

app.listen(80);