const express = require("express");
const route = express.Router();
const tasksModel = require("../models/taskModel");
const authMiddleware = require("../auth/authMiddleware");

//POST /api/tasks/add
route.post("/add", authMiddleware, async (req, res) => {
  try {
    const { title, description, priority, status, dueDate } = req.body;
    const userId = req.body.userId;
    
    if (
      title.trim() === "" ||
      description.trim() === "" ||
      priority.trim() === "" ||
      status.trim() === "" ||
      dueDate.trim() === ""
    ) {
      return res.json({ success: false, message: "Fill in all the fields" });
    }

    const data = await tasksModel.create({
        title,
        description,
        priority,
        status,
        dueDate,
        userId
    })

    res.json({success: true, data});

  } catch (error) {
    console.log(error);
    res.json({success: false, message: "Error Creating task"})
  }
});

//POST /api/tasks/edit/:id
route.post("/edit/:id", authMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    const userId = req.body.userId;
    const data = await tasksModel.findByIdAndUpdate({_id: id, userId}, {
        title: req.body.title,
        description: req.body.description,
        priority: req.body.priority,
        status: req.body.status,
        dueDate: req.body.dueDate
    })

    res.json({success: true, message: "Edited Successfully!!"});
  } catch (error) {
    console.log(error);
    res.json({success: false, message: "Error Editing Task"})
  }
});

//POST /api/tasks/delete/:id
route.post("/delete/:id", authMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    const userId = req.body.userId;
    const data = await tasksModel.findByIdAndDelete({_id: id, userId});
    res.json({success: true, message: "Deleted Successfully"})
  } catch (error) {
    console.log(error);
    res.json({success: false, message: "Error Deleting Task"})
  }
});

module.exports = route;
