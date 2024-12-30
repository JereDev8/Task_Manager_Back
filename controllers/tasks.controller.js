import { Task } from "../models/Task.js";
import { query, validationResult } from "express-validator";


export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching tasks." });
  }
};

export const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found." });
    }

    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching the task." });
  }
};

export const postTask = async (req, res) => {
  try {
    const result = validationResult(req);
    if(result.isEmpty() == false){
      return res.status(400).json({ message: 'The "title" parameter is required' });
    }

    const { title, description } = req.body;

    const newTask = await Task.create({ title, description:description });
    await newTask.save();

    res.status(201).json({ message: "Task created successfully" });
  } catch (error) {  
    console.error(error);
    res.status(500).json({ message: "An error occurred while creating the task." });
  }
};

export const putTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    if (!title && !description && completed == undefined) {
      return res.status(400).json({
        message: "At least one of 'title', 'description', or 'completed' is required.",
      });
    }

    const updateData = {};
    if (title) updateData.title = title;
    if (description) updateData.description = description;
    if (completed != undefined) updateData.completed = completed;

    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { $set: updateData },
      { new: true, runValidators: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found." });
    }

    res.status(200).json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while updating the task." });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTask = await Task.findByIdAndDelete(id);

    if (!deletedTask) {
      return res.status(404).json({ message: "Task not found." });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while deleting the task." });
  }
};
