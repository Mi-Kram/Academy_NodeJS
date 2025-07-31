/*

npm i express express-fileupload pug body-parser multer

npm i express
npm i express-fileupload
npm i pug
npm i body-parser
npm i multer

*/

const fs = require('fs');
const path = require('path');
const express = require("express");
const fileUpload = require('express-fileupload');

const bodyParser = require('body-parser');
const multer  = require('multer');
const upload = multer({limits:{fileSize:4000000}}).single('files')

const app = express();

app.set('views', './Views');
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json());

app.use(express.static('./public'));  
app.use(fileUpload());

app.get("/", function(request, response){
  response.render("Index", {
   images: GetAllPhotos()
  });
});

app.get("/DetailImage", function(request, response){
  if(!fs.existsSync(`./public${request.query.id}`)){
    response.sendStatus(404);
    return;
  }

  response.render("DetailImage", {
   image: request.query.id
  });
});

app.get("/DeleteImage", function(request, response){
  if(!fs.existsSync(`./public${request.query.id}`)){
    response.sendStatus(404);
    return;
  }

  fs.unlinkSync(`./public${request.query.id}`);
  response.redirect('/');
});

function UploadFile(file, path){
  return new Promise(resolve => {
    file.mv(path).then(res => resolve());
  });
}

async function UploadFiles(files){
  var ids = GetAllPhotos().map(x => +path.parse(x).name);
  var nextID = 1;

  for(let i = 0; i < files.length; i++){
    while(ids.includes(nextID)) nextID++;
    await UploadFile(files[i], `${__dirname}/public/Images/${nextID++}${path.parse(files[i].name).ext}`);
  }
}

app.post('/SendFile', function(request, response){
  upload(request, response, async function(err){ 
    var files = Array.isArray(request.files.files) ? request.files.files : [request.files.files];
    
    UploadFiles(files).then(res => {
      response.json(GetAllPhotos());
    });
  });
});

function GetAllPhotos(){
  return fs.readdirSync('./public/Images', { withFileTypes: true })
    .filter(file => !file.isDirectory())
    .map(file => `/Images/${file.name}`);
}
 
app.listen(80);