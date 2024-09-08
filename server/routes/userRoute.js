const express = require('express');
const route = express.Router();
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); 
const validator = require('validator')

//POST login
route.post('/login', async(req, res) => {
    try {
        const {username, password} = req.body;
        const user = await userModel.findOne({username});
        if(!user) {
            return res.json({success: false, message: "User doesn't exist"});
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword) {
            return res.json({success: false, message: "Password is Invalid.Please try again..."});
        }

        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
        res.json({success: true, token, message: "Successfully Logged in"});
       // res.redirect('/');
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
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

        res.json({success: true, token, message: "Successfully registered!"})
    } catch (error) {
        if(error.code === 11000) {
           return res.json({success: false, message: "User already exists"})
        }
        res.json({success: false, message: "Server Error"});
        console.log(error);
    }
})

module.exports = route;