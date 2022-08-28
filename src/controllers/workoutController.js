const getAllWorkout = (req, res) => {
    res.send('Get all Workouts')
}

const getOneWorkout = (req, res) => {
    res.send('Get one workout')
}

const createNewWorkout = (req, res) => {
    res.send('Create a new workout')
}

const updateOneWorkout = (req, res) => {
    res.send('update an existing workout')
}

const deleteOneWorkout = (req, res) => {
    res.send('Delete on existing workout')
}

module.exports = {
    getAllWorkout,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}
