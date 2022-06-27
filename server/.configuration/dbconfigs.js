'use strict';
require('dotenv').config();
const db = require('./config');
const {mongoose,connectionString} = db;

const connection = ()=>{
    console.log('attempting to connect')
try{
    mongoose.connect(connectionString, {
        useNewUrlParser: "true",
      })
      mongoose.connection.on("error", err => {
        console.log("err", err)
      })
      mongoose.connection.on("connected", (err, res) => {
        console.log("mongoose is connected")
      })
}catch(err){
    console.log(err)
}
}

module.exports = connection