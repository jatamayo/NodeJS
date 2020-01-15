/**
 * MONGOOSE: Permite crear esquemas por software, 
 * por codigo para nuestra base de datos y poder definir y cambiar 
 * nuestros esquemas de forma muy sencilla, 
 * se encarga de hacer la validacion de datos para prevenir ataques en nuestra informacion 
 */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mySchema = new Schema({
    user: String,
    message: {
        type: String,
        required: true
    },
    date: Date
});

// Guardar en la base de datos y en el squema message
const model = mongoose.model('Message', mySchema);
module.exports = model;
