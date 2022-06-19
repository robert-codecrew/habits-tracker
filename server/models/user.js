'use strict';
// import bcrypt to hash passwords

// import my configurations from ../.configuration/config
const config = require('../.configuration/config');

// deconstruct configuration
const {mongoose} = config;

const UserSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true,
        index:{unique:true},
        maxLength: 30,
        minLength:8,

    },
    password: {
        type:String,
        required: true,
        maxLength: 45,
        minLength:8,
    },
    email: {
        type:String,
        index:{unique:true},
        required: true,
        maxLength: 45,
    },
    role:{
        type:String,
        default:"member",
    }
})

const model = mongoose.model('user',UserSchema)
module.exports=model;