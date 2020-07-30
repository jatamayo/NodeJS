const express = require('express');
const response = require('../../network/response');

const router = express.Router();

router.get('/', (req, res)=>{
    res.header({
        "customHeader": "nuestro valor personalizado"
    })
    response.success(req, res, 'lista de mensajes');
})

router.post('/', (req, res)=>{
    if(req.query.error === 'ok'){
        response.error(req, res, 'Error inesperado', 500, 'es una simulacion');
    }else{
        response.success(req, res, 'creado correctamente', 200);
    }
})

module.exports = router;