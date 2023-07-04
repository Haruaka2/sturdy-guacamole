// File that determines the schema used by the List Collection
const mongoose = require('mongoose');

// Avaliable Schemas
const paletteSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    isMain: {
        required: true,
        type: Boolean
    },
    lightColor: {
        required: true,
        type: String
    },
    mainColor: {
        required: true,
        type: String
    },
    darkColor: {
        required: true,
        type: String
    }
})

// Schema Export
module.exports = mongoose.model('Palette', paletteSchema, 'palettes');