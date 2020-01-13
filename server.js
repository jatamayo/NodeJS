const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();


var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies
app.use('/', router);



// ejemplo sin definir metodo
app.use('/', (req, res)=>{
        res.send('hola mundo');
})

// ejemplo con get
router.get('/message', (req, res) => {
        console.log(req.body); // obtener el body
        console.log(req.headers); // obtener los headers
        res.send('hola desde get');
})

// ejemplo con post
router.post('/message', (req, res) => {
        res.send('hola desde post');
})

// ejemplo con delete
router.delete('/message', (req, res) => {
        console.log(req.body);
        console.log(req.query); // obtener datos mediante query ejemplo "http://localhost:3000/message?testing=hola"
        res.send('hola desde delete');
})

// ejemplo con update
router.put('/message', (req, res) => {
        res.send('hola desde update');
})


// Elegir el puerto en el que vamos a escuchar
app.listen(3000);
console.log('Aplicacion escuchando en el puerto http://localhost:3000');
