const store = require('./store');

/**
* 
* @param {*} user 
* @param {*} message 
*/
function addMessage(user, message){

    return new Promise((resolve, error) => {
        if (!user || !message) {
            console.log('[controller - message ] No hay usuario o mensaje')
            reject('Los datos son incorrectos');
            return false;
        } else {
            const fullMessage = {
                user: user,
                message: message,
                date: new Date()
            }
            console.log(fullMessage);
            store.add(fullMessage);
            resolve(fullMessage);
        }
    })
}

/**
 * 
 */
function getMessages(){
    return new Promise((resolve, error) => {
        resolve(store.list());
    })
}


module.exports = {
    addMessage,
    getMessages
};