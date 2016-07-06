'use strict'
var express = require('express')
var app = express() 

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

app.listen(3000)
console.log("Server listening on port 3000")