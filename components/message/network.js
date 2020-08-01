const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();


router.get('/', (req, res)=>{
    controller.getMessages()
        .then((result)=>{
            response.success(req, res, result, 200);
        })
        .catch((error)=>{
            response.error(req, res, 'Unexpected Error', 500, error);
        })
})

router.post('/', (req, res)=>{
    controller.addMessage(req.body.user, req.body.message)
        .then((result)=>{
            response.success(req, res, result, 200);
        })
        .catch((error)=>{
            response.error(req, res, 'Informacion Invalida', 400, error);
        })
})

module.exports = router;