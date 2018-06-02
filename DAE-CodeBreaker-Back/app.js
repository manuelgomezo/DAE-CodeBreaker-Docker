var assert = require('chai').assert;
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
const api=require('./routes');

// Importamos el facilitador de peticiones 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api',api);// para que todas las rutas usen el prefijo api/

module.exports = app;