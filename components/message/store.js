const db = require('mongoose');
const Model = require('./model');
// DB Conexion
// mongodb+srv://db_user_nodeJS:<password>@cluster0.swsm0.mongodb.net/<dbname>?retryWrites=true&w=majority
const USER = 'db_user_nodeJS';
const PASSWORD = 'N7K917rbbKkD66Xr';
const SERVER = 'cluster0.swsm0.mongodb.net';
const DB_NAME = 'nodeJS_telegrom';
const URL = 'mongodb+srv://'+USER + ':'+PASSWORD+'@'+SERVER+'/'+DB_NAME+'?retryWrites=true&w=majority'
//
db.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
console.log('[message/store.js] - DB conectada con exito');

/* *****************************************************************
 *  DESCRIPCION: Obtener lista con todos los mensajes añadidos de un usuario
 *  PARAMETROS: {user}
 * */
async function getMessages(user){
    let filter = {};
    if(filter !== null){
        filter = {user: user};
    }
    const messages = await Model.find(filter);
    return messages; 
}

/* *****************************************************************
 *  DESCRIPCION: Obtener lista con todos los mensajes añadidos de todos los usuarios
 *  PARAMETROS: {}
 * */
async function getAllMessages(){
    const messages = await Model.find();
    return messages; 
}

/* *****************************************************************
 *  DESCRIPCION: Añadir un nuevo mensaje a nuestra lista de mensajes 
 *  PARAMETROS: {message}
 * */
function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save();
}

/* *****************************************************************
 *  DESCRIPCION: Actualizar un registro en DB por ID 
 *  PARAMETROS: {message}
 * */
async function updateMessage(id, message){
    const foundMessage = await Model.findOne({
        _id:id
    });
    //
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

/* *****************************************************************
 *  DESCRIPCION: Eliminar un registro en DB por ID 
 *  PARAMETROS: {id}
 * */
async function deleteMessage(id){
    return Model.deleteOne({
        _id: id
    });
}

// Exporsts modules
module.exports = {
    addMessage,
    getMessages,
    getAllMessages,
    updateMessage,
    deleteMessage
}