const mongoose = require('mongoose');

var Login = new mongoose.Schema( {
    userName: {
        type: String,
        required: "this field is required"
    },
   
    password: {
        type: String,
        required: "this field is required"
    }
});

var userModel = mongoose.model('Login', Login);
module.exports = userModel;