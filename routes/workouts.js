const express = require('express')
const {
    createWorkout,
    getallWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
}  = require('../controllers/workoutcontrollers')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

//require auth for all workout routes
router.use(requireAuth)


// get all workouts
router.get('/', getallWorkouts)


//get a single workout
router.get('/:id', getWorkout)


//delete a single workout
router.delete('/:id', deleteWorkout)


//create a single workout
router.post('/', createWorkout)


//update a single workout
router.patch('/:id', updateWorkout)

module.exports = router