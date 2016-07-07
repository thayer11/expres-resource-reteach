'use strict'
var express = require('express');
var app = express() ;
var bodyParser = require('body-parser');

app.use(bodyParser.json());
var candies = [];
var nextId = 1;

app.get('/candies/:id', function(req, res){
 var foundCandy;
 var targetId = parseInt(req.params.id);
 for(var i = 0; i< candies.length; i++){
   if (candies[i].id === targetId){
     foundCandy = candies[i];
   }
 }
 res.send(foundCandy);
});

app.post('/candies', function(req, res){
   var newCandy = req.body;
   if(newCandy.id === undefined){
     newCandy.id = nextId;
     nextId++;
   }
   candies.push(newCandy);
   console.log(newCandy);
   res.send(newCandy);
});

app.get('/candies', function(req, res){
   // SHOW
   res.send(candies);

});

app.put('/candies/:id', function(req, res){
 res.send(candies);

});

app.delete('/candies/:id', function(req, res){
 // DELETE
 res.send(candies.nextId);

});

//......///
var candies = [
 {
   "id": 1,
   "name": "Chewing Gum",
   "color": "Red"
 },
 {
   "id": 2,
   "name": "Pez",
   "color": "Green"
 },
 {
   "id": 3,
   "name": "Marshmallow",
   "color": "Pink"
 }
];

app.listen(3000);
console.log("Server listening on port 3000");