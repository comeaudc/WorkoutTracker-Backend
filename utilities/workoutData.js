const workoutData = [
    { 
        muscleGroup:    'Chest', 
        exerises:       [{focus: "Chest", name: 'BenchPress', sets: 3, reps: [6, 6, 6], weight: [135, 145, 150]},
        {focus: "Chest", name: 'DB Shoulder Press', sets: 3, reps: [10, 10, 10], weight: [30, 30, 35]},
        {focus: "Chest", name: 'Weighted Dips', sets: 3, reps: [12, 15, 15], weight: [25, 25, 25]},
        {focus: "Chest", name: 'Incline Fly', sets: 3, reps: [10, 12, 12], weight: [30, 35, 30]},
        {focus: "Chest", name: 'DB Skull Crusher', sets: 3, reps: [12, 12, 12], weight: [30, 35, 30]},
        {focus: "Chest", name: 'DB Lat Raise', sets: 3, reps: [15, 15, 15], weight: [30, 35, 30]},
        {focus: "Abs", name: 'Ab Roller', sets: 3, reps: [6, 6, 6], weight: [0, 0, 0, 0]}]
}
]

module.exports = workoutData;

// const workoutData = [
//     {focus: pull, 
//         exercise: {name: '1-arm Lat Pull In', sets: 2, reps: "20", weight: 20},
//         exercise: {name: 'Pull-Up', sets: 4, reps: "6-8", weight: 130},
//         exercise: {name: 'Pendlay Row', sets: 3, reps: "8-10", weight: 95},
//         exercise: {name: 'HighRow', sets: 3, reps: "10-12", weight: 85},
//         exercise: {name: 'Seated Face Pull', sets: 3, reps: "20", weight: 20},
//         exercise: {name: 'Supinated EZ-Bar Curl', sets: 3, reps: "20", weight: 50},
//         exercise: {name: 'DB Preacher Curl', sets: 3, reps: "12", weight: 12.5}
//     },
//     {focus: push, 
//         exercise: {name: 'Bench Press', sets: 3, reps: "4", weight: 135},
//         exercise: {name: 'DB Seated Shoulder Press', sets: 3, reps: "8-10", weight: 30},
//         exercise: {name: 'Weighted Dipa', sets: 3, reps: "8-10", weight: 95},
//         exercise: {name: 'HighRow', sets: 3, reps: "10-12", weight: 85},
//         exercise: {name: 'Seated Face Pull', sets: 3, reps: "20", weight: 20},
//         exercise: {name: 'Supinated EZ-Bar Curl', sets: 3, reps: "20", weight: 50},
//         exercise: {name: 'DB Preacher Curl', sets: 3, reps: "12", weight: 12.5}
//     },
//     {focus: legs}
// ]