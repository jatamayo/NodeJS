// Aqui tendremos nuestra capa de respuestas de red
// con este archivo podremos estandarizar las respuetas de nuestras peticiones
//----------------------------------------------------------------------------
exports.success = (req, res, message, status) => {
    res.status(status || 200).send({
        error: "",
        body: message
    });
}

exports.error = (req, res, message, status, details) => {
    console.error('[response.js ERROR]' + details);
    res.status(status || 500).send({
        error: message,
        body: ""
    });
}