const express = require ('express')
const {
    createWorkout, getWorkout, getWorkouts, deleteWorkout, updateWorkout
} = require('../controllers/workoutController')
const requireAuth = require('../middleware/requireAuth')
const router = express.Router()

// Require Authorizaztion for all workout Routes
router.use(requireAuth)

// Function to GET the all workouts
router.get('/', getWorkouts)

// Function to GET the single workouts
router.get('/:id', getWorkout)

// Function to POST a new workouts
router.post('/', createWorkout)

// Function to DELETE the workout
router.delete('/:id', deleteWorkout)

// Function to Update the workout
router.patch('/:id', updateWorkout)

module.exports = router