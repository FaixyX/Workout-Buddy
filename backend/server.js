require('dotenv').config()
const path = require("path")
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const cors = require('cors')
const userRoutes = require('./routes/user')

// express app
const app = express()

 // Vercel link allow
app.use(cors({
  origin: 'https://workout-buddy-faixyxs-projects.vercel.app',
  methods: ["POST", "GET"]
}))


// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "../frontend/build/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});

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

