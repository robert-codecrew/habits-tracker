'use strict';
require('dotenv').config();
const db = require('./config');
const {mongoose,connectionString} = db;

const connection = ()=>{
    console.log('attempting to connect')
try{
    mongoose.connect(connectionString,(err)=>{
        if(err){
            console.log(err.message)
        }else{
            console.log('success!!')
        }
    })
}catch(err){
    console.log(err)
}
}

module.exports = connection