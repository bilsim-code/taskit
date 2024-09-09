const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tasksSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    priority: {
        type: String,
        required: true,
        enum: ["Low", "Medium", 'High'],
        default: "Low"
    },
    status: {
        type: String,
        required: true,
        enum: ["Pending", "In-Progress", "Completed"],
        default: "Pending",
    },
    dueDate: {
        type: Date,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    }
})

const tasksModel = mongoose.model('tasks', tasksSchema);
module.exports = tasksModel;