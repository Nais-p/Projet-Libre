const express = require('express');
const mongoose = require('mongoose');
const patient = require('../DBconnection/patient.js');
const route = express.Router();

route.post('/', async (req, res) => {
    const { id_user, id_doctor, diagnostic, prescription } = req.body;
    let patient = {};
    patient.id_user = id_user;
    patient.id_doctor = id_doctor;
    patient.diagnostic = diagnostic;
    patient.prescription = prescription;
    
    let patientModel = new Patient(patient);
    await patientModel.save();
    res.json(patientModel);
})

module.exports = route;