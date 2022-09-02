const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const v1workoutRoutes = require('./v1/routes/workoutRoutes')


app.use(bodyParser.json())
app.use('/api/v1/workouts', v1workoutRoutes)

const PORT  = 3000 || process.env.PORT
app.listen(PORT, ()=>{
    console.log(`Serve running on http://localhost:${PORT}`)
})