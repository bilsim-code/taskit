const express = require('express');
const route = express.Router();
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jwt');

//GET LOGIN
route.get('/login', async(req, res) => {
    
})

module.exports = route;