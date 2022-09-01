const express = require('express');
const router = express.Router();
const Workout = require("../models/workout")
const Exercise = require("../models/exercise")

// Exercise Index Route
router.get('/', (req, res)=>{
    Exercise.find({}, (err, foundWorkout)=>{
        res.json(foundTodos);
    });
});

// Exercise Create Route
router.post('/', (req, res)=>{
    Exercise.create(req.body, (err, createdWorkout)=>{
        res.json(createdTodo); //.json() will send proper headers in response so client knows it's json coming back
    });
});

// Delete Route
router.delete('/:id', (req, res)=>{
    Workout.findByIdAndRemove(req.params.id, (err, deletedWorkout)=>{
        res.json(deletedTodo);
    });
});

// update Route
router.put('/:id', (req, res)=>{
    Workout.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedTodo)=>{
        res.json(updatedTodo);
    });
});

module.exports = router;