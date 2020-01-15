/**
 * SERVER.js es el archivo principal que llama al archivo ROUTES.JS para manejar todas las rutas
 */
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./network/routes');

var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

router(app);
app.use('/', router)
app.use('/app', express.static('public')); // ruta para archivos estaticos


//Elegir el puerto en el que vamos a escuchar
app.listen(3000);
console.log('Aplicacion escuchando en el puerto http://localhost:3000');
