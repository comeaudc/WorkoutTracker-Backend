const express = require('express');
const router = express.Router();
const Workout = require("../models/workout")
const Exercise = require("../models/exercise")

// Exercise Index Route
router.get('/exercises', (req, res)=>{
    Exercise.find({}, (err, foundExercises) => {
        res.json(foundExercises);
    });
});
// Exercise Create Route
router.post('/exercises', (req, res)=>{
    Exercise.create(req.body, (err, createdExercise)=>{
        res.json(createdExercise);
    });
});
//Exercise Show Route
router.get('/exercises/:id', (req, res)=>{
    Exercise.findById(req.params.id, (err, foundExercise) => {
        res.json(foundExercise);
    });
});
// Exercise Delete Route
router.delete('/exercises/:id', (req, res)=>{
    Exercise.findByIdAndRemove(req.params.id, (err, deleteExercise)=>{
        res.json(deleteExercise);
    });
});

// Workout Index Route
router.get('/history', (req, res)=>{
    Workout.find({}, (err, foundWorkout)=>{
        res.json(foundWorkout);
    });
});
// Workout Index Route
router.get('/inprogress/', (req, res)=>{
    Workout.find({}, (err, foundWorkout)=>{
        res.json(foundWorkout);
    });
});
// Workout Create Route
router.post('/history', (req, res)=>{
    Workout.create(req.body, (err, createdWorkout)=>{
        res.json(createdWorkout);
    });
});
//Workout Show Route
router.get('/history/:id', (req, res)=>{
    Workout.findById(req.params.id, (err, foundWorkout) => {
        res.json(foundWorkout);
    });
});
// Workout Delete Route
router.delete('/history/:id', (req, res)=>{
    Workout.findByIdAndRemove(req.params.id, (err, deletedWorkout)=>{
        res.json(deletedWorkout);
    });
});

// Workout update Route
router.put('/history/:id', (req, res)=>{
    Workout.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedWorkout)=>{
        res.json(updatedWorkout);
    });
});

module.exports = router;