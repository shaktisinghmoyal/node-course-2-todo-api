//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) =>{
  if(err){
    return console.log('Unbale to connect to mongo db server');
  }
  console.log('connected to mongo-db server');

  // db.collection('Todos').find({_id:new ObjectID('5b37536f5b7c473a408c6432')}).toArray().then((docs) => {
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err) =>{
  //   console.log('unable to fetch todos',err);
  // })
  // db.close();

  db.collection('Todos').find().count().then((count) => {
    console.log("Todos Count ${count}");
  },(err) =>{
    console.log('unable to fetch todos',err);
  })
  db.close();
});
