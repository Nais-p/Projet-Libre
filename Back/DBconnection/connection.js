const mongoose = require('mongoose');

const URI = 'mongodb+srv://jacquesliao:123456789Liao@cluster0.zuzob.mongodb.net/test?retryWrites=true&w=majority';

const connectDB = async ()=>{
    await mongoose.connect(URI, { 
        useUnifiedTopology: true, 
        useNewUrlParser: true 
    });
    console.log('DB connection established');
};

module.exports = connectDB;