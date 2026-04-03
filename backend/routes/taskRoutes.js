const express = require('express');
const { getTasks, addTask, updateTask, deleteTask } = require('../controllers/taskController');
const router = express.Router();

router.post('/add', addTask);
router.post('/update', updateTask);
router.get('/tasks', getTasks);
router.put('/delete', deleteTask);

module.exports = router;