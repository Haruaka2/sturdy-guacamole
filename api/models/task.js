// File that determines the schema used by the List Collection
const mongoose = require('mongoose');

// Avaliable Schemas
const taskSchema = new mongoose.Schema({
    taskName: {
        required: true,
        type: String
    },
    isCompleted: {
        required: true,
        type: Boolean
    }
});

// Schema Export
module.exports = mongoose.model('Task', taskSchema, 'tasks');