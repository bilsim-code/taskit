const express =require('express');
const route = express.Router();
const authMiddleware = require('../auth/authMiddleware');
const userModel = require('../models/userModel')


//GET user
route.get('/', authMiddleware, async(req, res) => {
    try {
        const userId = req.userId;
        const user = await userModel.findById(userId);
        if(!user) {
            return res.json({success: false, message: "User Not Available"});
        }
        res.json({success: true, user})
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
})


module.exports = route;