const store = require('./store');

module.exports = {
    addMessage,
    getMessages
}

/* *****************************************************************
 *  Description: Añadir un nuevo mensaje a nuestra lista de mensajes 
 *  Parameters {user, message}
 * */
function addMessage(user, message){
    return new Promise((resolve, reject)=>{
        if(!user || !message){
            console.log("[message/controller.js] - No existe usuario o mensaje");
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
 *  Description: Obtener lista con todos los mensajes añadidos 
 *  Parameters {}
 * */
function getMessages(){
    return new Promise((resolve, reject)=>{
        resolve(store.getMessages());
    })
}