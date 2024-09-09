const express = require('express');
const route = express.Router();
const tasksModel = require('../models/taskModel');
const authMiddleware = require('../auth/authMiddleware');

//POST /api/tasks/add
route.post('/add', authMiddleware, async(req, res) => {
    try {
        const {title, description, priority, status, dueDate} = req.body;
        
    } catch (error) {
        
    }
})

//POST /api/tasks/edit/:id
route.post('/edit/:id', authMiddleware, async(req, res) => {
    try {
        
    } catch (error) {
        
    }
})

//POST /api/tasks/delete/:id
route.post('/delete/:id', authMiddleware, async(req, res) => {
    try {
        
    } catch (error) {
        
    }
})


module.exports = tasksModel;