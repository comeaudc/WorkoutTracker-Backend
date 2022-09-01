const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    muscleGroup: String,
    date: Date,
    workout: [{
        type: Object
    }]
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout;