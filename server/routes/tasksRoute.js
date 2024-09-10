const express = require("express");
const route = express.Router();
const tasksModel = require("../models/taskModel");
const userModel = require("../models/userModel");
const authMiddleware = require("../auth/authMiddleware");

//GET /api/tasks
route.get("/", authMiddleware, async (req, res) => {
  try {
    const userId = req.userId;
    const user = await userModel.findById({ _id: userId });
    const data = await tasksModel.find({ userId }).sort({ updatedAt: -1 });
    res.json({ success: true, data, message: "Fetched" });
    if (!user) {
      res.json({ success: false, message: "User doesn't exist" });
    }
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error Getting Tasks" });
  }
});

//GET /api/tasks/:id
route.get("/:id", authMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    const userId = req.userId;
    const data = await tasksModel.findOne({ _id: id, userId });
    if (!data) {
      return res.json({ success: false, message: "Task Not Found" });
    }
    res.json({ success: true, data });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error fetching task" });
  }
});

//POST /api/tasks/add
route.post("/add", authMiddleware, async (req, res) => {
  try {
    const { title, description, priority, status, dueDate } = req.body;
    const userId = req.userId;

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
      userId,
    });

    res.json({ success: true, data, message: "Task Created" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error Creating task" });
  }
});

//POST /api/tasks/edit/:id
route.post("/edit/:id", authMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    const userId = req.userId;
    const data = await tasksModel.findByIdAndUpdate(
      { _id: id, userId },
      {
        title: req.body.title,
        description: req.body.description,
        priority: req.body.priority,
        status: req.body.status,
        dueDate: req.body.dueDate,
        updatedAt: Date.now(),
      },
      { new: true }
    );

    res.json({ success: true, message: "Edited Successfully!!" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error Editing Task" });
  }
});

//POST /api/tasks/delete/:id
route.post("/delete/:id", authMiddleware, async (req, res) => {
  try {
    const id = req.params.id;
    const userId = req.userId;
    const data = await tasksModel.findByIdAndDelete({ _id: id, userId });
    res.json({ success: true, message: "Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error Deleting Task" });
  }
});

module.exports = route;
