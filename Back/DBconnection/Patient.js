const mongoose = require('mongoose');

const patient = new mongoose.Schema({
    id_user: {
        type:String,
    },
    id_doctor: {
        type:String,
    },
    diagnostic: {
        type:String,
    },
    prescription: {
        type:String,
    }
});

module.exports = Patient = mongoose.model('patient', patient);