const db = require('mongoose');
const Model = require('./model');


db.Promise = global.Promise;

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://user:user123456@cluster0-d2tal.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});



console.log('[db] Conectada con exito');

/**
 * 
 * @param {*} message 
 */
function addMessage(message){
    const myMessage = new Model(message);
    myMessage.save();
    console.log("enviada correctamente");
}

/**
 * 
 */
function getMessages(){
    return list;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    //get
    //update
    //delete
}