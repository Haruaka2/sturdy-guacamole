// File that determines the schema used by the List Collection
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new mongoose.Schema({
    focus: {
        required: true,
        type: String
    },
    isMain: {
        required: true,
        type: Boolean
    },
    tasks: {
        type: [{type: Schema.Types.ObjectId, ref: 'task'}]
    }
});

// Schema Export
module.exports = mongoose.model('List', listSchema, 'lists');