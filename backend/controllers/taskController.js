const Task = require('../models/Task');

//this function adds a task to the database.
const addTask = async(req, res) => {
    const {title, description} = req.body;

    try {
        const task = await Task.create({userId: req.user.id, title, description, deadline});
        res.status(201).json(task);
    } catch (error){
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
