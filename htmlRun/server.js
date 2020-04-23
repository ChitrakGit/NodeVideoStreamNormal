const express =  require("express");


var app = express();


app.use(express.static('htmlPages'));


app.listen(3000,()=> console.log("listen on 3000"));