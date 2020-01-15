/**
* RESPONSE.JS maneja nuestras respuestas
*/

/**
*   RESPONSE:       {error: error_message, body: success_message} 
*/
exports.success = (req, res, message, status) => {
    //
    res.status(status || 200).send({
        error: '',
        body: message
    });
}

/**
*   RESPONSE:       {error: error_message, body: success_message} 
*/
exports.error = (req, res, message, status, error) => {
    console.log(error);
    res.status(status || 500).send({
        error: message,
        body: ''
    });
}

