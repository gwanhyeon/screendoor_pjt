'use strict'
var mongoose = require('mongoose');

var user= new mongoose.Schema({
    id :{
    user_id:"",
    user_password:"",
    user_name : "",
    user_age: 0
    }
    
})

module.exports = mongoose.model('User',user);