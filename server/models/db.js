var mongoose = require('mongoose');
var DB_URL = process.env.DB_URL || 'mongodb://127.0.0.1:27017/empCtrl';
mongoose.connect(DB_URL);

/* eslint-disable no-console */

mongoose.connection.on('connected', function () { 
 console.log(`Mongoose connected to ${DB_URL}`); 
}); 

mongoose.connection.on('error', function (err) { 
 console.log(`Mongoose connection error: ${err}`); 
}); 

mongoose.connection.on('disconnected', function () { 
 console.log('Mongoose disconnected'); 
});