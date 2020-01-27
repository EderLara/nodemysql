'use strict';
// Constantes de aplicación:
const express = require('express');
const ruta = express.Router();
// Importamos las funciones del controlador:
const srcControl = require('../control/src.control');

// Primera forma de hacer rutas:
ruta.get('/', (req, res)=>{
    res.send("Bienvenido al Servicio NodeJS");
});

// Segunda forma y la mejor implementada:
ruta.get('/test', srcControl.pruebas);
ruta.post('/guardar', srcControl.guardar);
ruta.post('/ingreso', srcControl.login);
ruta.get('/listar', srcControl.getUsers);
ruta.get('/usuarios/:rol?', srcControl.getRol);
ruta.get('/cronos/:date?', srcControl.getDate);


// Exportamos las rutas:
module.exports = ruta;

