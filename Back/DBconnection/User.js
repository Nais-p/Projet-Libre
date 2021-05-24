const mongoose = require('mongoose');

const user = new mongoose.Schema({
    firstname: {
        type:String,
    },
    lastname: {
        type:String,
    },
    birthday: {
        type:String,
    },
    email: {
        type:String,
    },
    gender: {
        type:String,
    },
    password: {
        type:String,
    },
    phone: {
        type:Number,
    },
    address: {
        type:String,
    },
    postal_code: {
        type:Number,
    },
    city: {
        type:String,
    },
    security_number: {
        type:Number,
    }

});

module.exports = User = mongoose.model('user', user);