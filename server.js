// Depencies
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require("morgan");
const holiday = require('./models/Holidays')


//Configuration
const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://localhost:27017/holiday'
mongoose.connect(MONGO_URI, {}, ()=> { console.log('connected to mongoDB')})
const app = express()
const port = process.env.PORT ?? 3000

//Middleware
app.use(express.json())
app.use(morgan("dev"));
app.use(cors());


app.get('/',(req,res) => {
    res.send({ msg: 'test from backend'})
})



app.get('/holidays', (req,res) => {

})



app.listen(port, ()=>{
    console.log('Express listening to ' + port)
})

