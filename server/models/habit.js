'use strict';
// import bcrypt to hash passwords

// import my configurations from ../.configuration/config
const config = require('../.configuration/config');

// deconstruct configuration
const { mongoose } = config;

const HabitSchema = new mongoose.Schema({
    habit_name: {
        type: String,
        required: true,
    },
    habit_type: {
        type: Boolean,
        default: false,
        required: true,
    },
    habit_creation_date: {
        type: Date,
        required: true,
    },
    habit_target_date:{
        type: Date,
        required: true,
    }

})

const model = mongoose.model('habit', HabitSchema);
module.exports = model; 
