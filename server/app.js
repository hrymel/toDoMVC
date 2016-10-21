var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, '../client/')));

app.get('/', function (req, res) {
  res.render('index.html');
});

// app.get('api/todo', function(req, res){
// 	res.send({
// 		//list of todos
// 	})
// })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


/*
Require mongo
connect to mongo

handle api post and get

webpack to build front end


*/
