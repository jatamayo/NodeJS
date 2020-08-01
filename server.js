const express = require('express');
const bodyParser = require('body-parser');

const router = require('./network/routes');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

router(app); 

// Servidores estaticos
app.use('/app', express.static('public'));

// Puerto en el que estaremos escuchando
app.listen(3000);
console.log("puerto escuchando en localhost:3000");