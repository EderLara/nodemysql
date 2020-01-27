/** 
 * Aplicación Node-MySQL
 * @author: 
*/

// Servidor de NodeJS
'use strict';
// En app se configuran los inicializadores o disparadores de la aplicación:
const app = require('./app');

// configuraciones de entorno:
const port = 3800;

// Iniciamos el servicio:
app.listen(port,()=>{
    console.log('Servidor Encendido y andando en el puerto: '+port);
});



