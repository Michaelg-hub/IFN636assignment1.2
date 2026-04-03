const Task = require('../models/Task');

//this function adds a task to the database.
const addTask = async(req, res) => {
    const {title, description, deadline} = req.body;

    try {
        const task = await Task.create({userId: req.user.id, title, description, deadline});
        res.status(201).json(task);
    } catch (error){
        res.status(500).json({message: error.message});
    }
}

// this function updates an existing task with new information.
const updateTask = async(req, res) => {
    const {title, description, completed, deadline} = req.body;

    try {
        const task = await Task.findById(req.params.id);
        if(!task) return res.status(404).json({message: 'Task not found'});

        task.title = title || task.title;
        task.description = description || task.description;
        task.completed = completed || task.completed;
        task.deadline = deadline || task.deadline;

        const updatedTask = await task.save();
        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

// this function deletes a task.
const deleteTask = async(req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if(!task) return res.status(404).json({message: 'Task not found'});

        await task.remove();
        res.json({message: 'Task deleted'});
    } catch(error){
        res.status(500).json({message: error.message});
    }
}

// this function fetches all tasks related to a user
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({userId: req.user.id});
    } catch (error){
        res.status(500).json({message: error.message});
    }
}

module.exports = {getTasks, addTask, updateTask, deleteTask};