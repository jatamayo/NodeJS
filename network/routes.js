// Este documento sera nuestro servidor de rutas
const express = require('express');
const message = require('../components/message/network');

const routes = (server) => {
    server.use('/message', message);
}

module.exports = routes;