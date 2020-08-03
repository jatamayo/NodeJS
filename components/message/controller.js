const store = require('./store');

/* *****************************************************************
 *  DESCRIPCION: Obtener lista con todos los mensajes añadidos de un usuario
 *  PARAMETROS {user}
 * */
function getMessages(user){
    return new Promise((resolve, reject)=>{
        resolve(store.getMessages(user));
    })
}

/* *****************************************************************
 *  DESCRIPCION: Obtener lista con todos los mensajes añadidos de todos los usuarios
 *  PARAMETROS {}
 * */
function getAllMessages(){
    return new Promise((resolve, reject)=>{
        resolve(store.getAllMessages());
    })
}

/* *****************************************************************
 *  DESCRIPCION: Añadir un nuevo mensaje a nuestra lista de mensajes 
 *  PARAMETROS {user, message}
 * */
function addMessage(user, message){
    return new Promise((resolve, reject)=>{
        if(!user || !message){
            console.log("[message/controller.js - addMessage] - No existe usuario o mensaje");
            reject('Los datos son invalidos');
            return false;
        }else{
            const fullMessage = {
                user: user,
                message: message,
                date: new Date
            }
            store.addMessage(fullMessage);
            resolve(fullMessage);
        }
    })
}

/* *****************************************************************
 *  DESCRIPCION: Actualizar un registro en DB por ID 
 *  PARAMETROS {id, message}
 * */
function updateMessage(id, message){
    return new Promise(async(resolve, reject)=> {
        if(!id || !message){
            console.log("[message/controller.js - updateMessage] - No existe id o mensaje");
            reject("Los datos son invalidos");
            return false;
        }else{
            const result = await store.updateMessage(id, message);
            resolve(result);
        }
    })
}

/* *****************************************************************
 *  DESCRIPCION: Eliminar un registro en DB por ID 
 *  PARAMETROS {id}
 * */
function deleteMessage(id){
    return new Promise(async(resolve, reject)=>{
        if(!id){
            console.log("[message/controller.js - deleteMessage] - No existe el id");
            reject("Los datos son invalidos");
            return false;
        }else{
            const result = await store.deleteMessage(id);
            resolve(result);
        }
    })
}

// Exporsts modules
module.exports = {
    addMessage,
    getMessages,
    getAllMessages,
    updateMessage,
    deleteMessage
}