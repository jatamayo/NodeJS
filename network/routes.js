/**
 * ROUTES.JS define las rutas de nuestra api
 * 
 */
const message = require('../components/message/network'); // componente - rutas - menssage


const routes = (server) => {
    server.use('/message', message);
}

module.exports = routes;
