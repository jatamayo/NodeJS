/**
* NETWORK.JS maneja nuestra peticiones
* Este archivo sirve para almacenar todas las rutas de nuestra url -message-
*/

const express = require('express');
const bodyParser = require('body-parser');
const response = require ('../../network/response');
const controller = require('./controller')
const router = express.Router();

/**
* METHOD:      GET
* URL:         http://localhost:3000/message
* HEADERS:     "custom":"cutom response"
*/
router.get('/', (req, res) => {
    controller.getMessages()
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch((error) => {
            response.error(req, res, 'Unexpected Error', 500, error);
        });
});

/**
* METHOD:      POST
* URL:         http://localhost:3000/message
* HEADERS:     NONE
*/
router.post('/', (req, res) => {
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(() => {
            response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador');
        })
});


module.exports = router;

