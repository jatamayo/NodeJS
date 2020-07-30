const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('hola desde get');
})

router.delete('/testing', function (req, res) {
    console.log(req.body);
    res.send("hola prueba");
})


// como recibir datos con query
// http://localhost:3000/message?orderBy=id&age=15
router.post("/message", (req, res) => {
    console.log(req.query);
    res.send("testing");
})

// leer las cabezeras
router.get("/cabezeras", (req, res)=> {
    console.log(req.headers);
    // si deseamos enviar cabezeras
    res.header({
        "customHeader": "nuestro valor agregado como header"
    })
    res.send("lista de cabezeras");
})

// respuesta correcta de una api
router.post("/postBody", (req, res)=>{
    res.status(200).send({
        "error": "",
        "body": "creado correctamente"
    })
})

// ejemplo de como utilizar el archivo response.js
router.post("/responseJS", (req, res) => {
    response.success(req, res, "creado correctamente", 201);
})

module.exports = router;