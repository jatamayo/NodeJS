const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

/* *****************************************************************
 *  DESCRIPCION: Obtener lista con todos los mensajes añadidos de un usuario
 *  PETICION: GET
 *  URL: localhost:3000/message?user=Naruto 
 *  BODY: {}
 * */
router.get('/', (req, res)=>{
    const user = req.query.user || null;
    controller.getMessages(user)
        .then((result)=>{
            response.success(req, res, result, 200);
        })
        .catch((error)=>{
            response.error(req, res, 'Unexpected Error', 500, error);
        })
})

/* *****************************************************************
 *  DESCRIPCION: Obtener lista con todos los mensajes añadidos de todos los usuarios
 *  PETICION: GET
 *  URL: localhost:3000/message/allMessages
 *  BODY: {}
 * */
router.get('/allMessages', (req, res)=>{
    controller.getAllMessages()
        .then((result)=>{
            response.success(req, res, result, 200);
        })
        .catch((error)=>{
            response.error(req, res, 'Unexpected Error', 500, error);
        })
})

/* *****************************************************************
 *  DESCRIPCION: Añadir un nuevo mensaje a nuestra lista de mensajes 
 *  PETICION: POST
 *  URL: localhost:3000/message
 *  BODY: {
 *      "user": "Naturo Uzumaki",
 *      "message": "Deberas que si."
 *  }
 * */
router.post('/', (req, res)=>{
    controller.addMessage(req.body.user, req.body.message)
        .then((result)=>{
            response.success(req, res, result, 200);
        })
        .catch((error)=>{
            response.error(req, res, 'Informacion Invalida', 400, error);
        })
})

/* *****************************************************************
 *  DESCRIPCION: Actualizar un registro en DB por ID 
 *  PETICION: PATCH
 *  URL: localhost:3000/message/ID
 * */
router.patch('/:id', (req, res)=>{
    controller.updateMessage(req.params.id, req.body.message)
        .then((data)=>{
            response.success(req, res, data, 200);
        })
        .catch((error)=>{
            response.error(req, res, 'Error Interno', 500, error);
        })
})

/* *****************************************************************
 *  DESCRIPCION: Eliminar un registro en DB por ID 
 *  PETICION: DELETE
 *  URL: localhost:3000/message/ID
 * */
router.delete('/:id', (req, res)=>{
    controller.deleteMessage(req.params.id)
        .then((data)=>{
            response.success(req, res, `Mensaje ${req.params.id} eliminado exitosamente.`, 200);
        })
        .catch((error)=>{
            response.error(req, res, 'Error Interno', 500, error);
        })

})

module.exports = router;