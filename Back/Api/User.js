const express = require('express');
const mongoose = require('mongoose');
const user = require('../DBconnection/user.js')
const route = express.Router();

route.post('/', async (req, res) => {
    const { firstname, lastname, birthday, email, gender, password, phone, address, postal_code, city, security_number } = req.body;
    let user = {};
    user.firstname = firstname;
    user.lastname = lastname;
    user.birthday = birthday;
    user.email = email;
    user.gender = gender;
    user.password = password;
    user.phone = phone;
    user.address = address;
    user.postal_code = postal_code;
    user.city = city;
    user.security_number = security_number;
    
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
})

module.exports = route;