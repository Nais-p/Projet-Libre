const mongoose = require('mongoose');

const doctor = new mongoose.Schema({
    firstname: {
        type:String,
    },
    lastname: {
        type:String,
    },
    gender: {
        type:String,
    },
    profession: {
        type:String,
    },
    address: {
        type:String,
    },
    postal_code: {
        type:Number,
    },
    phone: {
        type:Number,
    },
    city: {
        type:String,
    }
});

module.exports = Doctor = mongoose.model('doctor', doctor);