var express = require('express');
var app = express();
app.listen(8080);


 app.use(express.static('public'));
 app.use(express.static('node_modules'));



// app.get('/', function(request, response){
//     console.log("Hello World");
//   });

// app.get('/', function(request, response){
//     response.send("Hello World");
//   });



//   app.get('/anotherRoute', function(request, response){
//     response.send("Hey, I'm another route!");
//   });

//   app.get('/me', function(request, response){
//     response.send({ name: 'chen', age: 28 });
//   });
