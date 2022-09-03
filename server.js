// Dependencies
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const db = mongoose.connection

// Models
const Exercise = require('./models/exercise')
const Workout = require('./models/workout')

// Seeding Data
const exerciseData = require('./utilities/exerciseData')
const workoutData = require('./utilities/workoutData')

// Environment Variables (getting ready for Heroku)
const app = express();
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/merncrud'
const PORT = process.env.PORT || 3001

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
  () => console.log('MongoDB connection established:', mongoURI)
)

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

// Middleware 
app.use(cors())
app.use(express.urlencoded({ extended: false }))// extended: false - does not allow nested objects in query strings
app.use(express.json()); //use .json(), not .urlencoded()
app.use(express.static('public')) // we need to tell express to use the public directory for static files... this way our app will find index.html as the route of the application! We can then attach React to that file!

//Routes
const trackerController = require('./controllers/trackerRouter')
app.use('/tracker', trackerController)

// Exercise Seed Route
app.get("/seedexercise", async (req, res) => {
  await Exercise.deleteMany({});
  await Exercise.create(exerciseData);
  res.redirect('/');
})

// Work Out Seed Route
app.get("/seedworkout", async (req, res) => {
  await Workout.deleteMany({});
  await Workout.create(workoutData);
  res.redirect('/');
})

app.listen(PORT, () => {
  console.log('Listening on Port:', PORT)
})