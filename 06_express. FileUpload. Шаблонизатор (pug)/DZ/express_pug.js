const express = require("express");
//const pug = require('pug');
  
const app = express();
  
app.set("view engine", "pug");
 
app.use("/pug", function(request, response)
{      
    response.render("templ", {
        title: "Simple Pug template test",
        showList: true,
        list: ["One", "Two", "Three", "Four", "Five"]
    });
}); 
 
app.use("/", function(request, response){
      
    response.send("Main page");
});
app.listen(80);