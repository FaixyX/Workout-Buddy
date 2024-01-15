require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const cors = require('cors')
const userRoutes = require('./routes/user')

// express app
const app = express()

 // Vercel link allow
 app.use(cors({
  origin: 'https://workout-buddy-frontend-eight.vercel.app',
  methods: ['GET', 'POST'], // Add other methods as needed
  credentials: true, // Enable credentials (cookies, authorization headers)
}));


// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)


// connect to db
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('connected to db & listening on port', process.env.PORT)
    })
  })
  .catch((error) => {
    console.log(error)
  })

