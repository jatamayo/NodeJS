const express = require('express');
const bodyParser = require('body-parser');

const router = require('./components/message/network');

var app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

app.use('/', router);
app.use('/app', express.static('public'));



// Elegir el puerto en el que vamos a escuchar
app.listen(3000);
console.log('Aplicacion escuchando en el puerto http://localhost:3000');





//************************************************************************************** */
//************************************************************************************** */
// ejemplo sin definir metodo
app.use('/', (req, res)=>{
        res.send('hola mundo');
})

// ejemplo con get
router.get('/testing', (req, res) => {
        console.log(req.body); 
        // obtener el body
        console.log(req.headers); 
        // enviar custom headers
        res.header({
                "custom-header": "nuestro custom header",
        });
        // obtener los headers
        res.send('hola desde get');
})

router.post('/testing2', (req, res) => {
        console.log(req.query);
        console.log(req.body);
        // enviar un status a la peticion, enviar algun tipo de respuesta
        res.status(201).send({error: '', body:'creado correctamente'});
})


// ejemplo con post
router.post('/testing', (req, res) => {
        res.send('hola desde post');
})

// ejemplo con delete
router.delete('/testing', (req, res) => {
        console.log(req.body);
        console.log(req.query); 
        // obtener datos mediante query ejemplo "http://localhost:3000/message?testing=hola"
        res.send('hola desde delete');
})

// ejemplo con update
router.put('/testing', (req, res) => {
        res.send('hola desde update');
})
//************************************************************************************** */


