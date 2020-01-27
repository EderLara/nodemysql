'use strict';
// Requerimientos: 
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// iniciamos el express:
const app = express();

/* Secciones: */
// Rutas:
const rutasaap = require('./rutas/src.ruta');

/* Cargar Middlewares: */
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());
app.use(morgan('dev'));

/* cors -cabeceras-: */
app.use(function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods','GET, PUT, POST, DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
	next();
});

// Usamos las rutas
app.use('/api', rutasaap);

module.exports = app;