//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
  if(err){
    return console.log('Unbale to connect to mongo db server');
  }
  console.log('connected to mongo-db server');

  db.collection('Todos').insertOne({
    text:'Something to do ',
    completed:false
  },(err,result) =>{
    if(err){
      return console.log('undable tto insert',err);
    }

    console.log(JSON.stringify(result.ops,undefined,2));
  });
  db.close();

});
