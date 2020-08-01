module.exports = {
    addMessage,
    getMessages
}
const list = [];


function addMessage(message){
    list.push(message);
}

function getMessages(){
    return list;
}