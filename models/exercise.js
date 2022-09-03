const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    focus: String,
    name: String,
    sets: Number,
    reprange: String,
    reps: [{
        type: Number
    }],
    weight: [{
        type: Number
    }]
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise;