const express = require('express');
const route = express.Router();
const userModel = require('../models/userModel');

//GET LOGIN
route.get('/login', async(req, res) => {
    res.send("Hi, it's me")
})

module.exports = route;