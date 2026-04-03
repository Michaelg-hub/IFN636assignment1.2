const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true},
    completed: {type: Boolean, default: false},
    deadline: {type: Date}
});

module.exports = mongoose.model('Task', taskSchema);