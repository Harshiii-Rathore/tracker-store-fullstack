const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const Task = require("./models/Task");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)

.then(() => {
  console.log("MongoDB Connected");
})

.catch((error) => {
  console.log(error);
});

app.get("/", (req, res) => {
  res.send("Tracker Store API Running");
});

/*
  GET TASKS
*/

app.get("/tasks", async (req, res) => {

  try {

    const tasks = await Task.find();

    res.json(tasks);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

/*
  CREATE TASK
*/

app.post("/tasks", async (req, res) => {

  try {

    const { title, time } = req.body;

    if (!title || !time) {

      return res.status(400).json({
        message: "All fields are required"
      });

    }

    const newTask = new Task({
      title,
      time
    });

    const savedTask = await newTask.save();

    res.status(201).json(savedTask);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});