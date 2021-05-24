const express =require('express');
const connectDB = require('./DBconnection/connection.js');
const app = express();

connectDB();

app.use(express.json({ extended: false }));
app.use('/api/userModel', require('./Api/User'));
app.use('/api/doctorModel', require('./Api/Doctor'));
app.use('/api/patientModel', require('./Api/Patient'));
const Port = process.env.PORT || 3000;

app.listen(Port, () => console.log('Serveur started'));