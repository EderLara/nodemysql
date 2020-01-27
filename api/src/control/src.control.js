'use strict';
// Importamos el modulo bcrypt, para las contraseñas:
let bcrypt = require('bcryptjs');
let path = require('path');
// Cargamos la configuración de la base de datos:
const conn = require('../conex');

// Funciones de controlador:
function pruebas(req, res){
	console.log(req.body);
	res.status(200).send({
		message: 'Por acá tambien ingresamos a la ruta pruebas'
	});
}
/* --------------------------------------------------------------------- */
// CRUD a la tabla:
function guardar(req, res) {
    // Entradas del formulario:
    const { usuario, contrasena, nombre, cedula, email, administrador } = req.body;
    // Capturaremos estas variables para pasarsela al nuevo usuario:
    const NewUser = { usuario, contrasena, nombre, cedula, email, administrador }
    // Ejecutamos la consulta en la base de datos
    conn.query('INSERT INTO nodemysql set ?', [NewUser]).then((usuario)=>{
        // Con esto veremos que los datos se han guardado en la base de datos:
        if (usuario) {
            return res.status(200).send({ Nuevo: NewUser });
        }else {
            return res.status(500).send({ error: 'Ha ocurrido un error y no se puede guardar en la base de datos, revise la consola' });   
        }
    });
}
// Función de Inicio de Sesión:
function login(req, res){
    const { usuario, contrasena } = req.body;
    // Consultamos los datos de usuario en la base de datos:
    conn.query('SELECT * FROM nodemysql WHERE usuario = ?', [usuario], (err, logger)=>{
        if (err) throw err;
        if (logger.length > 0) {
            const usuario = logger[0];
            // Luego capturamos la clave y la comparamos con la que existe en la base de datos:
            if (usuario.Contrasena === contrasena) {
                return res.status(200).send({ Usuario: logger });
            }
        }       
    });
}
// Función Listar todos los usuarios:
function getUsers(req, res) {
    // Consultamos en la base de datos todos los usuarios con una simple consulta:
    conn.query('SELECT * FROM nodemysql', (err, result)=>{
        if (err) throw err;
        return res.status(200).send({ Usuarios: result });
    });
}
// Función listar por roles de Usuario:
function getRol(req, res){
    // Constante con el que capturamos el parametro rol:
    const rol = req.params.rol;
    // Consultamos en la base de datos de acuerdo al parametro rol:
    conn.query('SELECT * FROM nodemysql WHERE Administrador = ?', [rol], (err, role)=>{
        if (err) throw err;
        return res.status(200).send({ Usuarios: role });
    });
}
function getDate(req, res){
    // Constante con el que capturamos el parametro rol:
    const fecha = req.params.fecha;
    // Consultamos en la base de datos de acuerdo al parametro rol:
    conn.query("SELECT * FROM nodemysql WHERE create_at like '%"+fecha+"%'", (err, cronos)=>{
        if (err) throw err;
        console.log(cronos);
        return res.status(200).send({ Usuarios: cronos });
    });
}
/* --------------------------------------------------------------------- */
// Exportamos las funciones del control:
module.exports = {
    pruebas,
    guardar,
    login,
    getUsers,
    getRol,
    getDate
}