const express = require('express');
const route = express.Router();
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
const validator = require('validator')

//POST login
route.post('/login', async(req, res) => {
    try {
        
    } catch (error) {
        
    }
})

//POST register
route.post('/register', async(req, res) => {
    try {
        const {username, password, email} = req.body;
        if(username.trim() === 0 || password.trim() === 0 || email.trim() === 0) {
           return res.json({success: false, message: "Please fill in all the values"});
        }

        //password validator
        if(!validator.isStrongPassword(password)) {
            return res.json({success: false, message: "Please enter a strong password"})
        }

        //email validator
        if(!validator.isEmail(email)) {
            return res.json({success: false, message: "Please enter a valid email address"});
        }

        //hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            username,
            password: hashedPassword,
            email,
        })

        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);

    } catch (error) {
        if(error.code === 11000) {
           return res.json({success: false, message: "User already exists"})
        }
        res.json({success: false, message: "Server Error"});
    }
})

module.exports = route;