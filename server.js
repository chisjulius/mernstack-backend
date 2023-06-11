require('dotenv').config()

const express = require ('express')
const mongoose = require ('mongoose')
const workoutRoutes = require('./routes/workouts') 
const userRoutes = require('./routes/user') 


// express app
const app = express()

//middleware
app.use(express.json())



app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "OPTIONS, GET, POST, PUT, PATCH, DELETE"
    );
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    if (req.method === "OPTIONS") {
      return res.sendStatus(200);
    }

    console.log(req.path, req.method)
    next()
})



app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)


//connect to db
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    //listen for requests
    app.listen(process.env.PORT, () =>{
    console.log("connected to db and listening to port", process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})
