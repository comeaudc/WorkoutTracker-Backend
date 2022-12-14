const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    muscleGroup: String,
    date: Date,
    exercises: [{
        type: Object
    }],
    complete: Boolean
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout;