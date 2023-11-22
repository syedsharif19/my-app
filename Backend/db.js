// let MongoClient = require('mongodb').MongoClient;
// MongoClient.connect('mongodb://localhost:27017', function(err, client){
//   if(err) throw err;
//   let db = client.db('test');
//   db.collection('devices').find().toArray(function(err, result){
//     if(err) throw err;
//     console.log(result);
//     client.close();
//     });
//  });

//  const mongoose = require("mongoose");

// const connection =

//   "mongodb://localhost:27017";

// mongoose.connect(connection, {

//     useNewUrlParser: true,

//     useUnifiedTopology: true,

//     useFindAndModify: false,

//   })

//   .then(() => console.log("Database Connected Successfully"))

//   .catch((err) => console.log(err));
// const mongoose = require('mongoose');

//   const mongoURI = 'mongodb://127.0.0.1:27017/admin';
// async function connectToMongo() {
//   try {
//     await mongoose.connect(mongoURI);
//     console.log('Connected to MongoDB successfully!');
//   } catch (error) {
//     console.log(error);
//   }
// }