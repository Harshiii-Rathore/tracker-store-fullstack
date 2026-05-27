const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  time: {
    type: String,
    required: true
  },

  priority: {
    type: String,
    default: "Medium"
  },

  status: {
    type: String,
    default: "Pending"
  },

  deadline: {
    type: String,
    default: "Today"
  }

}, {
  timestamps: true
});

module.exports = mongoose.model("Task", taskSchema);
