"use strict";
const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    id: String,
    mail: String,
    username: String,
    password: String
});

let user = mongoose.model('user', userSchema); 

module.exports = user;

