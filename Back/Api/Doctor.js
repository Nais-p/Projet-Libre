const express = require('express');
const mongoose = require('mongoose');
const user = require('../DBconnection/doctor.js')
const route = express.Router();

route.post('/', async (req, res) => {
    const { firstname, lastname, gender, profession, address, postal_code, phone, city} = req.body;
    let doctor = {};
    doctor.firstname = firstname;
    doctor.lastname = lastname;
    doctor.gender = gender;
    doctor.profession = profession;
    doctor.address = address;
    doctor.postal_code = postal_code;
    doctor.phone = phone;
    doctor.city = city;
    
    let doctorModel = new Doctor(doctor);
    await doctorModel.save();
    res.json(doctorModel);
})

module.exports = route;